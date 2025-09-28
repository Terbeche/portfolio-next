"use client";
import { BtnList } from "@/app/data";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  User,
} from "lucide-react";

const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <Home className="w-5 h-5" strokeWidth={1.5} />;
    case "about":
      return <User className="w-5 h-5" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-5 h-5" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-5 h-5" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-5 h-5" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-5 h-5" strokeWidth={1.5} />;
    case "twitter":
      return <X className="w-5 h-5" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-5 h-5" strokeWidth={1.5} />;
    default:
      return <Home className="w-5 h-5" strokeWidth={1.5} />;
  }
};

const ModernNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const internalLinks = BtnList.filter(btn => !btn.newTab);
  const externalLinks = BtnList.filter(btn => btn.newTab);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              Mostefa
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {internalLinks.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.link}
                  className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                >
                  {getIcon(btn.icon)}
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="hidden md:flex items-center space-x-4">
            {externalLinks.map((btn) => (
              <Link
                key={btn.label}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent p-2 rounded-md transition-colors"
                aria-label={btn.label}
              >
                {getIcon(btn.icon)}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-accent/20">
            {internalLinks.map((btn) => (
              <Link
                key={btn.label}
                href={btn.link}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2"
              >
                {getIcon(btn.icon)}
                {btn.label}
              </Link>
            ))}
            
            {/* External links in mobile */}
            <div className="border-t border-accent/20 pt-2">
              <div className="flex justify-center space-x-6">
                {externalLinks.map((btn) => (
                  <Link
                    key={btn.label}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent p-2 rounded-md transition-colors"
                    aria-label={btn.label}
                  >
                    {getIcon(btn.icon)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default ModernNavigation;