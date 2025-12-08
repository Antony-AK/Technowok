import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ArrivalReveal from "./AnimationObjects/ArrivalReveal";
import Footer from "./Components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import ServicePage from "./Pages/ServicePage";
import PageTransition from "./AnimationObjects/PageTransition";
import ContactPage from "./Pages/Contact.jsx";
import DigitalPage from "./Pages/DigitalPage";
import WhatWeBuild from "./Pages/WhatWeBuild";
import CaseStudy from "./Components/CaseStudy";
import ExternalProjects from "./Components/Externalprojects";
import ScrollToTop from "./Components/ScrollToTop";
import TalentWok from "./Pages/TelentWok";
import ContactWidget from "./Components/ContactWidget";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";



  const [revealDone, setRevealDone] = useState(false);
  const [transitionTrigger, setTransitionTrigger] = useState(null);



  useEffect(() => {
    if (!isHomePage) {
      // instantly show content for NON-home pages
      setRevealDone(true);
      return;
    }

    function handleIntroDone() {
      setTimeout(() => {
        setRevealDone(true);
      }, 100);
    }

    window.addEventListener("intro-complete", handleIntroDone);
    return () => window.removeEventListener("intro-complete", handleIntroDone);
  }, [isHomePage]);

  return (
    <div className="bg-black w-full overflow-x-hidden  relative">

      {/* Show intro only for home */}
      {isHomePage && !revealDone && (
        <ArrivalReveal onDone={() => setRevealDone(true)} />
      )}

      <PageTransition trigger={transitionTrigger} />

      {revealDone && (
        <>
          <Navbar setTransitionTrigger={setTransitionTrigger} />

          <ScrollToTop />
          <ContactWidget />

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home revealDone={revealDone} setTransitionTrigger={setTransitionTrigger} />} />

            <Route
              path="/services/:serviceSlug"
              element={<ServicePage />}
            />

            <Route
              path="/digital/:digitalSlug"
              element={<DigitalPage />}
            />

            <Route path="/whatwebuild" element={<WhatWeBuild />} />
            <Route path="/whatwebuild/casestudy/:projectId" element={<CaseStudy />} />
            <Route path="/whatwebuild/externalprojects" element={<ExternalProjects />} />

            <Route path="/talentwok" element={<TalentWok />} />

            <Route path="/contact" element={<ContactPage />} />


          </Routes>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
