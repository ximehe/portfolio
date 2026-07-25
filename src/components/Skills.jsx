function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Vite",
      ],
    },
    {
      title: "Programming",
      skills: [
        "C++",
        "Java",
        "Python",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "APIs REST",
        "POO",
      ],
    },
  ]

  return (
    <section id="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div 
            className="skill-card"
            key={group.title}
          >

            <h3>
              {group.title}
            </h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills