"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaAngular, FaVuejs,
  FaJs, FaFigma, FaNodeJs, FaPhp, FaPython, FaLaravel,
  FaAndroid, FaApple, FaAws, FaDocker, FaGitAlt, FaServer
} from "react-icons/fa";

import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiNuxtdotjs, SiJquery,
  SiExpress, SiMongodb, SiDjango, SiSpring, SiDotnet, SiFlutter,
  SiKotlin, SiSwift, SiIonic, SiKubernetes, SiJenkins, SiCloudflare,
  SiMysql, SiPostgresql, SiSqlite, SiFirebase, SiRedis
} from "react-icons/si";

const STACK_DATA = {
  "Front - End": {
    icons: [<FaFigma />, <FaJs />, <FaCss3Alt />, <FaHtml5 />, <SiTailwindcss />, <FaReact />],
    list1: ["Html", "Css", "Bootstrap", "Tailwind", "React", "Angular"],
    list2: ["Vue.js", "Typescript", "JavaScript", "Nuxt.js", "jQuery", "Next.js"],
  },
  "Back - End": {
    icons: [<FaNodeJs />, <FaPhp />, <FaPython />, <SiExpress />, <SiDjango />, <SiSpring />],
    list1: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Django"],
    list2: ["Spring Boot", ".NET", "REST APIs", "Microservices", "GraphQL", "MongoDB"],
  },
  Mobile: {
    icons: [<FaAndroid />, <FaApple />, <SiFlutter />, <FaReact />, <SiKotlin />, <SiSwift />],
    list1: ["Android", "iOS", "React Native", "Flutter", "Kotlin", "Swift"],
    list2: ["Ionic", "Mobile UI/UX", "Push Notifications", "Maps", "Firebase", "API Integration"],
  },
  "Dev Ops/Cloud": {
    icons: [<FaAws />, <FaDocker />, <SiKubernetes />, <SiJenkins />, <FaGitAlt />, <SiCloudflare />],
    list1: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git CI/CD"],
    list2: ["Cloudflare", "Nginx", "API Gateways", "Load Balancing", "Monitoring Tools"],
  },
  Database: {
    icons: [<SiMysql />, <SiPostgresql />, <SiSqlite />, <SiFirebase />, <FaServer />, <SiRedis />],
    list1: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
    list2: ["MongoDB", "Redis", "Supabase", "SQL Optimization", "Backup Systems"],
  }
};

export default function ModernStack() {
  const tabs = Object.keys(STACK_DATA);
  const [active, setActive] = useState("Front - End");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => {
        const keys = Object.keys(STACK_DATA);
        const nextIndex = (keys.indexOf(prev) + 1) % keys.length;
        return keys[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeData = STACK_DATA[active];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 md:py-20">

      {/* Heading */}
      <h2 className="text-white text-3xl md:text-4xl font-semibold mb-10 text-center leading-snug">
        Our <span className="text-red-600">Modern</span> Development Stack
      </h2>

      <div
        className="
          w-full max-w-5xl rounded-3xl p-6 md:p-14 
          shadow-xl backdrop-blur-sm border border-white/10
        "
        style={{ background: "linear-gradient(180deg, #d12a2a 0%, #000 100%)" }}
      >

        {/* Tabs */}
        <div className="
          flex overflow-x-auto scrollbar-hide 
          md:justify-between gap-3 
          bg-[#e74a4a]/40 
          p-2 rounded-full mb-10
        ">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`
                px-6 py-2 rounded-full whitespace-nowrap font-medium 
                transition-all duration-200
                ${active === t ? "bg-white text-black shadow-lg" : "text-white/80"}
              `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="
              flex flex-col md:grid md:grid-cols-2 gap-10 
              items-center md:items-start
            "
          >

            {/* ⭐ NEW MOBILE ICON DESIGN ⭐ */}
            <div className="
              grid grid-cols-3 gap-4 md:hidden
              p-4 rounded-xl bg-black/20 shadow-inner
            ">
              {activeData.icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="
                    flex justify-center items-center 
                    text-4xl p-3 rounded-xl
                    bg-[#ffffff15] backdrop-blur-sm
                    shadow-[0_0_10px_rgba(255,255,255,0.1)]
                    border border-white/10
                  "
                >
                  {Icon}
                </motion.div>
              ))}
            </div>

            {/* ⭐ DESKTOP ICON CLUSTER (UNCHANGED) ⭐ */}
            <div className="
              relative hidden md:flex items-center justify-center 
              h-40 w-full 
            ">
              {activeData.icons.map((Icon, i) => {
                const positions = [
                  { x: -80, y: -20 },
                  { x: -20, y: -10 },
                  { x: 30, y: 10 },
                  { x: -40, y: 40 },
                  { x: 20, y: 50 },
                  { x: -10, y: 5 },
                ];

                const pos = positions[i % positions.length];
                return (
                  <div
                    key={i}
                    className="absolute text-6xl"
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px)`,
                      color: ["#ff7b7b", "#ffc95e", "#7fd1ff", "#69ffda"][i % 4],
                      animation: "floatDiagonal 4s ease-in-out infinite, spinSlow 12s linear infinite",
                    }}
                  >
                    {Icon}
                  </div>
                );
              })}
            </div>

            {/* LISTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="
                text-white text-base 
                flex  gap-6 md:gap-16 
                w-full items-center justify-center md:items-start
              "
            >
              <ul className="space-y-3">
                {activeData.list1.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>

              <ul className="space-y-3">
                {activeData.list2.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
