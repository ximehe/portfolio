function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contacto</h2>

      <p>
        ¿Tenés un proyecto o una oportunidad?
        Me gustaría conocer más.
      </p>

      <div className="contact-links">

        <a href="mailto:tuemail@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Contact