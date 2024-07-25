'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          CONSEPT CONNECT
        </h2>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <a href="/" className="text-white text-[16px] leading-[24px] hover:underline">
            Home
          </a>
          <a href="/services" className="text-white text-[16px] leading-[24px] hover:underline">
            Services
          </a>
          <a href="/contact" className="text-white text-[16px] leading-[24px] hover:underline">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black bg-opacity-70 text-white p-4 md:hidden">
          {/* Logo at the Top */}
          <div className="flex justify-center mb-4">
            <img
              src="/logo.svg" // Replace with your logo path
              alt="Logo"
              className="h-[50px] object-contain"
            />
          </div>

          <a href="/" className="block text-[16px] leading-[24px] hover:underline mb-2">
            Home
          </a>
          <a href="/services" className="block text-[16px] leading-[24px] hover:underline mb-2">
            Services
          </a>
          <a href="/contact" className="block text-[16px] leading-[24px] hover:underline mb-2">
            Contact
          </a>

          {/* Cylindrical Neon Button */}
          <a
            href="/contact"
            className="block text-center text-white text-[16px] leading-[24px] bg-purple-600 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            style={{ 
              textDecoration: 'none',
              background: 'linear-gradient(90deg, rgba(128,0,128,1) 0%, rgba(255,0,255,1) 100%)',
              boxShadow: '0 4px 20px rgba(128,0,128,0.5)',
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
