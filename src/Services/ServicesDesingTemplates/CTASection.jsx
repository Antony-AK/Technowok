
import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';


export default function CtaSection({ data }) {
  return (
    <section className="relative w-full py-40 bg-black text-white overflow-hidden">
      
      {/* GRID BACKDROP */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background: `
            linear-gradient(to bottom, rgba(255,0,0,0.15) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,0,0,0.15) 1px, transparent 1px),
            #000
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* CENTER ENERGY GLOW */}
      <motion.div
        className="absolute left-1/2 top-[40%] -translate-x-1/2 
        w-[600px] h-[600px] rounded-full 
        bg-[radial-gradient(circle,rgba(255,0,0,0.45),transparent_70%)]
        blur-[90px]"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* TITLE */}
    {/* TITLE with dynamic highlights */}
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-center text-3xl md:text-5xl font-bold mb-6"
>
  {data.heading.split(" ").map((word, i) => {
    const highlightWords = ["Android", "iOS", "Hybrid", "Windows", "Native", "Ionic", "Process", "CMS", "Ecommerce", "Digital"];
    
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
    const isHighlighted = highlightWords.includes(cleanWord);

    return (
      <span
        key={i}
        className={
          isHighlighted
            ? "text-red-600 drop-shadow-[0_0_12px_rgba(255,0,0,0.6)]"
            : ""
        }
      >
        {word + " "}
      </span>
    );
  })}
</motion.h2>


      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center text-white/60 text-base md:text-xl max-w-3xl mx-auto mb-16"
      >
        {data.subheading}
      </motion.p>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center items-center w-60 mx-auto"
      >
        <Link href={data.ctaLink}>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 45px rgba(255,0,0,0.6)",
              backgroundColor: "rgba(255,0,0,0.9)",
            }}
            whileTap={{ scale: 0.97 }}
            className="
              px-8 py-5 text-sm md:text-xl font-semibold uppercase tracking-wider
              bg-red-600 rounded-full shadow-[0_0_25px_rgba(255,0,0,0.4)]
              hover:shadow-[0_0_45px_rgba(255,0,0,0.6)]
              transition-all duration-300
            "
          >
            {data.ctaText}
          </motion.button>
        </Link>
      </motion.div>

      {/* HOVER SWEEP LIGHT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(255,0,0,0.12), transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(255,0,0,0.12), transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(255,0,0,0.12), transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-600/40 rounded-full"
          style={{
            width: 3 + Math.random() * 7 + "px",
            height: 3 + Math.random() * 7 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{ opacity: [0.2, 0.7, 0.2], y: [-10, 10, -10] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity }}
        />
      ))}
    </section>
  );
}
