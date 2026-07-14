import { AtSign, Camera, GitBranch, Link as LinkIcon, Mail } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-shell">
        <div className="mb-10 rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6 shadow-sm md:p-10">
          <p className="eyebrow">Available for selective work</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-4xl font-black tracking-tight md:text-6xl">
              Let&apos;s build something great.
            </h2>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-bold text-background"
            >
              Start a conversation
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nityam Mishra. Built with Next.js.</p>
          <div className="flex items-center gap-3">
            <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitBranch size={18} />
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkIcon size={18} />
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera size={18} />
            </a>
            <a href={site.socials.x} target="_blank" rel="noreferrer" aria-label="X">
              <AtSign size={18} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
