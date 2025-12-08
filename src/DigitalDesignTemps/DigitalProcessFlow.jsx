"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalProcessFlow({ data }) {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const stepRefs = useRef([]);

    /* Smooth Scroll */
    useEffect(() => {
        const lenis = new Lenis({ smooth: true, lerp: 0.08 });
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    /* Vertical Line Animation */
    useEffect(() => {
        const line = lineRef.current;
        const steps = stepRefs.current;

        gsap.fromTo(
            line,
            { height: 0 },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            }
        );

        steps.forEach((step, i) => {
            gsap.from(step, {
                opacity: 100,
                y: 80,
                scale: 0.94,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
        });

    }, []);

    const highlight = ["Digital", "Process", "Marketing", "Strategy", "Growth"];

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-black text-white py-32 px-6 md:px-24 overflow-hidden"
        >
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-purple-600/20 blur-[150px]" />

            {/* Title */}
            <div className="text-center max-w-3xl flex flex-col justify-center items-center mx-auto mb-24 relative z-20">
                <h2 className="text-3xl md:text-5xl flex flex-wrap md:flex-none font-bold tracking-tight leading-tight">
                    {data.title.split(" ").map((w, i) => (
                        <span
                            key={i}
                            className={`mr-2 ${highlight.includes(w) ? "text-red-600" : ""}`}
                        >
                            {w}
                        </span>
                    ))}
                </h2>

                <p className="mt-4 text-lg text-white/70">{data.subtitle}</p>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "120px" }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mt-6 h-[3px] bg-gradient-to-r from-red-600 to-purple-600 rounded-full"
                />
            </div>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">

                {/* Vertical Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] bg-white/10">
                    <div
                        ref={lineRef}
                        className="bg-red-600 w-[3px] rounded-full"
                        style={{ height: 0 }}
                    ></div>
                </div>

                {/* Steps */}
                <div className="relative z-20 flex flex-col gap-32">
                    {data.steps.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => (stepRefs.current[i] = el)}
                            className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } items-start gap-10 md:gap-16`}
                        >
                            {/* Node */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-6">
                                <motion.div
                                    className="w-6 h-6 bg-red-600 rounded-full shadow-[0_0_25px_rgba(255,0,0,0.75)]"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>

                            {/* Card */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotateX: 4,
                                    rotateY: -4,
                                    boxShadow: "0 0 40px rgba(255,0,0,0.35)",
                                }}
                                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                                className="
                  bg-white/5 backdrop-blur-xl border border-white/10 
                  p-8 rounded-3xl w-full md:w-[45%]
                  shadow-[0_0_20px_rgba(255,0,0,0.15)]
                "
                            >
                                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed">{item.text}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
