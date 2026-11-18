import type { MetadataRoute } from "next";

import { projects } from "@/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/resume",
    ...projects.map((project) => `/work/${project.slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
