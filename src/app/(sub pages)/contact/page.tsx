import Image from "next/image";
import Link from "next/link";
import { QrCode, ArrowRight } from "lucide-react";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import ModernNavigation from "@/components/navigation/ModernNavigation";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />

      <ModernNavigation />

      <article className="relative w-full flex flex-col items-center justify-center py-24 space-y-8 min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl md:text-5xl capitalize">
            Get In Touch
          </h1>
          <p className="text-center font-light text-base md:text-lg max-w-2xl">
            I&apos;m always interested in hearing about new projects, opportunities, and collaborations. 
            Whether you have a question or just want to say hi, feel free to drop me a message!
          </p>

          {/* Quick link to Digital Business Card */}
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all shadow-sm group"
          >
            <QrCode className="w-4 h-4" />
            <span>Need a fast 10-second summary? View Digital Business Card</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <Form />
      </article>
    </>
  );
}