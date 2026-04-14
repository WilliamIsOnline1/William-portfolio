import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

const Experience = ({ experiences, personalData }) => {
  return (
    <section id="experience" className="py-24 relative" style={{ backgroundColor: '#2A2A2E' }}>
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
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif' }}
          >
            Experience
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ backgroundColor: '#8B9D83' }}></div>
          
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="p-8 transition-all duration-500 hover:shadow-2xl hover:scale-102"
                style={{ backgroundColor: '#353539', borderLeft: '4px solid #8B9D83', border: 'none' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg transition-all duration-300" style={{ backgroundColor: '#8B9D83' }}>
                    <Briefcase size={24} color="#FFFFFF" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3
                        className="text-2xl font-bold transition-all duration-300"
                        style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif' }}
                      >
                        {exp.position}
                      </h3>
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: '#A89068', color: '#FFFFFF' }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-4 transition-all duration-300" style={{ color: '#8B9D83', fontFamily: 'Inter, sans-serif' }}>
                      {exp.company}
                    </p>
                    
                    <p className="mb-4 transition-all duration-300" style={{ color: '#B8B8B8', fontFamily: 'Inter, sans-serif' }}>
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 transition-all duration-300">
                          <CheckCircle size={18} className="mt-1 flex-shrink-0" style={{ color: '#8B9D83' }} />
                          <span style={{ color: '#C8C8C8', fontFamily: 'Inter, sans-serif' }}>{achievement}</span>
                        </div>
                      ))}
                    </div>
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

export default Experience;
