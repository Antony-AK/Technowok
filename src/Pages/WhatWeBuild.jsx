"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import image1 from "../assets/cuisine1.png"
import image2 from "../assets/online1.png"
import image3 from "../assets/muthu1.png"
import image4 from "../assets/marigan4.png"
import { Link } from "react-router-dom";
import tanuvas1 from "../assets/Tanuvas1.png"
import tanuvas2 from "../assets/Tanuvas2.png"
import tanuvas3 from "../assets/Tanuvas3.png"
import tanuvas4 from "../assets/Tanuvas4.png"
import tanuvas5 from "../assets/Tanuvas5.png"
import tamil1 from "../assets/Tamil5.png"
import tamil2 from "../assets/Tamil2.png"
import textile1 from "../assets/textile1.jpg"
import textile2 from "../assets/textile2.webp"
import textile3 from "../assets/textile3.webp"
import textile4 from "../assets/textile4.webp"
import selvi1 from "../assets/selvi1.png"
import selvi2 from "../assets/selvi2.png"
import selvi3 from "../assets/selvi3.png"

import c9 from "../assets/achman.jpg"
import c12 from "../assets/dbgt.jpg"
import c7 from "../assets/gn.png"
import c14 from "../assets/benz.png"
import c15 from "../assets/c4.png"
import c10 from "../assets/inkspot.jpg"
import c8 from "../assets/pest.png"
import c11 from "../assets/Skymax.jpg"
import c6 from "../assets/TuticorinTerminal.jpg"
import c13 from "../assets/blackstone.png"
import c3 from "../assets/c1.png"
import c1 from "../assets/c2.png"
import c2 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c16 from "../assets/c6.png"
import c17 from "../assets/c7.png"
import c18 from "../assets/c8.png"
import c19 from "../assets/c9.png"
import c20 from "../assets/c10.png"
import c21 from "../assets/c11.png"
import c22 from "../assets/c12.png"






const CLIENT_LOGOS = [
    c1, c2, c3, c4, c5,
    c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15,
    c16, c17, c18, c19, c20,
    c21, c22,
];

const ROW_1 = CLIENT_LOGOS.slice( 0, 7);
const ROW_2 = CLIENT_LOGOS.slice(7, 14);
const ROW_3 = CLIENT_LOGOS.slice(15, 22);


export const PROJECTS = [
    {
        id: "feed-management",
        title: "Feed Management (TANUVAS)",
        image1: tanuvas1,
        image2: tanuvas2,
        image3: tanuvas3,
        image4: tanuvas4,
        image5: tanuvas5,
        subtitle: "Feed & Mineral Mixture Accounting Software",
        duration: "2 Years",
        teamSize: 3,
        role: "Coding, Development & Implementation",
        skills: ["Core PHP", "MySQL", "AngularJS", "Ajax", "Dompdf"],
        features: [
            {
                heading: "Feed Formulae",
                points: [
                    "52 types of livestock & poultry feed with individual feed formulas.",
                    "Formulas created for 100 kg batches with unique raw materials.",
                    "Feed formula auto-adjusts based on availability & cost.",
                    "New formulas can be added based on requirements."
                ]
            },
            {
                heading: "Raw Material Data Sheet",
                points: [
                    "50+ types of raw materials maintained with balance, receipt & issue tracking.",
                    "Material-wise balance recorded date-wise.",
                    "Feed-wise raw material usage auto-updated."
                ]
            },
            {
                heading: "Daily Feed Production",
                points: [
                    "Feed produced based on indents from centers.",
                    "Auto-calculation of daily raw material usage.",
                    "Auto-entry of daily feed production logs."
                ]
            },
            {
                heading: "Feed Distribution",
                points: [
                    "Distribution to TANUVAS units, Animal Husbandry & public sales.",
                    "Delivery notes generated with feed type, number of bags & receiver details.",
                    "End-of-day summary auto-updates feed balance."
                ]
            }
        ]
    },


    {
        id: "school-management",
        title: "School Management Software",
        image1: tamil1,
        image2: tamil2,
        subtitle: "Complete ERP for Educational Institutions",
        duration: "5 Months",
        teamSize: 2,
        role: "Coding, Development & Implementation",
        skills: ["PHP", "MySQL", "JavaScript", "jQuery", "Ajax"],
        features: [
            {
                heading: "Core Modules",
                points: [
                    "Dashboard for admin overview",
                    "Principal Portal",
                    "Admission Funnel",
                    "Marketing Activity Tracking",
                    "Teacher Portal",
                    "Librarian Portal"
                ]
            }
        ]
    },


    {
        id: "textile-erp",
        title: "Textile ERP",
        image1: textile1,
        image2: textile2,
        image3: textile3,
        image4: textile4,
        subtitle: "Manufacturing & Inventory Automation",
        duration: "1.5 Years",
        teamSize: 4,
        role: "Coding, Development & Implementation",
        skills: ["Core PHP", "MySQL", "AngularJS", "Ajax", "Dompdf"],
        features: [
            {
                heading: "Order & Production Tracking",
                points: [
                    "Tracks buyer orders from invoice creation to dispatch.",
                    "Supports unlimited fabric patterns with reed, pick & count.",
                    "Auto-generates yarn & fabric requirements."
                ]
            },
            {
                heading: "Manufacturing Modules",
                points: [
                    "Weaving Module",
                    "Dyeing Module",
                    "Stitching Module",
                    "Checking & Packing Module"
                ]
            },
            {
                heading: "Stock & Reporting",
                points: [
                    "Order-wise stock calculation.",
                    "Downloadable PDF stock reports."
                ]
            }
        ]
    },


    {
        id: "hospital-management",
        title: "Hospital Management System",
        image1: selvi1,
        image2: selvi2,
        image3: selvi3,
        subtitle: "Hospital ERP for Patient & Staff Operations",
        duration: "5 Months",
        teamSize: 4,
        role: "Coding, Development & Implementation",
        skills: ["PHP", "MySQL", "AngularJS", "Ajax", "Dompdf"],
        features: [
            {
                heading: "Hospital Modules",
                points: [
                    "Admin Login",
                    "Patient Registration",
                    "Appointment Management",
                    "Ward Management",
                    "Blood Bank",
                    "Billing & Invoices",
                    "HR & Payroll",
                    "Pharmacy Management",
                    "Lab Reports"
                ]
            },
            {
                heading: "Operations",
                points: [
                    "Attendance Monitoring",
                    "Full hospital workflow automation"
                ]
            }
        ]
    }
];



gsap.registerPlugin(ScrollTrigger);



export default function WhatWeBuild() {
    const heroRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        /* HERO TEXT ANIMATION */
        gsap.from(".hero-line", {
            y: 80,
            opacity: 100,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
        });

        /* PARALLAX MOUSE MOVE */
        heroRef.current.addEventListener("mousemove", (e) => {
            const x = (e.clientX - window.innerWidth / 2) * 0.02;
            const y = (e.clientY - window.innerHeight / 2) * 0.02;
            gsap.to(".hero-device", { x, y, duration: 0.5 });
        });
    }, []);

    

    return (
        <div className="w-full bg-black text-white overflow-x-hidden">

            <section
                ref={heroRef}
                className="relative min-h-screen flex flex-col items-center justify-center text-center"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-red-600 opacity-40" />

                <MiniCarousel />

                {/* TEXT */}
                <h1 className="hero-line text-3xl mt-5 sm:text-5xl md:text-6xl font-bold leading-tight">
                    We Build
                </h1>
                <h1 className="hero-line text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-red-600">
                    The Future of Digital
                </h1>

                <p className="hero-line text-gray-400 mt-6 text-lg max-w-xl">
                    A new era of apps, websites, AI, cloud & engineering excellence.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigate("/whatwebuild/externalprojects")}
                    className="mt-24 sm:mt-20 z-10 px-8 sm:px-12 py-3 sm:py-4 mb-20 rounded-full bg-red-600 shadow-[0_0_25px_rgba(255,0,0,0.6)]"
                >
                    Explore What We Build
                </motion.button>
            </section>


            {/* ========================= PROJECT SHOWCASE ========================= */}
            <section className="py-20 md:py-40 space-y-20 md:space-y-40">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center ">
                    Project <span className="text-red-600 ">Showcase</span> </h2>

                {PROJECTS.map((project, i) => (
                    <ShowcaseItem
                        key={project.id}
                        project={project}
                        flipped={i % 2 === 1}
                    />
                ))}

                <div className="w-full  flex justify-center items-center"><button onClick={() => navigate("/whatwebuild/externalprojects")} className="text-xl px-6 py-3 cursor-pointer text-center w-[300px] rounded-full flex justify-center items-center bg-red-600  hover:scale-90 duration-200 ease-linear transition-transform">View More Projects</button></div>


                <ClientLogos />

            </section>

            {/* ========================= CTA ========================= */}
            <section className="relative py-40 text-center overflow-hidden">

                {/* BACKGROUND GRADIENT + GLOWS */}
                <div className="absolute inset-0">
                    {/* Main red → black gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-600/40 via-black/60 to-black"></div>

                    {/* Red glow spot (top-left) */}
                    <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-red-700/30 blur-[140px] rounded-full"></div>

                    {/* Purple/Red glow spot (bottom-right) */}
                    <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-500/20 blur-[150px] rounded-full"></div>
                </div>

                {/* TEXT + BUTTON */}
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-red-600  bg-clip-text">
                        Let’s Build Your Vision
                    </h2>

                    <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                        Partner with us to create world-class digital products that shape the future.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.97 }}
                        className="
        mt-10 px-14 py-4 
        bg-gradient-to-r from-red-600 to-red-800 
        rounded-full text-white font-semibold
        shadow-[0_0_25px_rgba(255,0,0,0.5)]
        hover:shadow-[0_0_40px_rgba(255,0,0,0.8)]
        transition-all duration-300
      "
                    >
                        Start Your Project →
                    </motion.button>
                </div>

            </section>

        </div>
    );
}


function ShowcaseItem({ flipped, project }) {
    return (
        <div
            className={`w-full flex flex-col md:flex-row ${flipped ? "md:flex-row-reverse" : ""
                } items-center gap-10 px-4 md:px-10`}
        >
            {/* IMAGE / CARD */}
            <motion.div
                whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
                className="
                    w-[90%] h-[220px] 
                    sm:w-[380px] sm:h-[260px] 
                    md:w-[450px] md:h-[300px]
                    bg-[#111] rounded-2xl border p-2 border-white/10 
                    shadow-[0_0_40px_rgba(255,0,0,0.3)]
                "
            >
                <img
                    src={project.image1}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                />
            </motion.div>

            {/* TEXT SECTION */}
            <div className="max-w-xl px-2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    {project.title}
                </h3>

                <p className="text-red-600 text-md sm:text-lg mb-2">
                    {project.subtitle}
                </p>

                <p className="text-gray-400 text-sm sm:text-base">
                    {project.features[0]?.points[0]}
                </p>

                <Link to={`/whatwebuild/casestudy/${project.id}`}>
                    <button className="
                        mt-6 px-5 py-2 text-sm sm:text-base 
                        rounded-full border border-red-500 text-red-500 
                        hover:bg-red-500 hover:text-white transition
                    ">
                        View Case Study →
                    </button>
                </Link>
            </div>
        </div>
    );
}


function MiniCarousel() {
    const images = [image1, image2, image3, image4];
    const [index, setIndex] = useState(0);

    // Auto-slide
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(id);
    }, []);

    return (
        <div
            className="
        relative mt-20
        w-[90%] h-[180px]
        sm:w-[420px] sm:h-[260px]
        md:w-[1000px] md:h-[600px]
        flex items-center justify-center
        pointer-events-none z-0 overflow-visible
    "
        >

            <div className="relative w-full h-full flex items-center justify-center">
                {images.map((img, i) => {
                    // Position each image
                    const position = (i - index + images.length) % images.length;

                    // Decide position styling
                    let style = {};
                    if (position === 0) {
                        // Center
                        style = { scale: 1, x: 0, opacity: 1, zIndex: 3 };
                    } else if (position === 1) {
                        // Right
                        style = { scale: 0.7, x: 250, opacity: 0.5, zIndex: 2 };
                    } else if (position === images.length - 1) {
                        // Left
                        style = { scale: 0.7, x: -250, opacity: 0.5, zIndex: 2 };
                    } else {
                        // Hidden images
                        style = { scale: 0.4, x: 600, opacity: 0 };
                    }

                    return (
                        <motion.img
                            key={i}
                            src={img}
                            className="absolute rounded-2xl shadow-xl object-cover opacity-90"
                            style={{ width: "100%", height: "100%" }}
                            animate={style}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function LogoMarqueeRow({ logos, reverse = false, size = "normal", speed = 60 }) {
    const trackRef = useRef(null);

    useEffect(() => {
  const track = trackRef.current;
  const totalWidth = track.scrollWidth / 2;

  const ctx = gsap.context(() => {
    gsap.to(track, {
      x: reverse ? totalWidth : -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const val = parseFloat(x);

          // ✅ KEY FIX
          if (reverse) {
            return `${((val % totalWidth) + totalWidth) % totalWidth}px`;
          }

          return `${val % totalWidth}px`;
        },
      },
    });
  });

  return () => ctx.revert();
}, [reverse, speed]);


    return (
        <div className="relative overflow-hidden">
            <div
                ref={trackRef}
                className="flex w-max gap-20 px-10"
            >
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className={`
              flex items-center justify-center
              ${size === "big" ? "w-[240px] h-[120px]" : "w-[190px] h-[95px]"}
              transition-all duration-300
              hover:-translate-y-2
              hover:scale-110
              hover:drop-shadow-[0_0_30px_rgba(255,0,0,0.55)]
            `}
                    >
                        <img
                            src={logo}
                            alt="client"
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


function ClientLogos() {
    return (
        <section className="relative py-36 overflow-hidden bg-black">

            {/* Ambient background glow */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] 
          bg-red-600/10 blur-[180px] rounded-full 
          -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Heading */}
            <div className="relative z-10 text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Trusted by <span className="text-red-600">Our Clients</span>
                </h2>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                    From government institutions to startups & enterprises worldwide.
                </p>
            </div>

            {/* ROW 1 */}
            <LogoMarqueeRow logos={ROW_1} speed={50} />

            <div className="h-20" />

            {/* ROW 2 (reverse) */}
            <LogoMarqueeRow logos={ROW_2} reverse speed={50} />

            <div className="h-20" />

            {/* ROW 3 (bigger, slower) */}
            <LogoMarqueeRow logos={ROW_3} size="big" speed={75} />


            {/* Disclaimer */}
            <p className="text-center text-gray-500 text-sm mt-20">
                Logos shown represent organizations we’ve worked with through projects & deployments.
            </p>
        </section>
    );
}
