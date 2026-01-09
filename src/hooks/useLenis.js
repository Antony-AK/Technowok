// hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export default function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled || lenisInstance) return;

    lenisInstance = new Lenis({
      smooth: true,
      duration: 0.9,
      easing: (t) => t,
    });

    let rafId;
    function raf(time) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, [enabled]);
}
