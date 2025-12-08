"use client";
import React from "react";
import { motion } from "framer-motion";
import LaptopScreen from "./LaptopScreen";

export default function Laptop3D({  }) {
  return (
    <motion.div
      initial={{ rotateX: 20, rotateY: -15, rotateZ: 0 }}
      animate={{
        rotateX: [20, 25, 20],
        rotateY: [-15, 15, -15],
        rotateZ: [0, 2, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative hidden md:block
        
        w-[520px] h-[340px]
        transform-gpu
        perspective-1000
      "
      style={{ transformStyle: "preserve-3d" }}
    >

      {/* ▬▬▬ TOP SCREEN FRAME ▬▬▬ */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[520px] h-[320px]
          bg-[#111]
          rounded-xl
          border-4 border-gray-600/70
          overflow-hidden
        "
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Laptop screen */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <LaptopScreen />
        </div>

        {/* Webcam small dot */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full z-20" />
      </div>

      {/* ▬▬▬ KEYBOARD BASE ▬▬▬ */}
      <div
        className="
          absolute top-[300px] left-1/2 -translate-x-1/2
          w-[570px] h-[52px]
          bg-white
          rounded-xl
          border-4 border-gray-700/60
        "
        style={{
          transform: "rotateX(80deg) translateZ(5px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Touchpad line */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gray-500/40" />
      </div>

      {/* 3D Glow */}
      <div className="absolute inset-0 rounded-xl bg-red-500/10 pointer-events-none" />
    </motion.div>
  );
}
