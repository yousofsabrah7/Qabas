
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  UserRound,
  ArrowUpLeft,
} from "lucide-react";

export default function ProjectDetailsPopup({
  project,
  onClose,
}) {
  const [activeImage, setActiveImage] = useState(0);

  const images = Array.isArray(project?.images)
    ? project.images.filter(Boolean)
    : [];

  if (images.length === 0 && project?.image) {
    images.push(project.image);
  }

  const team = Array.isArray(project?.team)
    ? project.team
    : [];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  useEffect(() => {
    setActiveImage(0);
  }, [project?.id]);

  const nextImage = () => {
    if (images.length < 2) return;

    setActiveImage(
      (prev) => (prev + 1) % images.length
    );
  };

  const previousImage = () => {
    if (images.length < 2) return;

    setActiveImage(
      (prev) =>
        (prev - 1 + images.length) % images.length
    );
  };

  if (!project) return null;

  return createPortal(
    <div
      dir="rtl"
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/60 p-4 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`تفاصيل مشروع ${project.title}`}
          className="relative w-full max-w-[950px] rounded-[22px] bg-white p-5 shadow-2xl sm:p-8"
        >
          {/* زر الإغلاق */}
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="absolute left-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#F8F4EC] text-[#14223B] hover:bg-[#EAE2D2]"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* القسم الأيمن */}
            <div className="text-right">
              <div className="flex items-start justify-between gap-4">
                {/* شعار المشروع */}
                <div className="flex h-[85px] w-[85px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#EAE4D7] bg-[#FBF9F4]">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`شعار ${project.title}`}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <span className="px-2 text-center text-sm font-bold text-[#B8943F]">
                      {project.title}
                    </span>
                  )}
                </div>

                {project.category && (
                  <span className="rounded-full bg-[#F2E9D3] px-3 py-1.5 text-xs text-[#927434]">
                    {project.category}
                  </span>
                )}
              </div>

              {/* اسم المشروع */}
              <h2 className="mt-5 text-[28px] font-bold text-[#14223B]">
                {project.title}
              </h2>

              {project.subtitle && (
                <p className="mt-2 text-sm font-semibold text-[#B8943F]">
                  {project.subtitle}
                </p>
              )}

              <p className="mt-3 text-sm leading-8 text-[#64748B]">
                {project.description}
              </p>

              <div className="my-6 h-px bg-[#D5D0C5]" />

              {/* فريق المشروع */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14223B]">
                  <Users size={19} />
                  فريق المشروع
                </h3>

                {team.length > 0 ? (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {team.map((member, index) => (
                      <div
                        key={member.id ?? index}
                        className="flex items-center gap-2"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F2E9D3] text-[#A8863C]">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name || "عضو الفريق"}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <UserRound size={19} />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-[#14223B]">
                            {member.name}
                          </p>

                          {member.role && (
                            <p className="text-xs text-[#858A91]">
                              {member.role}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-[#858A91]">
                    لم تتم إضافة معلومات الفريق بعد.
                  </p>
                )}
              </section>

              {/* روابط التواصل مخفية مؤقتًا */}
            </div>

            {/* القسم الأيسر */}
            <div className="flex flex-col">
              {/* معرض الصور */}
              {images.length > 0 ? (
                <>
                  <div className="relative h-[260px] overflow-hidden rounded-[15px] bg-[#F8F4EC] sm:h-[300px]">
                    <img
                      src={
                        images[activeImage] ||
                        images[0]
                      }
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />

                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={previousImage}
                          aria-label="الصورة السابقة"
                          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#14223B] shadow-md"
                        >
                          <ChevronRight size={19} />
                        </button>

                        <button
                          type="button"
                          onClick={nextImage}
                          aria-label="الصورة التالية"
                          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#14223B] shadow-md"
                        >
                          <ChevronLeft size={19} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* الصور المصغرة */}
                  {images.length > 1 && (
                    <div className="mt-3 flex gap-3 overflow-x-auto">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            setActiveImage(index)
                          }
                          aria-label={`عرض الصورة ${index + 1}`}
                          className={`h-[75px] w-[95px] shrink-0 cursor-pointer overflow-hidden rounded-[10px] border-2 ${
                            activeImage === index
                              ? "border-[#B8943F]"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`صورة ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex h-[260px] items-center justify-center rounded-[15px] bg-[#F8F4EC] text-sm text-[#858A91]">
                  لا توجد صور للمشروع
                </div>
              )}

              {/* نبذة عن المشروع */}
              <div className="mt-6 text-right">
                <h3 className="text-lg font-bold text-[#14223B]">
                  نبذة عن المشروع
                </h3>

                <p className="mt-3 text-sm leading-8 text-[#64748B]">
                  {project.about ||
                    project.description}
                </p>
              </div>

              {/* زر زيارة صفحة الإدارة */}
              <div className="mt-auto pt-7">
                <Link
                  to="/management"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-[#B8943F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A08032]"
                >
                  زيارة صفحة المشروع
                  <ArrowUpLeft size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
