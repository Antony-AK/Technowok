import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// Course data (kept and expanded where needed)
const courseList = [
  {
    title: "Website Development (Beginner Friendly)",
    duration: "1–1.5 Months",
    skills: ["HTML5, CSS3, Bootstrap", "JavaScript basics", "Responsive website building", "Live website hosting"],
    outcome: "Build and host your first website.",
    blurb: "Learn to build beautiful, mobile-friendly websites from scratch. Perfect for students starting their tech career."
  },
  {
    title: "Web Application Development",
    duration: "2–3 Months",
    skills: ["JavaScript ES6+", "React / Angular", "API integration", "Authentication & Deployment"],
    outcome: "Build real-world apps like Swiggy UI, Netflix UI, CRM dashboards.",
    blurb: "Build dynamic, modern applications used by real companies."
  },
  {
    title: "Mobile Application Development",
    duration: "3–4 Months",
    skills: ["UI design", "App navigation", "API Integration", "Firebase / Database", "Play Store release"],
    outcome: "Publish your own Android/iOS applications.",
    blurb: "Android + iOS App Development using Flutter / React Native. Outcome: Build your own mobile apps and publish them."
  },
  {
    title: "Full Stack Development",
    duration: "4–6 Months",
    skills: ["React", "Node.js", "MongoDB", "SQL", "Git & GitHub", "API Development"],
    outcome: "Become a job-ready full-stack developer.",
    blurb: "Front-end (HTML, CSS, JS, React), Backend (Node.js / Python), Database (SQL + MongoDB). 4+ Major Projects."
  },
  {
    title: "UI/UX & Graphic Designing",
    duration: "2–2.5 Months",
    skills: ["Figma / Adobe XD", "Wireframes → Prototypes", "Branding & Logo", "Color Theory"],
    outcome: "Design professional, modern UI & brand systems.",
    blurb: "Design mobile apps, websites & branding creatives like a pro."
  },
  {
    title: "Entrepreneurship + Digital Marketing",
    duration: "1 Month",
    skills: ["Business Strategy", "Branding", "Social Media Creation", "Sales Funnels", "Clients Acquisition"],
    outcome: "Launch your own business or agency.",
    blurb: "Skills: Business Planning, Social Media, Instagram Reels, Ads basics, Sales Funnel, Client Acquisition."
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
  { title: "Placement", desc: "Resume, LinkedIn, HR mocks, job connections via Talentwok." },
  { title: "Career Growth", desc: "We support even after you get the job." },
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

      {/* GLOBAL SOFT AMBIENT BLOBS (behind everything) */}
      <div className="pointer-events-none absolute inset-0  z-0">
        <div className="ambient-blob blob-a"></div>
        <div className="ambient-blob blob-b"></div>
      </div>

      {/* ========== HERO / ABOUT (split: left content + right decorations) ========== */}
      <div className="relative max-w-7xl mx-auto mt-10 mb-20 z-10">
        <div className="md:flex md:items-center md:gap-8">
          {/* LEFT CONTENT */}
          <div className="relative z-20 md:w-2/3">
            <div className="p-10 rounded-3xl bg-[#0d0d0f]/60 backdrop-blur-2xl  
              shadow-[0_0_60px_rgba(255,0,0,0.12)]">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 
                bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
                TECNOWOK SOLUTION
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                Innovative IT Solutions • Digital Marketing • Creative Branding
                <br />
                Helping Businesses Scale, Engage & Grow with Modern Technology.
              </p>

              <div className="w-full h-[1px] bg-white/10 my-8"></div>

              <p className="text-gray-200 text-xl font-semibold max-w-2xl leading-relaxed">
                “Where Skills Become Careers. Where Training Meets Real Opportunities.”
              </p>

              <p className="mt-4 text-gray-400 text-lg">
                <span className="font-semibold text-red-500">Powered by Talentwok Solution</span>
                {" "}— Our Dedicated Recruitment & Placement Division.
              </p>

              <div className="w-full h-[1px] bg-white/10 my-8"></div>

              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-red-500 text-xl font-semibold">Our Mission</h4>
                  <p className="text-gray-300 text-lg">Train. Transform. Place.</p>
                </div>

                <div>
                  <h4 className="text-red-500 text-xl font-semibold mb-4">Why Students Choose Us</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-left max-w-3xl">
                    {[
                      "Hands-on, Practical Training",
                      "Tamil-friendly Mentorship",
                      "Real-time Projects + Portfolio Building",
                      "HR Interview Practice",
                      "Internship & Placement via Talentwok Solution",
                      "Career Support until First Job"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-500 text-xl leading-none">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-gray-400 text-lg italic">We don’t just teach — <span className="text-red-400 font-semibold">we make you job-ready.</span></p>
              </div>
            </div>
          </div>

          {/* RIGHT DECOR (floating shapes cluster) */}
          <div className="hidden md:block absolute right-10 top-20 w-[320px] h-[380px] pointer-events-none">
            <div className="shape4 floating-shape"></div>
            <div className="shape5 floating-shape"></div>
            <div className="shape6 floating-shape"></div>

          </div>
        </div>
      </div>

      {/* HERO MAIN TITLE */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
            Learn & Build
          </span>
          {" "}Your IT Career
        </h1>
        <p className="text-gray-400 mt-3 text-lg max-w-3xl mx-auto">
          Industry-powered courses with training, mentorship, internships & complete job assistance.
        </p>
      </motion.div>

      {/* ========== COURSES GRID (with diagonal float accents) ========== */}
      <div className="relative z-20 max-w-7xl mx-auto mb-20">
        {/* small diagonal accents */}
        <div className="hidden lg:block absolute -left-10 -top-4 w-40 h-40 pointer-events-none">
          <div className="accent-diag diag-1" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16  ">
          {courseList.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="relative p-6 rounded-2xl bg-[#0d0d0f]/75 mt-10 border border-white/8
                backdrop-blur-xl cursor-pointer hover:-translate-y-2 duration-300 group overflow-hidden shadow-[0_0_22px_rgba(255,0,0,0.06)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />

              <h2 className="text-xl font-bold text-red-500 mb-2">{course.title}</h2>
              <p className="text-sm text-gray-300 mb-3">
                <strong className="text-red-400">Duration:</strong> {course.duration}
              </p>

              <p className="text-gray-200 mb-2">{course.blurb}</p>

              <p className="text-white font-semibold">Skills You Learn:</p>
              <ul className="text-gray-300 text-sm mt-2 space-y-1">
                {course.skills.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>

              <p className="mt-4 text-gray-300 text-sm">
                <strong className="text-red-400">Outcome:</strong> {course.outcome}
              </p>

              {hovered === idx && (
                <div className="absolute -inset-0.5 rounded-2xl border border-red-600/30 pointer-events-none shadow-[0_0_28px_rgba(255,0,0,0.16)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========== BENEFITS / TALENTWOK (small ambient shapes) ========== */}
      <div className="relative max-w-7xl mx-auto my-32 z-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
            Talentwok Solution — Your Career, Our Responsibility
          </h1>
          <p className="text-gray-400 text-lg mt-3">
            Every trained student receives complete career support through Talentwok Solution.
          </p>
        </div>

        {/* decorative corner blobs */}
        <div className="absolute left-0 top-6 w-28 h-28 pointer-events-none">
          <div className="small-ambient" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#0d0d0f]/70 backdrop-blur-xl border border-white/10
                shadow-[0_0_25px_rgba(255,0,0,0.08)] hover:shadow-[0_0_30px_rgba(255,0,0,0.18)]
                hover:border-red-600 transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_8px_rgba(255,0,0,0.4)]"></div>
                <h4 className="text-lg font-semibold text-white">{b}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== TOOLS & TECH (rotating ring behind heading) ========== */}
      <div className="relative max-w-5xl mx-auto text-center my-32 z-20">
        <div className="relative inline-block">
          <div className="rot-ring-small absolute -left-16 -top-12 hidden md:block" />
          <h2 className="text-3xl font-semibold mb-6">Tools & <span className="text-red-600">Technologies</span> You Learn</h2>
        </div>

        <p className="text-gray-400 text-xl mb-6">
          Modern stack used by companies like Google, Zoho, Infosys & Startups.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-gray-300 text-base">
          {[
            "HTML5", "CSS3", "Bootstrap", "Tailwind",
            "JavaScript", "React.js", "Node.js",
            "MongoDB", "SQL", "Git & GitHub",
            "Figma", "Firebase", "API Integration", "PHP", "Linux", "Express", "Apache", "Postman", "Jira", "Slack"
          ].map((tech, i) => (
            <span key={i} className="px-3 py-2 bg-[#111]/60 border border-white/6 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ========== WHY US (soft floating squares) ========== */}
      <div className="relative max-w-6xl mx-auto text-center my-32 z-20">
        <h2 className="text-3xl font-semibold mb-8">Why <span className="text-red-600">Choose</span> Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whyUs.map((w, i) => (
            <div key={i} ref={(el) => (whyRefs.current[i] = el)} className="relative flex items-start gap-4 p-6 rounded-xl bg-[#0d0d0f]/60 border border-white/8 backdrop-blur">
              <div className="text-red-600 text-3xl leading-none mt-1">•</div>
              <p className="text-gray-300 text-left">{w}</p>
              <div className={`soft-square sq-${i % 3}`} />
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
                For course admissions & placement coordination
              </p>

              <p className="text-gray-300">
                <strong>Email:</strong>{" "}
                <a
                  className="text-red-600 hover:text-red-500 transition"
                  href="mailto:apply@tecnowok.com"
                >
                  apply@tecnowok.com
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>



    </section>
  );
}
