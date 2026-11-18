import Link from "next/link";

import { ExperienceList } from "@/components/experience-list";
import { Separator } from "@/components/ui/separator";
import { experience, featuredProjects, profile } from "@/content";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pt-10">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-muted-foreground">
          {profile.role} · {profile.location}
        </p>
        <p className="mt-5 max-w-prose leading-7">{profile.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline underline-offset-4 hover:text-muted-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/resume"
              className="underline underline-offset-4 hover:text-muted-foreground"
            >
              Resume
            </Link>
          </li>
        </ul>
      </section>

      <Separator />

      <section id="work" className="scroll-mt-8">
        <h2 className="text-sm font-medium text-muted-foreground">
          Selected work
        </h2>
        <ul className="mt-5 flex flex-col gap-6">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <h3 className="font-medium underline-offset-4 group-hover:underline">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.tagline}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.role} · {project.period}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section id="experience" className="scroll-mt-8">
        <h2 className="mb-5 text-sm font-medium text-muted-foreground">
          Experience
        </h2>
        <ExperienceList entries={experience} />
      </section>
    </div>
  );
}
