import React from 'react';

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const PriceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
  </svg>
);

const CompareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const Feature = ({ icon, title, children, className = '' }) => (
  <div className={`flex flex-col items-center text-center p-6 rounded-2xl ring-1 shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg ${className}`}>
    <div className="flex-shrink-0 mb-3 text-amber-500">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Features = () => {
  return (
    <div className="bg-white/70 border-t border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-4">
        <Feature icon={<LightningIcon />} title="Lightning Fast" className="bg-sky-50 ring-sky-100 hover:ring-sky-200">
          Get results from the platforms in seconds.
        </Feature>
        <Feature icon={<PriceIcon />} title="Best Price Guaranteed" className="bg-emerald-50 ring-emerald-100 hover:ring-emerald-200">
          We highlight the lowest prices automatically and recommend you the best deal.
        </Feature>
        <Feature icon={<CompareIcon />} title="Smart Comparison" className="bg-sky-50 ring-sky-100 hover:ring-sky-200">
          Compare similar products side by side.
        </Feature>
      </div>

      {/* Brand illustration section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 ring-1 ring-gray-200 rounded-3xl overflow-hidden shadow-sm p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Website depiction */}
            <div className="relative">
              <div className="w-full h-64 md:h-72 rounded-2xl shadow-md bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 flex items-center justify-center">
                {/* Abstract storefront UI illustration */}
                <svg viewBox="0 0 400 240" className="w-[92%] h-[82%]">
                  <rect x="10" y="20" width="380" height="200" rx="16" fill="#ffffff" stroke="#d1e9ff"/>
                  <rect x="26" y="36" width="348" height="36" rx="18" fill="#f1f5ff" />
                  <circle cx="52" cy="54" r="10" fill="#38bdf8"/>
                  <rect x="75" y="45" width="200" height="18" rx="9" fill="#cfe8ff" />
                  <rect x="26" y="86" width="110" height="110" rx="12" fill="#ecfeff" stroke="#bae6fd"/>
                  <rect x="146" y="86" width="110" height="110" rx="12" fill="#f0f9ff" stroke="#bae6fd"/>
                  <rect x="266" y="86" width="110" height="110" rx="12" fill="#e6fffb" stroke="#a7f3d0"/>
                  <rect x="38" y="168" width="86" height="10" rx="5" fill="#93c5fd"/>
                  <rect x="158" y="168" width="86" height="10" rx="5" fill="#93c5fd"/>
                  <rect x="278" y="168" width="86" height="10" rx="5" fill="#34d399"/>
                </svg>
              </div>
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-sky-700 ring-1 ring-sky-200 shadow">
                Compare prices across stores
              </span>
            </div>
            {/* AI Guide emphasis */}
            <div className="relative">
              <div className="w-full h-64 md:h-72 rounded-2xl shadow-md bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 flex items-center justify-center">
                {/* AI guide illustration */}
                <svg viewBox="0 0 400 240" className="w-[92%] h-[82%]">
                  <rect x="14" y="18" width="372" height="204" rx="16" fill="#ffffff" stroke="#d1fae5"/>
                  <rect x="32" y="34" width="150" height="16" rx="8" fill="#86efac"/>
                  <rect x="32" y="60" width="336" height="56" rx="12" fill="#ecfdf5" stroke="#a7f3d0"/>
                  <circle cx="72" cy="88" r="18" fill="#34d399" opacity="0.9"/>
                  <rect x="110" y="74" width="120" height="12" rx="6" fill="#6ee7b7"/>
                  <rect x="110" y="92" width="190" height="10" rx="5" fill="#bbf7d0"/>
                  <rect x="32" y="128" width="160" height="70" rx="12" fill="#f0fdfa" stroke="#99f6e4"/>
                  <rect x="206" y="128" width="162" height="70" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
                  <rect x="44" y="182" width="80" height="10" rx="5" fill="#22d3ee"/>
                  <rect x="218" y="182" width="110" height="10" rx="5" fill="#60a5fa"/>
                </svg>
              </div>
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 shadow">
                AI Guide: pros, cons & best deal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
