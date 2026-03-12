"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* Province-level VEDAŞ data (EPDK 2024) */
const vedasProvincesTR = [
  { province: "Hakkari", loss: 52.16, subscribers: "85K", color: "#ef4444", note: "Türkiye'nin en yüksek kayıp oranlarından" },
  { province: "Van", loss: 29.43, subscribers: "420K", color: "#f59e0b", note: "En büyük abone havuzu" },
  { province: "Muş", loss: 25.09, subscribers: "165K", color: "#eab308", note: "Hedefin altında" },
  { province: "Bitlis", loss: 24.03, subscribers: "170K", color: "#22c55e", note: "En düşük oran" },
];

const vedasProvincesEN = [
  { province: "Hakkari", loss: 52.16, subscribers: "85K", color: "#ef4444", note: "One of Turkey's highest loss rates" },
  { province: "Van", loss: 29.43, subscribers: "420K", color: "#f59e0b", note: "Largest subscriber pool" },
  { province: "Muş", loss: 25.09, subscribers: "165K", color: "#eab308", note: "Below target" },
  { province: "Bitlis", loss: 24.03, subscribers: "170K", color: "#22c55e", note: "Lowest rate" },
];

/* Competitor positioning */
const competitorsTR = [
  { name: "Türker Yenilenebilir", current: 527, target: 3953, revenue: "4.2B TL", growth: "7.5x", highlight: true },
  { name: "Akfen Yenilenebilir", current: 828, target: 1200, revenue: "Halka arz", growth: "1.4x", highlight: false },
  { name: "Zorlu Yenilenebilir", current: 650, target: 1000, revenue: "Halka arz", growth: "1.5x", highlight: false },
  { name: "IC Enterra", current: 350, target: 600, revenue: "Halka arz", growth: "1.7x", highlight: false },
];

const competitorsEN = [
  { name: "Türker Renewable", current: 527, target: 3953, revenue: "4.2B TL", growth: "7.5x", highlight: true },
  { name: "Akfen Renewable", current: 828, target: 1200, revenue: "IPO", growth: "1.4x", highlight: false },
  { name: "Zorlu Renewable", current: 650, target: 1000, revenue: "IPO", growth: "1.5x", highlight: false },
  { name: "IC Enterra", current: 350, target: 600, revenue: "IPO", growth: "1.7x", highlight: false },
];

/* Global AI benchmarks */
const aiBenchmarksTR = [
  { metric: "Plansız Duruş Azalma", value: "%35-50", source: "Deloitte / IRENA", detail: "AI prediktif bakım uygulayan santrallerde" },
  { metric: "Bakım Maliyeti Azalma", value: "%18-25", source: "McKinsey Energy", detail: "Arızalar büyümeden tespit edildiğinde" },
  { metric: "Enerji Üretim Artışı", value: "%8.5", source: "IEEE 2024", detail: "AI optimizasyonlu rüzgâr çiftliklerinde" },
  { metric: "Tolerasyondan Sonra", value: "%98+", source: "GE/Siemens Veri", detail: "AI-destekli santrallerde availability" },
  { metric: "Pazar Büyüklüğü", value: "$5.12B", source: "Dataintelo 2033", detail: "Rüzgâr AI bakım pazarı (CAGR %17.2)" },
  { metric: "ROI Oranı", value: "1:11", source: "Sanayi Raporu", detail: "Proaktif vs reaktif bakım getirisi" },
];

const aiBenchmarksEN = [
  { metric: "Unplanned Downtime Reduction", value: "35-50%", source: "Deloitte / IRENA", detail: "In plants using AI predictive maintenance" },
  { metric: "Maintenance Cost Reduction", value: "18-25%", source: "McKinsey Energy", detail: "When faults are detected before escalation" },
  { metric: "Energy Production Increase", value: "8.5%", source: "IEEE 2024", detail: "In AI-optimized wind farms" },
  { metric: "Post-Tolerance Availability", value: "98%+", source: "GE/Siemens Data", detail: "In AI-powered plants" },
  { metric: "Market Size", value: "$5.12B", source: "Dataintelo 2033", detail: "Wind AI maintenance market (CAGR 17.2%)" },
  { metric: "ROI Ratio", value: "1:11", source: "Industry Report", detail: "Proactive vs reactive maintenance return" },
];

/* Financial highlights */
const financialsTR = [
  { year: "2023", revenue: "2.4", grossProfit: "1.4", margin: "58.3", unit: "milyar TL" },
  { year: "2024", revenue: "4.2", grossProfit: "2.0", margin: "47.6", unit: "milyar TL" },
  { year: "9A 2025", revenue: "2.8", grossProfit: "1.6", margin: "57.1", unit: "milyar TL" },
];

const financialsEN = [
  { year: "2023", revenue: "2.4", grossProfit: "1.4", margin: "58.3", unit: "B TL" },
  { year: "2024", revenue: "4.2", grossProfit: "2.0", margin: "47.6", unit: "B TL" },
  { year: "9M 2025", revenue: "2.8", grossProfit: "1.6", margin: "57.1", unit: "B TL" },
];

/* Financial summary cards */
const financialSummaryTR = [
  { label: "Toplam Yatırım", value: "$1.04 milyar", sub: "526.7 MWe portföy" },
  { label: "Halka Arz", value: "250M pay", sub: "Yıldız Pazar, %20.57" },
  { label: "YoY Büyüme", value: "+75%", sub: "2023 → 2024 hasılat" },
  { label: "Fon Kullanımı", value: "%85 yatırım", sub: "Yeni projelere direkt" },
];

const financialSummaryEN = [
  { label: "Total Investment", value: "$1.04B", sub: "526.7 MWe portfolio" },
  { label: "IPO", value: "250M shares", sub: "Star Market, 20.57%" },
  { label: "YoY Growth", value: "+75%", sub: "2023 → 2024 revenue" },
  { label: "Fund Usage", value: "85% investment", sub: "Direct to new projects" },
];

export default function MarketAnalysis() {
  const { lang, t } = useLang();

  const vedasProvinces = lang === "tr" ? vedasProvincesTR : vedasProvincesEN;
  const competitors = lang === "tr" ? competitorsTR : competitorsEN;
  const aiBenchmarks = lang === "tr" ? aiBenchmarksTR : aiBenchmarksEN;
  const financials = lang === "tr" ? financialsTR : financialsEN;
  const financialSummary = lang === "tr" ? financialSummaryTR : financialSummaryEN;

  const subscriberLabel = lang === "tr" ? "abone" : "subscribers";
  const focusLabel = lang === "tr" ? "Odak" : "Focus";
  const vedasSubtitle = lang === "tr" ? "2013: %70+ → 2024: %28 ortalama" : "2013: 70%+ → 2024: 28% average";

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
            {t.market.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.market.titleA}
            <span className="text-gradient">{t.market.titleB}</span>
          </h2>
          <p className="text-foreground/40 mt-3 text-sm max-w-2xl mx-auto">
            {t.market.subtitle}
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
              {t.market.financial}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.financialSource}</span>
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
                    <span className="text-[10px] text-foreground/25">{t.market.revenue}</span>
                    <span className="text-sm font-bold text-foreground/70">{f.revenue} {f.unit}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossProfit}</span>
                    <span className="text-sm font-bold text-primary">{f.grossProfit} {f.unit}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-foreground/25">{t.market.grossMargin}</span>
                    <span className="text-sm font-bold text-accent">%{f.margin}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-4 gap-3">
            {financialSummary.map((m) => (
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
              {t.market.vedasTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{vedasSubtitle}</span>
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
                  <span className="text-xs text-foreground/25">{p.subscribers} {subscriberLabel}</span>
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold" style={{ color: p.color }}>
                    %{p.loss}
                  </div>
                  <div className="text-[9px] text-foreground/20">{t.market.lossRate}</div>
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
            <div className="text-[10px] font-mono text-yellow-500/50 mb-1.5">{t.market.aiFocusHakkari}</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {t.market.hakkariText.split("~100")[0]}
              <strong className="text-yellow-400">~100 {lang === "tr" ? "milyon kWh" : "million kWh"}</strong>
              {t.market.hakkariText.split(lang === "tr" ? "~100 milyon kWh" : "~100 million kWh")[1]}
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
              {t.market.competitorTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.competitorSource}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.company}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.currentMW}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.targetMW}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.growth}</th>
                  <th className="text-right py-2 text-[10px] text-foreground/25 font-normal">{t.market.tableHeaders.revenue}</th>
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
                      {c.highlight && <span className="ml-1.5 text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">{focusLabel}</span>}
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
              <strong className="text-primary/70">
                {lang === "tr" ? "Kritik farklılaşma:" : "Critical differentiation:"}
              </strong>{" "}
              {t.market.competitorNote.split(lang === "tr" ? "Kritik farklılaşma: " : "Critical differentiation: ")[1] || t.market.competitorNote}
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
              {t.market.aiTitle}
            </h3>
            <span className="text-[9px] text-foreground/20">{t.market.aiSource}</span>
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
            <div className="text-[10px] font-mono text-accent/50 mb-1.5">{t.market.projectionTitle}</div>
            <p className="text-xs text-foreground/40 leading-relaxed">
              {lang === "tr" ? (
                <>
                  527 MW portföyde global benchmarkların alt sınırı uygulandığında bile:
                  plansız duruşta %35 azalma ≈ yıllık <strong className="text-accent">~45 GWh</strong> ek üretim,
                  bakım maliyetinde %18 azalma, üretim optimizasyonuyla %3 artış ≈ <strong className="text-accent">~47 GWh</strong>.
                  Toplam etki: yıllık <strong className="text-accent">~92 GWh</strong> ek üretim + maliyet tasarrufu.
                  3,953 MW hedefinde bu rakamlar <strong className="text-accent">7.5 katına</strong> çıkar.
                </>
              ) : (
                <>
                  Even applying the lower bound of global benchmarks to a 527 MW portfolio:
                  35% reduction in unplanned downtime ≈ <strong className="text-accent">~45 GWh</strong> additional annual production,
                  18% reduction in maintenance costs, 3% increase through production optimization ≈ <strong className="text-accent">~47 GWh</strong>.
                  Total impact: <strong className="text-accent">~92 GWh</strong> additional annual production + cost savings.
                  At the 3,953 MW target, these figures increase <strong className="text-accent">7.5x</strong>.
                </>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
