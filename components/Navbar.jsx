"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "../app/data/portfolioData";
import { Menu, X, FileDown, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = portfolioData.navLinks.map((link) =>
        link.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#070B12]/90 backdrop-blur-md border-b border-[#1E2C4A]/80 shadow-lg shadow-black/40"
          : "bg-[#070B12]/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between"
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-slate-100 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1.5 transition-colors"
          aria-label="Sharath H - Home"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/60 transition-colors">
            <Terminal className="w-5 h-5 text-emerald-400" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base sm:text-lg text-slate-100 leading-tight">
              Sharath H
            </span>
            <span className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {portfolioData.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                    : "text-slate-300 hover:text-slate-100 hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Sharath_H_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-950/50 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            aria-label="Download Sharath H Resume (PDF)"
          >
            <FileDown className="w-4 h-4" aria-hidden="true" />
            <span>Resume</span>
          </a>

          {/* Hamburger Button (44x44px touch target) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/60 text-slate-300 hover:text-slate-100 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-colors"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-200" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-slate-200" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-[#070B12]/95 backdrop-blur-xl border-b border-[#1E2C4A] shadow-2xl transition-all duration-200 px-4 pt-3 pb-6 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          {portfolioData.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`min-h-[44px] px-4 py-3 rounded-lg text-base font-medium flex items-center transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-semibold"
                    : "text-slate-300 hover:text-slate-100 hover:bg-slate-800/80"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 border-t border-slate-800 mt-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sharath_H_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="min-h-[44px] w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-md transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <FileDown className="w-5 h-5" aria-hidden="true" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
