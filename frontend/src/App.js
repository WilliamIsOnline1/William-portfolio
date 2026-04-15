import React from "react";
import "@/App.css";
import { resumeData } from "./mockData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header data={resumeData.personal} />
      <Hero data={resumeData.personal} />
      <About content={resumeData.about} />
      <Experience experiences={resumeData.experience} skills={resumeData.skills} />
      <Education education={resumeData.education} />
      <Awards awards={resumeData.awards} />
      <Contact personalInfo={resumeData.personal} />
      <Footer personalData={resumeData.personal} />
    </div>
  );
}

export default App;
