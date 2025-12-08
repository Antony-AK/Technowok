"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SupportMaintenanceServer3D({ size = 340 }) {
  return (
    <motion.div
      initial={{ rotateY: -18 }}
      animate={{ rotateY: [-18, 18, -18] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="hidden md:block relative"
      style={{ width: size, height: size }}
    >
      {/* SUBTLE OUTER GLOW */}
      <div
        className="absolute inset-0 rounded-xl "
        style={{
          background:
            "radial-gradient(circle at 50% 70%, rgba(255,0,0,0.35), transparent 70%)",
          filter: "blur(22px)",
          zIndex: 1,
        }}
      />

      {/* SERVER STACK */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ServerStack3D />
      </div>

      {/* GLASS HOLOGRAM REFLECTION */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.22), transparent 70%)",
          mixBlendMode: "overlay",
        }}
      />
    </motion.div>
  );
}



function ServerStack3D() {
  return (
    <div
      className="relative flex flex-col items-center gap-3"
      style={{ width: "70%" }}
    >
      {/* 3 SERVER BLOCKS – TOP TO BOTTOM */}
      <ServerBlock level={1} />
      <ServerBlock level={2} />
      <ServerBlock level={3} />

      {/* Floating particles */}
      <FloatingParticles />
    </div>
  );
}


function ServerBlock({ level }) {
  return (
    <div
      className="relative rounded-lg"
      style={{
        width: "100%",
        height: 60,
        background:
          "linear-gradient(to bottom, #1b1b1b 0%, #0a0a0a 100%)",
        border: "1px solid rgba(255,0,0,0.35)",
        boxShadow: `
          inset 0 0 20px rgba(255,0,0,0.25),
          0 0 25px rgba(255,0,0,0.2)
        `,
        transform: `translateY(${level * 8}px)`, // slight stacked offset
      }}
    >
      {/* horizontal glowing lines */}
      <div
        className="absolute inset-x-0 top-1"
        style={{
          height: 2,
          background: "rgba(255,0,0,0.5)",
          filter: "blur(1px)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-1"
        style={{
          height: 2,
          background: "rgba(255,0,0,0.5)",
          filter: "blur(1px)",
        }}
      />

      {/* status lights */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
        <StatusLight delay={0} />
        <StatusLight delay={0.5} />
        <StatusLight delay={1} />
      </div>

      {/* scanning beam */}
      <ScanBeam delay={level * 0.6} />
    </div>
  );
}


function StatusLight({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "rgba(255,0,0,0.9)",
        boxShadow: "0 0 6px rgba(255,0,0,0.9)",
      }}
    />
  );
}


function ScanBeam({ delay }) {
  return (
    <motion.div
      className="absolute inset-x-0 top-0"
      style={{
        height: "100%",
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.25) 50%, transparent 100%)",
        mixBlendMode: "screen",
      }}
      initial={{ x: "-100%" }}
      animate={{ x: ["-100%", "100%"] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
}


function FloatingParticles() {
  const particles = Array.from({ length: 10 });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4,
            height: 4,
            background: "rgba(255,0,0,0.7)",
            filter: "blur(2px)",
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
