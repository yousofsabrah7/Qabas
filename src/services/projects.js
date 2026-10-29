import { projects as defaultProjects } from "../Data/ProjectsData";

export const PROJECTS_STORAGE_KEY = "qabas-managed-projects";
const PROJECTS_UPDATED_EVENT = "qabas-projects-updated";

export function readManagedProjects() {
  const savedProjects = localStorage.getItem(PROJECTS_STORAGE_KEY);

  if (savedProjects === null) {
    return defaultProjects;
  }

  const parsedProjects = JSON.parse(savedProjects);

  if (
    !Array.isArray(parsedProjects) ||
    parsedProjects.length !== defaultProjects.length ||
    parsedProjects.some(
      (project) =>
        !project ||
        typeof project.id !== "number" ||
        typeof project.title !== "string" ||
        typeof project.category !== "string" ||
        typeof project.description !== "string" ||
        typeof project.image !== "string"
    )
  ) {
    throw new Error("بيانات المشاريع المحفوظة غير صالحة.");
  }

  return parsedProjects;
}

export function saveManagedProjects(projects) {
  if (
    !Array.isArray(projects) ||
    projects.length !== defaultProjects.length
  ) {
    throw new Error("يجب أن تحتوي قائمة المشاريع على 12 مشروعًا.");
  }

  localStorage.setItem(
    PROJECTS_STORAGE_KEY,
    JSON.stringify(projects)
  );
  window.dispatchEvent(new Event(PROJECTS_UPDATED_EVENT));
}

export function subscribeToManagedProjects(callback) {
  const handleStorage = (event) => {
    if (event.key === PROJECTS_STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(PROJECTS_UPDATED_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(PROJECTS_UPDATED_EVENT, callback);
  };
}
