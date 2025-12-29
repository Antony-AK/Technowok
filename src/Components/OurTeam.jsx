"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import person1 from "../assets/ashwin6.png"
import person2 from "../assets/harini.png"
import person3 from "../assets/nizam3.jpg"
import person4 from "../assets/selvan2.jpg"
import person5 from "../assets/santhosh2.jpg"
import person6 from "../assets/antony4.png"
import person7 from "../assets/vidhya.png"
import person8 from "../assets/benz1.png"
import person9 from "../assets/samsika.png"
import person10 from "../assets/josephin2.png"




gsap.registerPlugin(ScrollTrigger);

export default function OurTeam() {
    const strips = useRef([]);

    const teamRows = [
        // Row 1 – 2 columns
        [
            { name: "Ashwin.N", role: "Founder & Chief Operating Officer", img: person1 },
            { name: "Rajesh.C", role: "Chief Technical Officer", img: "" },
        ],

        // Row 2 – 1 column
        [
            { name: "Vidhya.N", role: "HR – Head, Tecnowok Solution", img: person7 },
        ],

        // Row 3 – 2 columns
        [
            { name: "Santhosh", role: "Recruitment Head – TalentWok", img: person5, position: "center" },
            { name: "Harini", role: "Talent Acquisition Specialist", img: person2, position: "center" },
        ],

        // Row 4 – 3 columns
        [
            { name: "Mariappan", role: "Full Stack Developer", img: "" },
            { name: "Antony Kavin", role: "Full Stack Developer", img: person6 },
            { name: "Saravanan", role: "Full Stack Developer", img: "" },
        ],

        // Row 5 – 1 column
        [
            { name: "Nizamudeen", role: "Product Designer – Mobile & Web", img: person3 },
        ],

        // Row 6 – 2 columns
        [
            { name: "Samiksha Anand", role: "Content Strategy & Writer – Technical", img: person9 },
            { name: "Benoshah.B", role: "Content Strategy & Writer – Non-Technical", img: person8 },
        ],

        // Row 7 – 2 columns
        [
            { name: "Josephine.M", role: "Social Media Manager", img: person10, position: "center" },
            { name: "Selvan", role: "Content Creator", img: person4 },
        ],
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
            <div className="text-center mb-10">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Meet Our <span className="text-red-600">Team</span>
                </h1>
                <p className="text-gray-400 text-lg mt-3">
                    The creative minds building Tecnowok’s digital future.
                </p>
            </div>
            {/* TEAM STRIPS */}
            <div className="space-y-20">

                {teamRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`
        grid gap-10
        ${row.length === 1 ? "grid-cols-1 justify-items-center" : ""}
        ${row.length === 2 ? "grid-cols-1 md:grid-cols-2" : ""}
        ${row.length === 3 ? "grid-cols-1 md:grid-cols-3" : ""}
      `}
                    >
                        {row.map((person, index) => (
                            <div
                                key={index}
                                ref={(el) => (strips.current.push(el))}
                                className="team-strip-wrapper"
                            >
                                <div className="team-strip">
                                    <div className="team-strip-inner">
                                        {person.img ? (
                                            <img
                                                src={person.img}
                                                className={`team-img mx-auto ${person.position === "center" ? "object-[50%_23%] " : "object-top"
                                                    }`}
                                            />
                                        ) : (
                                            <div className="team-img flex items-center justify-center bg-neutral-900 text-gray-500">
                                                {person.name}
                                            </div>
                                        )}

                                        <div className="team-info ms-10">
                                            <h2 className="text-2xl text-red-600 font-bold">
                                                {person.name}
                                            </h2>
                                            <p className="text-white bg-black px-2 py-1 text-base font-medium">
                                                {person.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div>



        </section>
    );
}
