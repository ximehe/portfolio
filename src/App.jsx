import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Journey from "./components/Journey"

function App() {
  return (
    <>
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App