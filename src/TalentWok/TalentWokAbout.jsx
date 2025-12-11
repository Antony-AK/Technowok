// src/Components/TalentWokAbout.jsx
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWokAbout() {
  const aboutRef = useRef(null);
  const textColRef = useRef(null);
  const cardsColRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ================================
      // FADE-IN ENTRANCE (AS BEFORE)
      // ================================
      gsap.from(".tw-about-title", {
        y: 40,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#tw-about",
          start: "top 80%",
        },
      });

      gsap.from(".tw-about-text", {
        y: 30,
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
          trigger: "#tw-about",
          start: "top 75%",
        },
      });

      gsap.from(".tw-about-card", {
        y: 40,
        opacity: 1,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tw-about-cards",
          start: "top 85%",
        },
      });

      // ================================
      // PARALLAX MAGIC ✨
      // ================================

      // Slow glow parallax
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

      // Left text moving upward (medium)
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

      // Right cards column parallax (stronger)
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

    return () => ctx.revert();
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
      id="tw-about"
      ref={aboutRef}
      className="relative py-24 md:py-28 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      {/* glow divider */}
      <div
        ref={glowRef}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-60"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr] gap-16 items-start">

        {/* LEFT TEXT COLUMN (PARALLAX TARGET) */}
        <div ref={textColRef}>
          <p className="tw-about-title text-sm uppercase tracking-[0.22em] text-red-400">
            About TalentWok
          </p>

          <h2 className="tw-about-title mt-4 text-3xl md:text-4xl font-bold">
            A talent network built for{" "}
            <span className="text-red-500">modern work.</span>
          </h2>

          <p className="tw-about-text mt-5 text-gray-300 leading-relaxed text-sm md:text-base">
            TalentWok rethinks hiring as a shared ecosystem between companies,
            campuses, and candidates. Instead of scattered job boards and
            disconnected training, TalentWok creates a continuous loop:
            industry-backed learning, project execution, and recurring hiring
            signals – all on one platform.
          </p>

          <p className="tw-about-text mt-4 text-gray-400 text-sm md:text-base">
            Whether it’s a startup testing a new product line, an enterprise
            spinning up a digital pod, or a campus trying to increase placement
            outcomes – TalentWok provides the workflows, people, and data needed
            to make it happen quickly.
          </p>
        </div>

        {/* RIGHT CARDS COLUMN (PARALLAX TARGET) */}
        <div ref={cardsColRef} className="tw-about-cards grid gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="tw-about-card relative overflow-hidden rounded-3xl
                         bg-white/[0.03] border border-white/10 
                         backdrop-blur-xl px-6 py-6 md:px-7 md:py-7
                         shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            >
              <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-red-500 to-red-700" />

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
