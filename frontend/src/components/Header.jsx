import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 shadow-lg' : 'py-4'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(42, 42, 46, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:opacity-80"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={data.image}
              alt={data.name}
              className={`rounded-full object-cover border-2 transition-all duration-500 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
              style={{ borderColor: '#8B9D83' }}
            />
            <h3
              className={`font-bold transition-all duration-500 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}
              style={{ color: '#E8E8E8', fontFamily: 'Merriweather, serif' }}
            >
              {data.name}
            </h3>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium transition-all duration-300 hover:opacity-70"
                style={{ color: '#C8C8C8', fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#E8E8E8' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 space-y-3">
            {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-sm font-medium transition-all duration-300 hover:opacity-70"
                style={{ color: '#C8C8C8', fontFamily: 'Inter, sans-serif' }}
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
