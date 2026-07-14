import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Articles by Nityam Mishra on voice AI, multi-agent systems, backend engineering, system design, and AWS deployments.",
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen pb-24 pt-32">
      <div className="container-shell">
        <p className="eyebrow">Writing</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          Notes from building AI and web products.
        </h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6 transition hover:-translate-y-1"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-background px-3 py-1 text-xs text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-8 text-2xl font-black">{post.title}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{post.description}</p>
              <p className="mt-6 text-sm font-semibold text-[var(--accent)]">
                {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
