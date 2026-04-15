import React from 'react';

const About = ({ content, personalData }) => {
  return (
    <section id="about" className="py-24 relative" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-30">
        <img
          src={personalData.image}
          alt={personalData.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace' }}>
          {personalData.name}
        </span>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 15px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 165, 0, 0.2)'
            }}
          >
            About Me
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500)' }}></div>
          
          <p
            className="text-lg leading-relaxed text-center transition-all duration-500"
            style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', lineHeight: '1.8', opacity: 0.9 }}
          >
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
