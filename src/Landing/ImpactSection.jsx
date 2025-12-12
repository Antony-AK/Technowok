import React from "react";
import { useNavigate } from "react-router-dom";

import image1 from "../assets/no1.jpg";
import image2 from "../assets/no2.jpg";

export default function ImpactSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black text-white px-6 md:px-16 py-20 flex justify-center">
      <div className="w-full max-w-7xl">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT TITLE BLOCK */}
          <div>
            <p className="text-red-600 text-sm mb-2">Impact</p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Tecnowok Solution by the <br /> numbers
            </h2>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-between">
            <p className="text-gray-300 text-[16px] leading-relaxed max-w-lg">
              Tecnowok represents the connected world. Offering innovative and
              customer-centric information technology experience, enabling
              enterprises, Associates and the society to rise.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-fit bg-red-600 px-6 py-2 text-sm rounded-sm hover:bg-red-700 transition"
            >
              Request Quote !
            </button>
          </div>
        </div>

        {/* ===== 3-COL GRID ===== */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT COLUMN — TALL BOX */}
          <div className="bg-red-600 h-[280px] md:h-[600px] p-8 flex flex-col justify-between md:row-span-2 will-change-transform">
            <h3 className="text-4xl md:text-5xl font-bold">
              120+
            </h3>

            <div>
              <p className="font-semibold">Happy Clients</p>
              <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                Successful digital transformations across <br /> industries
              </p>
            </div>
          </div>

          {/* ROW 1 — COL 2 IMAGE */}
          <div className="h-[280px] overflow-hidden relative rounded will-change-transform">
            <img
              src={image1}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform-gpu scale-105 transition duration-700 opacity-100"
            />
            {/* lightweight overlay (no blur = no lag) */}
            <div className="absolute inset-0 bg-black/25"></div>
          </div>

          {/* ROW 1 — COL 3 SMALL RED BOX */}
          <div className="bg-red-600 h-[280px] p-8 flex flex-col justify-between will-change-transform">
            <h3 className="text-4xl md:text-5xl font-bold">
              10+ years
            </h3>

            <div>
              <p className="font-semibold">Running Successfully</p>
              <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                Reliable assistance for seamless business <br /> operations
              </p>
            </div>
          </div>

          {/* ROW 2 — COL 2 WHITE BOX */}
          <div className="bg-white text-black h-[280px] p-8 flex flex-col justify-between will-change-transform">
            <h3 className="text-4xl md:text-5xl font-bold text-red-600">
              100+
            </h3>

            <div>
              <p className="font-semibold text-red-600">Global Presence</p>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                Global technology solutions for diverse <br /> business needs
              </p>
            </div>
          </div>

          {/* ROW 2 — COL 3 IMAGE */}
          <div className="h-[280px] overflow-hidden relative rounded will-change-transform">
            <img
              src={image2}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform-gpu scale-105 transition duration-700 opacity-100"
            />
            <div className="absolute inset-0 bg-black/25"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
