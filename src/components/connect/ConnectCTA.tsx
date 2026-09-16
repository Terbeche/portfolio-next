"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Mail, Copy, Check, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "@/components/navigation/SocialIcons";

export default function ConnectCTA() {
  const [copied, setCopied] = useState(false);

  const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "termus96@gmail.com";
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "213799842044";
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/mustapha-terbeche";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Mostefa, I just scanned your QR card and would love to discuss a project with you."
  )}`;

  const copyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          fallbackCopyText(email);
        });
    } else {
      fallbackCopyText(email);
    }
  };

  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Fallback copy failed", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <section id="contact-cta" className="space-y-4 scroll-mt-20 pt-2">
      <div className="p-5 sm:p-6 rounded-2xl custom-bg border-accent/40 text-center space-y-4 shadow-glass-sm">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">Have a project in mind?</h2>
          <p className="text-sm text-foreground/80 font-light">
            Let&apos;s talk about what you&apos;re building.
          </p>
        </div>

        {/* Primary Action Button */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base bg-accent text-background hover:bg-accent/90 hover:shadow-glass-sm transition-all duration-200 active:scale-98"
        >
          <Send className="w-4 h-4" />
          <span>Start a Conversation</span>
        </Link>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-accent/20"></div>
          <span className="flex-shrink mx-3 text-xs text-foreground/50 font-mono uppercase">Direct channels</span>
          <div className="flex-grow border-t border-accent/20"></div>
        </div>

        {/* Direct Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          {/* Email */}
          <div className="p-2.5 rounded-lg bg-background/60 border border-accent/15 flex flex-col items-center justify-center gap-1.5">
            <a
              href={`mailto:${email}`}
              className="font-semibold text-accent hover:underline flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <button
              onClick={copyEmail}
              className="text-[11px] text-foreground/70 hover:text-accent flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-background/60 border border-accent/15 flex flex-col items-center justify-center gap-1.5 hover:border-accent/40 transition-colors"
          >
            <div className="font-semibold text-accent flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </div>
            <span className="text-[11px] text-foreground/70">Message directly</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-background/60 border border-accent/15 flex flex-col items-center justify-center gap-1.5 hover:border-accent/40 transition-colors"
          >
            <div className="font-semibold text-accent flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </div>
            <span className="text-[11px] text-foreground/70">Chat on mobile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
