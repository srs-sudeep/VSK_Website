import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const aboutUsSection = document.getElementById('about-us');
  if (aboutUsSection) {
    if (window.scrollY >= aboutUsSection.offsetTop) {
      setNavbarBg('bg-orange-400');
    } else {
      setNavbarBg('bg-transparent');
    }
  }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full p-4 z-50 transition-colors duration-300 ${navbarBg}`}>
    <div className="container mx-auto relative flex justify-between items-center">
      <div className="text-2xl font-bold text-white">VSK</div>
      <div className="md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
      </div>
      <div className={`absolute top-full right-0 mt-2 md:relative md:flex space-x-4 mb-10 text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <a href="#hero" className="block md:inline-block mt-2 md:mt-0 ml-4">Hero</a>
        <a href="#about-us" className="block md:inline-block mt-2 md:mt-0">About Us</a>
        <a href="#map" className="block md:inline-block mt-2 md:mt-0">Map</a>
        <a href="#our-mission" className="block md:inline-block mt-2 md:mt-0">Our Mission</a>
        <a href="#contact-us" className="block md:inline-block mt-2 md:mt-0">Contact Us</a>
      </div>
    </div>
  </nav>
)}

export default Navbar;