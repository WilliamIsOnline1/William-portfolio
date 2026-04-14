import React from "react";
import "@/App.css";
import { resumeData } from "./mockData";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import CertificationsAwards from "./components/CertificationsAwards";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Hero data={resumeData.personal} />
      <About content={resumeData.about} />
      <Experience experiences={resumeData.experience} />
      <Education education={resumeData.education} />
      <Skills skills={resumeData.skills} />
      <CertificationsAwards 
        certifications={resumeData.certifications} 
        awards={resumeData.awards} 
      />
      <Recommendations recommendations={resumeData.recommendations} />
      <Contact personalInfo={resumeData.personal} />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
