import React from 'react';

const Footer = () => {
  return (
    <footer id='contact' className="bg-red-500 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">PizzaMenia</h2>
            <div className="space-y-2 text-md">
              <p>123 Pizza St.</p>
              <p>Manhattan, New York, NY 10001</p>
              <p>United States</p>
            </div>
            <div className="space-y-2 text-md">
              <p>contact@PizzaMenia.pizza</p>
              <p>delivery@PizzaMenia.pizza</p>
            </div>
            <div className="space-y-1 text-md">
              <p><span className="font-semibold">Monday - Friday:</span> 9 AM - 10 PM</p>
              <p><span className="font-semibold">Saturday:</span> 10 AM - 11 PM</p>
              <p><span className="font-semibold">Sunday:</span> 10 AM - 8 PM</p>
            </div>
          </div>

           <div>
            <h3 className="text-lg font-semibold mb-4 text-white">MENU</h3>
            <ul className="space-y-3 text-md">
              <li><a href="#" className="hover:text-red-200 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Useful Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">USEFUL</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Refunds & Cancellation</a></li>
            </ul>
          </div>

           <div>
            <h3 className="text-lg font-semibold mb-4 text-white">SOCIAL</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-200 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Trip Advisor</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Youtube</a></li>
              <li><a href="#" className="hover:text-red-200 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;