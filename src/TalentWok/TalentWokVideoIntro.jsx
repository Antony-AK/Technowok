"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const gridRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;

        gsap.set(grid, {
            backgroundPosition: "0px 0px",
            force3D: true,
        });

        gsap.to(grid, {
            backgroundPosition: "0px 600px",
            duration: 4,
            ease: "none",
            repeat: -1,
        });
    }, []);





    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">

            {/*  Gradient Glow */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(37,99,235,0.25),transparent_60%)] hero-vignette" />

            {/*  Perspective Grid */}
            <div className="hero-perspective">
                <div
                    ref={gridRef}
                    className="hero-grid"
                />
            </div>


            {/*  Content */}
            <div className="relative z-10 flex h-full flex-col mt-14 items-center justify-center text-center px-6 gap-5">

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-6xl  font-bold leading-tight">
                    <span className="text-white">We Understand</span>{" "}
                    <span className="text-red-600 font-bold">What You Need</span>{" "}
                    <span className="text-white"></span>
                    <br />
                    <span className="text-white">And Deliver</span>{" "}
                    <span className="text-red-600 font-bold">Who You Need.</span>
                </h1>

                <p className="max-w-xl text-base md:text-lg text-white/60 tracking-wide font-medium">
                    Your Talent Partner from the House of{" "}
                    <span className="text-white font-semibold">Tecnowok Solution</span>
                </p>

                {/* Logo */}
                <div className="flex justify-center items-center mt-10">
                    <div className="w-44 md:w-72 opacity-90 floating-logo">
                        <img
                            src="/img/Talentwok.png"
                            alt="TalentWok Logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}
