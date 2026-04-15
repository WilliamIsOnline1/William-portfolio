import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from './ui/card';

const Recommendations = ({ recommendations, personalData }) => {
  return (
    <section id="recommendations" className="py-24 relative" style={{ backgroundColor: '#141B2D' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-30">
        <img
          src={personalData.image}
          alt={personalData.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
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
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(124, 152, 171, 0.3)'
            }}
          >
            Recommendations
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #7C98AB, #9DB4A0)' }}></div>
          
          <div className="grid md:grid-cols-1 gap-6">
            {recommendations.map((rec, index) => (
              <Card key={rec.id} className="p-8 transition-all duration-500 hover:shadow-xl" style={{ backgroundColor: '#0A0E1A', border: 'none' }}>
                <div className="mb-4">
                  <Quote size={32} style={{ color: index % 3 === 0 ? '#9DB4A0' : index % 3 === 1 ? '#7C98AB' : '#9D8B73', opacity: 0.4 }} />
                </div>
                
                <p className="text-lg mb-6 italic leading-relaxed" style={{ color: '#E5E7EB', fontFamily: 'Inter, sans-serif' }}>
                  "{rec.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{ borderColor: index % 3 === 0 ? '#9DB4A0' : index % 3 === 1 ? '#7C98AB' : '#9D8B73' }}
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                      {rec.name}
                    </h4>
                    <p className="text-sm" style={{ color: index % 3 === 0 ? '#9DB4A0' : index % 3 === 1 ? '#7C98AB' : '#9D8B73', fontFamily: 'Inter, sans-serif' }}>
                      {rec.position}
                    </p>
                    <p className="text-sm" style={{ color: '#D1D5DB', fontFamily: 'Inter, sans-serif', opacity: 0.7 }}>
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