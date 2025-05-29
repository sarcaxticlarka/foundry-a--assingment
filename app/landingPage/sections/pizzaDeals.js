import React from 'react';

const PizzaDeals = () => {
  return (
    <div id='offer' className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
 
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hot Pizza, Hotter Deals</h1>
          <p className="text-lg text-gray-600">From family-sized deals to solo slices, find the perfect offer for your pizza cravings.</p>
        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="bg-red-500 rounded-2xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Spicy Duo Deal</h2>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                1 Medium Firecracker Inferno
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                1 Medium Buffalo Bliss
              </li>
            </ul>
            <div className="flex items-center justify-between mb-6">
              <button className="bg-white text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                Order Now
              </button>
              <div className="text-right">
                <span className="text-2xl font-bold">$21.99</span>
                <span className="text-red-200 ml-2">- Save $4</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
                <img src="https://stordflolretailpd.blob.core.windows.net/df-us/lolretail/media/lolr-media/recipe-collections/2024/2024.july/retail_collection_pizza-recipes-sausage-and-PizzaMenia-pizza_850x800.jpg?ext=.jpg" alt="Pizza 1" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
              <img src="https://content.jdmagicbox.com/comp/ranchi/y1/0651px651.x651.211102215744.x4y1/catalogue/domino-s-pizza-kanke-road-ranchi-pizza-outlets-J9N9MlhjUG.jpg" alt="Pizza 1" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>

        
          <div className="bg-yellow-400 rounded-2xl p-6 text-gray-900">
            <h2 className="text-2xl font-bold mb-4">Cheese Lovers Pair</h2>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                1 Medium Cheese Avalanche
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                1 Medium Truffle Temptation
              </li>
            </ul>
            <div className="flex items-center justify-between mb-6">
              <button className="bg-white text-yellow-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                Order Now
              </button>
              <div className="text-right">
                <span className="text-2xl font-bold">$22.99</span>
                <span className="text-yellow-700 ml-2">- Save $5</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
              <img src="https://www.delmonte.com/sites/default/files/MushroomPepPizza_0076.jpg" alt="Pizza 1" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center">
              <img src="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg" alt="Pizza 1" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

    
        <div className="bg-gray-900 rounded-2xl p-6 text-white mt-6">
          <h2 className="text-2xl font-bold mb-4">Meat Feast Combo</h2>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              1 Medium Meat Lover's Feast
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              1 Medium BBQ Blaze
            </li>
          </ul>
          <div className="flex items-center justify-between mb-6">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
              Order Now
            </button>
            <div className="text-right">
              <span className="text-2xl font-bold">$23.99</span>
              <span className="text-gray-400 ml-2">- Save $6</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <img src="https://embed.widencdn.net/img/beef/pz4eba64j5/1120x840px/beef-PizzaMenia-and-onion-pizza-horizontal.tif?keep=c&u=7fueml" alt="Pizza Image 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
            <img src="https://halo-pg.com/wp-content/uploads/2021/10/Ultimate-Stuffed-Meatlovers-Pizza-1.jpg" alt="Pizza Image 1" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaDeals;