"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems, site } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav
        className={`container-shell flex h-16 items-center justify-between rounded-full border border-[var(--line)] px-3 pl-4 transition-all duration-300 ${scrolled
          ? "bg-[var(--panel-strong)]/80 shadow-lg backdrop-blur-xl"
          : "bg-[var(--panel-strong)]/40 backdrop-blur-md"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            className="w-8 h-8"
            src="/images/nityam.png" />

          <span className="font-display hidden text-sm font-bold tracking-tight sm:inline">
            {site.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--panel)] p-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 ${isActive
                    ? "text-background"
                    : "text-[var(--muted)] hover:text-foreground"
                    }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hidden size-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] sm:grid"
          >
            <FaGithub size={18} />
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid size-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel)] md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/98 p-6 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="grid size-9 place-items-center rounded-full bg-foreground font-mono text-sm font-bold text-background">
                NM
              </span>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-[var(--line)]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-14 grid gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`font-display block border-b border-[var(--line)] py-5 text-4xl font-bold transition-colors ${pathname === item.href
                      ? "text-[var(--accent)]"
                      : "text-foreground"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* GitHub */}
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex items-center gap-2 text-sm font-semibold text-[var(--muted)]"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}