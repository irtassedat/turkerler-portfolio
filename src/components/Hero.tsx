"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function EnergyGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
    }[] = [];

    const colors = ["#10b981", "#06b6d4", "#3b82f6", "#8b5cf6"];

    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let frame: number;
    let time = 0;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);
      time += 0.01;

      nodes.forEach((n, i) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        const alpha = 0.3 + Math.sin(time + n.pulse) * 0.2;

        // Node glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 4);
        grad.addColorStop(0, n.color + "60");
        grad.addColorStop(1, n.color + "00");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Lines
        nodes.slice(i + 1).forEach((n2) => {
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = n.color;
            ctx.globalAlpha = (1 - dist / 180) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    }

    draw();
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <EnergyGrid />

      {/* Ambient orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[200px]" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-primary font-medium tracking-wide">
            Turkerler Holding &mdash; Dijital Donusum Teklifi
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
        >
          <span className="text-foreground">526 MW Portfoyden</span>
          <br />
          <span className="text-gradient">3,953 MW&apos;a</span>
          <br />
          <span className="text-foreground/80 text-3xl sm:text-5xl lg:text-6xl">
            AI ile Yonetilen Enerji
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-foreground/50 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Jeotermal, ruzgar, hidroelektrik ve offshore santrallerden gelen uretim
          verilerini otonom AI ajanlarla analiz eden, makine duruslarini tahmin
          eden, VEDAS dagitim kayiplarini azaltan ve halka arz surecine veri
          destegi saglayan entegre platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#turkerler"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
          >
            <span className="flex items-center justify-center gap-2">
              Vizyonu Incele
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
          <a
            href="#demo"
            className="px-8 py-4 border border-border/50 bg-surface/30 backdrop-blur-sm text-foreground font-semibold rounded-xl hover:border-primary/30 transition-all hover:bg-surface/50"
          >
            Canli Demo
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-border/50 bg-surface/30 backdrop-blur-sm text-foreground font-semibold rounded-xl hover:border-accent/30 transition-all hover:bg-surface/50"
          >
            Projelerim
          </a>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: "526", unit: "MW", label: "Mevcut Kapasite" },
            { value: "3,953", unit: "MW", label: "Hedef Kapasite" },
            { value: "1,500", unit: "MW", label: "Offshore Ruzgar" },
            { value: "133", unit: "+", label: "Sirket Entegrasyonu" },
            { value: "24K", unit: "", label: "Calisan" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
              className="p-4 rounded-xl bg-surface/40 backdrop-blur-sm border border-border/30 text-center"
            >
              <div className="text-xl sm:text-2xl font-bold text-gradient">
                {s.value}
                <span className="text-sm text-foreground/40">{s.unit}</span>
              </div>
              <div className="text-[11px] text-foreground/40 mt-1 tracking-wide uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-foreground/15 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
