import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

interface ProjectLayoutProps {
  name: string;
  description: string;
  demoLink: string;
  sourceLink: string;
  featuredImage: string;
  technologies: string[];
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ name, description, demoLink, sourceLink, featuredImage, technologies }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex flex-col md:flex-row items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <Image src={featuredImage} alt={name} width={64} height={64} className="w-12 h-12 sm:w-16 sm:h-16" />
        <div className="flex flex-col">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
          <ul className="flex space-x-2">
            {technologies.map((tech) => (
              <li key={tech} className="text-accent">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-1 mt-4 md:mt-0">
        <Link href={demoLink} target="_blank" className="text-primary underline">
          Demo Link
        </Link>
        <Link href={sourceLink} target="_blank" className="text-primary underline">
          Source Link
        </Link>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;