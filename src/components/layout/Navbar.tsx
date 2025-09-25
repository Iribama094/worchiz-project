import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Smooth scrolling function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className="fixed w-full z-50 transition-all duration-300 bg-primary py-3">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/worchiz-logo.png" alt="Worchiz Nigeria Limited Logo" className="h-16 md:h-20 mr-3" />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center w-full space-x-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-all duration-200 ${location.pathname === link.path ? 'text-secondary' : 'text-white hover:text-secondary'}`}
              onClick={e => handleNavClick(e, link.path)}
            >
              {link.name}
            </Link>
          ))}
          <span className="ml-8">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary-light text-primary font-medium px-5 py-2 rounded transition-all duration-200"
              onClick={e => handleNavClick(e, '/contact')}
            >
              Get Started
            </Link>
          </span>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-primary absolute w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col items-center space-y-4">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-all duration-200 ${location.pathname === link.path ? 'text-secondary' : 'text-white hover:text-secondary'}`} onClick={e => {
          handleNavClick(e, link.path);
          setIsOpen(false);
        }}>
                {link.name}
              </Link>)}
            <Link to="/contact" className="bg-secondary hover:bg-secondary-light text-primary font-medium px-5 py-2 rounded transition-all duration-200 text-center" onClick={e => {
          handleNavClick(e, '/contact');
          setIsOpen(false);
        }}>
              Get Started
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;