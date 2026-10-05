import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Technologies from './components/sections/Technologies'
import Projects from './components/sections/Projects'
import Trajectory from './components/sections/Trajectory'
import Contact from './components/sections/Contact'

/**
 * Ensamblado de la página: la navegación cuenta la historia
 * «quién soy → qué sé → qué he construido → cómo contactarme».
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
