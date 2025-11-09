
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from './icons/MenuIcons';

interface HeaderProps {
  activeSection: string;
}

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = (href: string) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 ease-in-out ${
      activeSection === href.substring(1)
        ? 'text-brand-secondary'
        : 'text-dark-subtext hover:text-dark-text'
    }`;
    
  const activeLinkIndicator = (href: string) =>
    activeSection === href.substring(1) && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary transform scale-x-100 transition-transform duration-300 ease-in-out" />
    );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-dark-card/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-dark-text hover:text-brand-secondary transition-colors duration-300">
              Your Name
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={navLinkClasses(link.href)}>
                  {link.label}
                  {activeLinkIndicator(link.href)}
                </a>
              ))}
            </div>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-subtext hover:text-dark-text hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.href.substring(1)
                    ? 'bg-brand-primary text-white'
                    : 'text-dark-subtext hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
