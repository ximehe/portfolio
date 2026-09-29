import weather from "../assets/projects/weather-app.png"
import guess from "../assets/projects/guess-number.gif"
import fingride from "../assets/projects/fing-ride.png"
import ecomjap from "../assets/projects/ecommerce-jap.png"
import portfolio from "../assets/projects/portfolio.png"
import magnolias from "../assets/projects/magnolias-desktop.png"
import ximedev from "../assets/projects/ximedev.png"

const projects = [
{
id: 1,
title: "Portfolio Personal",


description:
  "Portfolio personal desarrollado para presentar mis proyectos, habilidades y experiencia, con una interfaz moderna, responsive y enfocada en el desarrollo frontend.",

technologies: [
  "React",
  "TypeScript",
  "CSS",
  "Vercel",
],

image: portfolio,

repository: "https://github.com/ximehe/portfolio",
repositoryType: "github",

demo: "https://ximena-hernandez-portfolio.vercel.app/",


},

{
id: 2,
title: "Magnolias Cotillón",


description:
  "E-commerce desarrollado para un cliente real, trabajando en el diseño y desarrollo de la tienda, gestión de productos y variantes, carrito de compras e integración con Supabase.",

technologies: [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
],

image: magnolias,

repository: null,
repositoryType: null,

demo: "https://magnoliascotillon.com",


},

{
id: 3,
title: "XIME.DEV",


description:
  "Landing personal desarrollada para presentar mi perfil como desarrolladora, proyectos, habilidades y experiencia, con un diseño moderno, responsive y enfocado en frontend.",

technologies: [
  "React",
  "TypeScript",
  "Vite",
  "CSS",
],

image: ximedev,

repository: null,
repositoryType: null,

demo: "https://ximedev.app",


},

{
id: 4,
title: "Spendly",


description:
  "Aplicación web para registrar y visualizar gastos de forma simple, con una interfaz minimalista y enfocada en la experiencia de usuario.",

technologies: [
  "React",
  "TypeScript",
  "Vite",
  "CSS",
],

image: null,

repository: null,
repositoryType: null,

demo: null,

status: "in-progress",


},

{
id: 5,
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


},

{
id: 6,
title: "E-commerce — Jóvenes a Programar",


description:
  "Proyecto académico desarrollado en equipo durante Jóvenes a Programar, enfocado en la creación de una tienda online y la aplicación de conceptos de desarrollo web.",

technologies: [
  "HTML",
  "CSS",
  "JavaScript",
],

image: ecomjap,

repository: "https://github.com/ximehe/Proyecto-e-commerce-JAP",
repositoryType: "github",

demo: "https://proyecto-e-commerce-jap.vercel.app/login.html",

status: "academic",


},

{
id: 7,
title: "Fing Ride Sharing©",


description:
  "Proyecto académico hecho en equipo desarrollado en C++ para la gestión de usuarios y viajes, aplicando programación orientada a objetos, estructuras de datos y patrones de diseño.",

technologies: [
  "C++",
  "POO",
  "Git",
],

image: fingride,

repository:
  "https://gitlab.fing.edu.uy/santiago.montero/aplicacion-de-gestion-de-viajes-c",
repositoryType: "gitlab",

demo: null,


},

{
id: 8,
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
]

export default projects
