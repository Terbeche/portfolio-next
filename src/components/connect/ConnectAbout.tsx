import React from "react";
import { GraduationCap } from "lucide-react";

export default function ConnectAbout() {
  return (
    <section className="space-y-3.5">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight">About Me</h2>

      <div className="p-4 sm:p-5 rounded-xl custom-bg space-y-3 text-xs sm:text-sm text-foreground/85 leading-relaxed">
        <p>
          I&apos;m <strong className="text-foreground font-semibold">Mostefa</strong>, an AI Full-Stack Software Engineer focused on building practical software products.
        </p>
        <p>
          I work across the full development lifecycle — from backend architecture and APIs to web interfaces, mobile applications, AI features, and cloud deployment.
        </p>

        <div className="pt-2 border-t border-accent/15 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-accent/15 text-accent shrink-0 mt-0.5">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-accent text-sm">Master&apos;s in Artificial Intelligence</p>
            <p className="text-xs text-foreground/70 mt-0.5">
              Deep background in intelligent algorithms, machine learning, and data engineering applied directly to modern production codebases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
