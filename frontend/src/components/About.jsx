import React from 'react';

const About = ({ content }) => {
  return (
    <section id="about" className="py-24 relative" style={{ backgroundColor: '#0D1219' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center transition-all duration-500"
            style={{
              color: '#F8F9FA',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 0 30px rgba(248, 249, 250, 0.5), 0 0 60px rgba(130, 172, 135, 0.3)'
            }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #82AC87, #648CB0)' }}></div>
          
          <p
            className="text-lg leading-relaxed text-center transition-all duration-500"
            style={{ color: '#D1D9E6', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
          >
            {content}
          </p>
          
          {/* Small photo bubble at bottom */}
          <div className="flex justify-center mt-12">
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/6nzux661_professional%20photo%20%282%29.jpg"
                alt="William Davis"
                className="w-24 h-24 rounded-full object-cover border-3 transition-all duration-500 hover:scale-105"
                style={{
                  borderColor: '#82AC87',
                  boxShadow: '0 0 20px rgba(130, 172, 135, 0.3)',
                  objectPosition: 'center center'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;