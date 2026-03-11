"use client";

import { motion } from "framer-motion";

const currentProblems = [
  {
    area: "VEDAS Dagitim",
    icon: "\u26A1",
    problems: [
      "8 saate varan planli kesintiler, musterilerden yogun sikayet",
      "Fatura sistemi hatalari — aylarca fatura ulasmamasi",
      "Arizalara reaktif mudahale, kalici cozum yerine gecici onarim",
    ],
    solution: "AI Anomali Tespit & Akilli Sebeke Yonetimi",
    impact: "650K abone, 4 il, 1.8 milyar kWh/yil",
  },
  {
    area: "Santral Duruslari",
    icon: "\uD83D\uDD27",
    problems: [
      "Jeotermal/ruzgar santrallerinde plansiz makine duruslari",
      "Bakim zamanlamasi deneyime dayali, veri odakli degil",
      "Yedek parca stogu optimizasyonu yapilmiyor",
    ],
    solution: "Prediktif Bakim AI Sistemi (SCADA + ML)",
    impact: "526 MW uretim portfoyu",
  },
  {
    area: "Raporlama & Veri",
    icon: "\uD83D\uDCCB",
    problems: [
      "133 sirketten gelen veriler birlestirilemiyor",
      "Manuel Excel raporlama — gecikme ve hata orani yuksek",
      "Ust yonetim icin anlik karar destek verisi yok",
    ],
    solution: "Otomatik AI Raporlama & Birlesik Data Lake",
    impact: "133 sirket, 24,000 calisan",
  },
  {
    area: "Halka Arz Sureci",
    icon: "\uD83D\uDCC8",
    problems: [
      "SPK basvurusu yapildi — yatirimci sunumu icin veri seffafligi gerekiyor",
      "Uretim performans metrikleri anlık izlenemiyor",
      "ESG ve surdurulebilirlik raporlamasi manuel",
    ],
    solution: "Yatirimci Dashboard & Otomatik ESG Raporlama",
    impact: "Halka arz gelirlerin %85i yeni projelere",
  },
];

const growthPath = [
  {
    phase: "Mevcut",
    capacity: "526 MW",
    detail: "9 RES + 3 HES + 3 JES",
    color: "#10b981",
    width: "14%",
  },
  {
    phase: "Orta Vade",
    capacity: "880 MW",
    detail: "Hibrit GES + Yeni RES",
    color: "#06b6d4",
    width: "22%",
  },
  {
    phase: "Romanya",
    capacity: "+50 MW",
    detail: "Cotiujeni Ruzgar",
    color: "#8b5cf6",
    width: "2%",
  },
  {
    phase: "Offshore",
    capacity: "1,500 MW",
    detail: "Saros Korfezi Deniz Ustu",
    color: "#3b82f6",
    width: "38%",
  },
  {
    phase: "Uzun Vade",
    capacity: "3,953 MW",
    detail: "Toplam Hedef",
    color: "#f59e0b",
    width: "100%",
  },
];

const agentModules = [
  {
    name: "Uretim Izleme Ajani",
    desc: "Tum santrallerin gercek zamanli performansini izler, anomali tespit eder, kapasite faktorunu optimize eder.",
    tags: ["SCADA", "TimescaleDB", "Claude AI"],
    color: "#10b981",
  },
  {
    name: "Prediktif Bakim Ajani",
    desc: "Sensor verilerinden makine arizalarini 2-4 hafta once tahmin eder, bakim planlama onerisi uretir.",
    tags: ["IoT", "ML", "MQTT"],
    color: "#3b82f6",
  },
  {
    name: "VEDAS Dagitim Ajani",
    desc: "Dagitim sebeke anomalilerini tespit eder, kayip-kacak oranlarini analiz eder, kesinti tahmin eder.",
    tags: ["Smart Grid", "GIS", "Real-time"],
    color: "#f59e0b",
  },
  {
    name: "Maliyet Optimizasyon Ajani",
    desc: "Enerji piyasa fiyatlarini izler, alim-satim stratejisi olusturur, yakit maliyetini optimize eder.",
    tags: ["EXIST", "API", "Optimizasyon"],
    color: "#8b5cf6",
  },
  {
    name: "Regulasyon & ESG Ajani",
    desc: "EPDK mevzuat degisikliklerini izler, uyum raporlari otomatik uretir, ESG metrikleri takip eder.",
    tags: ["NLP", "EPDK", "SPK"],
    color: "#06b6d4",
  },
  {
    name: "Portfoy Yonetim Ajani",
    desc: "133 sirketin konsolide verilerini analiz eder, proje onceliklendirme ve kaynak dagilimi onerisi uretir.",
    tags: ["Analytics", "Dashboard", "AI"],
    color: "#ec4899",
  },
];

export default function TurkerlerVision() {
  return (
    <section id="turkerler" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">
            TURKERLER HOLDING VIZYONU
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            Gercek Sorunlara{" "}
            <span className="text-gradient">Gercek Cozumler</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            Turkerler Holding&apos;in enerji portfoyundeki mevcut operasyonel
            zorluklari arastirdim ve her birine ozel AI cozum modulleri
            tasarladim.
          </p>
        </motion.div>

        {/* Growth Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <h3 className="text-sm font-mono text-foreground/40 mb-6 tracking-wider">
            BUYUME YOLU HARITASI
          </h3>
          <div className="space-y-3">
            {growthPath.map((g, i) => (
              <motion.div
                key={g.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-20 text-xs font-mono text-foreground/40 shrink-0">
                  {g.phase}
                </div>
                <div className="flex-1 h-8 bg-surface-light rounded-lg overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: g.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-lg flex items-center px-3"
                    style={{ backgroundColor: g.color + "30" }}
                  >
                    <span
                      className="text-xs font-bold whitespace-nowrap"
                      style={{ color: g.color }}
                    >
                      {g.capacity}
                    </span>
                  </motion.div>
                </div>
                <div className="text-xs text-foreground/30 w-40 shrink-0 hidden sm:block">
                  {g.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Problems Analysis */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            Tespit Edilen Sorunlar &amp;{" "}
            <span className="text-primary">Onerilen Cozumler</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentProblems.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="font-bold text-sm">{item.area}</h4>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">
                    {item.impact}
                  </span>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {item.problems.map((p) => (
                    <li
                      key={p}
                      className="text-xs text-foreground/40 flex items-start gap-2"
                    >
                      <span className="text-red-400/60 mt-0.5 shrink-0">&times;</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <span className="text-primary text-xs">&rarr;</span>
                  <span className="text-sm font-medium text-primary">
                    {item.solution}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Agent Modules */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">
            6 Otonom{" "}
            <span className="text-gradient">AI Ajan Modulu</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agentModules.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-surface border border-border group hover:border-opacity-50 transition-all"
                style={{ borderColor: agent.color + "00" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = agent.color + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3"
                  style={{ backgroundColor: agent.color + "20", color: agent.color }}
                >
                  {i + 1}
                </div>
                <h4 className="font-semibold text-sm mb-1.5">{agent.name}</h4>
                <p className="text-xs text-foreground/40 leading-relaxed mb-3">
                  {agent.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {agent.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: agent.color + "10",
                        color: agent.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
