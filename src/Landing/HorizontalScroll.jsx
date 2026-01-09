"use client";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slideContent = [
  {
    title: "Retail & E-commerce",
    text: "We build high-performance e-commerce platforms, online stores, POS systems, and inventory management solutions that enhance customer experience and boost online sales. Our digital solutions help retail brands scale effortlessly with secure payments, real-time analytics, and seamless automation.",
  },
  {
    title: "Healthcare & Hospital Systems",
    text: "We build robust healthcare management systems, appointment platforms, telemedicine apps, EHR systems, and patient engagement tools tailored to medical standards. Our solutions improve operational efficiency and enhance patient care with secure data handling.",
  },
  {
    title: "Banking & Fintech",
    text: "We create secure, compliant, and intelligent fintech applications, digital banking platforms, payment gateways, and financial management systems. With strong encryption and automation, we help financial institutions deliver seamless and trusted digital services.",
  },
  {
    title: "Education & Institutions",
    text: "We build secure and scalable digital platforms for educational institutions, including LMS, student portals, online admissions, and virtual classrooms-designed to streamline operations and enhance learning experiences across all devices.",
  },
  {
    title: "Social Networking",
    text: "We develop modern social platforms, community apps, messaging systems, and engagement tools that promote user interaction and scale to millions. Our solutions focus on performance, security, user privacy, and real-time communication features.",
  },
  {
    title: "Logistics & GPS-Based Solutions",
    text: "We offer advanced logistics management systems, GPS tracking apps, fleet management platforms, delivery route optimization, and real-time monitoring solutions. Our technology helps logistics companies improve accuracy, reduce costs, and increase operational efficiency.",
  },
];

const HorizontalScroll = () => {
  const imageRef = useRef([]);
  const imageContainerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  /* ===============================
     Detect mobile BEFORE GSAP runs
  =============================== */
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setReady(true);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ===============================
     GSAP Horizontal Scroll (DESKTOP ONLY)
  =============================== */
  useEffect(() => {
    if (!ready || isMobile) return;

    const tween = gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: 1,
        pin: true,
        end: "+=" + imageContainerRef.current.offsetWidth,
        snap: 1 / (imageRef.current.length - 1),
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [ready, isMobile]);

  /* ===============================
     Lenis (DESKTOP ONLY)
  =============================== */
  useEffect(() => {
    if (!ready || isMobile) return;

    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [ready, isMobile]);

  return (
    <section
      id="horizontal-scroll-section"
      ref={imageContainerRef}
      className="
        md:min-h-screen flex flex-nowrap items-center space-x-20 px-20

        /* 🔥 MOBILE BEHAVIOR */
        max-md:overflow-x-auto
        max-md:touch-pan-y
        max-md:scrollbar-hide
        max-md:snap-x
        max-md:snap-mandatory
      "
      style={{
        width: isMobile ? "100%" : `calc(150vw * ${slideContent.length})`,
      }}
    >
      {slideContent.map((item, i) => (
        <div
          key={i}
          ref={(el) => (imageRef.current[i] = el)}
          className="
            w-[350px] h-[650px] md:w-[850px] md:h-[350px]
            shrink-0 flex md:flex-row flex-col gap-5 md:gap-14
            md:justify-center md:items-center bg-transparent
            overflow-hidden rounded-xl p-5

            /* 🔥 MOBILE SNAP */
            max-md:snap-center
          "
        >
          {/* LEFT TEXT */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-red-600">
              {item.title}
            </h2>
            <p className="text-gray-300 mt-3 text-sm md:text-md max-w-lg">
              {item.text}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-[70%] h-[50%] md:h-full">
            <img
              src={`img/img${i + 1}.jpg`}
              alt=""
              loading="lazy"
              className="
                w-full h-full object-cover rounded-xl
                shadow-[5px_5px_rgba(139,0,0,0.4),
                10px_10px_rgba(139,0,0,0.3),
                15px_15px_rgba(139,0,0,0.2),
                20px_20px_rgba(139,0,0,0.1),
                25px_25px_rgba(139,0,0,0.05)]
                transition-all duration-300
              "
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HorizontalScroll;
