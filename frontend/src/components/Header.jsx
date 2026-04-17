import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  if (!isVisible) return null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-4 shadow-lg transition-all duration-500"
      style={{
        backgroundColor: 'rgba(5, 8, 15, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(90, 110, 120, 0.2)',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer transition-all duration-300 hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h3
              className="text-lg font-semibold transition-all duration-500"
              style={{ color: '#F8F9FA', fontFamily: 'Inter, sans-serif' }}
            >
              {data.name}
            </h3>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Education', 'Gallery', 'Awards', 'Links', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium transition-all duration-300 hover:opacity-70"
                style={{ color: '#82AC87', fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#F8F9FA' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 space-y-3">
            {['About', 'Experience', 'Education', 'Gallery', 'Awards', 'Links', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-sm font-medium transition-all duration-300 hover:opacity-70"
                style={{ color: '#82AC87', fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;