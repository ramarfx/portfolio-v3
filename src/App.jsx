import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Illustration from "./components/Illustrations";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="bg-slate-900 relative m-0 overflow-hidden">
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
