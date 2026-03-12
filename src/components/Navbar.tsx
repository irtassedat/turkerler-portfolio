"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, Lang } from "@/lib/i18n";

const langs: { key: Lang; label: string }[] = [
  { key: "tr", label: "TR" },
  { key: "en", label: "EN" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">Sİ</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">
              {t.footer.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-border mx-2" />
            <div className="flex items-center rounded-lg overflow-hidden border border-border/50">
              {langs.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLang(l.key)}
                  className={`px-2.5 py-1.5 text-[10px] font-mono transition-all ${
                    lang === l.key
                      ? "bg-primary text-white"
                      : "text-foreground/40 hover:text-foreground hover:bg-surface-light"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center rounded-lg overflow-hidden border border-border/50">
              {langs.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLang(l.key)}
                  className={`px-1.5 py-1 text-[9px] font-mono transition-all ${
                    lang === l.key ? "bg-primary text-white" : "text-foreground/40"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-surface-light transition-colors"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-3 space-y-1">
              {t.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
