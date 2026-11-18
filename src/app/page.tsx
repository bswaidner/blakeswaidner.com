import { ContactLinks } from "@/components/contact-links";
import { ExperienceRows } from "@/components/experience";
import { Spine, SpinePage } from "@/components/spine";
import { WorkIndex } from "@/components/work-index";
import { experience, featuredProjects, profile } from "@/content";

const navLink = "inline-flex min-h-11 items-center text-[15px] no-underline";

export default function Home() {
  return (
    <SpinePage spine={<Spine title={profile.name} />}>
      <div className="mt-1 flex min-w-0 flex-1 flex-col gap-14 md:mt-0 md:gap-[72px] md:pt-2">
        <header className="flex flex-wrap items-center justify-between gap-x-5 md:gap-x-8 md:border-b md:border-ink">
          <span className="label">
            {profile.role} · {profile.location}
          </span>
          <nav aria-label="Primary" className="flex flex-wrap gap-x-5 md:gap-x-7">
            <a href="#work" className={navLink}>
              Work
            </a>
            <a href="#experience" className={navLink}>
              Experience
            </a>
            <a href="#more" className={navLink}>
              More
            </a>
          </nav>
        </header>

        <p className="m-0 max-w-[860px] text-[clamp(24px,2.8vw,34px)] leading-[1.2] font-medium tracking-[-0.025em]">
          {profile.summary}
        </p>

        <WorkIndex projects={featuredProjects} />

        <section id="experience" className="flex scroll-mt-8 flex-col gap-3">
          <h2 className="label m-0">Experience</h2>
          <ExperienceRows entries={experience} />
        </section>

        <section id="more" className="flex scroll-mt-8 flex-col gap-3">
          <h2 className="label m-0">More</h2>
          <p className="m-0 max-w-[720px] text-xl leading-[1.4] tracking-[-0.01em] md:text-[22px]">
            {profile.more}
          </p>
        </section>

        <ContactLinks />
      </div>
    </SpinePage>
  );
}
