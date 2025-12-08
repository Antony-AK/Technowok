import React from "react";
import { motion } from "framer-motion";

import per1 from "../assets/review1.jpg";
import per2 from "../assets/review2.jpg";
import per3 from "../assets/review3.jpg";
import per4 from "../assets/review4.jpg";
import per5 from "../assets/review5.jpg";
import per6 from "../assets/review6.jpg";

const testimonials = [
    { type: "vertical", img: per1, text: "After being scammed by a web design company I was recommended Tecnowok", name: "Stephen Rogers" },
    { type: "horizontal", img: per2, text: "After being scammed by a web design company I was recommended Tecnowok", name: "Stephen Rogers" },
    { type: "vertical", img: per3, text: "After being scammed by a web design company I was recommended Tecnowok", name: "Stephen Rogers" },
    { type: "horizontal", img: per4, text: "After being scammed by a web design company I was recommended Tecnowok", name: "Stephen Rogers" },
    { type: "vertical", img: per5, text: "After being scammed by a web design company I was recommended Tecnowok", name: "Stephen Rogers" },
    { type: "horizontal", img: per6, text: "After being scammed by a web design company I was recommended Tecnowok", name: "Stephen Rogers" },
];

const CardVertical = ({ img, text, name }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        whileHover={{ y: -10, scale: 1.03 }}
        className="
            w-[180px] h-[260px]         /* mobile */
            md:w-[240px] md:h-[330px]   /* desktop */
            bg-black rounded-3xl overflow-hidden shadow-xl cursor-pointer
        "
    >
        <img src={img} className="w-full h-[55%] md:h-[60%] object-cover" />
        <div className="bg-red-600 h-[45%] md:h-[40%] p-3 md:p-4 text-white text-xs md:text-sm flex flex-col justify-between">
            <p>{text}</p>
            <span className="text-[11px] md:text-[13px] opacity-80">– {name}</span>
        </div>
    </motion.div>
);

const CardHorizontal = ({ img, text, name }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        whileHover={{ y: -10, scale: 1.03 }}
        className="
            w-[280px] h-[150px]         /* mobile */
            md:w-[360px] md:h-[180px]   /* desktop */
            bg-black rounded-3xl overflow-hidden shadow-xl flex cursor-pointer
        "
    >
        <img src={img} className="w-[45%] h-full object-cover" />
        <div className="bg-red-600 w-[55%] p-3 md:p-4 text-white text-xs md:text-sm flex flex-col justify-between">
            <p>{text}</p>
            <span className="text-[11px] md:text-[13px] opacity-80">– {name}</span>
        </div>
    </motion.div>
);


export default function Testimonials() {
    return (
        <div className="w-full bg-black py-24 relative flex justify-center">
            <div className="relative w-full max-w-7xl">

                {/* ⭐ TITLE (Visible on both desktop & mobile) */}
                <div className="md:hidden text-center mb-12 md:mb-0">
                    <p className="text-red-500 text-sm">Trusted By</p>
                    <h2 className="text-white text-4xl font-semibold">Thought Leaders</h2>
                </div>

                   <div className="hidden md:block absolute top-66 left-[38%] text-center  z-10">
                    <p className="text-red-500 text-sm">Trusted By</p>
                    <h2 className="text-white text-4xl font-semibold">Thought Leaders</h2>
                </div>

                {/* ⭐ DESKTOP / LAPTOP VERSION (unchanged) */}
                <div className="hidden md:block">
                    {/* TOP ROW */}
                    <div className="relative h-[360px] mb-18">
                        <div className="absolute left-20 top-10">
                            <CardVertical {...testimonials[0]} />
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 top-0">
                            <CardHorizontal {...testimonials[1]} />
                        </div>

                        <div className="absolute right-20 top-10">
                            <CardVertical {...testimonials[2]} />
                        </div>
                    </div>

                    {/* BOTTOM ROW */}
                    <div className="relative h-[360px]">
                        <div className="absolute left-0 top-10">
                            <CardHorizontal {...testimonials[3]} />
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 top-0">
                            <CardVertical {...testimonials[4]} />
                        </div>

                        <div className="absolute right-0 top-10">
                            <CardHorizontal {...testimonials[5]} />
                        </div>
                    </div>
                </div>

                {/* ⭐ MOBILE VERSION (Brand-new clean stacked layout) */}
                <div className="flex flex-col items-center gap-10 md:hidden mt-10">
                    {testimonials.map((item, i) =>
                        item.type === "vertical" ? (
                            <CardVertical key={i} {...item} />
                        ) : (
                            <CardHorizontal key={i} {...item} />
                        )
                    )}
                </div>

            </div>
        </div>
    );
}
