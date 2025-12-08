import React, { useEffect, useRef } from "react";

export default function DottedGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    let dots = [];
    const R = 110;

    for (let i = 0; i < 350; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      dots.push({
        x: R * Math.sin(phi) * Math.cos(theta),
        y: R * Math.sin(phi) * Math.sin(theta),
        z: R * Math.cos(phi),
      });
    }

    function animate(t = 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const angle = t * 0.0004;

      dots.forEach(d => {
        const x = d.x * Math.cos(angle) - d.z * Math.sin(angle);
        const z = d.x * Math.sin(angle) + d.z * Math.cos(angle);

        const scale = 300 / (300 + z);
        const xp = x * scale + canvas.width / 2;
        const yp = d.y * scale + canvas.height / 2;

        ctx.beginPath();
        ctx.arc(xp, yp, 2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${0.6 + scale / 2})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="opacity-90 drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]"
      style={{ width: "500px", height: "500px" }}
    />
  );
}
