"use client";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-12 border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <a href="#" className="text-sm font-semibold" style={{ color: "var(--text)" }}>
              {personalInfo.firstName} {personalInfo.lastName}
              <span style={{ color: "var(--accent)" }}>.</span>
            </a>
            <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
              {personalInfo.title} · {personalInfo.location}
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { href: personalInfo.links.github, icon: <Github size={16} />, label: "GitHub" },
              { href: personalInfo.links.linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: personalInfo.links.leetcode, icon: <ExternalLink size={16} />, label: "LeetCode" },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--text-tertiary)" }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            © {year} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
