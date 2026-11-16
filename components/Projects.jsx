import { portfolioData } from "../app/data/portfolioData";
import { FolderGit2, ExternalLink, Github, Layers, ShieldCheck, Cpu, Network } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  const projectIcons = {
    "DPI Engine": Network,
    "UPI Offline Mesh": ShieldCheck,
    "VectorDB": Cpu,
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-24 border-t border-[#1E2C4A]/60 bg-[#070B12]/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Featured Engineering</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Highlighted Projects
          </h2>
          <div className="w-12 h-1 bg-emerald-400 mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Selected systems, cryptography, and full-stack projects highlighting clean code, low-level optimization, and production readiness.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const Icon = projectIcons[proj.title] || FolderGit2;

            return (
              <article
                key={proj.title}
                className="group rounded-2xl bg-[#0D1424] border border-[#1E2C4A] overflow-hidden hover:border-emerald-500/40 hover:bg-[#111B30] transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Visual Architecture Preview Graphic */}
                  <div className="relative h-48 w-full bg-[#080E1C] border-b border-[#1E2C4A] p-5 flex flex-col justify-between overflow-hidden">
                    {/* Ambient Glow */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-400/25 transition-all" />

                    <div className="flex items-center justify-between relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#16223D] text-emerald-300 border border-emerald-500/20">
                        {proj.metrics}
                      </span>
                    </div>

                    {/* Schematic Diagram Preview Mockup */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-slate-400">
                        <span className="text-emerald-400">$</span>
                        <span className="text-slate-300">{proj.title.toLowerCase().replace(/\s+/g, "_")}_core</span>
                        <span className="text-emerald-400">--status=active</span>
                      </div>
                      <div className="w-full bg-[#16223D]/90 rounded p-2.5 font-mono text-[11px] text-slate-300 border border-[#1E2C4A]">
                        {proj.title === "DPI Engine" && (
                          <div className="truncate text-slate-300">
                            [PCAP INGEST] -&gt; [SNI PARSE] -&gt; [FLOW DECISION: PERMIT]
                          </div>
                        )}
                        {proj.title === "UPI Offline Mesh" && (
                          <div className="truncate text-slate-300">
                            [RSA-4096 HANDSHAKE] -&gt; [AES-GCM PACKET] -&gt; [LEDGER ACK]
                          </div>
                        )}
                        {proj.title === "VectorDB" && (
                          <div className="truncate text-slate-300">
                            [HNSW GRAPH] -&gt; [COSINE SEARCH 0.4ms] -&gt; [OLLAMA RAG]
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium mb-3">
                      {proj.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#16223D] text-slate-200 border border-[#1E2C4A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons (Minimum 44x44px touch targets) */}
                <div className="px-6 pb-6 pt-2 border-t border-[#1E2C4A]/60 flex items-center gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] min-w-[44px] flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white bg-[#16223D] hover:bg-[#1E2C4A] border border-[#1E2C4A] hover:border-slate-600 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                    aria-label={`View ${proj.title} source code on GitHub (opens in new tab)`}
                  >
                    <Github className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={proj.demo}
                    className="min-h-[44px] min-w-[44px] flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                    aria-label={`Live demo for ${proj.title}`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
