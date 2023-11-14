import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

export default function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
