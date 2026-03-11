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

function PlantCard({
  name,
  type,
  capacity,
  status,
  efficiency,
  color,
  delay,
}: {
  name: string;
  type: string;
  capacity: string;
  status: "online" | "maintenance" | "warning";
  efficiency: number;
  color: string;
  delay: number;
}) {
  const statusConfig = {
    online: { label: "Aktif", color: "#10b981", bg: "bg-green-500/10" },
    maintenance: { label: "Bakim", color: "#f59e0b", bg: "bg-yellow-500/10" },
    warning: { label: "Uyari", color: "#ef4444", bg: "bg-red-500/10" },
  };
  const s = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-4 rounded-lg bg-background/50 border border-border/50"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: s.color }}
          />
          <span className="text-xs font-medium">{name}</span>
        </div>
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded ${s.bg}`}
          style={{ color: s.color }}
        >
          {s.label}
        </span>
      </div>
      <div className="text-[10px] text-foreground/30 mb-2">{type} &middot; {capacity}</div>
      <div className="h-1 bg-surface-light rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${efficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.3 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="text-[10px] text-foreground/30 mt-1">{efficiency}% verimlilik</div>
    </motion.div>
  );
}

export default function LiveDemo() {
  const totalMW = useAnimatedNumber(526);
  const activeUnits = useAnimatedNumber(12);
  const dailyMWh = useAnimatedNumber(8420);

  const [alerts] = useState([
    { time: "14:32", type: "warning", msg: "Tire RES - Turbin #3 titresim uyarisi" },
    { time: "14:28", type: "info", msg: "JES-2 uretim %102 kapasite faktorune ulasti" },
    { time: "14:15", type: "success", msg: "Akinci HES - Planli bakim tamamlandi" },
    { time: "13:58", type: "warning", msg: "VEDAS Van - Sektor 7 gerilim dusumu tespit edildi" },
    { time: "13:42", type: "info", msg: "Prediktif bakim: Barbaros RES Turbin #1 - 18 gun icinde bakim onerisi" },
  ]);

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-accent tracking-wider">
            CANLI DEMO
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            Turkerler AI Hub{" "}
            <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-foreground/50 mt-3 text-sm max-w-2xl mx-auto">
            Tum enerji varliklarini tek ekranda gosteren, AI tabanli otonom
            izleme ve karar destek sistemi prototipi.
          </p>
        </motion.div>

        {/* Dashboard Mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            totalMW.start();
            activeUnits.start();
            dailyMWh.start();
          }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface-light/50">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">TH</span>
              </div>
              <span className="text-sm font-semibold">Turkerler AI Hub</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                v1.0 Prototip
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-foreground/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Canli Veri Simulasyonu
            </div>
          </div>

          <div className="p-6">
            {/* Top Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Toplam Kapasite", value: `${totalMW.value} MW`, sub: "15 aktif santral", color: "#10b981" },
                { label: "Aktif Unite", value: `${activeUnits.value}/15`, sub: "3 bakimda", color: "#3b82f6" },
                { label: "Gunluk Uretim", value: `${dailyMWh.value} MWh`, sub: "Bugun", color: "#06b6d4" },
                { label: "Kapasite Faktoru", value: "67.2%", sub: "+2.1% onceki aya gore", color: "#8b5cf6" },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="text-[10px] text-foreground/30 uppercase tracking-wider">{m.label}</div>
                  <div className="text-xl font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-[10px] text-foreground/20 mt-0.5">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Two columns: Plants + Alerts */}
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Plants Grid */}
              <div className="lg:col-span-2">
                <div className="text-xs font-mono text-foreground/30 mb-3 tracking-wider">
                  SANTRAL DURUMU
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <PlantCard name="Turkerler JES-1" type="Jeotermal" capacity="24 MW" status="online" efficiency={94} color="#ef4444" delay={0} />
                  <PlantCard name="Turkerler JES-2" type="Jeotermal" capacity="24 MW" status="online" efficiency={91} color="#ef4444" delay={0.05} />
                  <PlantCard name="Turkerler JES-3" type="Jeotermal" capacity="120 MW" status="maintenance" efficiency={0} color="#ef4444" delay={0.1} />
                  <PlantCard name="Tire RES" type="Ruzgar" capacity="50 MW" status="warning" efficiency={72} color="#3b82f6" delay={0.15} />
                  <PlantCard name="Barbaros RES" type="Ruzgar" capacity="12 MW" status="online" efficiency={68} color="#3b82f6" delay={0.2} />
                  <PlantCard name="Akinci HES" type="Hidroelektrik" capacity="87 MW" status="online" efficiency={85} color="#06b6d4" delay={0.25} />
                </div>
              </div>

              {/* AI Alerts */}
              <div>
                <div className="text-xs font-mono text-foreground/30 mb-3 tracking-wider">
                  AI AJAN UYARILARI
                </div>
                <div className="space-y-2">
                  {alerts.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="p-3 rounded-lg bg-background/50 border border-border/50"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] text-foreground/20 font-mono">
                          {a.time}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            a.type === "warning"
                              ? "bg-yellow-400"
                              : a.type === "success"
                                ? "bg-green-400"
                                : "bg-blue-400"
                          }`}
                        />
                      </div>
                      <div className="text-[11px] text-foreground/50">{a.msg}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-foreground/20 mt-4"
        >
          * Simule edilmis verilerle prototip gosterimi. Gercek SCADA/IoT
          entegrasyonu ile canli veri akisi saglanacaktir.
        </motion.p>
      </div>
    </section>
  );
}
