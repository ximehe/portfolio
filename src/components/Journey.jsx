import Reveal from "./Reveal"

function Journey() {
  const timeline = [
    {
      year: "2020",
      type: "EDUCATION",
      title: "Ingeniería en Computación",
      place: "Udelar",
      description:
        "Inicio de la carrera de Ingeniería en Computación, desarrollando una base en programación, matemática y fundamentos de computación.",
    },
    {
      year: "2022",
      type: "LEARNING",
      title: "Jóvenes a Programar",
      place: "Plan Ceibal",
      description:
        "Primer acercamiento práctico al desarrollo de software y creación de proyectos propios.",
    },
    {
      year: "2023 — 2025",
      type: "EXPERIENCE",
      title: "Data Analyst",
      place: "Arbusta",
      description:
        "Experiencia profesional trabajando con datos y proyectos para Mercado Libre.",
    },
    {
      year: "2026",
      type: "NOW",
      title: "Portfolio & Projects",
      place: "Actualidad",
      description:
        "Desarrollo de proyectos personales y construcción de mi perfil profesional, explorando React, TypeScript, APIs y desarrollo web.",
      current: true,
    },
  ]

  return (
    <Reveal>
      <section id="journey">

        <h2>Mi recorrido</h2>

        <div className="timeline">

          {timeline.map((item, index) => (
            <article
              className={`timeline-item ${
                item.current ? "current" : ""
              }`}
              key={item.year}
            >

              <div className="timeline-marker">
                <span />
              </div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <span className="timeline-type">
                  {item.type}
                </span>

                <h3>{item.title}</h3>

                <span className="timeline-place">
                  {item.place}
                </span>

                <p>{item.description}</p>

              </div>

            </article>
          ))}

        </div>

      </section>
    </Reveal>
  )
}

export default Journey