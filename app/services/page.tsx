import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development, AI integrations, SaaS MVPs, cloud deployment, and agency-style project delivery by Nityam Mishra.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen pb-24 pt-32">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Engineering services for teams that need shipping, not theater.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I help founders, agencies, and product teams turn web and AI ideas into usable,
            deployable software with clean interfaces and practical backend systems.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="h-full rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)] p-6 md:p-8">
                  <Icon className="text-[var(--accent)]" size={30} />
                  <h2 className="mt-8 text-3xl font-black">{service.title}</h2>
                  <p className="mt-4 leading-8 text-[var(--muted)]">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 rounded-[8px] border border-[var(--line)] bg-foreground p-6 text-background md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">
              Ready to discuss a build?
            </p>
            <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-2xl text-3xl font-black md:text-5xl">
                Bring the idea. I will help shape the product path.
              </h2>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-background px-6 text-sm font-bold text-foreground"
              >
                Contact me <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
