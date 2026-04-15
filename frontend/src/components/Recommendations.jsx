import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from './ui/card';

const Recommendations = ({ recommendations, personalData }) => {
  return (
    <section id="recommendations" className="py-24 relative" style={{ backgroundColor: '#0A0A0A' }}>
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
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)'
            }}
          >
            Recommendations
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #A855F7, #FFD700, #FFA500)' }}></div>
          
          <div className="grid md:grid-cols-1 gap-6">
            {recommendations.map((rec, index) => (
              <Card key={rec.id} className="p-8 transition-all duration-500 hover:shadow-2xl" style={{ backgroundColor: '#000000', border: 'none' }}>
                <div className="mb-4">
                  <Quote size={32} style={{ color: index % 3 === 0 ? '#A855F7' : index % 3 === 1 ? '#FFD700' : '#FFA500', opacity: 0.4 }} />
                </div>
                
                <p className="text-lg mb-6 italic leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
                  "{rec.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{ borderColor: index % 3 === 0 ? '#A855F7' : index % 3 === 1 ? '#FFD700' : '#FFA500' }}
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                      {rec.name}
                    </h4>
                    <p className="text-sm" style={{ color: index % 3 === 0 ? '#A855F7' : index % 3 === 1 ? '#FFD700' : '#FFA500', fontFamily: 'JetBrains Mono, monospace' }}>
                      {rec.position}
                    </p>
                    <p className="text-sm" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', opacity: 0.7 }}>
                      {rec.company}
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

export default Recommendations;
