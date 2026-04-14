import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const Education = ({ education, personalData }) => {
  return (
    <section id="education" className="py-24 relative" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-40">
        <img
          src={personalData.image}
          alt={personalData.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#2A2A2E', fontFamily: 'Inter, sans-serif' }}>
          {personalData.name}
        </span>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{ color: '#2A2A2E', fontFamily: 'Merriweather, serif' }}
          >
            Education
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ backgroundColor: '#8B9D83' }}></div>
          
          <div className="space-y-6">
            {education.map((edu) => (
              <Card
                key={edu.id}
                className="p-8 transition-all duration-500 hover:shadow-2xl hover:scale-102"
                style={{ backgroundColor: '#FFFFFF', borderLeft: '4px solid #A89068' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg transition-all duration-300" style={{ backgroundColor: '#A89068' }}>
                    <GraduationCap size={24} color="#FFFFFF" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3
                        className="text-2xl font-bold transition-all duration-300"
                        style={{ color: '#2A2A2E', fontFamily: 'Merriweather, serif' }}
                      >
                        {edu.degree}
                      </h3>
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: '#8B9D83', color: '#FFFFFF' }}
                      >
                        {edu.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-2 transition-all duration-300" style={{ color: '#8B9D83', fontFamily: 'Inter, sans-serif' }}>
                      {edu.institution}
                    </p>
                    
                    <p className="mb-2 font-medium transition-all duration-300" style={{ color: '#4A4A4A' }}>
                      GPA: {edu.gpa}
                    </p>
                    
                    <p className="transition-all duration-300" style={{ color: '#6A6A6A', fontFamily: 'Inter, sans-serif' }}>
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
