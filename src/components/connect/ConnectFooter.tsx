import React from "react";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

interface ConnectFooterProps {
  onScrollToTop: () => void;
}

export default function ConnectFooter({ onScrollToTop }: ConnectFooterProps) {
  return (
    <footer className="pt-6 pb-4 border-t border-accent/20 text-center space-y-3 text-xs text-foreground/60">
      <div className="space-y-1">
        <p className="font-bold text-foreground text-sm uppercase tracking-wide">Mostefa Terbeche</p>
        <p className="text-accent/90 font-medium">AI Full-Stack Software Engineer</p>
        <p className="text-[11px] text-foreground/60">Web · Mobile · AI · SaaS</p>
      </div>

      <div className="flex items-center justify-center gap-4 text-[11px]">
        <button
          onClick={onScrollToTop}
          className="inline-flex items-center gap-1 text-foreground/70 hover:text-accent transition-colors cursor-pointer"
        >
          <ChevronUp className="w-3.5 h-3.5" />
          <span>Back to top</span>
        </button>
        <span>·</span>
        <Link href="/" className="hover:text-accent transition-colors">
          Portfolio Home
        </Link>
        <span>·</span>
        <Link href="/projects" className="hover:text-accent transition-colors">
          Projects
        </Link>
      </div>

      <p className="text-[11px] text-foreground/50">
        © 2026 Mostefa Terbeche. All rights reserved.
      </p>
    </footer>
  );
}
