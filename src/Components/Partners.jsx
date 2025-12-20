"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import hostinger from "../assets/hostinger.png"
import aws from "../assets/aws2.png"
import contobo from "../assets/contobo.jpg"
import { PARTNERS_SEO } from "../data/SEOContent";
import SEO from "./SEO";


gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
  const heroRef = useRef(null);
  const floatRefs = useRef([]);
  const tapeRef = useRef(null);

  const cloudPartners = [
    { name: "AWS", logo: aws },
    { name: "Hostinger", logo: hostinger },
    { name: "DigitalOcean", logo: contobo },
  ];

  const integrations = ["Razorpay", "Twilio", "Google Maps API", "Firebase", "Stripe", "Google Cloud"];

  const strategic = [
    "Startup Technology Partner",
    "Agency Collaboration Partner",
    "Enterprise Digital Partner",
  ];

  useEffect(() => {
    /* HERO FADE */
    gsap.from(heroRef.current, {
      opacity: 1,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    /* FLOATING CLOUD LOGOS */
    floatRefs.current.forEach((el, i) => {
      gsap.to(el, {
        y: -20,
        duration: 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    /* INFINITE SCROLLING TAPE */
    gsap.to(tapeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden">


      {PARTNERS_SEO && (
        <SEO
          title={PARTNERS_SEO.title}
          description={PARTNERS_SEO.description}
        />
      )}

      {/* BG Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.25),transparent)]"></div>

      {/* HERO */}
      <div ref={heroRef} className="text-center my-20 relative z-20">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Our Technology & Platform  <span className="text-red-600">Partners</span>
        </h1>

        <div className="mt-5 text-gray-400 max-w-3xl mx-auto text-xl">
         We collaborate with leading cloud providers, APIs and technology platforms to deliver enterprise-grade solutions.
        </div>

        {/* Glowing Line */}
        <div className="mx-auto mt-10 w-40 h-[3px] bg-red-600/60 rounded-full shadow-[0_0_20px_red]"></div>
      </div>

      {/* CLOUD PARTNERS — 3D FLOATING LOGO CLUSTER */}
      <div className="relative mx-auto max-w-5xl mb-40">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Cloud Partners</h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-24 md:gap-40 pt-10">
          {cloudPartners.map((c, i) => (
            <div
              key={i}
              ref={(el) => (floatRefs.current[i] = el)}
              className="relative w-32 h-32 flex  items-center justify-center
                bg-[#0d0d0f] rounded-2xl border border-white/10
                shadow-[0_0_40px_rgba(255,0,0,0.25)] backdrop-blur-xl"
            >
              {/* Logo */}
              <img src={c.logo} alt={c.name} className="w-20 opacity-80" />

              {/* Orbiting Halo */}
              <div className="absolute inset-0 rounded-2xl border border-red-600/30 animate-pulse"></div>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-6 text-center">
          *These are cloud platforms we deploy on. Not commercial partnerships.
        </p>
      </div>

      {/* PLATFORM INTEGRATION — MARQUEE TAPE */}
      <div className="mb-40">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Platform Integrations
        </h2>

        <div className="overflow-hidden relative">
          <div
            ref={tapeRef}
            className="flex gap-10 whitespace-nowrap text-2xl font-semibold text-red-600"
          >
            {[...integrations, ...integrations].map((t, i) => (
              <span key={i} className="px-6 py-3 border border-red-600/40 rounded-xl">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* STRATEGIC PARTNERS — VERTICAL TIMELINE */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Strategic Partnership Models
        </h2>

        <div className="relative border-l border-red-600/40 ml-6">
          {strategic.map((s, i) => (
            <div key={i} className="relative pl-10 mb-16">
              {/* Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-red-600 shadow-[0_0_15px_red]"></div>

              <h3 className="text-2xl font-semibold text-red-500">{s}</h3>
              <p className="text-gray-400 mt-1 text-sm">
                Tailored collaboration models designed for long-term growth.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
