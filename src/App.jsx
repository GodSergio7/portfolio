import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CookieConsent from './components/layout/CookieConsent'
import SiteBackground from './components/layout/SiteBackground'
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
      <SiteBackground />
      {/* Solo aparece al navegar con teclado (Tab): salta el menú */}
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
