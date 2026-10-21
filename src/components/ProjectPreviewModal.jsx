import { useEffect, useState } from "react";
import { FiX, FiExternalLink, FiGlobe, FiInstagram, FiMessageCircle, FiUser, FiImage, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

function useFileUrl(file) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (!file) { setUrl(""); return; }
    if (typeof file === "string") { setUrl(file); return; }
    const next = URL.createObjectURL(file);
    setUrl(next);
    return () => URL.revokeObjectURL(next);
  }, [file]);
  return url;
}
function PreviewImage({ file, alt, className = "" }) {
  const src = useFileUrl(file);
  return src ? <img src={src} alt={alt} className={className} /> : <div className={`${className} flex items-center justify-center bg-[#F7F3EB] text-[#C5B58D]`}><FiImage size={30} /></div>;
}
function Contact({ icon: Icon, label, value }) {
  if (!value?.trim()) return null;
  const raw = value.trim();
  const href = label === "واتساب" && /^\+?[\d\s()-]+$/.test(raw)
    ? `https://wa.me/${raw.replace(/\D/g, "")}`
    : /^https?:\/\//i.test(raw) ? raw : label === "الموقع" ? `https://${raw}` : null;
  return <div className="flex min-w-0 flex-col items-center gap-1.5 text-center">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F2E7] text-[#B8943F]"><Icon size={17} /></span>
    {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="max-w-full truncate text-[11px] text-[#747A83] underline-offset-2 hover:underline">{label}</a> : <span className="max-w-full truncate text-[11px] text-[#747A83]" title={raw}>{label}: {raw}</span>}
  </div>;
}
export default function ProjectPreviewModal({ open, onClose, form, team = [], logo, images = [], onVisit }) {
  const [active, setActive] = useState(0);
  useEffect(() => { if (open) setActive(0); }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = old; };
  }, [open, onClose]);
  if (!open) return null;
  const members = team.filter(m => m.name.trim() || m.role.trim());
  const gallery = images.length ? images : logo ? [logo] : [];
  const current = gallery[Math.min(active, gallery.length - 1)];
  return <div dir="rtl" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }} className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#1D2430]/55 px-3 py-6 backdrop-blur-[2px] sm:px-6">
    <section role="dialog" aria-modal="true" aria-label="معاينة المشروع" className="relative my-auto w-full max-w-[1060px] rounded-[18px] bg-white p-5 shadow-2xl sm:p-8 lg:p-10">
      <button type="button" onClick={onClose} aria-label="إغلاق المعاينة" className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F5F0] text-[#777] hover:bg-[#EAE4D8]"><FiX size={18} /></button>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="min-w-0 text-right">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full border border-[#EEE8DD] bg-[#FAF8F3]">
              {logo ? <PreviewImage file={logo} alt="شعار المشروع" className="h-full w-full object-contain" /> : <span className="text-xs text-[#A8A094]">شعار المشروع</span>}
            </div>
            <span className="rounded-full bg-[#F1E8D4] px-4 py-1.5 text-xs font-medium text-[#927B46]">{form.field || "مجال المشروع"}</span>
          </div>
          <h2 className="mt-5 text-[24px] font-bold text-[#14223B] sm:text-[30px]">{form.name || "اسم المشروع"}</h2>
          <p className="mt-2 whitespace-pre-wrap text-[13px] leading-7 text-[#737985]">{form.idea || "فكرة المشروع بتظهر هون بعد إدخالها."}</p>
          <div className="my-6 h-px bg-[#CBBF9E]" />
          <h3 className="mb-4 text-[17px] font-bold text-[#14223B]">فريق المشروع</h3>
          {members.length ? <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3">{members.map((member, i) => <div key={i} className="flex min-w-0 items-center gap-2"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7F2E7] text-[#B8943F]"><FiUser size={17} /></span><div className="min-w-0"><p className="truncate text-xs font-semibold text-[#14223B]">{member.name || "عضو الفريق"}</p><p className="truncate text-[11px] text-[#89909A]">{member.role || "عضو"}</p></div></div>)}</div> : <p className="text-xs text-[#9198A1]">لم تتم إضافة أعضاء للفريق بعد.</p>}
          <div className="my-6 h-px bg-[#CBBF9E]" />
          <h3 className="mb-4 text-[17px] font-bold text-[#14223B]">تواصل مع الفريق</h3>
          <div className="flex flex-wrap gap-6"><Contact icon={FiInstagram} label="إنستغرام" value={form.instagram} /><Contact icon={FaFacebookF} label="فيسبوك" value={form.facebook} /><Contact icon={FiMessageCircle} label="واتساب" value={form.whatsapp} /><Contact icon={FiGlobe} label="الموقع" value={form.website} />{![form.instagram, form.facebook, form.whatsapp, form.website].some(x => x?.trim()) && <p className="text-xs text-[#9198A1]">لم تتم إضافة وسائل تواصل بعد.</p>}</div>
        </div>
        <div className="min-w-0">
          <div className="relative overflow-hidden rounded-[12px] bg-[#F7F3EB]">
            {current ? <PreviewImage file={current} alt="صورة المشروع الرئيسية" className="h-[230px] w-full object-cover sm:h-[280px]" /> : <div className="flex h-[230px] items-center justify-center gap-2 text-sm text-[#B4A88D] sm:h-[280px]"><FiImage size={25} />صور المشروع</div>}
            {gallery.length > 1 && <><button type="button" onClick={() => setActive(i => (i - 1 + gallery.length) % gallery.length)} aria-label="الصورة السابقة" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#14223B]"><FiChevronRight size={18} /></button><button type="button" onClick={() => setActive(i => (i + 1) % gallery.length)} aria-label="الصورة التالية" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#14223B]"><FiChevronLeft size={18} /></button></>}
            {gallery.length > 0 && <span className="absolute bottom-3 right-3 rounded-full bg-black/45 px-3 py-1 text-xs text-white">{active + 1}/{gallery.length}</span>}
          </div>
          {gallery.length > 0 && <div className="mt-3 grid grid-cols-3 gap-3">{gallery.slice(0, 3).map((file, index) => <button type="button" key={index} onClick={() => setActive(index)} aria-label={`عرض الصورة ${index + 1}`} className={`overflow-hidden rounded-[9px] border-2 ${active === index ? "border-[#B8943F]" : "border-transparent"}`}><PreviewImage file={file} alt={`صورة مصغرة ${index + 1}`} className="h-[78px] w-full object-cover sm:h-[95px]" /></button>)}</div>}
          <h3 className="mt-7 text-[17px] font-bold text-[#14223B]">نبذة عن المشروع</h3>
          <p className="mt-2 whitespace-pre-wrap text-[13px] leading-7 text-[#737985]">{form.description || "وصف المشروع بيظهر هون بعد إدخاله."}</p>
          <div className="mt-7 flex justify-start"><button type="button" onClick={onVisit || onClose} className="inline-flex items-center gap-2 rounded-full bg-[#B8943F] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#A17D2D]"><FiExternalLink size={15} />{onVisit ? "زيارة صفحة المشروع" : "إغلاق المعاينة"}</button></div>
        </div>
      </div>
    </section>
  </div>;
}
