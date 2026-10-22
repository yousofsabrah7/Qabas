
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpLeft,
  Flame,
  Pencil,
  Plus,
  Save,
  X,
} from "lucide-react";

import sukoonImage from "../assets/management/sukoon-product.png";

const initialProfile = {
  name: "سارة محمد",
  email: "sara@example.com",
};

const initialProject = {
  name: "سكون",
  category: "منتجات يدوية",
  stage: "مرحلة النمو",
  description:
    "مشروع يهتم بصناعة الشموع العطرية والمنتجات اليدوية التي تضيف لمسة من الدفء والجمال لكل مكان.",
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

export default function Management({
  initialHasProject = true,
  onSaveProfile,
  onSaveProject,
}) {
  const navigate = useNavigate();

  const [hasProject, setHasProject] = useState(initialHasProject);
  const [profile, setProfile] = useState(initialProfile);

  const [project, setProject] = useState(
    initialHasProject
      ? initialProject
      : {
          name: "",
          category: "",
          stage: "",
          description: "",
        }
  );

  const [editingProfile, setEditingProfile] = useState(false);
  const [editingProject, setEditingProject] = useState(false);
  const [message, setMessage] = useState("");
  const [creating, setCreating] = useState(false);

  const firstName = profile.name.trim().split(/\s+/)[0] || "بك";

  const changeProfile = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const changeProject = (key, value) => {
    setProject((prev) => ({
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

  const saveProject = async () => {
    if (!editingProject) {
      setEditingProject(true);
      return;
    }

    if (!project.name.trim() || !project.category.trim()) {
      setMessage("اسم المشروع والمجال مطلوبان.");
      return;
    }

    try {
      await onSaveProject?.(project);
      setEditingProject(false);
      setMessage("تم تحديث بيانات المشروع في الصفحة.");
    } catch {
      setMessage("تعذر حفظ بيانات المشروع.");
    }
  };

  const createProject = () => {
    if (!creating) {
      setCreating(true);
      return;
    }

    if (!project.name.trim() || !project.category.trim()) {
      setMessage("أدخل اسم المشروع ومجاله أولًا.");
      return;
    }

    setHasProject(true);
    setCreating(false);
    setMessage(
      "تم إنشاء المشروع محليًا. اربط العملية بالـBackend لحفظه فعليًا."
    );
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

        {/* PROJECT CARD */}
        {hasProject ? (
          <section className="flex flex-col gap-5 rounded-[18px] border border-[#E6E5E1] bg-white p-4 shadow-[0_3px_8px_rgba(20,34,59,.04)] md:flex-row md:items-center md:p-5">
            <div className="min-w-0 flex-1 text-right">
              <h2 className="mb-3 text-[25px] font-bold sm:text-[30px]">
                {project.name}
              </h2>

              <p className="max-w-[760px] text-[14px] leading-7 text-[#6E7583] sm:text-[16px]">
                {project.description}
              </p>

              <span className="mt-4 inline-block rounded-full bg-[#F7F0DE] px-4 py-1.5 text-[12px] font-medium text-[#B8943F]">
                {project.stage}
              </span>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#project-info"
                  className="inline-flex items-center gap-2 rounded-full border border-[#14223B] px-5 py-2.5 text-[13px] font-semibold transition hover:bg-[#14223B] hover:text-white"
                >
                  عرض المشروع
                  <ArrowUpLeft size={16} />
                </a>

                {/* ربط صفحة تعديل المشروع */}
                <button
                  type="button"
                  onClick={() => navigate("/project/edit")}
                  className="rounded-full bg-[#B8943F] px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-[#A17D2D]"
                >
                  إدارة المشروع
                </button>
              </div>
            </div>

            <img
              src={sukoonImage}
              alt="منتجات مشروع سكون من الشموع العطرية"
              className="h-[220px] w-full rounded-[12px] object-cover md:h-[200px] md:w-[34%] lg:h-[230px] lg:w-[32%]"
            />
          </section>
        ) : (
          <section className="rounded-[18px] border border-[#E6E5E1] bg-white px-5 py-7 text-right shadow-[0_3px_8px_rgba(20,34,59,.04)] sm:px-8">
            <h2 className="text-[21px] font-bold sm:text-[25px]">
              مشروعك الجاي يبدأ من هون.
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#737B89] sm:text-[16px]">
              لسه ما أضفت أي مشروع. ابدأ رحلتك مع قبس وشارك فكرتك،
              وخليها تكبر وتتحول لمشروع يترك أثر.
            </p>

            <button
              type="button"
              onClick={() => {
                setCreating(true);
                document
                  .getElementById("project-info")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#B8943F] px-6 py-2.5 text-[14px] font-semibold text-white hover:bg-[#A17D2D]"
            >
              <Plus size={17} />
              أنشئ مشروعك
            </button>
          </section>
        )}

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

        {/* PROJECT INFORMATION */}
        <div id="project-info" className="scroll-mt-24">
          <SectionCard
            title="معلومات المشروع"
            action={
              hasProject ? (
                <EditAction
                  editing={editingProject}
                  onClick={saveProject}
                />
              ) : creating ? (
                <button
                  type="button"
                  onClick={createProject}
                  className="inline-flex items-center gap-2 rounded-full bg-[#B8943F] px-5 py-2 text-[13px] font-semibold text-white"
                >
                  <Plus size={15} />
                  إنشاء المشروع
                </button>
              ) : null
            }
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Field
                label="اسم المشروع"
                value={hasProject || creating ? project.name : ""}
                onChange={(value) => changeProject("name", value)}
                editing={editingProject || creating}
                placeholder="اسم مشروعك"
              />

              <Field
                label="المجال"
                value={hasProject || creating ? project.category : ""}
                onChange={(value) => changeProject("category", value)}
                editing={editingProject || creating}
                placeholder="مجال المشروع"
              />

              <Field
                label="مرحلة المشروع"
                value={hasProject || creating ? project.stage : ""}
                onChange={(value) => changeProject("stage", value)}
                editing={editingProject || creating}
                placeholder="مرحلة المشروع"
              />
            </div>

            {(editingProject || creating) && (
              <label className="mt-5 block text-right">
                <span className="mb-2 block text-[14px] font-semibold">
                  وصف المشروع
                </span>

                <textarea
                  rows={3}
                  value={project.description}
                  onChange={(e) =>
                    changeProject("description", e.target.value)
                  }
                  className="w-full resize-y rounded-lg border border-[#B8943F] p-3 text-[14px] outline-none focus:ring-2 focus:ring-[#B8943F]/20"
                />
              </label>
            )}
          </SectionCard>
        </div>
      </main>
    </div>
  );
}
