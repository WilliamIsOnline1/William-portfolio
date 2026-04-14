import React from "react";
import "@/App.css";
import { resumeData } from "./mockData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import CertificationsAwards from "./components/CertificationsAwards";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header data={resumeData.personal} />
      <Hero data={resumeData.personal} />
      <About content={resumeData.about} personalData={resumeData.personal} />
      <Experience experiences={resumeData.experience} personalData={resumeData.personal} />
      <Education education={resumeData.education} personalData={resumeData.personal} />
      <Skills skills={resumeData.skills} personalData={resumeData.personal} />
      <CertificationsAwards 
        certifications={resumeData.certifications} 
        awards={resumeData.awards}
        personalData={resumeData.personal}
      />
      <Recommendations recommendations={resumeData.recommendations} personalData={resumeData.personal} />
      <Contact personalInfo={resumeData.personal} />
      <Footer personalData={resumeData.personal} />
    </div>
  );
}

export default App;
