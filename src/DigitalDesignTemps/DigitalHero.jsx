"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import digital1 from "../assets/digital1.png";
import digital2 from "../assets/digital2.png";
import digital3 from "../assets/digital3.png";
import digital4 from "../assets/digital4.png";
import digital5 from "../assets/digital5.png";
import digital6 from "../assets/digital6.png";
import digital7 from "../assets/digital7.png";
import digital8 from "../assets/digital8.png";
import digital9 from "../assets/digital9.png";
import digital10 from "../assets/digital10.png";

const IMAGES = [
  digital1, digital2, digital3, digital4, digital5,
  digital6, digital7, digital8, digital9, digital10
];

// fixed “slots” where images will be placed
const SLOTS = [
  { width: 300, height: 220, top: "8%", left: "6%" },
  { width: 320, height: 360, top: "40%", left: "35%" },
  { width: 240, height: 160, top: "10%", right: "20%" },
  { width: 400, height: 520, top: "38%", right: "5%" },
  { width: 380, height: 130, bottom: "6%", left: "12%" }
];

export default function DigitalHero({ data }) {
  const [assignedImages, setAssignedImages] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);


  // assign random images to slots on mount
  useEffect(() => {
    setAssignedImages(SLOTS.map(() => getRandomImage()));
  }, []);

  // function to get a random image
  function getRandomImage() {
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
  }

  // every 3 seconds swap images smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setAssignedImages(prev =>
        prev.map((img, index) =>
          Math.random() < 0.4   // 40% chance this slot updates
            ? getRandomImage()
            : img
        )
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative min-h-screen w-full bg-[#0a0a0a] text-white
        flex items-center justify-center overflow-hidden
        px-6 md:px-20 py-32
      "
    >
      {/* Animated image slots */}
      <div className="absolute inset-0 pointer-events-none">
        {SLOTS.map((slot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-xl overflow-hidden"
            style={{
              width: isMobile ? 140 : slot.width,   // override for mobile
              height: isMobile ? 100 : slot.height,  // override for mobile
              top: slot.top,
              left: slot.left,
              right: slot.right,
              bottom: slot.bottom
            }}
          >


            <motion.img
              key={assignedImages[i]} // triggers animation when image changes
              src={assignedImages[i]}
              initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
              animate={{ opacity: 0.55, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 6, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="
                w-full h-full object-cover 
                mix-blend-screen brightness-75 rounded-xl
              "
            />
          </motion.div>
        ))}
      </div>

      {/* Glow Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute w-[900px] h-[900px] bg-white/5 rounded-full blur-[150px]"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          {data.title.split(" ").map((word, i) => {
            const highlightWords = ["Digital", "Marketing", "SEO", "Branding", "Design", "Brand", "Company"]; // customize
            const isRed = highlightWords.includes(word);

            return (
              <span
                key={i}
                className={isRed ? "text-red-600" : "text-white"}
              >
                {word + " "}
              </span>
            );
          })}
        </motion.h1>


        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.4 }}
          className="h-[3px] bg-red-600 mt-4 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-5 text-lg text-white/70 max-w-2xl"
        >
          {data.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-white/60 md:text-lg max-w-2xl"
        >
          {data.description}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="
            mt-10 px-12 py-4 rounded-full
            bg-red-600 text-white font-semibold
            shadow-[0_0_16px_rgba(255,0,0,0.35)]
          "
          whileHover={{ scale: 1.06 }}
        >
          Let’s Talk Strategy →
        </motion.button>
      </div>
    </section>
  );
}
