import { createFileRoute } from '@tanstack/react-router';
import { skillCategories } from '../data/skills';
import Hero from '../features/hero/Hero';
import About from '../features/about/About';
import Skills from '../features/skills/Skills';
import Projects from '../features/projects/Projects';
import Contact from '../features/contact/Contact';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills skillCategories={skillCategories} />
      <Projects />
      <Contact />
    </>
  );
}
