"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Language: "#0071e3",
  Frontend: "#5e5ce6",
  Backend: "#30d158",
  Database: "#ff9f0a",
  Styling: "#ff375f",
  State: "#64d2ff",
  Tools: "#bf5af2",
};

export function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="section-padding" style={{ background: "var(--surface)" }}>
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Skills
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              Technologies I Work With
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const color = categoryColors[skill.category] || "#0071e3";
            return (
              <FadeIn key={skill.name} delay={i * 0.04}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="relative group rounded-2xl p-5 cursor-default transition-all duration-300 card-shadow"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${color}14 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative">
                    {/* Category badge */}
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full mb-3 inline-block"
                      style={{ background: `${color}18`, color }}
                    >
                      {skill.category}
                    </span>
                    <div className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
                      {skill.name}
                    </div>
                    {/* Progress bar */}
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: "var(--surface-2)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: color }}
                      />
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
