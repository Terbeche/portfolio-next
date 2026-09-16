"use client";

import React from "react";
import ConnectHeader from "./ConnectHeader";
import ConnectHero from "./ConnectHero";
import ConnectLinks from "./ConnectLinks";
import ConnectServices from "./ConnectServices";
import ConnectProjects from "./ConnectProjects";
import ConnectAbout from "./ConnectAbout";
import ConnectTechStack from "./ConnectTechStack";
import ConnectCTA from "./ConnectCTA";
import ConnectFooter from "./ConnectFooter";

export default function ConnectView() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full text-foreground selection:bg-accent/30 selection:text-accent pb-16">
      {/* Top sticky navigation bar */}
      <ConnectHeader />

      <main className="max-w-xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-12">
        {/* Section 1: Hero */}
        <ConnectHero onScrollToSection={scrollToSection} />

        {/* Section 2: Strongest Links */}
        <ConnectLinks onScrollToSection={scrollToSection} />

        {/* Section 3: What I Can Build */}
        <ConnectServices />

        {/* Section 4: Selected Work */}
        <ConnectProjects />

        {/* Section 5: About Me */}
        <ConnectAbout />

        {/* Section 6: Technologies I Work With */}
        <ConnectTechStack />

        {/* Section 7: Have a Project in Mind? (CTA) */}
        <ConnectCTA />

        {/* Section 8: Minimal Footer */}
        <ConnectFooter onScrollToTop={scrollToTop} />
      </main>
    </div>
  );
}
