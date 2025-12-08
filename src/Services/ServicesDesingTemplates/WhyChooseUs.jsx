"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseSection({ data }) {
  return (
    <section className="relative w-full py-32 bg-black text-white overflow-hidden">

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background: `
            linear-gradient(to bottom, rgba(255,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,0,0,0.1) 1px, transparent 1px),
            #000
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* TITLE */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-24">
        {data.title.split(" ").map((w, i) => (
          <span
            key={i}
            className={["Tecnowok"].includes(w) ? "text-red-500" : ""}
          >
            {w}{" "}
          </span>
        ))}
      </h2>

      {/* BIG PILLARS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-10">

        {data.points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="
              relative h-[200px] flex flex-col items-center justify-end 
              rounded-3xl overflow-hidden cursor-pointer group
            "
          >
            {/* RED HOLOGRAPHIC COLUMN */}
            <motion.div
              className="
                absolute inset-0 
                bg-gradient-to-b from-red-900/40 via-red-600/10 to-transparent 
                border border-red-600/30 rounded-3xl 
                backdrop-blur-md shadow-[0_0_40px_rgba(255,0,0,0.2)]
              "
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 60px rgba(255,0,0,0.4)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* GLOW STRIP */}
            <motion.div
              className="
                absolute top-0 left-0 w-full h-[6px] 
                bg-red-500/80 group-hover:bg-red-400
                shadow-[0_0_20px_rgba(255,0,0,0.8)]
              "
            />

            {/* CONTENT */}
            <motion.h3
              className="relative z-10 text-xl md:text-2xl font-semibold px-6 pb-10 text-center"
              whileHover={{
                scale: 1.1,
                color: "#ff4d4d",
                textShadow: "0 0 20px rgba(255,0,0,0.8)",
              }}
            >
              {point}
            </motion.h3>

            {/* Floating particle inside */}
            <motion.div
              className="absolute w-3 h-3 bg-red-500/40 rounded-full"
              animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        ))}

      </div>

      {/* SMALL BACKGROUND FLOATING DOTS */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5 + Math.random() * 3, repeat: Infinity }}
        />
      ))}
    </section>
  );
}
