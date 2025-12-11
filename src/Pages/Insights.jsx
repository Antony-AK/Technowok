// Insights.jsx
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import insight1 from "../assets/ai.png"
import insight2 from "../assets/hosting.webp"
import insight3 from "../assets/techstack.png"
import insight4 from "../assets/transformation.webp"
import insight5 from "../assets/trends.jpg"


gsap.registerPlugin(ScrollTrigger);

export default function Insights() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const articleRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro
      gsap.from(heroRef.current.querySelectorAll(".hero-line"), {
        y: 40,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });

      // small highlight glow
      gsap.fromTo(
        heroRef.current.querySelector(".hero-glow"),
        { scale: 0.95, opacity: 0.25 },
        { scale: 1.15, opacity: 0.7, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut" }
      );

      // Cards stagger
      gsap.from(cardRefs.current, {
        y: 30,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 70%",
        },
      });

      // Articles - animate in when in view
      articleRefs.current.forEach((el, i) => {
        gsap.from(el.querySelector(".article-left, .article-right"), {
          x: i % 2 === 0 ? -40 : 40,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
        gsap.from(el.querySelectorAll(".kicker, .article-title, .article-excerpt, .article-cta"), {
          y: 20,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });

      // CTA pop-in
      gsap.from(ctaRef.current, {
        y: 20,
        opacity: 1,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // helper refs
  const setCardRef = (el, i) => (cardRefs.current[i] = el);
  const setArticleRef = (el, i) => (articleRefs.current[i] = el);

  return (
    <main ref={pageRef} className="w-full bg-black text-white min-h-screen">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-24"
        aria-labelledby="insights-hero-title"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          {/* Left text */}
          <div className="w-full md:w-7/12 z-10">
            <p className="uppercase text-sm text-red-500 font-medium mb-4"> Insights - TechnoWok</p>

            <h1 id="insights-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-line">
              Insights That Power the Future of Software & Digital Innovation
            </h1>

            <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-2xl ">
              Practical engineering knowledge, product thinking and real-world strategies - written by the engineers who build, ship, and scale.
              Designed for startups, CTOs, enterprises and builders in Tuticorin, Tamil Nadu, and beyond.
            </p>

            <div className="mt-8 flex gap-3 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold shadow-lg"
                aria-label="Talk to TechnoWok"
              >
                Talk to our Engineers
                <span className="opacity-80">→</span>
              </Link>

              <a
                href="#top-insights"
                className="text-gray-300 hover:text-white ml-2 underline"
              >
                Jump to top insights
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-400 max-w-xl">
              <strong>Top keywords:</strong> software development insights, digital transformation Tuticorin, web & mobile app development trends.
            </div>
          </div>

          {/* Right visual */}
          <div className="w-full md:w-5/12 relative">
            {/* decorative glow */}
            <div className="absolute -inset-6 rounded-xl hero-glow pointer-events-none glow-pulse" style={{
              background: "radial-gradient(circle at 10% 20%, rgba(255,80,80,0.12), transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,0,0,0.06), transparent 30%)",
            //   filter: "blur(16px)",
              zIndex: 0
            }} />

            {/* stacked tiles mockup */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#0d0d0f] border border-white/6 p-4 shadow-[0_10px_40px_rgba(255,0,0,0.06)] glow-title glow-pulse transform -translate-y-6 hover:-translate-y-3 transition">
                <h4 className="text-red-500 font-semibold">Product Strategy</h4>
                <p className="text-gray-300 text-sm mt-2">MVP vs scale decisions</p>
              </div>
              <div className="rounded-2xl bg-[#0d0d0f] border border-white/6 p-4 shadow-[0_10px_40px_rgba(255,0,0,0.06)] glow-title glow-pulse transform translate-y-6 hover:-translate-y-3 transition">
                <h4 className="text-red-500 font-semibold">Cloud & DevOps</h4>
                <p className="text-gray-300 text-sm mt-2">AWS & cost strategies</p>
              </div>

              <div className="rounded-2xl bg-[#0d0d0f] border border-white/6 p-4 shadow-[0_10px_40px_rgba(255,0,0,0.06)] glow-title glow-pulse transform translate-y-3 hover:-translate-y-3 transition">
                <h4 className="text-red-500 font-semibold">AI for Biz</h4>
                <p className="text-gray-300 text-sm mt-2">Practical use-cases</p>
              </div>
              <div className="rounded-2xl bg-[#0d0d0f] border border-white/6 p-4  glow-title glow-pulse transform -translate-y-3 hover:-translate-y-3 transition">
                <h4 className="text-red-500 font-semibold">Performance</h4>
                <p className="text-gray-300 text-sm mt-2">Reduce latency & cost</p>
              </div>
            </div>

            {/* subtle faux screen at bottom */}
            <div className="mt-6 text-xs text-gray-500">From hands-on projects we ship in Tuticorin & remote</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* WHY INSIGHTS MATTER */}
        <section className="mt-6 md:mt-10 mb-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Insights Matter in Modern Software Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Technology moves fast - but direction matters more than speed. Many projects fail from poor architecture, wrong stacks, or lack of scaling vision.
                TechnoWok Insights bridge business goals and engineering execution so you build with confidence.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-300">Right tech decisions reduce rework & cost</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-300">Clearer roadmaps speed product-market fit</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-300">Cloud-native & secure deployments prevent outages</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-300">AI & automation unlock operational efficiency</span>
                </li>
              </ul>
            </div>

            {/* Quick cards */}
            <div className="space-y-3">
              {[
                { title: "Business ↔ Engineering", body: "Actionable insights aligning tech to revenue." },
                { title: "Scalability First", body: "Design choices that grow with real users." },
                { title: "Production-Tested", body: "Advice from systems running in production." },
              ].map((c, i) => (
                <div key={i} ref={(el) => setCardRef(el, i)} className=" glow-box p-5 bg-[#0d0d0f] border border-white/6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-500">{c.title}</h4>
                  <p className="text-gray-300 mt-2">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES GRID */}
        <section id="top-insights" className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Core Insight Categories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Product & Startup", desc: "MVP, stacks, go-to-market for builders." },
              { title: "Web & Mobile", desc: "Performance, React patterns, mobile-first." },
              { title: "Cloud & DevOps", desc: "AWS, Hostinger, CI/CD & cost ops." },
              { title: "AI & Automation", desc: "Real use-cases vs hype." },
              { title: "Business + Tech", desc: "Roadmaps, vendor choices, audits." },
              { title: "Case Studies", desc: "What worked & what failed — learn fast." },
            ].map((cat, i) => (
              <article key={i} className="glow-box p-6 bg-[#0d0d0f] rounded-2xl border border-white/6 shadow-[0_10px_40px_rgba(255,0,0,0.04)]">
                <h4 className="text-xl font-semibold text-red-500">{cat.title}</h4>
                <p className="text-gray-300 mt-2">{cat.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FEATURED INSIGHTS (detailed) */}
        <section className="space-y-20 mb-24">
          {/* Insight 1 */}
          <article ref={(el) => setArticleRef(el, 0)} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="article-left">
              <div className="kicker text-sm text-red-500 font-semibold">Trend</div>
              <h4 className="article-title text-2xl md:text-3xl font-bold mt-2">Top Software Development Trends Businesses in Tuticorin Should Adopt in 2025</h4>
              <p className="article-excerpt text-gray-300 mt-4">
                From AI-driven automation to cloud-native stacks and mobile-first approaches, local businesses can unlock growth and productivity by adopting modern engineering patterns.
              </p>

              <ul className="mt-6 list-disc pl-5 text-gray-300 space-y-2">
                <li>Adopt cloud-managed services for uptime and scalability (AWS when growth demands it).</li>
                <li>Prefer modular React/MERN stacks for faster iteration.</li>
                <li>Use lightweight AI for customer automation (chat, analytics).</li>
              </ul>

              {/* <div className="article-cta mt-6">
                <Link to="/insights/2025-trends-tuticorin" className="text-red-500 hover:underline font-semibold">Read full insight →</Link>
              </div> */}
            </div>

            <div className="article-right">
              <div className="bg-[#0d0d0f] p-6 rounded-2xl border border-white/6 shadow-[0_20px_40px_rgba(255,0,0,0.06)]">
                <img alt="trends" src={insight5} className="w-full h-56 object-cover rounded-xl" />
              </div>
            </div>
          </article>

          {/* Insight 2 */}
          <article ref={(el) => setArticleRef(el, 1)} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="article-left order-2 md:order-1">
              <div className="kicker text-sm text-red-500 font-semibold">Transformation</div>
              <h4 className="article-title text-2xl md:text-3xl font-bold mt-2">Why Tuticorin Businesses Must Prioritize Digital Transformation Now</h4>
              <p className="article-excerpt text-gray-300 mt-4">
                Manual processes and legacy tools cost time and revenue. Digital transformation brings automation, visibility, and measurable ROI.
              </p>
              <ul className="mt-6 list-disc pl-5 text-gray-300 space-y-2">
                <li>Start with process mapping - automate the highest-volume pain points first.</li>
                <li>Use cloud-hosted modules for CRM, billing, inventory.</li>
                <li>Measure KPIs (LTV, CAC) to validate changes.</li>
              </ul>

              {/* <div className="article-cta mt-6">
                <Link to="/insights/digital-transformation-tuticorin" className="text-red-500 hover:underline font-semibold">Read full insight →</Link>
              </div> */}
            </div>

            <div className="article-right order-1 md:order-2">
              <div className="bg-[#0d0d0f] p-6 rounded-2xl border border-white/6 shadow-[0_20px_40px_rgba(255,0,0,0.06)]">
                <img alt="transformation" src={insight4} className="w-full h-56 object-cover rounded-xl" />
              </div>
            </div>
          </article>

          {/* Insight 3 */}
          <article ref={(el) => setArticleRef(el, 2)} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="article-left">
              <div className="kicker text-sm text-red-500 font-semibold">Startup</div>
              <h4 className="article-title text-2xl md:text-3xl font-bold mt-2">How Startups Can Choose the Right Tech Stack (Tamil Nadu Edition)</h4>
              <p className="article-excerpt text-gray-300 mt-4">
                Make pragmatic choices for speed and cost. Choose Node/React for web speed, Python for AI heavy workloads, and serverless for unpredictable scale.
              </p>
              <ul className="mt-6 list-disc pl-5 text-gray-300 space-y-2">
                <li>MVP first — ship, learn, then scale.</li>
                <li>Use managed DBs and CI/CD to reduce ops overhead.</li>
                <li>Instrument everything - logs, metrics, tracing.</li>
              </ul>

              {/* <div className="article-cta mt-6">
                <Link to="/insights/startup-tech-stack" className="text-red-500 hover:underline font-semibold">Read full insight →</Link>
              </div> */}
            </div>

            <div className="article-right">
              <div className="bg-[#0d0d0f] p-6 rounded-2xl border border-white/6 shadow-[0_20px_40px_rgba(255,0,0,0.06)]">
                <img alt="startup" src={insight3} className="w-full h-56 object-cover rounded-xl" />
              </div>
            </div>
          </article>

          {/* Insight 4 */}
          <article ref={(el) => setArticleRef(el, 3)} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="article-left order-2 md:order-1">
              <div className="kicker text-sm text-red-500 font-semibold">Hosting</div>
              <h4 className="article-title text-2xl md:text-3xl font-bold mt-2">Best Hosting Options for Businesses in Tuticorin - AWS vs Hostinger</h4>
              <p className="article-excerpt text-gray-300 mt-4">
                Choosing hosting depends on traffic, compliance, and budget. AWS is powerful for growth; Hostinger works for small websites and prototypes.
              </p>
              <ul className="mt-6 list-disc pl-5 text-gray-300 space-y-2">
                <li>AWS for scale, security, and fine-grained control.</li>
                <li>Hostinger or shared hosting for low-cost marketing sites.</li>
                <li>Use CDNs, backups, and monitoring for production safety.</li>
              </ul>

              {/* <div className="article-cta mt-6">
                <Link to="/insights/aws-vs-hostinger" className="text-red-500 hover:underline font-semibold">Read full insight →</Link>
              </div> */}
            </div>

            <div className="article-right order-1 md:order-2">
              <div className="bg-[#0d0d0f] p-6 rounded-2xl border border-white/6 shadow-[0_20px_40px_rgba(255,0,0,0.06)]">
                <img alt="hosting" src={insight2} className="w-full h-56 object-cover rounded-xl" />
              </div>
            </div>
          </article>

          {/* Insight 5 */}
          <article ref={(el) => setArticleRef(el, 4)} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="article-left">
              <div className="kicker text-sm text-red-500 font-semibold">AI</div>
              <h4 className="article-title text-2xl md:text-3xl font-bold mt-2">Why AI Adoption Is Becoming Essential for Small Businesses in Tuticorin</h4>
              <p className="article-excerpt text-gray-300 mt-4">
                AI isn't only for big enterprises. Local businesses can use AI to automate hiring, improve marketing, and analyze operations faster.
              </p>
              <ul className="mt-6 list-disc pl-5 text-gray-300 space-y-2">
                <li>Start small: chatbots, analytics & lead scoring.</li>
                <li>Protect data privacy and focus on ROI.</li>
                <li>Combine human oversight with automated decisioning.</li>
              </ul>

              {/* <div className="article-cta mt-6">
                <Link to="/insights/ai-for-local-business" className="text-red-500 hover:underline font-semibold">Read full insight →</Link>
              </div> */}
            </div>

            <div className="article-right">
              <div className="bg-[#0d0d0f] p-6 rounded-2xl border border-white/6 shadow-[0_20px_40px_rgba(255,0,0,0.06)]">
                <img alt="ai" src={insight1} className="w-full h-56 object-cover rounded-xl" />
              </div>
            </div>
          </article>
        </section>

        {/* WHO WE SERVE (bulleted list) */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-4">Who We Serve</h3>
          <p className="text-gray-300 mb-6">We empower businesses across sectors - from local startups in Tuticorin to enterprises across India and abroad.</p>

          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span><strong className="text-white">Entrepreneurs & Startups</strong> needing strong foundations, fast execution & visibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span><strong className="text-white">SMBs</strong> looking to automate operations & scale efficiently</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span><strong className="text-white">Enterprises</strong> requiring robust IT systems & cloud-native transformation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span><strong className="text-white">D2C & E-Commerce Brands</strong> needing flawless stores, marketing & creative content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span><strong className="text-white">Service-based Companies</strong> wanting consistent branding & customer engagement</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="mb-32">
          <div className="bg-gradient-to-r from-[#1b0303] to-black border border-white/6 rounded-2xl p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold">Build Smarter. Scale Faster. Think Better.</h3>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">If you're planning a new product, migrating to cloud, or want to apply AI in your business - let's map a clear technical plan that delivers measurable outcomes.</p>

            <div className="mt-8 flex justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 font-semibold shadow">Get a Free Tech Audit</Link>
              {/* <Link to="/case-studies" className="px-8 py-3 rounded-full border border-white/10 text-gray-300 hover:text-white">See Case Studies</Link> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
