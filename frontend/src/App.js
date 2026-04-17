import React, { useEffect } from "react";
import "@/App.css";
import { resumeData } from "./mockData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.opacity = '0';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.personal} />
      <Hero data={resumeData.personal} />
      <About content={resumeData.about} />
      <Experience experiences={resumeData.experience} skills={resumeData.skills} />
      <Education education={resumeData.education} />
      <Gallery />
      <Awards awards={resumeData.awards} />
      <Links />
      <Contact personalInfo={resumeData.personal} />
      <Footer personalData={resumeData.personal} />
    </div>
  );
}

export default App;
