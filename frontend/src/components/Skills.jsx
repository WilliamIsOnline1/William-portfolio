import React from 'react';
import { Card } from './ui/card';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            Skills
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#7C9A92' }}></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#7C9A92', fontFamily: 'Merriweather, serif' }}>
                Technical Skills
              </h3>
              <div className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg text-center transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#F8FAFC', border: '1px solid #7C9A92', color: '#1F2933' }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#D6B98C', fontFamily: 'Merriweather, serif' }}>
                Software & Tools
              </h3>
              <div className="space-y-2">
                {skills.software.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg text-center transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#F8FAFC', border: '1px solid #D6B98C', color: '#1F2933' }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#7C9A92', fontFamily: 'Merriweather, serif' }}>
                Soft Skills
              </h3>
              <div className="space-y-2">
                {skills.soft.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg text-center transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#F8FAFC', border: '1px solid #7C9A92', color: '#1F2933' }}
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
