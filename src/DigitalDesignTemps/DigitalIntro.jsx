"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DigitalIntro({ data }) {
    return (
        <section className="relative w-full bg-[#0a0a0a] text-white py-24 md:py-32 px-4 md:px-20 overflow-hidden">

            {/* 🔴 Floating Red Blob */}
            <motion.div
                className="
                    absolute rounded-full blur-[120px]
                    w-[250px] h-[250px] md:w-[420px] md:h-[420px]
                    top-[5%] md:top-[10%] left-[-10%]
                    bg-red-600/30
                "
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 🔵 Blue Blob */}
            <motion.div
                className="
                    absolute rounded-full blur-[130px]
                    w-[220px] h-[220px] md:w-[350px] md:h-[350px]
                    bottom-[5%] right-[-10%]
                    bg-blue-600/20
                "
                animate={{ scale: [1.1, 0.95, 1.1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ⭐ Background gradient frame */}
            <div className="
                absolute inset-0 border-t border-b border-white/5 pointer-events-none 
                [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]
                opacity-20
            " />

            {/* MAIN CONTENT */}
            <div className="relative max-w-6xl mx-auto z-20">

                {/* ✨ Section Label */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="uppercase tracking-[4px] md:tracking-[6px] text-red-500 text-xs md:text-sm mb-4 md:mb-6"
                >
                    {data.type || "DIGITAL OVERVIEW"}
                </motion.p>

                {/* 🧩 Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="
                        text-3xl md:text-5xl font-bold 
                        leading-snug md:leading-snug 
                        tracking-tight  md:max-w-3xl
                    "
                >
                    {data.title.split(" ").map((w, i) => {
                        const highlightWords = [
                            "Digital", "Marketing", "Branding",
                            "SEO", "Content", "Growth",
                            "Social", "Media",
                        ];
                        return (
                            <span
                                key={i}
                                className={
                                    highlightWords.includes(w.replace(/[^a-zA-Z]/g, ""))
                                        ? "text-red-500 mr-2"
                                        : "text-white mr-2"
                                }
                            >
                                {w}
                            </span>
                        );
                    })}
                </motion.h2>

                {/* 🔥 Divider */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "160px" }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="h-[3px] bg-gradient-to-r from-red-600 to-purple-600 mt-4 md:mt-6 rounded-full"
                />

                {/* 📝 Paragraphs */}
                <div className="mt-8 md:mt-10 space-y-4 md:space-y-5 max-w-3xl">
                    {data.content.map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.1 * i }}
                            className="text-white/75 text-base md:text-lg leading-relaxed"
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

                {/* ⭐ Feature Points */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="
                        mt-10 md:mt-12 
                        grid grid-cols-1 sm:grid-cols-2 
                        gap-4 md:gap-5
                    "
                >
                    {data.featuredPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="
                                flex items-center gap-3 
                                p-3 md:p-4 
                                bg-white/5 backdrop-blur-xl 
                                border border-white/10 
                                rounded-2xl 
                                hover:border-red-500/50 
                                transition-all duration-300
                            "
                        >
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.7)]" />
                            <p className="text-white/90 text-sm md:text-[15px]">{point}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
