import type { Project } from "../schema";

// Placeholder that shows the shape of a case study. Replace before launch.
export const exampleCaseStudy: Project = {
  slug: "example-case-study",
  title: "Example case study",
  tagline: "Placeholder: one line saying what it is and why it mattered.",
  role: "Role placeholder",
  period: "2024 to 2025",
  stack: ["TypeScript", "Next.js"],
  featured: true,
  problem:
    "Placeholder: the situation and the constraint that made this hard, in two or three sentences.",
  built: [
    "Placeholder: a part Blake designed and built himself.",
    "Placeholder: another part, with its scale.",
  ],
  decisions: [
    {
      title: "Placeholder decision",
      detail:
        "Placeholder: the options considered, the one chosen, and what it cost.",
    },
  ],
  outcome: ["Placeholder: a result a reader can check."],
  evidence: [
    {
      kind: "repo",
      label: "Source for this site",
      href: "https://github.com/bswaidner/blakeswaidner.com",
    },
  ],
};
