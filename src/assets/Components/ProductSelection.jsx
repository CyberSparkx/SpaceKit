import React from "react";

const products = [
  {
    id: 1,
    name: "EXPLORER BAG",
    color: "WHITE/BLACK",
    price: "$26",
    image: "/Space Kit Images 03.jpg",
  },
  {
    id: 2,
    name: "JOURNEY WITHIN BOOK",
    color: "WHITE/ORANGE",
    price: "$12",
    image: "/Space Kit Images 04.jpg",
  },
  {
    id: 3,
    name: "MORNING BREW MUG",
    color: "WHITE/ORANGE",
    price: "$32",
    image: "/Space Kit Images 02.jpg",
  },
];

const ProductSection = () => {
  return (
    <div className="w-full pb-32 pt-36 bg-gray-100 p-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold tracking-wide">× OUR PRODUCTS</h2>
          <p className="text-gray-500 text-sm">All collection</p>
        </div>
        <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded">
          SHOP NOW
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  {products.map((product) => (
    <div key={product.id} className="bg-white flex flex-col">
      <div className="w-full h-80 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full hover:scale-110 duration-700  h-full object-cover"
        />
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-bold">{product.price}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ProductSection;
