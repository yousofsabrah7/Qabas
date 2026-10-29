import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowRight, FiPlusCircle, FiTrash2, FiUpload, FiX } from "react-icons/fi";
import ProjectPreviewModal from "../components/ProjectPreviewModal";
import {
  readManagedProjects,
  saveManagedProjects,
} from "../services/projects";

const emptyProject = {
  name: "",
  englishName: "",
  field: "",
  stage: "",
  idea: "",
  description: "",
  website: "",
  instagram: "",
  facebook: "",
  whatsapp: "",
};
const categories = ["منتجات يدوية", "التكنولوجيا", "التعليم", "الصحة", "التجارة", "الزراعة", "التصميم", "أخرى"];
const inputStyle = "h-11 w-full rounded-lg border border-[#D9DDE2] bg-white px-3 text-[13px] text-[#14223B] outline-none placeholder:text-[#A1A8B3] focus:border-[#B8943F] focus:ring-2 focus:ring-[#B8943F]/15";
const textareaStyle = `${inputStyle} h-auto min-h-[84px] resize-y py-3 leading-7`;
const blankMember = () => ({ name: "", role: "" });

async function persistImage(image) {
  if (typeof image === "string") return image;

  const bitmap = await createImageBitmap(image);
  const scale = Math.min(1, 1000 / bitmap.width, 700 / bitmap.height);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext("2d");

  if (!context) {
    bitmap.close();
    throw new Error("تعذر تجهيز الصورة في هذا المتصفح.");
  }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.72)
  );

  if (!blob || blob.size > 180 * 1024) {
    throw new Error(
      "الصورة كبيرة على التخزين المحلي. اختر صورة أصغر."
    );
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("تعذر قراءة الصورة."));
    reader.readAsDataURL(blob);
  });
}

function Section({ title, description, children }) {
  return (
    <section className="rounded-xl border border-[#E2E3E6] bg-white px-5 py-6 sm:px-8 lg:px-10">
      <div className="mb-5 text-right">
        <h2 className="text-lg font-bold text-[#14223B]">{title}</h2>
        {description && <p className="mt-1 text-xs leading-6 text-[#858C98]">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function Label({ children, required = false }) {
  return <label className="mb-2 block text-right text-[13px] font-semibold text-[#14223B]">{children}{required && <span className="mr-1 text-red-500">*</span>}</label>;
}

function useImageSrc(image) {
  const [src, setSrc] = useState(typeof image === "string" ? image : "");
  useEffect(() => {
    if (!image) { setSrc(""); return; }
    if (typeof image === "string") { setSrc(image); return; }
    const url = URL.createObjectURL(image);
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);
  return src;
}

function ImageTile({ image, onRemove, title = "صورة المشروع" }) {
  const src = useImageSrc(image);
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#E2E4E8] bg-[#FAF7F0]">
      {src && <img src={src} alt={title} className="h-[135px] w-full object-cover" />}
      <button type="button" onClick={onRemove} aria-label={`حذف ${title}`} className="absolute left-2 top-2 rounded-full bg-white p-1.5 text-[#7D7D7D] shadow hover:text-red-600"><FiTrash2 size={15} /></button>
    </div>
  );
}

function UploadTile({ onFiles, multiple = false, title = "تحميل صورة", hint = "PNG أو JPG" }) {
  const ref = useRef(null);
  return (
    <div>
      <input ref={ref} type="file" multiple={multiple} accept="image/png,image/jpeg,image/webp" className="hidden"
        onChange={(e) => { onFiles(Array.from(e.target.files || [])); e.target.value = ""; }} />
      <button type="button" onClick={() => ref.current?.click()} className="flex h-[135px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#C9A85D] bg-[#FFFEFC] px-3 text-center hover:bg-[#FBF6E9]">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F3E9CF] text-[#B8943F]"><FiUpload size={18} /></span>
        <span className="text-xs font-semibold text-[#14223B]">{title}</span>
        <span className="text-[10px] text-[#8B919C]">{hint}</span>
      </button>
    </div>
  );
}

export default function ProjectEdit({ projectData, onSaveProject }) {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedProject = projectData || location.state?.project;
  const [form, setForm] = useState(() => ({
    ...emptyProject,
    ...(selectedProject
      ? {
          name: selectedProject.title,
          englishName: selectedProject.englishName || "",
          field: selectedProject.category,
          stage: selectedProject.stage || "",
          idea: selectedProject.idea || selectedProject.about || "",
          description: selectedProject.description,
          website: selectedProject.website || "",
          instagram: selectedProject.instagram || "",
          facebook: selectedProject.facebook || "",
          whatsapp: selectedProject.whatsapp || "",
        }
      : {}),
    ...(projectData?.form || {}),
  }));
  const [team, setTeam] = useState(() => selectedProject?.team || []);
  const [logo, setLogo] = useState(selectedProject?.logo || null);
  const [images, setImages] = useState(
    selectedProject
      ? selectedProject.images?.length
        ? selectedProject.images
        : selectedProject.image
          ? [selectedProject.image]
          : []
      : []
  );
  const [errors, setErrors] = useState({});
  const [previewOpen, setPreviewOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const update = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: "" }));
  };
  const validImage = file => ["image/jpeg", "image/png", "image/webp"].includes(file.type) && file.size <= 5 * 1024 * 1024;
  const handleImages = files => {
    const valid = files.filter(validImage);
    if (valid.length !== files.length) setMessage("مسموح فقط بصور JPG أو PNG أو WEBP بحجم لا يتجاوز 5MB.");
    setImages(prev => [...prev, ...valid]);
  };
  const handleLogo = files => {
    if (!files[0]) return;
    if (!validImage(files[0])) { setMessage("يرجى اختيار صورة صحيحة بحجم أقل من 5MB."); return; }
    setLogo(files[0]);
  };
  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "اسم المشروع مطلوب";
    if (!form.field.trim()) next.field = "المجال مطلوب";
    if (!form.idea.trim()) next.idea = "فكرة المشروع مطلوبة";
    if (!form.description.trim()) next.description = "وصف المشروع مطلوب";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const save = async e => {
    e.preventDefault();
    setMessage("");
    if (!validate()) { setMessage("يرجى تعبئة الحقول المطلوبة."); return; }
    setSaving(true);
    try {
      const savedImages = await Promise.all(images.map(persistImage));
      const savedLogo = logo ? await persistImage(logo) : null;
      const payload = {
        ...form,
        id: selectedProject?.id,
        title: form.name.trim(),
        category: form.field.trim(),
        about: form.idea,
        description: form.description,
        image: savedImages[0] || savedLogo || "",
        images: savedImages,
        logo: savedLogo,
        team: team.filter(m => m.name.trim() || m.role.trim()),
      };

      if (onSaveProject) {
        await onSaveProject(payload);
        setMessage("تم حفظ التعديلات بنجاح.");
      } else {
        const currentProjects = readManagedProjects();
        const nextProject = {
          ...payload,
          id:
            selectedProject?.id ??
            Math.max(0, ...currentProjects.map((project) => project.id)) + 1,
        };
        saveManagedProjects(
          selectedProject
            ? currentProjects.map((project) =>
                project.id === selectedProject.id
                  ? { ...project, ...nextProject }
                  : project
              )
            : [...currentProjects, nextProject]
        );
        navigate("/management");
      }
    } catch (err) {
      setMessage(
        err?.name === "QuotaExceededError"
          ? "مساحة التخزين المحلية ممتلئة. قلّل عدد الصور أو حجمها ثم أعد المحاولة."
          : err?.message || "تعذر حفظ التعديلات."
      );
    }
    finally { setSaving(false); }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FCFBF9] text-[#14223B]">
      <main className="mx-auto w-full max-w-[1440px] px-4 pb-14 pt-9 sm:px-8 lg:px-12">
        <header className="mb-8 text-right">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => navigate(-1)} aria-label="رجوع" className="rounded-full p-2 hover:bg-[#F0EEE9]"><FiArrowRight size={22} /></button>
            <h1 className="text-3xl font-bold sm:text-4xl">
              {selectedProject ? "تعديل المشروع" : "إضافة مشروع"}
            </h1>
          </div>
          <p className="mt-2 text-sm text-[#777F8B]">
            أدخل جميع بيانات المشروع، ويمكنك تعديلها لاحقًا.
          </p>
        </header>

        <form onSubmit={save} className="space-y-5" noValidate>
          <Section title="معلومات أساسية">
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr_145px]">
              <div>
                <Label required>اسم المشروع</Label>
                <input className={inputStyle} value={form.name} onChange={e => update("name", e.target.value)} />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <Label required>اسم المشروع بالإنجليزي</Label>
                <input className={inputStyle} value={form.englishName || ""} onChange={e => update("englishName", e.target.value)} placeholder="اسم المشروع بالإنجليزي (اختياري)" />
              </div>
              <div className="lg:row-span-3">
                <Label>شعار المشروع</Label>
                {logo ? <ImageTile image={logo} title="شعار المشروع" onRemove={() => setLogo(null)} /> : <UploadTile onFiles={handleLogo} title="تحميل شعار" />}
                {logo && <button type="button" onClick={() => document.getElementById("qabas-logo-upload")?.click()} className="mt-2 text-xs text-[#B8943F] underline">تغيير الشعار</button>}
                <input id="qabas-logo-upload" type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={e => { handleLogo(Array.from(e.target.files || [])); e.target.value = ""; }} />
              </div>
              <div className="lg:col-span-2">
                <Label required>المجال</Label>
                <select className={inputStyle} value={form.field} onChange={e => update("field", e.target.value)}>
                  {!categories.includes(form.field) && <option value={form.field}>{form.field}</option>}
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.field && <p className="mt-1 text-xs text-red-600">{errors.field}</p>}
              </div>
              <div>
                <Label>مرحلة المشروع</Label>
                <input
                  className={inputStyle}
                  value={form.stage || ""}
                  onChange={e => update("stage", e.target.value)}
                  placeholder="مثال: مرحلة النمو"
                />
              </div>
              <div className="lg:col-span-2">
                <Label required>فكرة المشروع</Label>
                <textarea className={textareaStyle} value={form.idea} maxLength={300} onChange={e => update("idea", e.target.value)} />
                <p className="mt-1 text-left text-xs text-[#A0A5AF]">{form.idea.length}/300</p>
                {errors.idea && <p className="text-xs text-red-600">{errors.idea}</p>}
              </div>
              <div className="lg:col-span-3">
                <Label required>وصف المشروع</Label>
                <textarea className={textareaStyle} value={form.description} maxLength={1000} onChange={e => update("description", e.target.value)} />
                <p className="mt-1 text-left text-xs text-[#A0A5AF]">{form.description.length}/1000</p>
                {errors.description && <p className="text-xs text-red-600">{errors.description}</p>}
              </div>
            </div>
          </Section>

          <Section title="فريق المشروع" description="أضف أعضاء الفريق وأدوارهم أو عدّل بياناتهم.">
            <div className="space-y-4">
              {team.map((member, index) => (
                <div key={index} className="grid items-end gap-4 sm:grid-cols-[1fr_1fr_auto]">
                  <div><Label>الاسم</Label><input className={inputStyle} value={member.name} onChange={e => setTeam(prev => prev.map((m, i) => i === index ? { ...m, name: e.target.value } : m))} /></div>
                  <div><Label>الدور</Label><input className={inputStyle} value={member.role} onChange={e => setTeam(prev => prev.map((m, i) => i === index ? { ...m, role: e.target.value } : m))} /></div>
                  <button type="button" aria-label="حذف العضو" onClick={() => setTeam(prev => prev.filter((_, i) => i !== index))} className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5F5F5] text-[#777] hover:text-red-600"><FiX size={17} /></button>
                </div>
              ))}
            </div>
            <button type="button" onClick={() => setTeam(prev => [...prev, blankMember()])} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B8943F]"><FiPlusCircle size={19} />إضافة عضو</button>
          </Section>

          <Section title="صور المشروع" description="أضف صورًا تعبّر عن فكرة مشروعك أو احذف الصور القديمة.">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {images.map((image, index) => <ImageTile key={index} image={image} title={`صورة المشروع ${index + 1}`} onRemove={() => setImages(prev => prev.filter((_, i) => i !== index))} />)}
              <UploadTile multiple onFiles={handleImages} title="تحميل صور" hint="JPG أو PNG — حتى 5MB" />
            </div>
            <p className="mt-3 text-xs text-[#9399A3]">يمكنك إضافة أكثر من صورة للمشروع.</p>
          </Section>

          <Section title="طرق التواصل" description="عدّل روابط الحسابات أو وسائل التواصل الخاصة بمشروعك.">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[["website", "الموقع الإلكتروني"], ["instagram", "Instagram"], ["facebook", "Facebook"], ["whatsapp", "WhatsApp"]].map(([key, label]) => (
                <div key={key}><Label>{label}</Label><input dir="ltr" className={inputStyle} value={form[key] || ""} onChange={e => update(key, e.target.value)} placeholder={label} /></div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#9399A3]">المعلومات اختيارية، وتساعد الآخرين على الوصول لمشروعك.</p>
          </Section>

          {message && <div role="status" className="flex items-center justify-between gap-3 rounded-lg border border-[#E9D9B3] bg-[#FFF9EA] px-4 py-3 text-sm text-[#826628]">{message}<button type="button" aria-label="إغلاق الرسالة" onClick={() => setMessage("")}><FiX size={16} /></button></div>}
          <div className="flex flex-wrap gap-4 pt-1">
            <button type="button" onClick={() => setPreviewOpen(true)} className="min-w-[155px] rounded-xl border border-[#14223B] bg-white px-7 py-3 text-sm font-semibold text-[#14223B] hover:bg-[#F2F4F7]">معاينة المشروع</button>
            <button type="submit" disabled={saving} className="min-w-[155px] rounded-xl bg-[#B8943F] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A17D2D] disabled:opacity-60">
              {saving
                ? "جارٍ الحفظ..."
                : selectedProject
                  ? "حفظ التعديلات"
                  : "إضافة المشروع"}
            </button>
          </div>
        </form>
      </main>
      <ProjectPreviewModal open={previewOpen} onClose={() => setPreviewOpen(false)} form={form} team={team} logo={logo} images={images} />
    </div>
  );
}
