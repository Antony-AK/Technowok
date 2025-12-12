import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"


const FAQ_DATA = [
  {
    q: "Why should I choose Tecnowok Solution?",
    a: "Tecnowok Solution is a leading software and IT service provider in India, trusted by over 50+ businesses for affordable, customized, and high-performance solutions."
  },
  {
    q: "Do you provide custom software solutions?",
    a: "Yes, we develop fully custom software solutions tailored to your business needs."
  },
  {
    q: "How much does it cost to develop a software solution?",
    a: "Cost depends on project size, features, and technology. Contact us for a precise quote."
  },
  {
    q: "How many clients have you worked with?",
    a: "We have delivered projects to 50+ satisfied clients worldwide."
  },
  {
    q: "Why should I choose Tecnowok Solution?",
    a: "Because we deliver scalable, secure, and affordable tech solutions with expert guidance."
  }
];

// ⭐ Smooth fade-up (AOS-style)
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay }
  }
});

export default function FAQSection() {
  const [open, setOpen] = useState(null);
    const navigate = useNavigate();
  

  return (
    <section className="w-full bg-black text-white py-24 px-10 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT TEXT SIDE */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-red-500 text-xl font-semibold">FAQ</p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4 leading-snug">
            What would you like to know <br /> about Tecnowok?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Still have Questions? contact us today!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
             onClick={() => navigate("/contact")}
            className="mt-6 bg-red-600 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-red-700 transition"
          >
            Talk to us
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE — CARDS */}
        <div className="space-y-5">
          {FAQ_DATA.map((item, i) => {
            const isOpen = i === open;

            return (
              <motion.div
                key={i}
                layout
                variants={fadeUp(i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-red-600 p-6 rounded-xl shadow-md cursor-pointer"
                transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                onClick={() => setOpen(isOpen ? null : i)}
                style={{ willChange: "transform, opacity" }}
              >
                {/* QUESTION HEADER */}
                <motion.div
                  layout="position"
                  className="flex justify-between items-center"
                >
                  <p className="text-base md:text-lg font-semibold">{item.q}</p>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl"
                  >
                    ⏷
                  </motion.span>
                </motion.div>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-white/90 leading-relaxed text-sm md:text-base"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
