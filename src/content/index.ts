import { experience } from "./experience";
import { profile } from "./profile";
import { placeholderProjects } from "./projects/placeholders";
import type { Project } from "./schema";

/** Every case study, in the order they appear on the home page. */
export const projects: Project[] = [...placeholderProjects];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export { experience, profile };
