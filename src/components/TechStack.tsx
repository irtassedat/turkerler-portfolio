"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const categories = [
  {
    color: "#3b82f6",
    techs: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 70 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    color: "#10b981",
    techs: [
      { name: "Node.js", level: 85 },
      { name: "Java / Spring Boot", level: 75 },
      { name: "Python", level: 70 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "REST API / GraphQL", level: 85 },
    ],
  },
  {
    color: "#8b5cf6",
    techs: [
      { name: "Claude API / SDK", level: 85 },
      { name: "Otonom Ajanlar", level: 80 },
      { name: "MCP Servers", level: 75 },
      { name: "RAG Sistemleri", level: 70 },
      { name: "Telegram Bot API", level: 90 },
      { name: "Workflow Otomasyon", level: 80 },
    ],
  },
  {
    color: "#f59e0b",
    techs: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "CI/CD Pipeline", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux", level: 75 },
    ],
  },
];

export default function TechStack() {
  const { t } = useLang();

  return (
    <section id="tech" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary">
            {t.tech.section}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            {t.tech.titleA}
            <span className="text-gradient">{t.tech.titleB}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, catIndex) => {
            const title = t.tech.categories[catIndex];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <h3 className="font-bold" style={{ color: cat.color }}>
                    {title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.techs.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{tech.name}</span>
                        <span className="text-xs text-foreground/40">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + i * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${cat.color}80, ${cat.color})`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
