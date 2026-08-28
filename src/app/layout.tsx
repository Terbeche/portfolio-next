import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import ClientOnly from "@/components/ClientOnly";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mostefa Terbeche",
    default: "Mostefa Terbeche | Full Stack Developer & Product Engineer",
  },
  description:
    "Portfolio of Mostefa Terbeche, a Full Stack Developer and Product Engineer specializing in Ruby on Rails, Next.js, React, and high-performance web applications.",
  keywords: [
    "Mostefa Terbeche",
    "Full Stack Developer",
    "Product Engineer",
    "Software Engineer",
    "Ruby on Rails",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Mostefa Terbeche" }],
  creator: "Mostefa Terbeche",
  openGraph: {
    title: "Mostefa Terbeche | Full Stack Developer & Product Engineer",
    description:
      "Explore projects, technical articles, and experience of Mostefa Terbeche, Full Stack Developer and Product Engineer.",
    type: "website",
    siteName: "Mostefa Terbeche Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostefa Terbeche | Full Stack Developer & Product Engineer",
    description:
      "Explore projects, technical articles, and experience of Mostefa Terbeche, Full Stack Developer and Product Engineer.",
    creator: "@Terbech_Mostefa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        
        {children}
        <ClientOnly>
          <FireFliesBackground />
        </ClientOnly>
      </body>
    </html>
  );
}
