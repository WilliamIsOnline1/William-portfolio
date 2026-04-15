import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ personalData }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12" style={{ backgroundColor: '#141B2D', borderTop: '2px solid rgba(157, 180, 160, 0.2)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-6">
            <img
              src={personalData.image}
              alt={personalData.name}
              className="w-12 h-12 rounded-full object-cover border-2"
              style={{ borderColor: '#9DB4A0' }}
            />
            <h3 className="text-xl font-bold" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
              {personalData.name}
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#D1D5DB', fontFamily: 'Inter, sans-serif', opacity: 0.7 }}>
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#0A0E1A', border: '2px solid #9DB4A0' }}
                aria-label="Email"
              >
                <Mail size={20} color="#9DB4A0" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#0A0E1A', border: '2px solid #7C98AB' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="#7C98AB" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#0A0E1A', border: '2px solid #9D8B73' }}
                aria-label="GitHub"
              >
                <Github size={20} color="#9D8B73" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;