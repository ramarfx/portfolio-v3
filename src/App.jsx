import  { useEffect, useRef } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Illustration from "./components/Illustrations";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import "./components/particle.js";
import { ParticleAnimation } from "./components/particle.js";

export default function App() {
  const canvasRef = useRef();

  // Init ParticleAnimation
  useEffect(() => {
    if (window.innerWidth > 768) {
      const options = {
        quantity: 80,
        staticity: 50,
        ease: 50,
      };
      new ParticleAnimation(canvasRef.current, options);
    }
  }, []);
  return (
    <div className="bg-slate-900 relative m-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
      <Illustration />

      {/* header */}
      <Navbar />

      {/* sections */}
      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}
