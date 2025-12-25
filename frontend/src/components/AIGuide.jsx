// frontend/src/components/AIGuide.jsx
import React from 'react';

// A simple sparkle icon
const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const AIGuide = ({ guide }) => {
  if (!guide) {
    return null; 
  }

  return (
    <div className="max-w-5xl mx-auto my-6 p-6 bg-white/90 border border-gray-200 rounded-2xl shadow-sm">
      <div className="flex items-center mb-5 border-b pb-4">
        <div className="bg-emerald-500/90 text-white p-3 rounded-full mr-4 shadow">
          <SparkleIcon />
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800 flex items-center">
          <span className="mr-2">AI Shopping Guide</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Top Pick Recommendation Card */}
        <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-emerald-700 mb-2">Top Recommendation:</h3>
            <p className="text-xl font-extrabold text-gray-900 mb-3">{guide.top_pick_title}</p>
            
            <p className="text-gray-700 mb-5 border-l-4 border-emerald-300 pl-4 py-2 bg-emerald-50 italic">
                "{guide.reasoning}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center">
                    <span className="text-xl mr-2">👍</span> Pros:
                </h4>
                <ul className="list-disc list-inside text-emerald-800 space-y-1">
                  {guide.pros.map((pro, index) => <li key={index}>{pro}</li>)}
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-700 mb-2 flex items-center">
                    <span className="text-xl mr-2">👎</span> Cons:
                </h4>
                 <ul className="list-disc list-inside text-red-800 space-y-1">
                  {guide.cons.map((con, index) => <li key={index}>{con}</li>)}
                </ul>
              </div>
            </div>
            
             {guide.url && (
                <a
                  href={guide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block w-full text-center bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow text-base"
                >
                  View Recommended Deal →
                </a>
              )}
        </div>
        
        {/* Image Display */}
        <div className="md:col-span-1 flex justify-center items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
            {guide.image_url ? (
                <img 
                    src={guide.image_url} 
                    alt={guide.top_pick_title} 
                    className="max-h-72 w-auto object-contain rounded-lg shadow"
                />
            ) : (
                <div className="text-center text-gray-500 italic p-6">Image not available</div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AIGuide;
