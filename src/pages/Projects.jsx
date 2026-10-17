
import { useState } from "react";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsSearch from "../components/projects/ProjectsSearch";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCTA from "../components/projects/ProjectsCTA";
import JoinUsSection from "../components/projects/JoinUsSection";
import Circle from "../components/Circle";

export default function Projects() {
    const [search, setSearch] = useState("");

    return (
        <main
            dir="rtl"
            className="overflow-x-hidden bg-[#FBF9F4] text-[#14223B] relative"
        >
        <Circle className="pointer-events-none absolute right-1/2 top-1/2 z-[100]"/>
            <ProjectsHero />

            <ProjectsSearch
                value={search}
                onChange={setSearch}
            />

            <FeaturedProjects />

            <ProjectsGrid search={search} />

            <ProjectsCTA />


        </main>
    );
}
