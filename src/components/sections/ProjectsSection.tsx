"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding" style={{ background: "var(--surface)" }}>
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              Things I've Built
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden flex flex-col h-full card-shadow transition-all duration-500"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Image placeholder with gradient */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-40"
                    style={{
                      background: `radial-gradient(circle at 30% 50%, ${project.accentColor}40 0%, transparent 60%)`,
                    }}
                  />
                  <span
                    className="text-5xl font-bold opacity-20 select-none"
                    style={{ color: project.accentColor }}
                  >
                    {project.title[0]}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-all"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-0.5" style={{ color: "var(--text)" }}>
                    {project.title}
                  </h3>
                  <p className="text-xs mb-4" style={{ color: project.accentColor }}>
                    {project.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-tertiary)" }}>
                        <CheckCircle2 size={12} style={{ color: project.accentColor, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-0.5 rounded-full"
                        style={{
                          background: `${project.accentColor}14`,
                          color: project.accentColor,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 hover:opacity-80"
                      style={{
                        background: "var(--surface)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Github size={13} /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-white transition-all duration-200 hover:opacity-90"
                      style={{ background: project.accentColor }}
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
