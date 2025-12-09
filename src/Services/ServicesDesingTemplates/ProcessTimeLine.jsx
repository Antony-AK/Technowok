"use client";
import React, { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function ProcessSection({ data }) {
  const sectionRef = useRef(null);     // pin area
  const slideRefs = useRef([]);        // horizontal items
  const trackRef = useRef(null);       // horizontal track
  const lineBallRef = useRef(null);    // moving ball

  gsap.registerPlugin(ScrollTrigger);

  const highlightWords = ["Android", "iOS", "Hybrid", "Windows", "Native", "Ionic", "CMS", "Websites", "E-Commerce", "Dynamic", "WordPress", "Custom", "Hospital", "School", "PG", "Hosting", "Support", "Outsourcing", "Maintenance", "IT", "Solutions", "Management", "Applications", "Websites", "Performance"];


  /* LENIS */
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* HORIZONTAL SCROLL */
  useEffect(() => {
    const total = slideRefs.current.length;

    gsap.to(slideRefs.current, {
      xPercent: -100 * (total - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        pin: true,
        end: "+=" + sectionRef.current.offsetWidth,
        snap: 1 / (total - 1),
      }
    });

    /* BALL FOLLOW MOVEMENT */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=" + (total - 1) * window.innerWidth,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const lineLength = (total - 1) * (window.innerWidth < 768 ? 300 : 900);
        gsap.to(lineBallRef.current, {
          x: lineLength * progress,
          ease: "none"
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  /* SLIDES */
  const slides = data.steps.map((item, i) => (
    <div
      key={i}
      ref={(el) => (slideRefs.current[i] = el)}
      className="w-[800px] h-[350px] shrink-0 flex flex-col justify-center items-center p-5 md:p-16"
    >
      <h2 className="text-4xl md:text-7xl font-black font-sans text-red-600">
        {item.step}
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold mt-3 md:mt-4">
        {item.title}
      </h3>

      <p className="text-white/60 mt-3 md:mt-4 max-w-xl text-base md:text-lg text-center">
        {item.text}
      </p>
    </div>
  ));




  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-screen flex items-center overflow-hidden text-white
      "



    >
      {/* FIXED TITLE */}
      <div className="absolute top-10 md:top-16 w-full text-center z-50 pointer-events-none">
        <h2 className="text-2xl md:text-5xl font-bold leading-snug md:leading-normal">
          {data.title.split(" ").map((w, i) => (
            <span
              key={i}
              className={highlightWords.includes(w) ? "text-red-500" : "text-white"}
            >
              {w}{" "}
            </span>
          ))}
        </h2>

        {data.type && (
          <p className="text-red-600 text-sm md:text-lg uppercase mt-2 md:mt-4 max-w-2xl mx-auto">
            {data.type}
          </p>
        )}
      </div>


      {/* SCROLLING TRACK */}
      <div
        ref={trackRef}
        className="relative flex items-center px-10 gap-10"
        style={{ height: "100vh", whiteSpace: "nowrap" }}
      >
        {/* LINE UNDER SLIDES */}
        <div className="absolute left-0 right-0 bottom-[30%]
 h-[3px] bg-red-500/40">
          {/* MOVING BALL */}
          <div
            ref={lineBallRef}
            className="
              absolute top-1/2 -translate-y-1/2 left-[150px]  md:left-[410px]
             w-6 h-6
 bg-red-600 rounded-full
              shadow-[0_0_20px_rgba(255,0,0,0.9)]
            "
          />
        </div>

        {/* SLIDES */}
        {slides}
      </div>
    </section>
  );
}
