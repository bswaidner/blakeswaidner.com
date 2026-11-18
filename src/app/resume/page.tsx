import type { Metadata } from "next";
import Link from "next/link";

import { ContactLinks } from "@/components/contact-links";
import { ExperienceDetail } from "@/components/experience";
import { Spine, SpinePage } from "@/components/spine";
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
    <SpinePage spine={<Spine title={profile.name} />}>
      <div className="mt-1 flex min-w-0 flex-1 flex-col gap-12 md:mt-0 md:gap-16 md:pt-2">
        <header className="flex flex-wrap items-center justify-between gap-x-6 md:border-b md:border-ink">
          <span className="label">
            {profile.role} · {profile.location}
          </span>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-[15px] print:hidden"
          >
            Index
          </Link>
        </header>

        <p className="m-0 max-w-[860px] text-[clamp(24px,2.8vw,34px)] leading-[1.2] font-medium tracking-[-0.025em]">
          {profile.summary}
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="label m-0">Experience</h2>
          <ExperienceDetail entries={experience} />
        </section>

        <ul className="m-0 hidden list-none flex-col gap-1 p-0 text-[15px] print:flex">
          {profile.links.map((link) => (
            <li key={link.href}>{link.href}</li>
          ))}
        </ul>

        <ContactLinks resume={false} />
      </div>
    </SpinePage>
  );
}
