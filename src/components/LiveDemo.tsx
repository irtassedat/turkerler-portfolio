"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useAnimatedNumber(target: number, duration: number = 2000) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, start: () => setStarted(true) };
}

const plants = [
  { name: "Zonguldak RES", type: "Ruzgar", cap: "120 MW", status: "online" as const, eff: 78, color: "#3b82f6" },
  { name: "Akinci HES", type: "Hidro", cap: "85 MW", status: "online" as const, eff: 86, color: "#06b6d4" },
  { name: "Tire RES", type: "Ruzgar", cap: "50 MW", status: "warning" as const, eff: 62, color: "#3b82f6" },
  { name: "Sapdagi RES", type: "Ruzgar", cap: "48 MW", status: "online" as const, eff: 74, color: "#3b82f6" },
  { name: "Gelibolu RES", type: "Ruzgar", cap: "36 MW", status: "online" as const, eff: 71, color: "#3b82f6" },
  { name: "JES-3", type: "Jeotermal", cap: "30 MW", status: "maintenance" as const, eff: 0, color: "#ef4444" },
  { name: "Meryem RES", type: "Ruzgar", cap: "30 MW", status: "online" as const, eff: 69, color: "#3b82f6" },
  { name: "JES-1", type: "Jeotermal", cap: "24 MW", status: "online" as const, eff: 92, color: "#ef4444" },
  { name: "JES-2", type: "Jeotermal", cap: "24 MW", status: "online" as const, eff: 89, color: "#ef4444" },
  { name: "Angutlu HES", type: "Hidro", cap: "23 MW", status: "online" as const, eff: 81, color: "#06b6d4" },
  { name: "Yenihisar RES", type: "Ruzgar", cap: "20 MW", status: "online" as const, eff: 66, color: "#3b82f6" },
  { name: "Demirci HES", type: "Hidro", cap: "13 MW", status: "online" as const, eff: 77, color: "#06b6d4" },
];

const alerts = [
  { time: "14:32", type: "warning", msg: "Tire RES Turbin #3 — vibrasyon degeri esik ustunde. Prediktif bakim: 12 gun icinde mudahale onerisi." },
  { time: "14:28", type: "info", msg: "JES-1 Alasehir — kuyu basinci stabil, uretim %102 kapasite faktorunde. Optimum calisiyor." },
  { time: "14:15", type: "success", msg: "JES-3 Bakim Tamamlandi — turbin revizyonu bitiriliyor. Devreye alinma: 2 saat icinde." },
  { time: "13:58", type: "warning", msg: "VEDAS Van Sektor 7 — trafo #142 asiri yuk. Pik tasima onerisi: 18:00-22:00 arasi yuk dagitimi." },
  { time: "13:42", type: "info", msg: "Sivas YEKA — insaat ilerleme: %12. Iletim hatti guzergahi onaylandi. Takvimde." },
  { time: "13:30", type: "info", msg: "Cotiujeni (Moldova) — AB enerji fiyat analizi: satis optimizasyonu icin 14:00-16:00 arasi uretim artirmasi oneriliyor." },
  { time: "13:15", type: "success", msg: "Haftalik ESG raporu otomatik olusturuldu. CO2 tasarrufu: 18,420 ton (bu hafta). SPK uyumlu." },
];

const vedasMetrics = [
  { label: "Aktif Abone", value: "840K", trend: "+1.2K bugun" },
  { label: "Kayip Orani", value: "%28.4", trend: "-0.3% onceki aya gore" },
  { label: "Arizali Trafo", value: "12", trend: "3 mudahale devam ediyor" },
  { label: "Akilli Sayac", value: "%67", trend: "PLC kapsama orani" },
];

export default function LiveDemo() {
  const totalMW = useAnimatedNumber(527);
  const activeUnits = useAnimatedNumber(13);
  const dailyMWh = useAnimatedNumber(8420);
  const co2Saved = useAnimatedNumber(1247);

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-accent tracking-wider">
            CANLI PROTOTIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            Turkerler AI Hub{" "}
            <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-foreground/50 mt-3 text-sm max-w-3xl mx-auto">
            15 santralin gercek zamanli izlenmesi, VEDAS dagitim agi durumu, yapim
            asamasindaki projelerin takibi ve AI ajan uyarilari — tek ekranda.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            totalMW.start();
            activeUnits.start();
            dailyMWh.start();
            co2Saved.start();
          }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-light/30">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">TH</span>
              </div>
              <span className="text-sm font-semibold">Turkerler AI Hub</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                v1.0 Prototip
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-foreground/30">
              <span>12 Mar 2026 14:35</span>
              <span className="flex items-center gap-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                Canli
              </span>
            </div>
          </div>

          <div className="p-5">
            {/* Top KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {[
                { label: "Kurulu Guc", value: `${totalMW.value} MW`, sub: "15 santral portfoyu", color: "#10b981" },
                { label: "Aktif Unite", value: `${activeUnits.value}/15`, sub: "1 bakimda, 1 uyari", color: "#3b82f6" },
                { label: "Gunluk Uretim", value: `${dailyMWh.value.toLocaleString()} MWh`, sub: "+3.2% onceki gune gore", color: "#06b6d4" },
                { label: "CO2 Tasarrufu", value: `${co2Saved.value.toLocaleString()} ton`, sub: "Bu hafta toplam", color: "#8b5cf6" },
              ].map((m) => (
                <div key={m.label} className="p-3 rounded-lg bg-background/50 border border-border/30">
                  <div className="text-[9px] text-foreground/25 uppercase tracking-wider">{m.label}</div>
                  <div className="text-lg font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-[9px] text-foreground/20 mt-0.5">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Three Columns */}
            <div className="grid lg:grid-cols-12 gap-4">
              {/* Plants Grid - 5 cols */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  SANTRAL DURUMU
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {plants.slice(0, 8).map((p, i) => {
                    const statusCfg = {
                      online: { dot: "bg-green-400", label: "Aktif" },
                      maintenance: { dot: "bg-yellow-400", label: "Bakim" },
                      warning: { dot: "bg-red-400", label: "Uyari" },
                    };
                    const s = statusCfg[p.status];
                    return (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium truncate">{p.name}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        </div>
                        <div className="text-[9px] text-foreground/20 mb-1.5">
                          {p.type} &middot; {p.cap}
                        </div>
                        <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.eff}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: p.color }}
                          />
                        </div>
                        <div className="text-[8px] text-foreground/15 mt-0.5">{p.eff > 0 ? `${p.eff}%` : s.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* AI Alerts - 4 cols */}
              <div className="lg:col-span-4">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  AI AJAN UYARILARI
                </div>
                <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                  {alerts.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[9px] text-foreground/15 font-mono">{a.time}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          a.type === "warning" ? "bg-yellow-400" : a.type === "success" ? "bg-green-400" : "bg-blue-400"
                        }`} />
                      </div>
                      <div className="text-[10px] text-foreground/45 leading-relaxed">{a.msg}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* VEDAŞ Panel - 3 cols */}
              <div className="lg:col-span-3">
                <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                  VEDAS DAGITIM
                </div>
                <div className="space-y-2">
                  {vedasMetrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="p-2.5 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className="text-[9px] text-foreground/20 uppercase">{m.label}</div>
                      <div className="text-sm font-bold text-yellow-400 mt-0.5">{m.value}</div>
                      <div className="text-[9px] text-foreground/15">{m.trend}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Construction Progress */}
                <div className="mt-3">
                  <div className="text-[10px] font-mono text-foreground/25 mb-2 tracking-wider">
                    PROJE ILERLEME
                  </div>
                  {[
                    { name: "Sivas YEKA 500MW", pct: 12, color: "#3b82f6" },
                    { name: "K.Maras GES 40MW", pct: 5, color: "#f59e0b" },
                    { name: "Van GES 40MW", pct: 3, color: "#f59e0b" },
                  ].map((p) => (
                    <div key={p.name} className="mb-2">
                      <div className="flex justify-between text-[9px] mb-0.5">
                        <span className="text-foreground/30">{p.name}</span>
                        <span style={{ color: p.color }}>{p.pct}%</span>
                      </div>
                      <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: p.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] text-foreground/15 mt-4"
        >
          * Simule edilmis verilerle prototip. Gercek uygulamada SCADA, IoT sensoru,
          VEDAS akilli sayac ve ERP entegrasyonuyla canli veri akisi saglanir.
        </motion.p>
      </div>
    </section>
  );
}
