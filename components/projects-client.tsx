"use client";

import { ExternalLink, GitBranch } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "./motion";

const filters = ["All", "AI Projects", "Client Work"];

export function ProjectsClient() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              filter === item
                ? "border-foreground bg-foreground text-background"
                : "border-[var(--line)] bg-[var(--panel-strong)] text-[var(--muted)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {visible.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="h-full rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6">
                <div className="flex items-center justify-between">
                  <Icon className="text-[var(--accent)]" size={28} />
                  <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                    {project.category}
                  </span>
                </div>
                <h2 className="mt-8 text-3xl font-black">{project.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{project.description}</p>
                <p className="mt-4 text-sm font-semibold">{project.impact}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-background px-3 py-1 text-xs text-[var(--muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex gap-4 text-sm font-bold">
                  {project.github ? (
                    <a className="inline-flex items-center gap-2" href={project.github} target="_blank" rel="noreferrer">
                      <GitBranch size={16} /> Backend repo
                    </a>
                  ) : null}
                  {project.secondaryGithub ? (
                    <a className="inline-flex items-center gap-2" href={project.secondaryGithub} target="_blank" rel="noreferrer">
                      <GitBranch size={16} /> Frontend repo
                    </a>
                  ) : null}
                  {project.href ? (
                    <a className="inline-flex items-center gap-2" href={project.href} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} /> Live
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
