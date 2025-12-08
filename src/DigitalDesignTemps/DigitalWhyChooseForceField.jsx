"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function DigitalWhyChoosePortal({ data }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [0, window.innerHeight], [8, -8]);
  const rotateY = useTransform(mx, [0, window.innerWidth], [-8, 8]);

  const highlight = ["Digital", "Marketing", "Growth", "Strategy", "Why"];

  return (
    <section
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      className="relative w-full bg-black text-white py-32 px-6 md:px-24 overflow-hidden"
    >
      {/* ====== BACKGROUND AURORA ====== */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-black" />
      <motion.div
        className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-red-600/20 blur-[160px]"
        animate={{ opacity: [0.4, 0.1, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-[10%] w-[450px] h-[450px] bg-purple-600/20 blur-[150px]"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      {/* ====== SECTION TITLE ====== */}
      <div className="relative z-20 text-center mb-24">
        <h2 className="text-2xl md:text-5xl font-bold leading-tight">
          {data.title.split(" ").map((w, i) => (
            <span
              key={i}
              className={`mr-2 ${
                highlight.includes(w.replace(/[^a-zA-Z]/g, "")) ? "text-red-600" : ""
              }`}
            >
              {w}
            </span>
          ))}
        </h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "130px" }}
          transition={{ duration: 0.8 }}
          className="h-[3px] bg-gradient-to-r from-red-600 to-purple-600 mx-auto mt-6 rounded-full"
        />
      </div>

      {/* ====== TRI-LAYER PORTAL ====== */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-30 max-w-7xl mx-auto h-[620px] flex items-center justify-center"
      >
        {/* LAYER 1 – Outer Nodes */}
        {data.points.map((point, i) => {
          const angle = (i / data.points.length) * Math.PI * 2;
          const radius = 280;

          return (
            <motion.div
              key={i}
              style={{
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 50px rgba(255,0,0,0.4)",
                backgroundColor: "rgba(255,0,0,0.08)",
              }}
              className="
                absolute w-[260px] p-6 rounded-2xl
                backdrop-blur-xl bg-white/5 border border-white/10
                shadow-[0_0_25px_rgba(255,0,0,0.2)]
                text-center transition-all duration-300
              "
            >
              <motion.div
                className="w-2 h-2 bg-red-600 rounded-full mx-auto mb-3 shadow-[0_0_12px_rgba(255,0,0,0.9)]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-white/80 text-sm leading-relaxed">{point}</p>
            </motion.div>
          );
        })}

        {/* LAYER 2 – Rotating Hologram Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[450px] h-[450px] rounded-full border border-red-600/20"
        />

        {/* LAYER 3 – Pulsing Core Crystal */}
        <motion.div
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="
            absolute w-40 h-40 rounded-3xl bg-gradient-to-br 
            from-red-600/40 to-purple-600/40 backdrop-blur-xl
            border border-white/10 flex items-center justify-center
            shadow-[0_0_40px_rgba(255,0,0,0.25)]
          "
        >
          <p className="text-white/80 text-center font-medium tracking-wide px-4">
            DIGITAL POWER  
            <br /> CORE
          </p>
          <div className="absolute inset-0 blur-[70px] bg-red-600/40 rounded-3xl"></div>
        </motion.div>
      </motion.div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.1, 0.6, 0.1], y: [-10, 10, -10] }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity }}
        />
      ))}
    </section>
  );
}
