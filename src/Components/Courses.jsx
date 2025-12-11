"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 pt-36 px-6 md:px-16 overflow-hidden">

      {/* --- Animated Background Grid --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(0deg,#111_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* --- HERO HEADER --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-transparent">
            Learn & Build
          </span>{" "}
          With Us
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          Industry-powered training programs designed to turn students into skilled developers & creators.
        </p>
      </motion.div>

      {/* --- COURSE GRID --- */}
      <div className="relative z-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
            backdrop-blur-xl cursor-pointer
            transition-all duration-300 group overflow-hidden"
          >

            {/* Spotlight Hover Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent 
              opacity-0 group-hover:opacity-100 transition-all duration-300`}
            />

            {/* Glow Border */}
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

      {/* FLOATING GRADIENT ORB */}
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-red-600/20 blur-[120px] rounded-full pointer-events-none"></div>

    </section>
  );
}
