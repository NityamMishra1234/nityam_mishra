import type { Metadata } from "next";
import { ProjectsClient } from "@/components/projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI systems, full-stack products, and client work by Nityam Mishra.",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pb-24 pt-32">
      <div className="container-shell">
        <p className="eyebrow">Selected work</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          AI-native builds, production systems, and client delivery.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          A focused view of Nityam&apos;s flagship AI projects, professional voice-AI work, and real-world commercial websites.
        </p>
        <ProjectsClient />
      </div>
    </section>
  );
}
