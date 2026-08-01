import foto_cv from "../assets/foto_cv.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

     <div className="hero-content">

      <p className="hero-greeting">
        Hola, soy
      </p>

       <h1>
            <span>Ximena Hernández</span>
        </h1>

      <h2>
          Desarrolladora de software <br />
          y estudiante de Ingeniería en Computación.
        </h2>

      <p className="hero-description">
          Me gusta convertir ideas en aplicaciones web funcionales,
          aprender nuevas tecnologías y seguir creciendo a través
          de proyectos reales.
        </p>

      <div className="hero-buttons">

        <a
            href="/cv-ximena-hernandez.pdf"
            download
            className="primary-button"
          >
            Descargar CV
        </a>
     </div>

     <div className="hero-links">
        <a 
          href="https://github.com/ximehe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
         
        <a 
          href="https://www.linkedin.com/in/ximehernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
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