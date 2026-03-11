"use client";

import { motion } from "framer-motion";

/* ───── OPERATIONAL PORTFOLIO ───── */
const operationalPlants = {
  wind: [
    { name: "Zonguldak RES", capacity: 120, location: "Sakarya", status: "Aktif" },
    { name: "Tire RES", capacity: 50, location: "Izmir", status: "Aktif" },
    { name: "Sapdagi RES", capacity: 48, location: "Balikesir", status: "Aktif" },
    { name: "Gelibolu RES", capacity: 36, location: "Canakkale", status: "Aktif" },
    { name: "Meryem RES", capacity: 30, location: "Bilecik", status: "Aktif" },
    { name: "Yenihisar RES", capacity: 20, location: "Aydin", status: "Aktif" },
    { name: "Barbaros RES", capacity: 12, location: "Tekirdag", status: "Aktif" },
    { name: "Gokdag RES", capacity: 10, location: "Kocaeli", status: "Aktif" },
    { name: "MSP-1 RES", capacity: 8, location: "Istanbul", status: "Aktif" },
  ],
  hydro: [
    { name: "Akinci HES", capacity: 85, location: "Ardahan", status: "Aktif" },
    { name: "Angutlu 1-2 HES", capacity: 23, location: "Giresun", status: "Aktif" },
    { name: "Demirci HES", capacity: 13, location: "Sinop", status: "Aktif" },
  ],
  geothermal: [
    { name: "JES-3", capacity: 30, location: "Manisa", status: "Aktif" },
    { name: "JES-1", capacity: 24, location: "Manisa", status: "Aktif" },
    { name: "JES-2", capacity: 24, location: "Manisa", status: "Aktif" },
  ],
};

const totalOperational =
  operationalPlants.wind.reduce((s, p) => s + p.capacity, 0) +
  operationalPlants.hydro.reduce((s, p) => s + p.capacity, 0) +
  operationalPlants.geothermal.reduce((s, p) => s + p.capacity, 0);

/* ───── MEGA PROJECTS UNDER DEVELOPMENT ───── */
const megaProjects = [
  {
    name: "Sivas YEKA RES",
    capacity: "500 MW",
    investment: "\u20AC700M",
    status: "Yapim Asamasinda",
    color: "#3b82f6",
    details: [
      "Turkiye'nin tek seferde en buyuk ruzgar yatirimi",
      "Yillik 1.75 TWh temiz elektrik uretimi",
      "650,000 hanenin yillik tuketimine esit",
      "1.1 milyon ton CO2 azaltimi/yil",
      "210 km iletim hatti insaati",
      "6 yillik tamamlanma sureci",
    ],
    aiValue:
      "500 MW portfoyde turbin performans izleme, ruzgar tahmini ve uretim optimizasyonu icin AI ajanlari kritik. Yillik uretimde %2 artis = ~35 GWh ek uretim.",
  },
  {
    name: "Saros Korfezi Offshore RES",
    capacity: "1,500 MW",
    investment: "Mega Yatirim",
    status: "Planlama",
    color: "#06b6d4",
    details: [
      "Turkiye'nin oncu deniz ustu ruzgar projesi",
      "Saros Korfezi lokasyonunda",
      "Mevcut portfoyun 3 katindan buyuk tek proje",
      "Avrupa offshore deneyimiyle uyumlu",
    ],
    aiValue:
      "Offshore santrallerde uzaktan izleme zorunlu. AI ajan sistemi deniz kosullarini analiz edip, dalga/ruzgar tahminiyle uretim planlama ve bakimi optimize eder.",
  },
  {
    name: "Kahramanmaras + Van YEKA GES",
    capacity: "80 MW",
    investment: "YEKA 2025",
    status: "Sozlesme",
    color: "#f59e0b",
    details: [
      "2 ayri gunes enerji santrali (40+40 MW)",
      "Turkerler'in ilk buyuk gunes yatirimlari",
      "Ocak 2026'da sozlesme imzalandi",
      "Hibrit GES potansiyeli (mevcut RES'lerle entegrasyon)",
    ],
    aiValue:
      "GES + RES hibrit yonetimi icin AI ajan: gun ici uretim dengeleme, iki kaynak arasinda optimal dagitim, enerji depolama zamanlama.",
  },
  {
    name: "Beypazari RES",
    capacity: "20 MW",
    investment: "On Lisansli",
    status: "Gelistirme",
    color: "#8b5cf6",
    details: [
      "Ankara Beypazari'nda ruzgar santrali",
      "On lisans asamasinda",
      "Merkeze yakin lokasyon avantaji",
    ],
    aiValue:
      "Yeni santrallerin devreye alinmasinda AI tabanli commissioning ve performans benchmark sistemi.",
  },
  {
    name: "Cotiujeni RES (Moldova)",
    capacity: "50.4 MW",
    investment: "Uluslararasi",
    status: "Satin Alindi",
    color: "#10b981",
    details: [
      "Aralik 2025'te satin alindi",
      "Turkerler'in Avrupa pazarina acilimi",
      "AB enerji piyasasina erisim",
    ],
    aiValue:
      "Coklu ulke portfoy yonetimi: farkli regulasyonlar, para birimleri ve piyasa koşullari icin merkezi AI yonetim platformu.",
  },
  {
    name: "Kapasite Modernizasyonu",
    capacity: "+573 MW",
    investment: "Mevcut Portfoy",
    status: "Devam Eden",
    color: "#ec4899",
    details: [
      "15 mevcut santralde turbin ve ekipman modernizasyonu",
      "Verimlilik artisi ve omur uzatma",
      "Repowering ve uprating islemleri",
    ],
    aiValue:
      "Modernizasyon onceligini AI belirler: hangi santralde, hangi turbinde, ne zaman mudahale edilecegi veri odakli karar.",
  },
];

/* ───── VEDAŞ SPECIFIC ───── */
const vedasData = {
  coverage: "Van, Bitlis, Mus, Hakkari",
  subscribers: "840,000",
  population: "2.1 milyon",
  area: "47,368 km\u00B2",
  investment2025: "5 milyar TL",
  lossRate: "%28 hedef (500K hane esdeger kurtarma)",
  smartMeters: "PLC tabanli akilli sayac altyapisi",
};

/* ───── HEALTHCARE PPP ───── */
const healthcareProjects = [
  {
    name: "Ankara Etlik Saglik Kampusu",
    beds: "4,050 yatak",
    area: "1.1M m\u00B2",
    investment: "\u20AC1.1 milyar",
    status: "Aktif (2022)",
    note: "Dunyanin en buyuk hastane projelerinden",
  },
  {
    name: "Izmir Bayrakli Saglik Kampusu",
    beds: "2,060 yatak",
    area: "611K m\u00B2",
    investment: "\u20AC1.1 milyar",
    status: "Aktif",
    note: "Turkiye'nin 3. buyuk hastanesi",
  },
  {
    name: "Kocaeli Saglik Kampusu",
    beds: "1,200+ yatak",
    area: "380K m\u00B2",
    investment: "PPP",
    status: "Aktif (2023)",
    note: "Turkiye'nin en buyuk 5 sehir hastanesinden",
  },
];

/* ───── PROBLEMS & AI SOLUTIONS ───── */
const criticalProblems = [
  {
    area: "VEDAS: 5 Milyar TL Yatirim Yonetimi",
    icon: "\u26A1",
    severity: "Kritik",
    problems: [
      "47,368 km\u00B2 alanda 840K abone - kayip kacak oranlari cok yuksek",
      "Akilli sayac verisi toplanıyor ama AI analizle degerlendirilemiyor",
      "5 milyar TL'lik 2025 yatiriminin onceliklendirmesi veri odakli degil",
      "Trafo bazli kayip analizi yapilamiyor, mudahale reaktif",
    ],
    solutions: [
      "Trafo/mahalle/saat bazli kayip-kacak AI anomali tespiti",
      "Yatirim onceliklendirme: hangi hat, hangi bolge, ne zaman",
      "Akilli sayac verisinden tuketim tahmini ve pik yuk yonetimi",
      "Abone sikayet desenleri analizi ile proaktif mudahale",
    ],
    roi: "Kayip oraninda %1 azalma = 18 milyon kWh/yil kurtarma",
  },
  {
    area: "Santral Duruslari & Bakim",
    icon: "\uD83D\uDD27",
    severity: "Yuksek",
    problems: [
      "15 santralde plansiz makine duruslari — ozellikle jeotermal ve ruzgar",
      "Bakim zamanlamasi deneyime dayali, sensor verisi analiz edilmiyor",
      "SCADA verileri toplanıyor ama prediktif model yok",
      "Yedek parca stogu tahmine dayali degil, maliyetli fazla stok",
    ],
    solutions: [
      "SCADA + IoT verisiyle turbin/jenerator ariza tahmini (2-4 hafta once)",
      "Vibrasyon, sicaklik, basinc trendlerinden anomali skoru",
      "Optimum bakim zamanlama: uretim kaybini minimize eden plan",
      "Yedek parca stogu: talep tahmini ile %20 stok maliyeti azalma",
    ],
    roi: "Plansiz durusta %30 azalma = yillik 50+ GWh ek uretim",
  },
  {
    area: "Raporlama & Karar Destek",
    icon: "\uD83D\uDCCB",
    severity: "Yuksek",
    problems: [
      "133 sirketten gelen veriler birlestirilemiyor — Excel bazli manuel raporlama",
      "Halka arz sureci: SPK'nin istedigi veri seffafligi saglanamıyor",
      "Ust yonetim icin anlik konsolide dashboard yok",
      "ESG/surdurulebilirlik raporlamasi tamamen manuel, hata orani yuksek",
    ],
    solutions: [
      "133 sirketin otomatik veri toplama ve birlesik Data Lake",
      "Halka arz destegi: yatirimci dashboard, gercek zamanli KPI'lar",
      "CEO/CFO icin tek-ekran konsolide yonetim paneli",
      "Otomatik ESG metrikleri: CO2, su, atik, enerji verimliligi",
    ],
    roi: "Raporlama suresi %80 azalma + halka arz hazirlik hizi",
  },
  {
    area: "Coklu Proje Koordinasyonu",
    icon: "\uD83C\uDFD7\uFE0F",
    severity: "Orta-Yuksek",
    problems: [
      "Sivas 500MW + Saros 1500MW + GES 80MW + modernizasyon ayni anda",
      "Farkli muteahhitler, farkli takvimler, merkezi izleme yok",
      "Insaat + enerji + saglik projeleri arasi kaynak catismasi",
      "Uluslararasi projeler (Cotiujeni) farkli regulasyon gereksinimleri",
    ],
    solutions: [
      "AI ajan tabanli merkezi proje portfoy yonetimi",
      "Otomatik risk skorlama ve gecikme erken uyari sistemi",
      "Kaynak cakismasi tespiti ve optimal dagitim onerisi",
      "Cok ulkeli regulasyon uyum takip ajani",
    ],
    roi: "Proje gecikmelerinde %25 azalma, kaynak kullanimi optimizasyonu",
  },
];

/* ───── GROWTH ROADMAP ───── */
const growthPhases = [
  { label: "Mevcut Portfoy", mw: 527, pct: 13, color: "#10b981", detail: "15 santral: 9 RES + 3 HES + 3 JES" },
  { label: "Beypazari + Modernizasyon", mw: 1120, pct: 28, color: "#34d399", detail: "+573 MW kapasite artisi + Beypazari 20 MW" },
  { label: "GES + Cotiujeni", mw: 1240, pct: 31, color: "#06b6d4", detail: "+80 MW Gunes + 50.4 MW Moldova" },
  { label: "Sivas YEKA", mw: 1740, pct: 44, color: "#3b82f6", detail: "+500 MW — Turkiye'nin en buyuk RES" },
  { label: "Saros Offshore", mw: 3240, pct: 82, color: "#8b5cf6", detail: "+1,500 MW deniz ustu ruzgar" },
  { label: "Uzun Vade Hedef", mw: 3953, pct: 100, color: "#f59e0b", detail: "Turkiye'nin en buyuk yenilenebilir portfoyu" },
];

export default function TurkerlerVision() {
  return (
    <section id="turkerler" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-wider">
            TURKERLER HOLDING &mdash; DERINLEMESINE ANALIZ
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            527 MW&apos;dan{" "}
            <span className="text-gradient">3,953 MW&apos;a</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-3xl mx-auto text-sm">
            Turkerler Holding&apos;in 15 aktif enerji santrali, 6+ mega proje,
            3 sehir hastanesi, VEDAS dagitim agi ve 133 sirketlik yapisini
            tek tek inceledim. Her birime ozel AI cozum modulu tasarladim.
          </p>
        </motion.div>

        {/* ───── OPERATIONAL PLANTS MAP ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono text-foreground/40 tracking-wider">
              AKTIF SANTRAL PORTFOYU — {totalOperational} MW
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              15 Santral
            </span>
          </div>

          {/* Wind */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-blue-400">
                Ruzgar — {operationalPlants.wind.reduce((s, p) => s + p.capacity, 0)} MW
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
              {operationalPlants.wind.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-blue-500/5 border border-blue-500/10 text-center">
                  <div className="text-[10px] font-medium truncate">{p.name}</div>
                  <div className="text-xs font-bold text-blue-400">{p.capacity} MW</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hydro */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold text-cyan-400">
                Hidroelektrik — {operationalPlants.hydro.reduce((s, p) => s + p.capacity, 0)} MW
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {operationalPlants.hydro.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-cyan-400">{p.capacity} MW</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Geothermal */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-semibold text-red-400">
                Jeotermal — {operationalPlants.geothermal.reduce((s, p) => s + p.capacity, 0)} MW
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {operationalPlants.geothermal.map((p) => (
                <div key={p.name} className="p-2 rounded-lg bg-red-500/5 border border-red-500/10 text-center">
                  <div className="text-[10px] font-medium">{p.name}</div>
                  <div className="text-xs font-bold text-red-400">{p.capacity} MW</div>
                  <div className="text-[9px] text-foreground/25">{p.location}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ───── GROWTH ROADMAP ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-surface border border-border"
        >
          <h3 className="text-sm font-mono text-foreground/40 mb-6 tracking-wider">
            BUYUME YOL HARITASI &mdash; 7.5x KAPASITE ARTISI
          </h3>
          <div className="space-y-3">
            {growthPhases.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-36 shrink-0 text-right">
                  <span className="text-xs text-foreground/30">{g.label}</span>
                </div>
                <div className="flex-1 h-7 bg-surface-light rounded overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded flex items-center px-2 min-w-[60px]"
                    style={{ backgroundColor: g.color + "25" }}
                  >
                    <span className="text-[11px] font-bold whitespace-nowrap" style={{ color: g.color }}>
                      {g.mw.toLocaleString()} MW
                    </span>
                  </motion.div>
                </div>
                <div className="w-48 shrink-0 text-[10px] text-foreground/25 hidden lg:block">
                  {g.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───── MEGA PROJECTS ───── */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            Yapim Asamasindaki{" "}
            <span className="text-gradient">Mega Projeler</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {megaProjects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-surface border border-border hover:border-opacity-50 transition-all"
                style={{ borderColor: p.color + "00" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.color + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: p.color + "15", color: p.color }}>
                    {p.capacity}
                  </span>
                  <span className="text-[10px] text-foreground/30">{p.status}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{p.name}</h4>
                <ul className="space-y-1 mb-3">
                  {p.details.slice(0, 3).map((d) => (
                    <li key={d} className="text-[11px] text-foreground/40 flex items-start gap-1.5">
                      <span className="text-foreground/20 mt-0.5 shrink-0">&bull;</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border">
                  <div className="text-[10px] font-mono text-primary/60 mb-1">AI KATKI:</div>
                  <p className="text-[10px] text-foreground/35 leading-relaxed">{p.aiValue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───── VEDAŞ SPECIAL SECTION ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{"\u26A1"}</span>
            <div>
              <h3 className="font-bold">VEDAS &mdash; 5 Milyar TL Yatirim Yonetimi</h3>
              <p className="text-xs text-foreground/40">{vedasData.coverage} &middot; {vedasData.subscribers} abone &middot; {vedasData.area}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {[
              { label: "2025 Yatirim", value: vedasData.investment2025, color: "#f59e0b" },
              { label: "Abone Sayisi", value: vedasData.subscribers, color: "#10b981" },
              { label: "Kayip Hedef", value: vedasData.lossRate, color: "#ef4444" },
              { label: "Hizmet Nufusu", value: vedasData.population, color: "#3b82f6" },
            ].map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-surface/50 border border-border/50 text-center">
                <div className="text-[10px] text-foreground/30 uppercase tracking-wider">{m.label}</div>
                <div className="text-sm font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-surface/50 border border-border/50">
            <div className="text-[10px] font-mono text-yellow-500/60 mb-2">AI COZUM MODULU:</div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              VEDAS&apos;in PLC tabanli akilli sayac altyapisi uzerinden trafo bazli kayip-kacak
              analizi, abone tuketim anomali tespiti, pik yuk tahmini ve 5 milyar TL&apos;lik
              yatirim butcesinin veri odakli onceliklendirmesi. Kayip oraninda %1 azalma =
              yillik 18 milyon kWh enerji kurtarma.
            </p>
          </div>
        </motion.div>

        {/* ───── HEALTHCARE PPP ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span>{"\uD83C\uDFE5"}</span> Saglik Kampusleri (KOI) &mdash; 25 Yillik Isletme
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {healthcareProjects.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <h4 className="font-semibold text-sm mb-3">{h.name}</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-foreground/30">Kapasite</span><span className="font-medium">{h.beds}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">Alan</span><span className="font-medium">{h.area}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">Yatirim</span><span className="font-medium">{h.investment}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">Durum</span><span className="text-primary font-medium">{h.status}</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-border text-[10px] text-foreground/30">{h.note}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-lg bg-surface border border-border">
            <div className="text-[10px] font-mono text-foreground/30 mb-1">AI KATKI:</div>
            <p className="text-xs text-foreground/40">
              7,300+ yatakli 3 hastanede: enerji tuketim optimizasyonu, tibbi cihaz bakim
              tahmini, hasta yoğunluk tahmini, EBRD/IFC raporlama otomasyonu.
              25 yillik isletme doneminde maliyet optimizasyonu kritik.
            </p>
          </div>
        </motion.div>

        {/* ───── CRITICAL PROBLEMS & SOLUTIONS ───── */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">
            Tespit Edilen Sorunlar &amp;{" "}
            <span className="text-gradient">AI Cozum Modulleri</span>
          </h3>
          <div className="space-y-4">
            {criticalProblems.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="font-bold text-sm flex-1">{item.area}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.severity === "Kritik" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {item.severity}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono text-red-400/50 mb-2 tracking-wider">MEVCUT SORUNLAR</div>
                    <ul className="space-y-1.5">
                      {item.problems.map((p) => (
                        <li key={p} className="text-[11px] text-foreground/40 flex items-start gap-2">
                          <span className="text-red-400/40 shrink-0">&times;</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-primary/50 mb-2 tracking-wider">AI COZUM MODULU</div>
                    <ul className="space-y-1.5">
                      {item.solutions.map((s) => (
                        <li key={s} className="text-[11px] text-foreground/50 flex items-start gap-2">
                          <span className="text-primary/60 shrink-0">&check;</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                  <span className="text-[10px] font-mono text-accent/50">ROI:</span>
                  <span className="text-xs text-accent font-medium">{item.roi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
