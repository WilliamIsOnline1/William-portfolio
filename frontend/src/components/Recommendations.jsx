import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from './ui/card';

const Recommendations = ({ recommendations, personalData }) => {
  return (
    <section id="recommendations" className="py-24 relative" style={{ backgroundColor: '#2A2A2E' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-30">
        <img
          src={personalData.image}
          alt={personalData.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#E8E8E8', fontFamily: 'Inter, sans-serif' }}>
          {personalData.name}
        </span>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center transition-all duration-500" style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif' }}>
            Recommendations
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ backgroundColor: '#8B9D83' }}></div>
          
          <div className="grid md:grid-cols-1 gap-6">
            {recommendations.map((rec) => (
              <Card key={rec.id} className="p-8 transition-all duration-500 hover:shadow-2xl" style={{ backgroundColor: '#353539', border: 'none' }}>
                <div className="mb-4">
                  <Quote size={32} style={{ color: '#8B9D83', opacity: 0.3 }} />
                </div>
                
                <p className="text-lg mb-6 italic leading-relaxed" style={{ color: '#C8C8C8', fontFamily: 'Inter, sans-serif' }}>
                  "{rec.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{ borderColor: '#8B9D83' }}
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif' }}>
                      {rec.name}
                    </h4>
                    <p className="text-sm" style={{ color: '#8B9D83' }}>
                      {rec.position}
                    </p>
                    <p className="text-sm" style={{ color: '#B8B8B8' }}>
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
