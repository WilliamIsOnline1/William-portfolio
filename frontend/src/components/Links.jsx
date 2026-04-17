import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

const Links = () => {
  const links = [
    {
      id: 1,
      title: 'White House Healthy Lunch Winner',
      url: 'https://www.shreveporttimes.com/story/news/local/louisiana/2015/07/13/local-student-visits-white-house-healthy-lunch-winner/30076005/',
      description: 'Shreveport Times - July 2015',
      color: '#82AC87'
    },
    {
      id: 2,
      title: 'Top Five Moments - Kids State Dinner',
      url: 'https://letsmove.obamawhitehouse.archives.gov/blog/2016/07/19/top-five-moments-2016-kids%E2%80%99-%E2%80%9Cstate-dinner%E2%80%9D',
      description: 'Let\'s Move! White House Archives - July 2016',
      color: '#648CB0'
    },
    {
      id: 3,
      title: 'Aspiring Chef Wins $30,000',
      url: 'https://www.shreveporttimes.com/story/news/education/2016/12/05/caddo-7th-grader-aspiring-chef-wins-15000-himself-30000-school/94995144/',
      description: 'Shreveport Times - December 2016',
      color: '#8B7358'
    }
  ];

  return (
    <section id="links" className="py-24 relative ambient-bg section-blend-top section-blend-bottom" style={{ backgroundColor: '#0D1219' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#F8F9FA',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 30px rgba(248, 249, 250, 0.5), 0 0 60px rgba(100, 140, 176, 0.3)'
            }}
          >
            In The News
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #82AC87, #648CB0)' }}></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="p-6 transition-all duration-500 hover:shadow-xl hover:scale-105 h-full"
                  style={{ backgroundColor: '#05080F', border: `2px solid ${link.color}` }}
                >
                  <div className="flex flex-col h-full">
                    <ExternalLink size={28} className="mb-4" style={{ color: link.color }} />
                    <h3 className="text-lg font-bold mb-3 flex-grow" style={{ color: '#F8F9FA', fontFamily: 'Inter, sans-serif', lineHeight: '1.4' }}>
                      {link.title}
                    </h3>
                    <p className="text-sm" style={{ color: '#C1C9D2', fontFamily: 'Inter, sans-serif' }}>
                      {link.description}
                    </p>
                  </div>
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