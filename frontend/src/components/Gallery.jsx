import React from 'react';
import { Card } from './ui/card';

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: 'https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/yn1x33up_internship%20handshake%20wade.jpg',
      caption: 'Internship Experience'
    },
    {
      id: 2,
      url: 'https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/5kuwq5wc_internship%20photo%20with%20wade.jpg',
      caption: 'Professional Development'
    },
    {
      id: 3,
      url: 'https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/5868alhn_Internship%20Group%20Photo.jpg',
      caption: 'Team Collaboration'
    }
  ];

  return (
    <section id="gallery" className="py-24 relative" style={{ backgroundColor: '#0D1219' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#F8F9FA',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 30px rgba(248, 249, 250, 0.5), 0 0 60px rgba(130, 172, 135, 0.3)'
            }}
          >
            Gallery
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #82AC87, #648CB0)' }}></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: '#05080F', border: '1px solid #82AC87' }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p
                    className="text-center text-sm"
                    style={{ color: '#82AC87', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}
                  >
                    {image.caption}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;