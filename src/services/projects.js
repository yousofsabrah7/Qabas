import { projects as defaultProjects } from "../Data/ProjectsData";

export const PROJECTS_STORAGE_KEY = "qabas-managed-projects";
const PROJECTS_UPDATED_EVENT = "qabas-projects-updated";

function isValidProjectList(projects) {
  return (
    Array.isArray(projects) &&
    projects.every(
      (project) =>
        project &&
        Number.isFinite(project.id) &&
        typeof project.title === "string" &&
        typeof project.category === "string" &&
        typeof project.description === "string" &&
        typeof project.image === "string"
    ) &&
    new Set(projects.map((project) => project.id)).size ===
      projects.length
  );
}

export function readManagedProjects() {
  const savedProjects = localStorage.getItem(PROJECTS_STORAGE_KEY);

  if (savedProjects === null) {
    return defaultProjects;
  }

  const parsedProjects = JSON.parse(savedProjects);

  if (!isValidProjectList(parsedProjects)) {
    throw new Error("بيانات المشاريع المحفوظة غير صالحة.");
  }

  return parsedProjects;
}

export function saveManagedProjects(projects) {
  if (!isValidProjectList(projects)) {
    throw new Error(
      "بيانات المشاريع غير صالحة أو تحتوي على أرقام تعريف مكررة."
    );
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
