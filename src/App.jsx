import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Illustration from "./components/Illustrations";
import About from "./pages/About";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <div className="bg-slate-900">
      <Illustration />

      {/* header */}
      <Navbar />

      {/* sections */}
      <Home />
      <About/>
      <Skills/>
    </div>
  );
}
