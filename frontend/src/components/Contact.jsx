import React from 'react';
import { Mail } from 'lucide-react';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-32 relative" style={{ backgroundColor: '#111827' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-30">
        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#E5E7EB', fontFamily: 'JetBrains Mono, monospace' }}>
          {personalInfo.name}
        </span>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glowing "Say Hello" text */}
          <h2
            className="text-7xl md:text-8xl font-bold mb-6 transition-all duration-500"
            style={{
              color: '#E5E7EB',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 40px rgba(229, 231, 235, 0.5), 0 0 80px rgba(229, 231, 235, 0.3), 0 0 120px rgba(229, 231, 235, 0.2)'
            }}
          >
            Say Hello
          </h2>
          
          <p
            className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}
          >
            Always open to meeting new people—feel free to say hello if you'd like to connect.
          </p>
          
          {/* Email only */}
          <div className="flex justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-4 px-12 py-6 rounded-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{
                backgroundColor: '#1F2937',
                border: '1px solid #9CA3AF',
              }}
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#9CA3AF' }}>
                <Mail size={28} color="#111827" />
              </div>
              <div className="text-left">
                <p className="text-sm mb-1" style={{ color: '#9CA3AF', fontFamily: 'JetBrains Mono, monospace' }}>Email</p>
                <p className="font-medium text-xl" style={{ color: '#E5E7EB', fontFamily: 'Inter, sans-serif' }}>
                  {personalInfo.email}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
