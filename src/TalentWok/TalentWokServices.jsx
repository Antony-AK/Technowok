"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { title: "Permanent Hiring", desc: "Full-time employees sourced for long-term organizational growth." },
  { title: "Contract Staffing", desc: "Flexible workforce for short-term or specialized requirements." },
  { title: "Payroll & Compliance", desc: "End-to-end statutory compliance + workforce management." },
  { title: "Training Support", desc: "Upskilling programs designed for job-ready talent." },
  { title: "Campus Hiring & Drives", desc: "Bulk hiring for freshers through managed recruitment events." },
  { title: "End-to-End Recruitment", desc: "Sourcing → Screening → L1 → L2/L3 Coordination → Offer → Onboarding." },
];

export default function TalentWokServices() {
  const cards = useRef([]);

  useEffect(() => {
    cards.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power4.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-32 bg-black text-white">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-20">
        Our <span className="text-red-600">Services</span>
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-10">
        {SERVICES.map((srv, i) => (
          <div
            key={i}
            ref={(el) => (cards.current[i] = el)}
            className="
              group p-10 bg-white/5 rounded-2xl border border-white/10 
              shadow-[0_0_40px_rgba(255,0,0,0.1)]
              transition-all duration-300
              hover:-translate-y-2 hover:border-red-500
              hover:shadow-[0_0_60px_rgba(255,0,0,0.25)]
            "
          >
            <h2 className="text-2xl font-semibold text-red-600 transition-all duration-300 group-hover:text-red-400">
              {srv.title}
            </h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              {srv.desc}
            </p>

            {/* HOVER UNDERLINE ANIMATION */}
            <div className="mt-4 w-0 h-[3px] bg-red-600 rounded-full group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
