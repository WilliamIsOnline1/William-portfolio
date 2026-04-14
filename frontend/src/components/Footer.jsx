import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8" style={{ backgroundColor: '#1F2933' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#F8FAFC', fontFamily: 'Inter, sans-serif' }}>
              © {currentYear} Alex Rivera. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href="mailto:alex.rivera@email.com"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#7C9A92' }}
                aria-label="Email"
              >
                <Mail size={20} color="#F8FAFC" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#7C9A92' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="#F8FAFC" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#7C9A92' }}
                aria-label="GitHub"
              >
                <Github size={20} color="#F8FAFC" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
