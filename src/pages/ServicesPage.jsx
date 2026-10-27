import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';

import { allServices } from '../data/services';

export default function ServicesPage() {
  useDocumentTitle(
    'Services & Spatial Capabilities',
    'Comprehensive GIS mapping, satellite earth telemetry, web GIS, LiDAR 3D elevation modeling, and capacity building.'
  );

  const handleScrollToServices = () => {
    const gridElem = document.getElementById('services-grid');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">

      {/* ============================================================ */}
      {/* HERO SECTION - 2-COLUMN STRUCTURE MATCHING PRODUCTS & INDUSTRIES */}
      {/* ============================================================ */}
      <section className="bg-white pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">

              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading">
                  GEOSPATIAL SERVICES & CAPABILITIES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] font-heading">
                Precision Earth Observation. Intelligent Geospatial Solutions.
              </h1>

              {/* Sub-paragraph */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                From high-accuracy UAV photogrammetry and LiDAR to optical/SAR satellite imagery analysis, custom WebGIS development, and strategic spatial modelling, we transform complex geospatial data into actionable intelligence that drives informed decisions and measurable impact.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleScrollToServices}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-wide rounded-md transition-all duration-200 group shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Explore our services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_35px_70px_-12px_rgba(15,23,42,0.55)] group">

                {/* Hero Drone Image */}
                <img
                  src="/assets/services-hero-drone.jpg"
                  alt="High Resolution Drone Survey and Geospatial Services"
                  className="w-full h-[320px] sm:h-[400px] md:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Accuracy Badge Overlay */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-lg">
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                    SURVEY ACCURACY
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-950 font-mono tracking-tight mt-0.5">
                    Sub-Centimeter UAV & LiDAR
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES DETAILED SECTION & CARDS LIST */}
      {/* ============================================================ */}
      <section id="services-grid" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading block mb-3">
                OUR VERTICALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-extrabold text-slate-950 tracking-tight font-heading leading-tight">
                End-to-End Geospatial Solutions for Complex Challenges
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Discover our comprehensive suite of geospatial services, advanced sensor data acquisition workflows, and data-driven spatial analytics—engineered to solve complex challenges and deliver actionable intelligence.
              </p>
            </div>

            {/* Quick stats pill */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#00adef]" />
              <span>{allServices.length} Specialized Verticals</span>
            </div>
          </div>

          {/* Services Cards List (Styled like ProductsPage Cards) */}
          <div className="space-y-12">
            {allServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                  {/* Left Service Details (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider text-[#005b94] bg-slate-100 px-3 py-1 rounded-md uppercase border border-slate-200">
                        {service.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        • {service.type}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#005b94]">
                      {service.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                        Core Capabilities & Deliverables:
                      </p>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                            <Check className="w-4 h-4 text-[#005b94] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                      >
                        <span>Inquire for {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                      <span className="text-xs text-slate-500 font-medium">
                        Focus: <strong className="text-slate-700">{service.domain}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Right Preview Image (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group-hover:shadow-md transition-all duration-300 aspect-[16/11]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full ${service.imgStyle || 'object-cover object-center'} group-hover:scale-105 transition-transform duration-500`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Bottom Image Caption Tag */}
                      <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 truncate">{service.title}</span>
                        <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 shrink-0 ml-2">
                          {service.badge}
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
