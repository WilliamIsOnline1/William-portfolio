import React from 'react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open('/William_Davis_Resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={data.image}
              alt={data.name}
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ borderColor: '#9DB4A0', boxShadow: '0 0 40px rgba(157, 180, 160, 0.3)' }}
            />
          </div>
          
          <p
            className="text-xl mb-3 transition-all duration-500"
            style={{ color: '#7C98AB', fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
          >
            Hi, I'm
          </p>
          
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 transition-all duration-500"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.02em',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(157, 180, 160, 0.4)'
            }}
          >
            {data.name}
          </h1>
          
          <p
            className="text-2xl md:text-3xl mb-8"
            style={{ color: '#9DB4A0', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
          >
            {data.title}
          </p>
          
          <p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#D1D5DB', fontFamily: 'Inter, sans-serif', fontWeight: '300' }}
          >
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection('about')}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: '#9DB4A0',
                border: '2px solid #9DB4A0',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              About
            </Button>
            <Button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: '#7C98AB',
                border: '2px solid #7C98AB',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Experience
            </Button>
            <Button
              onClick={handleDownloadResume}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              style={{
                backgroundColor: '#9D8B73',
                color: '#FFFFFF',
                border: 'none',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600'
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;