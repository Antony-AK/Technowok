"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function DigitalBenefitsHologram({ data }) {
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
        relative w-full min-h-screen bg-black text-white 
        py-24 md:py-36 px-4 md:px-20 
        overflow-hidden 
        flex flex-col items-center justify-start
      "
    >

      {/* ========== Background Glows ========== */}
      <motion.div
        className="
          absolute w-[250px] h-[250px] md:w-[420px] md:h-[420px] 
          bg-red-600/20 blur-[120px] md:blur-[150px]
          top-0 left-0
        "
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="
          absolute w-[250px] h-[250px] md:w-[420px] md:h-[420px] 
          bg-purple-600/20 blur-[120px] md:blur-[150px]
          bottom-0 right-0
        "
        animate={{ opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* ========== Title ========== */}
      <div className="text-center mb-14 flex flex-col justify-center items-center md:mb-20 max-w-3xl">
        <h2 className="text-3xl md:text-4xl flex flex-wrap sm:flex-none font-bold leading-tight">
          {data.title.split(" ").map((w, i) => (
            <span key={i} className="mr-2">
              {["Digital", "SEO", "Brand", "Growth", "Social", "Media", "Business"].includes(w)
                ? <span className="text-red-600">{w}</span>
                : w}
            </span>
          ))}
        </h2>

        <p className="mt-4 text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          {data.subtitle}
        </p>
      </div>

      {/* ========== DESKTOP ORBIT VIEW ========== */}
      <div className="
        relative hidden md:flex 
        w-[900px] h-[700px] items-center justify-center
      ">

        {/* Orbit Rings */}
        <div className="absolute top-40 left-72 w-[550px] h-[550px] rounded-full border border-red-600" />
        <div className="absolute w-[650px] h-[650px] rounded-full border border-white/5 opacity-40" />
        <div className="absolute w-[850px] h-[850px] rounded-full border border-white/5 opacity-20" />

        {/* Center Glow */}
        <motion.div
          className="
            absolute top-72 left-[400px] 
            w-[300px] h-[300px] bg-red-600/50 blur-[75px] rounded-full
          "
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.25, 1],
            filter: ["blur(70px)", "blur(90px)", "blur(70px)"]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbit Cards */}
        {data.points.map((item, i) => {
          const angle = (i / data.points.length) * Math.PI * 2;
          const radius = 350;

          return (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 45px rgba(255,0,0,0.4)",
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
              style={{
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                transform: "translate(-50%, -50%)",
                rotateX: tiltX,
                rotateY: tiltY
              }}
              className="
                absolute bg-white/5 backdrop-blur-xl p-6 rounded-2xl 
                border border-white/10 w-[260px]
                shadow-[0_0_25px_rgba(255,0,0,0.15)] 
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* ========== MOBILE STACKED VIEW ========== */}
      <div className="w-full flex flex-col md:hidden gap-6 mt-10">
        {data.points.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="
              bg-white/5 backdrop-blur-xl p-5 rounded-2xl 
              border border-white/10 shadow-[0_0_20px_rgba(255,0,0,0.2)]
            "
          >
            <h3 className="text-lg  font-semibold">{item.title}</h3>
            <p className="text-white/60 text-sm mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
