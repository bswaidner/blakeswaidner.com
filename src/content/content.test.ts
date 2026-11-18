import { describe, expect, it } from "vitest";

import { experience, getProject, profile, projects } from "./index";
import { experienceSchema, profileSchema, projectSchema } from "./schema";

describe("site content", () => {
  it("has a valid profile", () => {
    expect(profileSchema.safeParse(profile).error).toBeUndefined();
  });

  it("has valid experience entries, newest first", () => {
    for (const entry of experience) {
      expect(
        experienceSchema.safeParse(entry).error,
        entry.company,
      ).toBeUndefined();
      if (entry.end) expect(entry.end >= entry.start, entry.company).toBe(true);
    }
    const starts = experience.map((entry) => entry.start);
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it("has valid case studies, each with evidence a reader can open", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(
        projectSchema.safeParse(project).error,
        project.slug,
      ).toBeUndefined();
    }
  });

  it("gives every case study its own address", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const project of projects) {
      expect(getProject(project.slug)).toBe(project);
    }
    expect(getProject("no-such-project")).toBeUndefined();
  });
});

describe("case study schema", () => {
  it("rejects a case study with no evidence", () => {
    const withoutEvidence = { ...projects[0], evidence: [] };
    expect(projectSchema.safeParse(withoutEvidence).success).toBe(false);
  });
});
