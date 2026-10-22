
import ProjectPreviewModal from "../components/ProjectPreviewModal";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  PlusCircle,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DRAFT_KEY = "qabas-project-creation-draft";

const initialForm = {
  name: "",
  field: "",
  idea: "",
  description: "",
  instagram: "",
  facebook: "",
  whatsapp: "",
  website: "",
};

const fields = [
  "التكنولوجيا",
  "التعليم",
  "الصحة",
  "التجارة",
  "الزراعة",
  "التصميم",
  "أخرى",
];

const inputClass =
  "h-11 w-full rounded-lg border border-[#D9DDE2] bg-white px-4 text-[13px] text-[#14223B] outline-none placeholder:text-[#A1A8B3] focus:border-[#C4A24E] focus:ring-2 focus:ring-[#C4A24E]/15";

const textareaClass =
  "min-h-[90px] w-full resize-y rounded-lg border border-[#D9DDE2] bg-white px-4 py-3 text-[13px] leading-7 text-[#14223B] outline-none placeholder:text-[#A1A8B3] focus:border-[#C4A24E] focus:ring-2 focus:ring-[#C4A24E]/15";

function FormLabel({ children, required = false }) {
  return (
    <label className="mb-2 block text-right text-sm font-medium text-[#14223B]">
      {children}
      {required && (
        <span className="mr-1 text-[#C45555]">*</span>
      )}
    </label>
  );
}

function FormSection({ title, description, children }) {
  return (
    <section className="rounded-xl border border-[#E0E2E5] bg-white px-5 py-6 sm:px-8 lg:px-10">
      <div className="mb-6 text-right">
        <h2 className="text-lg font-bold text-[#14223B]">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-xs leading-6 text-[#858C98]">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

function UploadBox({
  file,
  onChange,
  onRemove,
  title,
  hint,
}) {
  const ref = useRef(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <div className="relative">
      <input
        ref={ref}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => {
          const selected = e.target.files?.[0];

          if (selected) {
            onChange(selected);
          }

          e.target.value = "";
        }}
      />

      <button
        type="button"
        onClick={() => ref.current?.click()}
        className="flex min-h-[145px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#C9A85D] bg-[#FFFEFC] px-4 py-5 text-center hover:bg-[#FBF6E9]"
      >
        {preview ? (
          <img
            src={preview}
            alt={title}
            className="h-28 w-full rounded-lg object-contain"
          />
        ) : (
          <>
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F3E9CF] text-[#B8943F]">
              <Upload size={21} />
            </span>

            <span className="text-sm font-semibold text-[#14223B]">
              {title}
            </span>

            <span className="text-xs text-[#8B919C]">
              {hint}
            </span>
          </>
        )}
      </button>

      {file && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="حذف الصورة"
          className="absolute left-2 top-2 rounded-full bg-white p-1.5 text-red-600 shadow"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

function ImageThumbnail({ file, onRemove, index }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="relative overflow-hidden rounded-lg border border-[#E2E4E8]">
      {url && (
        <img
          src={url}
          alt={`صورة المشروع ${index + 1}`}
          className="h-32 w-full object-cover"
        />
      )}

      <button
        type="button"
        onClick={onRemove}
        aria-label="حذف صورة المشروع"
        className="absolute left-2 top-2 rounded-full bg-white p-1.5 text-red-600 shadow"
      >
        <X size={15} />
      </button>
    </div>
  );
}

export default function ProjectCreation({
  onCreateProject,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);

  const [team, setTeam] = useState([
    { name: "", role: "" },
  ]);

  const [logo, setLogo] = useState(null);
  const [projectImages, setProjectImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const updateForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const updateTeam = (index, key, value) => {
    setTeam((prev) =>
      prev.map((member, i) =>
        i === index
          ? { ...member, [key]: value }
          : member
      )
    );

    if (index === 0 && key === "name") {
      setErrors((prev) => ({
        ...prev,
        firstTeamMember: "",
      }));
    }
  };

  const saveDraft = () => {
    localStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({
        form,
        team,
        savedAt: new Date().toISOString(),
      })
    );

    setMessage(
      "تم حفظ المسودة على هذا المتصفح. الصور لا تُحفظ ضمن المسودة."
    );
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) {
      next.name = "يرجى إدخال اسم المشروع";
    }

    if (!form.field) {
      next.field = "يرجى اختيار المجال";
    }

    if (!form.idea.trim()) {
      next.idea = "يرجى كتابة فكرة المشروع";
    }

    if (!form.description.trim()) {
      next.description = "يرجى كتابة وصف المشروع";
    }

    // اسم أول عضو في الفريق إجباري
    if (!team[0]?.name?.trim()) {
      next.firstTeamMember =
        "يرجى إدخال اسم أول عضو في الفريق";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) {
      setMessage("يرجى تعبئة الحقول المطلوبة.");
      return;
    }

    setLoading(true);

    try {
      if (!onCreateProject) {
        setMessage(
          "البيانات جاهزة. اربط onCreateProject بالـBackend لإنشاء المشروع فعليًا."
        );
        return;
      }

      await onCreateProject({
        ...form,
        team: team.filter(
          (member) =>
            member.name.trim() ||
            member.role.trim()
        ),
        logo,
        images: projectImages,
      });

      localStorage.removeItem(DRAFT_KEY);
      navigate("/management");
    } catch (error) {
      setMessage(
        error?.message ||
          "حدث خطأ أثناء إنشاء المشروع."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#FCFBF9] text-[#14223B]"
    >
      <main className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 lg:px-12">
        <header className="mb-9 text-right">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="رجوع"
              className="rounded-full p-2 hover:bg-[#F0EEE9]"
            >
              <ArrowRight size={22} />
            </button>

            <h1 className="text-3xl font-bold sm:text-4xl">
              إنشاء مشروع
            </h1>
          </div>

          <p className="mt-2 text-sm text-[#777F8B]">
            عبّئ معلومات مشروعك، وابدأ رحلتك مع قبس.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          {/* معلومات أساسية */}
          <FormSection title="معلومات أساسية">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_160px] lg:items-start">
              <div>
                <FormLabel required>
                  اسم المشروع
                </FormLabel>

                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(e) =>
                    updateForm("name", e.target.value)
                  }
                  placeholder="أدخل اسم المشروع"
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <FormLabel required>
                  المجال
                </FormLabel>

                <select
                  className={inputClass}
                  value={form.field}
                  onChange={(e) =>
                    updateForm("field", e.target.value)
                  }
                >
                  <option value="">
                    اختر المجال
                  </option>

                  {fields.map((field) => (
                    <option
                      key={field}
                      value={field}
                    >
                      {field}
                    </option>
                  ))}
                </select>

                {errors.field && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.field}
                  </p>
                )}
              </div>

              <div className="lg:row-span-3">
                <FormLabel required>
                  شعار المشروع
                </FormLabel>

                <UploadBox
                  file={logo}
                  onChange={(file) => {
                    if (
                      file.size >
                      5 * 1024 * 1024
                    ) {
                      setMessage(
                        "حجم الصورة يجب ألا يتجاوز 5MB."
                      );
                      return;
                    }

                    setLogo(file);
                  }}
                  onRemove={() => setLogo(null)}
                  title="تحميل صورة"
                  hint="PNG أو JPG"
                />
              </div>

              <div className="lg:col-span-2">
                <FormLabel required>
                  فكرة المشروع
                </FormLabel>

                <textarea
                  className={textareaClass}
                  value={form.idea}
                  onChange={(e) =>
                    updateForm("idea", e.target.value)
                  }
                  placeholder="اكتب فكرة مشروعك بشكل مختصر..."
                  maxLength={300}
                />

                <p className="mt-1 text-left text-xs text-[#A0A5AF]">
                  {form.idea.length}/300
                </p>

                {errors.idea && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.idea}
                  </p>
                )}
              </div>

              <div className="lg:col-span-2">
                <FormLabel required>
                  وصف المشروع
                </FormLabel>

                <textarea
                  className={textareaClass}
                  value={form.description}
                  onChange={(e) =>
                    updateForm(
                      "description",
                      e.target.value
                    )
                  }
                  placeholder="اكتب وصفًا تفصيليًا عن مشروعك..."
                  maxLength={1000}
                />

                <p className="mt-1 text-left text-xs text-[#A0A5AF]">
                  {form.description.length}/1000
                </p>

                {errors.description && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>
          </FormSection>

          {/* فريق المشروع */}
          <FormSection
            title="فريق المشروع"
            description="أضف أعضاء فريقك وأدوارهم في المشروع."
          >
            <div className="space-y-4">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="grid items-end gap-4 sm:grid-cols-[1fr_1fr_auto]"
                >
                  <div>
                    <FormLabel
                      required={index === 0}
                    >
                      الاسم
                    </FormLabel>

                    <input
                      className={inputClass}
                      value={member.name}
                      onChange={(e) =>
                        updateTeam(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      placeholder="أدخل اسم العضو"
                      required={index === 0}
                      aria-invalid={
                        index === 0 &&
                        Boolean(
                          errors.firstTeamMember
                        )
                      }
                    />

                    {index === 0 &&
                      errors.firstTeamMember && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.firstTeamMember}
                        </p>
                      )}
                  </div>

                  <div>
                    <FormLabel>
                      الدور
                    </FormLabel>

                    <input
                      className={inputClass}
                      value={member.role}
                      onChange={(e) =>
                        updateTeam(
                          index,
                          "role",
                          e.target.value
                        )
                      }
                      placeholder="مثال: مصمم، مطوّر..."
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setTeam((prev) =>
                        prev.filter(
                          (_, i) => i !== index
                        )
                      )
                    }
                    disabled={index === 0}
                    aria-label="حذف العضو"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5F5F5] text-[#777] hover:text-red-600 disabled:opacity-40"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setTeam((prev) => [
                  ...prev,
                  { name: "", role: "" },
                ])
              }
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B8943F]"
            >
              <PlusCircle size={19} />
              إضافة عضو
            </button>
          </FormSection>

          {/* صور المشروع */}
          <FormSection
            title="صور المشروع"
            description="أضف صورًا تعبّر عن فكرة مشروعك."
          >
            <div className="w-full max-w-[320px]">
              <UploadBox
                file={null}
                onChange={(file) => {
                  if (
                    file.size >
                    5 * 1024 * 1024
                  ) {
                    setMessage(
                      "حجم الصورة يجب ألا يتجاوز 5MB."
                    );
                    return;
                  }

                  setProjectImages((prev) => [
                    ...prev,
                    file,
                  ]);
                }}
                onRemove={() => {}}
                title="تحميل صور"
                hint="JPG أو PNG — بحد أقصى 5MB"
              />
            </div>

            {projectImages.length > 0 && (
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {projectImages.map(
                  (file, index) => (
                    <ImageThumbnail
                      key={`${file.name}-${index}`}
                      file={file}
                      index={index}
                      onRemove={() =>
                        setProjectImages(
                          (prev) =>
                            prev.filter(
                              (_, i) => i !== index
                            )
                        )
                      }
                    />
                  )
                )}
              </div>
            )}

            <p className="mt-3 text-xs text-[#9399A3]">
              يمكنك إضافة عدة صور للمشروع.
            </p>
          </FormSection>

          {/* طرق التواصل */}
          <FormSection
            title="طرق التواصل"
            description="أضف روابط حسابات المشروع أو وسائل التواصل الخاصة به."
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "website",
                  "الموقع الإلكتروني",
                  "رابط الموقع",
                ],
                [
                  "instagram",
                  "Instagram",
                  "رابط إنستغرام",
                ],
                [
                  "facebook",
                  "Facebook",
                  "رابط فيسبوك",
                ],
                [
                  "whatsapp",
                  "WhatsApp",
                  "رقم أو رابط واتساب",
                ],
              ].map(
                ([key, label, placeholder]) => (
                  <div key={key}>
                    <FormLabel>
                      {label}
                    </FormLabel>

                    <input
                      dir="ltr"
                      className={inputClass}
                      value={form[key]}
                      onChange={(e) =>
                        updateForm(
                          key,
                          e.target.value
                        )
                      }
                      placeholder={placeholder}
                    />
                  </div>
                )
              )}
            </div>

            <p className="mt-4 text-xs text-[#9399A3]">
              المعلومات اختيارية، وتساعد الآخرين
              على الوصول لمشروعك.
            </p>
          </FormSection>

          {/* رسالة الحالة */}
          {message && (
            <div
              role="status"
              className="rounded-lg border border-[#E9D9B3] bg-[#FFF9EA] px-4 py-3 text-sm text-[#826628]"
            >
              {message}
            </div>
          )}

          {/* الأزرار */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="button"
              onClick={() =>
                setPreviewOpen(true)
              }
              className="min-w-[155px] rounded-xl border border-[#14223B] bg-white px-7 py-3 text-sm font-semibold text-[#14223B] hover:bg-[#F2F4F7]"
            >
              معاينة المشروع
            </button>

            <button
              type="submit"
              disabled={loading}
              className="min-w-[155px] rounded-xl bg-[#B8943F] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A17D2D] disabled:opacity-60"
            >
              {loading
                ? "جاري الحفظ..."
                : "حفظ التغييرات"}
            </button>
          </div>
        </form>
      </main>

      <ProjectPreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        form={form}
        team={team}
        logo={logo}
        images={projectImages}
      />
    </div>
  );
}
