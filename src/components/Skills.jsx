import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"
import { SiVite, SiCplusplus } from "react-icons/si"
import Reveal from "./Reveal"

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "APIs REST", icon: null },
        { name: "POO", icon: null },
      ],
    },
  ]

  return (

  <Reveal>
    <section id="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div
            className="skill-card"
            key={group.title}
          >

            <h3>{group.title}</h3>

            <div className="skill-list">

              {group.skills.map((skill, index) => (
              <div
                className="skill-item"
                key={skill.name}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <span>{skill.name}</span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  </Reveal>
  )
}

export default Skills