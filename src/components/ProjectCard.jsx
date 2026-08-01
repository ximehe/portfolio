import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

function ProjectCard({ project }) {
  return (
    <article className="project-card">

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        )}

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="technologies">

        {project.technologies.map((tech) => (
          <span key={tech}>
            {tech}
          </span>
        ))}

      </div>

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

    </article>
  )
}

export default ProjectCard