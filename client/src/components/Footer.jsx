// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-3 z-50 shadow-lg">
      <p className="text-sm">&copy; {new Date().getFullYear()} My E-Commerce App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
