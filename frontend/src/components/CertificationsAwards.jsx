import React from 'react';
import { Award, Medal } from 'lucide-react';
import { Card } from './ui/card';

const CertificationsAwards = ({ certifications, awards, personalData }) => {
  return (
    <section id="certifications" className="py-24 relative" style={{ backgroundColor: '#000000' }}>
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
            Certifications & Awards
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500)' }}></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#FFD700', fontFamily: 'Inter, sans-serif' }}>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="p-4 transition-all duration-500 hover:shadow-xl" style={{ borderLeft: '3px solid #FFD700', backgroundColor: '#0A0A0A' }}>
                    <div className="flex items-start gap-3">
                      <Award size={20} className="mt-1 flex-shrink-0" style={{ color: '#FFD700' }} />
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                          {cert.name}
                        </h4>
                        <p className="text-sm mb-1" style={{ color: '#FFA500', fontFamily: 'JetBrains Mono, monospace' }}>
                          {cert.issuer}
                        </p>
                        <p className="text-xs" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#FFA500', fontFamily: 'Inter, sans-serif' }}>
                Awards
              </h3>
              <div className="space-y-4">
                {awards.map((award) => (
                  <Card key={award.id} className="p-4 transition-all duration-500 hover:shadow-xl" style={{ borderLeft: '3px solid #FFA500', backgroundColor: '#0A0A0A' }}>
                    <div className="flex items-start gap-3">
                      <Medal size={20} className="mt-1 flex-shrink-0" style={{ color: '#FFA500' }} />
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                          {award.title}
                        </h4>
                        <p className="text-sm mb-1" style={{ color: '#FFD700', fontFamily: 'JetBrains Mono, monospace' }}>
                          {award.organization}
                        </p>
                        <p className="text-xs" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                          {award.year}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAwards;
