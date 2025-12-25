import React from 'react';

const ProductCard = ({ product }) => (
  <div className="border border-gray-200 rounded-xl shadow-lg bg-white overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <div className="h-56 flex items-center justify-center p-6 bg-white border-b">
        <img src={product.img} alt={product.title} className="max-h-full max-w-full object-contain" />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-base font-medium text-gray-700 flex-grow mb-3 leading-snug">
        {product.title}
      </h3>
      <div className="mt-auto pt-3 border-t border-dashed">
        <p className="text-3xl font-extrabold text-blue-700 mb-1">
          <span className="text-2xl font-semibold">₹</span>{product.price.toLocaleString('en-IN')}
        </p>
        <p className="text-sm text-gray-500 mb-4 font-semibold">on <span className="text-blue-600">{product.site}</span></p>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-amber-400 text-blue-900 font-bold py-3 rounded-lg hover:bg-amber-500 transition-colors shadow-md"
        >
          View Deal →
        </a>
      </div>
    </div>
  </div>
);

const ProductResults = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 bg-white m-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-red-500">😔 No Products Found</h2>
        <p className="text-gray-600 mt-3 text-lg">We couldn't find any deals for that search term. Please try a different query.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Today's Top Picks</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={`${product.url}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductResults;
