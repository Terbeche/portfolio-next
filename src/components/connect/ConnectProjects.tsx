import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ConnectProjects() {
  return (
    <section id="selected-work" className="space-y-4 scroll-mt-20">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight">Selected Work</h2>
          <p className="text-xs sm:text-sm text-foreground/70">Real projects you can explore right now.</p>
        </div>
        <Link
          href="/projects"
          className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
        >
          <span>All Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-3">
        {/* Project 1: Digestory */}
        <div className="p-4 rounded-xl custom-bg space-y-2 group hover:border-accent/60 transition-all">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
                  Digestory
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                  AI SaaS
                </span>
              </div>
              <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
                AI-powered content digest platform that transforms YouTube, podcasts, and newsletter feeds into unified audio and text briefings.
              </p>
            </div>
            <a
              href="https://digestory.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors flex-shrink-0"
              aria-label="View Digestory"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-foreground/60 font-mono">
            <span>Rails 8</span>
            <span>·</span>
            <span>Gemini AI</span>
            <span>·</span>
            <span>Whisper</span>
            <span>·</span>
            <span>Solid Queue</span>
          </div>
        </div>

        {/* Project 2: biodeva */}
        <div className="p-4 rounded-xl custom-bg space-y-2 group hover:border-accent/60 transition-all">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
                  biodeva
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                  E-Commerce
                </span>
              </div>
              <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
                Trilingual (AR, FR, EN) botanical health & phytotherapy platform with RTL, 58 Wilaya COD logistics, and custom CMS.
              </p>
            </div>
            <a
              href="https://biodeva.net/en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors flex-shrink-0"
              aria-label="View biodeva"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-foreground/60 font-mono">
            <span>Next.js 16</span>
            <span>·</span>
            <span>React 19</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Drizzle ORM</span>
            <span>·</span>
            <span>Supabase</span>
          </div>
        </div>

        {/* Project 3: Exp'Eyes */}
        <div className="p-4 rounded-xl custom-bg space-y-2 group hover:border-accent/60 transition-all">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
                  Exp&apos;Eyes
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                  Fintech Advisory
                </span>
              </div>
              <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
                Secure payroll and financial advisory portal with client document vault, admin messaging, and defense-in-depth security.
              </p>
            </div>
            <a
              href="https://expeyes.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors flex-shrink-0"
              aria-label="View Exp'Eyes"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-foreground/60 font-mono">
            <span>Ruby on Rails</span>
            <span>·</span>
            <span>PostgreSQL</span>
            <span>·</span>
            <span>TailwindCSS</span>
            <span>·</span>
            <span>Hotwire</span>
          </div>
        </div>

        {/* Project 4: Files Finder */}
        <div className="p-4 rounded-xl custom-bg space-y-2 group hover:border-accent/60 transition-all">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
                  Files Finder
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                  Desktop Tool
                </span>
              </div>
              <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
                Cross-platform desktop file search & storage optimizer with multithreaded directory indexing and timeline analysis.
              </p>
            </div>
            <a
              href="https://github.com/Terbeche/finder-tool"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors flex-shrink-0"
              aria-label="View Files Finder code"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-foreground/60 font-mono">
            <span>Python</span>
            <span>·</span>
            <span>PySide6 (Qt)</span>
            <span>·</span>
            <span>SQLite</span>
            <span>·</span>
            <span>Multithreading</span>
          </div>
        </div>
      </div>
    </section>
  );
}
