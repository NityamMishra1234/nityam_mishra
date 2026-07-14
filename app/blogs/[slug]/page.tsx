import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, renderMarkdown } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pb-24 pt-32">
      <div className="container-shell max-w-3xl">
        <p className="eyebrow">{post.readTime}</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-[var(--muted)]">{post.description}</p>
        <div
          className="article-body mt-12"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </div>
    </article>
  );
}
