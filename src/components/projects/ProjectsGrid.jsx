
import { useMemo } from "react";

import ProjectCard from "./ProjectCard";

// توحيد النصوص العربية
const normalizeText = (text) => {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ـ/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export default function ProjectsGrid({
  search = "",
  selectedField = "",
  projects = [],
}) {
  // البحث بالاسم + التصفية حسب المجال
  const filteredProjects = useMemo(() => {
    const query = normalizeText(search);
    const field = normalizeText(selectedField);

    return projects.filter((project) => {
      const projectName = normalizeText(project.title);
      const projectCategory = normalizeText(project.category);

      // البحث باسم المشروع فقط
      const matchesSearch =
        !query || projectName.includes(query);

      // التصفية حسب مجال المشروع فقط
      const matchesField =
        !field ||
        field === normalizeText("جميع المجالات") ||
        projectCategory === field;

      return matchesSearch && matchesField;
    });
  }, [projects, search, selectedField]);

  const visibleProjects = filteredProjects;

  return (
    <section
      id="all-projects"
      dir="rtl"
      className="
        mx-auto
        w-full
        max-w-[1440px]
        px-5
        pb-12
        pt-10
        sm:px-8
        sm:pb-14
        lg:px-12
        lg:pb-20
        lg:pt-16
      "
    >
      {/* SECTION HEADER */}
      <div
        className="
          mb-7
          flex
          flex-wrap
          items-center
          justify-between
          gap-3
          sm:mb-9
          lg:mb-10
        "
      >
        <h2
          className="
            text-[28px]
            font-bold
            leading-tight
            text-[#14223B]
            sm:text-[36px]
            lg:text-[48px]
          "
        >
          {search.trim() || selectedField
            ? "نتائج البحث"
            : "جميع مشاريع قبس"}
        </h2>

        <span
          className="
            shrink-0
            text-[13px]
            text-[#9B864E]
            sm:text-[15px]
            lg:text-[17px]
          "
        >
          {filteredProjects.length} مشروع
        </span>
      </div>

      {/* PROJECTS GRID */}
      {visibleProjects.length > 0 ? (
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            sm:gap-7
            lg:grid-cols-3
            lg:gap-10
          "
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <p
          className="
            rounded-2xl
            bg-white
            px-5
            py-14
            text-center
            text-[15px]
            text-[#858A91]
            sm:text-[17px]
          "
        >
          ما لقينا مشاريع مطابقة لبحثك أو المجال المحدد.
        </p>
      )}
    </section>
  );
}
