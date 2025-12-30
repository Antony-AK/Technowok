import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { COURSES_SEO } from "../data/SEOContent";

import SEO from "../Components/SEO"

gsap.registerPlugin(ScrollTrigger);

// Course data (kept and expanded where needed)
const courseList = [
  {
    title: "Full-Stack Web & App Development (Job-Ready Program)",
    duration: "5 Months",
    skills: [
      "HTML5, CSS3, Responsive Design",
      "JavaScript (ES6+)",
      "React.js & State Management",
      "Node.js / PHP & REST APIs",
      "MongoDB / MySQL",
      "Git & GitHub",
      "Hosting & Deployment",
      "AI tools for coding & productivity",
    ],
    outcome: "Become a job-ready full-stack developer with real client experience.",
    blurb:
      "A complete career program combining skill training, live projects, internships and placement support.",
  },
  {
    title: "Digital Marketing & Performance Growth",
    duration: "2.5 Months",
    skills: [
      "Marketing funnels & fundamentals",
      "Instagram, Facebook & LinkedIn growth",
      "Google Ads & Lead Generation",
      "SEO & Local SEO",
      "Influencer & WhatsApp marketing",
      "AI tools for ads & content",
      "Analytics & ROI tracking",
    ],
    outcome: "Run real campaigns and generate measurable growth.",
    blurb:
      "Performance-driven digital marketing with live ad campaigns and real business projects.",
  },
  {
    title: "UI/UX & Graphic Design (Career Track)",
    duration: "2.5 Months",
    skills: [
      "Design thinking & UX psychology",
      "UI design for web & mobile",
      "Figma (advanced)",
      "Canva & Adobe tools",
      "Brand identity & design systems",
      "AI-powered design tools",
    ],
    outcome: "Design professional interfaces and brand systems.",
    blurb:
      "Career-focused UI/UX and graphic design training with portfolio-ready projects.",
  },
  {
    title: "AI Tools, Automation & No-Code Productivity",
    duration: "45 Days",
    skills: [
      "AI fundamentals (ChatGPT, Gemini)",
      "AI for marketing, coding & design",
      "Automation (Zapier / Make)",
      "No-code tools (Webflow, Bubble)",
      "AI workflows for business",
      "Prompt engineering",
    ],
    outcome: "Build AI-powered workflows and business systems.",
    blurb:
      "Modern AI and automation skills for productivity, startups and freelancers.",
  },
  {
    title: "Spoken English, Business Communication & Interview Mastery",
    duration: "1.5 Months",
    skills: [
      "Fluency & confidence building",
      "Grammar for speaking",
      "Business English & presentations",
      "Corporate email & meetings",
      "HR interview preparation",
      "Personal branding & LinkedIn",
    ],
    outcome: "Speak confidently and clear interviews.",
    blurb:
      "Communication mastery designed for corporate success and interviews.",
  },
];


// Static lists (from PDF)
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
  "Skill-based, industry-designed curriculum",
  "Live + recorded classes",
  "Hands-on real-time projects",
  "Paid & unpaid internships",
  "Resume building & mock interviews",
  "Placement drives & hiring support",
];

const timeline = [
  {
    title: "LearnWok – Skill Education",
    desc: "Structured, industry-aligned training programs.",
  },
  {
    title: "Tecnowok Solution – Industry Experience",
    desc: "Live projects, internships & real product development.",
  },
  {
    title: "TalentWok Solution – Hiring & Careers",
    desc: "Placements, freelance roles & long-term career support.",
  },
  {
    title: "Career Growth",
    desc: "We support you beyond your first job.",
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
    // subtle hero entrance using GSAP
    if (heroRef.current) gsap.from(heroRef.current, { opacity: 1, y: 24, duration: 0.9 });

    // stagger course cards reveal
    if (cardRefs.current.length) {
      gsap.from(cardRefs.current, {
        opacity: 1,
        y: 30,
        stagger: 0.12,
        scrollTrigger: { trigger: cardRefs.current[0], start: "top 85%" },
      });
    }

    // whyUs reveal
    if (whyRefs.current.length) {
      gsap.from(whyRefs.current, {
        opacity: 1,
        x: -30,
        stagger: 0.12,
        scrollTrigger: { trigger: whyRefs.current[0], start: "top 85%" },
      });
    }

    if (timelineRefs.current.length) {
      gsap.from(timelineRefs.current, {
        opacity: 1,
        scale: 0.97,
        stagger: 0.16,
        scrollTrigger: { trigger: timelineRefs.current[0], start: "top 85%" },
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 px-6 md:px-16 overflow-hidden">


      {COURSES_SEO && (
        <SEO
          title={COURSES_SEO.title}
          description={COURSES_SEO.description}
        />
      )}


      <div className="pointer-events-none absolute inset-0  z-0">
        <div className="ambient-blob blob-a"></div>
        <div className="ambient-blob blob-b"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="ambient-blob blob-a"></div>
        <div className="ambient-blob blob-b"></div>
      </div>
      <div className="relative max-w-7xl mx-auto mb-20 mt-5 z-10">
        <div className="md:flex md:items-center md:gap-6">
          {/* LEFT CONTENT */} <div className="relative z-20 md:w-2/3">
            <div className="p-10 rounded-3xl bg-[#0d0d0f]/60 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,0,0,0.12)]">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text"> Learn <span className="text-white">•</span> Build <span className="text-white">•</span> Get Hired </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl"> Industry-Ready Courses. Real Skills. Real Careers. </p>
              <div className="w-full h-[1px] bg-white/10 my-8"></div>
              <p className="text-gray-200 text-xl font-semibold max-w-2xl leading-relaxed">LearnWok is the training & upskilling vertical powered by Tecnowok Solution (Industry Projects) and Talentwok Solution (Placements). </p>
              <p className="mt-4 text-gray-400 text-lg">
              </p> <div className="w-full h-[1px] bg-white/10 my-8"></div>
              <div className="flex flex-col gap-4">
                {/* <div> <h4 className="text-red-500 text-xl font-semibold">Our Mission</h4> <p className="text-gray-300 text-lg">Train. Transform. Place.</p> </div> */}
                <div> <h4 className="text-red-500 text-xl font-semibold mb-4">Why Students Choose Us</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-left max-w-3xl">
                    {["Hands-on real-time projects", "Tamil-friendly mentorship", "Internship & placement support", "HR interview preparation", "Career support until first job"]
                      .map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-red-500 text-xl leading-none">•</span>
                          <span className="text-gray-300">{item}</span> </li>))} </ul>
                </div> <p className="mt-6 text-gray-400 text-lg italic">We don’t just teach courses, <span className="text-red-600 font-semibold">we build careers.</span></p> </div>
            </div>
          </div>
          <div className="hidden md:block absolute right-10 top-20 w-[320px] h-[380px] pointer-events-none">
            <div className="shape4 floating-shape"></div> <div className="shape5 floating-shape"></div>
            <div className="shape6 floating-shape"></div> </div> </div> </div>

      {/* ================= LEARNWOK CAREER FLOW ================= */}
      <div className="relative max-w-7xl mx-auto my-28 z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-red-600">Learn</span> •{" "}
            <span className="text-red-600">Build</span> •{" "}
            <span className="text-red-600">Get Hired</span>
          </h2>
{/* 
          <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
            LearnWok is the training & upskilling vertical powered by{" "}
            <span className="text-gray-200 font-semibold">Tecnowok Solution</span>{" "}
            (Industry Projects) and{" "}
            <span className="text-gray-200 font-semibold">TalentWok Solution</span>{" "}
            (Placements).
          </p>

          <p className="mt-4 text-white italic text-lg">
            We don’t just teach courses.{" "}
            <span className="text-red-500 font-semibold">We build careers.</span>
          </p> */}
        </div>

        {/* FLOW BOXES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* LearnWok */}
          <div className="p-6 rounded-2xl bg-[#0d0d0f]/70 border border-red-600 backdrop-blur-xl
      hover:border-red-600 transition shadow-[0_0_30px_rgba(255,0,0,0.12)]">
            <h3 className="text-xl font-bold text-red-600 mb-3">
              LearnWok <span className="text-gray-400 font-medium">(Education)</span>
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Skill-based courses</li>
              <li>• Live + recorded classes</li>
              <li>• Industry-designed curriculum</li>
              <li>• Certifications</li>
            </ul>
          </div>

          {/* Tecnowok */}
          <div className="p-6 rounded-2xl bg-[#0d0d0f]/70 border border-red-600 backdrop-blur-xl
      hover:border-red-600 transition shadow-[0_0_30px_rgba(255,0,0,0.12)]">
            <h3 className="text-xl font-bold text-red-600 mb-3">
              Tecnowok Solution <span className="text-gray-400 font-medium">(Experience)</span>
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Live industry projects</li>
              <li>• Client exposure</li>
              <li>• Paid & unpaid internships</li>
              <li>• Real product development</li>
            </ul>
          </div>

          {/* TalentWok */}
          <div className="p-6 rounded-2xl bg-[#0d0d0f]/70 border border-red-600 backdrop-blur-xl
      hover:border-red-600 transition shadow-[0_0_30px_rgba(255,0,0,0.12)]">
            <h3 className="text-xl font-bold text-red-600 mb-3">
              TalentWok Solution <span className="text-gray-400 font-medium">(Placement)</span>
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Resume building</li>
              <li>• Mock interviews</li>
              <li>• Placement drives</li>
              <li>• Freelance & full-time roles</li>
            </ul>
          </div>

          {/* Founder Track */}
          <div className="p-6 rounded-2xl bg-[#0d0d0f]/70 border border-red-600 backdrop-blur-xl
      hover:border-red-600 transition shadow-[0_0_30px_rgba(255,0,0,0.12)]">
            <h3 className="text-xl font-bold text-red-600 mb-3">
              Founder & Freelancer Track
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Startup mentoring</li>
              <li>• Freelance onboarding</li>
              <li>• Client matching</li>
              <li>• Revenue-sharing projects</li>
            </ul>
          </div>
        </div>

        {/* FOOT TAGLINE */}
        <p className="text-center mt-14 text-xl font-semibold text-gray-300">
          LearnWok - Skill Education • Tecnowok Solution - Industry Experience • TalentWok Solution - Hiring & Careers
        </p>
      </div>


      <motion.div
        ref={heroRef}
        className="text-center mb-16 relative z-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
            Industry-Ready Courses.
          </span>{" "}
          Real Skills. Real Careers.
        </h1>

        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          LearnWok delivers practical, project-based training powered by Tecnowok
          Solution and TalentWok Solution.
        </p>

        <p className="mt-4 text-gray-500 italic">
          We don’t just teach. <span className="text-red-500">We build careers.</span>
        </p>
      </motion.div>



      {/* COURSES GRID */}
      <div className="relative z-20 max-w-7xl mx-auto mb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {courseList.map((course, idx) => (
          <motion.div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            whileHover={{ y: -8 }}
            className="relative p-6 rounded-2xl bg-[#0d0d0f]/75 border border-white/10 backdrop-blur-xl"
          >
            <h2 className="text-xl font-bold text-red-500 mb-2">
              {course.title}
            </h2>
            <p className="text-sm text-gray-300 mb-3">
              <strong className="text-red-400">Duration:</strong>{" "}
              {course.duration}
            </p>
            <p className="text-gray-200 mb-3">{course.blurb}</p>

            <p className="text-white font-semibold">Skills You Learn:</p>
            <ul className="text-gray-300 text-sm mt-2 space-y-1">
              {course.skills.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>

            <p className="mt-4 text-gray-300 text-sm">
              <strong className="text-red-400">Outcome:</strong>{" "}
              {course.outcome}
            </p>
          </motion.div>
        ))}
      </div>

      {/* WHY US */}
      <div className="relative max-w-6xl mx-auto text-center my-32 z-20">
        <h2 className="text-3xl font-semibold mb-8">
          Why <span className="text-red-600">Students Choose</span> LearnWok
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {whyUs.map((w, i) => (
            <div
              key={i}
              ref={(el) => (whyRefs.current[i] = el)}
              className="flex items-start gap-4 p-6 rounded-xl bg-[#0d0d0f]/60 border border-white/8"
            >
              <div className="text-red-600 text-3xl">•</div>
              <p className="text-gray-300 text-left">{w}</p>
            </div>
          ))}
        </div>
      </div>


      {/* ========== TIMELINE (vertical glowing stripe behind) ========== */}
      <div className="relative max-w-6xl mx-auto mb-28 z-20">
        <h2 className="text-center text-3xl font-bold mb-8">Your <span className="text-red-600">Career</span> Pathway</h2>
        <div className="relative border-l border-red-600/30 ml-12 pl-14">
          {/* vertical stripe accent */}
          <div className="absolute -left-6 top-0 h-full w-2 stripe-accent" />
          {timeline.map((t, i) => (
            <div key={i} ref={(el) => (timelineRefs.current[i] = el)} className="mb-12 relative">
              <div className="absolute -left-9 top-0 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_18px_rgba(255,0,0,0.2)]"></div>
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="text-gray-400 mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== SOFT SKILLS + SPOKEN ENGLISH (corner ambient shapes) ========== */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-20 z-20">
        <div className="p-6 rounded-2xl bg-[#0d0d0f]/70 border border-white/8 relative overflow-hidden">
          <div className="corner-blob left" />
          <h3 className="text-2xl font-semibold text-red-600 mb-3">Soft Skill Training (Corporate-Ready Program)</h3>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>Communication Skills</li>
            <li>Corporate Email Writing</li>
            <li>Teamwork & Leadership</li>
            <li>Interview Skills</li>
            <li>Personality Development</li>
          </ul>
          <p className="mt-3 text-gray-400"><strong>Outcome:</strong> Confidence + professional behaviour.</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0d0d0f]/70 border border-white/8 relative overflow-hidden">
          <div className="corner-blob right" />
          <h3 className="text-2xl font-semibold text-red-600 mb-3">3-Month Spoken English Program</h3>
          <p className="text-gray-300 mb-2">Tamil Nadu’s favourite program for confidence building.</p>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>Grammar + Conversation Practice</li>
            <li>Group Discussions</li>
            <li>Presentation Skills</li>
            <li>Daily Speaking Challenges</li>
          </ul>
          <p className="mt-3 text-gray-400"><strong>Outcome:</strong> Speak fluent English with ease.</p>
        </div>
      </div>

      {/* ========== CONTACT / TALENTWOK (geometric accents around cards) ========== */}
      <div className="relative max-w-6xl mx-auto mt-40 mb-40 text-gray-200 z-20">
        <h3 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
          Why Tecnowok Solution for Tamil Nadu Students?
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            "Trainers from Chennai, Bangalore & Global Tech Companies",
            "Courses explained in simple English + Tamil-friendly",
            "Affordable fees for Tier 2/3/4 cities",
            "Practical learning (No boring theory)",
            "Support until you get your first job",
            "Trusted by 1000+ learners across TN"
          ].map((item, i) => (
            <div key={i} className="relative flex items-start gap-3 bg-[#0d0d0f]/60 border border-white/10 backdrop-blur-xl 
              p-4 rounded-xl hover:border-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.16)] transition-all">
              <span className="text-red-500 text-2xl leading-none">•</span>
              <p className="text-gray-300 text-lg">{item}</p>
              <div className={`contact-geo geo-${i % 3}`} />
            </div>
          ))}
        </div>

        <h4 className="text-3xl font-semibold mb-6 text-center">Contact Details</h4>

        <div className="flex gap-10 flex-wrap justify-center items-start mb-20">
          <div className="
    bg-[#0d0d0f]/75 
    border border-white/10 
    backdrop-blur-xl 
    mx-auto 
    rounded-2xl 
    p-8 
    max-w-md
    shadow-[0_0_45px_rgba(255,0,0,0.18)]
    relative 
    overflow-hidden
  ">
            {/* glow blob */}
            <div className="card-blob tl opacity-60" />

            <h5 className="text-2xl font-bold mb-2 text-red-600">
              Talentwok Solution
            </h5>

            <p className="text-sm text-red-500/80 mb-4">
              Recruitment & Placement Division of Tecnowok Solution
            </p>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Your career partner focused on transforming skilled learners into
              industry-ready professionals through structured training,
              real-time projects, and dedicated placement support.
            </p>

            <ul className="text-gray-300 text-sm space-y-2 mb-5">
              <li>• Internship & Job Placement Assistance</li>
              <li>• Resume Building & LinkedIn Optimization</li>
              <li>• HR Mock Interviews & Career Mentorship</li>
              <li>• Company Connections across South India</li>
            </ul>

            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-300 mb-1 text-sm">
                Start Your Learning Journey with Tecnowok
              </p>

              <p className="text-gray-300">
                <strong>Email:</strong>{" "}
                <a
                  className="text-red-600 hover:text-red-500 transition"
                  href="mailto:apply@tecnowok.com"
                >
                  learn@tecnowok.com
                </a>
              </p>
                 <p className="text-gray-300">
                <strong>WhatsApp:</strong>{" "}
                <a
                  className="text-red-600 hover:text-red-500 transition"
                  href="https://wa.me/918939787678"
                  target="_blank"
                >
                  +91 8939787678
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>



    </section>
  );
}
