import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ personalData }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12" style={{ backgroundColor: '#0A0A0A', borderTop: '2px solid #FFD700' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-6">
            <img
              src={personalData.image}
              alt={personalData.name}
              className="w-12 h-12 rounded-full object-cover border-2"
              style={{ borderColor: '#FFD700' }}
            />
            <h3 className="text-xl font-bold" style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
              {personalData.name}
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace', opacity: 0.7 }}>
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#000000', border: '2px solid #FFD700' }}
                aria-label="Email"
              >
                <Mail size={20} color="#FFD700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#000000', border: '2px solid #FFA500' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="#FFA500" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#000000', border: '2px solid #FFD700' }}
                aria-label="GitHub"
              >
                <Github size={20} color="#FFD700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
