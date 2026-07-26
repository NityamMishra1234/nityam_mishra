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

const buildServices = services.filter((service) =>
  ["Full-stack web development", "AI-native product development", "SaaS MVP development"].includes(
    service.title,
  ),
);

const deliverServices = services.filter(
  (service) => !buildServices.some((item) => item.title === service.title),
);

function ServiceGroup({
  label,
  items,
}: {
  label: string;
  items: typeof services;
}) {
  return (
    <div className="mt-8 divide-y divide-[var(--line)] overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--panel-strong)]">
      {items.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.title}
            className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-6 md:p-8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--line)] text-[var(--accent)]">
              <Icon size={20} />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                {label}
              </p>
              <h3 className="mt-1.5 text-xl font-black md:text-2xl">{service.title}</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">{service.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <section className="min-h-screen pb-24 pt-32">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h1 className="text-balance mt-4 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Engineering services for teams that need shipping, not theater.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I help founders, agencies, and product teams turn web and AI ideas into usable,
            deployable software with clean interfaces and practical backend systems.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
              What I build
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ServiceGroup label="Build" items={buildServices} />
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
              How it gets delivered
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ServiceGroup label="Delivery" items={deliverServices} />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 rounded-[8px] border border-[var(--line)] bg-[var(--foreground)] p-6 text-[var(--background)] md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">
              Ready to discuss a build?
            </p>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-2xl text-3xl font-black leading-[1.1] md:text-5xl">
                Bring the idea. I will help shape the product path.
              </h2>
              <Link
                href="/contact"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--background)] bg-transparent px-6 text-sm font-bold text-[var(--background)] transition-colors duration-200 hover:bg-[var(--background)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                Contact me
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}