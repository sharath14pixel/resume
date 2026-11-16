import { portfolioData } from "../app/data/portfolioData";
import { Award, CheckCircle, Shield, Sparkles } from "lucide-react";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-16 sm:py-24 border-t border-[#1E2C4A]/60 bg-[#070B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Verified Credentials</span>
          </div>
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Certifications
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Professional learning and recognized certifications across Java systems, full-stack architectures, and AI engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#0D1424] border border-[#1E2C4A] p-6 hover:border-emerald-500/40 hover:bg-[#111B30] transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                      {cert.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-emerald-400 font-medium mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2C4A]/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Verified Credential
                </span>
                <span className="font-mono text-slate-400">Issued {cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
