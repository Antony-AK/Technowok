"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TalentWokHero from "../TalentWok/TalentWokHero";
import TalentWokVideoIntro from "../TalentWok/TalentWokVideoIntro";
import TalentWokAbout from "../TalentWok/TalentWokAbout";
import TalentWokServe from "../TalentWok/TalentWokServe";
import TalentWokServices from "../TalentWok/TalentWokServices";
import TalentWokWhyUs from "../TalentWok/TalentWokWhyUs";
import TalentWokProcess from "../TalentWok/TalentWokProcess";
import TalentWokModels from "../TalentWok/TalentWokModels";
import TalentWokContact from "../TalentWok/TalentWokContact";
import SEO from "../Components/SEO";
import { TALENTWOK_SEO } from "../data/Services/ServiceSEO";

gsap.registerPlugin(ScrollTrigger);

export default function TalentWok() {
  useEffect(() => {
    // ✅ Refresh once after mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <SEO
        title={TALENTWOK_SEO.title}
        description={TALENTWOK_SEO.description}
      />

      <div className="bg-black text-white">
        <TalentWokVideoIntro />
        <TalentWokHero h1={TALENTWOK_SEO.h1} />
        <TalentWokAbout />
        <TalentWokServe />
        <TalentWokServices />
        <TalentWokWhyUs />
        <TalentWokProcess />
        <TalentWokModels />
        <TalentWokContact />
      </div>
    </>
  );
}
