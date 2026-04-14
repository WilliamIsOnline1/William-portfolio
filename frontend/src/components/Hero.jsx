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
    alert('Resume download will be implemented with backend');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2A2A2E' }}>
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <img
              src={data.image}
              alt={data.name}
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ borderColor: '#8B9D83' }}
            />
          </div>
          
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 transition-all duration-500"
            style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif', letterSpacing: '-0.02em' }}
          >
            {data.name}
          </h1>
          
          <p
            className="text-2xl md:text-3xl mb-8"
            style={{ color: '#8B9D83', fontFamily: 'Inter, sans-serif', fontWeight: '300' }}
          >
            {data.title}
          </p>
          
          <p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#B8B8B8', fontFamily: 'Inter, sans-serif', fontWeight: '300' }}
          >
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection('about')}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{
                backgroundColor: '#8B9D83',
                color: '#FFFFFF',
                border: 'none',
              }}
            >
              About
            </Button>
            <Button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: '#8B9D83',
                border: '2px solid #8B9D83',
              }}
            >
              Experience
            </Button>
            <Button
              onClick={handleDownloadResume}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{
                backgroundColor: '#A89068',
                color: '#FFFFFF',
                border: 'none',
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
