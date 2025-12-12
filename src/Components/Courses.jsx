"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

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
  "Real-time project-based learning",
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


const courseList = [
  {
    title: "Website Development (Beginner Friendly)",
    duration: "1–1.5 Months",
    skills: ["HTML5, CSS3, Bootstrap", "JavaScript Basics", "Responsive Design", "Live Hosting"],
    outcome: "Build and host your first website.",
  },
  {
    title: "Web Application Development",
    duration: "2–3 Months",
    skills: ["JavaScript ES6+", "React / Angular", "API Integration", "Authentication & Deployment"],
    outcome: "Build real-world apps like Swiggy UI, Netflix UI, CRM dashboards.",
  },
  {
    title: "Mobile Application Development",
    duration: "3–4 Months",
    skills: ["UI Design", "Navigation", "API Integration", "Firebase / Database", "Play Store Release"],
    outcome: "Publish your own Android/iOS applications.",
  },
  {
    title: "Full Stack Development",
    duration: "4–6 Months",
    skills: ["React", "Node.js", "MongoDB", "SQL", "Git & GitHub", "API Development"],
    outcome: "Become a job-ready full-stack developer.",
  },
  {
    title: "UI/UX & Graphic Designing",
    duration: "2–2.5 Months",
    skills: ["Figma / Adobe XD", "Wireframes → Prototypes", "Branding & Logo", "Color Theory"],
    outcome: "Design professional, modern UI & brand systems.",
  },
  {
    title: "Entrepreneurship + Digital Marketing",
    duration: "1 Month",
    skills: ["Business Strategy", "Branding", "Social Media Creation", "Sales Funnels", "Clients Acquisition"],
    outcome: "Launch your own business or agency.",
  },
];

export default function Courses() {
  const [hovered, setHovered] = useState(null);

  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const whyRefs = useRef([]);
  const timelineRefs = useRef([]);

  const navigate = useNavigate();

 
  useEffect(() => {
    gsap.from(heroRef.current, { opacity: 0, y: 40, duration: 1 });

    gsap.from(cardRefs.current, {
      opacity: 1,
      y: 40,
      stagger: 0.15,
      scrollTrigger: { trigger: cardRefs.current[0], start: "top 85%" },
    });

    gsap.from(whyRefs.current, {
      opacity: 1,
      x: -40,
      stagger: 0.15,
      scrollTrigger: { trigger: whyRefs.current[0], start: "top 85%" },
    });

    gsap.from(timelineRefs.current, {
      opacity: 1,
      scale: 0.9,
      stagger: 0.2,
      scrollTrigger: { trigger: timelineRefs.current[0], start: "top 85%" },
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 px-6 md:px-16 overflow-hidden">

      {/* BG GRID */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(90deg,#111_1px,transparent_10px),linear-gradient(0deg,#111_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>


      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-transparent">
            Learn & Build
          </span>{" "}
          Your IT Career
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          Industry-powered courses with training, mentorship, internships & complete job assistance.
        </p>
      </motion.div>

   
      <div className="relative z-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-40">
        {courseList.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative p-8 rounded-2xl bg-[#0d0d0f]/80 border border-white/10
            backdrop-blur-xl cursor-pointer hover:-translate-y-2 duration-300
            group overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent 
              opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {hovered === idx && (
              <motion.div
                layoutId="glow"
                className="absolute inset-0 border border-red-600/40 rounded-2xl shadow-[0_0_25px_rgba(255,0,0,0.6)]"
              />
            )}

            <h2 className="text-2xl font-bold text-red-500 mb-3">
              {course.title}
            </h2>

            <p className="text-sm text-gray-300 mb-4">
              <span className="text-red-400 font-semibold">Duration:</span> {course.duration}
            </p>

            <p className="text-white font-semibold">Skills You Learn:</p>
            <ul className="text-gray-300 text-sm mt-2 space-y-1">
              {course.skills.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>

            <p className="mt-4 text-gray-300 text-sm">
              <span className="text-red-400 font-semibold">Outcome:</span> {course.outcome}
            </p>
          </motion.div>
        ))}
      </div>


      {/* ABOUT PROGRAM */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-40 relative z-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            A Complete
            <span className="text-red-600"> Career Accelerator</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Designed by engineers from Chennai, Bangalore & global tech hubs,
            our system prepares you with modern stack, mentorship, industry
            projects, internships & placement support.
          </p>

          <ul className="mt-8 space-y-3 text-gray-300 text-lg">
            <li>✔ Real-time Industry Projects</li>
            <li>✔ 1:1 Mentor Guidance</li>
            <li>✔ Internship Opportunities</li>
            <li>✔ Placement Support Until First Job</li>
          </ul>
        </div>

        <div className="bg-[#111]/70 rounded-2xl backdrop-blur-xl border border-red-600/20 shadow-[0_0_40px_rgba(255,0,0,0.3)] p-8 relative overflow-hidden">
          <h3 className="text-2xl font-semibold mb-4 text-red-500 relative">
            Program Highlights
          </h3>

          <p className="text-gray-300 text-lg relative leading-relaxed">
            • 100% Practical Training  
            • Portfolio-ready Projects  
            • Tech Interview Training  
            • Resume + LinkedIn Optimization  
            • Mock HR + Technical Rounds  
            • Company Referral Network  
          </p>
        </div>
      </div>

      {/* BENEFITS */}
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
          Modern stack used by companies like Google, Zoho, Infosys & Startups.
        </p>

        <div className="flex flex-wrap justify-center gap-5 text-gray-300 text-lg">
          {[
            "HTML5", "CSS3", "Bootstrap", "Tailwind",
            "JavaScript", "React.js", "Node.js",
            "MongoDB", "SQL", "Git & GitHub",
            "Figma", "Firebase", "API Integration",
          ].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-[#111]/70 border border-white/10 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* WHY US */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center my-48">
        <h2 className="text-4xl font-semibold mb-12">
          Why <span className="text-red-600">Choose</span> Us?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {whyUs.map((w, i) => (
            <p
              key={i}
              ref={(el) => (whyRefs.current[i] = el)}
              className="text-gray-300 text-lg flex items-start gap-4"
            >
              <span className="text-red-600 text-2xl">•</span> {w}
            </p>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-16">Your Career Pathway</h2>

        <div className="relative border-l border-red-600/40 ml-10">
          {timeline.map((t, i) => (
            <div
              key={i}
              ref={(el) => (timelineRefs.current[i] = el)}
              className="mb-16 relative pl-10"
            >
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
