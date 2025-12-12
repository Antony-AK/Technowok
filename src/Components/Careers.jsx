"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const cardRefs = useRef([]);
    const whyRefs = useRef([]);
    const timelineRefs = useRef([]);

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 1,
            y: 40,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(cardRefs.current, {
            opacity: 1,
            y: 40,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardRefs.current[0],
                start: "top 85%",
            },
        });

        gsap.from(whyRefs.current, {
            opacity: 1,
            x: -40,
            duration: 1,
            stagger: 0.15,
            scrollTrigger: {
                trigger: whyRefs.current[0],
                start: "top 85%",
            },
        });

        gsap.from(timelineRefs.current, {
            opacity: 1,
            scale: 0.9,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: timelineRefs.current[0],
                start: "top 85%",
            },
        });
    }, []);



    return (
        <section className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-red-500/10 blur-[140px] rounded-full"></div>

            {/* HERO SECTION */}
            <div
                ref={heroRef}
                className="relative z-20 mb-50 flex flex-col items-center md:items-start 
  max-w-6xl mx-auto pt-10 px-4"
            >

                {/* Floating Glow Orb */}
                <div className="absolute -top-28 right-10 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full"></div>

                <div className="hidden md:block absolute right-10 top-20 w-[320px] h-[380px] pointer-events-none">
                    <div className="floating-shape shape1"></div>
                    <div className="floating-shape shape2"></div>
                    <div className="floating-shape shape3"></div>
                </div>

                {/* Left Accent Line */}
                <div className="hidden md:block absolute left-0 top-10 h-[120px] w-[4px] bg-red-600 rounded-full shadow-[0_0_20px_red]"></div>

                {/* LEFT CONTENT */}
                <div className="w-[60%]">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Grow Your Career
                        <span className="text-red-600"> With Us</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        At TecnoWok, you don’t just work - you grow, innovate, and help shape the
                        future of technology.
                        Our environment encourages curiosity, continuous learning, and hands-on experience
                        with modern tools and real client projects.
                    </p>

                    <p className="text-gray-400 text-lg mt-4 leading-relaxed">
                        Whether you're building solutions for global brands or experimenting with
                        emerging technologies, you’ll always be supported by mentors, a passionate
                        team, and a culture that values creativity, ownership, and skill mastery.
                    </p>

                    <ul className="mt-8 space-y-3 text-gray-300 text-lg">
                        <li>✔ Challenging & meaningful projects</li>
                        <li>✔ Continuous learning & skill development</li>
                        <li>✔ Supportive, growth-focused team culture</li>
                        <li>✔ Work with modern stacks & real clients</li>
                    </ul>
                </div>

            </div>


            {/* ===================== ABOUT WORKING WITH US ===================== */}

            <div className="max-w-6xl mx-auto mt-32 mb-28 relative z-20 flex justify-center items-center ">



                {/* RIGHT GLASS CARD */}
                <div className="p-8 rounded-2xl w-[800px] mx-auto flex flex-col items-center bg-[#0d0d0f]/70 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,0,0.25)]">
                    <h3 className="text-2xl font-semibold text-red-500 mb-6">
                        Why Join Us?
                    </h3>

                    <ul className="space-y-4 text-gray-300 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="text-red-500 text-xl">•</span>
                            <span>Exposure to Fortune-level clients</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-red-500 text-xl">•</span>
                            <span>Work on high-impact applications</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-red-500 text-xl">•</span>
                            <span>Modern DevOps, Frontend & Mobile workflows</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-red-500 text-xl">•</span>
                            <span>Opportunity to lead, own, and innovate</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-red-500 text-xl">•</span>
                            <span>Healthy, positive, career-driven workplace</span>
                        </li>
                    </ul>
                </div>


            </div>




            {/* ===================== CURRENT OPENINGS ===================== */}

            <div className="max-w-5xl mx-auto mb-32">
                <h2 className="text-center text-4xl font-bold mb-14">
                    Current <span className="text-red-600">Openings</span>
                </h2>

                <div className="space-y-20">

                    {[
                        {
                            role: "PHP / Web Backend Developer",
                            vacancy: "3 Positions",
                            exp: "1 – 4 Years",
                            skills: "Core PHP, MySQL, JavaScript, Framework basics"
                        },
                        {
                            role: "Digital Marketer",
                            vacancy: "2 Positions",
                            exp: "1 – 3 Years",
                            skills: "SEO, Ads Management, Content Strategy, Communication"
                        },
                        {
                            role: "Android Developer",
                            vacancy: "2 Positions",
                            exp: "1 – 3 Years",
                            skills: "Native Android, Kotlin/Java, API Integration, React Native"
                        },
                        {
                            role: "WordPress Developer",
                            vacancy: "2 Positions",
                            exp: "1 – 3 Years",
                            skills: "Theme customization, Backend + Frontend development"
                        },
                        {
                            role: "Web Developer",
                            vacancy: "3 Positions",
                            exp: "1 – 4 Years",
                            skills: "Frontend + Backend, API Integration"
                        },
                        {
                            role: "Angular Developer",
                            vacancy: "1 Position",
                            exp: "1 – 4 Years",
                            skills: "Angular components, services, state management"
                        },
                    ].map((job, idx) => (
                        <div
                            key={idx}
                            className="relative p-6 rounded-2xl bg-[#0d0d0f]/60 border border-white/10 backdrop-blur-xl
        shadow-[0_0_25px_rgba(255,0,0,0.25)] hover:shadow-[0_0_35px_rgba(255,0,0,0.45)]
        transition-all duration-300 hover:-translate-y-1 group"
                        >
                            {/* Red Accent Strip */}
                            <div className="absolute left-0 top-0 h-full w-[4px] bg-red-600 rounded-r-xl shadow-[0_0_12px_rgba(255,0,0,0.6)]" />

                            <div className="ml-4">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-red-500 transition">
                                    {job.role}
                                </h3>

                                <div className="mt-3 text-gray-300 space-y-1 text-base">
                                    <p><span className="text-red-400 font-medium">Vacancy:</span> {job.vacancy}</p>
                                    <p><span className="text-red-400 font-medium">Experience:</span> {job.exp}</p>
                                    <p><span className="text-red-400 font-medium">Skills:</span> {job.skills}</p>
                                </div>

                             
                            </div>
                        </div>
                    ))}

                </div>
            </div>




            {/* ===================== APPLY NOW ===================== */}
            <div className="max-w-4xl mx-auto text-center py-20 bg-[#111]/60 border border-white/10 
rounded-3xl backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,0,0.25)]">

                <h2 className="text-4xl font-bold mb-6">
                    Ready To <span className="text-red-600">Join Tecnowok?</span>
                </h2>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                    We’re always looking for passionate creators, smart problem-solvers, and
                    people who love building meaningful digital products.
                    Share your profile with us - our HR team will reach out soon.
                </p>

                <div className="space-y-3 text-gray-300 text-lg">

                    <p>
                        <span className="text-red-400 font-medium">Email:</span> info@tecnowok.com
                    </p>

                    <p>
                        <span className="text-red-400 font-medium">Business Contact:</span> +91 89397 87678
                    </p>

                    <p>
                        <span className="text-red-400 font-medium">Location:</span> Tuticorin · Chennai · Bangalore · Global
                    </p>

                </div>

                <button
                    onClick={() => window.location.href = "mailto:info@tecnowok.com"}
                    className="mt-10 px-10 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold
    shadow-[0_0_25px_rgba(255,0,0,0.4)] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)]
    transition-all"
                >
                    Apply Now →
                </button>
            </div>



        </section>
    );
}
