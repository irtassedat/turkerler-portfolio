"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

/* ───── OPERATIONAL PORTFOLIO ───── */
const operationalPlantsTr = {
  wind: [
    { name: "Zonguldak RES", capacity: 120, location: "Sakarya", status: "Aktif" },
    { name: "Tire RES", capacity: 50, location: "İzmir", status: "Aktif" },
    { name: "Sapdağı RES", capacity: 48, location: "Balıkesir", status: "Aktif" },
    { name: "Gelibolu RES", capacity: 36, location: "Çanakkale", status: "Aktif" },
    { name: "Meryem RES", capacity: 30, location: "Bilecik", status: "Aktif" },
    { name: "Yenihisar RES", capacity: 20, location: "Aydın", status: "Aktif" },
    { name: "Barbaros RES", capacity: 12, location: "Tekirdağ", status: "Aktif" },
    { name: "Gökdağ RES", capacity: 10, location: "Kocaeli", status: "Aktif" },
    { name: "MSP-1 RES", capacity: 8, location: "İstanbul", status: "Aktif" },
  ],
  hydro: [
    { name: "Akıncı HES", capacity: 85, location: "Ardahan", status: "Aktif" },
    { name: "Angutlu 1-2 HES", capacity: 23, location: "Giresun", status: "Aktif" },
    { name: "Demirci HES", capacity: 13, location: "Sinop", status: "Aktif" },
  ],
  geothermal: [
    { name: "JES-3", capacity: 30, location: "Manisa", status: "Aktif" },
    { name: "JES-1", capacity: 24, location: "Manisa", status: "Aktif" },
    { name: "JES-2", capacity: 24, location: "Manisa", status: "Aktif" },
  ],
};

const operationalPlantsEn = {
  wind: [
    { name: "Zonguldak WPP", capacity: 120, location: "Sakarya", status: "Active" },
    { name: "Tire WPP", capacity: 50, location: "İzmir", status: "Active" },
    { name: "Sapdağı WPP", capacity: 48, location: "Balıkesir", status: "Active" },
    { name: "Gelibolu WPP", capacity: 36, location: "Çanakkale", status: "Active" },
    { name: "Meryem WPP", capacity: 30, location: "Bilecik", status: "Active" },
    { name: "Yenihisar WPP", capacity: 20, location: "Aydın", status: "Active" },
    { name: "Barbaros WPP", capacity: 12, location: "Tekirdağ", status: "Active" },
    { name: "Gökdağ WPP", capacity: 10, location: "Kocaeli", status: "Active" },
    { name: "MSP-1 WPP", capacity: 8, location: "İstanbul", status: "Active" },
  ],
  hydro: [
    { name: "Akıncı HPP", capacity: 85, location: "Ardahan", status: "Active" },
    { name: "Angutlu 1-2 HPP", capacity: 23, location: "Giresun", status: "Active" },
    { name: "Demirci HPP", capacity: 13, location: "Sinop", status: "Active" },
  ],
  geothermal: [
    { name: "GES-3", capacity: 30, location: "Manisa", status: "Active" },
    { name: "GES-1", capacity: 24, location: "Manisa", status: "Active" },
    { name: "GES-2", capacity: 24, location: "Manisa", status: "Active" },
  ],
};

/* ───── MEGA PROJECTS UNDER DEVELOPMENT ───── */
const megaProjectsTr = [
  {
    name: "Sivas YEKA RES",
    capacity: "500 MW",
    investment: "\u20AC700M",
    status: "Yapım Aşamasında",
    color: "#3b82f6",
    details: [
      "Türkiye'nin tek seferde en büyük rüzgâr yatırımı",
      "Yıllık 1.75 TWh temiz elektrik üretimi",
      "650,000 hanenin yıllık tüketimine eşit",
      "1.1 milyon ton CO2 azaltımı/yıl",
      "210 km iletim hattı inşaatı",
      "6 yıllık tamamlanma süreci",
    ],
    aiValue:
      "500 MW portföyde türbin performans izleme, rüzgâr tahmini ve üretim optimizasyonu için AI ajanları kritik. Yıllık üretimde %2 artış = ~35 GWh ek üretim.",
  },
  {
    name: "Saros Körfezi Offshore RES",
    capacity: "1,500 MW",
    investment: "Mega Yatırım",
    status: "Planlama",
    color: "#06b6d4",
    details: [
      "Türkiye'nin öncü deniz üstü rüzgâr projesi",
      "Saros Körfezi lokasyonunda",
      "Mevcut portföyün 3 katından büyük tek proje",
      "Avrupa offshore deneyimiyle uyumlu",
    ],
    aiValue:
      "Offshore santrallerde uzaktan izleme zorunlu. AI ajan sistemi deniz koşullarını analiz edip, dalga/rüzgâr tahminiyle üretim planlama ve bakımı optimize eder.",
  },
  {
    name: "Kahramanmaraş + Van YEKA GES",
    capacity: "80 MW",
    investment: "YEKA 2025",
    status: "Sözleşme",
    color: "#f59e0b",
    details: [
      "2 ayrı güneş enerji santrali (40+40 MW)",
      "Türkerler'in ilk büyük güneş yatırımları",
      "Ocak 2026'da sözleşme imzalandı",
      "Hibrit GES potansiyeli (mevcut RES'lerle entegrasyon)",
    ],
    aiValue:
      "GES + RES hibrit yönetimi için AI ajan: gün içi üretim dengeleme, iki kaynak arasında optimal dağıtım, enerji depolama zamanlama.",
  },
  {
    name: "Beypazarı RES",
    capacity: "20 MW",
    investment: "Ön Lisanslı",
    status: "Geliştirme",
    color: "#8b5cf6",
    details: [
      "Ankara Beypazarı'nda rüzgâr santrali",
      "Ön lisans aşamasında",
      "Merkeze yakın lokasyon avantajı",
    ],
    aiValue:
      "Yeni santrallerin devreye alınmasında AI tabanlı commissioning ve performans benchmark sistemi.",
  },
  {
    name: "Cotiujeni RES (Moldova)",
    capacity: "50.4 MW",
    investment: "Uluslararası",
    status: "Satın Alındı",
    color: "#10b981",
    details: [
      "Aralık 2025'te satın alındı",
      "Türkerler'in Avrupa pazarına açılımı",
      "AB enerji piyasasına erişim",
    ],
    aiValue:
      "Çoklu ülke portföy yönetimi: farklı regülasyonlar, para birimleri ve piyasa koşulları için merkezi AI yönetim platformu.",
  },
  {
    name: "Kapasite Modernizasyonu",
    capacity: "+573 MW",
    investment: "Mevcut Portföy",
    status: "Devam Eden",
    color: "#ec4899",
    details: [
      "15 mevcut santralde türbin ve ekipman modernizasyonu",
      "Verimlilik artışı ve ömür uzatma",
      "Repowering ve uprating işlemleri",
    ],
    aiValue:
      "Modernizasyon önceliğini AI belirler: hangi santralde, hangi türbinde, ne zaman müdahale edileceği veri odaklı karar.",
  },
];

const megaProjectsEn = [
  {
    name: "Sivas YEKA WPP",
    capacity: "500 MW",
    investment: "\u20AC700M",
    status: "Under Construction",
    color: "#3b82f6",
    details: [
      "Turkey's largest single wind energy investment",
      "1.75 TWh annual clean electricity generation",
      "Equivalent to annual consumption of 650,000 households",
      "1.1 million tons CO2 reduction/year",
      "210 km transmission line construction",
      "6-year completion timeline",
    ],
    aiValue:
      "AI agents critical for turbine performance monitoring, wind forecasting, and production optimization across a 500 MW portfolio. 2% increase in annual production = ~35 GWh additional output.",
  },
  {
    name: "Saros Bay Offshore WPP",
    capacity: "1,500 MW",
    investment: "Mega Investment",
    status: "Planning",
    color: "#06b6d4",
    details: [
      "Turkey's pioneering offshore wind project",
      "Located at Saros Bay",
      "Single project 3x larger than current portfolio",
      "Aligned with European offshore experience",
    ],
    aiValue:
      "Remote monitoring is mandatory for offshore plants. AI agent system analyzes sea conditions, optimizes production planning and maintenance with wave/wind forecasting.",
  },
  {
    name: "Kahramanmaraş + Van YEKA SPP",
    capacity: "80 MW",
    investment: "YEKA 2025",
    status: "Contracted",
    color: "#f59e0b",
    details: [
      "2 separate solar power plants (40+40 MW)",
      "Türkerler's first major solar investments",
      "Contract signed in January 2026",
      "Hybrid SPP potential (integration with existing WPPs)",
    ],
    aiValue:
      "AI agent for SPP + WPP hybrid management: intraday production balancing, optimal distribution between two sources, energy storage scheduling.",
  },
  {
    name: "Beypazarı WPP",
    capacity: "20 MW",
    investment: "Pre-Licensed",
    status: "Development",
    color: "#8b5cf6",
    details: [
      "Wind power plant in Ankara Beypazarı",
      "In pre-licensing phase",
      "Central location advantage",
    ],
    aiValue:
      "AI-based commissioning and performance benchmark system for new plant deployment.",
  },
  {
    name: "Cotiujeni WPP (Moldova)",
    capacity: "50.4 MW",
    investment: "International",
    status: "Acquired",
    color: "#10b981",
    details: [
      "Acquired in December 2025",
      "Türkerler's expansion into the European market",
      "Access to EU energy market",
    ],
    aiValue:
      "Multi-country portfolio management: centralized AI management platform for different regulations, currencies, and market conditions.",
  },
  {
    name: "Capacity Modernization",
    capacity: "+573 MW",
    investment: "Existing Portfolio",
    status: "Ongoing",
    color: "#ec4899",
    details: [
      "Turbine and equipment modernization across 15 existing plants",
      "Efficiency improvement and lifespan extension",
      "Repowering and uprating operations",
    ],
    aiValue:
      "AI determines modernization priority: data-driven decisions on which plant, which turbine, and when to intervene.",
  },
];

/* ───── VEDAŞ SPECIFIC ───── */
const vedasDataTr = {
  coverage: "Van, Bitlis, Muş, Hakkâri",
  subscribers: "840,000",
  population: "2.1 milyon",
  area: "47,368 km\u00B2",
  investment2025: "5 milyar TL",
  lossRate: "%28 hedef (500K hane eşdeğer kurtarma)",
  smartMeters: "PLC tabanlı akıllı sayaç altyapısı",
  labels: {
    investment: "2025 Yatırım",
    subscribers: "Abone Sayısı",
    lossTarget: "Kayıp Hedef",
    servicePopulation: "Hizmet Nüfusu",
  },
  aiModule: "AI ÇÖZÜM MODÜLÜ:",
  aiText:
    "VEDAŞ'ın PLC tabanlı akıllı sayaç altyapısı üzerinden trafo bazlı kayıp-kaçak analizi, abone tüketim anomali tespiti, pik yük tahmini ve 5 milyar TL'lik yatırım bütçesinin veri odaklı önceliklendirmesi. Kayıp oranında %1 azalma = yıllık 18 milyon kWh enerji kurtarma.",
};

const vedasDataEn = {
  coverage: "Van, Bitlis, Muş, Hakkâri",
  subscribers: "840,000",
  population: "2.1 million",
  area: "47,368 km\u00B2",
  investment2025: "5 billion TL",
  lossRate: "28% target (500K household equivalent recovery)",
  smartMeters: "PLC-based smart meter infrastructure",
  labels: {
    investment: "2025 Investment",
    subscribers: "Subscribers",
    lossTarget: "Loss Target",
    servicePopulation: "Service Population",
  },
  aiModule: "AI SOLUTION MODULE:",
  aiText:
    "Transformer-level loss analysis via VEDAŞ's PLC-based smart meter infrastructure, subscriber consumption anomaly detection, peak load forecasting, and data-driven prioritization of the 5 billion TL investment budget. 1% reduction in loss rate = 18 million kWh annual energy recovery.",
};

/* ───── HEALTHCARE PPP ───── */
const healthcareProjectsTr = [
  {
    name: "Ankara Etlik Sağlık Kampüsü",
    beds: "4,050 yatak",
    area: "1.1M m\u00B2",
    investment: "\u20AC1.1 milyar",
    status: "Aktif (2022)",
    note: "Dünyanın en büyük hastane projelerinden",
  },
  {
    name: "İzmir Bayraklı Sağlık Kampüsü",
    beds: "2,060 yatak",
    area: "611K m\u00B2",
    investment: "\u20AC1.1 milyar",
    status: "Aktif",
    note: "Türkiye'nin 3. büyük hastanesi",
  },
  {
    name: "Kocaeli Sağlık Kampüsü",
    beds: "1,200+ yatak",
    area: "380K m\u00B2",
    investment: "PPP",
    status: "Aktif (2023)",
    note: "Türkiye'nin en büyük 5 şehir hastanesinden",
  },
];

const healthcareProjectsEn = [
  {
    name: "Ankara Etlik Healthcare Campus",
    beds: "4,050 beds",
    area: "1.1M m\u00B2",
    investment: "\u20AC1.1 billion",
    status: "Active (2022)",
    note: "One of the world's largest hospital projects",
  },
  {
    name: "İzmir Bayraklı Healthcare Campus",
    beds: "2,060 beds",
    area: "611K m\u00B2",
    investment: "\u20AC1.1 billion",
    status: "Active",
    note: "Turkey's 3rd largest hospital",
  },
  {
    name: "Kocaeli Healthcare Campus",
    beds: "1,200+ beds",
    area: "380K m\u00B2",
    investment: "PPP",
    status: "Active (2023)",
    note: "One of Turkey's top 5 city hospitals",
  },
];

/* ───── PROBLEMS & AI SOLUTIONS ───── */
const criticalProblemsTr = [
  {
    area: "VEDAŞ: 5 Milyar TL Yatırım Yönetimi",
    icon: "\u26A1",
    severity: "Kritik",
    problems: [
      "47,368 km\u00B2 alanda 840K abone — kayıp kaçak oranları çok yüksek",
      "Akıllı sayaç verisi toplanıyor ama AI analizle değerlendirilemiyor",
      "5 milyar TL'lik 2025 yatırımının önceliklendirmesi veri odaklı değil",
      "Trafo bazlı kayıp analizi yapılamıyor, müdahale reaktif",
    ],
    solutions: [
      "Trafo/mahalle/saat bazlı kayıp-kaçak AI anomali tespiti",
      "Yatırım önceliklendirme: hangi hat, hangi bölge, ne zaman",
      "Akıllı sayaç verisinden tüketim tahmini ve pik yük yönetimi",
      "Abone şikâyet desenleri analizi ile proaktif müdahale",
    ],
    roi: "Kayıp oranında %1 azalma = 18 milyon kWh/yıl kurtarma",
  },
  {
    area: "Santral Duruşları & Bakım",
    icon: "\uD83D\uDD27",
    severity: "Yüksek",
    problems: [
      "15 santralde plansız makine duruşları — özellikle jeotermal ve rüzgâr",
      "Bakım zamanlaması deneyime dayalı, sensör verisi analiz edilmiyor",
      "SCADA verileri toplanıyor ama prediktif model yok",
      "Yedek parça stoğu tahmine dayalı değil, maliyetli fazla stok",
    ],
    solutions: [
      "SCADA + IoT verisiyle türbin/jeneratör arıza tahmini (2-4 hafta önce)",
      "Vibrasyon, sıcaklık, basınç trendlerinden anomali skoru",
      "Optimum bakım zamanlama: üretim kaybını minimize eden plan",
      "Yedek parça stoğu: talep tahmini ile %20 stok maliyeti azalma",
    ],
    roi: "Plansız duruşta %30 azalma = yıllık 50+ GWh ek üretim",
  },
  {
    area: "Raporlama & Karar Destek",
    icon: "\uD83D\uDCCB",
    severity: "Yüksek",
    problems: [
      "133 şirketten gelen veriler birleştirilemiyor — Excel bazlı manuel raporlama",
      "Halka arz süreci: SPK'nın istediği veri şeffaflığı sağlanamıyor",
      "Üst yönetim için anlık konsolide dashboard yok",
      "ESG/sürdürülebilirlik raporlaması tamamen manuel, hata oranı yüksek",
    ],
    solutions: [
      "133 şirketin otomatik veri toplama ve birleşik Data Lake",
      "Halka arz desteği: yatırımcı dashboard, gerçek zamanlı KPI'lar",
      "CEO/CFO için tek-ekran konsolide yönetim paneli",
      "Otomatik ESG metrikleri: CO2, su, atık, enerji verimliliği",
    ],
    roi: "Raporlama süresi %80 azalma + halka arz hazırlık hızı",
  },
  {
    area: "Çoklu Proje Koordinasyonu",
    icon: "\uD83C\uDFD7\uFE0F",
    severity: "Orta-Yüksek",
    problems: [
      "Sivas 500MW + Saros 1500MW + GES 80MW + modernizasyon aynı anda",
      "Farklı müteahhitler, farklı takvimler, merkezi izleme yok",
      "İnşaat + enerji + sağlık projeleri arası kaynak çatışması",
      "Uluslararası projeler (Cotiujeni) farklı regülasyon gereksinimleri",
    ],
    solutions: [
      "AI ajan tabanlı merkezi proje portföy yönetimi",
      "Otomatik risk skorlama ve gecikme erken uyarı sistemi",
      "Kaynak çakışması tespiti ve optimal dağıtım önerisi",
      "Çok ülkeli regülasyon uyum takip ajanı",
    ],
    roi: "Proje gecikmelerinde %25 azalma, kaynak kullanımı optimizasyonu",
  },
];

const criticalProblemsEn = [
  {
    area: "VEDAŞ: 5 Billion TL Investment Management",
    icon: "\u26A1",
    severity: "Critical",
    problems: [
      "840K subscribers across 47,368 km\u00B2 — loss-theft rates extremely high",
      "Smart meter data is collected but not analyzed with AI",
      "Prioritization of 5 billion TL 2025 investment is not data-driven",
      "Transformer-level loss analysis not possible, intervention is reactive",
    ],
    solutions: [
      "Transformer/neighborhood/hourly loss-theft AI anomaly detection",
      "Investment prioritization: which line, which region, when",
      "Consumption forecasting and peak load management from smart meter data",
      "Proactive intervention through subscriber complaint pattern analysis",
    ],
    roi: "1% reduction in loss rate = 18 million kWh/year recovery",
  },
  {
    area: "Plant Downtime & Maintenance",
    icon: "\uD83D\uDD27",
    severity: "High",
    problems: [
      "Unplanned machine downtime across 15 plants — especially geothermal and wind",
      "Maintenance scheduling is experience-based, sensor data not analyzed",
      "SCADA data is collected but no predictive model exists",
      "Spare parts inventory not forecast-based, costly excess stock",
    ],
    solutions: [
      "Turbine/generator failure prediction with SCADA + IoT data (2-4 weeks ahead)",
      "Anomaly scoring from vibration, temperature, pressure trends",
      "Optimal maintenance scheduling: plan that minimizes production loss",
      "Spare parts inventory: 20% stock cost reduction with demand forecasting",
    ],
    roi: "30% reduction in unplanned downtime = 50+ GWh additional annual production",
  },
  {
    area: "Reporting & Decision Support",
    icon: "\uD83D\uDCCB",
    severity: "High",
    problems: [
      "Data from 133 companies cannot be consolidated — Excel-based manual reporting",
      "IPO process: CMB-required data transparency not achievable",
      "No real-time consolidated dashboard for top management",
      "ESG/sustainability reporting entirely manual, high error rate",
    ],
    solutions: [
      "Automatic data collection and unified Data Lake for 133 companies",
      "IPO support: investor dashboard, real-time KPIs",
      "Single-screen consolidated management panel for CEO/CFO",
      "Automated ESG metrics: CO2, water, waste, energy efficiency",
    ],
    roi: "80% reduction in reporting time + IPO readiness acceleration",
  },
  {
    area: "Multi-Project Coordination",
    icon: "\uD83C\uDFD7\uFE0F",
    severity: "Medium-High",
    problems: [
      "Sivas 500MW + Saros 1500MW + SPP 80MW + modernization simultaneously",
      "Different contractors, different schedules, no centralized monitoring",
      "Resource conflicts between construction + energy + healthcare projects",
      "International projects (Cotiujeni) have different regulatory requirements",
    ],
    solutions: [
      "AI agent-based centralized project portfolio management",
      "Automatic risk scoring and delay early warning system",
      "Resource conflict detection and optimal allocation recommendation",
      "Multi-country regulatory compliance tracking agent",
    ],
    roi: "25% reduction in project delays, resource utilization optimization",
  },
];

/* ───── GROWTH ROADMAP ───── */
const growthPhasesTr = [
  { label: "Mevcut Portföy", mw: 527, pct: 13, color: "#10b981", detail: "15 santral: 9 RES + 3 HES + 3 JES" },
  { label: "Beypazarı + Modernizasyon", mw: 1120, pct: 28, color: "#34d399", detail: "+573 MW kapasite artışı + Beypazarı 20 MW" },
  { label: "GES + Cotiujeni", mw: 1240, pct: 31, color: "#06b6d4", detail: "+80 MW Güneş + 50.4 MW Moldova" },
  { label: "Sivas YEKA", mw: 1740, pct: 44, color: "#3b82f6", detail: "+500 MW — Türkiye'nin en büyük RES" },
  { label: "Saros Offshore", mw: 3240, pct: 82, color: "#8b5cf6", detail: "+1,500 MW deniz üstü rüzgâr" },
  { label: "Uzun Vade Hedef", mw: 3953, pct: 100, color: "#f59e0b", detail: "Türkiye'nin en büyük yenilenebilir portföyü" },
];

const growthPhasesEn = [
  { label: "Current Portfolio", mw: 527, pct: 13, color: "#10b981", detail: "15 plants: 9 WPP + 3 HPP + 3 GPP" },
  { label: "Beypazarı + Modernization", mw: 1120, pct: 28, color: "#34d399", detail: "+573 MW capacity increase + Beypazarı 20 MW" },
  { label: "SPP + Cotiujeni", mw: 1240, pct: 31, color: "#06b6d4", detail: "+80 MW Solar + 50.4 MW Moldova" },
  { label: "Sivas YEKA", mw: 1740, pct: 44, color: "#3b82f6", detail: "+500 MW — Turkey's largest WPP" },
  { label: "Saros Offshore", mw: 3240, pct: 82, color: "#8b5cf6", detail: "+1,500 MW offshore wind" },
  { label: "Long-Term Target", mw: 3953, pct: 100, color: "#f59e0b", detail: "Turkey's largest renewable portfolio" },
];

export default function TurkerlerVision() {
  const { lang, t } = useLang();

  const operationalPlants = lang === "tr" ? operationalPlantsTr : operationalPlantsEn;
  const megaProjects = lang === "tr" ? megaProjectsTr : megaProjectsEn;
  const vedasData = lang === "tr" ? vedasDataTr : vedasDataEn;
  const healthcareProjects = lang === "tr" ? healthcareProjectsTr : healthcareProjectsEn;
  const criticalProblems = lang === "tr" ? criticalProblemsTr : criticalProblemsEn;
  const growthPhases = lang === "tr" ? growthPhasesTr : growthPhasesEn;

  const totalOperational =
    operationalPlants.wind.reduce((s, p) => s + p.capacity, 0) +
    operationalPlants.hydro.reduce((s, p) => s + p.capacity, 0) +
    operationalPlants.geothermal.reduce((s, p) => s + p.capacity, 0);

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
            {t.turkerler.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.turkerler.titleA}
            <span className="text-gradient">{t.turkerler.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-3xl mx-auto text-sm">
            {t.turkerler.subtitle}
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
              {t.turkerler.portfolio} &mdash; {totalOperational} MW
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              15 {lang === "tr" ? "Santral" : "Plants"}
            </span>
          </div>

          {/* Wind */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold text-blue-400">
                {t.turkerler.wind} &mdash; {operationalPlants.wind.reduce((s, p) => s + p.capacity, 0)} MW
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
                {t.turkerler.hydro} &mdash; {operationalPlants.hydro.reduce((s, p) => s + p.capacity, 0)} MW
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
                {t.turkerler.geothermal} &mdash; {operationalPlants.geothermal.reduce((s, p) => s + p.capacity, 0)} MW
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
            {t.turkerler.growth}
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
            {t.turkerler.megaTitle}
            <span className="text-gradient">{t.turkerler.megaTitleB}</span>
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
                  <div className="text-[10px] font-mono text-primary/60 mb-1">{t.turkerler.aiContribution}</div>
                  <p className="text-[10px] text-foreground/35 leading-relaxed">{p.aiValue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───── VEDAS SPECIAL SECTION ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{"\u26A1"}</span>
            <div>
              <h3 className="font-bold">{t.turkerler.vedasTitle}</h3>
              <p className="text-xs text-foreground/40">
                {vedasData.coverage} &middot; {vedasData.subscribers} {lang === "tr" ? "abone" : "subscribers"} &middot; {vedasData.area}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {[
              { label: vedasData.labels.investment, value: vedasData.investment2025, color: "#f59e0b" },
              { label: vedasData.labels.subscribers, value: vedasData.subscribers, color: "#10b981" },
              { label: vedasData.labels.lossTarget, value: vedasData.lossRate, color: "#ef4444" },
              { label: vedasData.labels.servicePopulation, value: vedasData.population, color: "#3b82f6" },
            ].map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-surface/50 border border-border/50 text-center">
                <div className="text-[10px] text-foreground/30 uppercase tracking-wider">{m.label}</div>
                <div className="text-sm font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-lg bg-surface/50 border border-border/50">
            <div className="text-[10px] font-mono text-yellow-500/60 mb-2">{vedasData.aiModule}</div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              {vedasData.aiText}
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
            <span>{"\uD83C\uDFE5"}</span> {t.turkerler.healthcareTitle}
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
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.capacity}</span><span className="font-medium">{h.beds}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.area}</span><span className="font-medium">{h.area}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.investment}</span><span className="font-medium">{h.investment}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/30">{t.turkerler.labels.status}</span><span className="text-primary font-medium">{h.status}</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-border text-[10px] text-foreground/30">{h.note}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-lg bg-surface border border-border">
            <div className="text-[10px] font-mono text-foreground/30 mb-1">{t.turkerler.aiContribution}</div>
            <p className="text-xs text-foreground/40">
              {t.turkerler.healthcareAi}
            </p>
          </div>
        </motion.div>

        {/* ───── CRITICAL PROBLEMS & SOLUTIONS ───── */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8">
            {t.turkerler.problemsTitle}
            <span className="text-gradient">{t.turkerler.problemsTitleB}</span>
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
                    item.severity === "Kritik" || item.severity === "Critical" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {item.severity}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono text-red-400/50 mb-2 tracking-wider">{t.turkerler.currentIssues}</div>
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
                    <div className="text-[10px] font-mono text-primary/50 mb-2 tracking-wider">{t.turkerler.aiSolution}</div>
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
