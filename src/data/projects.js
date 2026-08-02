import weather from "../assets/projects/weather-app.png"
import guess from "../assets/projects/guess-number.gif"
import fingride from "../assets/projects/fing-ride.png"

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "Aplicación web del clima desarrollada con React que consume la API de Open-Meteo para consultar las condiciones actuales y el pronóstico de distintas ciudades.",

    technologies: [
      "React",
      "Vite",
      "Open-Meteo API",
    ],

    image: weather,

    repository: "https://github.com/ximehe/bo-clima",
    repositoryType: "github",

    demo: "https://bo-clima.vercel.app/",

    status: "in-progress",
  },

  {
    id: 2,

    title: "Guess the Number",

    description:
      "Juego web interactivo en el que el usuario debe adivinar un número secreto mediante pistas que indican qué tan cerca está de la respuesta.",

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],

    image: guess,

    repository: "https://github.com/ximehe/numFounder",
    repositoryType: "github",

    demo: null,
  },

  {
    id: 3,

    title: "Fing Ride Sharing©",

    description:
      "Proyecto académico hecho en equipo desarrollado en C++ para la gestión de usuarios y viajes, aplicando programación orientada a objetos, estructuras de datos y patrones de diseño.",

    technologies: [
      "C++",
      "POO",
      "Git",
    ],

    image: fingride,

    repository: "https://gitlab.fing.edu.uy/santiago.montero/aplicacion-de-gestion-de-viajes-c",
    repositoryType: "gitlab",

    demo: null,
  },
]

export default projects