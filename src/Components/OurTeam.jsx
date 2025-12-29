"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import person1 from "../assets/ashwin4.png"
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

    const team = [
        {
            name: "Ashwin.N",
            role: " Founder & Chief Operating Officer",
            img: person1,
        },
        {
            name: "Vidhya.N",
            role: "HR - Head Tecnowok Solution",
            img: person7,
        },
        {
            name: "Benshah.B",
            role: "Content Strategy & Writer  - Non Technical",
            img: person8,
        },
        {
            name: "Harini",
            role: "Talent acquisition specialist",
            img: person2,
        }, {
            name: "Santhosh",
            role: "Recruitment Head - Talentwok",
            img: person5,
        }, {
            name: "Antony Kavin",
            role: "Full Stack Developer",
            img: person6,
        },
        {
            name: "Nizamudeen",
            role: "Product Designer - Mobile & Web",
            img: person3,
        },
        {
            name: "Selvan",
            role: "Content Creator",
            img: person4,
        },
         {
            name: "Samiksha Anand ",
            role: "Content Strategy & Writer - Technical",
            img: person9,
        },
         {
            name: "Josephine.M ",
            role: "Social Media Manager",
            img: person10,
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
            <div className="text-center mb-20">
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
                                <img src={person.img} className="team-img object-top" />
                                <div className="team-info ">
                                    <h2 className="text-2xl text-red-600 font-bold">{person.name}</h2>
                                    <p className="text-white bg-black p-0.5 text-base  font-medium">{person.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}
