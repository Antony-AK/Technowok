import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";
import hamburgerIcon from "../assets/hamburgermenu.png";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ setTransitionTrigger }) {
  const navRef = useRef(null);
  const megaRef = useRef(null);
  const digitalRef = useRef(null);

  const [showServices, setShowServices] = useState(false);
  const [showDigital, setShowDigital] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDigitalOpen, setMobileDigitalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("Mobile App Development");

  const navigate = useNavigate();
  const location = useLocation();

  const MENU = [
    "What we've built",
    "Services",
    "Digital",
    "Insights",
    "TalentWok",
    "Contact us",
  ];

  const SERVICE_MENU = {
    categories: [
      "Website Development",
      "Mobile App Development",
      "Software Development",
      "Support & Maintenance & Outsourcing",
    ],

    subServices: {
      "Mobile App Development": [
        { title: "Android Mobile Application", desc: "High-performance Android apps with modern UI/UX." },
        { title: "iOS Mobile Application", desc: "Premium iOS apps built for performance & quality." },
        { title: "Ionic Mobile Application", desc: "Cross-platform apps using Ionic framework." },
        { title: "Native Mobile Application", desc: "Lightning-fast native apps with clean code." },
        { title: "Hybrid Mobile Application", desc: "Efficient multi-platform hybrid apps." },
        { title: "Windows Application", desc: "Secure, scalable Windows mobile/desktop apps." },
      ],

      "Website Development": [
        { title: "CMS Website Development", desc: "Flexible, scalable CMS-powered websites." },
        { title: "Website Design", desc: "Modern, conversion-focused responsive web design." },
        { title: "Dynamic Website Design", desc: "Interactive websites with real-time features." },
        { title: "Ecommerce Website Development", desc: "High-performance ecommerce storefronts." },
        { title: "Custom Applications Development", desc: "Tailored business web applications." },
        { title: "WordPress Website Design", desc: "Custom WordPress sites optimized for SEO." },
      ],

      "Software Development": [
        { title: "Hospital Management Software", desc: "End-to-end hospital operations system." },
        { title: "Paying Guest Management Software", desc: "Complete PG tracking & billing software." },
        { title: "School Management System", desc: "ERP for attendance, fees, academics, exams." },
        { title: "Web Hosting Solutions", desc: "Fast, secure hosting optimised for business." },
      ],

      "Support & Maintenance & Outsourcing": [
        {
          title: "Support & Maintenance",
          desc: "24/7 monitoring, security updates, bug fixes & optimization."
        },
        {
          title: "IT Outsourcing Services",
          desc: "Remote developers, dedicated teams, cost-effective scaling."
        }
      ],
    },
  };

  const DIGITAL_MENU = [
    { title: "Branding & Identity", desc: "Build a powerful, memorable brand identity." },
    { title: "Graphic Design", desc: "High-quality visuals & design assets." },
    { title: "Social Media Marketing", desc: "Grow audiences with content & campaigns." },
    { title: "Content Marketing", desc: "SEO-focused content for conversions." },
    { title: "Search Engine Optimization (SEO)", desc: "Rank higher with on-page & off-page SEO." },
    { title: "Search Engine Copywriting", desc: "Conversion-focused SEO copywriting." },
  ];

  const makeSlug = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");


  /* ⭐ DESKTOP ANIMATIONS */
  useEffect(() => {
    if (!megaRef.current) return;
    gsap.to(megaRef.current, {
      opacity: showServices ? 1 : 0,
      y: showServices ? 0 : 20,
      duration: 0.3,
      pointerEvents: showServices ? "auto" : "none",
    });
  }, [showServices]);

  useEffect(() => {
    if (!digitalRef.current) return;
    gsap.to(digitalRef.current, {
      opacity: showDigital ? 1 : 0,
      y: showDigital ? 0 : 20,
      duration: 0.3,
      pointerEvents: showDigital ? "auto" : "none",
    });
  }, [showDigital]);


  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        ref={navRef}
        className="w-full fixed top-0 z-[999] bg-black/40 border-b border-white/10 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          {/* LOGO */}
          <div
            className="w-20 h-20 flex items-center cursor-pointer"
            onClick={() => {
              setShowServices(false);
              setShowDigital(false);
              setTransitionTrigger({ onMid: () => navigate("/") });
            }}
          >
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>

          {/* ========= DESKTOP MENU ========= */}
          <div
            className="relative hidden md:flex w-[1000px] justify-center"
            onMouseLeave={() => {
              setShowServices(false);
              setShowDigital(false);
            }}
          >
            <nav className="ms-5">
              <ul className="flex gap-10">
                {MENU.map((item, i) => (
                  <li key={i} className="group relative">

                    <span
                      className="text-white text-[16px] font-medium hover:text-red-500 cursor-pointer transition"
                      onMouseEnter={() => {
                        if (item === "Services") {
                          setShowServices(true);
                          setShowDigital(false);
                        } else if (item === "Digital") {
                          setShowDigital(true);
                          setShowServices(false);
                        } else {
                          setShowServices(false);
                          setShowDigital(false);
                        }
                      }}
                      onClick={() => {
                        if (item === "What we've built") {
                          setTransitionTrigger({ onMid: () => navigate("/whatwebuild") });
                        }
                        if (item === "TalentWok") {
                          setTransitionTrigger({ onMid: () => navigate("/talentwok") });
                        }
                        if (item === "Contact us") {
                          setTransitionTrigger({ onMid: () => navigate("/contact") });
                        }
                      }}
                    >
                      {item}
                    </span>

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>

                  </li>
                ))}
              </ul>
            </nav>

            {/* SERVICES MEGA MENU */}
            <div
              ref={megaRef}
              className="absolute left-0 top-full w-full max-w-7xl bg-[#111] shadow-2xl border border-white/10 rounded-2xl py-10 px-10 text-white z-[9999] opacity-0 pointer-events-none transition"
            >
              <div className="flex gap-12">

                {/* LEFT CATEGORIES */}
                <div className="w-[28%] space-y-4">
                  {SERVICE_MENU.categories.map((cat, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setSelectedCategory(cat)}
                      className={`px-3 py-2 rounded-md cursor-pointer transition 
                        ${selectedCategory === cat ? "bg-red-600 text-white" : "text-gray-300 hover:text-white"}`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="w-[1px] bg-white/10"></div>

                {/* RIGHT GRID */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-[80%]">

                  {(SERVICE_MENU.subServices[selectedCategory] || []).map((service, i) => {
                    const slug = makeSlug(service.title);

                    return (
                      <div
                        key={i}
                        onClick={() => {
                          setShowServices(false);
                          localStorage.setItem("selectedService", slug);
                          setTransitionTrigger({
                            onMid: () => navigate(`/services/${slug}`),
                          });
                        }}
                        className="group block p-4 rounded-lg cursor-pointer hover:bg-red-600 transition"
                      >
                        <h4 className="text-lg font-semibold group-hover:text-white">
                          {service.title}
                        </h4>

                        <p className="text-gray-400 text-sm mt-1 group-hover:text-white">
                          {service.desc}
                        </p>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>

            {/* DIGITAL MENU */}
            <div
              ref={digitalRef}
              className="absolute left-0 top-full w-full max-w-4xl bg-[#111] shadow-2xl border border-white/10 rounded-2xl py-10 px-10 text-white z-[9999] opacity-0 pointer-events-none"
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-3">

                {DIGITAL_MENU.map((item, i) => {
                  const slug = makeSlug(item.title);
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setShowDigital(false);
                        setTransitionTrigger({
                          onMid: () => navigate(`/digital/${slug}`),
                        });
                      }}
                      className="group cursor-pointer p-5 rounded-xl hover:bg-red-600 transition"
                    >
                      <h4 className="text-lg font-semibold group-hover:text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-2 group-hover:text-white">{item.desc}</p>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>

          {/* ========= RIGHT ICONS + HAMBURGER ========= */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <img src={hamburgerIcon} alt="menu" className="w-7" />
            </button>

          </div>

        </div>
      </header>


      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full bg-black text-white p-6  z-[99999] md:hidden h-screen overflow-y-auto"
          >

            {/* CLOSE BUTTON */}
            <motion.button
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative left-[90%] text-white text-3xl font-light 
             w-10 h-10 flex items-center justify-center 
             rounded-full bg-white/10 backdrop-blur-sm 
             hover:bg-red-600 hover:text-white transition-all mb-10"
            >
              ✕
            </motion.button>

            {/* MAIN MOBILE LINKS */}
            {MENU.map((item, i) => (
              <div key={i} className="py-4 border-b  border-white/10">

                {/* Normal links */}
                {item !== "Services" && item !== "Digital" && (
                  <p
                    className="text-lg font-medium cursor-pointer"
                    onClick={() => {
                      setMobileMenuOpen(false);

                      if (item === "What we've built") {
                        setTransitionTrigger({ onMid: () => navigate("/whatwebuild") });
                      }
                      if (item === "TalentWok") {
                        setTransitionTrigger({ onMid: () => navigate("/talentwok") });
                      }
                      if (item === "Contact us") {
                        setTransitionTrigger({ onMid: () => navigate("/contact") });
                      }
                    }}
                  >
                    {item}
                  </p>
                )}

                {/* SERVICES ACCORDION */}
                {item === "Services" && (
                  <>
                    <p
                      className="text-lg font-medium cursor-pointer flex justify-between"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      Services <span>{mobileServicesOpen ? "−" : "+"}</span>
                    </p>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 mt-3 space-y-3"
                        >
                          {SERVICE_MENU.categories.map((cat, idx) => (
                            <div key={idx}>
                              <p className="font-semibold text-red-400">{cat}</p>

                              {(SERVICE_MENU.subServices[cat] || []).map((s, j) => {
                                const slug = makeSlug(s.title);

                                return (
                                  <p
                                    key={j}
                                    className="text-gray-300 py-1 cursor-pointer"
                                    onClick={() => {
                                      localStorage.setItem("selectedService", slug);
                                      setMobileMenuOpen(false);
                                      setTransitionTrigger({
                                        onMid: () => navigate(`/services/${slug}`),
                                      });
                                    }}
                                  >
                                    • {s.title}
                                  </p>
                                );
                              })}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}

                {/* DIGITAL ACCORDION */}
                {item === "Digital" && (
                  <>
                    <p
                      className="text-lg font-medium cursor-pointer flex justify-between"
                      onClick={() => setMobileDigitalOpen(!mobileDigitalOpen)}
                    >
                      Digital <span>{mobileDigitalOpen ? "−" : "+"}</span>
                    </p>

                    <AnimatePresence>
                      {mobileDigitalOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 mt-3 space-y-3"
                        >
                          {DIGITAL_MENU.map((d, idx) => {
                            const slug = makeSlug(d.title);
                            return (
                              <p
                                key={idx}
                                className="text-gray-300 cursor-pointer"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setTransitionTrigger({
                                    onMid: () => navigate(`/digital/${slug}`),
                                  });
                                }}
                              >
                                • {d.title}
                              </p>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}

              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
