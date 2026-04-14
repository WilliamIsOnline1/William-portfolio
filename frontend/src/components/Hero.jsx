import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={data.image}
              alt={data.name}
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 shadow-lg"
              style={{ borderColor: '#7C9A92' }}
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1F2933', fontFamily: 'Merriweather, serif' }}>
            {data.name}
          </h1>
          
          <p className="text-2xl mb-6" style={{ color: '#7C9A92', fontFamily: 'Inter, sans-serif' }}>
            {data.title}
          </p>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#1F2933', fontFamily: 'Inter, sans-serif' }}>
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm" style={{ color: '#1F2933' }}>
            <div className="flex items-center gap-2">
              <MapPin size={16} style={{ color: '#7C9A92' }} />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} style={{ color: '#7C9A92' }} />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} style={{ color: '#7C9A92' }} />
              <span>{data.phone}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#7C9A92', color: '#F8FAFC' }}
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection('experience')}
              variant="outline"
              className="px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: '#7C9A92', color: '#7C9A92' }}
            >
              View Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
