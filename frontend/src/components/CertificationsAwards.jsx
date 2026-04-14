import React from 'react';
import { Award, Medal } from 'lucide-react';
import { Card } from './ui/card';

const CertificationsAwards = ({ certifications, awards, personalData }) => {
  return (
    <section id="certifications" className="py-24 relative" style={{ backgroundColor: '#F5F5F5' }}>
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
          <h2 className="text-5xl font-bold mb-6 text-center transition-all duration-500" style={{ color: '#2A2A2E', fontFamily: 'Merriweather, serif' }}>
            Certifications & Awards
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ backgroundColor: '#8B9D83' }}></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#8B9D83', fontFamily: 'Merriweather, serif' }}>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="p-4 transition-all duration-500 hover:shadow-xl" style={{ borderLeft: '3px solid #8B9D83', backgroundColor: '#FFFFFF' }}>
                    <div className="flex items-start gap-3">
                      <Award size={20} className="mt-1 flex-shrink-0" style={{ color: '#8B9D83' }} />
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: '#2A2A2E', fontFamily: 'Inter, sans-serif' }}>
                          {cert.name}
                        </h4>
                        <p className="text-sm mb-1" style={{ color: '#8B9D83' }}>
                          {cert.issuer}
                        </p>
                        <p className="text-xs" style={{ color: '#6A6A6A' }}>
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#A89068', fontFamily: 'Merriweather, serif' }}>
                Awards
              </h3>
              <div className="space-y-4">
                {awards.map((award) => (
                  <Card key={award.id} className="p-4 transition-all duration-500 hover:shadow-xl" style={{ borderLeft: '3px solid #A89068', backgroundColor: '#FFFFFF' }}>
                    <div className="flex items-start gap-3">
                      <Medal size={20} className="mt-1 flex-shrink-0" style={{ color: '#A89068' }} />
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: '#2A2A2E', fontFamily: 'Inter, sans-serif' }}>
                          {award.title}
                        </h4>
                        <p className="text-sm mb-1" style={{ color: '#A89068' }}>
                          {award.organization}
                        </p>
                        <p className="text-xs" style={{ color: '#6A6A6A' }}>
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
