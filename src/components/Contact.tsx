"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 px-4 relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent tracking-wider">
            {t.contact.section}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 tracking-tight">
            {t.contact.titleA}
            <span className="text-gradient">{t.contact.titleB}</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-2xl mx-auto text-sm">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Roadmap Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.contact.steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-surface border border-border relative"
            >
              <div className="text-3xl font-bold text-primary/10 absolute top-3 right-4">
                {s.step}
              </div>
              <div className="text-primary text-xs font-mono mb-2">
                {t.contact.stepLabel} {s.step}
              </div>
              <h4 className="font-semibold text-sm mb-1.5">{s.title}</h4>
              <p className="text-xs text-foreground/40 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <motion.a
            href="mailto:sedatirtas.1@gmail.com"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-5 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="font-medium text-sm group-hover:text-primary transition-colors">{t.contact.emailLabel}</div>
            <div className="text-xs text-foreground/40 mt-1">sedatirtas.1@gmail.com</div>
          </motion.a>

          <motion.a
            href="https://github.com/irtassedat"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-5 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div className="font-medium text-sm group-hover:text-primary transition-colors">{t.contact.githubLabel}</div>
            <div className="text-xs text-foreground/40 mt-1">@irtassedat</div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-5 rounded-xl bg-surface border border-border hover:border-secondary/20 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div className="font-medium text-sm group-hover:text-secondary transition-colors">{t.contact.linkedinLabel}</div>
            <div className="text-xs text-foreground/40 mt-1">{t.contact.linkedinName}</div>
          </motion.a>
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border"
        >
          <p className="text-foreground/60 text-sm max-w-xl mx-auto mb-6">
            {t.contact.ctaText}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/irtassedat/turkerler-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-xl text-sm hover:border-primary/30 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              {t.contact.viewSource}
            </a>
            <a
              href="#turkerler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl text-sm hover:opacity-90 transition-opacity"
            >
              {t.contact.backToVision}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
