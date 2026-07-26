import type { Metadata } from "next";
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
    <section className="min-h-screen pb-28 pt-32">
      <div className="container-shell">
        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow">About Nityam</p>
            <h1 className="text-balance mt-4 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Full-stack range with real AI systems experience.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-[var(--muted)]">
              {site.role}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-[var(--foreground)] bg-transparent px-6 text-sm font-bold text-[var(--background)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                Work with me
              </Link>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                Remote-friendly · India
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--panel-strong)] shadow-[var(--shadow)]">
              <div className="flex items-center gap-2 border-b border-[var(--line)] px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
                <span className="ml-3 font-mono text-xs text-[var(--muted)]">
                  ~/about.md
                </span>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-lg leading-8 text-[var(--muted)]">
                  I am a full-stack developer specializing in AI-native applications, currently
                  building real-time voice AI systems in production. I work across React and
                  Next.js frontends, FastAPI and Node backends, AWS deployments, and client-facing
                  product delivery.
                </p>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  I also run GCS, my own software agency, which keeps my engineering close to
                  real business outcomes: clear scope, reliable delivery, and products that are
                  useful after launch.
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[var(--line)] pt-4 font-mono text-xs text-[var(--muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  status: open to freelance &amp; full-time
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-2 divide-x divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--panel)] sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-6">
                <p className="text-3xl font-black tracking-tight md:text-4xl">{stat.value}</p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stack */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow">Stack</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              What I build with.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--panel)]">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="grid gap-3 px-6 py-5 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[var(--line)] px-2.5 py-1 font-mono text-xs text-[var(--foreground)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Why hire */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Why hire me</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Proof from production and client work.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="border-l border-[var(--line)]">
              {whyHire.map((item) => (
                <li key={item} className="relative py-4 pl-6">
                  <span className="absolute left-[-3.5px] top-[1.65rem] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <p className="leading-7 text-[var(--muted)]">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}