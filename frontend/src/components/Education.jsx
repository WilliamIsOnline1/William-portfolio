import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const Education = ({ education, personalData }) => {
  return (
    <section id="education" className="py-24 relative" style={{ backgroundColor: '#0A0A0A' }}>
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
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)'
            }}
          >
            Education
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #A855F7, #FFD700, #FFA500)' }}></div>
          
          <div className="space-y-6">
            {education.map((edu) => (
              <Card
                key={edu.id}
                className="p-8 transition-all duration-500 hover:shadow-2xl hover:scale-102"
                style={{ backgroundColor: '#000000', borderLeft: '4px solid #A855F7' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg transition-all duration-300" style={{ backgroundColor: '#A855F7' }}>
                    <GraduationCap size={24} color="#000000" />
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
                        style={{ backgroundColor: '#FFD700', color: '#000000', fontFamily: 'JetBrains Mono, monospace', fontWeight: '600' }}
                      >
                        {edu.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-2 transition-all duration-300" style={{ color: '#A855F7', fontFamily: 'JetBrains Mono, monospace' }}>
                      {edu.institution}
                    </p>
                    
                    {edu.gpa && (
                      <p className="mb-2 font-medium transition-all duration-300" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
                        GPA: {edu.gpa}
                      </p>
                    )}
                    
                    <p className="transition-all duration-300" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', opacity: 0.85 }}>
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
