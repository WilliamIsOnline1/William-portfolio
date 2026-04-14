import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-24 relative" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-40">
        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#2A2A2E', fontFamily: 'Inter, sans-serif' }}>
          {personalInfo.name}
        </span>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center transition-all duration-500" style={{ color: '#2A2A2E', fontFamily: 'Merriweather, serif' }}>
            Get In Touch
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-12 transition-all duration-500" style={{ backgroundColor: '#8B9D83' }}></div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-lg mb-8" style={{ color: '#4A4A4A', fontFamily: 'Inter, sans-serif' }}>
              I'd love to hear from you. Feel free to reach out through any of the following channels.
            </p>
            
            <div className="space-y-4">
              <Card className="p-6 transition-all duration-500 hover:shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#8B9D83' }}>
                    <Mail size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#8B9D83', fontFamily: 'Inter, sans-serif' }}>Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-lg transition-all duration-300 hover:opacity-70"
                      style={{ color: '#2A2A2E' }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 transition-all duration-500 hover:shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#8B9D83' }}>
                    <Phone size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#8B9D83', fontFamily: 'Inter, sans-serif' }}>Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="font-medium text-lg transition-all duration-300 hover:opacity-70"
                      style={{ color: '#2A2A2E' }}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 transition-all duration-500 hover:shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#8B9D83' }}>
                    <MapPin size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#8B9D83', fontFamily: 'Inter, sans-serif' }}>Location</p>
                    <p className="font-medium text-lg" style={{ color: '#2A2A2E' }}>
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
