import type { Project } from "@/content/schema";

export const rowClass =
  "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-t border-ink py-4 no-underline";

/** A project's name set large beside its colour square, with its meta line. */
export function ProjectRowLabel({
  project,
  here = false,
}: {
  project: Project;
  /** True on the row for the case study being read. */
  here?: boolean;
}) {
  return (
    <>
      <span className="inline-flex items-baseline gap-4 text-[clamp(34px,5vw,64px)] leading-none font-semibold tracking-[-0.045em]">
        <span
          aria-hidden="true"
          className="box-border size-[0.42em] shrink-0 border border-ink"
          style={{ background: project.color }}
        />
        {project.title}
      </span>
      {here ? (
        <span className="label font-semibold text-ink">You are here</span>
      ) : (
        <span className="label">
          {project.kind} · {project.year}
        </span>
      )}
    </>
  );
}

/** The project's image inside a mat of its colour. A panel of copy stands in until there is an image. */
export function ProjectMat({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <span
      className={`block ${className}`}
      style={{ background: project.color }}
    >
      <span className="flex aspect-video items-center justify-center bg-white p-6 text-center text-[13px] text-muted-foreground">
        {project.tagline}
      </span>
    </span>
  );
}
