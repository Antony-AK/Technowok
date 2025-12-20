"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import TalentWokHero from "../TalentWok/TalentWokHero";
import TalentWokVideoIntro from "../TalentWok/TalentWokVideoIntro";
import TalentWokAbout from "../TalentWok/TalentWokAbout";
import TalentWokServices from "../TalentWok/TalentWokServices";
import TalentWokWhyUs from "../TalentWok/TalentWokWhyUs";
import TalentWokProcess from "../TalentWok/TalentWokProcess";
import TalentWokModels from "../TalentWok/TalentWokModels";
import TalentWokContact from "../TalentWok/TalentWokContact";
import SEO from "../Components/SEO";
import { TALENTWOK_SEO } from "../data/Services/ServiceSEO";
import TalentWokServe from "../TalentWok/TalentWokServe";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function TalentWok() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,          // smoothness
      effects: true,        // enable parallax support
      normalizeScroll: true // prevents jumps
    });
  }, []);

  return (
    <>
      <SEO
        title={TALENTWOK_SEO.title}
        description={TALENTWOK_SEO.description}
      />

      <div ref={wrapperRef} id="smooth-wrapper" className="bg-black text-white overflow-hidden">
        <div ref={contentRef} id="smooth-content">



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
      </div>
    </>
  );
}
