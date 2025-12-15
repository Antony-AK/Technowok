"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


function getEndOfDay() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return end.getTime();
}

/* ⏱ Daily Countdown */
function getTimeLeft(endTime) {
    const now = Date.now();
    const diff = endTime - now;

    if (diff <= 0) {
        return { h: "00", m: "00", s: "00" };
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    return {
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
    };
}



export default function DelayedFlipOffer() {
    const [visible, setVisible] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [endTime] = useState(() => getEndOfDay());
const [time, setTime] = useState(() => getTimeLeft(getEndOfDay()));


    /* ⏳ show AFTER hero */
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 4500);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const i = setInterval(() => {
            setTime(getTimeLeft(endTime));
        }, 1000);

        return () => clearInterval(i);
    }, [endTime]);


    if (!visible) return null;

    return (
        <div className="fixed bottom-20 right-0 z-[999] hidden lg:block">
            <motion.div
                initial={{ x: 420, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pr-6"
            >
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
                        className="
          absolute inset-0
          bg-[#0c0c0f]/95 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          px-6 py-7
          shadow-[0_0_60px_rgba(255,0,0,0.18)]
          flex flex-col
        "
                    >
                        {/* header */}
                        <div className="mb-4">
                            <span className="text-[11px] tracking-widest uppercase text-red-500 font-semibold">
                                Limited Offer
                            </span>

                            <h3 className="text-2xl font-bold mt-2 leading-tight">
                                FREE Starter Kit
                            </h3>

                            <p className="text-sm text-gray-400 mt-1">
                                For first-generation entrepreneurs
                            </p>
                        </div>

                        {/* divider */}
                        <div className="h-px bg-white/10 mb-4" />

                        {/* features */}
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li>•  4-Page Business Website</li>
                            <li>•  Custom Logo Design</li>
                            <li>•  Letterhead & Visiting Card</li>
                            <li>•  Digital Growth Strategy</li>
                        </ul>

                        {/* value + timer */}
                        <div className="mt-auto">
                            <div className="flex items-center justify-between mb-4">
                                {/* price */}
                                <div className="flex items-center gap-2">
                                    <span className="relative text-sm text-gray-400 font-medium">
                                        ₹15,000
                                        <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-red-500 rotate-[-8deg]" />
                                    </span>
                                    
                                    <span className="
      text-sm py-1 rounded-full
      text-red-600  font-semibold
    ">
                                        FREE
                                    </span>
                                </div>

                                {/* timer */}
                                <span className="text-sm font-mono tabular-nums text-gray-300">
                                    {time.h}:{time.m}
                                    <span
                                        key={time.s}
                                        className="text-red-500 inline-block min-w-[22px] animate-pulse"
                                    >
                                        :{time.s}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-0.5">left</span>

                                </span>
                            </div>


                            <div className="h-px bg-white/10 mb-4" />
                        </div>
                    </div>

                    {/* BACK */}
                    <div
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                        className="
          absolute inset-0
          bg-black
          border border-red-500/30
          rounded-2xl
          px-6 py-7
          shadow-[0_0_70px_rgba(255,0,0,0.28)]
          flex flex-col justify-between
        "
                    >
                        <div>
                            <h4 className="text-xl font-bold mb-3">
                                Ready to launch?
                            </h4>

                            <p className="text-sm text-gray-300 leading-relaxed">
                                Build your brand with a professional digital foundation -
                                without paying anything upfront.
                            </p>
                        </div>

                        <div>
                            <a
                                href="mailto:apply@tecnowok.com"
                                className="
              block w-full text-center py-3 rounded-xl
              bg-red-600 hover:bg-red-700
              transition font-semibold
            "
                            >
                                Apply Now →
                            </a>

                            <p className="text-xs text-gray-500 text-center mt-3">
                                *T&C Apply
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>

    );
}
