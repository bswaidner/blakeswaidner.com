import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getProject, projects } from "@/content";

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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="mt-3 leading-7">{children}</div>
    </section>
  );
}

export default async function CaseStudy({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="flex flex-col gap-10 pt-10">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-2 max-w-prose text-muted-foreground">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          {project.role} · {project.period}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item}>
              <Badge variant="secondary">{item}</Badge>
            </li>
          ))}
        </ul>
      </header>

      <Section title="Problem">
        <p className="max-w-prose">{project.problem}</p>
      </Section>

      <Section title="What I built">
        <ul className="list-disc space-y-1 pl-5">
          {project.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      {project.decisions.length > 0 && (
        <Section title="Decisions">
          <dl className="flex flex-col gap-4">
            {project.decisions.map((decision) => (
              <div key={decision.title}>
                <dt className="font-medium">{decision.title}</dt>
                <dd className="max-w-prose text-muted-foreground">
                  {decision.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section title="Outcome">
        <ul className="list-disc space-y-1 pl-5">
          {project.outcome.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Check it yourself">
        <ul className="flex flex-col gap-1">
          {project.evidence.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="underline underline-offset-4">
                {item.label}
              </a>{" "}
              <span className="text-sm text-muted-foreground">
                ({item.kind})
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
