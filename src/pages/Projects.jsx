
import { useState } from "react";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectFilters from "../components/projects/ProjectsSearch";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCTA from "../components/projects/ProjectsCTA";
import Circle from "../components/Circle";
import useManagedProjects from "../hooks/useManagedProjects";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const { projects, error } = useManagedProjects();

  return (
    <main
      dir="rtl"
      className="overflow-x-hidden bg-[#FBF9F4] text-[#14223B] relative"
    >
      <Circle className="pointer-events-none absolute right-1/2 top-1/2 z-[100]" />

      <ProjectsHero />

      {error && (
        <p role="alert" className="mx-auto max-w-7xl px-5 text-sm text-red-700">
          {error}
        </p>
      )}

      <ProjectFilters
        onSearchChange={setSearch}
        onFieldChange={setSelectedField}
        projects={projects}
      />

      <FeaturedProjects projects={projects} />

      <ProjectsGrid
        search={search}
        selectedField={selectedField}
        projects={projects}
      />

      <ProjectsCTA />
    </main>
  );
}
