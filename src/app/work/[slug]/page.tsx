import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ProjectMat,
  ProjectRowLabel,
  rowClass,
} from "@/components/project-row";
import { Spine, SpinePage } from "@/components/spine";
import { getProject, profile, projects } from "@/content";

// Every case study is known at build time; any other slug is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

const two = (n: number) => String(n).padStart(2, "0");

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-rule py-3 text-xl tracking-[-0.01em]">
      <dt className="label">{label}</dt>
      <dd className="m-0 text-right">{children}</dd>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="m-0 flex items-baseline justify-between gap-4 border-t border-ink pt-3.5 text-[clamp(28px,3.6vw,44px)] leading-none font-semibold tracking-[-0.04em]">
        <span>{title}</span>
        <span className="label">{two(number)}</span>
      </h2>
      {children}
    </section>
  );
}

const bodyClass = "m-0 max-w-[680px] text-xl leading-normal";

export default async function CaseStudy({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const position = projects.indexOf(project) + 1;

  return (
    <SpinePage spine={<Spine title={project.title} color={project.color} />}>
      <article className="flex min-w-0 flex-1 flex-col gap-12 pt-1 md:gap-16 md:pt-2">
        <header className="flex flex-wrap items-center justify-between gap-x-6 border-b border-ink">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-[15px] font-semibold no-underline"
          >
            {profile.name}
          </Link>
          <span className="label">
            {two(position)} / {two(projects.length)} · {project.kind} ·{" "}
            {project.year}
          </span>
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center text-[15px]"
          >
            Index
          </Link>
        </header>

        <p className="m-0 max-w-[860px] text-[clamp(24px,2.8vw,34px)] leading-[1.2] font-medium tracking-[-0.025em]">
          {project.tagline}
        </p>

        <dl className="m-0 flex flex-col border-b border-rule">
          <Fact label="Role">{project.role}</Fact>
          <Fact label="Team">{project.team}</Fact>
          <Fact label="Stack">{project.stack.join(", ")}</Fact>
          <Fact label={project.evidence.length > 1 ? "Links" : "Link"}>
            <span className="flex flex-col items-end gap-1">
              {project.evidence.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </span>
          </Fact>
        </dl>

        <ProjectMat project={project} className="p-3 md:p-8" />

        <Section number={1} title="Context">
          <p className={bodyClass}>{project.context}</p>
        </Section>

        <Section number={2} title="My role">
          <p className={bodyClass}>{project.myRole}</p>
        </Section>

        <Section number={3} title="The hard part">
          <p className={bodyClass}>{project.hardPart}</p>
        </Section>

        <Section number={4} title="Outcome">
          <div
            className="flex flex-col gap-7 p-5 md:p-8"
            style={{ background: project.color }}
          >
            {project.outcome.metrics.length > 0 && (
              <dl className="m-0 flex flex-wrap gap-x-8 gap-y-6">
                {project.outcome.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex shrink grow basis-[170px] flex-col-reverse gap-1"
                  >
                    <dt className="text-sm font-medium">{metric.label}</dt>
                    <dd className="m-0 text-[clamp(36px,5vw,64px)] leading-none font-semibold tracking-[-0.04em]">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <p className={`${bodyClass} font-medium`}>{project.outcome.text}</p>
          </div>
        </Section>

        <nav aria-label="All work" className="flex flex-col gap-3">
          <div className="label">Index</div>
          <div className="flex flex-col border-b border-ink">
            {projects.map((other) =>
              other === project ? (
                <div key={other.slug} className={rowClass} aria-current="page">
                  <ProjectRowLabel project={other} here />
                </div>
              ) : (
                <Link
                  key={other.slug}
                  href={`/work/${other.slug}`}
                  className={rowClass}
                >
                  <ProjectRowLabel project={other} />
                </Link>
              ),
            )}
          </div>
        </nav>
      </article>
    </SpinePage>
  );
}
