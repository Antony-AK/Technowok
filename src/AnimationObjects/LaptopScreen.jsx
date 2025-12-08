"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LaptopScreen() {
  return (
    <div className="absolute inset-0 bg-[#f5f5f7] text-black overflow-hidden rounded-xl font-inter">

      {/* 🔹 GLASS NAVBAR */}
      <div className="
        w-full h-14 
        bg-white/60 backdrop-blur-lg
        flex items-center justify-between px-6 z-20 relative
        border-b border-gray-300/40
        shadow-[0_3px_15px_rgba(0,0,0,0.06)]
      ">
        <h1 className="text-lg font-semibold tracking-wide text-gray-900">Tecnowok</h1>

        <div className="flex items-center gap-6 text-[13px] text-gray-700">
          <span className="hover:text-red-600 transition">Home</span>
          <span className="hover:text-red-600 transition">Services</span>
          <span className="hover:text-red-600 transition">Projects</span>
          <span className="hover:text-red-600 transition">Contact</span>
        </div>

        <button className="px-3 py-[6px] bg-red-600 text-white rounded-md text-xs shadow-md">
          Get Quote
        </button>
      </div>

      {/* 🔹 SCROLL CONTENT */}
      <div className="relative h-[calc(100%-56px)] overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 px-6 py-8 space-y-12"
          initial={{ y: 0 }}
          animate={{ y: ["0%", "-60%", "0%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >

          {/* 🟥 MODERN HERO SECTION */}
          <div className="
            w-full h-52 
            bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]
            flex items-center justify-between px-8
            overflow-hidden
          ">
            <div className="space-y-3 max-w-sm">
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                We Build Digital Products That <span className="text-red-600">Transform Brands</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Websites, mobile apps, and enterprise digital experiences created with precision.
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs shadow-md">
                View Our Work
              </button>
            </div>

            {/* Hero mock image (just placeholder) */}
            <div className="w-40 h-40 bg-gray-300 rounded-xl shadow-inner" />
          </div>

          {/* 🔧 FEATURED SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Core Services</h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Web Development", color: "from-red-500 to-red-700" },
                { name: "Mobile Apps", color: "from-purple-500 to-purple-700" },
                { name: "UI/UX Design", color: "from-blue-500 to-blue-700" },
                { name: "Ecommerce Solutions", color: "from-emerald-500 to-emerald-700" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="
                    p-4 bg-white rounded-xl 
                    border border-gray-200
                    shadow-sm hover:shadow-lg
                    transition cursor-pointer
                    flex items-start gap-4
                  "
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{service.name}</p>
                    <p className="text-xs mt-1 text-gray-500">
                      Built with scalability, performance & aesthetics in mind.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ⭐ PREMIUM TESTIMONIAL */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What Clients Say</h3>

            <div className="
              p-5 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 
              rounded-2xl shadow-xl border border-gray-700/40 text-white
            ">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <div>
                  <p className="text-sm font-medium">Raghav M</p>
                  <p className="text-xs text-white/60">Founder – RM Tech</p>
                </div>
              </div>

              <p className="text-sm text-white/80 leading-relaxed">
                “Working with Tecnowok has been a game-changer. Their ability to deliver 
                scalable digital products helped us grow 5× faster. Absolutely brilliant!”
              </p>
            </div>
          </div>

          {/* 📌 FOOTER PREVIEW */}
          <div className="
            w-full h-24 bg-white rounded-xl border border-gray-200
            shadow-inner flex items-center justify-center text-gray-600 text-xs
          ">
            © 2025 Tecnowok — Innovation Meets Execution.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
