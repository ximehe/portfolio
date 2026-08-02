import weather from "../assets/projects/weather-app.png"
import guess from "../assets/projects/guess-number.gif"

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

    github: "#",

    demo: "#",

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

    github: "#",

    demo: "#",
  },

  {
    id: 3,

    title: "Programación 4",

    description:
      "Proyecto académico desarrollado en C++ para la gestión de usuarios y viajes, aplicando programación orientada a objetos, estructuras de datos y patrones de diseño.",

    technologies: [
      "C++",
      "POO",
      "Git",
    ],

    image: "",

    github: "#",

    demo: "#",
  },
]

export default projects