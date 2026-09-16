import type { Metadata } from "next";
import ConnectView from "@/components/connect/ConnectView";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Digital business card of Mostefa Terbeche — AI Full-Stack Software Engineer. I build web, mobile, AI, and SaaS products from idea to production.",
  openGraph: {
    title: "Mostefa Terbeche | AI Full-Stack Software Engineer",
    description:
      "Digital business card & profile. Web · Mobile · AI · SaaS products built from idea to production.",
    url: "https://mostefaterbeche.me/connect",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostefa Terbeche | AI Full-Stack Software Engineer",
    description:
      "Digital business card & profile. Web · Mobile · AI · SaaS products built from idea to production.",
    creator: "@Terbech_Mostefa",
  },
};

export default function ConnectPage() {
  return <ConnectView />;
}
