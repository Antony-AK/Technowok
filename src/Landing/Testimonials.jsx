"use client";
import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "Tecnowok Solution completely transformed our digital presence. From strategy to execution, everything was handled with clarity, speed, and professionalism. Their technical depth really stands out.",
    name: "Arun Prakash",
    role: "Founder, Startup Venture"
  },
  {
    text: "We partnered with Tecnowok for a custom software solution and the results exceeded expectations. Clean architecture, timely delivery, and excellent communication throughout the project.",
    name: "Sivakumar R",
    role: "Operations Head, Enterprise Client"
  },
  {
    text: "What impressed us most was their understanding of business goals, not just technology. Tecnowok delivered a scalable solution that actually improved our workflows.",
    name: "Meenakshi Narayanan",
    role: "Product Manager"
  },
  {
    text: "Reliable, transparent, and highly skilled. Tecnowok Solution is a long-term technology partner you can trust for serious digital growth.",
    name: "Rahul Dev",
    role: "CTO, Digital Brand"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-black py-36 overflow-hidden">

      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] 
          -translate-x-1/2 -translate-y-1/2 
          bg-red-600/10 blur-[200px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-red-500 text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-semibold">
            Words From Our Clients
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Honest feedback from founders, leaders, and teams we’ve worked with
          </p>
        </div>

        {/* TESTIMONIAL FLOW */}
        <div className="grid md:grid-cols-2 gap-16">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              // initial={{ opacity: 0, y: 50, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="
                relative px-8 pt-10 pb-8 rounded-[32px]
                bg-white/[0.035] backdrop-blur-xl
                border border-white/10
                shadow-[0_0_45px_rgba(255,0,0,0.18)]
                hover:shadow-[0_0_65px_rgba(255,0,0,0.28)]
                transition-all
              "
            >
              {/* big quote */}
              <div className="absolute -top-6 left-6 text-red-600 text-7xl font-serif opacity-70">
                “
              </div>

              {/* stars */}
              <div className="flex justify-center gap-1 mb-5 text-red-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* text */}
              <p className="text-gray-200 text-lg leading-relaxed text-center mb-8">
                {item.text}
              </p>

              {/* divider */}
              <div className="w-10 h-[2px] bg-red-600/60 mx-auto mb-6 rounded-full" />

              {/* name */}
              <div className="text-center">
                <p className="text-white font-semibold text-lg">
                  {item.name}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {item.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
