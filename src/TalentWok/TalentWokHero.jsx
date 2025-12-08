// src/Components/TalentWokHero.jsx
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWokHero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const glowRef1 = useRef(null);
  const glowRef2 = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial fade-in animations
      gsap.from(".tw-hero-line", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.from(".tw-tag-pill", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.8,
      });

      gsap.to(".tw-hero-card", {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      // Background glows - slow parallax
      gsap.to(glowRef1.current, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(glowRef2.current, {
        y: -160,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Text block slight parallax
      gsap.to(textRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Hero floating card parallax (mid-speed)
      gsap.to(cardRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden"
    >

      {/* BACKGROUND GLOWS WITH PARALLAX */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={glowRef1}
          className="absolute -top-32 -left-40 w-[520px] h-[520px] bg-red-700/25 blur-[170px] rounded-full"
        />
        <div
          ref={glowRef2}
          className="absolute bottom-[-120px] right-[-80px] w-[520px] h-[520px] bg-purple-600/25 blur-[180px] rounded-full"
        />
      </div>

      <div
        ref={textRef}
        className="
    max-w-7xl w-full 
    grid grid-cols-1 md:grid-cols-2  
    gap-20 md:gap-12 
    items-center justify-center 
    mt-10 md:mt-0
  "
      >

        {/* LEFT – TEXT */}
        <div className="space-y-4 md:space-y-5 ms-0 md:ms-10 text-center md:text-left px-2">
          <p className="tw-hero-line text-sm tracking-[0.25em] uppercase text-red-400">
            TalentWok • Talent-as-a-Service
          </p>

          <h1 className="tw-hero-line text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            <span className="block">On-demand talent for</span>
            <span className="block text-red-500">
              Startups, Enterprises & Campuses.
            </span>
          </h1>

          <p className="tw-hero-line text-gray-300 max-w-xl text-base md:text-lg">
            TalentWok connects companies, colleges, and candidates in a unified
            ecosystem – offering vetted talent, curated projects, and plug & play
            hiring models across tech, business, and creative roles.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Hire Pre-vetted Talent",
              "Campus–Corporate Bridge",
              "Project-based Hiring",
              "Managed Talent Pods",
            ].map((tag, i) => (
              <span
                key={i}
                className="tw-tag-pill px-4 py-1.5 rounded-full text-xs md:text-sm
                           bg-white/5 border border-white/15 backdrop-blur-xl"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="tw-hero-line flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#tw-about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-800
                         shadow-[0_0_25px_rgba(248,113,113,0.7)] text-sm md:text-base"
            >
              Explore TalentWok →
            </motion.a>

            <motion.a
              href="#tw-about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3 rounded-full border border-white/20 text-sm md:text-base
                         bg-white/5 backdrop-blur-xl"
            >
              For Companies & Campuses
            </motion.a>
          </div>
        </div>

        {/* RIGHT – FLOATING CARD WITH PARALLAX */}
        <div
          ref={cardRef}
          className="relative flex items-center justify-center mt-40"
        >
          <div className="w-[360px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-red-500/40 flex items-center justify-center">
            <div className="w-[210px] h-[210px] md:w-[260px] md:h-[260px] rounded-full border border-white/15 flex items-center justify-center">
              <motion.div
                className="tw-hero-card relative w-[400px] md:w-[320px] rounded-3xl 
                           bg-white/[0.04] border border-white/10 backdrop-blur-xl 
                           px-4 md:px-6 py-6 shadow-[0_0_40px_rgba(0,0,0,0.7)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                  Talent Graph
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Single network. Multiple ways to work.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-black/40 rounded-2xl p-3 border border-white/5">
                    <p className="text-[10px] text-gray-400">For Companies</p>
                    <p className="font-semibold text-sm mt-1">On-demand Teams</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Build pods of engineers, analysts & PMs.
                    </p>
                  </div>
                  <div className="bg-black/40 rounded-2xl p-3 border border-white/5">
                    <p className="text-[10px] text-gray-400">For Campuses</p>
                    <p className="font-semibold text-sm mt-1">Industry Pipeline</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Real projects, internships & placements.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-[11px] text-gray-300">
                  <span>Startups • Enterprises • EdTech</span>
                  <span className="text-red-400 font-semibold">TalentWok</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
