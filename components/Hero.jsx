import Image from "next/image";
import { portfolioData } from "../app/data/portfolioData";
import {
  ArrowDown,
  FileDown,
  Mail,
  Linkedin,
  Github,
  Code2,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";

export default function Hero() {
  const { personal, education } = portfolioData;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 overflow-hidden ambient-glow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* Headline & Title */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-3"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                {personal.name}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-emerald-400/90 mb-4 tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" aria-hidden="true" />
              <span>{personal.title}</span>
            </p>

            {/* One-line Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personal.intro}
            </p>

            {/* Quick Context Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs sm:text-sm text-slate-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0D1424] border border-[#1E2C4A]">
                <GraduationCap className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>B.Tech CSE ({education.period}) • CGPA {education.cgpa}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0D1424] border border-[#1E2C4A]">
                <MapPin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Action Buttons (Strictly min 44x44px touch targets) */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="min-h-[44px] min-w-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 shadow-md shadow-emerald-950/40 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Sharath_H_Resume.pdf"
                className="min-h-[44px] min-w-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-100 bg-[#0D1424] hover:bg-[#16223D] active:bg-[#1E2C4A] border border-[#1E2C4A] hover:border-emerald-500/50 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                aria-label="Download Sharath H Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="min-h-[44px] min-w-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 hover:text-white bg-transparent hover:bg-slate-800/60 border border-slate-700/80 hover:border-slate-600 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">
                Profiles:
              </span>
              <a
                href="https://www.linkedin.com/in/sharath-h-342218395"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 inline-flex items-center justify-center rounded-lg bg-[#0D1424] border border-[#1E2C4A] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-[#16223D] transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Sharath H on LinkedIn (opens in new tab)"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/sharath14pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 inline-flex items-center justify-center rounded-lg bg-[#0D1424] border border-[#1E2C4A] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-[#16223D] transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Sharath H on GitHub (opens in new tab)"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="https://leetcode.com/u/sharatx_14"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 inline-flex items-center justify-center rounded-lg bg-[#0D1424] border border-[#1E2C4A] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-[#16223D] transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Sharath H on LeetCode (opens in new tab)"
              >
                <Code2 className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Profile Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Subtle ambient light rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 to-teal-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl p-2 bg-[#0D1424] border border-[#1E2C4A] shadow-2xl">
                <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src={personal.portraitUrl}
                    alt="Portrait photograph of Sharath H, aspiring full-stack developer and CSE undergraduate"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle inner shadow gradient for cinematic contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-[#070B12]/90 backdrop-blur-md border border-slate-700/70 text-center">
                    <span className="text-xs font-medium text-slate-200">
                      B.Tech CSE Student • Dr. ACS CE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
