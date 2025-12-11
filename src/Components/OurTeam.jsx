"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import person1 from "../assets/review1.jpg"
import person2 from "../assets/review2.jpg"
import person3 from "../assets/review3.jpg"
import person4 from "../assets/review4.jpg"



gsap.registerPlugin(ScrollTrigger);

export default function OurTeam() {
    const strips = useRef([]);

    const team = [
        {
            name: "JUN SEKYNO",
            role: "Architect & Creative Director",
            img: person1,
        },
        {
            name: "NONTWAT CH.",
            role: "Design Expert",
            img: person2,
        },
        {
            name: "JERAVEJ H.",
            role: "Creative Engineer",
            img: person3,
        },
    ];

    useEffect(() => {
        strips.current.forEach((strip, i) => {
            gsap.from(strip, {
                opacity: 1,
                y: 80,
                duration: 1,
                delay: i * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: strip,
                    start: "top 85%",
                },

            });
        });
    }, []);

    return (
        <section className="min-h-screen bg-black text-white py-32 px-6 md:px-20 space-y-24">

            {/* HERO TITLE */}
            <div className="text-center mt-10 mb-20">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Meet Our <span className="text-red-600">Team</span>
                </h1>
                <p className="text-gray-400 text-lg mt-3">
                    The creative minds building Tecnowok’s digital future.
                </p>
            </div>

            {/* TEAM STRIPS */}
            <div className="team-grid">
                {team.map((person, index) => (
                    <div key={index} className="team-strip-wrapper  border">
                        <div className="team-strip">
                            <div className="team-strip-inner">
                                <img src={person.img} className="team-img" />
                                <div className="team-info">
                                    <h2 className="text-2xl font-bold">{person.name}</h2>
                                    <p className="text-red-400 text-sm">{person.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}
