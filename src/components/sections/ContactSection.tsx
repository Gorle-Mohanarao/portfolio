"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Linkedin, Github } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { personalInfo } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) => `
    w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200
    ${errors[field]
      ? "ring-1 ring-red-400"
      : "ring-0 focus:ring-1 focus:ring-[var(--accent)]"}
  `;

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-[680px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--text)" }}>
              Let's Work Together
            </h2>
            <p className="text-base font-light" style={{ color: "var(--text-secondary)" }}>
              Have a project in mind or just want to say hello?
            </p>
          </div>
        </FadeIn>

        {/* Quick links */}
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {[
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={14} />, label: personalInfo.email },
              { href: personalInfo.links.linkedin, icon: <Linkedin size={14} />, label: "LinkedIn" },
              { href: personalInfo.links.github, icon: <Github size={14} />, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm transition-all duration-200 hover:scale-[1.02]"
                style={{ color: "var(--text-secondary)" }}
              >
                <span style={{ color: "var(--accent)" }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Form card */}
        <FadeIn delay={0.1}>
          <div
            className="rounded-3xl p-8 md:p-10 card-shadow"
            style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(48,209,88,0.15)" }}
                >
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-4 px-6 py-2.5 rounded-xl text-sm font-medium"
                  style={{ background: "var(--surface)", color: "var(--text-secondary)" }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                    placeholder="Your name"
                    className={inputClass("name")}
                    style={{
                      background: "var(--surface)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                  />
                  {errors.name && <p className="text-xs mt-1 text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                    placeholder="your@email.com"
                    className={inputClass("email")}
                    style={{
                      background: "var(--surface)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                  />
                  {errors.email && <p className="text-xs mt-1 text-red-400">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: undefined }); }}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass("message")} resize-none`}
                    style={{
                      background: "var(--surface)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                  />
                  {errors.message && <p className="text-xs mt-1 text-red-400">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 rounded-xl text-sm font-medium text-white flex items-center justify-center gap-2 transition-opacity"
                  style={{ background: "var(--accent)", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
