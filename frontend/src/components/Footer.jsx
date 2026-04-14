import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ personalData }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12" style={{ backgroundColor: '#1F2937', borderTop: '1px solid #374151' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-6">
            <img
              src={personalData.image}
              alt={personalData.name}
              className="w-12 h-12 rounded-full object-cover border-2"
              style={{ borderColor: '#9CA3AF' }}
            />
            <h3 className="text-xl font-bold" style={{ color: '#E5E7EB', fontFamily: 'Inter, sans-serif' }}>
              {personalData.name}
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#9CA3AF', fontFamily: 'JetBrains Mono, monospace' }}>
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#111827', border: '1px solid #9CA3AF' }}
                aria-label="Email"
              >
                <Mail size={20} color="#E5E7EB" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#111827', border: '1px solid #9CA3AF' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="#E5E7EB" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#111827', border: '1px solid #9CA3AF' }}
                aria-label="GitHub"
              >
                <Github size={20} color="#E5E7EB" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
