"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Phone3D from "../../AnimationObjects/Phone3D";
import Laptop3D from "../../AnimationObjects/Laptop3D";
import Tablet3D from "../../AnimationObjects/Tablet3D";
import Globe3D from "../../AnimationObjects/Globe3D";
import SupportMaintenanceServer3D from "../../AnimationObjects/SupportMaintenanceServer3D";

export default function HeroSection({ data, slug }) {

    const [start, setStart] = React.useState(false);

   useEffect(() => {
    function handleTransitionDone() {
        // Check if this page already refreshed once
        const alreadyRefreshed = sessionStorage.getItem("service-refreshed");

        if (!alreadyRefreshed) {
            sessionStorage.setItem("service-refreshed", "yes");

            // refresh after tiny delay
            return;
        }

        // if already refreshed, just start animation normally
        setStart(true);
    }

    window.addEventListener("page-transition-complete", handleTransitionDone);

    // fallback (direct load)
    const fallback = setTimeout(() => {
        setStart(true);
    }, 200);

    return () => {
        window.removeEventListener("page-transition-complete", handleTransitionDone);
        clearTimeout(fallback);
    };
}, []);



    const isWeb = slug.includes("website") || slug.includes("web");
    const isSoftware =
        slug.includes("software") ||
        slug.includes("management") ||
        slug.includes("hosting");
    const isOutsourcing = slug.includes("outsourcing");
    const isSupport =
        slug.includes("support") ||
        slug.includes("maintenance") ||
        slug.includes("support-maintenance");

    return (
        <section className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center px-6">

            {/* Top Light Fade */}
            {start && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
                />
            )}

            {/* Red Streak */}
            {start && (
                <motion.div
                    className="absolute left-0 top-1/2 w-[220px] h-[2px] bg-red-600 opacity-60"
                    animate={{ x: ["-20%", "120%", "-20%"], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            )}

            {/* 3D MODEL */}
            {start && (
                <div className="absolute right-10 bottom-10 hidden md:block z-10 opacity-80">
                    {isOutsourcing ? (
                        <Globe3D />
                    ) : isSupport ? (
                        <SupportMaintenanceServer3D />
                    ) : isSoftware ? (
                        <Tablet3D />
                    ) : isWeb ? (
                        <Laptop3D />
                    ) : (
                        <Phone3D />
                    )}
                </div>
            )}

            {/* NOISE */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] pointer-events-none" />

            {/* MAIN CONTENT */}
            <div className="relative z-20 max-w-4xl text-center">

                {/* TITLE */}
                {start && (
                    <motion.h1
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        {data.title.split(" ").map((word, i) => {
                            const highlightWords = [
                                "Android", "Vision,", "Hybrid", "Work", "Ionic", "Multi-Platform", "iOS",
                                "Precision", "Native", "Next-Gen", "Windows", "CMS", "E-Commerce", "Ecommerce",
                                "Dynamic", "WordPress", "Custom", "Hospital", "School", "PG", "Hosting",
                                "Support", "Outsourcing", "Maintenance", "IT", "Solutions", "Management",
                                "Applications", "Websites", "Performance"
                            ];
                            return (
                                <span
                                    key={i}
                                    className={highlightWords.includes(word)
                                        ? "text-red-600 drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]"
                                        : ""}
                                >
                                    {word + " "}
                                </span>
                            );
                        })}
                    </motion.h1>
                )}

                {/* LINE */}
                {start && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "140px" }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-[3px] bg-red-600 mx-auto mt-4 rounded-full"
                    />
                )}

                {/* SUBTITLE */}
                {start && (
                    <motion.p
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-6 text-lg text-white/70"
                    >
                        {data.subtitle}
                    </motion.p>
                )}

                {/* DESCRIPTION */}
                {start && (
                    <motion.p
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mt-6 text-white/50 max-w-2xl mx-auto leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                )}

                {/* BUTTON */}
                {start && (
                    <motion.button
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(220,38,38,0.6)"
                        }}
                        className="mt-10 px-10 py-3 bg-red-600 rounded-full font-semibold shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                    >
                        Get Started
                    </motion.button>
                )}

            </div>
        </section>
    );
}
