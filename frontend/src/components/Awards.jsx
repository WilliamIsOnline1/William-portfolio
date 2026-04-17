import React from 'react';
import { Medal } from 'lucide-react';
import { Card } from './ui/card';

const Awards = ({ awards }) => {
  return (
    <section id="awards" className="py-24 relative" style={{ backgroundColor: '#05080F' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#F8F9FA',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 30px rgba(248, 249, 250, 0.5), 0 0 60px rgba(139, 115, 88, 0.3)'
            }}
          >
            Awards
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #82AC87, #8B7358)' }}></div>
          
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {awards.map((award) => (
              <Card key={award.id} className="p-6 transition-all duration-500 hover:shadow-xl" style={{ borderLeft: '4px solid #8B7358', backgroundColor: '#0D1219' }}>
                <div className="flex items-start gap-4">
                  <Medal size={28} className="mt-1 flex-shrink-0" style={{ color: '#8B7358' }} />
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#F8F9FA', fontFamily: 'Inter, sans-serif' }}>
                      {award.title}
                    </h4>
                    <p className="text-base mb-1" style={{ color: '#82AC87', fontFamily: 'Inter, sans-serif' }}>
                      {award.organization}
                    </p>
                    <p className="text-sm" style={{ color: '#C1C9D2', opacity: 0.7 }}>
                      {award.year}
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

export default Awards;