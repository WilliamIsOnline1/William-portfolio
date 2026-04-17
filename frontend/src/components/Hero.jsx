import React from 'react';
import { Button } from './ui/button';
import { Beaker } from 'lucide-react';

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
    <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#05080F' }}>
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Professional Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden transition-all duration-500 hover:scale-105" style={{ border: '3px solid #82AC87', boxShadow: '0 0 40px rgba(122, 158, 126, 0.2)' }}>
              <img
                src="https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/pb72rl1p_professional%20photo.jpg"
                alt="William Davis"
                className="w-full h-full object-cover"
                style={{ objectPosition: '45% center' }}
              />
            </div>
          </div>
          
          <p
            className="text-xl mb-3 transition-all duration-500"
            style={{ color: '#648CB0', fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
          >
            Hi, I'm
          </p>
          
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 transition-all duration-500"
            style={{
              color: '#F8F9FA',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.02em',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(122, 158, 126, 0.3)'
            }}
          >
            {data.name}
          </h1>
          
          <p
            className="text-2xl md:text-3xl mb-8"
            style={{ color: '#82AC87', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
          >
            {data.title}
          </p>
          
          <p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#C1C9D2', fontFamily: 'Inter, sans-serif', fontWeight: '300' }}
          >
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection('about')}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: '#82AC87',
                border: '2px solid #82AC87',
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
                color: '#648CB0',
                border: '2px solid #648CB0',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Experience
            </Button>
            <Button
              onClick={handleDownloadResume}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              style={{
                backgroundColor: '#8B7358',
                color: '#F8F9FA',
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