"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function DigitalServicesMatrix({ data }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const tiltX = useTransform(y, [0, window.innerHeight], [-6, 6]);
  const tiltY = useTransform(x, [0, window.innerWidth], [-6, 6]);

  return (
    <section
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
      className="
        relative w-full bg-black text-white
        py-32 px-6 md:px-20 overflow-hidden
      "
    >
      {/* ================= BACKGROUND LIGHT RAILS ================= */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-[2px] bg-red-500/10"
          style={{ top: `${15 + i * 18}%` }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6 + i, repeat: Infinity }}
        />
      ))}

      {/* Floating particles */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          backgroundImage: "url('/particles.png')",
          backgroundSize: "cover"
        }}
      />

      {/* =============== TITLE SECTION ================== */}
      <div className="text-center  flex flex-col justify-center items-center max-w-4xl mx-auto mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl flex flex-wrap md:flex-none  font-bold tracking-tight">
          {data.title.split(" ").map((w, i) => (
            <span
              key={i}
              className={["Digital", "Marketing", "Services"].includes(w) ? "text-red-600 mr-2" : "mr-2"}
            >
              {w}
            </span>
          ))}
        </h2>

        <p className="text-white/60 text-lg mt-4">{data.subtitle}</p>

        <motion.div
          className="h-[3px] bg-gradient-to-r from-red-600 to-purple-600 w-28 mx-auto mt-5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "112px" }}
          transition={{ duration: 0.7 }}
        />
      </div>

      {/* =============== MATRIX LAYOUT =============== */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {data.services.map((service, i) => (
          <motion.div
            key={i}
            style={{ rotateX: tiltX, rotateY: tiltY }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 40px rgba(255,0,0,0.35)",
              transition: { type: "spring", stiffness: 220, damping: 18 }
            }}
            className="
              relative group p-8 rounded-3xl
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-[0_0_25px_rgba(255,0,0,0.18)]
              hover:bg-white/10
              transition-all duration-300 cursor-pointer
            "
          >
            {/* Hologram Shine */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl"
            >
              <motion.div
                className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-150%", "150%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Neon corner accents */}
            <span className="absolute top-4 left-4 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.9)]" />
            <span className="absolute bottom-4 right-4 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.9)]" />

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 ">{service}</h3>

            {/* Desc */}
            <p className="text-white/60 text-sm leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
