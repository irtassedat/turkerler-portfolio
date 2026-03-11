"use client";

import { motion } from "framer-motion";
import { getLanguageColor, type GitHubRepo, type GitHubProfile } from "@/lib/github";

interface Props {
  repos: GitHubRepo[];
  profile: GitHubProfile;
}

// Curated project descriptions for featured repos
const projectMeta: Record<string, { title: string; desc: string; tags: string[] }> = {
  latestv2: {
    title: "QR Menu Frontend",
    desc: "Restoran ve kafelerin dijital menu yonetim sistemi. Responsive UI, kategori filtreleme, siparis takibi.",
    tags: ["React", "JavaScript", "REST API", "Responsive"],
  },
  "qrmenu-backend": {
    title: "QR Menu Backend API",
    desc: "Restoran yonetim sistemi backend. Menu CRUD, kullanici yetkilendirme, siparis yonetimi.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
  },
  ecommerce: {
    title: "E-Commerce Frontend",
    desc: "Tam kapsamli e-ticaret platformu. Urun katalog, sepet yonetimi, odeme entegrasyonu, kullanici paneli.",
    tags: ["React", "Redux", "Axios", "Tailwind"],
  },
  "ecommerce-backendAPI": {
    title: "E-Commerce Backend API",
    desc: "Spring Boot tabanli e-ticaret API. Urun yonetimi, stok takibi, siparis islemleri, guvenlik katmani.",
    tags: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
  },
  "web-sayfam": {
    title: "Portfolyo Web Sitesi",
    desc: "Kisisel portfolyo sitesi. React + Tailwind CSS ile responsive tasarim.",
    tags: ["React", "Tailwind CSS", "Vercel"],
  },
};

// BonusProof system achievements (without gambling references)
const bonusProofAchievements = [
  {
    title: "Gercek Zamanli Veri Isleme Platformu",
    desc: "Coklu kaynaklardan gelen yuksek hacimli verileri gercek zamanli toplayan, isleme ve anomali tespit eden platform. Dakikada binlerce veri noktasini analiz eder.",
    tags: ["Python", "WebSocket", "Redis", "PostgreSQL"],
    metric: "10K+ veri noktasi/dk",
  },
  {
    title: "Pattern Recognition & Risk Skorlama Motoru",
    desc: "Kullanici davranis kaliplarini analiz eden, anomali tespit eden ve otomatik risk skoru ureten sistem. Coklu parametre bazli karar motoru.",
    tags: ["Python", "Pattern Matching", "Risk Engine", "ML"],
    metric: "%95 tespit orani",
  },
  {
    title: "Otomatik Izleme & Alert Bot Sistemi",
    desc: "Telegram tabanli otomatik izleme botu. Veri kaynaklarini 7/24 tarar, belirlenen kosullarda anlik uyari gonderir, raporlama yapar.",
    tags: ["Node.js", "Telegram API", "Cron Jobs", "MongoDB"],
    metric: "7/24 otonom calisma",
  },
  {
    title: "Cok Kaynakli Veri Toplama & API Entegrasyonu",
    desc: "30+ farkli API kaynagindan veri toplayip birlestiren, normalize eden ve analiz icin hazirlayan otomatik pipeline sistemi.",
    tags: ["TypeScript", "REST API", "Data Pipeline", "Docker"],
    metric: "30+ API entegrasyonu",
  },
];

export default function GitHubProjects({ repos, profile }: Props) {
  const featuredNames = Object.keys(projectMeta);
  const featured = repos.filter((r) => featuredNames.includes(r.name));

  return (
    <section id="projects" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-secondary tracking-wider">
            PROJELER & DENEYIM
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            Gelistirdigim{" "}
            <span className="text-gradient">Sistemler</span>
          </h2>
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface border border-border">
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="w-10 h-10 rounded-full ring-2 ring-primary/20"
            />
            <div>
              <div className="font-semibold text-sm">@{profile.login}</div>
              <div className="text-xs text-foreground/40">
                {profile.public_repos} repo &middot; GitHub ile senkronize
              </div>
            </div>
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
          </div>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-sm border border-border rounded-xl hover:border-primary/30 transition-colors"
          >
            Tum Projeleri Gor &rarr;
          </a>
        </motion.div>

        {/* Featured GitHub Projects */}
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-foreground/40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          Acik Kaynak Projeler
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {featured.map((repo, i) => {
            const meta = projectMeta[repo.name];
            return (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {meta?.title || repo.name}
                  </h4>
                  <svg className="w-3.5 h-3.5 text-foreground/20 group-hover:text-primary transition-colors shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <p className="text-xs text-foreground/40 leading-relaxed mb-3">
                  {meta?.desc || repo.description || ""}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {(meta?.tags || []).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-foreground/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-[11px] text-foreground/30">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </div>
                  )}
                  <div>
                    {new Date(repo.updated_at).toLocaleDateString("tr-TR", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* BonusProof Systems */}
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">B</span>
          </div>
          Veri Analiz & Otomasyon Sistemleri
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {bonusProofAchievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-surface border border-border hover:border-accent/20 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent shrink-0 ml-2">
                  {item.metric}
                </span>
              </div>
              <p className="text-xs text-foreground/40 leading-relaxed mb-3">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-accent/5 text-foreground/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
