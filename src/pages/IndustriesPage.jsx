import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  X as CloseIcon,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Radio,
} from 'lucide-react';
import { stats, baseCategories, industries } from '../data/industries';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function IndustriesPage() {
  useDocumentTitle(
    'Industries & Sectors',
    'Specialized spatial intelligence, remote sensing, and location analytics for agriculture, defense, climate, and infrastructure.'
  );

  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = baseCategories.map((cat) => {
    const count =
      cat.id === 'all'
        ? industries.length
        : industries.filter((ind) => ind.category === cat.id).length;
    return {
      ...cat,
      count,
      label: cat.id === 'all' ? `${cat.label} (${count})` : cat.label,
    };
  });

  const filteredIndustries =
    activeCategory === 'all'
      ? industries
      : industries.filter((ind) => ind.category === activeCategory);

  const handleScrollToGrid = () => {
    const gridElem = document.getElementById('industries-grid');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="bg-white pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading">
                  GEOSPATIAL INTELLIGENCE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] font-heading">
                Map with Precision. Innovate with Intelligence.
              </h1>

              {/* Sub-paragraph */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Hake Technologies transforms satellite imagery, aerial surveys, and drone data into actionable geospatial intelligence — empowering industries that build infrastructure, sustain agriculture, protect ecosystems, and shape a smarter, more resilient world.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleScrollToGrid}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-wide rounded-md transition-all duration-200 group shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Explore our industries</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_35px_70px_-12px_rgba(15,23,42,0.55)] group">
                {/* Hero Aerial Image */}
                <img
                  src="/assets/Industries/hero-aerial.jpg"
                  alt="High Resolution Satellite & Aerial Geospatial Intelligence"
                  className="w-full h-[320px] sm:h-[400px] md:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  width="600"
                  height="440"
                />

                {/* Resolution Badge Overlay */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-lg">
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                    RESOLUTION UP TO
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-950 font-mono tracking-tight mt-0.5">
                    15 cm / pixel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS / METRICS BAR */}
      {/* ============================================================ */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
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
      </section>

      {/* ============================================================ */}
      {/* INDUSTRIES SECTION HEADER & GRID */}
      {/* ============================================================ */}
      <section id="industries-grid" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading block mb-3">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-extrabold text-slate-950 tracking-tight font-heading leading-tight">
                One Geospatial Platform. Unlimited Possibilities Across Industries.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Delivering precision mapping, intelligent remote-sensing analytics, and mission-critical geospatial solutions tailored to the unique challenges of each industry.
              </p>
            </div>

            {/* Quick stats pill */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#00adef]" />
              <span>{industries.length} Specialized Domains</span>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat.id
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredIndustries.map((ind) => (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#00adef]/60 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Top Subtle Gradient Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-[#00adef] transition-all duration-300 z-10" />

                {/* Image Area */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    width="400"
                    height="250"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/15 transition-colors duration-300" />

                  {/* Sector Number Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-slate-800 tracking-wider shadow-sm border border-slate-200/60">
                    SECTOR {ind.number}
                  </div>

                  {/* Top-Right Mini Indicator */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-500 shadow-sm border border-slate-200/60 group-hover:text-[#00adef] transition-colors">
                    <Radio className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-[#00adef] transition-colors duration-200">
                        {ind.title}
                      </h3>

                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#00adef] group-hover:text-white group-hover:border-[#00adef] group-hover:rotate-45 transition-all duration-300 shadow-sm shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {ind.description}
                    </p>

                    {/* Mini Capability Chips */}
                    {ind.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {ind.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#00adef] transition-colors">
                    <span>View Sector Capabilities</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INDUSTRY DETAIL MODAL */}
      {/* ============================================================ */}
      {selectedIndustry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedIndustry(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-48 sm:h-64 min-h-[12rem] sm:min-h-[16rem] w-full bg-slate-900 rounded-t-2xl overflow-hidden shrink-0">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-md cursor-pointer z-10"
                aria-label="Close modal"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              {/* Title on Image */}
              <div className="absolute bottom-4 left-6 right-6 text-white z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase block mb-1">
                  SECTOR {selectedIndustry.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                  {selectedIndustry.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading mb-2">
                  Domain Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedIndustry.overview}
                </p>
              </div>

              {/* Capabilities */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading mb-3">
                  Core Analytical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.capabilities.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00adef] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sensor Feeds */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading mb-2">
                  Integrated Sensors & Data Layers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.sensors.map((sensor, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-slate-100 text-slate-800 font-medium px-3 py-1 rounded-md border border-slate-200"
                    >
                      {sensor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Ready to deploy for your organization?
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedIndustry(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-md transition-all cursor-pointer text-center"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold tracking-wide rounded-md transition-all text-center"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
