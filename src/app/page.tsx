import Image from "next/image";
import Link from "next/link";
import bg from "../../public/background/home-background.png";
import ModernNavigation from "@/components/navigation/ModernNavigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <ModernNavigation />
      
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Hello, I&apos;m{" "}
            <span className="text-accent">Mostefa Terbeche</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Web Developer passionate about creating amazing digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
