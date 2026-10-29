import { useEffect, useState } from "react";
import {
  readManagedProjects,
  saveManagedProjects,
  subscribeToManagedProjects,
} from "../services/projects";
import { projects as defaultProjects } from "../Data/ProjectsData";

export default function useManagedProjects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [error, setError] = useState("");

  useEffect(() => {
    const refreshProjects = () => {
      try {
        setProjects(readManagedProjects());
        setError("");
      } catch {
        setError(
          "تعذر تحميل المشاريع المحفوظة. تحقق من مساحة التخزين المحلية في المتصفح."
        );
      }
    };

    refreshProjects();
    return subscribeToManagedProjects(refreshProjects);
  }, []);

  const saveProjects = (updatedProjects) => {
    saveManagedProjects(updatedProjects);
    setProjects(updatedProjects);
    setError("");
  };

  return { projects, error, saveProjects };
}
