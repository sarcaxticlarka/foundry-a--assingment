"use client";
import React, { useState } from 'react';

const PizzaLandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const FloatingIngredient = ({ src, alt, className, animationDelay = 0, size = "w-12 h-12" }) => (
    <div 
      className={`absolute ${className} animate-bounce`}
      style={{ 
        animationDelay: `${animationDelay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite'
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`${size} object-contain drop-shadow-lg`}
      />
    </div>
  );

  return (
    <div id='hero' className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-10 relative overflow-hidden">
      {/* Floating Ingredients */}
      <FloatingIngredient 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKDOfc8UtKBmekAmiPw3h0tpRPOBTaC5j3g&s" 
        alt="Mushroom" 
        className="top-32 left-16" 
        animationDelay={0}
        size="w-16 h-16"
      />

      <FloatingIngredient 
        src="https://5.imimg.com/data5/SELLER/Default/2024/1/375681535/IX/YV/RQ/31083297/fresh-olive.jpeg" 
        alt="Olive" 
        className="top-30 right-20" 
        animationDelay={1}
        size="w-12 h-12"
      />

      <FloatingIngredient 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsqgMafLdRkqm5URKiVNz33vQYd7EOsrS4w&s" 
        alt="Basil leaf" 
        className="top-48 left-32" 
        animationDelay={2}
        size="w-14 h-14"
      />

      <FloatingIngredient 
        src="https://source.washu.edu/app/uploads/2015/11/Tomato250-1.jpg" 
        alt="Tomato" 
        className="top-64 right-32" 
        animationDelay={0.5}
        size="w-16 h-16"
      />

      <FloatingIngredient 
        src="https://5.imimg.com/data5/IP/YW/MY-58060047/bell-paper-28red-2c-green-2c-yellow-29-500x500.jpg" 
        alt="Bell PizzaMenia" 
        className="bottom-80 left-20" 
        animationDelay={1.5}
        size="w-14 h-14"
      />

      <FloatingIngredient 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKDOfc8UtKBmekAmiPw3h0tpRPOBTaC5j3g&s" 
        alt="Mushroom" 
        className="bottom-96 right-24" 
        animationDelay={2.5}
        size="w-16 h-16"
      />

      <FloatingIngredient 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdxhhyOMGBk5aSKPh1hNqkjbjJyAADOGxKw&s" 
        alt="Garlic" 
        className="bottom-72 right-80" 
        animationDelay={1}
        size="w-12 h-12"
      />

      <FloatingIngredient 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsqgMafLdRkqm5URKiVNz33vQYd7EOsrS4w&s" 
        alt="Basil" 
        className="bottom-60 left-80" 
        animationDelay={0.8}
        size="w-12 h-12"
      />

      {/* Header */}
      {/* <header className="flex justify-between items-center p-6 relative z-10">
        <div className="text-3xl font-bold text-red-500">
          PizzaMenia
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Menu</a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Contact</a>
        </nav>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors font-medium">
         Login Now
        </button>
      </header> */}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center px-4 relative z-10 mt-16">
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
          Your Pizza Party<br />
          Starts Here!
        </h1>
        
        <p className="text-xl text-gray-600 mb-4 max-w-2xl">
          Gather your friends and family and enjoy the best pizza in town.
        </p>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          Freshly made and delivered hot!
        </p>

        <button
          className="bg-red-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          View Our Menu
        </button>
      </main>

      {/* Pizza Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" 
          alt="Delicious pizza" 
          className="w-full h-64 object-cover object-top rounded-t-full shadow-2xl"
        />
      </div>

 
    </div>
  );
};

export default PizzaLandingPage;