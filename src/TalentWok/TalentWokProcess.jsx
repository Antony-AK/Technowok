"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  "Requirement Gathering & JD Finalization",
  "Sourcing → Screening → L1 Assessment",
  "Client Interviews (L2/L3 Technical/Managerial)",
  "Offer Rollout & Onboarding",
  "Payroll, Compliance & Training Support",
];

export default function TalentWokProcess() {
  const stepRefs = useRef([]);

  useEffect(() => {
    stepRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: i % 2 === 0 ? -80 : 80, // alternate direction
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full py-40 bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -left-20 top-10 w-[400px] h-[400px] bg-red-700/20 blur-[120px]"></div>
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-red-500/10 blur-[150px]"></div>

      <h1 className="text-center text-3xl md:text-5xl font-bold mb-24">
        Our <span className="text-red-600">Process</span>
      </h1>

      <div className="relative max-w-3xl md:max-w-5xl mx-auto px-5 md:px-10 flex flex-col justify-center items-center">

        {/* Vertical Red Line */}
        <div className="absolute left-0 md:left-32 top-0 w-[3px] h-full bg-red-700/40"></div>

        {/* STEPS */}
        <div className="space-y-20">
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className="relative flex items-start gap-10"
            >
              {/* Circle Number */}
              <div className="
                w-8 h-8 md:w-12 md:h-12 rounded-full 
                bg-red-600 flex items-center justify-center 
                font-bold text-xl shadow-[0_0_25px_rgba(255,0,0,0.7)]
              ">
                {i + 1}
              </div>

              {/* Step Text */}
              <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-snug">
                {step}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
