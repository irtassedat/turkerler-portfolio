"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const nodes: { x: number; y: number; vx: number; vy: number; r: number; c: string; p: number }[] = [];
    const colors = ["#10b981", "#06b6d4", "#3b82f6"];

    for (let i = 0; i < 45; i++) {
      nodes.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.5, c: colors[Math.floor(Math.random() * colors.length)],
        p: Math.random() * Math.PI * 2,
      });
    }

    let frame: number;
    let t = 0;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);
      t += 0.008;
      nodes.forEach((n, i) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.c;
        ctx.globalAlpha = 0.25 + Math.sin(t + n.p) * 0.15;
        ctx.fill();
        nodes.slice(i + 1).forEach((n2) => {
          const d = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (d < 160) {
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = n.c; ctx.globalAlpha = (1 - d / 160) * 0.06;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        });
      });
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-accent/4 rounded-full blur-[150px]" />

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/15 bg-primary/5 mb-6"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-xs text-primary/80">Turkerler Holding icin hazirlanmistir</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5"
            >
              <span className="text-foreground/90">Enerji Portfoyunuz Icin</span>
              <br />
              <span className="text-gradient">Veri Odakli IT Vizyonu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-foreground/45 leading-relaxed mb-8 max-w-lg"
            >
              15 aktif santral, 4 ilde dagitim agi, 3 sehir hastanesi ve 6 mega
              projeyi tek tek inceledim. Her birim icin ozel AI cozum modulleri
              tasarladim. Bu portfolyo, Turkerler&apos;in gercek operasyonel
              verileri uzerinden hazirlanmistir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#turkerler" className="group px-6 py-3 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="flex items-center gap-2">
                  Analiz Raporunu Incele
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
              <a href="#demo" className="px-6 py-3 border border-border/40 bg-surface/20 backdrop-blur-sm text-sm font-medium rounded-lg hover:border-primary/20 transition-colors">
                Dashboard Prototipi
              </a>
            </motion.div>
          </div>

          {/* Right: Key Data */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-5 rounded-xl bg-surface/40 backdrop-blur-sm border border-border/30">
              <div className="text-[10px] font-mono text-foreground/25 mb-4 tracking-wider">
                TURKERLER HOLDING — TEMEL VERILER
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "2024 Hasılat", value: "4.2 milyar TL", sub: "+75% YoY buyume", color: "#10b981" },
                  { label: "Brut Kar Marji", value: "%47.6", sub: "2024 — 2.0 milyar TL", color: "#06b6d4" },
                  { label: "Kurulu Guc", value: "527 MW", sub: "15 santral aktif", color: "#3b82f6" },
                  { label: "Hedef Kapasite", value: "3,953 MW", sub: "7.5x buyume plani", color: "#8b5cf6" },
                ].map((m) => (
                  <div key={m.label} className="p-3 rounded-lg bg-background/40 border border-border/20">
                    <div className="text-[9px] text-foreground/20 uppercase tracking-wider">{m.label}</div>
                    <div className="text-lg font-bold mt-0.5" style={{ color: m.color }}>{m.value}</div>
                    <div className="text-[9px] text-foreground/15 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "Toplam Yatirim", value: "$1.04B" },
                  { label: "VEDAS 2025", value: "5 milyar TL" },
                  { label: "Calisan", value: "24,000" },
                ].map((m) => (
                  <div key={m.label} className="p-2 rounded-lg bg-background/30 border border-border/15 text-center">
                    <div className="text-[8px] text-foreground/15 uppercase">{m.label}</div>
                    <div className="text-xs font-bold text-foreground/60 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="text-[9px] text-primary/50 uppercase tracking-wider mb-1">HALKA ARZ SURECI</div>
                <div className="text-xs text-foreground/50">
                  SPK basvurusu yapildi (13 Subat 2026). 250M adet pay,
                  Yildiz Pazar, %20.57 halka acilik. Gelirin %85&apos;i yeni projelere.
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-end gap-2 text-[9px] text-foreground/15">
              <span>Kaynak: KAP, EPDK, VEDAS, Turkerler.com</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-7 rounded-full border border-foreground/10 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-primary/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
