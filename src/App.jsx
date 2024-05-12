import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Illustration from "./components/Illustrations";

export default function App() {
  return (
    <div className="bg-slate-900 h-[200vh]">
      <Illustration />

      {/* header */}
      <Navbar />

      {/* sections */}
      <Home />
      
    </div>
  );
}
