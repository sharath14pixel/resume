"use client";

import { useState } from "react";
import { portfolioData } from "../app/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const { personal, social } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const socialIcons = {
    LinkedIn: Linkedin,
    GitHub: Github,
    LeetCode: Code2,
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 border-t border-[#1E2C4A]/60 bg-[#070B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Open for campus placement opportunities, full-stack software roles, and technical discussions. Let&apos;s build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with One-Click Copy */}
            <div className="rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 hover:border-emerald-500/40 transition-colors shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="block text-sm sm:text-base font-semibold text-slate-100 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[44px] min-w-[44px] px-3 py-2 rounded-lg bg-[#16223D] border border-[#1E2C4A] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 hover:border-emerald-500/40 transition-colors shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="block text-base font-semibold text-slate-100 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 hover:border-emerald-500/40 transition-colors shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Current Location
                  </span>
                  <p className="text-base font-semibold text-slate-100">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Coding Network Profiles */}
            <div className="rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 shadow-lg">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-4">
                Connect Across Platforms
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {social.map((item) => {
                  const Icon = socialIcons[item.name] || Mail;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex items-center justify-center gap-2 p-3 rounded-xl bg-[#16223D] border border-[#1E2C4A] text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-[#1C2C4E] text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
                      aria-label={`${item.name} profile (${item.username})`}
                    >
                      <Icon className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6 text-slate-100 font-bold text-xl">
                <Sparkles className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                <h3>Send a Direct Message</h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <Check className="w-10 h-10 text-emerald-400 mx-auto mb-3" aria-hidden="true" />
                  <h4 className="text-lg font-bold text-slate-100 mb-1">
                    Opening your email client...
                  </h4>
                  <p className="text-sm text-slate-300">
                    If your email client didn&apos;t open automatically, feel free to write directly to{" "}
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-emerald-400 underline font-medium"
                    >
                      {personal.email}
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-[#16223D] border border-[#1E2C4A] text-slate-100 placeholder-slate-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-[#16223D] border border-[#1E2C4A] text-slate-100 placeholder-slate-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Subject <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Campus Placement / Full-Stack Role Opportunity"
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-[#16223D] border border-[#1E2C4A] text-slate-100 placeholder-slate-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Sharath, I came across your portfolio and wanted to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-[#16223D] border border-[#1E2C4A] text-slate-100 placeholder-slate-400 text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 shadow-md shadow-emerald-950/40 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
