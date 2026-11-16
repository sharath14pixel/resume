import { portfolioData } from "../app/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-24 border-t border-[#1E2C4A]/60 bg-[#070B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Professional Journey</span>
          </div>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Hands-on software engineering experience building production-grade web and mobile client applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-0 sm:pl-4">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-emerald-500/40"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[#1E2C4A] pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 text-xs font-semibold border border-emerald-500/30 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Current Role</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-base text-emerald-400 font-medium mt-1">
                    <Building2 className="w-4 h-4" aria-hidden="true" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#16223D] border border-[#1E2C4A]">
                    <Calendar className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#16223D] border border-[#1E2C4A]">
                    <MapPin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3.5 mb-6">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Tagged */}
              <div className="pt-4 border-t border-[#1E2C4A]/80 flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-2">
                  Key Technologies:
                </span>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-[#111B30] text-emerald-300 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
