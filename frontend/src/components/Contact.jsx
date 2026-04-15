import React from 'react';
import { Mail } from 'lucide-react';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-32 relative" style={{ backgroundColor: '#000000' }}>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-30">
        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-xs" style={{ color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace' }}>
          {personalInfo.name}
        </span>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glowing "Say Hello" text - WHITE GLOW */}
          <h2
            className="text-7xl md:text-8xl font-bold mb-6 transition-all duration-500"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.5), 0 0 120px rgba(255, 255, 255, 0.3)'
            }}
          >
            Say Hello
          </h2>
          
          <p
            className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}
          >
            Always open to meeting new people—feel free to say hello if you'd like to connect.
          </p>
          
          {/* Email only */}
          <div className="flex justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-4 px-12 py-6 rounded-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{
                backgroundColor: '#0A0A0A',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(#0A0A0A, #0A0A0A), linear-gradient(135deg, #A855F7, #FFD700, #FFA500)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <div className="p-3 rounded-lg" style={{ background: 'linear-gradient(135deg, #A855F7, #FFD700)' }}>
                <Mail size={28} color="#000000" />
              </div>
              <div className="text-left">
                <p className="text-sm mb-1" style={{ color: '#FFA500', fontFamily: 'JetBrains Mono, monospace' }}>Email</p>
                <p className="font-medium text-xl" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
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
