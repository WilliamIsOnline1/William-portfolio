import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

const Experience = ({ experiences, skills }) => {
  return (
    <section id="experience" className="py-24 relative" style={{ backgroundColor: '#05080F' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(90, 122, 138, 0.3)'
            }}
          >
            Experience
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #7A9E7E, #5A7A8A)' }}></div>
          
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="p-8 transition-all duration-500 hover:shadow-xl hover:scale-102"
                style={{ backgroundColor: '#0D1219', borderLeft: '4px solid #5A7A8A', border: 'none' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg transition-all duration-300" style={{ backgroundColor: '#5A7A8A' }}>
                    <Briefcase size={24} color="#FFFFFF" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3
                        className="text-2xl font-bold transition-all duration-300"
                        style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
                      >
                        {exp.position}
                      </h3>
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: '#7A6850', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-4 transition-all duration-300" style={{ color: '#7A9E7E', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>
                      {exp.company}
                    </p>
                    
                    <p className="mb-4 transition-all duration-300" style={{ color: '#C1C9D2', fontFamily: 'Inter, sans-serif' }}>
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 transition-all duration-300">
                          <CheckCircle size={18} className="mt-1 flex-shrink-0" style={{ color: '#5A7A8A' }} />
                          <span style={{ color: '#D1D9E6', fontFamily: 'Inter, sans-serif' }}>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Skills Section */}
          <div className="mt-16">
            <h3
              className="text-3xl font-bold mb-8 text-center"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.4)'
              }}
            >
              Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: '#7A9E7E', fontFamily: 'Inter, sans-serif' }}>
                  Technical
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-md transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0D1219', color: '#FFFFFF', border: '1px solid #7A9E7E', fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: '#5A7A8A', fontFamily: 'Inter, sans-serif' }}>
                  Software & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-md transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0D1219', color: '#FFFFFF', border: '1px solid #5A7A8A', fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: '#7A6850', fontFamily: 'Inter, sans-serif' }}>
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-md transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0D1219', color: '#FFFFFF', border: '1px solid #7A6850', fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;