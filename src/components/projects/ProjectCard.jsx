
import { useState } from "react";
import { ArrowUpLeft } from "lucide-react";
import ProjectDetailsPopup from "./ProjectDetailsPopup";

export default function ProjectCard({ project }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-[20px] border border-[#E7E2D7] bg-white shadow-[0_4px_16px_rgba(20,34,59,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,34,59,0.12)]">
        <div className="relative h-[190px] overflow-hidden sm:h-[210px]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute bottom-3 right-3 rounded-full bg-[#F8F4EC] px-3 py-1 text-[11px] font-medium text-[#A8863C]">
            {project.category}
          </span>
        </div>

        <div className="p-5 text-right">
          <h3 className="mb-2 text-[21px] font-bold text-[#14223B]">
            {project.title}
          </h3>

          <p className="min-h-[48px] text-sm leading-7 text-[#858A91]">
            {project.description}
          </p>

          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B7964A] transition-all group-hover:gap-3 cursor-pointer"
          >
            اكتشف المشروع <ArrowUpLeft size={16} />
          </button>
        </div>
      </article>

      {isPopupOpen && (
        <ProjectDetailsPopup
          project={project}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}
