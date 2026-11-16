import { portfolioData } from "../app/data/portfolioData";
import { ArrowUp, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const { social } = portfolioData;

  return (
    <footer className="border-t border-[#1E2C4A] bg-[#05080E] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-bold text-slate-200">Sharath H</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="text-xs text-slate-400">
              &copy; 2026 Sharath H. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md p-2"
                aria-label={`Visit Sharath H on ${item.name} (opens in new tab)`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div>
            <a
              href="#hero"
              className="min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-lg bg-[#0D1424] border border-[#1E2C4A] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 text-xs font-semibold inline-flex items-center gap-1.5 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              aria-label="Back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <span>Engineered with precision for campus placements</span>
          <span>•</span>
          <span className="text-emerald-400">Bangalore, India</span>
        </div>
      </div>
    </footer>
  );
}
