import { portfolioData } from "../app/data/portfolioData";
import {
  Code,
  Globe,
  Server,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    Languages: Code,
    Web: Globe,
    Frameworks: Server,
    Databases: Database,
    Tools: Wrench,
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-24 border-t border-[#1E2C4A]/60 bg-[#070B12]/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            A focused toolkit spanning object-oriented software engineering, modern frontends, robust REST APIs, and system-level performance.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] || Code;
            return (
              <div
                key={group.category}
                className="group rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 hover:border-emerald-500/40 hover:bg-[#111B30] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">
                        {group.category}
                      </h3>
                      <span className="text-xs text-slate-400">
                        {group.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1E2C4A]/60">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#16223D] text-slate-200 border border-[#1E2C4A] hover:border-emerald-400/60 hover:text-emerald-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
