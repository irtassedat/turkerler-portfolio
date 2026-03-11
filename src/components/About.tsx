"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: "\u26A1",
    title: "Full-Stack Gelistirici",
    desc: "React, Next.js, Node.js, Java/Spring Boot, PostgreSQL, MongoDB ile uretim seviyesinde uygulama gelistirme deneyimi.",
  },
  {
    icon: "\uD83E\uDD16",
    title: "AI & Otonom Sistemler",
    desc: "Claude API, otonom ajan mimarileri, MCP Server entegrasyonu, gercek zamanli veri isleyen akilli sistemler.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Veri Analiz & Pattern Recognition",
    desc: "Cok kaynakli veri toplama, anomali tespiti, risk skorlama ve otomatik raporlama sistemleri.",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Otomasyon & Bot Sistemleri",
    desc: "Telegram bot altyapilari, otomatik izleme/alarm sistemleri, workflow otomasyon ve DevOps.",
  },
];

const timeline = [
  { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, veritabani yonetimi" },
  { year: "2024-25", title: "QR Menu Platform", desc: "End-to-end restoran yonetim sistemi" },
  { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack proje" },
  { year: "2025-26", title: "AI Ajan & Otomasyon Sistemleri", desc: "Claude AI entegrasyonlari, Telegram botlari, veri isleme platformlari" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">
            HAKKIMDA
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            Teknolojiyi{" "}
            <span className="text-gradient">Enerjiye Donusturuyorum</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-foreground/60 text-lg leading-relaxed">
              Full-stack yazilimci olarak React/Next.js ekosistemi, Java/Spring Boot
              backend ve modern AI teknolojileri konusunda uretim seviyesinde deneyime
              sahibim. Ozellikle{" "}
              <strong className="text-primary">gercek zamanli veri isleme</strong>,{" "}
              <strong className="text-accent">anomali tespit sistemleri</strong> ve{" "}
              <strong className="text-secondary">otonom ajan mimarileri</strong> alaninda
              cozumler gelistiriyorum.
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Cok kaynakli veri toplama, pattern recognition ve otomatik risk skorlama
              konularinda gelistirdigim sistemler, buyuk olcekli operasyonlarda
              karar destek mekanizmasi olarak kullanilmaktadir. Bu deneyimi
              Turkerler Holding&apos;in enerji portfoyune uyarlayarak, 133 sirketten
              gelen verileri birlestiren ve operasyonel verimliligi artiran bir
              AI platformu oneriyorum.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/irtassedat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-primary/40 transition-colors bg-surface/50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-secondary/40 transition-colors bg-surface/50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="mailto:sedatirtas.1@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/15 transition-colors"
              >
                sedatirtas.1@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-5 rounded-xl bg-surface border border-border">
              <h3 className="text-sm font-mono text-foreground/40 mb-4 tracking-wider">YOLCULUK</h3>
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={t.year} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs text-primary font-mono">{t.year}</div>
                      <div className="font-medium text-sm mt-0.5">{t.title}</div>
                      <div className="text-xs text-foreground/40 mt-0.5">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all group"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="font-semibold mt-3 mb-1.5 text-sm group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-foreground/45 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
