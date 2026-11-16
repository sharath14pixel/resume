import { portfolioData } from "../app/data/portfolioData";
import { Trophy, Medal, Flame, Building, ArrowUpRight } from "lucide-react";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-16 sm:py-24 border-t border-[#1E2C4A]/60 bg-[#070B12]/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Competitive Milestones</span>
          </div>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Achievements &amp; Hackathons
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Proven track record in high-intensity collegiate hackathons, ideathons, and algorithmic debugging challenges.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 hover:border-emerald-500/40 hover:bg-[#111B30] transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    {idx === 0 ? (
                      <Trophy className="w-5 h-5 text-amber-400" aria-hidden="true" />
                    ) : (
                      <Medal className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                    )}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#16223D] text-emerald-300 border border-emerald-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 leading-snug group-hover:text-emerald-300 transition-colors mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-emerald-400 font-medium flex items-center gap-1.5 mb-3">
                  <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{item.organization}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1E2C4A]/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-slate-400">
                  <Flame className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  High Performance
                </span>
                <span className="text-emerald-400 font-medium flex items-center gap-0.5">
                  Verified
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
