"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ⏰ End of Day Timer */
function getEndOfDay() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return end.getTime();
}

function getTimeLeft(endTime) {
  const diff = endTime - Date.now();
  if (diff <= 0) return { h: "00", m: "00", s: "00" };

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

export default function DelayedFlipOffer({ heroVisible = true }) {
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const [endTime] = useState(() => getEndOfDay());
  const [time, setTime] = useState(() => getTimeLeft(getEndOfDay()));

  /* ⏳ Show after hero */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4500);
    return () => clearTimeout(t);
  }, []);

  /* ⏱ Countdown */
  useEffect(() => {
    const i = setInterval(() => {
      setTime(getTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(i);
  }, [endTime]);

  if (!visible || !heroVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {/* ================= EXPANDED CARD ================= */}
      {!minimized ? (
        <motion.div
          key="expanded-wrapper"
          className="fixed bottom-20 right-0 z-[999] hidden lg:block pr-6"
          initial={{ x: 420, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 420, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
  <button
                onClick={() => setMinimized(true)}
                className="absolute top-3 right-10 z-50 text-gray-400 text-xl hover:text-white transition"
              >
                ✕
              </button>

          <motion.div
            onHoverStart={() => setFlipped(true)}
            onHoverEnd={() => setFlipped(false)}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-[360px] h-[380px]"
          >
            {/* FRONT */}
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="absolute inset-0 bg-[#0c0c0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-7 shadow-[0_0_60px_rgba(255,0,0,0.18)] flex flex-col"
            >
              {/* close */}
            

              <span className="text-[11px] tracking-widest uppercase text-red-500 font-semibold">
                For New Founders
              </span>

              <h3 className="text-2xl font-bold mt-2">Starting a Business?</h3>
              <p className="text-sm text-gray-400 mt-1">
                Founders don’t need agencies. They need partners.
              </p>

              <div className="h-px bg-white/10 my-4" />

              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Tecnowok builds <span className="text-white font-semibold">businesses</span>, not just designs.
                Launch right — without paying first.
              </p>

              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Logo, Letterhead & Visiting Card</li>
                <li>• Professional Brand Identity</li>
                <li>• Digital Growth Strategy</li>
              </ul>

              <div className="flex items-center justify-between mt-auto pt-4">
                <div className="flex gap-2 items-center">
                  <span className="relative text-sm text-gray-400">
                    ₹15,000
                    <span className="absolute inset-x-0 top-1/2 h-[1.5px] bg-red-500 rotate-[-8deg]" />
                  </span>
                  <span className="text-red-600 font-semibold text-sm">FREE</span>
                </div>

                <span className="font-mono text-sm text-gray-300">
                  {time.h}:{time.m}
                  <span className="text-red-500 animate-pulse">:{time.s}</span>
                </span>
              </div>
            </div>

            {/* BACK */}
            <div
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              className="absolute inset-0 bg-black border border-red-500/30 rounded-2xl px-6 py-7 shadow-[0_0_70px_rgba(255,0,0,0.28)] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold mb-3">
                  Launch without paying first.
                </h4>
                <p className="text-sm text-gray-300">
                  Built for serious founders who want clarity, structure, and growth direction.
                </p>
                <p className="text-red-500 font-semibold mt-3 text-sm">
                  Limited founders only.
                </p>
              </div>

              <div>
                <a
                  href="mailto:info@tecnowok.com"
                  className="block w-full text-center py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold"
                >
                  Apply for Free Starter Kit →
                </a>
                <p className="text-xs text-gray-500 text-center mt-3">
                  *T&C Apply
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        /* ================= MINIMIZED PILL ================= */
        <motion.div
          key="minimized"
          className="fixed -right-15 top-1/2 -translate-y-1/2  z-[999] hidden lg:flex justify-end items-end"
          initial={{ scale: 0.6, opacity: 0, x: 120 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            onClick={() => setMinimized(false)}
            className="cursor-pointer w-[170px] h-[56px] bg-red-600 rotate-90 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] font-semibold"
          >
            FREE Starter Kit →
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
