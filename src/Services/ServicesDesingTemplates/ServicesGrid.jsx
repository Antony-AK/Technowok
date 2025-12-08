"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection({ data }) {
  return (
    <section className="relative w-full bg-black text-white py-20 md:py-32 px-4 md:px-20 overflow-hidden">

      {/* SECTION TITLE */}
      <div className="max-w-4xl mx-auto text-center mb-14 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold leading-snug"
        >
          {data.title.split(" ").map((w, i) => {
            const highlight = [
              "Android", "Services", "Development", "iOS", "Hybrid", "Windows", "Native",
              "Ionic", "CMS", "Websites", "E-Commerce", "Dynamic", "WordPress",
              "Custom", "Hospital", "School", "PG", "Hosting", "Support",
              "Outsourcing", "Maintenance", "Management", "Solutions",
              "Applications", "Performance"
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
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 text-sm md:text-lg mt-4"
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* RESPONSIVE BUBBLE GRID */}
      <div className="relative w-full min-h-[900px] md:h-[700px]">

        {/* Network lines (hidden on mobile to prevent clutter) */}
        <div className="hidden md:block">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-red-500/10"
              style={{
                width: Math.random() * 180 + 120,
                height: "1.4px",
                top: Math.random() * 850,
                left: Math.random() * 1500,
                rotate: Math.random() * 160 - 80,
              }}
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 5 + Math.random() * 2, repeat: Infinity }}
            />
          ))}
        </div>

        {/* SERVICE BUBBLES */}
        <div className="absolute inset-0 md:block grid md:grid-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 px-2">
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
              { top: "82%", left: "70%" },
            ];

            return (
              <motion.div
                key={i}
                style={i < positions.length ? positions[i] : {}}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 1,
                  boxShadow: "0 0 55px rgba(255,0,0,0.55)",
                }}
                className="
                  absolute md:flex 
                  px-10 py-4 md:px-10 md:py-7
                  rounded-3xl 
                  bg-gradient-to-br from-[#080808] via-[#1a0a0a] to-[#200000]
                  border border-red-500/40
                  shadow-[0_0_20px_rgba(255,0,0,0.2)]
                  hover:shadow-[0_0_55px_rgba(255,0,0,0.4)]
                  transition-all duration-300
                  backdrop-blur-xl cursor-pointer
                  max-w-[260px] md:max-w-[280px]
                  text-sm md:text-[18px]
                  
                  /* MOBILE RESET → place in grid */
                  relative md:absolute !static md:!relative
                "
              >
                {/* Glow ring */}
                <div className="absolute -top-3 -left-3 w-6 h-6 md:w-7 md:h-7 rounded-full bg-red-500/60 blur-md"></div>

                {/* Shine */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute top-0 left-[-120%] w-[90%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    whileHover={{ x: ["-120%", "220%"] }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>

                <p className="font-semibold tracking-tight leading-snug">
                  {service}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
