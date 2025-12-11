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

    const benefits = [
        "Resume Building",
        "LinkedIn Optimization",
        "HR Mock Interviews",
        "Placement Assistance",
        "Internships",
        "Career Mentorship",
        "Company Tie-ups",
    ];

    const whyUs = [
        "Mentors from Bangalore/Chennai tech hubs",
        "Tamil-friendly training sessions",
        "Real-time project based learning",
        "Affordable fee structure",
        "Support until first job",
        "Trusted by 1000+ learners",
    ];

    const timeline = [
        { title: "Training", desc: "Master skills with guided real-time mentorship." },
        { title: "Internship", desc: "Work on real clients and real industry tasks." },
        { title: "Placement", desc: "Resume, LinkedIn, HR mocks, job connections." },
        { title: "Career Growth", desc: "We support even after you get the job." },
    ];

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

                {/* Headline + Highlight */}
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-center md:text-left">
                    Build The
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">
                        Future You Want
                    </span>
                </h1>

                {/* Animated underline strip */}
                <div className="mt-2 h-[4px] w-40 bg-gradient-to-r from-red-600 to-transparent rounded-full animate-pulse"></div>

                {/* Glass Subtext */}
                <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 
    p-6 rounded-2xl max-w-xl shadow-[0_0_30px_rgba(255,0,0,0.25)]">
                    <p className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
                        You bring the passion.
                        We bring the training, mentorship, internships, and job guidance
                        to launch you into the IT industry.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 flex gap-4 flex-wrap justify-center md:justify-start">

                    <button className="
      px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold
      shadow-[0_0_25px_rgba(255,0,0,0.4)] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)]
      transition-all
    ">
                        Start Your Journey 
                    </button>

                    <button onClick={()=> navigate("/courses")} className="
      px-8 py-4 bg-transparent border border-red-600/60 hover:border-red-600 
      rounded-xl text-lg font-semibold text-red-400 hover:text-red-600
      backdrop-blur-xl transition-all
    ">
                        View Courses →
                    </button>

                </div>

            </div>


            {/* ABOUT PROGRAM */}
            <div className="max-w-7xl mx-auto  grid md:grid-cols-2 gap-16 items-center mb-40 relative z-20">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        A Complete
                        <span className="text-red-600"> Career Accelerator</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Designed by engineers from Chennai, Bangalore & global tech hubs,
                        our training system prepares you with modern tech stack, mentorship,
                        industry projects, internships & placement support — everything you need
                        to transform into a high-paying developer.
                    </p>

                    <ul className="mt-8 space-y-3 text-gray-300 text-lg">
                        <li>✔ Real-time Industry Projects</li>
                        <li>✔ 1:1 Mentor Guidance</li>
                        <li>✔ Internship Opportunities</li>
                        <li>✔ Placement + Career Roadmap</li>
                    </ul>
                </div>

                {/* RIGHT HIGHLIGHT CARD */}
                <div className="bg-[#111]/70 rounded-2xl backdrop-blur-xl border border-red-600/20 shadow-[0_0_40px_rgba(255,0,0,0.3)] p-8 relative overflow-hidden">

                    {/* glow background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl"></div>

                    <h3 className="text-2xl font-semibold mb-4 text-red-500 relative">
                        Program Highlights
                    </h3>

                    <p className="text-gray-300 text-lg relative">
                        • 100% Practical Training
                        • Portfolio-ready Projects
                        • Tech Interview Training
                        • LinkedIn + Resume Optimization
                        • Mock HR + Technical Rounds
                        • Company Referral Network
                    </p>
                </div>

            </div>






            {/* BENEFITS CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-32">
                {benefits.map((b, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="p-6 bg-[#0d0d0f]/70 backdrop-blur-xl rounded-xl 
            border border-white/10 hover:border-red-600 transition-all 
            shadow-[0_0_25px_rgba(255,0,0,0.25)]
            hover:shadow-[0_0_40px_rgba(255,0,0,0.45)]
            transform hover:-translate-y-2 duration-300"
                    >
                        <h2 className="text-xl font-semibold text-red-500">{b}</h2>
                    </div>
                ))}
            </div>

            {/* TOOLS & TECH */}
            <div className="max-w-5xl mx-auto text-center mb-32">
                <h2 className="text-4xl font-semibold mb-8">
                    Tools & <span className="text-red-600">Technologies</span> You Learn
                </h2>

                <p className="text-gray-400 mb-10">
                    Modern stack used by companies like Google, Zoho, TCS, Infosys & Startups.
                </p>

                <div className="flex flex-wrap justify-center gap-5 text-gray-300 text-lg">
                    {[
                        "HTML5", "CSS3", "Bootstrap", "Tailwind",
                        "JavaScript", "React.js", "Node.js",
                        "MongoDB", "SQL", "Git & GitHub",
                        "Figma", "Firebase", "API Integration"
                    ].map((tech, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 bg-[#111]/70 border border-white/10 rounded-lg"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>




            {/* WHY US */}
            <div className="max-w-6xl mx-auto flex flex-col  justify-center items-center text-center my-48">
                <h2 className="text-4xl font-semibold mb-12">
                    Why <span className="text-red-600">Choose</span> Us?
                </h2>

                <div className="grid md:grid-cols-2 gap-8 text-center ms-30 justify-center items-center">
                    {whyUs.map((w, i) => (
                        <p
                            key={i}
                            ref={(el) => (whyRefs.current[i] = el)}
                            className="text-gray-300 text-lg flex items-start gap-10"
                        >
                            <span className="text-red-600 text-2xl">•</span> {w}
                        </p>
                    ))}
                </div>
            </div>

            {/* TIMELINE */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-4xl font-bold mb-16">
                    Your Career Pathway
                </h2>

                <div className="relative border-l border-red-600/40 ml-10">

                    {timeline.map((t, i) => (
                        <div
                            key={i}
                            ref={(el) => (timelineRefs.current[i] = el)}
                            className="mb-16 relative pl-10"
                        >
                            {/* Dot */}
                            <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-red-600 shadow-[0_0_15px_rgba(255,0,0,0.5)]"></div>

                            <h3 className="text-2xl font-semibold">{t.title}</h3>
                            <p className="text-gray-400 mt-1">{t.desc}</p>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}
