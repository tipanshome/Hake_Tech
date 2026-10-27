import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';
import { baseCategories, geospatialProducts } from '../data/products';

export default function ProductsPage() {
  useDocumentTitle(
    'Products & GeoSuite Platform',
    'Enterprise geospatial software suite: GeoDesk, GeoWeb, GeoMobile 360, GeoAI, and Integrated Command Solutions.'
  );
  const [activeCategory, setActiveCategory] = useState("all");

  const allProducts = [...geospatialProducts];

  const categories = baseCategories.map(cat => {
    const count = cat.id === "all"
      ? allProducts.length
      : allProducts.filter(p => p.category === cat.match).length;
    return {
      ...cat,
      count,
      label: `${cat.label} (${count})`
    };
  });

  const filteredProducts = activeCategory === "all"
    ? allProducts
    : allProducts.filter(p => {
      const catObj = categories.find(c => c.id === activeCategory);
      return catObj ? p.category === catObj.match : true;
    });

  const handleScrollToProducts = () => {
    const sectionElem = document.getElementById('products-grid');
    if (sectionElem) {
      sectionElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">

      {/* ============================================================ */}
      {/* HERO SECTION - 2-COLUMN STRUCTURE LIKE INDUSTRIES PAGE */}
      {/* ============================================================ */}
      <section className="bg-white pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">

              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading">
                  HAKE PRODUCT SUITE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] font-heading">
                Advanced Geospatial & AI-Powered Platforms
              </h1>

              {/* Sub-paragraph */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Purpose-built for high performance, precision spatial intelligence, and reliable decision support across enterprise operations, Earth observation analytics, and integrated command-and-control environments.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleScrollToProducts}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-wide rounded-md transition-all duration-200 group shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Explore our products</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_35px_70px_-12px_rgba(15,23,42,0.55)] group">

                {/* Hero Earth Image from user's assets */}
                <img
                  src="/assets/Products/products-hero-earth.jpg"
                  alt="Hake Specialized Geospatial Products and Earth Observation"
                  className="w-full h-[320px] sm:h-[400px] md:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Specs / Badge Overlay */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-lg">
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                    SUITE ARCHITECTURE
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-950 font-mono tracking-tight mt-0.5">
                    Desktop • Web • Mobile • AI
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS / METRICS BAR - PERFECTLY CENTERED */}
      {/* ============================================================ */}
      {/* <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="py-5 sm:py-2 px-4 sm:px-8 text-center flex flex-col items-center justify-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mt-2 font-heading">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 max-w-xs">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* ============================================================ */}
      {/* PRODUCTS SECTION HEADER & CATEGORY DIVISION FILTER */}
      {/* ============================================================ */}
      <section id="products-grid" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading block mb-3">
                PRODUCT ECOSYSTEM
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-extrabold text-slate-950 tracking-tight font-heading leading-tight">
                Specialized Geospatial Platforms for Every Industry
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Explore our product divisions to discover tailored capabilities, intelligent enterprise workflows, and flexible deployment solutions designed to meet your unique geospatial requirements.
              </p>
            </div>

            {/* Quick stats pill */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#00adef]" />
              <span>{allProducts.length} Enterprise Platforms</span>
            </div>
          </div>

          {/* Category Filter Chips (Matching the Division Section Design) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat.id
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Cards List */}
          <div className="space-y-12">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                  {/* Left Product Details (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider text-[#005b94] bg-slate-100 px-3 py-1 rounded-md uppercase border border-slate-200">
                        {product.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        • {product.type}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                      {product.title.trim() === 'DOHA' ? (
                        <>
                          DOHA<sup className="text-xs sm:text-sm align-super ml-0.5 font-bold">TM</sup>
                        </>
                      ) : (
                        product.title
                      )}
                    </h2>

                    <p className="text-sm font-semibold text-[#005b94]">
                      {product.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                        Core Features & Capabilities:
                      </p>
                      <ul className="space-y-1.5">
                        {product.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                            <Check className="w-4 h-4 text-[#005b94] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                      >
                        {/* bg-[#005b94] hover:bg-[#004e7c] text-white */}
                        <span>
                          Inquire for{' '}
                          {product.title.trim() === 'DOHA' ? (
                            <>
                              DOHA<sup className="text-[10px] align-super ml-0.5 font-bold">TM</sup>
                            </>
                          ) : (
                            `${product.title.split(' ')[0]} ${product.title.split(' ')[1] || ''}`
                          )}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                      <span className="text-xs text-slate-500 font-medium">
                        Deployment: <strong className="text-slate-700">{product.deployment}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Right Product Preview Image (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group-hover:shadow-md transition-all duration-300 aspect-[16/11]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className={`w-full h-full ${product.imgStyle || 'object-cover object-center'} group-hover:scale-105 transition-transform duration-500`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Bottom Image Caption Tag */}
                      <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 truncate">
                          {product.title.trim() === 'DOHA' ? (
                            <>
                              DOHA<sup className="text-[9px] align-super ml-0.5 font-bold">TM</sup>
                            </>
                          ) : (
                            product.title
                          )}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 shrink-0 ml-2">
                          {product.type.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
