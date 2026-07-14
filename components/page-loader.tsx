"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(
    typeof sessionStorage !== "undefined" && !sessionStorage.getItem("nm-loaded"),
  );

  useEffect(() => {
    if (!show) {
      return;
    }
    sessionStorage.setItem("nm-loaded", "true");
    const timer = window.setTimeout(() => setShow(false), 1150);
    return () => window.clearTimeout(timer);
  }, [show]);

  if (!show) {
    return null;
  }

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
