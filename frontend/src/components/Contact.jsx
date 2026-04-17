import React from 'react';
import { Mail } from 'lucide-react';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-32 relative" style={{ backgroundColor: '#0D1219' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glowing "Say Hello" text */}
          <h2
            className="text-7xl md:text-8xl font-bold mb-6 transition-all duration-500"
            style={{
              color: '#F8F9FA',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(122, 158, 126, 0.5), 0 0 120px rgba(90, 122, 138, 0.3)'
            }}
          >
            Say Hello
          </h2>
          
          <p
            className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#C1C9D2', fontFamily: 'Inter, sans-serif' }}
          >
            Always open to meeting new people—feel free to say hello if you'd like to connect.
          </p>
          
          {/* Email only */}
          <div className="flex justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-4 px-12 py-6 rounded-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{
                backgroundColor: '#05080F',
                border: '2px solid #82AC87',
              }}
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#82AC87' }}>
                <Mail size={28} color="#05080F" />
              </div>
              <div className="text-left">
                <p className="text-sm mb-1" style={{ color: '#648CB0', fontFamily: 'Inter, sans-serif' }}>Email</p>
                <p className="font-medium text-xl" style={{ color: '#F8F9FA', fontFamily: 'Inter, sans-serif' }}>
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