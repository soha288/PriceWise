// frontend/src/App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductResults from './components/ProductResults';
import AIGuide from './components/AIGuide';

// Reusing existing components and logic

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [aiGuide, setAiGuide] = useState(null);
  const [activeSite, setActiveSite] = useState('All'); 

  const handleLogoClick = () => {
    setIsLoading(false);
    setProducts([]);
    setSearched(false);
    setAiGuide(null);
    setActiveSite('All');
    // no fetch here; purely UI reset to show <Features />
  };

  const handleSearch = async (query) => {
    if (!query) return;

    setIsLoading(true);
    setProducts([]);
    setSearched(true);
    setAiGuide(null);
    setActiveSite('All'); // Reset filter immediately

    try {
      // Assuming the backend is running on port 9003
      const response = await fetch(
        `http://localhost:9004/api/search?product_name=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      const sortedResults = (data.results || []).sort((a, b) => a.price - b.price);
      setProducts(sortedResults);

      const buildFallback = (list) => {
        if (!list || list.length === 0) return null;
        const p = list[0];
        return {
          top_pick_title: p.title || 'Top Pick',
          reasoning: 'Recommended based on lowest price and availability.',
          pros: ['Good price', `Available on ${p.site}`],
          cons: ['Check warranty/return policy'],
          image_url: p.img,
          url: p.url,
        };
      };

      const guideFromBackend = data.ai_guide || {};
      const guide = sortedResults.length
        ? {
            top_pick_title: guideFromBackend.top_pick_title || sortedResults[0]?.title || 'Top Pick',
            reasoning: guideFromBackend.reasoning || 'Recommended based on overall value.',
            pros: Array.isArray(guideFromBackend.pros) && guideFromBackend.pros.length > 0
              ? guideFromBackend.pros
              : ['Good price', 'Solid features'],
            cons: Array.isArray(guideFromBackend.cons) && guideFromBackend.cons.length > 0
              ? guideFromBackend.cons
              : ['Limited details from source'],
            image_url: guideFromBackend.image_url || sortedResults[0]?.img,
            url: guideFromBackend.url || sortedResults[0]?.url,
          }
        : null;

      setAiGuide(guide || buildFallback(sortedResults)); 
      
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Filtered products based on selected site
  const filteredProducts =
    activeSite === 'All'
      ? products
      : products.filter((p) => p.site === activeSite);

  // Unique site names (auto-detected)
  const siteNames = ['All', ...new Set(products.map((p) => p.site))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-sky-50">
      <Hero onSearch={handleSearch} onLogoClick={handleLogoClick} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl ring-1 ring-gray-200 overflow-hidden">
          {/* Loading state */}
          {isLoading && (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
              <p className="text-2xl font-semibold text-blue-600">Searching multiple platforms...</p>
              <p className="text-lg text-gray-500 mt-2">Analyzing results and generating an AI Shopping Guide...</p>
            </div>
          )}

          {!isLoading && !searched && <Features />}

          {!isLoading && searched && (
            <div className="grid grid-cols-1 gap-6 p-6">
              {/* Filters + AI Guide + Results */}
              <div>
                {/* Filter pill bar */}
                <div className="sticky top-16 z-10">
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 mb-4">
                    <div className="flex items-baseline justify-between mb-3">
                      <h2 className="text-xl font-bold text-gray-800">
                        {filteredProducts.length} Results
                        {activeSite !== 'All' && (
                          <span className="text-base font-medium text-blue-600 ml-2">on {activeSite}</span>
                        )}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {siteNames.map((site) => (
                        <button
                          key={site}
                          onClick={() => setActiveSite(site)}
                          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                            activeSite === site
                              ? 'text-white shadow ring-1 ring-black/5 ' +
                                (site === 'All' ? 'bg-blue-600' : 'bg-blue-600')
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {site}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI guide block below filters */}
                {aiGuide && (
                  <div className="mt-4">
                    <AIGuide guide={aiGuide} />
                  </div>
                )}

                <ProductResults products={filteredProducts} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
