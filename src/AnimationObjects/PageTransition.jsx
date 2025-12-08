import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ trigger }) {
    const overlayRef = useRef(null);
    const shutterRef = useRef(null);

    useEffect(() => {
        if (!trigger) return;

        const overlay = overlayRef.current;
        const shutter = shutterRef.current;

        // RESET
        gsap.set(overlay, { display: "block", opacity: 1 });
        gsap.set(shutter, { height: "0vh", opacity: 1, filter: "blur(0px)" });

        // Timeline for PERFECT FLOW
        const tl = gsap.timeline();

        // 1️⃣ SUPER SMOOTH GROW (bottom → top)
        tl.to(shutter, {
            height: "100vh",
            duration: 1.15,               // longer = more premium
            ease: "expo.inOut",           // the smoothest GSAP easing
        });

        // NAVIGATE ONLY AT FULL COVER
        tl.add(() => {
            if (trigger.onMid) trigger.onMid();
        }, "-=0.6");

        // 2️⃣ FADE + SOFT BLUR (NO REVERSE MOTION)
        tl.to(shutter, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.out",
        });

        tl.add(() => {
            if (trigger.afterNav) trigger.afterNav();
        });



        // 3️⃣ CLEANUP
        tl.add(() => {
            window.dispatchEvent(new Event("page-transition-complete"));
            gsap.set(overlay, { display: "none" });
        });

    }, [trigger]);

    return (
        <div
            ref={overlayRef}
            style={{ display: "none" }}
            className="fixed inset-0 z-[999999] pointer-events-none"
        >
            <div
                ref={shutterRef}
                className="absolute bottom-0 left-0 w-full will-change-transform will-change-opacity"
                style={{
                    height: "0vh",
                    background: "linear-gradient(180deg, #5b0000 0%, #2d0000 60%, #000 100%)"
                }}
            />
        </div>
    );
}
