
import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function CtaSection({ data }) {
  const navigate = useNavigate();
  return (
    <section className="relative md:w-[60%] mx-auto py-40 bg-black text-white overflow-hidden">
      
      
      {/* TITLE */}
    {/* TITLE with dynamic highlights */}
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-center text-3xl md:text-5xl  font-bold mb-6"
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
      <div
        
        className="flex justify-center items-center w-60 md:w-[400px]  mx-auto"
      >
        <Link to="/contact">
          <button

            className="
              px-8 py-5 text-sm md:text-base  cursor-pointer  font-semibold
              bg-red-600 rounded-full shadow-[0_0_25px_rgba(255,0,0,0.4)]
              hover:shadow-[0_0_45px_rgba(255,0,0,0.6)]
              transition-all duration-300
            "
          >
            Get a Free Consultation
          </button>
        </Link>
      </div>

      {/* HOVER SWEEP LIGHT */}
      {/* <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(255,0,0,0.12), transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(255,0,0,0.12), transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(255,0,0,0.12), transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      /> */}

      {/* FLOATING PARTICLES */}
      {/* {Array.from({ length: 25 }).map((_, i) => (
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
      ))} */}
    </section>
  );
}
