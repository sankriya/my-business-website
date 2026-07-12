import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', type: 'scroll' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Contact', href: '#contact', type: 'scroll' }
  ];

  const handleNavigation = (link: typeof navLinks[0]) => {
    if (link.type === 'route') {
      navigate(link.href);
    } else {
      // If we're not on home page, go to home first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/25">
                <img 
                  src="/sankriya_logo.png" 
                  alt="Sankriya Solutions Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Sankriya Solutions
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className={`relative ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 transition-all duration-300 py-2 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 font-medium">{link.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className={`block w-full text-left px-4 py-3 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;