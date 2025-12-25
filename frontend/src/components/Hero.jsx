import React, { useRef } from 'react';

const Hero = ({ onSearch, onLogoClick }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.search?.value;
    if (query) {
      onSearch(query);
    }
  };

  const handleCategoryClick = (term) => {
    if (inputRef.current) {
      inputRef.current.value = term;
    }
    onSearch(term);
  };

  return (
    <header className="backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <button type="button" onClick={onLogoClick} className="flex items-center gap-3 mr-2 focus:outline-none">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow flex items-center justify-center">
              {/* Price tag logo */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden>
                <path d="M21 13.34L10.66 3H5a2 2 0 00-2 2v5.66L13.34 21a2 2 0 002.83 0L21 16.17a2 2 0 000-2.83zM7.5 8A1.5 1.5 0 116 6.5 1.5 1.5 0 017.5 8z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">PriceWise</span>
          </button>

          <form onSubmit={handleSubmit} className="flex-1">
            <div className="flex items-center gap-2 bg-white rounded-full shadow ring-1 ring-gray-200 px-4 py-2">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="text"
                name="search"
                required
                placeholder="Search for products across all apps..."
                ref={inputRef}
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Category pills (now clickable) */}
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={() => handleCategoryClick('Electronics')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold shadow bg-gradient-to-r from-rose-400 to-red-500 transition transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300">
            <span className="h-2.5 w-2.5 rounded-full bg-white/90" /> Electronics
          </button>
          <button onClick={() => handleCategoryClick('Home Goods')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold shadow bg-gradient-to-r from-emerald-400 to-teal-500 transition transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300">
            <span className="h-2.5 w-2.5 rounded-full bg-white/90" /> Home Goods
          </button>
          <button onClick={() => handleCategoryClick('Sports')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold shadow bg-gradient-to-r from-sky-400 to-indigo-500 transition transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300">
            <span className="h-2.5 w-2.5 rounded-full bg-white/90" /> Sports
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
