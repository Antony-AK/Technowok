"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWokServe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tw-serve-title", {
        y: 40,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".tw-serve-card", {
        y: 40,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tw-serve-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const SERVE = [
    {
      title: "Startups",
      desc: "Fast-growing startups that need to scale teams quickly with pre-vetted, job-ready talent."
    },
    {
      title: "Enterprises",
      desc: "Large organizations building long-term talent pipelines and project-based hiring models."
    },
    {
      title: "Colleges & Institutions",
      desc: "Educational institutions focused on improving placements through industry-aligned hiring programs."
    },
    {
      title: "Candidates",
      desc: "Students and professionals seeking career-ready opportunities, real projects, and long-term growth."
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-28 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      {/* Glow divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="tw-serve-title text-sm uppercase tracking-[0.22em] text-red-400">
            Who We Serve
          </p>

          <h2 className="tw-serve-title mt-4 text-3xl md:text-4xl font-bold">
            Built for <span className="text-red-500">every side</span> of hiring
          </h2>

          <p className="tw-serve-title mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            TalentWok connects businesses, institutions, and individuals into a single talent ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div className="tw-serve-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVE.map((item, idx) => (
            <div
              key={idx}
              className="tw-serve-card relative overflow-hidden rounded-3xl
                         bg-white/[0.03] border border-white/10 
                         backdrop-blur-xl px-6 py-7
                         shadow-[0_0_30px_rgba(0,0,0,0.7)]
                         hover:shadow-[0_0_50px_rgba(255,0,0,0.25)]
                         transition-all duration-300"
            >
              {/* Red accent bar */}
              <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-red-500 to-red-700" />

              <div className="pl-4">
                <h3 className="text-lg md:text-xl font-semibold">
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
