import { portfolioData } from "../app/data/portfolioData";
import { GraduationCap, Award, Compass, BookOpen, CheckCircle2 } from "lucide-react";

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24 border-t border-[#1E2C4A]/60 bg-[#070B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Background & Story</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative / Bio */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            {personal.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Core Values */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0D1424] border border-[#1E2C4A]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">Clean Architecture</h3>
                  <p className="text-xs text-slate-400">Maintainable, testable, and documented codebase.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0D1424] border border-[#1E2C4A]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">Rapid Adaptability</h3>
                  <p className="text-xs text-slate-400">Quick to learn new frameworks, APIs, and dev workflows.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 sm:p-7 relative overflow-hidden shadow-xl">
              {/* Accent Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                    Education
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6 border-b border-[#1E2C4A] pb-5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Institution</span>
                  <span className="font-medium text-slate-200 text-right">
                    {education.institution}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Timeline</span>
                  <span className="font-medium text-slate-200">
                    {education.period}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Location</span>
                  <span className="font-medium text-slate-200">
                    {education.location}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-slate-400 font-medium">Cumulative Grade</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-sm border border-emerald-500/40">
                    <Award className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    CGPA {education.cgpa}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  Key Academic Focus
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {education.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
