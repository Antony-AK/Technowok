"use client";
import React from "react";
import { motion } from "framer-motion";

export default function VerticalBar({ serviceName = "SERVICE" }) {
  return (
    <div
      className="
        fixed left-0 bottom-0 z-[999]
        flex flex-col items-end justify-end
        px-4 gap-10
        pointer-events-auto 
      "
    >
      {/* Dynamic BIG TEXT */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1 }}
        className="
          text-[120px] md:text-[170px] font-extrabold tracking-tight
          bg-gradient-to-b from-red-600 via-white to-red-600
          bg-clip-text text-transparent 
          leading-none select-none pointer-events-none
        "
      >
        {serviceName.toUpperCase()}
      </motion.h1>
    </div>
  );
}
