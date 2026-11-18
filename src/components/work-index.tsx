"use client";

import Link from "next/link";
import { useState } from "react";

import type { Project } from "@/content/schema";

import { ProjectMat, ProjectRowLabel, rowClass } from "./project-row";

/**
 * The home page's list of projects. On wide screens one preview frame below
 * the list follows the row under the pointer or keyboard focus; on narrow
 * screens each row carries its own.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const active =
    projects.find((project) => project.slug === activeSlug) ?? projects[0];

  return (
    <section id="work" className="flex scroll-mt-8 flex-col gap-8">
      <div className="flex flex-col border-b border-ink">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={rowClass}
            onMouseEnter={() => setActiveSlug(project.slug)}
            onFocus={() => setActiveSlug(project.slug)}
          >
            <ProjectRowLabel project={project} />
            <ProjectMat
              project={project}
              className="mt-2 basis-full p-3 md:hidden"
            />
          </Link>
        ))}
      </div>
      {active && (
        <div aria-hidden="true" className="hidden md:block">
          <ProjectMat project={active} className="p-8" />
        </div>
      )}
    </section>
  );
}
