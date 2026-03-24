import React from "react";
import Personal from "./components/Personal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }}>
      <Personal />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
