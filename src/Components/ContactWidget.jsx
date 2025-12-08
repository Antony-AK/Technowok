"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-[9999]
          bg-red-600 hover:bg-red-700
          w-16 h-16 rounded-full 
          flex items-center justify-center 
          shadow-[0_0_25px_rgba(255,0,0,0.6)]
          cursor-pointer
        "
      >
        <IoChatbubblesOutline size={30} />
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Popup Card */}
            <motion.div
              className="
                fixed bottom-20 right-10 z-[10001]
                w-[320px] p-6 rounded-2xl
                bg-[#111]/90 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_40px_rgba(255,0,0,0.35)]
              "
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 40 }}
              transition={{ type: "spring", stiffness: 140, damping: 14 }}
            >
              {/* Close Button */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <MdClose size={22} className="text-gray-300 hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-red-500 mb-2">
                Let's Connect 
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Have an idea? Need a quote?  
                We’re here to help you build something amazing.
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="
                  w-full block text-center py-3 mt-2
                  bg-green-600 hover:bg-green-700
                  rounded-xl font-semibold
                  shadow-[0_0_15px_rgba(0,255,0,0.4)]
                "
              >
                Chat on WhatsApp
              </a>

              {/* Secondary Button */}
              <motion.button
              onClick={()=> {navigate("/contact")
                setOpen(false)
              }}
                whileHover={{ scale: 1.05 }}
                className="
                  w-full py-3 mt-4
                  bg-red-600 hover:bg-red-700
                  rounded-xl font-semibold
                  shadow-[0_0_15px_rgba(255,0,0,0.4)]
                "
              >
                Send an Inquiry
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
