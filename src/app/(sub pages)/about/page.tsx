import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about";
import ModernNavigation from "@/components/navigation/ModernNavigation";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />

      <ModernNavigation />

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent mb-4">
            About Me
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the developer behind this portfolio
          </p>
        </div>
        
        <AboutDetails />
      </div>
    </>
  );
}
