"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ShoppingMobileScreen() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 rounded-[34px] overflow-hidden bg-[#fafafa]">

      {/* 🧭 FIXED HEADER */}
      <div className="w-full h-20 bg-white flex items-center justify-between px-5 shadow-sm z-20 relative">
        <div>
          <p className="text-xs mt-2 text-gray-400">Deliver to</p>
          <p className="text-sm font-semibold text-gray-900">Chennai, India</p>
        </div>
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-gray-300"></div>
          <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] text-white w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>
      </div>

      {/* 🛝 AUTO-SCROLLING CONTENT (Middle only) */}
      <div className="relative h-[calc(100%-140px)] overflow-hidden z-10">
        <motion.div
          className="absolute top-0 left-0 right-0 px-4 space-y-5 pb-24"
          initial={{ y: 0 }}
          animate={{ y: ["0%", "-65%", "0%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* ⭐ CATEGORY STRIP */}
          <div className="flex gap-3 overflow-x-auto py-4 scrollbar-none">
            {["All", "Fashion", "Electronics", "Mobiles", "Beauty", "Grocery"].map(
              (cat, i) => (
                <div
                  key={i}
                  className={`px-4 py-2 text-sm rounded-full shadow-sm whitespace-nowrap ${
                    i === 0
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 border"
                  }`}
                >
                  {cat}
                </div>
              )
            )}
          </div>

          {/* 🖼 HERO BANNER */}
          <div>
            <div className="w-full h-36 rounded-xl bg-gray-200 shadow-inner overflow-hidden animate-pulse" />
          </div>

          {/* 🔥 DEAL OF THE DAY */}
          <div>
            <h2 className="text-lg text-red-600 font-semibold">🔥 Deal of the Day</h2>

            <div className="bg-white rounded-xl shadow-md mt-3 p-3 flex gap-3">
              <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse" />

              <div className="flex flex-col justify-between">
                <div>
                  <div className="h-4 w-32 rounded bg-gray-200 mb-2" />
                  <div className="h-3 w-20 rounded bg-gray-200 mb-3" />

                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-gray-900">₹ 999</p>
                  <p className="text-sm line-through text-gray-400">₹ 1,799</p>
                </div>
              </div>
            </div>
          </div>

          {/* 🛒 PRODUCT LIST */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <div
                key={i}
                className="w-full bg-white rounded-xl shadow-md overflow-hidden flex"
              >
                <div className="w-[38%] h-[130px] bg-gray-200 animate-pulse" />

                <div className="p-3 flex flex-col justify-between w-[62%]">
                  <div>
                    <div className="h-4 w-32 rounded bg-gray-200 mb-2"></div>
                    <div className="h-3 w-20 rounded bg-gray-200 mb-3"></div>

                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, star) => (
                        <div
                          key={star}
                          className="w-2 h-2 rounded-full bg-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        ₹ 1,299
                      </div>
                      <p className="text-xs text-green-600">20% Off</p>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      className="px-4 py-1 bg-black text-white rounded-lg text-sm shadow"
                    >
                      Add
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🔻 FIXED BOTTOM NAV */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white flex items-center justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.08)] z-20">
        {["Home", "Explore", "Cart", "Profile"].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-xs text-gray-500"
          >
            <div className="w-6 h-6 rounded-lg bg-gray-300 mb-1"></div>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
