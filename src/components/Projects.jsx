function Projects() {
  const projects = [
    {
      title: "🌤 Weather App",
      description:
        "Aplicación del clima desarrollada con React que consume una API externa y permite consultar el clima actual de distintas ubicaciones.",
      technologies: ["React", "Vite", "API REST"],
      github: "#",
      demo: "#",
    },
    {
      title: "🎯 Juego de adivinar número",
      description:
        "Juego interactivo donde el usuario debe descubrir un número secreto recibiendo pistas según sus intentos.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "🚗 Proyecto Programación 4",
      description:
        "Proyecto académico desarrollado aplicando programación orientada a objetos, patrones de diseño y manejo de colecciones.",
      technologies: ["C++", "POO", "Git"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects">

      <h2>Proyectos</h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <article 
            className="project-card"
            key={project.title}
          >

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github}>
                GitHub
              </a>

              <a href={project.demo}>
                Demo
              </a>
            </div>

          </article>
        ))}

      </div>

    </section>
  )
}

export default Projects