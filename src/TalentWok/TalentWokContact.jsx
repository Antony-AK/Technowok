"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWokContact() {
  const leftRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // LEFT SIDE FADE-IN
    gsap.from(leftRef.current, {
      opacity: 1,
      x: -60,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 85%",
      }
    });

    // RIGHT CARD ANIMATION
    gsap.from(cardRef.current, {
      opacity: 1,
      x: 60,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
      }
    });

    // FLOATING GLOW EFFECTS
    gsap.to(".float-glow", {
      y: 30,
      opacity: 0.7,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "easeInOut"
    });
  }, []);

  return (
    <section className="relative w-full py-32 md:py-40 bg-black text-white overflow-hidden">

      {/* BACKGROUND BLOBS (responsive sizes) */}
      <div className="float-glow absolute -top-28 left-5 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-red-600/25 blur-[150px] rounded-full"></div>
      <div className="float-glow absolute bottom-0 right-5 w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-red-500/20 blur-[140px] rounded-full"></div>

      {/* MAIN CONTENT */}
      <div className="
      max-w-5xl mx-auto 
      px-6 md:px-10 
      flex flex-col md:flex-row 
      items-center justify-center md:items-start 
      gap-12 md:gap-16
    ">

        {/* LEFT — TEXT SECTION */}
        <div
          ref={leftRef}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Let’s Build
            <br />
            <span className="text-red-500">Your Winning Team</span>
          </h1>

          <p className="
          mt-5 text-gray-300 
          text-lg md:text-xl 
          leading-relaxed 
          max-w-md mx-auto md:mx-0
        ">
            Fast, reliable and tailored recruitment designed for growing startups,
            SMBs, and enterprise teams looking for world-class talent.
          </p>

          <button
            className="
            mt-8 md:mt-10 px-8 md:px-10 py-3 md:py-4 
            rounded-full bg-red-600
            text-lg md:text-xl font-semibold 
            shadow-[0_0_25px_rgba(255,0,0,0.5)]
            hover:bg-red-700 transition-all duration-300
          "
          >
            Contact Us →
          </button>
        </div>

        {/* RIGHT — GLASS CARD */}
        <div
          ref={cardRef}
          className="
          w-full md:w-1/2
          bg-white/5 backdrop-blur-xl 
          border border-white/10 
          rounded-3xl 
          shadow-[0_0_50px_rgba(255,0,0,0.25)]
          p-6 md:p-12 
          flex flex-col gap-6
          text-center md:text-left
        "
        >
          <h3 className="text-xl md:text-2xl font-semibold text-red-400">
            Get in touch
          </h3>

          <div className="space-y-2 text-gray-300 text-base md:text-lg">
            <p className="hover:text-white transition cursor-pointer">📧 recruitment@tecnowok.com</p>
            <p className="hover:text-white transition cursor-pointer">📧 info@tecnowok.com</p>
          </div>

          <div className="space-y-2 text-gray-300 text-base md:text-lg">
            <p className="hover:text-white transition cursor-pointer">📞 +91-63823 03056</p>
            <p className="hover:text-white transition cursor-pointer">📞 +91-89397 87678</p>
          </div>

          <div className="space-y-2 text-gray-300 text-base md:text-lg">
            <p className="hover:text-white transition cursor-pointer">🔗 linkedin.com/company/tecnowok</p>
            <p className="hover:text-white transition cursor-pointer">🌍 www.tecnowok.com</p>
          </div>
        </div>

      </div>
    </section>
  );

}
