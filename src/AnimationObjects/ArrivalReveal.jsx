// ArrivalReveal.jsx
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function ArrivalReveal({ onDone }) {
  const [stage, setStage] = useState(0);

  // Create 40–60 small pixel blocks
  const pixels = Array.from({ length: 40 }, (_, i) => i);

  return (
    <AnimatePresence>
      {stage <= 4 && (
        <motion.div
          key="arrival-bg"
          className="fixed inset-0 flex items-center justify-center bg-black z-[999]"
        >
          {/* --------------------- MAIN SHAPE ANIMATION --------------------- */}
          {/* --------------------- MAIN SHAPE ANIMATION --------------------- */}
          {stage < 3 && (
            <motion.div
              key="main-shape"
              initial={{ width: 50, height: 50, borderRadius: "50%" }}
              animate={
                stage === 0
                  ? {
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    transition: { duration: 1.2, ease: "easeOut" }
                  }
                  : stage === 1
                    ? {
                      rotateY: 360,
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }
                    : stage === 2
                      ? {
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        transition: { duration: 0.6, ease: "easeOut" }
                      }
                      : {}
              }
              onAnimationComplete={() => {
                setStage((prev) => prev + 1);
              }}
              className="flex items-center justify-center"
              style={{
                background: "#E02626",
                boxShadow: "0 30px 80px rgba(220,38,38,0.45)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* ⭐ COMPANY LOGO INSIDE CIRCLE */}
              <motion.img
                src="img/logo.png"  // <-- put your logo path here
                alt="Logo"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-[70%] h-[70%] object-cover pointer-events-none"
              />
            </motion.div>
          )}


          {/* --------------------- FULLSCREEN RED COVER --------------------- */}
          {stage === 3 && (
            <motion.div
              key="fullscreen"
              initial={{ width: 0, height: 0 }}
              animate={{
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              onAnimationComplete={() => setStage(4)}
              style={{
                background: `
    radial-gradient(#dc2626 1px, transparent 1px) 0 0 /
    6px 6px,
    #000
  `,
                position: "absolute",
              }}


            />
          )}


          {/* --------------------- PIXEL BREAK EFFECT --------------------- */}
          {stage === 4 && (
            <>
              {Array.from({ length: 900 }).map((_, i) => {
                const cols = 30;
                const rows = 30;
                const sizeW = 100 / cols; // in vw
                const sizeH = 100 / rows; // in vh

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: `${sizeW}vw`,
                      height: `${sizeH}vh`,
                      background: "#dc2626",
                      top: `${Math.floor(i / cols) * sizeH}vh`,
                      left: `${(i % cols) * sizeW}vw`,

                    }}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                      opacity: 0,
                      scale: 0,
                      x: (Math.random() - 0.5) * 900,
                      y: (Math.random() - 0.5) * 900,
                      rotate: Math.random() * 720,
                      transition: {
                        duration: 1,
                        ease: "easeOut",
                      },
                    }}
                  />
                );
              })}

              {/* Fade-out screen */}
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
                onAnimationComplete={() => {
                  setTimeout(() => onDone(), 100);
                }}
              />
            </>
          )}


        </motion.div>
      )}
    </AnimatePresence>
  );
}
