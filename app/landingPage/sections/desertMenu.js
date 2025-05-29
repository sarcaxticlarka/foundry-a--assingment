"use client";
import React, { useState } from 'react';

const DessertMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const desserts = [
    {
      id: 1,
      name: "Nutella Pizza",
      description: "Pizza dough, Nutella spread, powdered sugar, strawberries (optional), whipped cream",
      price: "$7.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0D_QJP51wA43plXrb5nKgG4KsnwbMCPWc6w&s"
    },
    {
      id: 2,
      name: "Classic Cannoli",
      description: "Cannoli shells (flour, sugar, eggs), ricotta cheese, powdered sugar, chocolate chips, vanilla extract",
      price: "$5.99",
      priceNote: "/2 cannoli",
      image: "https://galbanicheese.com/wp-content/uploads/2019/09/galbani_cannoli-207-e1486413458396-576x600.jpg"
    },
    {
      id: 3,
      name: "Tiramisu Temptation",
      description: "Ladyfingers (flour, sugar, eggs), mascarpone cheese, espresso, cocoa powder, sugar, heavy cream",
      price: "$7.49",
      image: "https://assets.zeezest.com/blogs/PROD_tiramisu%20cover_1701448975983_thumb_1000.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Save Room for Dessert!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our desserts are worth it. Trust us, you won&apos;t want to miss these sweet delights.
          </p>
        </div>

        {/* Dessert Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {desserts.map((dessert) => (
            <div
              key={dessert.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform ${hoveredItem === dessert.id ? 'scale-105 shadow-2xl' : 'hover:scale-102 hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredItem(dessert.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {dessert.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {dessert.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                    Order Now
                  </button>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">
                      {dessert.price}
                    </span>
                    {dessert.priceNote && (
                      <span className="text-sm text-gray-500 block">
                        {dessert.priceNote}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            View Full Menu
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default DessertMenu;