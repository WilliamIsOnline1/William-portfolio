import React from 'react';
import { Award, Medal } from 'lucide-react';
import { Card } from './ui/card';

const CertificationsAwards = ({ certifications, awards }) => {
  return (
    <section id="certifications" className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            Certifications & Awards
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#7C9A92' }}></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#7C9A92', fontFamily: 'Merriweather, serif' }}>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="p-4 transition-all duration-300 hover:shadow-lg" style={{ borderLeft: '3px solid #7C9A92' }}>
                    <div className="flex items-start gap-3">
                      <Award size={20} className="mt-1 flex-shrink-0" style={{ color: '#7C9A92' }} />
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>
                          {cert.name}
                        </h4>
                        <p className="text-sm mb-1" style={{ color: '#7C9A92' }}>
                          {cert.issuer}
                        </p>
                        <p className="text-xs" style={{ color: '#1F2933' }}>
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Awards */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#D6B98C', fontFamily: 'Merriweather, serif' }}>
                Awards
              </h3>
              <div className="space-y-4">
                {awards.map((award) => (
                  <Card key={award.id} className="p-4 transition-all duration-300 hover:shadow-lg" style={{ borderLeft: '3px solid #D6B98C' }}>
                    <div className="flex items-start gap-3">
                      <Medal size={20} className="mt-1 flex-shrink-0" style={{ color: '#D6B98C' }} />
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>
                          {award.title}
                        </h4>
                        <p className="text-sm mb-1" style={{ color: '#D6B98C' }}>
                          {award.organization}
                        </p>
                        <p className="text-xs" style={{ color: '#1F2933' }}>
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
