import React from 'react';

const About = ({ content }) => {
  return (
    <section id="about" className="py-24 relative" style={{ backgroundColor: '#0D1219' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(122, 158, 126, 0.3)'
            }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #7A9E7E, #5A7A8A)' }}></div>
          
          <p
            className="text-lg leading-relaxed text-center transition-all duration-500"
            style={{ color: '#D1D9E6', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
          >
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;