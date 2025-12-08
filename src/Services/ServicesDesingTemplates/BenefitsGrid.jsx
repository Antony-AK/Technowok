"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BenefitsSection({ data }) {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden  ">

      {/* BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-10 right-0 w-[350px] h-[350px] bg-red-600/25 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-5 right-5 w-[300px] h-[300px] bg-white/10 blur-[120px] rounded-full"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CENTRAL CONTAINER */}
      <div className="max-w-7xl mx-auto">

        {/* TITLE BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            {data.title.split(" ").map((w, i) => {
              const highlight = ["Benefits", "Android", "Mobile", "Performance", "Ionic", "App?", "Hybrid", "Windows" , "Applications", "iOS", "Native", "CMS", "Websites", "E-Commerce", "Dynamic", "WordPress", "Custom", "Hospital", "School", "PG", "Hosting", "Support", "Outsourcing", "Maintenance", "Management", "Solutions"];
              return (
                <span key={i} className={highlight.includes(w) ? "text-red-600" : ""}>
                  {w + " "}
                </span>
              );
            })}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg mt-4"
          >
            {data.subtitle}
          </motion.p>

          {/* Divider line */}
          <div className="flex justify-center mt-6">
            <div className="w-28 h-[3px] bg-red-600 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.5)]" />
          </div>
        </div>

        {/* BENEFIT CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="
                bg-white/5 border border-white/10 rounded-2xl
                backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(255,0,0,0.1)]
                hover:shadow-[0_0_60px_rgba(255,0,0,0.2)] hover:bg-white/10
                transition-all duration-300 group relative overflow-hidden
              "
            >
              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />

              {/* Icon placeholder */}
              <motion.div
                className="w-12 h-12 rounded-xl bg-red-600 backdrop-blur-md mb-5 flex items-center justify-center"
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-6 h-6 bg-white/60 rounded-md" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
