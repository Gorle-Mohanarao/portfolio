"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggle, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[980px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            {personalInfo.firstName[0]}{personalInfo.lastName[0]}
            <span className="text-[var(--accent)]">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggle}
                className="p-2 rounded-full transition-all duration-200 hover:bg-[var(--surface)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={16} style={{ color: "var(--text-secondary)" }} />
                ) : (
                  <Moon size={16} style={{ color: "var(--text-secondary)" }} />
                )}
              </button>
            )}

            <a
              href="#contact"
              className="hidden md:flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-[var(--accent)] text-white transition-all duration-200 hover:opacity-90"
            >
              Hire Me
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={18} style={{ color: "var(--text)" }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] glass flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Menu
              </span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} style={{ color: "var(--text)" }} />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-light transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
