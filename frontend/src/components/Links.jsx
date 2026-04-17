import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

const Links = () => {
  const links = [
    {
      id: 1,
      title: 'LinkedIn',
      url: 'https://linkedin.com',
      description: 'Connect with me professionally',
      color: '#648CB0'
    },
    {
      id: 2,
      title: 'GitHub',
      url: 'https://github.com',
      description: 'View my projects and code',
      color: '#82AC87'
    },
    {
      id: 3,
      title: 'Resume',
      url: '/William_Davis_Resume.pdf',
      description: 'Download my full resume',
      color: '#8B7358'
    }
  ];

  return (
    <section id="links" className="py-24 relative" style={{ backgroundColor: '#0D1219' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#F8F9FA',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 30px rgba(248, 249, 250, 0.5), 0 0 60px rgba(100, 140, 176, 0.3)'
            }}
          >
            Links
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #82AC87, #648CB0)' }}></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="block"
              >
                <Card
                  className="p-6 transition-all duration-500 hover:shadow-xl hover:scale-105 text-center"
                  style={{ backgroundColor: '#05080F', border: `2px solid ${link.color}` }}
                >
                  <ExternalLink size={32} className="mx-auto mb-4" style={{ color: link.color }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#F8F9FA', fontFamily: 'Inter, sans-serif' }}>
                    {link.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#C1C9D2', fontFamily: 'Inter, sans-serif' }}>
                    {link.description}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;