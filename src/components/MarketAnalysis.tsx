"use client";

import { motion } from "framer-motion";

/* Province-level VEDAŞ data (EPDK 2024) */
const vedasProvinces = [
  { province: "Hakkari", loss: 52.16, subscribers: "85K", color: "#ef4444", note: "Turkiye'nin en yuksek kayip oranlarindan" },
  { province: "Van", loss: 29.43, subscribers: "420K", color: "#f59e0b", note: "En buyuk abone havuzu" },
  { province: "Mus", loss: 25.09, subscribers: "165K", color: "#eab308", note: "Hedefin altinda" },
  { province: "Bitlis", loss: 24.03, subscribers: "170K", color: "#22c55e", note: "En dusuk oran" },
];

/* Competitor positioning */
const competitors = [
  { name: "Turker Yenilenebilir", current: 527, target: 3953, revenue: "4.2B TL", growth: "7.5x", highlight: true },
  { name: "Akfen Yenilenebilir", current: 828, target: 1200, revenue: "Halka arz", growth: "1.4x", highlight: false },
  { name: "Zorlu Yenilenebilir", current: 650, target: 1000, revenue: "Halka arz", growth: "1.5x", highlight: false },
  { name: "IC Enterra", current: 350, target: 600, revenue: "Halka arz", growth: "1.7x", highlight: false },
];

/* Global AI benchmarks */
const aiBenchmarks = [
  { metric: "Plansiz Durus Azalma", value: "%35-50", source: "Deloitte / IRENA", detail: "AI prediktif bakim uygulayan santrallerde" },
  { metric: "Bakim Maliyeti Azalma", value: "%18-25", source: "McKinsey Energy", detail: "Arizalar buyumeden tespit edildiginde" },
  { metric: "Enerji Uretim Artisi", value: "%8.5", source: "IEEE 2024", detail: "AI optimizasyonlu ruzgar ciftliklerinde" },
  { metric: "Tulerasyondan Sonra", value: "%98+", source: "GE/Siemens Veri", detail: "AI-destekli santrallerde availability" },
  { metric: "Pazar Buyuklugu", value: "$5.12B", source: "Dataintelo 2033", detail: "Ruzgar AI bakım pazari (CAGR %17.2)" },
  { metric: "ROI Orani", value: "1:11", source: "Sanayi Raporu", detail: "Proaktif vs reaktif bakim getirisi" },
];

/* Financial highlights */
const financials = [
  { year: "2023", revenue: "2.4", grossProfit: "1.4", margin: "58.3" },
  { year: "2024", revenue: "4.2", grossProfit: "2.0", margin: "47.6" },
  { year: "9A 2025", revenue: "2.8", grossProfit: "1.6", margin: "57.1" },
];

export default function MarketAnalysis() {
  return (
    <section id="market" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-secondary tracking-wider">
            PAZAR ARASTIRMASI & VERI ANALIZI
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            Verilerle{" "}
            <span className="text-gradient">Derinlemesine Analiz</span>
          </h2>
          <p className="text-foreground/40 mt-3 text-sm max-w-2xl mx-auto">
            EPDK raporlari, KAP bildirimleri, sektör benchmarklari ve global AI
            arastirmalarindan derlenen verilerle Turkerler&apos;in konumu.
          </p>
        </motion.div>

        {/* ───── FINANCIAL PERFORMANCE ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              TURKER YENILENEBILIR ENERJI — FINANSAL PERFORMANS
            </h3>
            <span className="text-[9px] text-foreground/20">Kaynak: SPK Taslak Izahname, KAP</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {financials.map((f, i) => (
              <motion.div
                key={f.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xs font-mono text-primary mb-3">{f.year}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">Hasilat</span>
                    <span className="text-sm font-bold text-foreground/70">{f.revenue} milyar TL</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">Brut Kar</span>
                    <span className="text-sm font-bold text-primary">{f.grossProfit} milyar TL</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">Brut Marj</span>
                    <span className="text-sm font-bold text-accent">%{f.margin}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { label: "Toplam Yatirim", value: "$1.04 milyar", sub: "526.7 MWe portfoy" },
              { label: "Halka Arz", value: "250M pay", sub: "Yildiz Pazar, %20.57" },
              { label: "YoY Buyume", value: "+75%", sub: "2023 → 2024 hasilat" },
              { label: "Fon Kullanimi", value: "%85 yatirim", sub: "Yeni projelere direkt" },
            ].map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-background/30 border border-border/20 text-center">
                <div className="text-[8px] text-foreground/15 uppercase tracking-wider">{m.label}</div>
                <div className="text-xs font-bold text-foreground/60 mt-1">{m.value}</div>
                <div className="text-[8px] text-foreground/15 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ───── VEDAŞ PROVINCE-LEVEL ANALYSIS ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              VEDAS — IL BAZLI KAYIP-KACAK ANALIZI (EPDK 2024)
            </h3>
            <span className="text-[9px] text-foreground/20">2013: %70+ &rarr; 2024: %28 ortalama</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {vedasProvinces.map((p, i) => (
              <motion.div
                key={p.province}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">{p.province}</span>
                  <span className="text-xs text-foreground/25">{p.subscribers} abone</span>
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold" style={{ color: p.color }}>
                    %{p.loss}
                  </div>
                  <div className="text-[9px] text-foreground/20">kayip-kacak orani</div>
                </div>
                <div className="h-2 bg-surface-light rounded-full overflow-hidden mb-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.loss}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
                <div className="text-[9px] text-foreground/20">{p.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
            <div className="text-[10px] font-mono text-yellow-500/50 mb-1.5">AI FIRSAT ANALIZI — HAKKARI ODAK</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              Hakkari&apos;nin %52.16 kayip orani Turkiye ortalamasinin 4 kati. Bu tek il icin AI
              tabanli anomali tespiti ve akilli sayac analizi ile kayip oraninin %40&apos;a
              dusurulmesi bile yillik <strong className="text-yellow-400">~100 milyon kWh</strong> enerji
              kurtarma anlamina gelir. PLC altyapisi zaten mevcut — eksik olan veri analiz katmani.
            </p>
          </div>
        </motion.div>

        {/* ───── COMPETITOR POSITIONING ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              SEKTOR KONUMLANDIRMA — RAKIP KARSILASTIRMA
            </h3>
            <span className="text-[9px] text-foreground/20">Turkiye Yenilenebilir Enerji Sektoru 2025</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-2 text-[10px] text-foreground/25 font-normal">Sirket</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">Mevcut MW</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">Hedef MW</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">Buyume</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">Hasilat</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-border/10 ${c.highlight ? "bg-primary/3" : ""}`}
                  >
                    <td className={`py-2.5 ${c.highlight ? "text-primary font-semibold" : "text-foreground/50"}`}>
                      {c.name}
                      {c.highlight && <span className="ml-1.5 text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">Odak</span>}
                    </td>
                    <td className="text-right py-2.5 text-foreground/50">{c.current.toLocaleString()}</td>
                    <td className="text-right py-2.5 font-medium" style={{ color: c.highlight ? "#10b981" : undefined }}>
                      {c.target.toLocaleString()}
                    </td>
                    <td className="text-right py-2.5">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        c.highlight ? "bg-primary/10 text-primary font-bold" : "text-foreground/30"
                      }`}>
                        {c.growth}
                      </span>
                    </td>
                    <td className="text-right py-2.5 text-foreground/40">{c.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-primary/3 border border-primary/10">
            <p className="text-[10px] text-foreground/35 leading-relaxed">
              <strong className="text-primary/70">Kritik farklilasma:</strong> Turker Yenilenebilir 7.5x
              buyume hedefiyle sektorun en agresif planina sahip. Bu olcekte buyume, manuel IT
              sureclerle yonetilemez. Rakipler 1.4-1.7x buyurken, 7.5x buyuyen bir portfoyu
              yonetmek icin AI tabanli otomasyon zorunluluktur — secim degil.
            </p>
          </div>
        </motion.div>

        {/* ───── GLOBAL AI BENCHMARKS ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-mono text-foreground/30 tracking-wider">
              GLOBAL AI BENCHMARK — ENERJI SEKTORUNDE AI ETKISI
            </h3>
            <span className="text-[9px] text-foreground/20">Deloitte, McKinsey, IEEE, IRENA 2024-2025</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiBenchmarks.map((b, i) => (
              <motion.div
                key={b.metric}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-lg bg-background/40 border border-border/30"
              >
                <div className="text-xl font-bold text-gradient mb-1">{b.value}</div>
                <div className="text-xs font-medium text-foreground/60 mb-1">{b.metric}</div>
                <div className="text-[9px] text-foreground/25 mb-1.5">{b.detail}</div>
                <div className="text-[8px] text-foreground/15 italic">{b.source}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-lg bg-accent/5 border border-accent/10">
            <div className="text-[10px] font-mono text-accent/50 mb-1.5">TURKERLER ICIN PROJEKSIYON</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              527 MW portfoyde global benchmarklarin alt siniri uygulandiginda bile:
              plansiz durusta %35 azalma ≈ yillik <strong className="text-accent">~45 GWh</strong> ek uretim,
              bakim maliyetinde %18 azalma, uretim optimizasyonuyla %3 artis ≈ <strong className="text-accent">~47 GWh</strong>.
              Toplam etki: yillik <strong className="text-accent">~92 GWh</strong> ek uretim + maliyet tasarrufu.
              3,953 MW hedefinde bu rakamlar <strong className="text-accent">7.5 katina</strong> cikar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
