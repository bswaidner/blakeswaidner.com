import { z } from "zod";

const text = z.string().trim().min(1);
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);

export const linkSchema = z.object({
  label: text,
  href: z.url(),
});

/** Something a reader can open to check a claim: a listing, a repo, a write-up. */
export const evidenceSchema = linkSchema.extend({
  kind: z.enum(["live", "repo", "listing", "writeup", "video", "press"]),
});

export const profileSchema = z.object({
  name: text,
  /** The role line beside the name, e.g. the title being applied for. */
  role: text,
  location: text,
  /** The large opening statement on the home page. */
  summary: text,
  /** The "More" paragraph: life away from the keyboard. */
  more: text,
  links: z.array(linkSchema).min(1),
});

export const experienceSchema = z.object({
  company: text,
  title: text,
  start: month,
  /** Omit for a current role. */
  end: month.optional(),
  location: text.optional(),
  summary: text,
  highlights: z.array(text).min(1),
});

export const projectSchema = z.object({
  slug,
  title: text,
  /** One sentence: what it is, who it was for, and what changed because of it. */
  tagline: text,
  kind: z.enum(["Case study", "Interactive", "Project", "Craft"]),
  year: text,
  /** What Blake did on it, in his own role terms. */
  role: text,
  team: text,
  stack: z.array(text).min(1),
  /** The project's colour: its index square, image mat and outcome block. */
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  featured: z.boolean(),
  /** The situation: the product, the users, why the work mattered then. */
  context: text,
  /** What Blake owned and decided, and who he worked with. */
  myRole: text,
  /** The one problem that made it difficult, the options, the call made. */
  hardPart: text,
  outcome: z.object({
    metrics: z.array(z.object({ value: text, label: text })).max(3),
    text,
  }),
  /** At least one checkable link. A case study with no evidence does not ship. */
  evidence: z.array(evidenceSchema).min(1),
});

export type Link = z.infer<typeof linkSchema>;
export type Evidence = z.infer<typeof evidenceSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
