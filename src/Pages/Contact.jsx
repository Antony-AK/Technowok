"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import DottedGlobe from "../AnimationObjects/DottedGlobe";

export default function ContactPage() {
  const [start, setStart] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      access_key: "1c5dc080-22b8-4042-9fa1-33f742c79e68", 
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Sending failed ❌");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong ❌");
    }

    setLoading(false);
  };

  useEffect(() => {
    function handleDone() {
      setStart(true);
    }
    window.addEventListener("page-transition-complete", handleDone);

    const fallback = setTimeout(() => setStart(true), 200);

    return () => {
      window.removeEventListener("page-transition-complete", handleDone);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black text-white py-24 flex flex-col items-center justify-center">

      {start && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 w-full h-[25vh] bg-gradient-to-b from-white/10 to-transparent"
        />
      )}

      <div className="relative z-20 grid md:grid-cols-2 gap-12 max-w-6xl w-full mt-5">

        {/* LEFT — FORM */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={start ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(255,0,0,0.25)] relative overflow-hidden w-full max-w-[340px] sm:max-w-[420px] md:max-w-full mx-auto"
        >

          {/* TOP RED LINE ANIMATION */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={start ? { x: "100%" } : {}}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60"
          />

          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
            Let’s <span className="text-red-600">Talk</span>
          </h1>

          <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed text-center md:text-left">
            Drop us a message and our team will get back to you within hours.
          </p>

          <form className="space-y-7" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="peer w-full p-4 bg-black border border-white/20 rounded-xl focus:border-red-500 outline-none transition"
                required
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 transition-all peer-focus:text-sm peer-focus:top-0 peer-focus:text-red-500 peer-valid:text-sm peer-valid:top-0 bg-black px-1">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="peer w-full p-4 bg-black border border-white/20 rounded-xl focus:border-red-500 outline-none transition"
                required
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 transition-all peer-focus:text-sm peer-focus:top-0 peer-focus:text-red-500 peer-valid:text-sm peer-valid:top-0 bg-black px-1">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="peer w-full p-4 bg-black border border-white/20 rounded-xl focus:border-red-500 outline-none transition"
                required
              />
              <label className="absolute left-4 top-3 text-white/40 transition-all peer-focus:text-sm peer-focus:-top-2 peer-focus:text-red-500 peer-valid:text-sm peer-valid:-top-2 bg-black px-1">
                Your Message
              </label>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,0,0,0.7)" }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="px-10 py-4 bg-red-600 rounded-full font-semibold shadow-[0_0_20px_rgba(255,0,0,0.4)] w-full text-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT — GLOBE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={start ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center w-full max-w-[260px] sm:max-w-[420px] md:max-w-full mx-auto"
        >
          <DottedGlobe />
        </motion.div>
      </div>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={start ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full mt-20"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.919246153202!2d78.11086167477772!3d8.793657391258575"
          className="w-full h-[350px]"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.1px] pointer-events-none"></div>
      </motion.div>

    </section>
  );
}
