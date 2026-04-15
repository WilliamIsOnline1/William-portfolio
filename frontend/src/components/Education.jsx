import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const Education = ({ education, personalData }) => {
  return (
    <section id="education" className="py-24 relative" style={{ backgroundColor: '#141B2D' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-30">
        <img
          src={personalData.image}
          alt={personalData.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
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
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(157, 180, 160, 0.3)'
            }}
          >
            Education
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #9DB4A0, #7C98AB)' }}></div>
          
          <div className="space-y-6">
            {education.map((edu) => (
              <Card
                key={edu.id}
                className="p-8 transition-all duration-500 hover:shadow-xl hover:scale-102"
                style={{ backgroundColor: '#0A0E1A', borderLeft: '4px solid #9DB4A0' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg transition-all duration-300" style={{ backgroundColor: '#9DB4A0' }}>
                    <GraduationCap size={24} color="#0A0E1A" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3
                        className="text-2xl font-bold transition-all duration-300"
                        style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
                      >
                        {edu.degree}
                      </h3>
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: '#9D8B73', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        {edu.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-2 transition-all duration-300" style={{ color: '#9DB4A0', fontFamily: 'Inter, sans-serif' }}>
                      {edu.institution}
                    </p>
                    
                    <p className="transition-all duration-300" style={{ color: '#D1D5DB', fontFamily: 'Inter, sans-serif' }}>
                      {edu.relevant}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;