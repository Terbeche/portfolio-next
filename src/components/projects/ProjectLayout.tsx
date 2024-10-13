import { motion } from "framer-motion";
import Link from "next/link";

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
  technologies: string[];
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ name, description, demoLink, sourceLink, technologies }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex flex-col md:flex-row items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <div className="flex flex-col">
          <h2 className="text-foreground mb-4">{name}</h2>
          <p className="text-gray-400 hidden sm:inline-block mb-4">{description}</p>
          <ul className="flex space-x-2">
            {technologies.map((tech) => (
              <li key={tech} className="text-accent">{tech}</li>
            ))}
          </ul>
          <div className="flex items-end space-y-1 mt-4 md:mt-0 gap-x-2 text-lg space-x-12 text-sky-400">
            <Link href={demoLink} target="_blank" className="text-primary">
              Demo Link
            </Link>
            <Link href={sourceLink} target="_blank" className="text-primary">
              Source Link
            </Link>
          </div>
        </div>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;