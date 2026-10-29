
import { useState } from "react";
import { ArrowUpLeft, Sparkles } from "lucide-react";

import featureVector from "../../assets/projects/Vector 5.svg";

export default function FeaturedProjects({ projects = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const featuredProjects = projects.slice(0, 3);
    const activeProject = featuredProjects[activeIndex];

    if (!activeProject) return null;

    return (
        <section
            dir="rtl"
            className="
        mx-auto
        w-full
        max-w-[1440px]
        px-5
        pb-10
        pt-10
        sm:px-8
        sm:pb-12
        sm:pt-12
        lg:pb-16
      "
        >
            {/* SECTION HEADING */}
            <div className="mb-6 flex items-center gap-3">
                <Sparkles
                    className="shrink-0 text-[#B7964A]"
                    size={22}
                />

                <h2
                    className="
            text-[28px]
            font-bold
            text-[#14223B]
            sm:text-[36px]
            lg:text-[48px]
          "
                >
                    مشاريع مميزة
                </h2>
            </div>

            {/* FEATURED PROJECT CARD */}
            <div
                className="
          relative
          flex
          w-full
          flex-col
          overflow-hidden
          rounded-[22px]
          bg-[#F8F6F0]
          shadow-md

          md:h-[450px]
          md:flex-row

          lg:h-[450px]
        "
            >
                {/* PROJECT IMAGE */}
                <div
                    className="
            relative
            h-[240px]
            w-full
            shrink-0

            sm:h-[300px]

            md:absolute
            md:inset-y-0
            md:left-0
            md:h-full
            md:w-[65%]
          "
                >
                    <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="
              h-full
              w-full
              object-cover
              object-center
            "
                    />
                </div>

                {/* ORIGINAL FIGMA CURVED VECTOR */}
                <img
                    src={featureVector}
                    alt=""
                    aria-hidden="true"
                    className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            hidden
            h-full
            w-[70%]
            object-fill
            h-full
            lg:block
          "
                />

                {/* CONTENT */}
                <div
                    className="
            relative
            z-20
            flex
            w-full
            flex-col
            items-start
            gap-4
            px-6
            pb-8
            pt-7
            text-right

            sm:px-8

            md:mr-0
            md:h-full
            md:w-[40%]
            md:gap-5
            md:px-6
            md:py-8

            lg:w-[36%]
            lg:gap-8
            lg:px-10
            lg:py-9
          "
                >
                    <h3
                        className="
              text-[36px]
              font-bold
              leading-tight
              text-[#14223B]

              sm:text-[42px]
              md:text-[42px]
              lg:text-[56px]
            "
                    >
                        {activeProject.title}
                    </h3>

                    <p
                        className="
              text-[16px]
              leading-[1.9]
              text-[#656B76]

              sm:text-[18px]
              md:text-[17px]
              md:leading-8
              lg:text-[24px]
            "
                    >
                        {activeProject.description}
                    </p>

                    {/* PROJECT DETAILS */}
                    <span
                        className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-[17px]
              font-semibold
              text-[#B7964A]

              md:mt-auto
              md:pt-4

              lg:text-[24px]
            "
                    >
                        اكتشف التفاصيل
                        <ArrowUpLeft
                            size={20}
                            className="shrink-0"
                        />
                    </span>
                </div>

                {/* SLIDER DOTS */}
                <div
                    className="
            relative
            z-30
            flex
            items-center
            justify-center
            gap-3
            pb-6

            md:absolute
            md:bottom-4
            md:left-1/2
            md:-translate-x-1/2
            md:pb-0
          "
                >
                    {featuredProjects.map((project, index) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`عرض المشروع ${index + 1}`}
                            aria-pressed={activeIndex === index}
                            className={`
                size-4
                shrink-0
                rounded-full
                border
                border-[#14223B]
                transition-all
                duration-300

                ${activeIndex === index
                                    ? "bg-[#14223B]"
                                    : "bg-transparent"
                                }
              `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
