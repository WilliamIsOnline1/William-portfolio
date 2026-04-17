import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ personalData }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12" style={{ backgroundColor: '#05080F', borderTop: '2px solid rgba(122, 158, 126, 0.2)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#F8F9FA', fontFamily: 'Inter, sans-serif' }}>
                {personalData.name}
              </h3>
              <p className="text-sm" style={{ color: '#C1C9D2', fontFamily: 'Inter, sans-serif', opacity: 0.7 }}>
                © {currentYear} All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#0D1219', border: '2px solid #82AC87' }}
                aria-label="Email"
              >
                <Mail size={20} color="#82AC87" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#0D1219', border: '2px solid #648CB0' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="#648CB0" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#0D1219', border: '2px solid #8B7358' }}
                aria-label="GitHub"
              >
                <Github size={20} color="#8B7358" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;