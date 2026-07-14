import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nityammishra.dev";
  const routes = ["", "/about", "/services", "/projects", "/blogs", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const blogs = getAllPosts().map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...blogs];
}
