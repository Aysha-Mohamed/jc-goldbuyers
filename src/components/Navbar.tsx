import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
 import Logo from './Logo.tsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ${
        isScrolled ? '-translate-y-12' : 'translate-y-0'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#B8860B] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <a
              href="tel:201-332-1551"
              className="flex items-center gap-2 hover:text-gray-200 text-sm sm:text-base font-barlow whitespace-nowrap"
            >
              <Phone size={16} className="hidden sm:block" />
              <span>(201)-332-1551</span>
            </a>

            <span className="text-sm sm:text-base font-barlow whitespace-nowrap text-center">
              10.30AM - 6PM Mon - Thurs &nbsp;|&nbsp;  10.30AM - 5PM Fri &nbsp; | &nbsp; 12.30PM - 4.30PM Sat
            </span>

            <a
              href="mailto:info@jcgoldbuyers.com"
              className="flex items-center gap-2 hover:text-gray-200 text-sm sm:text-base font-barlow"
            >
              <Mail size={16} className="hidden sm:block" />
              <span className="hidden sm:inline">info@jcgoldbuyers.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? 'h-24 sm:h-32' : 'h-32 sm:h-40'
            }`}
          >
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.slice(0, 2).map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-barlow uppercase tracking-wide text-base font-semibold text-gray-800 hover:text-[#B8860B] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex-1 flex justify-center">
              <Logo isScrolled={isScrolled} />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.slice(2).map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-barlow uppercase tracking-wide text-base font-semibold text-gray-800 hover:text-[#B8860B] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-800 hover:text-[#B8860B] focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex flex-col space-y-4 pb-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-barlow uppercase tracking-wide text-lg font-semibold text-gray-800 hover:text-[#B8860B] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;