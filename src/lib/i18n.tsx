"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    nav: [
      { href: "#hero", label: "Ana Sayfa" },
      { href: "#about", label: "Hakkımda" },
      { href: "#turkerler", label: "Vizyon" },
      { href: "#market", label: "Analiz" },
      { href: "#architecture", label: "Mimari" },
      { href: "#demo", label: "Demo" },
      { href: "#projects", label: "Projeler" },
      { href: "#tech", label: "Teknolojiler" },
      { href: "#contact", label: "İletişim" },
    ],
    hero: {
      badge: "Türkerler Holding için hazırlanmıştır",
      titleA: "Enerji Portföyünüz İçin",
      titleB: "Veri Odaklı IT Vizyonu",
      desc: "15 aktif santral, 4 ilde dağıtım ağı, 3 şehir hastanesi ve 6 mega projeyi tek tek inceledim. Her birim için özel AI çözüm modülleri tasarladım. Bu portföy, Türkerler'in gerçek operasyonel verileri üzerinden hazırlanmıştır.",
      cta1: "Analiz Raporunu İncele",
      cta2: "Dashboard Prototipi",
      data: {
        header: "TÜRKERLER HOLDİNG — TEMEL VERİLER",
        metrics: [
          { label: "2024 Hasılat", value: "4.2 milyar TL", sub: "+75% YoY büyüme" },
          { label: "Brüt Kâr Marjı", value: "%47.6", sub: "2024 — 2.0 milyar TL" },
          { label: "Kurulu Güç", value: "527 MW", sub: "15 santral aktif" },
          { label: "Hedef Kapasite", value: "3,953 MW", sub: "7.5x büyüme planı" },
        ],
        sub: [
          { label: "Toplam Yatırım", value: "$1.04B" },
          { label: "VEDAŞ 2025", value: "5 milyar TL" },
          { label: "Çalışan", value: "24,000" },
        ],
        ipo: {
          title: "HALKA ARZ SÜRECİ",
          desc: "SPK başvurusu yapıldı (13 Şubat 2026). 250M adet pay, Yıldız Pazar, %20.57 halka açıklık. Gelirin %85'i yeni projelere.",
        },
        source: "Kaynak: KAP, EPDK, VEDAŞ, Turkerler.com",
      },
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Teknolojiyi ",
      titleB: "Enerjiye Dönüştürüyorum",
      bio1: "Full-stack yazılımcı olarak React/Next.js ekosistemi, Java/Spring Boot backend ve modern AI teknolojileri konusunda üretim seviyesinde deneyime sahibim. Özellikle ",
      bio1_s1: "gerçek zamanlı veri işleme",
      bio1_s2: "anomali tespit sistemleri",
      bio1_s3: "otonom ajan mimarileri",
      bio1_end: " alanında çözümler geliştiriyorum.",
      bio2: "Çok kaynaklı veri toplama, pattern recognition ve otomatik risk skorlama konularında geliştirdiğim sistemler, büyük ölçekli operasyonlarda karar destek mekanizması olarak kullanılmaktadır. Bu deneyimi Türkerler Holding'in enerji portföyüne uyarlayarak, 133 şirketten gelen verileri birleştiren ve operasyonel verimliliği artıran bir AI platformu öneriyorum.",
      journey: "YOLCULUK",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, veritabanı yönetimi" },
        { year: "2024-25", title: "QR Menu Platform", desc: "End-to-end restoran yönetim sistemi" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack proje" },
        { year: "2025-26", title: "AI Ajan & Otomasyon Sistemleri", desc: "Claude AI entegrasyonları, Telegram botları, veri işleme platformları" },
      ],
      highlights: [
        { icon: "\u26A1", title: "Full-Stack Geliştirici", desc: "React, Next.js, Node.js, Java/Spring Boot, PostgreSQL, MongoDB ile üretim seviyesinde uygulama geliştirme deneyimi." },
        { icon: "\uD83E\uDD16", title: "AI & Otonom Sistemler", desc: "Claude API, otonom ajan mimarileri, MCP Server entegrasyonu, gerçek zamanlı veri işleyen akıllı sistemler." },
        { icon: "\uD83D\uDCCA", title: "Veri Analiz & Pattern Recognition", desc: "Çok kaynaklı veri toplama, anomali tespiti, risk skorlama ve otomatik raporlama sistemleri." },
        { icon: "\uD83D\uDE80", title: "Otomasyon & Bot Sistemleri", desc: "Telegram bot altyapıları, otomatik izleme/alarm sistemleri, workflow otomasyon ve DevOps." },
      ],
    },
    turkerler: {
      section: "TÜRKERLER HOLDİNG — DERİNLEMESİNE ANALİZ",
      titleA: "527 MW'dan ",
      titleB: "3,953 MW'a",
      subtitle: "Türkerler Holding'in 15 aktif enerji santrali, 6+ mega proje, 3 şehir hastanesi, VEDAŞ dağıtım ağı ve 133 şirketlik yapısını tek tek inceledim. Her birime özel AI çözüm modülü tasarladım.",
      portfolio: "AKTİF SANTRAL PORTFÖYÜ",
      wind: "Rüzgâr",
      hydro: "Hidroelektrik",
      geothermal: "Jeotermal",
      growth: "BÜYÜME YOL HARİTASI — 7.5x KAPASİTE ARTIŞI",
      megaTitle: "Yapım Aşamasındaki ",
      megaTitleB: "Mega Projeler",
      aiContribution: "AI KATKI:",
      vedasTitle: "VEDAŞ — 5 Milyar TL Yatırım Yönetimi",
      healthcareTitle: "Sağlık Kampüsleri (KÖİ) — 25 Yıllık İşletme",
      healthcareAi: "7,300+ yataklı 3 hastanede: enerji tüketim optimizasyonu, tıbbi cihaz bakım tahmini, hasta yoğunluk tahmini, EBRD/IFC raporlama otomasyonu. 25 yıllık işletme döneminde maliyet optimizasyonu kritik.",
      problemsTitle: "Tespit Edilen Sorunlar & ",
      problemsTitleB: "AI Çözüm Modülleri",
      currentIssues: "MEVCUT SORUNLAR",
      aiSolution: "AI ÇÖZÜM MODÜLÜ",
      labels: {
        capacity: "Kapasite",
        area: "Alan",
        investment: "Yatırım",
        status: "Durum",
      },
    },
    market: {
      section: "PAZAR ARAŞTIRMASI & VERİ ANALİZİ",
      titleA: "Verilerle ",
      titleB: "Derinlemesine Analiz",
      subtitle: "EPDK raporları, KAP bildirimleri, sektör benchmarkları ve global AI araştırmalarından derlenen verilerle Türkerler'in konumu.",
      financial: "TÜRKER YENİLENEBİLİR ENERJİ — FİNANSAL PERFORMANS",
      financialSource: "Kaynak: SPK Taslak İzahname, KAP",
      revenue: "Hasılat",
      grossProfit: "Brüt Kâr",
      grossMargin: "Brüt Marj",
      vedasTitle: "VEDAŞ — İL BAZLI KAYIP-KAÇAK ANALİZİ (EPDK 2024)",
      lossRate: "kayıp-kaçak oranı",
      competitorTitle: "SEKTÖR KONUMLANDIRMA — RAKİP KARŞILAŞTIRMA",
      competitorSource: "Türkiye Yenilenebilir Enerji Sektörü 2025",
      tableHeaders: { company: "Şirket", currentMW: "Mevcut MW", targetMW: "Hedef MW", growth: "Büyüme", revenue: "Hasılat" },
      competitorNote: "Kritik farklılaşma: Türker Yenilenebilir 7.5x büyüme hedefiyle sektörün en agresif planına sahip. Bu ölçekte büyüme, manuel IT süreçlerle yönetilemez. Rakipler 1.4-1.7x büyürken, 7.5x büyüyen bir portföyü yönetmek için AI tabanlı otomasyon zorunluluktur — seçim değil.",
      aiTitle: "GLOBAL AI BENCHMARK — ENERJİ SEKTÖRÜNDE AI ETKİSİ",
      aiSource: "Deloitte, McKinsey, IEEE, IRENA 2024-2025",
      projectionTitle: "TÜRKERLER İÇİN PROJEKSİYON",
      projectionText: "527 MW portföyde global benchmarkların alt sınırı uygulandığında bile: plansız duruşta %35 azalma ≈ yıllık ~45 GWh ek üretim, bakım maliyetinde %18 azalma, üretim optimizasyonuyla %3 artış ≈ ~47 GWh. Toplam etki: yıllık ~92 GWh ek üretim + maliyet tasarrufu. 3,953 MW hedefinde bu rakamlar 7.5 katına çıkar.",
      aiFocusHakkari: "AI FIRSAT ANALİZİ — HAKKARİ ODAK",
      hakkariText: "Hakkâri'nin %52.16 kayıp oranı Türkiye ortalamasının 4 katı. Bu tek il için AI tabanlı anomali tespiti ve akıllı sayaç analizi ile kayıp oranının %40'a düşürülmesi bile yıllık ~100 milyon kWh enerji kurtarma anlamına gelir. PLC altyapısı zaten mevcut — eksik olan veri analiz katmanı.",
    },
    architecture: {
      section: "// SİSTEM MİMARİSİ",
      titleA: "Türkerler ",
      titleB: "AI Hub Mimarisi",
      subtitle: "Tüm enerji varlıklarını tek bir AI platformunda birleştiren katmanlı mimari.",
      techTitle: "Kullanılacak Teknolojiler",
      layers: [
        { title: "Veri Kaynakları", items: [
          { name: "VEDAŞ", desc: "650K abone, dağıtım verileri" },
          { name: "JES 1-3", desc: "168 MW jeotermal üretim" },
          { name: "RES", desc: "1,092 MW rüzgâr santralleri" },
          { name: "HES", desc: "124 MW hidroelektrik" },
          { name: "Angoragaz", desc: "Doğalgaz dağıtım & ticaret" },
        ]},
        { title: "Veri Pipeline", items: [
          { name: "Apache Kafka", desc: "Gerçek zamanlı veri akışı" },
          { name: "TimescaleDB", desc: "Zaman serisi veriler" },
          { name: "Data Lake", desc: "137 şirket birleşik veri" },
          { name: "SCADA Bridge", desc: "IoT sensör entegrasyonu" },
        ]},
        { title: "AI Ajan Katmanı", items: [
          { name: "Üretim Analiz Ajanı", desc: "Gerçek zamanlı performans izleme" },
          { name: "Maliyet Optimizasyon Ajanı", desc: "Enerji alım-satım stratejisi" },
          { name: "Bakım Tahmin Ajanı", desc: "Prediktif bakım zamanlama" },
          { name: "Regülasyon Uyum Ajanı", desc: "EPDK uyumluluk takibi" },
          { name: "Portföy Yönetim Ajanı", desc: "Proje dağılım & kaynak optimizasyonu" },
        ]},
        { title: "Çıktı Katmanı", items: [
          { name: "Executive Dashboard", desc: "Üst yönetim için özet görüntü" },
          { name: "Alarm Sistemi", desc: "Anlık bildirim & eskalasyon" },
          { name: "Doğal Dil Arayüzü", desc: "Türkçe soru-cevap sistemi" },
          { name: "Raporlama", desc: "Otomatik haftalık/aylık raporlar" },
        ]},
      ],
    },
    demo: {
      section: "CANLI PROTOTİP",
      titleA: "Türkerler AI Hub ",
      titleB: "Dashboard",
      subtitle: "15 santralin gerçek zamanlı izlenmesi, VEDAŞ dağıtım ağı durumu, yapım aşamasındaki projelerin takibi ve AI ajan uyarıları — tek ekranda.",
      kpis: [
        { label: "Kurulu Güç", sub: "15 santral portföyü" },
        { label: "Aktif Ünite", sub: "1 bakımda, 1 uyarı" },
        { label: "Günlük Üretim", sub: "+3.2% önceki güne göre" },
        { label: "CO₂ Tasarrufu", sub: "Bu hafta toplam" },
      ],
      plantStatus: "SANTRAL DURUMU",
      aiAlerts: "AI AJAN UYARILARI",
      vedasDist: "VEDAŞ DAĞITIM",
      projectProgress: "PROJE İLERLEME",
      live: "Canlı",
      statusLabels: { online: "Aktif", maintenance: "Bakım", warning: "Uyarı" },
      disclaimer: "* Simüle edilmiş verilerle prototip. Gerçek uygulamada SCADA, IoT sensörü, VEDAŞ akıllı sayaç ve ERP entegrasyonuyla canlı veri akışı sağlanır.",
    },
    github: {
      section: "PROJELER & DENEYİM",
      titleA: "Geliştirdiğim ",
      titleB: "Sistemler",
      syncLabel: "GitHub ile senkronize",
      viewAll: "Tüm Projeleri Gör",
      openSource: "Açık Kaynak Projeler",
      dataAnalysis: "Veri Analiz & Otomasyon Sistemleri",
      projectMeta: {
        latestv2: { title: "QR Menu Frontend", desc: "Restoran ve kafelerin dijital menü yönetim sistemi. Responsive UI, kategori filtreleme, sipariş takibi." },
        "qrmenu-backend": { title: "QR Menu Backend API", desc: "Restoran yönetim sistemi backend. Menü CRUD, kullanıcı yetkilendirme, sipariş yönetimi." },
        ecommerce: { title: "E-Commerce Frontend", desc: "Tam kapsamlı e-ticaret platformu. Ürün katalog, sepet yönetimi, ödeme entegrasyonu, kullanıcı paneli." },
        "ecommerce-backendAPI": { title: "E-Commerce Backend API", desc: "Spring Boot tabanlı e-ticaret API. Ürün yönetimi, stok takibi, sipariş işlemleri, güvenlik katmanı." },
        "web-sayfam": { title: "Portföy Web Sitesi", desc: "Kişisel portföy sitesi. React + Tailwind CSS ile responsive tasarım." },
      },
      achievements: [
        { title: "Gerçek Zamanlı Veri İşleme Platformu", desc: "Çoklu kaynaklardan gelen yüksek hacimli verileri gerçek zamanlı toplayan, işleme ve anomali tespit eden platform. Dakikada binlerce veri noktasını analiz eder.", metric: "10K+ veri noktası/dk" },
        { title: "Pattern Recognition & Risk Skorlama Motoru", desc: "Kullanıcı davranış kalıplarını analiz eden, anomali tespit eden ve otomatik risk skoru üreten sistem. Çoklu parametre bazlı karar motoru.", metric: "%95 tespit oranı" },
        { title: "Otomatik İzleme & Alert Bot Sistemi", desc: "Telegram tabanlı otomatik izleme botu. Veri kaynaklarını 7/24 tarar, belirlenen koşullarda anlık uyarı gönderir, raporlama yapar.", metric: "7/24 otonom çalışma" },
        { title: "Çok Kaynaklı Veri Toplama & API Entegrasyonu", desc: "30+ farklı API kaynağından veri toplayıp birleştiren, normalize eden ve analiz için hazırlayan otomatik pipeline sistemi.", metric: "30+ API entegrasyonu" },
      ],
    },
    tech: {
      section: "// TEKNOLOJİ YIĞINI",
      titleA: "Teknik ",
      titleB: "Yetkinlikler",
      categories: ["Frontend", "Backend", "AI & Otomasyon", "DevOps & Altyapı"],
    },
    contact: {
      section: "SONRAKİ ADIMLAR",
      titleA: "Birlikte ",
      titleB: "Başaralım",
      subtitle: "526 MW'dan 3,953 MW'a uzanan büyüme yolculuğunda, AI tabanlı operasyonel mükemmeliyet için önerdiğim yol haritası.",
      steps: [
        { step: "01", title: "Teknik Görüşme", desc: "Mevcut IT altyapısı, veri kaynakları ve öncelikli sorunların detaylı analizi." },
        { step: "02", title: "Pilot Proje", desc: "Tek bir santral veya VEDAŞ bölgesinde AI ajan prototipi ile PoC (Proof of Concept)." },
        { step: "03", title: "Entegrasyon", desc: "SCADA, ERP ve mevcut sistemlere entegrasyon. Data pipeline kurulumu." },
        { step: "04", title: "Ölçeklendirme", desc: "Başarılı pilot sonrası tüm portföye yaygın, 133 şirket için birleşik platform." },
      ],
      stepLabel: "Adım",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat İrtaş",
      ctaText: "Bu portföy, Türkerler Holding'in enerji operasyonları için özel olarak hazırlanmıştır. Tüm teknik detaylar, mimari tasarım ve prototip kodları incelemeye açıktır.",
      viewSource: "Kaynak Kodunu İncele",
      backToVision: "Vizyona Dön",
    },
    footer: {
      name: "Sedat İrtaş",
      tagline: "Türkerler Holding dijital dönüşüm vizyonu — AI ile enerji yönetimi",
      sync: "GitHub ile senkronize",
    },
  },

  en: {
    nav: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#turkerler", label: "Vision" },
      { href: "#market", label: "Analysis" },
      { href: "#architecture", label: "Architecture" },
      { href: "#demo", label: "Demo" },
      { href: "#projects", label: "Projects" },
      { href: "#tech", label: "Technologies" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      badge: "Prepared for Türkerler Holding",
      titleA: "Data-Driven IT Vision",
      titleB: "For Your Energy Portfolio",
      desc: "I've analyzed 15 active power plants, distribution networks across 4 provinces, 3 city hospitals, and 6 mega projects individually. I've designed custom AI solution modules for each unit. This portfolio is based on Türkerler's actual operational data.",
      cta1: "Review Analysis Report",
      cta2: "Dashboard Prototype",
      data: {
        header: "TÜRKERLER HOLDING — KEY DATA",
        metrics: [
          { label: "2024 Revenue", value: "4.2B TL", sub: "+75% YoY growth" },
          { label: "Gross Margin", value: "47.6%", sub: "2024 — 2.0B TL" },
          { label: "Installed Capacity", value: "527 MW", sub: "15 active plants" },
          { label: "Target Capacity", value: "3,953 MW", sub: "7.5x growth plan" },
        ],
        sub: [
          { label: "Total Investment", value: "$1.04B" },
          { label: "VEDAŞ 2025", value: "5B TL" },
          { label: "Employees", value: "24,000" },
        ],
        ipo: {
          title: "IPO PROCESS",
          desc: "CMB application filed (Feb 13, 2026). 250M shares, Star Market, 20.57% free float. 85% of proceeds for new projects.",
        },
        source: "Source: PDP, EMRA, VEDAŞ, Turkerler.com",
      },
    },
    about: {
      section: "ABOUT ME",
      titleA: "Turning Technology ",
      titleB: "Into Energy",
      bio1: "As a full-stack developer, I have production-level experience with the React/Next.js ecosystem, Java/Spring Boot backend, and modern AI technologies. I specialize in ",
      bio1_s1: "real-time data processing",
      bio1_s2: "anomaly detection systems",
      bio1_s3: "autonomous agent architectures",
      bio1_end: ".",
      bio2: "The systems I've developed for multi-source data collection, pattern recognition, and automatic risk scoring are used as decision support mechanisms in large-scale operations. I'm proposing an AI platform that consolidates data from 133 companies in Türkerler Holding's energy portfolio to increase operational efficiency.",
      journey: "JOURNEY",
      timeline: [
        { year: "2024", title: "Workintech Full-Stack Bootcamp", desc: "React, Java/Spring Boot, database management" },
        { year: "2024-25", title: "QR Menu Platform", desc: "End-to-end restaurant management system" },
        { year: "2025", title: "E-Commerce Platform", desc: "React + Spring Boot full-stack project" },
        { year: "2025-26", title: "AI Agent & Automation Systems", desc: "Claude AI integrations, Telegram bots, data processing platforms" },
      ],
      highlights: [
        { icon: "\u26A1", title: "Full-Stack Developer", desc: "Production-level application development with React, Next.js, Node.js, Java/Spring Boot, PostgreSQL, MongoDB." },
        { icon: "\uD83E\uDD16", title: "AI & Autonomous Systems", desc: "Claude API, autonomous agent architectures, MCP Server integration, intelligent real-time data processing systems." },
        { icon: "\uD83D\uDCCA", title: "Data Analysis & Pattern Recognition", desc: "Multi-source data collection, anomaly detection, risk scoring, and automated reporting systems." },
        { icon: "\uD83D\uDE80", title: "Automation & Bot Systems", desc: "Telegram bot infrastructure, automated monitoring/alert systems, workflow automation, and DevOps." },
      ],
    },
    turkerler: {
      section: "TÜRKERLER HOLDING — IN-DEPTH ANALYSIS",
      titleA: "From 527 MW ",
      titleB: "to 3,953 MW",
      subtitle: "I've analyzed Türkerler Holding's 15 active energy plants, 6+ mega projects, 3 city hospitals, VEDAŞ distribution network, and 133-company structure individually. I've designed custom AI solution modules for each unit.",
      portfolio: "ACTIVE PLANT PORTFOLIO",
      wind: "Wind",
      hydro: "Hydroelectric",
      geothermal: "Geothermal",
      growth: "GROWTH ROADMAP — 7.5x CAPACITY INCREASE",
      megaTitle: "Mega Projects ",
      megaTitleB: "Under Construction",
      aiContribution: "AI VALUE:",
      vedasTitle: "VEDAŞ — 5 Billion TL Investment Management",
      healthcareTitle: "Healthcare Campuses (PPP) — 25-Year Operations",
      healthcareAi: "Across 3 hospitals with 7,300+ beds: energy consumption optimization, medical device maintenance prediction, patient density forecasting, EBRD/IFC reporting automation. Cost optimization is critical during the 25-year operation period.",
      problemsTitle: "Identified Problems & ",
      problemsTitleB: "AI Solution Modules",
      currentIssues: "CURRENT PROBLEMS",
      aiSolution: "AI SOLUTION MODULE",
      labels: {
        capacity: "Capacity",
        area: "Area",
        investment: "Investment",
        status: "Status",
      },
    },
    market: {
      section: "MARKET RESEARCH & DATA ANALYSIS",
      titleA: "In-Depth Analysis ",
      titleB: "With Data",
      subtitle: "Türkerler's positioning based on EMRA reports, PDP disclosures, industry benchmarks, and global AI research data.",
      financial: "TÜRKER RENEWABLE ENERGY — FINANCIAL PERFORMANCE",
      financialSource: "Source: CMB Draft Prospectus, PDP",
      revenue: "Revenue",
      grossProfit: "Gross Profit",
      grossMargin: "Gross Margin",
      vedasTitle: "VEDAŞ — PROVINCE-LEVEL LOSS ANALYSIS (EMRA 2024)",
      lossRate: "loss rate",
      competitorTitle: "SECTOR POSITIONING — COMPETITOR COMPARISON",
      competitorSource: "Turkey Renewable Energy Sector 2025",
      tableHeaders: { company: "Company", currentMW: "Current MW", targetMW: "Target MW", growth: "Growth", revenue: "Revenue" },
      competitorNote: "Critical differentiation: Türker Renewable has the sector's most aggressive plan with a 7.5x growth target. Growth at this scale cannot be managed with manual IT processes. While competitors grow 1.4-1.7x, managing a portfolio growing 7.5x requires AI-based automation — not a choice, but a necessity.",
      aiTitle: "GLOBAL AI BENCHMARK — AI IMPACT IN ENERGY SECTOR",
      aiSource: "Deloitte, McKinsey, IEEE, IRENA 2024-2025",
      projectionTitle: "PROJECTION FOR TÜRKERLER",
      projectionText: "Even applying the lower bound of global benchmarks to a 527 MW portfolio: 35% reduction in unplanned downtime ≈ ~45 GWh additional annual production, 18% reduction in maintenance costs, 3% increase through production optimization ≈ ~47 GWh. Total impact: ~92 GWh additional annual production + cost savings. At the 3,953 MW target, these figures increase 7.5x.",
      aiFocusHakkari: "AI OPPORTUNITY ANALYSIS — HAKKARI FOCUS",
      hakkariText: "Hakkari's 52.16% loss rate is 4x the Turkey average. Even reducing the loss rate to 40% through AI-based anomaly detection and smart meter analysis for this single province means ~100 million kWh annual energy recovery. PLC infrastructure already exists — the missing piece is the data analysis layer.",
    },
    architecture: {
      section: "// SYSTEM ARCHITECTURE",
      titleA: "Türkerler ",
      titleB: "AI Hub Architecture",
      subtitle: "Layered architecture unifying all energy assets on a single AI platform.",
      techTitle: "Technologies to be Used",
      layers: [
        { title: "Data Sources", items: [
          { name: "VEDAŞ", desc: "650K subscribers, distribution data" },
          { name: "JES 1-3", desc: "168 MW geothermal production" },
          { name: "WPP", desc: "1,092 MW wind power plants" },
          { name: "HPP", desc: "124 MW hydroelectric" },
          { name: "Angoragaz", desc: "Natural gas distribution & trading" },
        ]},
        { title: "Data Pipeline", items: [
          { name: "Apache Kafka", desc: "Real-time data streaming" },
          { name: "TimescaleDB", desc: "Time series data" },
          { name: "Data Lake", desc: "137 companies unified data" },
          { name: "SCADA Bridge", desc: "IoT sensor integration" },
        ]},
        { title: "AI Agent Layer", items: [
          { name: "Production Analysis Agent", desc: "Real-time performance monitoring" },
          { name: "Cost Optimization Agent", desc: "Energy trading strategy" },
          { name: "Maintenance Prediction Agent", desc: "Predictive maintenance scheduling" },
          { name: "Regulatory Compliance Agent", desc: "EMRA compliance tracking" },
          { name: "Portfolio Management Agent", desc: "Project allocation & resource optimization" },
        ]},
        { title: "Output Layer", items: [
          { name: "Executive Dashboard", desc: "Summary view for top management" },
          { name: "Alert System", desc: "Instant notification & escalation" },
          { name: "Natural Language Interface", desc: "Turkish Q&A system" },
          { name: "Reporting", desc: "Automated weekly/monthly reports" },
        ]},
      ],
    },
    demo: {
      section: "LIVE PROTOTYPE",
      titleA: "Türkerler AI Hub ",
      titleB: "Dashboard",
      subtitle: "Real-time monitoring of 15 plants, VEDAŞ distribution network status, construction project tracking, and AI agent alerts — on a single screen.",
      kpis: [
        { label: "Installed Capacity", sub: "15-plant portfolio" },
        { label: "Active Units", sub: "1 in maintenance, 1 warning" },
        { label: "Daily Production", sub: "+3.2% vs. previous day" },
        { label: "CO₂ Savings", sub: "This week total" },
      ],
      plantStatus: "PLANT STATUS",
      aiAlerts: "AI AGENT ALERTS",
      vedasDist: "VEDAŞ DISTRIBUTION",
      projectProgress: "PROJECT PROGRESS",
      live: "Live",
      statusLabels: { online: "Online", maintenance: "Maintenance", warning: "Warning" },
      disclaimer: "* Prototype with simulated data. In production, live data flows via SCADA, IoT sensors, VEDAŞ smart meters, and ERP integration.",
    },
    github: {
      section: "PROJECTS & EXPERIENCE",
      titleA: "Systems I've ",
      titleB: "Built",
      syncLabel: "Synced with GitHub",
      viewAll: "View All Projects",
      openSource: "Open Source Projects",
      dataAnalysis: "Data Analysis & Automation Systems",
      projectMeta: {
        latestv2: { title: "QR Menu Frontend", desc: "Digital menu management system for restaurants and cafes. Responsive UI, category filtering, order tracking." },
        "qrmenu-backend": { title: "QR Menu Backend API", desc: "Restaurant management system backend. Menu CRUD, user authentication, order management." },
        ecommerce: { title: "E-Commerce Frontend", desc: "Full-scope e-commerce platform. Product catalog, cart management, payment integration, user panel." },
        "ecommerce-backendAPI": { title: "E-Commerce Backend API", desc: "Spring Boot-based e-commerce API. Product management, inventory tracking, order processing, security layer." },
        "web-sayfam": { title: "Portfolio Website", desc: "Personal portfolio website. Responsive design with React + Tailwind CSS." },
      },
      achievements: [
        { title: "Real-Time Data Processing Platform", desc: "Platform that collects, processes, and detects anomalies in high-volume data from multiple sources in real-time. Analyzes thousands of data points per minute.", metric: "10K+ data points/min" },
        { title: "Pattern Recognition & Risk Scoring Engine", desc: "System that analyzes user behavior patterns, detects anomalies, and generates automatic risk scores. Multi-parameter decision engine.", metric: "95% detection rate" },
        { title: "Automated Monitoring & Alert Bot System", desc: "Telegram-based automated monitoring bot. Scans data sources 24/7, sends instant alerts under specified conditions, generates reports.", metric: "24/7 autonomous operation" },
        { title: "Multi-Source Data Collection & API Integration", desc: "Automated pipeline system that collects, consolidates, normalizes, and prepares data for analysis from 30+ different API sources.", metric: "30+ API integrations" },
      ],
    },
    tech: {
      section: "// TECH STACK",
      titleA: "Technical ",
      titleB: "Expertise",
      categories: ["Frontend", "Backend", "AI & Automation", "DevOps & Infrastructure"],
    },
    contact: {
      section: "NEXT STEPS",
      titleA: "Let's ",
      titleB: "Build Together",
      subtitle: "My proposed roadmap for AI-driven operational excellence on the growth journey from 526 MW to 3,953 MW.",
      steps: [
        { step: "01", title: "Technical Meeting", desc: "Detailed analysis of current IT infrastructure, data sources, and priority issues." },
        { step: "02", title: "Pilot Project", desc: "AI agent prototype PoC (Proof of Concept) in a single plant or VEDAŞ region." },
        { step: "03", title: "Integration", desc: "Integration with SCADA, ERP, and existing systems. Data pipeline setup." },
        { step: "04", title: "Scaling", desc: "After successful pilot, rollout across entire portfolio — unified platform for 133 companies." },
      ],
      stepLabel: "Step",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinName: "Sedat Irtas",
      ctaText: "This portfolio was specifically prepared for Türkerler Holding's energy operations. All technical details, architectural designs, and prototype code are available for review.",
      viewSource: "View Source Code",
      backToVision: "Back to Vision",
    },
    footer: {
      name: "Sedat Irtas",
      tagline: "Türkerler Holding digital transformation vision — AI-powered energy management",
      sync: "Synced with GitHub",
    },
  },
};

type Dict = typeof dict;
type Translations = Dict[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "tr",
  setLang: () => {},
  t: dict.tr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("turkerler-lang") as Lang | null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("turkerler-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
