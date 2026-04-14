import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from './ui/card';

const Recommendations = ({ recommendations }) => {
  return (
    <section id="recommendations" className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            Recommendations
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#7C9A92' }}></div>
          
          <div className="grid md:grid-cols-1 gap-6">
            {recommendations.map((rec) => (
              <Card key={rec.id} className="p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4">
                  <Quote size={32} style={{ color: '#7C9A92', opacity: 0.3 }} />
                </div>
                
                <p className="text-lg mb-6 italic leading-relaxed" style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>
                  "{rec.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{ borderColor: '#7C9A92' }}
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
                      {rec.name}
                    </h4>
                    <p className="text-sm" style={{ color: '#7C9A92' }}>
                      {rec.position}
                    </p>
                    <p className="text-sm" style={{ color: '#1F2933' }}>
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
