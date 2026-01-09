"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ParticleField from "../AnimationObjects/ParticleField";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  {
    id: 2,
    title: "Empowering Brands. Accelerating Growth. Delivering Excellence.",
    highlight: ["Brands", "Growth"],
    subtitle:
      "Innovating the Digital Future with Tecnowok Solution - from IT automation and app development to e-commerce, branding, and digital marketing.",
  },
  {
    id: 1,
    title: "Innovate with Confidence. Build Fast. Scale Smart.",
    highlight: ["Confidence", "Fast"],
    subtitle:
      "We specialize in custom software, mobile apps, enterprise platforms, and smart digital solutions built for global scale.",
  },
  {
    id: 0,
    title: "Your Vision, Our Technology Let’s Build the Future.",
    highlight: ["Technology", "Future"],
    subtitle:
      "Tecnowok Solution helps startups, SMEs and enterprises build secure, scalable and high-performance digital products  from software and mobile apps to ecommerce platforms, automation, branding and digital marketing.",
  },
];

export default function HeroCinematic({ revealDone, freeze, setTransitionTrigger }) {
  const [current, setCurrent] = useState(0);
  const [pulse, setPulse] = useState(0);
  const imgRef = useRef();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;





  /* Auto-slide */
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35, // hero still counts as visible until 65% scrolled
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);


  /* Parallax */
  useEffect(() => {
    if (isMobile) return; // ❌ no parallax on mobile

    const el = imgRef.current;
    if (!el) return;

    const setX = gsap.quickSetter(el, "x", "px");
    const setY = gsap.quickSetter(el, "y", "px");

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

      setX(dx * 12);
      setY(dy * 10);
    }

    function onLeave() {
      gsap.to(el, { x: 0, y: 0, duration: 0.6 });
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [isMobile]);

  /* 🎬 Main Hero Animation */
  useEffect(() => {
    if (!revealDone) return;

    const ctx = gsap.context(() => {
      const label1 = document.getElementById("hero-label-1");
      const label2 = document.getElementById("hero-label-2");
      const label3 = document.getElementById("hero-label-3");
      const subtitle = document.getElementById("hero-sub");
      const cta = document.getElementById("hero-cta");

      const letters = Array.from(document.querySelectorAll("#hero-title .split-letter"))
        .filter(Boolean); // remove nulls

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.call(() => setPulse((p) => p + 1), null, 0);

      if (label1)
        tl.fromTo(label1, { opacity: 0, y: -18 }, { opacity: 1, y: 0, duration: 0.9 });

      if (letters.length)
        tl.fromTo(
          letters,
          { opacity: 0, y: 36, rotateX: -50 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.02 },
          "-=0.3"
        );

      if (subtitle)
        tl.fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.4");

      // 4️⃣ Location label (AFTER title + subtitle)
      if (label2) {
        tl.fromTo(
          label2,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      }

      // 5️⃣ Tagline
      if (label3) {
        tl.fromTo(
          label3,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        );
      }


      if (cta)
        tl.fromTo(
          cta,
          { opacity: 0, scale: 0.85, y: 18 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "elastic.out(1,0.45)" },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, [current, revealDone]);

  /* Split Title */
  const splitTitle = (text, highlights) =>
    text.split(" ").map((word, wi) => {
      const clean = word.replace(/[^a-zA-Z]/g, "");
      const hl = highlights.includes(clean);
      return (
        <span key={wi} className={`inline-block whitespace-nowrap mr-2 ${hl ? "text-red-600" : ""}`}>
          {word.split("").map((ch, ci) => (
            <span key={ci} className="inline-block split-letter opacity-0">{ch}</span>
          ))}
        </span>
      );
    });



  return (

    <section ref={heroRef} className="relative min-h-screen bg-black text-white overflow-hidden">


      {/* 3D Background */}
      <div className="absolute inset-0 z-10">

        <ParticleField trigger={current} pulse={pulse} freeze={freeze} />

      </div>

      {/* Background slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          ref={imgRef}
          className="absolute inset-0 bg-center bg-cover will-change-transform"
          style={{
            backgroundImage: "url('/mnt/data/ee2ebcff-6b32-4ddf-8ab1-7345cf6ff14a.png')"
          }}
        />
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-40">

        <p id="hero-label-1" className="opacity-0 text-red-500 uppercase font-bold text-xs">
          Tecnowok Solution
        </p>



        <h1 id="hero-title" className="text-4xl md:text-6xl font-bold max-w-5xl mt-2 leading-tight">
          {splitTitle(SLIDES[current].title, SLIDES[current].highlight)}
        </h1>

        <p id="hero-sub" className="opacity-0 text-gray-300 mt-6 text-lg md:text-xl max-w-3xl">
          {SLIDES[current].subtitle}
        </p>

        <p id="hero-label-2" className="opacity-0 mt-5  text-gray-200 font-medium text-sm">
          Tuticorin · Chennai · Bangalore · Tamil Nadu
          Serving clients globally

        </p>
        <p id="hero-label-3" className="opacity-0 text-red-500 mt-5 uppercase font-bold text-xs">
          Build smarter. Scale faster. Grow digitally.
        </p>

        <div id="hero-cta" className="opacity-0 mt-8">
          <button onClick={() => {
            setTransitionTrigger({
              onMid: () => navigate("/contact"),
              afterNav: () => {
                window.dispatchEvent(new Event("page-transition-complete"));
              }
            });
          }} className="bg-red-600 px-7 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
            Contact Us →
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all duration-400 ${current === i ? "w-8 bg-red-600" : "w-3 bg-red-600/40"}`} />
        ))}
      </div>


    </section>
  );
}
