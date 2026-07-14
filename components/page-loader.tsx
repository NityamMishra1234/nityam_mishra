"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);

    const loaded = sessionStorage.getItem("nm-loaded");

    if (!loaded) {
      setShow(true);
      sessionStorage.setItem("nm-loaded", "true");

      const timer = window.setTimeout(() => {
        setShow(false);
      }, 1150);

      return () => window.clearTimeout(timer);
    }
  }, []);

  if (!mounted || !show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.75, duration: 0.45 }}
    >
      <motion.div
        className="grid size-20 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] text-xl font-black"
        initial={{ scale: 0.86, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        NM
      </motion.div>
    </motion.div>
  );
}