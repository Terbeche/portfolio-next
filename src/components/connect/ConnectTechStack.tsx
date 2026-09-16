import React from "react";

export default function ConnectTechStack() {
  return (
    <section className="space-y-3.5">
      <div className="space-y-0.5">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight">Technologies I work with</h2>
        <p className="text-xs text-foreground/70">The tools and frameworks I use to ship robust software.</p>
      </div>

      <div className="space-y-2.5">
        {/* Backend */}
        <div className="p-3 rounded-lg custom-bg flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
          <span className="text-xs font-semibold text-accent flex items-center gap-1.5">
            <span>Backend</span>
          </span>
          <span className="text-xs text-foreground/80 font-mono">
            Ruby on Rails · Node.js · NestJS · Python · FastAPI
          </span>
        </div>

        {/* Frontend */}
        <div className="p-3 rounded-lg custom-bg flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
          <span className="text-xs font-semibold text-accent flex items-center gap-1.5">
            <span>Frontend</span>
          </span>
          <span className="text-xs text-foreground/80 font-mono">
            React · Next.js · TypeScript · TailwindCSS
          </span>
        </div>

        {/* Mobile */}
        <div className="p-3 rounded-lg custom-bg flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
          <span className="text-xs font-semibold text-accent flex items-center gap-1.5">
            <span>Mobile</span>
          </span>
          <span className="text-xs text-foreground/80 font-mono">
            Flutter · Dart · Cross-Platform
          </span>
        </div>

        {/* AI / Data */}
        <div className="p-3 rounded-lg custom-bg flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
          <span className="text-xs font-semibold text-accent flex items-center gap-1.5">
            <span>AI / Data</span>
          </span>
          <span className="text-xs text-foreground/80 font-mono">
            Python · Machine Learning · AI APIs · Data Pipelines
          </span>
        </div>

        {/* Infrastructure */}
        <div className="p-3 rounded-lg custom-bg flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
          <span className="text-xs font-semibold text-accent flex items-center gap-1.5">
            <span>Infrastructure</span>
          </span>
          <span className="text-xs text-foreground/80 font-mono">
            Docker · Linux · PostgreSQL · Supabase · Cloud Platforms
          </span>
        </div>
      </div>
    </section>
  );
}
