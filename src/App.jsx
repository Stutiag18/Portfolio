import BlurBackground from "./components/BlurBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import CustomCursor from "./components/CustomCursor";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
   <>
   <CustomCursor />
   <BlurBackground />
   <Navbar />
   <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 cursor-none">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      
      <Experience />
      <Testimonials />
      <Contact />
    </main>   
      </>  
  )
}