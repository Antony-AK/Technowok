import React from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../Pages/WhatWeBuild";
import { motion } from "framer-motion";

export default function CaseStudy() {
  const { projectId } = useParams();
  const data = PROJECTS.find((p) => p.id === projectId);

  if (!data)
    return <h1 className="p-20 text-white text-3xl">Project Not Found</h1>;

  return (
    <div className="w-full bg-black text-white overflow-hidden relative">

      {/* Sticky Progress Bar */}
      <motion.div
        style={{ scaleX: 0 }}
        className="fixed top-0 left-0 h-[4px] w-full origin-left bg-red-600 z-[999]"
        whileInView={{
          scaleX: 1,
          transition: { duration: 1, ease: "easeOut" }
        }}
      />

      <HeroSection data={data} />
      <OverviewSection data={data} />
      <StorytellingSection data={data} />
      <ResultsSection />
      <BackCTA />
    </div>
  );
}




function HeroSection({ data }) {
  return (
    <section className="relative pt-28 pb-16 px-6 md:px-20">

      <motion.div  
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          w-full max-w-6xl mx-auto 
          rounded-2xl overflow-hidden 
          shadow-[0_0_60px_rgba(255,0,0,0.25)]
        "
      >
        <img
          src={data.image1}
          className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
        />
      </motion.div>

      <div className="text-center mt-10 px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold bg-white bg-clip-text text-transparent"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-lg md:text-xl text-red-600 tracking-wide"
        >
          {data.subtitle}
        </motion.p>
      </div>
    </section>
  );
}


/* ============================= */
/*       OVERVIEW SECTION        */
/* ============================= */

function OverviewSection({ data }) {
  return (
    <section className="px-6 md:px-20 py-20">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="
          max-w-6xl mx-auto p-6 sm:p-10
          bg-white/5 backdrop-blur-xl
          border border-white/10 rounded-3xl
          shadow-[0_0_50px_rgba(255,0,0,0.15)]
        "
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-600 tracking-wider">
          Project Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-base sm:text-lg">
          <OverviewItem label="Role" value={data.role} />
          <OverviewItem label="Duration" value={data.duration} />
          <OverviewItem label="Team Size" value={data.teamSize} />
        </div>

        <div className="mt-10">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-red-700/20 border border-red-500 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function OverviewItem({ label, value }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-xl font-medium">{value}</p>
    </div>
  );
}


/* ============================= */
/*    STORYTELLING SECTION       */
/* ============================= */

function StorytellingSection({ data }) {
  const images = [data.image2, data.image3, data.image4, data.image5].filter(Boolean);

  return (
    <section className="px-6 md:px-20 py-20 space-y-32">

      {data.features.map((block, index) => {
        const img = images[index % images.length];

        return (
          <div 
            key={index} 
            className="
              grid grid-cols-1 md:grid-cols-2 
              gap-10 md:gap-20 
              items-center justify-center
            "
          >
            {index % 2 === 0 ? (
              <>
                <FeatureText block={block} />
                <FeatureShape image={img} />
              </>
            ) : (
              <>
                <FeatureShape image={img} />
                <FeatureText block={block} />
              </>
            )}
          </div>
        );
      })}

    </section>
  );
}

function FeatureText({ block }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="space-y-4 text-center md:text-left"
    >
      <h2 className="text-3xl sm:text-4xl text-red-500 font-bold">{block.heading}</h2>

      <ul className="space-y-2 text-gray-300 text-base sm:text-lg">
        {block.points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function FeatureShape({ image }) {
  return (
    <motion.div
      className="
        w-full h-[250px] sm:h-[320px] md:h-[350px]
        rounded-[24px] overflow-hidden
        bg-gradient-to-br from-red-700/20 to-purple-700/20
        backdrop-blur-xl border border-white/10
        shadow-[0_0_50px_rgba(255,0,0,0.25)]
      "
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <img
        src={image}
        className="w-full h-full object-cover rounded-[24px] opacity-90"
      />
    </motion.div>
  );
}


/* ============================= */
/*       RESULTS SECTION         */
/* ============================= */

function ResultsSection() {
  const metrics = [
    { label: "Faster Workflow", value: "3×" },
    { label: "Human Errors Reduced", value: "95%" },
    { label: "Daily Ops Automated", value: "100%" },
  ];

  return (
    <section className="px-6 md:px-20 py-20 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-14 text-red-400">
        Impact & Results
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              p-8 rounded-3xl bg-white/5 border border-white/10
              shadow-[0_0_40px_rgba(255,0,0,0.15)]
            "
          >
            <p className="text-3xl font-medium mb-2 text-white">{m.value}</p>
            <p className="text-gray-400 text-lg">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function BackCTA() {
  return (
    <div className="text-center pb-20">
      <Link to="/whatwebuild">
        <button className="
          px-10 py-4 text-base md:text-lg 
          bg-red-600 rounded-full 
          hover:bg-red-700 
          transition shadow-lg
        ">
          ← Back to Projects
        </button>
      </Link>
    </div>
  );
}
