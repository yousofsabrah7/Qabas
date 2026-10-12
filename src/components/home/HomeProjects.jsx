import React from "react";
import GoldButton from "./GoldButton";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects as projectItems } from "../../Data/HomeData";

export default function HomeProjects() {
  return (
<div className="relative bg-[#F8F6F0] w-full overflow-hidden px-6 py-12 sm:p-10">
        <div className="content relative z-10 w-full">
          <SectionHeading title="من شرارات صغيرة… إلى مشاريع حقيقية.">
            تعرّف على المشاريع التي بدأت فكرتها مع قبس، وتحولت إلى خطوات
            حقيقية نحو الأثر.
          </SectionHeading>

          <div className="cards z-10 w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 my-8 lg:my-12 justify-items-center">
            {projectItems.map((item, index) => (
              <ProjectCard key={item.title} {...item} last={index === 2} />
            ))}
          </div>
        </div>

        <GoldButton to="/projects" className="relative z-10 lg:mx-12">عرض المشاريع</GoldButton>
      </div>
  );
}
