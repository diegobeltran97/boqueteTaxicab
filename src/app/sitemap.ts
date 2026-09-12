import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/airport-transfers", changeFrequency: "weekly", priority: 0.9 },
  { path: "/boquete-taxi", changeFrequency: "weekly", priority: 0.85 },
  { path: "/tours", changeFrequency: "weekly", priority: 0.8 },
  { path: "/rates", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
