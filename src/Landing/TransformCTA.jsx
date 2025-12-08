import React from "react";
import bg from "../assets/bg4.jpg"; // replace with your real background image

export default function TransformCTA() {
  return (
    <section className="w-full bg-black flex justify-center py-20 px-4">
      <div className="w-full max-w-7xl relative">

        {/* Background Image */}
        <div
          className="w-full h-[300px] md:h-[300px]  overflow-hidden relative"
        >
          {/* BG image */}
          <img
            src={bg}
            className="w-full h-full object-cover"
            alt=""
          />

          {/* Red Overlay */}
          <div className="absolute inset-0 bg-red-600/60" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

            <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
              Ready to transform your business?
            </h2>

            <p className="text-white/90 max-w-2xl text-sm md:text-base leading-relaxed mb-6">
              Whether you need a high-performing website, a feature-rich mobile app, 
              or a powerful social media presence, we've got you covered. 
              Partner with Tecnowok Solution and take your business to the next level.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-2">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-white/90 transition">
                Get a quote
              </button>

              <button className="border border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white/20 transition">
                Schedule a call
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
