import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

const Experience = ({ experiences, skills, personalData }) => {
  return (
    <section id="experience" className="py-24 relative" style={{ backgroundColor: '#000000' }}>
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
              textShadow: '0 0 15px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 165, 0, 0.2)'
            }}
          >
            Experience
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500)' }}></div>
          
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="p-8 transition-all duration-500 hover:shadow-2xl hover:scale-102"
                style={{ backgroundColor: '#0A0A0A', borderLeft: '4px solid #FFD700', border: 'none' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg transition-all duration-300" style={{ backgroundColor: '#FFD700' }}>
                    <Briefcase size={24} color="#000000" />
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
                        style={{ backgroundColor: '#FFA500', color: '#000000', fontFamily: 'JetBrains Mono, monospace', fontWeight: '600' }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg mb-4 transition-all duration-300" style={{ color: '#FFD700', fontFamily: 'JetBrains Mono, monospace' }}>
                      {exp.company}
                    </p>
                    
                    <p className="mb-4 transition-all duration-300" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 transition-all duration-300">
                          <CheckCircle size={18} className="mt-1 flex-shrink-0" style={{ color: '#FFA500' }} />
                          <span style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', opacity: 0.85 }}>{achievement}</span>
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
                textShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
              }}
            >
              Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: '#FFD700', fontFamily: 'JetBrains Mono, monospace' }}>
                  Technical
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-md transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', border: '1px solid #FFD700', fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: '#FFA500', fontFamily: 'JetBrains Mono, monospace' }}>
                  Software & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-md transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', border: '1px solid #FFA500', fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: '#FFD700', fontFamily: 'JetBrains Mono, monospace' }}>
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-md transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', border: '1px solid #FFD700', fontFamily: 'Inter, sans-serif' }}
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
