import React from "react";

const Showcase = () => {
  const products = [
    {
      id: 1,
      name: "Men's Jacket",
      image: "https://via.placeholder.com/300x400?text=Men+Jacket",
    },
    {
      id: 2,
      name: "Women's Shirt",
      image: "https://via.placeholder.com/300x400?text=Women+Shirt",
    },
    {
      id: 3,
      name: "Casual Hoodie",
      image: "https://via.placeholder.com/300x400?text=Hoodie",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
