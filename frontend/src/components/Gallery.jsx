import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    'https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/5868alhn_Internship%20Group%20Photo.jpg',
    'https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/yn1x33up_internship%20handshake%20wade.jpg',
    'https://customer-assets.emergentagent.com/job_profile-portal-52/artifacts/5kuwq5wc_internship%20photo%20with%20wade.jpg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 relative ambient-bg section-blend-top section-blend-bottom" style={{ backgroundColor: '#0D1219' }}>
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
            Gallery
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 transition-all duration-500" style={{ background: 'linear-gradient(90deg, #82AC87, #648CB0)' }}></div>
          
          {/* Slideshow Container */}
          <div className="relative">
            {/* Image with smooth fade transition */}
            <div className="w-full aspect-video overflow-hidden">
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-full object-contain transition-opacity duration-700 ease-in-out"
                style={{ animation: 'fadeIn 0.7s ease-in-out' }}
              />
            </div>
            
            {/* Left Arrow - positioned away from photo, stretched vertically, more transparent */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: 'transparent' }}
              aria-label="Previous image"
            >
              <ChevronLeft size={48} color="#F8F9FA" style={{ opacity: 0.4, transform: 'scaleY(1.3)' }} className="hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            {/* Right Arrow - positioned away from photo, stretched vertically, more transparent */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: 'transparent' }}
              aria-label="Next image"
            >
              <ChevronRight size={48} color="#F8F9FA" style={{ opacity: 0.4, transform: 'scaleY(1.3)' }} className="hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: currentIndex === index ? '#82AC87' : '#648CB0',
                    opacity: currentIndex === index ? 1 : 0.5
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;