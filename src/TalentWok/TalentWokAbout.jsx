"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWokAbout() {
  const aboutRef = useRef(null);
  const titleRefs = useRef([]);
  const textRefs = useRef([]);
  const cardRefs = useRef([]);
  const textColRef = useRef(null);
  const cardsColRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      /* =========================
         ENTRANCE ANIMATIONS
      ========================== */

      gsap.from(titleRefs.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRefs.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
        },
      });

      gsap.from(cardRefs.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsColRef.current,
          start: "top 85%",
        },
      });

      /* =========================
         PARALLAX EFFECTS
      ========================== */

      gsap.to(glowRef.current, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      gsap.to(textColRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(cardsColRef.current, {
        y: -140,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });
    }, aboutRef);

    return () => ctx.revert(); // 🔥 CLEANUP EVERYTHING
  }, []);

  const pillars = [
    {
      tag: "For Companies",
      title: "Plug & Play Talent Pods",
      desc: "Pre-vetted engineers, analysts, designers and PMs assembled into pods that can plug into your roadmap in weeks, not months.",
    },
    {
      tag: "For Campuses",
      title: "Career-Ready Talent Engine",
      desc: "TalentWok bridges curriculum and industry through real projects, co-created content and hiring pipelines with partner companies.",
    },
    {
      tag: "For Candidates",
      title: "Beyond a Job Board",
      desc: "Curated roles, mentorship, and project-based work instead of just resumes in a database – building long-term career compounding.",
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="relative py-24 md:py-28 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      {/* Glow divider */}
      <div
        ref={glowRef}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-60"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr] gap-16 items-start">

        {/* LEFT COLUMN */}
        <div ref={textColRef}>
          <p ref={(el) => (titleRefs.current[0] = el)}
             className="text-sm uppercase tracking-[0.22em] text-red-400">
            About TalentWok
          </p>

          <h2 ref={(el) => (titleRefs.current[1] = el)}
              className="mt-4 text-3xl md:text-4xl font-bold">
            A talent network built for{" "}
            <span className="text-red-500">modern work.</span>
          </h2>

          <p ref={(el) => (textRefs.current[0] = el)}
             className="mt-5 text-gray-300 leading-relaxed text-sm md:text-base">
            TalentWok rethinks hiring as a shared ecosystem between companies,
            campuses, and candidates.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)}
             className="mt-4 text-gray-400 text-sm md:text-base">
            TalentWok provides the workflows, people, and data needed
            to make hiring fast and repeatable.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div ref={cardsColRef} className="grid gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="relative overflow-hidden rounded-3xl
                         bg-white/[0.03] border border-white/10
                         backdrop-blur-xl px-6 py-6 md:px-7 md:py-7"
            >
              <div className="absolute inset-y-0 left-0 w-[3px]
                              bg-gradient-to-b from-red-500 to-red-700" />
              <div className="pl-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                  {item.tag}
                </p>
                <h3 className="mt-2 text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm md:text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
