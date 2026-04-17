import React from 'react';
import { Mail } from 'lucide-react';

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
                className="p-3 rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#0D1219', border: '2px solid #82AC87' }}
                aria-label="Email"
              >
                <Mail size={20} color="#82AC87" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;