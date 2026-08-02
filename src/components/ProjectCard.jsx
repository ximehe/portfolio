import { FaGithub, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { SiVite, SiCplusplus} from "react-icons/si"

const technologyIcons = {
  React: <FaReact />,
  Vite: <SiVite />,
  JavaScript: <FaJs />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  "C++": <SiCplusplus />,
  Git: <FaGitAlt />,
  "Open-Meteo API": null,
  POO: null,
}

function ProjectCard({ project }) {
  return (

    
    <article className="project-card">

      {project.status === "in-progress" && (
        <span className="project-status">
          En proceso
        </span>
      )}

      {project.image && (
        <div className="project-image-container">

          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />

          <div className="project-overlay">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
              Demo
            </a>

          </div>

        </div>
      )}

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="technologies">

       {project.technologies.map((tech) => (
          <span key={tech}>
            {technologyIcons[tech]}
            {tech}
          </span>
        ))}

      </div>

      {!project.image && (
      <div className="project-links">

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink />
          Demo
        </a>

      </div>
      )}

    </article>
  )
}

export default ProjectCard
