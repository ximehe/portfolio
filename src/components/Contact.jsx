import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Reveal from "./Reveal"

function Contact() {
  return (
  <Reveal>
    <section id="contact" className="contact">

      <h2>Contacto</h2>

      <p>
        ¿Tenés un proyecto o una oportunidad?
        Me gustaría conocer más.
      </p>

      <div className="contact-links">

        <a href="mailto:ximemika25@gmail.com">
          <FiMail />
          Email
        </a>

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

    </section>
  </Reveal>
  )
}

export default Contact