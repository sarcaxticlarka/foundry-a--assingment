import React from 'react';

const PizzaMenu = () => {
  const pizzas = [
    {
      id: 1,
      name: "PizzaMeniaoni Popper",
      description: "Double PizzaMeniaoni, mozzarella, spicy marinara sauce, crushed red PizzaMenia, black olives",
      price: 14.99,
      image: "https://eldiario.com/wp-content/uploads/2022/02/Pizza.jpg"
    },
    {
      id: 2,
      name: "Garlic Supreme",
      description: "Roasted garlic cloves, caramelized onions, mozzarella, Parmesan, Alfredo sauce, fresh parsley",
      price: 13.99,
      image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/2caca97b-77f6-48e7-837d-62642c0c9861/Derivates/12591894-e010-4a02-b04e-2627d8374298.jpg"
    },
    {
      id: 3,
      name: "Margarita Muse",
      description: "Fresh mozzarella, ripe tomatoes, basil leaves, extra virgin olive oil, sea salt, marinara sauce",
      price: 12.99,
      image: "https://oilandvinegarusa.com/cdn/shop/articles/thumb-pizza-piccante.jpg?v=1727107155"
    }
  ];

  return (
    <div id='menu' className="min-h-screen bg-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Fan Favorites</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From classic combinations to bold flavors, these pizzas top our list for a reason.
          </p>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Pizza Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Pizza Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pizza.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {pizza.description}
                </p>
                
                {/* Price and Order Section */}
                <div className="flex items-center justify-between">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105">
                    Order Now
                  </button>
                  <div className="text-right">
                    <span className="text-gray-500 text-sm">from </span>
                    <span className="text-2xl font-bold text-gray-900">${pizza.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200 transform hover:scale-105">
            View full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;