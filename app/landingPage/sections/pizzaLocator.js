"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PizzaLocator = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const cities = [
    {
      name: 'Mumbai',
      image: 'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Delhi',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      color: 'from-amber-500 to-orange-500'
    },
    {
      name: 'Bangalore',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/vidhana-soudha-bangalore-karnataka-hero?qlt=82&ts=1726719027301',
      color: 'from-teal-500 to-green-500'
    },
    {
      name: 'Chennai',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/vidhana-soudha-bangalore-karnataka-hero?qlt=82&ts=1726719027301',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Kolkata',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/vidhana-soudha-bangalore-karnataka-hero?qlt=82&ts=1726719027301',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const sections = [
    {
      id: 'delivery',
      title: 'Delivery Zones',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>Our delivery zones cover major areas in each city:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Metro Cities</h4>
              <ul className="space-y-1 text-sm">
                <li>• Mumbai: All areas within 15km radius</li>
                <li>• Delhi NCR: Gurgaon, Noida, Faridabad</li>
                <li>• Bangalore: Whitefield, Koramangala, Indiranagar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Tier-1 Cities</h4>
              <ul className="space-y-1 text-sm">
                <li>• Chennai: T. Nagar, Anna Nagar, Velachery</li>
                <li>• Kolkata: Salt Lake, Park Street, Ballygunge</li>
                <li>• Hyderabad: Hitech City, Banjara Hills</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'methods',
      title: 'Delivery Methods & Fees',
      content: (
        <div className="space-y-4 text-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Standard Delivery</h4>
              <p className="text-sm mb-2">30-45 minutes</p>
              <p className="text-green-600 font-semibold">₹29 delivery fee</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Express Delivery</h4>
              <p className="text-sm mb-2">20-30 minutes</p>
              <p className="text-orange-600 font-semibold">₹49 delivery fee</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Premium Delivery</h4>
              <p className="text-sm mb-2">15-25 minutes</p>
              <p className="text-purple-600 font-semibold">₹79 delivery fee</p>
            </div>
          </div>
          <p className="text-sm">Free delivery on orders above ₹499</p>
        </div>
      )
    },
    {
      id: 'pickup',
      title: 'Pickup Info',
      content: (
        <div className="space-y-4 text-gray-600">
          <p>Pickup your order from any of our store locations:</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-800">Ready in 15-20 minutes</h4>
                <p className="text-sm">Order online and collect from store</p>
              </div>
              <span className="text-green-600 font-semibold">No fees</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-800">Store Hours</h4>
                <p className="text-sm">Mon-Sun: 11:00 AM - 11:00 PM</p>
              </div>
              <span className="text-blue-600 font-semibold">All locations</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">Call ahead to confirm your order is ready</p>
        </div>
      )
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Nearest Pizza Spot
        </h1>
        <p className="text-lg text-gray-600">
          Locate our stores, check delivery zones, and pick the best option for you!
        </p>
      </div>

      {/* City Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {cities.map((city, index) => (
          <div
            key={city.name}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${city.color}/10 z-10`}></div>
              
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>
              
              {/* City Name */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg">
                  {city.name}
                </h3>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-30"></div>
            </div>
          </div>
        ))}
      </div>

       <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-800 mr-3">
                  {index + 1}.
                </span>
                <span className="text-lg font-semibold text-gray-800">
                  {section.title}
                </span>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            {expandedSection === section.id && (
              <div className="px-6 py-6 bg-white border-t border-gray-200">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaLocator;