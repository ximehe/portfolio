import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import {
  SiVite,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si"

import Reveal from "./Reveal"

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      direction: "left",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },

    {
      title: "Programming & Data",
      direction: "left",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "SQL", icon: null },
        { name: "POO", icon: null },
        { name: "APIs REST", icon: null },
      ],
    },

    {
      title: "Tools & Backend",
      direction: "left",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "VS Code", icon: null },
      ],
    },
  ]

  return (
    <Reveal>
      <section id="skills">

        <h2>Skills</h2>

        <div className="skills-marquee">

          {skillGroups.map((group) => (
            <div className={`skill-group ${group.direction}`} key={group.title}>

              <div className="skill-track">

                <div className="skill-list">

                  {[1, 2, 3, 4, 5, 6].map((copy) => (
                    <div className="skill-copy" key={copy}>

                      {group.skills.map((skill) => (
                        <div
                          className="skill-item"
                          key={`${skill.name}-${copy}`}
                        >
                          <div className="skill-icon">
                            {skill.icon}
                          </div>

                          <span>{skill.name}</span>
                        </div>
                      ))}

                    </div>
                  ))}

                </div>

              </div>

              <h3>{group.title}</h3>

            </div>
          ))}

        </div>

      </section>
    </Reveal>
  )
}

export default Skills