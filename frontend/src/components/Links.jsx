import React from 'react';
import { ExternalLink } from 'lucide-react';

const Links = () => {
  const links = [
    {
      id: 1,
      title: 'White House Healthy Lunch Winner',
      url: 'https://www.shreveporttimes.com/story/news/local/louisiana/2015/07/13/local-student-visits-white-house-healthy-lunch-winner/30076005/',
      source: 'Shreveport Times',
      color: '#82AC87'
    },
    {
      id: 2,
      title: 'Young Chefs Dine at White House',
      url: 'https://kpcnotebook.scholastic.com/post/young-chefs-dine-white-house',
      source: 'Scholastic',
      color: '#648CB0'
    },
    {
      id: 3,
      title: 'Top Five Moments - Kids State Dinner',
      url: 'https://letsmove.obamawhitehouse.archives.gov/blog/2016/07/19/top-five-moments-2016-kids%E2%80%99-%E2%80%9Cstate-dinner%E2%80%9D',
      source: 'White House Archives',
      color: '#82AC87'
    },
    {
      id: 4,
      title: 'Aspiring Chef Wins $30,000',
      url: 'https://www.shreveporttimes.com/story/news/education/2016/12/05/caddo-7th-grader-aspiring-chef-wins-15000-himself-30000-school/94995144/',
      source: 'Shreveport Times',
      color: '#648CB0'
    },
    {
      id: 5,
      title: 'Caddo Magnet Senior Receives Scholarship',
      url: 'https://www.ksla.com/2022/05/11/senior-caddo-magnet-high-receives-scholarship-sheriffs-office/',
      source: 'KSLA News',
      color: '#8B7358'
    }
  ];

  return (
    <section id="links" className="py-24 relative ambient-bg section-blend-top section-blend-bottom" style={{ backgroundColor: '#0D1219' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
          
          {/* Condensed grid layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="p-4 rounded-lg transition-all duration-300 hover:scale-105 h-full border-l-4"
                  style={{ 
                    backgroundColor: '#05080F',
                    borderLeftColor: link.color
                  }}
                >
                  <div className="flex items-start gap-3">
                    <ExternalLink size={20} className="mt-1 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" style={{ color: link.color }} />
                    <div>
                      <h3 className="text-base font-semibold mb-1 transition-all duration-300" style={{ color: '#F8F9FA', fontFamily: 'Inter, sans-serif', lineHeight: '1.3' }}>
                        {link.title}
                      </h3>
                      <p className="text-xs" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
                        {link.source}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;