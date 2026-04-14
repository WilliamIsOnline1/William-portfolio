import React from 'react';
import { Card } from './ui/card';

const Skills = ({ skills, personalData }) => {
  return (
    <section id="skills" className="py-24 relative" style={{ backgroundColor: '#2A2A2E' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-30">
        <img
          src={personalData.image}
          alt={personalData.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#E8E8E8', fontFamily: 'Inter, sans-serif' }}>
          {personalData.name}
        </span>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center transition-all duration-500" style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif' }}>
            Skills
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ backgroundColor: '#8B9D83' }}></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 transition-all duration-500 hover:shadow-2xl" style={{ backgroundColor: '#353539', border: 'none' }}>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#8B9D83', fontFamily: 'Merriweather, serif' }}>
                Technical Skills
              </h3>
              <div className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#2A2A2E', border: '1px solid #8B9D83', color: '#E8E8E8' }}>
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 transition-all duration-500 hover:shadow-2xl" style={{ backgroundColor: '#353539', border: 'none' }}>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#A89068', fontFamily: 'Merriweather, serif' }}>
                Software & Tools
              </h3>
              <div className="space-y-2">
                {skills.software.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#2A2A2E', border: '1px solid #A89068', color: '#E8E8E8' }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 transition-all duration-500 hover:shadow-2xl" style={{ backgroundColor: '#353539', border: 'none' }}>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#8B9D83', fontFamily: 'Merriweather, serif' }}>
                Soft Skills
              </h3>
              <div className="space-y-2">
                {skills.soft.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#2A2A2E', border: '1px solid #8B9D83', color: '#E8E8E8' }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
