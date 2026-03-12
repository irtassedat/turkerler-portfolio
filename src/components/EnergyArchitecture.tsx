"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const layerColors = ["#f59e0b", "#3b82f6", "#10b981", "#8b5cf6"];

export default function EnergyArchitecture() {
  const { t } = useLang();

  const layers = t.architecture.layers.map(
    (layer: { title: string; items: { name: string; desc: string }[] }, i: number) => ({
      ...layer,
      color: layerColors[i] || layerColors[0],
    })
  );

  return (
    <section id="architecture" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent">
            {t.architecture.section}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            {t.architecture.titleA}
            <span className="text-gradient">{t.architecture.titleB}</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            {t.architecture.subtitle}
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-6">
          {layers.map((layer: { title: string; color: string; items: { name: string; desc: string }[] }, layerIndex: number) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: layerIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: layerIndex * 0.15 }}
            >
              {/* Layer Header */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
                <h3 className="font-bold text-lg" style={{ color: layer.color }}>
                  {layer.title}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: `linear-gradient(to right, ${layer.color}40, transparent)`,
                  }}
                />
              </div>

              {/* Layer Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 ml-6">
                {layer.items.map((item: { name: string; desc: string }, i: number) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: layerIndex * 0.15 + i * 0.05 }}
                    className="p-4 rounded-lg bg-surface border border-border hover:border-opacity-50 transition-all cursor-default group"
                    style={{
                      borderColor: `${layer.color}20`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${layer.color}60`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${layer.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${layer.color}20`;
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-foreground/40 mt-1">
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Arrow between layers */}
              {layerIndex < layers.length - 1 && (
                <div className="flex justify-center my-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-px h-6 bg-gradient-to-b from-foreground/20 to-foreground/5" />
                    <div className="text-foreground/20">&#9660;</div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-surface border border-border"
        >
          <h4 className="font-bold text-center mb-4">
            {t.architecture.techTitle}
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Claude API",
              "Anthropic Agent SDK",
              "Next.js",
              "React",
              "Node.js",
              "Python",
              "Apache Kafka",
              "TimescaleDB",
              "PostgreSQL",
              "Docker",
              "Kubernetes",
              "MQTT",
              "Redis",
              "GraphQL",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
