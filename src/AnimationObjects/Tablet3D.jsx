"use client";
import React from "react";
import { motion } from "framer-motion";
import TabletDashboardScreen from "./TabletDashboardScreen";

export default function Tablet3D() {
  return (
    <motion.div
      initial={{ rotateY: -18, rotateX: 8, rotateZ: 0 }}
      animate={{
        rotateY: [-18, 18, -18],
        rotateX: [8, 14, 8],
        rotateZ: [0, 1.5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        hidden md:block
        w-[480px] h-[320px]
        bg-[#111]
        rounded-[28px]
        border-[5px] border-gray-600/60
        shadow-[0_12px_80px_-10px_rgba(255,0,0,0.35)]
        overflow-hidden
        relative
        transform-gpu
        perspective-1000
      "
      style={{ transformStyle: "preserve-3d" }}
    >

      {/* SCREEN */}
      <div className="absolute inset-0 rounded-[22px] overflow-hidden">
        <TabletDashboardScreen />
      </div>

      {/* CAMERA DOT */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400/70 rounded-full" />

      {/* VOLUME BUTTONS */}
      <div className="absolute left-[-6px] top-20 w-[6px] h-16 bg-gray-300/70 rounded-l-lg" />
      <div className="absolute left-[-6px] top-40 w-[6px] h-12 bg-gray-300/70 rounded-l-lg" />

      {/* POWER BUTTON */}
      <div className="absolute right-[-6px] top-28 w-[6px] h-20 bg-gray-300/70 rounded-r-lg" />

     {/* REALISTIC FLOATING STYLUS (PEN) */}
<motion.div
  initial={{ y: 0, rotateZ: -12 }}
  animate={{
    y: [0, -8, 0],
    rotateZ: [-12, -8, -12],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    right-[-70px] 
    top-1/2 -translate-y-1/2
    w-[200px] h-[14px]
    rounded-full
    bg-gradient-to-r from-gray-200 to-gray-400
    
    transform-gpu
  "
  style={{ transform: "rotateZ(-12deg)", transformStyle: "preserve-3d" }}
>

  {/* PEN TIP */}
  <div
    className="
      absolute left-0 top-1/2 -translate-y-1/2
      w-[18px] h-[10px]
      bg-gradient-to-r from-black to-gray-700
      rounded-l-full
 
    "
  />

  {/* PEN TAIL BUTTON */}
  <div
    className="
      absolute right-0 top-1/2 -translate-y-1/2
      w-[10px] h-[10px]
      bg-gradient-to-br from-gray-300 to-gray-100
      rounded-full
      border-[1px] border-gray-400
      shadow-[0_0_12px_rgba(255,0,0,0.8)]
    "
  />

  {/* GLOSS EFFECT */}
  <div
    className="
      absolute inset-y-1 left-3 w-[120px]
      bg-white/25
      rounded-full
      blur-sm
    "
  />
</motion.div>


    </motion.div>
  );
}
