import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { site, skillGroups, stats, whyHire } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nityam Mishra, a full-stack and AI-native engineer building voice AI systems and production-grade web products.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pb-24 pt-32">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">About Nityam</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
              Full-stack range with real AI systems experience.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              {site.role}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6 md:p-8">
              <p className="text-xl leading-9 text-[var(--muted)]">
                I am a full-stack developer specializing in AI-native applications, currently building
                real-time voice AI systems in production. I work across React and Next.js frontends,
                FastAPI and Node backends, AWS deployments, and client-facing product delivery.
              </p>
              <p className="mt-5 text-xl leading-9 text-[var(--muted)]">
                I also run GCS, my own software agency, which keeps my engineering close to real
                business outcomes: clear scope, reliable delivery, and products that are useful after launch.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-bold text-background"
              >
                Work with me
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.04}>
              <div className="rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5">
                <p className="text-4xl font-black">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="h-full rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6">
                <h2 className="text-xl font-black">{group.title}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--line)] bg-background px-3 py-1 text-sm text-[var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Why hire me</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Proof from production and client work.
            </h2>
          </Reveal>
          <div className="grid gap-3">
            {whyHire.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex gap-4 rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-[var(--accent)]" size={20} />
                  <p className="leading-7 text-[var(--muted)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
