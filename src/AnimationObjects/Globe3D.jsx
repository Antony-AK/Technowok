"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Globe3D({ size = 350 }) {
  return (
    <motion.div
      initial={{ rotateY: -18 }}
      animate={{ rotateY: [-18, 18, -18] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="hidden md:block relative"
      style={{ width: size, height: size }}
    >
      {/* === OUTER DEPTH SHADOW === */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 65%, rgba(0,0,0,0.6), transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* === MAIN 3D SPHERE BODY === */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, #242424 0%, #111 45%, #000 100%)
          `,
          border: "2px solid rgba(255,0,0,0.25)",
          boxShadow: `
            inset 0 0 35px rgba(255,0,0,0.15),
            0 0 40px rgba(255,0,0,0.3)
          `,
        }}
      >
        {/* Grid lines to simulate spherical depth */}
        <SphereGrid />

        {/* Dotted pattern */}
        <DottedWorld />

        {/* Arcs + Pins */}
        <ArcOverlay />
      </div>

      {/* === FRONT GLASS REFLECTION === */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
          mixBlendMode: "overlay",
          zIndex: 5,
        }}
      ></div>
    </motion.div>
  );
}





function SphereGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage: `
          repeating-radial-gradient(
            circle,
            rgba(255,255,255,0.2) 0px,
            rgba(255,255,255,0.2) 1px,
            transparent 2px,
            transparent 18px
          ),
          repeating-linear-gradient(
            rgba(255,255,255,0.1) 0px,
            transparent 2px
          )
        `,
        backgroundSize: "28px 28px, 100% 12px",
        maskImage: "radial-gradient(circle at center, black 65%, transparent 100%)",
      }}
    ></div>
  );
}


function DottedWorld() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.17) 1px, transparent 1px)",
        backgroundSize: "8px 8px",
        maskImage:
          "radial-gradient(circle at center, black 70%, transparent 100%)",
        opacity: 0.3,
      }}
    />
  );
}


function ArcOverlay() {
  const pins = [
    { x: 60, y: 42 }, // India
    { x: 28, y: 35 }, // Europe
    { x: 14, y: 50 }, // USA
    { x: 72, y: 58 }, // Singapore
  ];

  const arcs = [
    { from: 0, to: 1, delay: 0.1 },
    { from: 1, to: 2, delay: 0.8 },
    { from: 0, to: 3, delay: 1.4 },
    { from: 2, to: 3, delay: 2.0 },
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      {/* Draw ARCS */}
      {arcs.map((arc, i) => (
        <Arc
          key={i}
          id={`arc-path-${i}`}
          from={pins[arc.from]}
          to={pins[arc.to]}
          delay={arc.delay}
        />
      ))}

      {/* Glow pins */}
      {pins.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="1.8"
          fill="#ff2b2b"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,0,0,0.8))" }}
        />
      ))}
    </svg>
  );
}


function Arc({ id, from, to, delay }) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 - 10; // lifted curve arc

  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <>
      {/* Arc path */}
      <path
        id={id}
        d={d}
        stroke="rgba(255,0,0,0.25)"
        strokeWidth="0.6"
        fill="none"
      />

      {/* Moving glowing dot */}
      <motion.circle
        r="1.2"
        fill="#fff"
        style={{ filter: "drop-shadow(0 0 4px rgba(255,0,0,1))" }}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <animateMotion
          dur="2.3s"
          repeatCount="indefinite"
          begin={delay}
        >
          <mpath href={`#${id}`} />
        </animateMotion>
      </motion.circle>
    </>
  );
}
