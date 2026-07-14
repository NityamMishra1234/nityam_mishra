import { ArrowRight, CheckCircle2, ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {  Reveal,  } from "@/components/motion";
import { projects, services, site, skillGroups, stats, whyHire } from "@/lib/data";
import { Hero } from "@/components/home/hero";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const clientWork = projects.filter((project) => !project.featured);

  return (
    <>
      <Hero />

      <section id="about" className="py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Engineering range with AI systems depth.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xl leading-9 text-[var(--muted)]">
              I am a full-stack developer specializing in AI-native applications, currently building
              real-time voice AI systems in production. I work across the entire stack, from
              React/Next.js frontends to FastAPI and Node backends to deploying and scaling on AWS.
              I also take freelance and agency projects from idea to launch.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-4">
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="container-shell mt-12 overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-4">
          <div className="flex w-max gap-3" style={{ animation: "marquee 24s linear infinite" }}>
            {[...skillGroups, ...skillGroups].map((group, index) => (
              <div key={`${group.title}-${index}`} className="flex items-center gap-2">
                <span className="font-bold">{group.title}</span>
                {group.skills.map((skill) => (
                  <span key={`${skill}-${index}`} className="rounded-full border border-[var(--line)] px-3 py-1 text-sm text-[var(--muted)]">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              What I can ship for teams, founders, and clients.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <div className="group h-full rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <Icon className="text-[var(--accent)]" size={26} />
                    <h3 className="mt-8 text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{service.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Why hire me</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Real proof, not tutorial polish.
            </h2>
          </Reveal>
          <div className="grid gap-3">
            {whyHire.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="flex gap-4 rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-[var(--accent)]" size={20} />
                  <p className="leading-7 text-[var(--muted)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" id="projects">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">Projects</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Flagship AI and production work.
              </h2>
            </Reveal>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
              View all projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featured.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.title} delay={index * 0.06}>
                  <article className="h-full rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6">
                    <div className="flex items-center justify-between">
                      <Icon className="text-[var(--accent)]" size={28} />
                      <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-black">{project.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{project.description}</p>
                    <p className="mt-4 text-sm font-semibold">{project.impact}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full bg-background px-3 py-1 text-xs text-[var(--muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-3">
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                          <GitBranch size={18} />
                        </a>
                      ) : null}
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
                          <ExternalLink size={18} />
                        </a>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <h3 className="mt-16 text-2xl font-black">Client & Freelance Work</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {clientWork.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5 transition hover:-translate-y-1"
              >
                <p className="text-sm text-[var(--muted)]">{project.type}</p>
                <h4 className="mt-2 text-xl font-bold">{project.title}</h4>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: site.role,
            url: "https://nityammishra.dev",
            sameAs: Object.values(site.socials),
          }),
        }}
      />
    </>
  );
}
