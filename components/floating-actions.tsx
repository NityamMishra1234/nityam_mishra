"use client";

import { Bot, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { AiChat } from "./ai-chat";

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHint(true), 1700);
    const hide = window.setTimeout(() => setHint(false), 7600);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(hide);
    };
  }, []);

  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Nityam, I'd like to talk about a project")}`
    : "/contact";

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {hint ? (
          <div className="glass rounded-full px-4 py-2 text-sm font-semibold">
            Ask my AI anything about me
          </div>
        ) : null}

        <button
          type="button"
          aria-label="Open Nityam AI Assistant"
          title="AskNM"
          onClick={() => setChatOpen(true)}
          className="grid size-12 place-items-center rounded-full bg-foreground text-background shadow-2xl"
          style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }}
        >
          <Bot size={18} />
        </button>
        <a
          href={site.phone ? `tel:${site.phone}` : "/contact"}
          aria-label="Call Nityam"
          title="Call"
          className="grid size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] shadow-lg"
        >
          <FaGithub size={18} />
        </a>

        <a
          href={"/"}
          aria-label="Call Nityam"
          title="Call"
          className="grid size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] shadow-lg"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href={site.phone ? `tel:${site.phone}` : "/contact"}
          aria-label="Call Nityam"
          title="Call"
          className="grid size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] shadow-lg"
        >
          <Phone size={18} />
        </a>
        <a
          href={whatsappHref}
          aria-label="WhatsApp Nityam"
          title="WhatsApp"
          className="grid size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] shadow-lg"
        >
          <FaWhatsapp size={18} />
        </a>

      </div>
      <AiChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
