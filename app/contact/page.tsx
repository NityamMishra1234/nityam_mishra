import type { Metadata } from "next";

import {
  AtSign,
  Camera,
  GitBranch,
  Link as LinkIcon,
  Mail,
  MessageCircle,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Nityam Mishra",
  description:
    "Contact Nityam Mishra for full time roles, freelance projects, AI integrations, SaaS MVP development, and software engineering work.",
};

const EMAIL = "nityam1111@gmail.com";
const WHATSAPP_NUMBER = "919905805143";

const emailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=nityam1111@gmail.com";

const whatsappHref =
  "https://wa.me/919905805143?text=" +
  encodeURIComponent(
    "Hi Nityam, I'd like to talk about a project."
  );

const socials = [
  {
    href: site.socials.github,
    label: "GitHub",
    icon: GitBranch,
  },
  {
    href: site.socials.linkedin,
    label: "LinkedIn",
    icon: LinkIcon,
  },
  {
    href: site.socials.instagram,
    label: "Instagram",
    icon: Camera,
  },
  {
    href: site.socials.x,
    label: "X",
    icon: AtSign,
  },
];

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hi Nityam, I'd like to talk about a project.",
  );

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const emailHref =
    `mailto:${EMAIL}`;

  return (
    <section className="min-h-screen pb-24 pt-32">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="flex flex-col space-y-6">
            <div>
              <p className="eyebrow text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                Get in touch
              </p>

              <h1 className="mt-4 text-balance text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Tell me what you are building.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Whether you are hiring, building a product, or looking for
                someone to help turn an idea into a working system, feel free
                to reach out.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nityam1111@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-[var(--foreground)] bg-transparent px-6 text-sm font-bold text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground)]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <Mail size={18} />

                <span>Email Me</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-6 text-sm font-bold text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <MessageCircle
                  size={18}
                  className="text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]"
                />

                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nityam1111@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                nityam1111@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 pt-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-200 hover:scale-105 hover:border-[var(--foreground)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <Icon
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}