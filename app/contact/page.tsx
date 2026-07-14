import type { Metadata } from "next";
import { AtSign, Camera, GitBranch, Link as LinkIcon, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nityam Mishra for full-time roles, freelance projects, AI integrations, and SaaS MVP development.",
};

export default function ContactPage() {
  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Nityam, I'd like to talk about a project")}`
    : `mailto:${site.email}`;

  return (
    <section className="min-h-screen pb-24 pt-32">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
            Tell me what you are building.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Open to full-time software roles, AI-native product builds, SaaS MVPs, and selective client work through GCS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-bold text-background" href={`mailto:${site.email}`}>
              <Mail size={16} /> Email
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-5 py-3 text-sm font-bold" href={whatsappHref}>
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
          <div className="mt-8 flex gap-4 text-[var(--muted)]">
            <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch /></a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkIcon /></a>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a>
            <a href={site.socials.x} target="_blank" rel="noreferrer" aria-label="X"><AtSign /></a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
