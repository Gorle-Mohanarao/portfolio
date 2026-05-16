"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { personalInfo } from "@/lib/data";

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "3+", label: "Projects Built" },
  { value: "2", label: "Production Apps" },
  { value: "40%", label: "UX Improvement" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              The Developer Behind
              <br />
              the Code
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left — summary */}
          <FadeIn delay={0.1} direction="right">
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {personalInfo.summary}
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                Currently seeking high-impact software engineering roles where I can apply my technical skills and continue learning in a collaborative environment.
              </p>

              {/* Contact details */}
              <div className="space-y-3 pt-2">
                {[
                  { icon: <MapPin size={14} />, text: personalInfo.location },
                  { icon: <Mail size={14} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <Phone size={14} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                ].map(({ icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent)" }}>{icon}</span>
                    {href ? (
                      <a href={href} className="text-sm hover:text-[var(--accent)] transition-colors">
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm">{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — stats grid */}
          <FadeIn delay={0.2} direction="left">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl p-6 hover-lift card-shadow"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="text-3xl font-semibold mb-1 text-gradient-blue"
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
