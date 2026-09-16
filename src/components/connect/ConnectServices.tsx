import React from "react";
import { Globe, Smartphone, Bot, Cloud } from "lucide-react";

export default function ConnectServices() {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight">What I Can Build</h2>
        <p className="text-xs sm:text-sm text-foreground/70">
          End-to-end execution across Web, Mobile, AI, and SaaS.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Web Applications */}
        <div className="p-4 rounded-xl custom-bg space-y-2.5">
          <div className="flex items-center gap-2.5 text-accent font-semibold text-sm">
            <div className="p-1.5 rounded-md bg-accent/15">
              <Globe className="w-4 h-4" />
            </div>
            <span>Web Applications</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed">
            Full-stack platforms, dashboards, portals, e-commerce and custom business software built for speed, SEO, and scale.
          </p>
          <div className="flex flex-wrap gap-1 text-[11px] text-foreground/60">
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Next.js</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Rails</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">FastAPI</span>
          </div>
        </div>

        {/* Mobile Applications */}
        <div className="p-4 rounded-xl custom-bg space-y-2.5">
          <div className="flex items-center gap-2.5 text-accent font-semibold text-sm">
            <div className="p-1.5 rounded-md bg-accent/15">
              <Smartphone className="w-4 h-4" />
            </div>
            <span>Mobile Applications</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed">
            Cross-platform mobile apps for consumers, businesses and internal workflows with native performance and smooth UI.
          </p>
          <div className="flex flex-wrap gap-1 text-[11px] text-foreground/60">
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Flutter</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">iOS</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Android</span>
          </div>
        </div>

        {/* AI Solutions */}
        <div className="p-4 rounded-xl custom-bg space-y-2.5">
          <div className="flex items-center gap-2.5 text-accent font-semibold text-sm">
            <div className="p-1.5 rounded-md bg-accent/15">
              <Bot className="w-4 h-4" />
            </div>
            <span>AI Solutions</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed">
            AI-powered applications, workflow automations, intelligent LLM pipelines, audio transcription, and data intelligence.
          </p>
          <div className="flex flex-wrap gap-1 text-[11px] text-foreground/60">
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Gemini</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Whisper</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">RAG</span>
          </div>
        </div>

        {/* SaaS Products */}
        <div className="p-4 rounded-xl custom-bg space-y-2.5">
          <div className="flex items-center gap-2.5 text-accent font-semibold text-sm">
            <div className="p-1.5 rounded-md bg-accent/15">
              <Cloud className="w-4 h-4" />
            </div>
            <span>SaaS Products</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed">
            Multi-tenant platforms, subscription management, secure APIs, and robust background queues designed to scale.
          </p>
          <div className="flex flex-wrap gap-1 text-[11px] text-foreground/60">
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Multi-tenant</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">APIs</span>
            <span className="px-2 py-0.5 rounded bg-background/50 border border-accent/10">Stripe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
