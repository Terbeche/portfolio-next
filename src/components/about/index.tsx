import ItemLayout from "./ItemLayout";
import Image from "next/image";

const AboutDetails: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Hey There, I&apos;m Mostefa Terbeche
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I&apos;m a Full Stack Web Developer. I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don&apos;t hesitate to contact me.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=vue,nuxt,react,redux,nextjs,ruby,rails,python,django,aws,docker,git,github,html,css,sass,tailwind,js,ts,linux,mysql,postgres,nodejs,npm,yarn,vite,threejs,netlify,vercel,heroku,sentry,vscode`}
            alt="Mostefa's Skills"
            width={800}
            height={300}
            unoptimized
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;