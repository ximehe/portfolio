import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import Reveal from "./Reveal"

function Projects() {
  return (
    <Reveal>
      <section id="projects">

        <h2>Proyectos</h2>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>
    </Reveal>
  )
}

export default Projects