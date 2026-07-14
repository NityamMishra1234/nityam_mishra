"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
  );

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
      }}
      className="relative grid h-10 w-16 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)]"
    >
      <span
        className="absolute left-1 top-1 grid size-8 place-items-center rounded-full bg-foreground text-background transition-transform duration-300"
        style={{ transform: dark ? "translateX(24px)" : "translateX(0)" }}
      >
        {dark ? <Moon size={15} /> : <Sun size={15} />}
      </span>
    </button>
  );
}
