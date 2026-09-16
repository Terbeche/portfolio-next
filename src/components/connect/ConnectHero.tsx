import React from "react";
import { Download, ArrowRight } from "lucide-react";

interface ConnectHeroProps {
  onScrollToSection: (id: string) => void;
}

export default function ConnectHero({ onScrollToSection }: ConnectHeroProps) {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "termus96@gmail.com";
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://mostefaterbeche.me";

  const downloadVCard = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Mostefa Terbeche",
      "N:Terbeche;Mostefa;;;",
      "TITLE:AI Full-Stack Software Engineer",
      `EMAIL;TYPE=INTERNET,PREF:${contactEmail}`,
      `URL;TYPE=WORK:${siteUrl}`,
      "NOTE:AI Full-Stack Software Engineer - Web, Mobile, AI, SaaS",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "mostefa-terbeche.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="text-center space-y-6 pt-2">
      {/* Avatar Monogram & Status */}
      <div className="relative inline-flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full custom-bg flex items-center justify-center border-2 border-accent/40 shadow-glass-sm">
          <span className="text-2xl sm:text-3xl font-bold tracking-wider text-accent">MT</span>
        </div>
        <button
          onClick={downloadVCard}
          className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all cursor-pointer shadow-sm active:scale-95"
          title="Save contact card to your phone"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Save Contact (.vcf)</span>
        </button>
      </div>

      {/* Name & Title */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
          Mostefa Terbeche
        </h1>
        <p className="text-sm sm:text-base font-semibold text-accent tracking-wide uppercase">
          AI Full-Stack Software Engineer
        </p>
      </div>

      {/* Value Proposition */}
      <p className="text-base sm:text-lg text-foreground/90 font-light leading-relaxed max-w-md mx-auto">
        I build web, mobile, AI, and SaaS products from idea to production.
      </p>

      {/* Service Badge Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-foreground/80">
        <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20">Web</span>
        <span className="text-accent/60">·</span>
        <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20">Mobile</span>
        <span className="text-accent/60">·</span>
        <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20">AI</span>
        <span className="text-accent/60">·</span>
        <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20">SaaS</span>
      </div>

      {/* Primary Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          onClick={() => onScrollToSection("selected-work")}
          className="w-full py-3.5 px-4 rounded-xl font-medium text-sm sm:text-base bg-accent/15 border border-accent/50 text-accent hover:bg-accent/25 hover:shadow-glass-sm transition-all duration-200 cursor-pointer active:scale-98 flex items-center justify-center gap-2"
        >
          <span>View My Work</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => onScrollToSection("contact-cta")}
          className="w-full py-3.5 px-4 rounded-xl font-medium text-sm sm:text-base bg-accent text-background font-semibold hover:bg-accent/90 hover:shadow-glass-sm transition-all duration-200 cursor-pointer active:scale-98 flex items-center justify-center gap-2"
        >
          <span>Let&apos;s Work Together</span>
        </button>
      </div>
    </section>
  );
}
