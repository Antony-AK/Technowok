"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const slideContent = [
  {
    title: "Retail & E-commerce",
    text: "We build high-performance e-commerce platforms, online stores, POS systems, and inventory management solutions that enhance customer experience and boost online sales. Our digital solutions help retail brands scale effortlessly with secure payments, real-time analytics, and seamless automation.",
  },
  {
    title: "News & Media",
    text: "We deliver fast, secure, and scalable news portals, content management systems, streaming platforms, and digital publishing solutions designed for high traffic environments. Our technology helps media companies distribute content efficiently and engage audiences across all devices.",
  },
  {
    title: "Social Networking",
    text: "We develop modern social platforms, community apps, messaging systems, and engagement tools that promote user interaction and scale to millions. Our solutions focus on performance, security, user privacy, and real-time communication features.",
  },
  {
    title: "Banking & Finance",
    text: "We create secure, compliant, and intelligent fintech applications, digital banking platforms, payment gateways, and financial management systems. With strong encryption and automation, we help financial institutions deliver seamless and trusted digital services.",
  },
  {
    title: "Healthcare",
    text: "We build robust healthcare management systems, appointment platforms, telemedicine apps, EHR systems, and patient engagement tools tailored to medical standards. Our solutions improve operational efficiency and enhance patient care with secure data handling.",
  },
  {
    title: "Logistics & GPS-Based Solutions",
    text: "We offer advanced logistics management systems, GPS tracking apps, fleet management platforms, delivery route optimization, and real-time monitoring solutions. Our technology helps logistics companies improve accuracy, reduce costs, and increase operational efficiency.",
  },
];

const HorizontalScroll = () => {
  const imageRef = useRef([]);
  const imageContainerRef = useRef();

  // Build slides dynamically
  const imageSection = slideContent.map((item, i) => (
    <div
      key={i}
      ref={(ref) => (imageRef.current[i] = ref)}
      className="w-[850px] h-[350px] shrink-0 flex gap-14 justify-center items-center 
        bg-transparent overflow-hidden rounded-xl p-5"
    >
      {/* Left Text Block */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-red-600">{item.title}</h2>
        <p className="text-gray-300 mt-3  max-w-lg">{item.text}</p>
      </div>

      {/* Right Image */}
      <div className="w-[70%] h-full">
        <img
          src={`img/img${i + 1}.jpg`}
          alt=""
          className="w-full h-full object-cover rounded-xl 
shadow-[5px_5px_rgba(139,0,0,0.4),10px_10px_rgba(139,0,0,0.3),15px_15px_rgba(139,0,0,0.2),20px_20px_rgba(139,0,0,0.1),25px_25px_rgba(139,0,0,0.05)]
            transition-all duration-300"
        />
      </div>
    </div>
  ));

  gsap.registerPlugin(ScrollTrigger);

  // Horizontal scroll animation
  useEffect(() => {
    gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: 1,
        end: "+=" + imageContainerRef.current.offsetWidth,
        pin: true,
        snap: 1 / (imageRef.current.length - 1),
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  // LENIS smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section
      id="horizontal-scroll-section"
      ref={imageContainerRef}
      className="min-h-screen flex flex-nowrap items-center space-x-20 px-20"
      style={{ width: `calc(150vw * ${slideContent.length})` }}
    >
      {imageSection}
    </section>
  );
};

export default HorizontalScroll;
