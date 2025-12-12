
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import service1 from "../assets/service1.png";
import service6 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.webp";
import service2 from "../assets/service6.webp";
import {useNavigate} from "react-router-dom"

const SERVICES = [
  {
    id: 0,
    title: "IT & Automation",
    heading: "Build smarter, faster, scalable systems.",
    desc: "From custom software to automation workflows, we power your business with tech that saves time and accelerates growth.",
    img: service1,
    tag: "IT & Automation",
  },
  {
    id: 1,
    title: "Enterprise & E-commerce",
    heading: "Everything you need to run and scale your business.",
    desc: "ERP, POS, LMS, and full-stack e-commerce solutions designed to streamline operations and unlock revenue.",
    img: service2,
    tag: "Enterprise & E-commerce",
  },
  {
    id: 2,
    title: "Digital Marketing",
    heading: "Visibility that converts. Growth that sustains.",
    desc: "We help your brand attract the right audience with ads, social media, SEO, and performance-driven digital strategies.",
    img: service3,
    tag: "Digital Marketing",
  },
  {
    id: 3,
    title: "Branding & Content",
    heading: "Create content that people love and remember.",
    desc: "From designs to videos, motion graphics to brand storytelling, we craft visuals that boost engagement and identity.",
    img: service4,
    tag: "Branding & Content",
  },
  {
    id: 4,
    title: "IT Outsourcing",
    heading: "Your extended tech team on demand.",
    desc: "Hire expert developers, designers, and IT specialists who deliver quality, speed, and consistent support.",
    img: service5,
    tag: "IT Outsourcing",
  },
  {
    id: 5,
    title: "IT Support",
    heading: "Tech issues solved before they become a problem.",
    desc: "24/7 monitoring, troubleshooting, and maintenance to keep your business running smoothly.",
    img: service6,
    tag: "IT Support",
  },
];


export default function OurServices() {
  const [active, setActive] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const indicatorRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const btn = buttonsRef.current[active];
    if (!btn) return;

    const center = btn.offsetLeft + btn.offsetWidth / 2;
    const blobWidth = 260;

    gsap.to(indicatorRef.current, {
      x: center - blobWidth / 2,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [active]);

 
  useEffect(() => {
    const slider = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % SERVICES.length);
        setIsFading(false);
      }, 350);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      id="services"
      className="w-full bg-black py-14 px-4 md:px-6 flex justify-center"
    >
      <div className="w-full max-w-7xl">

        {/* TOP CARD */}
        <div
          className="text-white px-6 md:px-10 py-14 rounded-[40px] relative"
          style={{
            background: `
              radial-gradient(#c81818 0.10px, transparent 0.8px) 0 0 / 9px 9px,
              #000
            `,
            boxShadow: `
              0 0 40px rgba(219,0,7,0.65),
              0 0 85px rgba(219,0,7,0.45),
              inset 0 0 35px rgba(219,0,7,0.35)
            `,
          }}
        >
          <p className="text-center text-red-600 font-semibold tracking-wide">
            OUR SERVICES
          </p>

          <h2 className="text-center text-2xl md:text-3xl font-semibold mt-4">
            Providing a Full Range of Services
          </h2>

          {/* CONTENT + IMAGE */}
          <div className="mt-5 flex flex-col md:flex-row justify-around items-center mx-auto gap-8">

            {/* LEFT TEXT */}
            <div
              className={`max-w-lg transition-all duration-500 text-center md:text-left
                ${isFading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
            >
              <h3 className="text-2xl text-red-600 font-bold">
                {SERVICES[active].title}
              </h3>

              <h4 className="text-xl mt-4 font-medium text-white">
                {SERVICES[active].heading}
              </h4>

              <p className="mt-4 text-white/60 leading-relaxed text-base md:text-lg">
                {SERVICES[active].desc}
              </p>

              <button onClick={()=> navigate("/contact")} className="mt-8  py-2 rounded-xl bg-primary text-red-600 font-semibold hover:scale-90 transition">
                Get Quote →
              </button>
            </div>

            {/* RIGHT IMAGE - OPTIMIZED */}
            <div
              className={`w-full md:w-[35%] transition-all duration-500
                ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            >
              <div className="w-full h-56 md:h-72 rounded-2xl flex justify-end items-end p-4">
                <img
                  src={SERVICES[active].img}
                  alt={SERVICES[active].heading}
                  loading="lazy"
                  placeholder="blur"
                  width={500}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="relative bg-black mt-8 pb-4 flex justify-center">

          {/* MOVING BLOB */}
          <div
            ref={indicatorRef}
            className="absolute -top-10 left-1 hidden md:block"
            style={{
              width: "250px",
              height: "110px",
              pointerEvents: "none",
              overflow: "hidden",
              borderRadius: "40px",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 260 180"
              preserveAspectRatio="none"
            >
              <path
                d="
                M20 0
                L240 0
                L240 120
                Q240 180 130 180
                Q20 180 20 120
                Z
              "
                fill="rgba(0,0,0,0.85)"
              />

              <path
                d="
                M240 0 
                L240 120
                Q240 180 130 180
                Q20 180 20 120
                L20 0
              "
                stroke="rgba(219,0,7,0.7)"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-24 z-10 px-4">
            {SERVICES.map((s, index) => (
              <button
                key={index}
                ref={(el) => (buttonsRef.current[index] = el)}
                onClick={() => {
                  setIsFading(true);
                  setTimeout(() => {
                    setActive(index);
                    setIsFading(false);
                  }, 350);
                }}
                className={`text-sm md:text-sm font-semibold md:max-w-28 md:text-center transition cursor-pointer
                  ${active === index
                    ? "text-red-600 border-b md:border-none pt-2 scale-110 font-bold"
                    : "text-white/70 hover:text-white"}`}
              >
                {s.tag}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
