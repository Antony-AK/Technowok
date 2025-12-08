"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWokVideoIntro() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const textRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(textRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.5,
                ease: "power4.out",
            });


            // 1️⃣ Video parallax (slow)
            gsap.to(videoRef.current, {
                y: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.4,
                },
            });

            // 2️⃣ Text block parallax (medium)
            gsap.to(textRef.current, {
                y: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom top",
                    scrub: 1.1,
                },
            });

            // 3️⃣ Overlay parallax (reverse direction)
            gsap.to(overlayRef.current, {
                y: 140,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-black border-b border-gray-300/30 overflow-hidden flex items-center justify-center"
        >
            {/* DARK OVERLAY WITH PARALLAX */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/55 z-0 pointer-events-none"
            />

            {/* MASKED SVG + VIDEO */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1920 1080"
                className="absolute inset-0 z-10 md:top-20 md:-left-32"
            >
                <defs>
                    <clipPath id="text-clip" clipPathUnits="userSpaceOnUse">

                        <text
                            ref={textRef}
                            x="300"
                            y="280"
                            textAnchor="start"
                            fontSize="200px"
                            fontWeight="900"
                            fill="white"
                            letterSpacing="4px"
                        >
                            SKILL UP
                        </text>

                        <text
                            x="300"
                            y="500"
                            textAnchor="start"
                            fontSize="200px"
                            fontWeight="900"
                            fill="white"
                            letterSpacing="4px"
                        >
                            STAND OUT
                        </text>

                        <text
                            x="300"
                            y="720"
                            textAnchor="start"
                            fontSize="200px"
                            fontWeight="900"
                            fill="white"
                            letterSpacing="4px"
                        >
                            GET PLACED
                        </text>

                    </clipPath>
                </defs>

                {/* VIDEO INSIDE TEXT */}
                <foreignObject width="100%" height="100%" clipPath="url(#text-clip)">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="/img/talentwok.mp4"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(2.1) contrast(1.3) saturate(1.2)",
                        }}
                    />
                </foreignObject>
            </svg>

            <div className="
      w-full md:w-auto 
  hidden md:block
      absolute  md:right-10 md:top-1/4 md:-translate-y-1/4
      z-20
    ">
                <img
                    src="/img/Talentwok.png"
                    alt="TalentWok Logo"
                    className=" md:w-80 opacity-90"
                />
            </div>

              <div className="
      w-full md:w-auto 
   md:hidden
      absolute top-[60%]  left-20  md:-translate-y-1/2
      z-20
    ">
                <img
                    src="/img/Talentwok.png"
                    alt="TalentWok Logo"
                    className="w-56  opacity-90"
                />
            </div>


        </section>
    );
}
