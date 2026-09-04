import {
  FaGithub,
  FaGitlab,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa"

import { FiExternalLink } from "react-icons/fi"

import {
  SiVite,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
} from "react-icons/si"


const technologyIcons = {
  React: <FaReact />,
  Vite: <SiVite />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  "C++": <SiCplusplus />,
  Git: <FaGitAlt />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Supabase: <SiSupabase />,
  "Node.js": <SiNodedotjs />,

  "Open-Meteo API": null,
  POO: null,
}


function ProjectCard({ project }) {

  const statusLabels = {
    "in-progress": "En proceso",
    "almost-complete": "Casi terminado",
  }

  return (

    <article className="project-card">

      {project.status && statusLabels[project.status] && (
        <span className={`project-status ${project.status}`}>
          {statusLabels[project.status]}
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

            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.repositoryType === "gitlab"
                  ? <FaGitlab />
                  : <FaGithub />
                }

                {project.repositoryType === "gitlab"
                  ? "GitLab"
                  : "GitHub"
                }
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
                Demo
              </a>
            )}

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

          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.repositoryType === "gitlab"
                ? <FaGitlab />
                : <FaGithub />
              }

              {project.repositoryType === "gitlab"
                ? "GitLab"
                : "GitHub"
              }
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
              Demo
            </a>
          )}

        </div>
      )}

    </article>
  )
}

export default ProjectCard