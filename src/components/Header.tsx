import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Image, Users, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#hero', icon: null },
    { name: 'Sejarah', href: '#about', icon: null },
    { name: 'Timeline', href: '#timeline', icon: null },
    { name: 'Galeri', href: '#gallery', icon: Image },
    { name: 'Acara', href: '#events', icon: Calendar },
    { name: 'Partisipasi', href: '#participation', icon: Users },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/zX5cwdjc/pngtree-official-logo-of-indonesian-independence-2025-ri-anniversary-80-vector-png-image-16402671.png" 
              alt="HUT RI 80 Logo" 
              className="h-10 w-10 lg:h-12 lg:w-12 animate-float"
            />
            <div className="hidden lg:block">
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                HUT RI ke-80
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-red-600' : 'text-red-200'}`}>
                Dirgahayu Indonesia
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-red-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-red-200'
                }`}
              >
                {item.icon && <item.icon size={16} />}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="#participation" 
              className="btn-primary inline-flex items-center space-x-2 animate-pulse-custom"
            >
              <Users size={18} />
              <span>Bergabung</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl border border-red-100">
            <nav className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-700 font-medium py-2 transition-colors hover:text-red-600"
                >
                  {item.icon && <item.icon size={18} />}
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-red-100">
                <a 
                  href="#participation" 
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full text-center inline-flex items-center justify-center space-x-2"
                >
                  <Users size={18} />
                  <span>Bergabung Sekarang</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;