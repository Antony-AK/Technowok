"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MODELS = [
  {
    title: "Per Placement Model",
    desc: "Pay only when a candidate joins. Perfect for occasional hiring needs.",
  },
  {
    title: "Retainer Model",
    desc: "A fixed monthly engagement for long-term hiring + dedicated recruiter.",
  },
  {
    title: "Hybrid Model",
    desc: "Best of both worlds — partial retainer + reduced per-hire fee.",
  },
];

export default function TalentWokModels() {
  const circlesRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    circlesRef.current.forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { scale: 0.3, opacity: 1 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: circle,
            start: "top 80%",
          },
        }
      );
    });

    textRefs.current.forEach((txt, i) => {
      gsap.fromTo(
        txt,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2 + i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: txt,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-40 bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-700/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/30 blur-[200px] rounded-full"></div>

      <h1 className="text-center text-3xl md:text-5xl font-bold mb-28 tracking-tight">
        Engagement <span className="text-red-500">Models</span>
      </h1>

      {/* CENTER RING CLUSTER */}
      <div className="relative w-full flex flex-col items-center gap-32">

        {MODELS.map((model, i) => (
          <div key={i} className="relative flex flex-col items-center">

            {/* NEON CIRCLE */}
            <div
              ref={(el) => (circlesRef.current[i] = el)}
              className="
                w-[300px] h-[300px] rounded-full 
                border-[6px] border-red-600/40
                shadow-[0_0_50px_rgba(255,0,0,0.4)]
                flex justify-center items-center
                backdrop-blur-xl
                hover:scale-110 hover:shadow-[0_0_80px_rgba(255,0,0,0.6)]
                transition-all duration-500 cursor-pointer
              "
            >
              <p
                ref={(el) => (textRefs.current[i] = el)}
                className="text-center text-3xl font-bold text-red-600 "
              >
                {model.title}
              </p>
            </div>

            {/* Description */}
            <p
              ref={(el) => (textRefs.current[i + 3] = el)} 
              className="
                max-w-3xl text-center text-gray-300 text-xl mt-6 
                leading-relaxed tracking-wide
              "
            >
              {model.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
