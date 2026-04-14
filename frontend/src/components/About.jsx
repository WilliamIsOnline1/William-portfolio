import React from 'react';

const About = ({ content }) => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#7C9A92' }}></div>
          
          <p className="text-lg leading-relaxed" style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
