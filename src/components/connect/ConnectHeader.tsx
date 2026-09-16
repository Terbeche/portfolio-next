import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ConnectHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-accent/20 px-4 py-3">
      <div className="max-w-xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs text-foreground/80 hover:text-accent transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Full Portfolio</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] text-foreground/70 font-mono">Available for projects</span>
        </div>
      </div>
    </header>
  );
}
