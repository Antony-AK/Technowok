import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroCinematic from "../Landing/Hero";
import About from "../Landing/About";
import OurServices from "../Landing/OurServices";
import WhyChooseUs from "../Landing/WhyChooseUs";
import ImpactSection from "../Landing/ImpactSection";
import Testimonials from "../Landing/Testimonials";
import FAQSection from "../Landing/FAQSection";
import HorizontalScroll from "../Landing/HorizontalScroll";
import PartnersCarousel from "../Components/PartnersCarousel";
import ModernStack from "../Landing/ModernStack";
import SEO from "../Components/SEO";
import DelayedFlipOffer from "../Components/FlashOfferCard";

gsap.registerPlugin(ScrollTrigger);   // ✅ REQUIRED FIX

const Home = ({ revealDone, setTransitionTrigger }) => {
  const [freezeParticles, setFreezeParticles] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#horizontal-scroll-section",  // make sure this exists
      start: "top center",
      onEnter: () => setFreezeParticles(true),
      onLeaveBack: () => setFreezeParticles(false),
    });
  }, []);

  return (
    <div>
      <SEO
        title="IT & Digital Solutions Company in Tuticorin, Chennai & Bangalore | Tecnowok Solution"
        description="Tecnowok Solution is a leading IT, software development & digital marketing company in Tuticorin, Chennai & Bangalore, delivering scalable apps, websites, automation, ecommerce & branding solutions."
      />

      <HeroCinematic revealDone={revealDone} freeze={freezeParticles} setTransitionTrigger={setTransitionTrigger} />
      <DelayedFlipOffer />
      <PartnersCarousel />
      <About />
      <OurServices />
      <WhyChooseUs />
      <ModernStack />
      <HorizontalScroll />
      <ImpactSection />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default Home;
