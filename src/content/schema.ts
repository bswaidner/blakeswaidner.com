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
  /** The role line under the name, e.g. the title being applied for. */
  role: text,
  location: text,
  summary: text,
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
  /** One line shown on the home page. */
  tagline: text,
  /** What Blake did on it, in his own role terms. */
  role: text,
  period: text,
  stack: z.array(text).min(1),
  featured: z.boolean(),
  /** The case study, in the order a reader asks: why, what, how, so what. */
  problem: text,
  built: z.array(text).min(1),
  decisions: z.array(z.object({ title: text, detail: text })),
  outcome: z.array(text).min(1),
  /** At least one checkable link. A case study with no evidence does not ship. */
  evidence: z.array(evidenceSchema).min(1),
});

export type Link = z.infer<typeof linkSchema>;
export type Evidence = z.infer<typeof evidenceSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
