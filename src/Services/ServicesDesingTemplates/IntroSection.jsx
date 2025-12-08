"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IntroSection({ data }) {
  return (
    <section className="relative w-full bg-black text-white py-28 px-6 md:px-20 overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-20 left-0 w-[380px] h-[380px] bg-red-600/25 blur-[130px] rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[120px] rounded-full"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-[120px_1fr] gap-16">

        {/* Left vertical bar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex flex-col items-center justify-center gap-4"
        >
          <div className="w-[3px] h-24 bg-red-600/70 rounded-full" />
          <p className="text-xl font-semibold tracking-widest rotate-180 vertical-rl text-red-500">
            INTRO
          </p>
          <div className="w-[3px] h-24 bg-red-600/40 rounded-full" />
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 
            p-10 md:p-14 relative shadow-[0_0_40px_rgba(255,0,0,0.18)]
          "
        >

          {/* FLOATING ICONS */}
          <div className="absolute -top-10 right-6 flex gap-3">
            <motion.div
              className="w-12 h-12 bg-red-600/30 rounded-2xl backdrop-blur-md"
              animate={{ y: [0, 28, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="w-12 h-12 bg-white/15 rounded-2xl backdrop-blur-md"
              animate={{ y: [0, 28, 0] }}
              transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
            />
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-8 tracking-tight">
            {data.title.split(" ").map((w, i) => {
              const highlight = ["Android", "Company", "We’ve", "Covered", "Hybrid", "Ionic", "iOS", "Native", "Windows", "CMS", "E-Commerce", "Dynamic", "WordPress", "Custom", "Hospital", "School", "PG", "Hosting", "Support", "Outsourcing", "Maintenance", "IT", "Management", "Applications", "Websites", "Solutions", "Performance"];
              return (
                <span key={i} className={highlight.includes(w) ? "text-red-500" : ""}>
                  {w + " "}
                </span>
              );
            })}
          </h2>

          {/* CONTENT TEXT */}
          <div className="space-y-5 text-white/80 text-[14px] leading-relaxed md:text-[17px]">
            {data.content.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.45 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* FEATURE POINTS */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {data.featuredPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.7)]" />
                <p className="text-white/90 text-[15px]">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
