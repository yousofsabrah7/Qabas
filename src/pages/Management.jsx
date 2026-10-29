
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpLeft,
  Flame,
  Pencil,
  Save,
  X,
} from "lucide-react";
import useManagedProjects from "../hooks/useManagedProjects";

const initialProfile = {
  name: "سارة محمد",
  email: "sara@example.com",
};

function SectionCard({ title, children, action }) {
  return (
    <section className="rounded-[18px] border border-[#E6E5E1] bg-white px-5 py-6 shadow-[0_3px_8px_rgba(20,34,59,.035)] sm:px-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[18px] font-bold text-[#14223B] sm:text-[21px]">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  editing,
  type = "text",
  placeholder,
}) {
  return (
    <label className="block min-w-0 flex-1 text-right">
      <span className="mb-2 block text-[13px] font-semibold text-[#14223B] sm:text-[14px]">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={!editing}
        placeholder={placeholder}
        className={`
          h-[44px] w-full rounded-[8px] border px-3
          text-[13px] text-[#586276] outline-none
          transition-colors sm:text-[14px]
          ${
            editing
              ? "border-[#B8943F] bg-white focus:ring-2 focus:ring-[#B8943F]/20"
              : "border-[#E2E5EA] bg-[#FDFDFD]"
          }
        `}
      />
    </label>
  );
}

function EditAction({ editing, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-[#B8943F] px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-[#A17D2D]"
    >
      {editing ? <Save size={15} /> : <Pencil size={15} />}
      {editing ? "حفظ التعديلات" : "تعديل البيانات"}
    </button>
  );
}

function ManagedProjectCard({ project, onEdit }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#E6E5E1] bg-white shadow-[0_3px_8px_rgba(20,34,59,.04)]">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      <div className="space-y-4 p-5 text-right">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-[#14223B]">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-[#F7F0DE] px-3 py-1 text-xs text-[#B8943F]">
            {project.category}
          </span>
        </div>
        <p className="min-h-16 text-sm leading-7 text-[#6E7583]">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#EEECE7] pt-4">
          <button
            type="button"
            onClick={() => onEdit(project)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14223B] hover:text-[#B8943F]"
          >
            تفاصيل المشروع
            <ArrowUpLeft size={15} />
          </button>
          <button
            type="button"
            onClick={() => onEdit(project)}
            className="inline-flex items-center gap-2 rounded-full bg-[#B8943F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#A17D2D]"
          >
            <Pencil size={15} />
            تعديل كل البيانات
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Management({
  onSaveProfile,
}) {
  const navigate = useNavigate();
  const { projects, error: projectsError } = useManagedProjects();
  const [profile, setProfile] = useState(initialProfile);
  const [editingProfile, setEditingProfile] = useState(false);
  const [message, setMessage] = useState("");

  const firstName = profile.name.trim().split(/\s+/)[0] || "بك";

  const changeProfile = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveProfile = async () => {
    if (!editingProfile) {
      setEditingProfile(true);
      return;
    }

    if (
      !profile.name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)
    ) {
      setMessage("يرجى إدخال الاسم وبريد إلكتروني صحيح.");
      return;
    }

    try {
      await onSaveProfile?.(profile);
      setEditingProfile(false);
      setMessage("تم تحديث البيانات في الصفحة.");
    } catch {
      setMessage("تعذر حفظ بيانات الحساب.");
    }
  };

  const editProject = (project) => {
    navigate("/project/edit", { state: { project } });
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#FAF9F6] text-[#14223B]"
    >
      <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 pb-16 pt-10 sm:px-8 lg:gap-8 lg:px-12 lg:pt-14">
        {/* HEADER */}
        <header className="text-right">
          <p className="mb-2 inline-flex items-center gap-2 text-[18px] font-semibold text-[#B8943F] sm:text-[21px]">
            مرحبًا بك
            <Flame size={22} fill="currentColor" />
          </p>

          <h1 className="text-[29px] font-bold leading-tight sm:text-[38px] lg:text-[44px]">
            مرحبًا يا {firstName}
            <span aria-hidden="true"> 👋</span>
          </h1>

          <p className="mt-3 text-[14px] leading-7 text-[#818795] sm:text-[16px]">
            من هنا يمكنك متابعة مشاريعك وتحديث بياناتك وإدارة رحلتك مع قبس.
          </p>
        </header>

        {/* STATUS MESSAGE */}
        {message && (
          <div
            role="status"
            className="flex items-center justify-between gap-3 rounded-xl border border-[#E7D9B8] bg-[#FFF9E9] px-4 py-3 text-[13px] text-[#775D26]"
          >
            {message}

            <button
              type="button"
              aria-label="إغلاق الرسالة"
              onClick={() => setMessage("")}
            >
              <X size={17} />
            </button>
          </div>
        )}

        {/* PERSONAL INFORMATION */}
        <SectionCard
          title="المعلومات الشخصية"
          action={
            <EditAction
              editing={editingProfile}
              onClick={saveProfile}
            />
          }
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="الاسم"
              value={profile.name}
              onChange={(value) => changeProfile("name", value)}
              editing={editingProfile}
            />

            <Field
              label="البريد الإلكتروني"
              type="email"
              value={profile.email}
              onChange={(value) => changeProfile("email", value)}
              editing={editingProfile}
            />
          </div>
        </SectionCard>

        <SectionCard
          title="إدارة المشاريع"
          action={
            <span className="text-sm text-[#818795]">
              {projects.length} مشروعًا
            </span>
          }
        >
          <p className="mb-5 text-sm leading-7 text-[#737B89]">
            عدّل كل مشروع على حدة واحفظ التغيير ليظهر في صفحة مشاريع قبس. تُحفظ البيانات في هذا المتصفح.
          </p>

          {projectsError ? (
            <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {projectsError}
            </p>
          ) : projects.length === 0 ? (
            <p role="status" className="text-sm text-[#737B89]">
              جارٍ تحميل المشاريع...
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ManagedProjectCard
                  key={project.id}
                  project={project}
                  onEdit={editProject}
                />
              ))}
            </div>
          )}
        </SectionCard>
      </main>
    </div>
  );
}
