import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ personalData }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12" style={{ backgroundColor: '#1A1A1E' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Name and Photo at bottom */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <img
              src={personalData.image}
              alt={personalData.name}
              className="w-12 h-12 rounded-full object-cover border-2"
              style={{ borderColor: '#8B9D83' }}
            />
            <h3 className="text-xl font-bold" style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif' }}>
              {personalData.name}
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#B8B8B8', fontFamily: 'Inter, sans-serif' }}>
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#8B9D83' }}
                aria-label="Email"
              >
                <Mail size={20} color="#FFFFFF" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#8B9D83' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="#FFFFFF" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#8B9D83' }}
                aria-label="GitHub"
              >
                <Github size={20} color="#FFFFFF" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
