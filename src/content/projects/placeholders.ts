import type { Project } from "../schema";

// Placeholder case studies that show the shape of the index. Replace each
// with a real project file before launch.
const seeds = [
  { slug: "project-one", title: "Project one", kind: "Case study", color: "#FF4B1F" },
  { slug: "project-two", title: "Project two", kind: "Case study", color: "#F2C230" },
  { slug: "project-three", title: "Project three", kind: "Interactive", color: "#7CC4FF" },
  { slug: "project-four", title: "Project four", kind: "Project", color: "#D8F34A" },
  { slug: "small-things", title: "Small things", kind: "Craft", color: "#EDEDEB" },
] as const;

export const placeholderProjects: Project[] = seeds.map((seed) => ({
  ...seed,
  tagline:
    "Placeholder: one sentence on what it is, who it was for, and what changed because of it.",
  year: "Year",
  role: "Role placeholder",
  team: "Team size",
  stack: ["Key tech"],
  featured: true,
  context:
    "Placeholder: two or three sentences on the situation, the users, and why this work mattered when it did.",
  myRole:
    "Placeholder: what Blake owned, what he decided, and who he worked with.",
  hardPart:
    "Placeholder: the one problem that made this difficult, the options weighed, and the call made.",
  outcome: {
    metrics: [
      { value: "Metric", label: "What it measures" },
      { value: "Metric", label: "What it measures" },
      { value: "Metric", label: "What it measures" },
    ],
    text: "Placeholder: what shipped and what Blake would do differently.",
  },
  evidence: [
    {
      kind: "repo",
      label: "Source for this site",
      href: "https://github.com/bswaidner/blakeswaidner.com",
    },
  ],
}));
