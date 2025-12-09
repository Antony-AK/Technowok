"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection({ data }) {
  return (
    <section className="relative w-full bg-black text-white py-20 md:py-32 px-4 md:px-20 overflow-hidden">

      {/* ================= TITLE ================= */}
      <div className="max-w-4xl mx-auto text-center mb-14 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold leading-snug"
        >
          {data.title.split(" ").map((w, i) => {
            const highlight = [
              "Android", "Services", "Development", "iOS", "Hybrid",
              "Windows", "Native", "Ionic", "CMS", "Websites",
              "E-Commerce", "Dynamic", "WordPress", "Custom",
              "Hospital", "School", "PG", "Hosting", "Support",
              "Outsourcing", "Maintenance", "Management",
              "Solutions", "Applications", "Performance"
            ];

            return (
              <span key={i} className={highlight.includes(w) ? "text-red-500" : ""}>
                {w + " "}
              </span>
            );
          })}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/70 text-sm md:text-lg mt-4"
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* ================= DESKTOP ABSOLUTE BUBBLES (UNCHANGED) ================= */}
      <div className="relative w-full h-[700px] hidden md:block">
        
        {/* FLOATING LINES – desktop only */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/10"
            style={{
              width: Math.random() * 180 + 120,
              height: "1.4px",
              top: Math.random() * 850,
              left: Math.random() * 1500,
              rotate: Math.random() * 160 - 80
            }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 5 + Math.random() * 2, repeat: Infinity }}
          />
        ))}

        {/* ORIGINAL DESKTOP POSITIONS (UNCHANGED EXACTLY) */}
        {data.services.map((service, i) => {
          const positions = [
            { top: "5%", left: "10%" },
            { top: "18%", left: "65%" },
            { top: "32%", left: "25%" },
            { top: "48%", left: "75%" },
            { top: "22%", left: "82%" },
            { top: "60%", left: "15%" },
            { top: "72%", left: "50%" },
            { top: "40%", left: "45%" },
            { top: "82%", left: "70%" }
          ];

          return (
            <motion.div
              key={i}
              style={positions[i]}   // ← original desktop positions untouched
              className="
                absolute px-10 py-7 rounded-3xl
                bg-gradient-to-br from-[#080808] via-[#1a0a0a] to-[#200000]
                border border-red-500/40
                shadow-[0_0_20px_rgba(255,0,0,0.2)]
                hover:shadow-[0_0_55px_rgba(255,0,0,0.4)]
                backdrop-blur-xl cursor-pointer
                max-w-[280px]
              "
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >

              <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-red-500/60 blur-md"></div>

              <p className="text-xl font-semibold">{service}</p>
            </motion.div>
          );
        })}
      </div>

      {/* ================= MOBILE GRID (SAFE, DOES NOT TOUCH DESKTOP) ================= */}
      <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {data.services.map((service, i) => (
          <motion.div
            key={i}
            className="
              w-full px-6 py-5 rounded-2xl
              bg-gradient-to-br from-[#080808] via-[#1a0a0a] to-[#200000]
              border border-red-500/40 
              shadow-[0_0_20px_rgba(255,0,0,0.25)]
              backdrop-blur-xl
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-red-500/60 blur-md"></div>

            <p className="font-semibold text-lg">{service}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
