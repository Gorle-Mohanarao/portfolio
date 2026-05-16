"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { education, certifications } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-[680px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Education
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              Academic Background
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />

          {education.map((edu, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <div className="relative pl-16 pb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 + i * 0.1 }}
                  className="absolute left-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: edu.highlight
                      ? "linear-gradient(135deg, #0071e3, #5e5ce6)"
                      : "var(--surface-2)",
                  }}
                >
                  <GraduationCap
                    size={18}
                    className={edu.highlight ? "text-white" : ""}
                    style={edu.highlight ? {} : { color: "var(--text-tertiary)" }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="rounded-3xl p-6 card-shadow transition-all"
                  style={{
                    background: "var(--surface)",
                    border: edu.highlight ? "1px solid rgba(0,113,227,0.2)" : "1px solid var(--border)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                      {edu.degree}
                    </h3>
                    <span
                      className="text-xs px-3 py-1 rounded-full shrink-0"
                      style={{ background: "var(--surface-2)", color: "var(--text-tertiary)" }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "var(--accent)" }}>
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2">
                    <Award size={13} style={{ color: "var(--text-tertiary)" }} />
                    <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <FadeIn delay={0.4}>
            <div className="mt-8 ml-16">
              <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>
                Certifications
              </h3>
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 p-4 rounded-2xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span className="text-xl">{cert.icon}</span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {cert.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
