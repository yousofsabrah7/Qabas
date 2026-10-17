
import { useMemo, useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "../../Data/ProjectsData";

const PAGE_SIZE = 6;
const LOAD_MORE_COUNT = 3;

export default function ProjectsGrid({ search = "" }) {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    // Filter projects based on search
    const filteredProjects = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return projects;

        return projects.filter((project) =>
            [
                project.title,
                project.category,
                project.description,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase()
                .includes(query)
        );
    }, [search]);

    // Reset visible projects when search changes
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
    }, [search]);

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const remaining = Math.max(
        filteredProjects.length - visibleCount,
        0
    );

    const handleLoadMore = () => {
        setVisibleCount((count) =>
            Math.min(
                count + LOAD_MORE_COUNT,
                filteredProjects.length
            )
        );
    };

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
                    جميع مشاريع قبس
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
                    ما لقينا مشاريع مطابقة لبحثك.
                </p>
            )}

            {/* LOAD MORE BUTTON */}
            {remaining > 0 && (
                <div className="mt-9 flex justify-center sm:mt-12">
                    <button
                        type="button"
                        onClick={handleLoadMore}
                        className="
              rounded-full
              border
              border-[#D8BC7A]
              bg-white
              px-7
              py-3
              text-[14px]
              font-semibold
              text-[#B7964A]
              transition-colors
              duration-300

              hover:bg-[#B7964A]
              hover:text-white

              sm:px-9
              sm:py-4
              sm:text-[16px]
            "
                    >
                        تحميل المزيد ({remaining})
                    </button>
                </div>
            )}
        </section>
    );
}
