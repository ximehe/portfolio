import foto_cv from "../assets/foto_cv.jpeg"

function Hero() {
  return (
    <section className="hero">

     <div className="hero-content">
      <span className="hero-badge">
        👩‍💻 Estudiante de Ingeniería en Computación
      </span>

      <h1>
        Hola, soy Ximena 👋
      </h1>

      <h2>
        Desarrolladora en formación
      </h2>

      <p>
        Me gusta crear soluciones usando tecnología,
        aprender nuevas herramientas y transformar ideas
        en proyectos funcionales.
      </p>

      <div className="hero-buttons">
        <a 
          href="https://github.com/ximehe"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/ximehernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        </div>
      </div>

      <div className="hero-image">
        <img 
          src={foto_cv}
          alt="Foto de Ximena"
        />
      </div>

    </section>
  )
}

export default Hero