"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: "accent" | "blue";
};

const LINK_DIST = 130;
const MOUSE_RADIUS = 160;
const MOUSE_PULL = 0.035;
const MAX_SPEED = 0.35;

// Ambient backdrop: two slow-drifting glows (CSS) plus a canvas particle
// network that drifts on its own and gently gathers toward the cursor,
// a nod to the graph/GNN work in the portfolio rather than generic decor.
// Falls back to a static frame for prefers-reduced-motion, and pauses
// entirely when the tab isn't visible.
export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    let rafId = 0;
    let colors = { accent: "#4ade80", blue: "#60a5fa" };

    function readColors() {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent").trim() || "#4ade80";
      colors = { accent, blue: "#60a5fa" };
    }

    function resize() {
      const el = canvas as HTMLCanvasElement;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = width * dpr;
      el.height = height * dpr;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.min(70, Math.floor((width * height) / 22000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.8,
        hue: Math.random() < 0.72 ? "accent" : "blue",
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS) {
          const pull = (1 - dist / MOUSE_RADIUS) * MOUSE_PULL;
          p.vx += dx * pull * 0.02;
          p.vy += dy * pull * 0.02;
        }

        const speed = Math.hypot(p.vx, p.vy);
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED;
          p.vy = (p.vy / speed) * MAX_SPEED;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.996;
        p.vy *= 0.996;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx!.strokeStyle = colors[a.hue];
            ctx!.globalAlpha = (1 - dist / LINK_DIST) * 0.22;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 1;
      for (const p of particles) {
        ctx!.fillStyle = colors[p.hue];
        ctx!.globalAlpha = 0.55;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function loop() {
      step();
      rafId = requestAnimationFrame(loop);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        rafId = requestAnimationFrame(loop);
      }
    }

    readColors();
    resize();
    step();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    const themeObserver = new MutationObserver(readColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    if (!reduceMotion) {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <div className="glow glow-a animate-drift1" />
      <div className="glow glow-b animate-drift2" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
