"use client";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-[680px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              Where I've Worked
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "var(--border)" }}
          />

          {experience.map((exp, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.15}>
              <div className="relative pl-16 pb-12">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 + i * 0.15 }}
                  className="absolute left-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #0071e3, #5e5ce6)",
                  }}
                >
                  <Briefcase size={18} className="text-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="rounded-3xl p-8 card-shadow"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--accent)" }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Type badge */}
                  <span
                    className="inline-block text-[11px] font-medium px-2 py-0.5 rounded mb-5"
                    style={{ background: "rgba(0,113,227,0.1)", color: "var(--accent)" }}
                  >
                    {exp.type}
                  </span>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "var(--bg)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
