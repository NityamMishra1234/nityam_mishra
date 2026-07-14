"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/motion";

export function Hero() {
    return (
        <section className="relative flex h-screen min-h-[860px] items-center overflow-hidden">
            {/* ===================== VIDEO ===================== */}

            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/nityam-ai-hero.png"
                className="absolute inset-0 h-full w-full object-cover scale-[1.04]"
            >
                <source src="/portfolioVidoe.mp4" type="video/mp4" />
            </video>

            {/* ===================== OVERLAYS ===================== */}
            {/*
                Colour-based (black opacity) overlays, not tied to the
                `background` theme token — the hero always reads as white
                text on a dark scrim, regardless of site theme.
            */}

            <div className="absolute inset-0 bg-black/40 dark:bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent dark:from-black/80 dark:via-black/35 dark:to-transparent" />

            <div className="absolute -left-40 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[170px]" />

            <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/25 to-transparent dark:from-black/40" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

            {/* ===================== CONTENT ===================== */}

            <div className="relative z-20 w-full pt-24">
                <div className="container-shell">

                    <div className="max-w-3xl">

                        <Reveal>
                            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/80 dark:text-cyan-300">
                                FULL-STACK ENGINEER • AI SYSTEMS • VOICE AI
                            </p>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <h1 className="font-display mt-8 text-[68px] font-black leading-[0.84] tracking-[-0.06em] text-white sm:text-[86px] md:text-[112px] xl:text-[138px]">
                                Nityam
                                <br />
                                Mishra
                            </h1>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/85 md:text-[22px] md:leading-10">
                                Building production-grade AI systems, real-time voice agents,
                                intelligent automation, and modern web applications that scale
                                from prototype to production.
                            </p>
                        </Reveal>

                        <Reveal delay={0.22}>
                            <div className="mt-12 flex flex-wrap items-center gap-5">

                                {/* Primary CTA — plain motion.div, no external wrapper */}
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    whileHover={{ y: -2, scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                                    className="inline-block"
                                >
                                    <Link
                                        href="/projects"
                                        className="group inline-flex h-14 items-center justify-center rounded-full  px-8 text-[15px] font-semibold text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                                    >
                                        View Projects
                                        <ArrowRight
                                            size={18}
                                            className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                                        />
                                    </Link>
                                </motion.div>

                                {/* Secondary CTA */}
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                                    className="inline-block"
                                >
                                    <Link
                                        href="/contact"
                                        className="group inline-flex h-14 items-center justify-center rounded-full  px-8 text-[15px] font-semibold text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                                    >
                                        Let's Talk
                                    </Link>
                                </motion.div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-white/80">

                                <span className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    Production AI
                                </span>

                                <span className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                                    Voice Agents
                                </span>

                                <span className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                                    Full-Stack Development
                                </span>

                            </div>
                        </Reveal>

                    </div>
                </div>
            </div>

            {/* ===================== SEAM INTO NEXT SECTION ===================== */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}