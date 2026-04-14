import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            Experience
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#7C9A92' }}></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="p-6 transition-all duration-300 hover:shadow-lg" style={{ borderLeft: '4px solid #7C9A92' }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#7C9A92' }}>
                    <Briefcase size={24} color="#F8FAFC" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
                        {exp.position}
                      </h3>
                      <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#D6B98C', color: '#1F2933' }}>
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-4" style={{ color: '#7C9A92', fontFamily: 'Inter, sans-serif' }}>
                      {exp.company}
                    </p>
                    
                    <p className="mb-4" style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={18} className="mt-1 flex-shrink-0" style={{ color: '#7C9A92' }} />
                          <span style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>{achievement}</span>
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
