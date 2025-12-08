import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "Tailor-Made Solutions",
    desc: "Custom digital products engineered with precision for your business.",
  },
  {
    title: "Expert Development Team",
    desc: "Clean, scalable, future-proof engineering with modern tech stacks.",
  },
  {
    title: "End-to-End Technical Support",
    desc: "From brainstorming to deployment — we handle every detail.",
  },
  {
    title: "User-Driven Product Strategy",
    desc: "We build experiences designed to engage, convert, and retain users.",
  },
  {
    title: "High Standards & Timely Delivery",
    desc: "Quality-focused workflows ensuring reliability and fast execution.",
  },
  {
    title: "Global Collaboration",
    desc: "Helping clients across India and worldwide with smooth communication.",
  },
];

export default function WhyChooseUs() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const rows = rowsRef.current;

    rows.forEach((row, index) => {
      gsap.from(row, {
        x: index % 2 === 0 ? -30 : 30,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
<section className="w-full bg-black pt-28 md:pt-24 pb-16 px-4 md:px-6 flex justify-center">
  <div className="w-full max-w-5xl">

    {/* Title */}
    <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-14 md:mb-20 tracking-wide leading-snug">
      Why Choose <span className="text-red-500">Tecnowok Solution?</span>
    </h2>

    {/* Cards */}
    <div className="flex flex-col gap-6 md:gap-10">
      {FEATURES.map((item, i) => (
        <div
          key={i}
          ref={(el) => (rowsRef.current[i] = el)}
          className="
            group relative overflow-hidden
            px-5 py-5 md:px-6 md:py-6
            rounded-xl 
            transition-all duration-300

            border border-red-500/30
            shadow-[0_0_12px_rgba(255,0,0,0.25)]
            bg-black/40 
          "
        >
          
          {/* Glow */}
          <div className="absolute inset-0 -z-10 opacity-30 md:opacity-40 
            bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.15),transparent_70%)]
            blur-2xl md:blur-3xl"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent
            opacity-0 group-hover:opacity-100 transition-all duration-500"
          />

          <h3 className="text-base md:text-xl font-semibold text-white group-hover:text-red-400 transition-all duration-300">
            {item.title}
          </h3>

          <p className="text-white/60 mt-2 text-sm md:text-base leading-relaxed">
            {item.desc}
          </p>

          <div className="mt-3 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>

  </div>
</section>

  );
}
