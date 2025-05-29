'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Menu = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth-check');
  };

  return (
    <div>
      <header className="flex fixed bg-gradient-to-br from-orange-50 to-red-50 justify-between items-center p-6 w-full z-50">
        {/* Logo / Home */}
        <div className="text-3xl font-bold text-red-500">
          <Link href="/" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
            PizzaMenia
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Home</a>
          <a href="#menu" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Menu</a>
          <a href="#offer" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Deal</a>
          <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Contact</a>
        </nav>

        {/* Login Button */}
        <button
          onClick={handleLoginClick}
          className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors font-medium"
        >
          Login Now
        </button>
      </header>
    </div>
  );
};

export default Menu;
