"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWokWhyUs() {
  const containerRef = useRef(null);

const POINTS = [
  {
    title: "Faster Hiring Cycles",
    desc: "Accelerated recruitment processes that reduce time-to-hire through structured sourcing and screening."
  },
  {
    title: "Access to Tier-2 & Tier-3 Talent",
    desc: "Deep talent networks across Tier-2 and Tier-3 cities, delivering skilled and job-ready candidates."
  },
  {
    title: "Cost-Optimized Recruitment Models",
    desc: "Flexible and scalable hiring models designed to minimize recruitment costs without compromising quality."
  },
  {
    title: "End-to-End Recruitment Ownership",
    desc: "Complete hiring ownership from sourcing and screening to interviews, offers, and onboarding."
  },
  {
    title: "Pan-India Hiring Capability",
    desc: "Nationwide recruitment reach with strong local market expertise across major and emerging regions."
  }
];


  useEffect(() => {
    const el = containerRef.current;

    gsap.from(el.querySelectorAll(".why-item"), {
      opacity: 1,
      y: 40,
      duration: 1,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section className="relative w-full bg-black text-white py-32  overflow-hidden">

      {/* ===== BACKGROUND BLOBS ===== */}
      <motion.div
        className="absolute left-0 top-0 w-[380px] h-[380px] bg-red-600/30 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-red-500/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== HEADER ===== */}
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-20 tracking-tight">
        Why <span className="text-red-500">TalentWok?</span>
      </h1>

      {/* ===== STRUCTURED STORY SECTION (Inspired by your reference template) ===== */}
      <div
        ref={containerRef}
        className="max-w-8xl mx-auto grid md:grid-cols-[120px_1fr] gap-16  px-6 md:px-16"
      >
        {/* Vertical Label Bar */}
        <div className="hidden md:flex flex-col items-center justify-center gap-4">
          <div className="w-[3px] h-24 bg-red-600/70 rounded-full" />
          <p className="text-xl font-semibold tracking-widest rotate-180 vertical-rl text-red-500">
            WHY US
          </p>
          <div className="w-[3px] h-24 bg-red-600/40 rounded-full" />
        </div>

        {/* Main Content Block */}
        <div
          className="
            bg-white/5 backdrop-blur-xl border border-white/10
            p-10 md:p-14 rounded-3xl relative shadow-[0_0_40px_rgba(255,0,0,0.20)]
          "
        >
          {/* Floating Boxes */}
          <div className="absolute -top-10 right-6 flex gap-3">
            <motion.div
              className="w-12 h-12 bg-red-600/30 rounded-2xl backdrop-blur-md"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-md"
              animate={{ y: [0, 25, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            />
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-10 tracking-tight">
            The <span className="text-red-500">Talent Advantage</span>  
            That Accelerates Your Business Growth.
          </h2>

          {/* WHY US ITEMS (NOT GRID – elegant vertical list) */}
          <div className="space-y-8 mb-5">
            {POINTS.map((item, i) => (
              <motion.div
                key={i}
                className="why-item flex gap-4 items-start"
              >
                <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.7)] mt-2" />
                <div>
                  <h3 className="text-xl font-semibold  mb-1">{item.title}</h3>
                  <p className="text-white/80 text-[16px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
