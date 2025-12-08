"use client";
import React from "react";
import { motion } from "framer-motion";
import ShoppingMobileScreen from "./AnimatedMobileScreen";

export default function Phone3D() {
  return (
    <motion.div
      initial={{ rotateY: -20, rotateX: 10, rotateZ: 0 }}
      animate={{
        rotateY: [-20, 20, -20],
        rotateX: [10, 18, 10],
        rotateZ: [0, 2, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        hidden md:block
        w-[280px] h-[560px]
        rounded-[40px]
        bg-[#111]
        border-4 border-gray-600/80
        shadow-[0_12px_80px_-10px_rgba(255,0,0,0.35)]
        perspective-1000
        overflow-hidden
        transform-gpu
        absolute right-10 bottom-10
      "
      style={{ transformStyle: "preserve-3d" }}
    >

      {/* SCREEN */}
      <div className="absolute inset-0 rounded-[30px] overflow-hidden">
        <ShoppingMobileScreen />
      </div>

      {/* SIDE BUTTONS */}
      <div className="absolute right-[-6px] top-24 w-[6px] h-16 bg-gray-400/60 rounded-r-lg" />
      <div className="absolute right-[-6px] top-44 w-[6px] h-12 bg-gray-400/60 rounded-r-lg" />

      {/* CAMERA + SPEAKER */}
      <div className="
        absolute top-3 left-1/2 -translate-x-1/2
        w-24 h-6 bg-black rounded-full
        flex justify-center items-center
      ">
        <div className="w-3 h-3 bg-gray-300 rounded-full mr-2" />
        <div className="w-12 h-[3px] bg-gray-400 rounded-lg" />
      </div>

    </motion.div>
  );
}
