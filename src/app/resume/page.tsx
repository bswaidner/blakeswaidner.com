import type { Metadata } from "next";

import { ExperienceList } from "@/components/experience-list";
import { experience, profile } from "@/content";

export const metadata: Metadata = {
  title: "Resume",
  description: `${profile.name}'s resume.`,
  alternates: { canonical: "/resume" },
};

// The PDF download is added with the real resume. Until then this page prints
// cleanly from the browser.
export default function Resume() {
  return (
    <div className="flex flex-col gap-8 pt-10 print:pt-0">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-muted-foreground">
          {profile.role} · {profile.location}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="underline underline-offset-4">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section>
        <h2 className="text-sm font-medium text-muted-foreground">Summary</h2>
        <p className="mt-3 max-w-prose leading-7">{profile.summary}</p>
      </section>

      <section>
        <h2 className="mb-5 text-sm font-medium text-muted-foreground">
          Experience
        </h2>
        <ExperienceList entries={experience} />
      </section>
    </div>
  );
}
