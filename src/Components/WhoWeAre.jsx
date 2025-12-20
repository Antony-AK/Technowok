"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "./SEO";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const visionRef = useRef(null);
  const statsRef = useRef(null);
  const solveRef = useRef(null);
  const serveRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 1,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(cardRefs.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardRefs.current[0],
        start: "top 85%",
      }
    });

    gsap.from([solveRef.current, serveRef.current], {
      opacity: 1,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: solveRef.current,
        start: "top 85%"
      }
    });

    gsap.from(visionRef.current, {
      opacity: 1,
      x: -40,
      duration: 1,
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top 80%",
      }
    });

    gsap.from(statsRef.current.children, {
      opacity: 1,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 85%",
      }
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-black text-white py-28 px-6 md:px-16">


      <SEO
        title="About Tecnowok Solution | IT & Digital Transformation Company in Tamil Nadu"
        description="Learn about Tecnowok Solution, a trusted IT, software development and digital marketing company serving Tuticorin, Chennai, Bangalore and global clients."
      />

      {/* HERO */}
      <div
        ref={heroRef}
        className="text-center mt-5 mb-16 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Who <span className="text-red-600">We</span> Are
        </h1>

        <p className="mt-5 text-gray-400 text-lg md:text-xl leading-relaxed">
          Tecnowok Solution is a global technology studio focused on engineering, automation, branding and digital innovation  built for businesses that value clarity, reliability and long-term scalability.
        </p>
      </div>

      {/* IDENTITY CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-32">
        {[
          {
            title: "Our Identity",
            desc: "A full-stack digital transformation agency delivering engineering, automation, branding & marketing in one ecosystem."
          },
          {
            title: "Our Commitment",
            desc: "Everything we build is clean, scalable, fast and future-ready — from internal tools to enterprise systems."
          },
          {
            title: "Our Culture",
            desc: "Transparency, creativity, curiosity and a ‘build it like it’s ours’ mindset define how we operate."
          }
        ].map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="p-8 bg-[#0d0d0f] rounded-xl border border-white/10 
            shadow-[0_0_30px_rgba(255,0,0,0.25)] hover:shadow-[0_0_50px_rgba(255,0,0,0.5)]
            transition-all"
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-4">{card.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* WHAT WE SOLVE */}
      <div
        ref={solveRef}
        className="max-w-5xl mx-auto mb-32"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What <span className="text-red-600">We Solve</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          At Tecnowok Solution, we address the biggest challenges that Businesses struggle with outdated systems, inconsistent digital presence, inefficient operations and low customer engagement.
          <br /><br />
          We solve this with Scalable software & automation, High-performance websites & apps, Strong branding & digital visibility, and Data-driven marketing systems
          marketing - all under one roof.
          <br /><br />
          Our mission is simple: help businesses work smarter, grow faster, stay future-ready and All delivered under one integrated ecosystem..
        </p>
      </div>

      {/* WHO WE SERVE */}
      <div
        ref={serveRef}
        className="max-w-5xl mx-auto mb-32"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Who <span className="text-red-600">We Serve</span>
        </h2>

        <ul className="space-y-5 text-gray-300 text-lg leading-relaxed">
          {[
            "Entrepreneurs & Startups needing strong foundations, fast execution & visibility",
            "SMBs looking to automate operations & scale efficiently",
            "Enterprises requiring robust IT systems & cloud-native digital transformation",
            "D2C & E-Commerce Brands needing flawless stores, marketing & creative content",
            "Service-Based Companies wanting consistent branding & customer engagement"
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-4 group cursor-default">
              <span className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(255,0,0,0.5)] 
        mt-2 group-hover:scale-125 transition-all"></span>
              <span className="group-hover:text-white transition-all duration-200">{text}</span>
            </li>
          ))}
        </ul>


        <p className="mt-6 text-gray-400 text-lg">
          From India to the US, UK, and Maldives — we empower forward-thinking brands with reliable tech,
          impactful marketing, and world-class creative execution.
        </p>
      </div>

      {/* VISION + MISSION */}
      <div
        ref={visionRef}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start mb-32"
      >
        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To become the most trusted global technology partner delivering innovation with measurable business impact.
          </p>
        </div>

        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To craft scalable digital ecosystems with speed, clarity, creativity and engineering excellence.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div
        ref={statsRef}
        className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-14 mb-32"
      >
        {[
          { num: "120+", label: "Happy Clients" },
          { num: "200+", label: "Projects Delivered" },
          { num: "5+ Years", label: "Experience" }
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl md:text-5xl font-bold text-red-600">{stat.num}</h3>
            <p className="text-gray-300 mt-3 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* HOW WE BUILD */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          How We <span className="text-red-600">Build</span> the Future
        </h2>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Every solution we create is powered by clean engineering, modern frameworks,
          cloud-native architecture, design thinking, and a deep understanding of how
          people and businesses evolve.
        </p>
      </div>

    </section>
  );
}
