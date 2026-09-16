import React from "react";
import Link from "next/link";
import { Globe, Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/navigation/SocialIcons";

interface ConnectLinksProps {
  onScrollToSection: (id: string) => void;
}

export default function ConnectLinks({ onScrollToSection }: ConnectLinksProps) {
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/mustapha-terbeche";
  const githubUrl =
    process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Terbeche";
  const twitterUrl =
    process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/Terbech_Mostefa";

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-foreground/90">
          Let&apos;s connect
        </h2>
        <span className="text-xs text-accent font-mono">Quick Access</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Portfolio */}
        <Link
          href="/"
          className="group p-4 rounded-xl custom-bg hover:border-accent/60 transition-all duration-200 flex items-start justify-between active:scale-98"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5 group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                Portfolio
              </h3>
              <p className="text-xs text-foreground/70 mt-0.5">
                Explore full projects & experience
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </Link>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 rounded-xl custom-bg hover:border-accent/60 transition-all duration-200 flex items-start justify-between active:scale-98"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                LinkedIn
              </h3>
              <p className="text-xs text-foreground/70 mt-0.5">
                Professional profile & network
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 rounded-xl custom-bg hover:border-accent/60 transition-all duration-200 flex items-start justify-between active:scale-98"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                GitHub
              </h3>
              <p className="text-xs text-foreground/70 mt-0.5">
                Code & open-source work
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* Contact Me */}
        <button
          onClick={() => onScrollToSection("contact-cta")}
          className="group p-4 rounded-xl custom-bg hover:border-accent/60 transition-all duration-200 flex items-start justify-between text-left cursor-pointer active:scale-98"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                Contact Me
              </h3>
              <p className="text-xs text-foreground/70 mt-0.5">
                Let&apos;s discuss your project
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </button>
      </div>

      {/* Secondary Links Bar */}
      <div className="flex items-center justify-center gap-4 pt-1 text-xs text-foreground/70">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent flex items-center gap-1 transition-colors"
        >
          <TwitterIcon className="w-3.5 h-3.5" />
          <span>X (Twitter)</span>
        </a>
        <span>·</span>
        <Link href="/blog" className="hover:text-accent transition-colors">
          Engineering Blog
        </Link>
        <span>·</span>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Resume PDF
        </a>
      </div>
    </section>
  );
}
