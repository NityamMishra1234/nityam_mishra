import { ArrowRight, AtSign, Camera, GitBranch, Link as LinkIcon, Mail } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/data";

const socials = [
  { href: site.socials.github, label: "GitHub", icon: GitBranch },
  { href: site.socials.linkedin, label: "LinkedIn", icon: LinkIcon },
  { href: site.socials.instagram, label: "Instagram", icon: Camera },
  { href: site.socials.x, label: "X", icon: AtSign },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-shell">
        <div className="mb-10 rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6 shadow-sm md:p-10">
          <p className="eyebrow">Available for selective work</p>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-balance max-w-2xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Let&apos;s build something great.
              </h2>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                Usually replies within 24h
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-[var(--foreground)] bg-transparent px-6 text-sm font-bold text-[var(--foreground)] transition-colors duration-200 hover:bg-amber-300 hover:text-[var(--background)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Start a conversation
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nityam Mishra. Built with Next.js.</p>

          <div className="flex items-center gap-2.5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--foreground)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--foreground)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}