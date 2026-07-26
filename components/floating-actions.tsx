"use client";

import { Bot, Plus, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { AiChat } from "./ai-chat";

const iconButtonClasses =
  "grid size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] shadow-lg transition-colors duration-150 hover:border-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const showHint = window.setTimeout(() => {
      setHint(true);
      setPulse(true);
    }, 1700);
    const hideHint = window.setTimeout(() => {
      setHint(false);
      setPulse(false);
    }, 7600);
    return () => {
      window.clearTimeout(showHint);
      window.clearTimeout(hideHint);
    };
  }, []);

  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Nityam, I'd like to talk about a project")}`
    : `mailto:${site.email}`;

  const links = [
    { href: site.socials.github, label: "GitHub", icon: FaGithub },
    { href: site.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
    { href: whatsappHref, label: "WhatsApp", icon: FaWhatsapp },
  ];

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {hint && !linksOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="glass rounded-full px-4 py-2 text-sm font-semibold"
            >
              Ask my AI anything about me
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {linksOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-end gap-3"
            >
              {links.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className={iconButtonClasses}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          aria-label={linksOpen ? "Close contact links" : "More ways to reach me"}
          title={linksOpen ? "Close" : "Contact links"}
          onClick={() => setLinksOpen((open) => !open)}
          className={iconButtonClasses}
        >
          {linksOpen ? <X size={18} /> : <Plus size={18} />}
        </button>

        <button
          type="button"
          aria-label="Open Nityam AI Assistant"
          title="AskNM"
          onClick={() => {
            setChatOpen(true);
            setHint(false);
            setPulse(false);
          }}
          className="grid size-12 place-items-center rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-2xl transition-transform duration-150 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          style={pulse ? { animation: "pulse-soft 2.4s ease-in-out 3" } : undefined}
        >
          <Bot size={18} />
        </button>
      </div>
      <AiChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}