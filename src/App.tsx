import { skillCategories } from './data/skills';
import Navbar from './components/layout/Navbar';
import Hero from './features/hero/Hero';
import About from './features/about/About';
import Skills from './features/skills/Skills';
import Projects from './features/projects/Projects';
import Contact from './features/contact/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <div className="container max-w-3xl mx-auto ">
        <div className="px-4 pt-5 md:px-0 md:pt-10">
          <Navbar />
          <Hero />
          <About />
          <Skills skillCategories={skillCategories} />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}