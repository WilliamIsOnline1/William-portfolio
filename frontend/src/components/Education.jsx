import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            Education
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#7C9A92' }}></div>
          
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="p-6 transition-all duration-300 hover:shadow-lg" style={{ borderLeft: '4px solid #D6B98C' }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#D6B98C' }}>
                    <GraduationCap size={24} color="#1F2933" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
                        {edu.degree}
                      </h3>
                      <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#7C9A92', color: '#F8FAFC' }}>
                        {edu.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-2" style={{ color: '#7C9A92', fontFamily: 'Inter, sans-serif' }}>
                      {edu.institution}
                    </p>
                    
                    <p className="mb-2 font-medium" style={{ color: '#1F2933' }}>
                      GPA: {edu.gpa}
                    </p>
                    
                    <p style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>
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
