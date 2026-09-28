import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Globe2,
  Smartphone,
  Brain,
  Layers,
  ArrowRight,
  Check,
  Cpu,
  ShieldCheck,
  Activity,
  Database,
  Sparkles,
  Radio
} from 'lucide-react';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // const stats = [
  //   {
  //     number: "8+",
  //     label: "Specialized Products",
  //     subtext: "Desktop, Web, Mobile, AI & Integrated Solutions"
  //   },
  //   {
  //     number: "100%",
  //     label: "Deployment Flexibility",
  //     subtext: "Cloud SaaS, On-Premise & Air-Gapped Clusters"
  //   },
  //   {
  //     number: "Sub-Meter",
  //     label: "Analytical Precision",
  //     subtext: "High-resolution raster & vector spatial processing"
  //   }
  // ];

  const baseCategories = [
    { id: "all", label: "All Products" },
    { id: "geospatial", label: "Hake Geospatial", match: "Hake Geospatial" },
    { id: "health", label: "Health & Epidemiology", match: "Health" },
    { id: "agriculture", label: "Digital Agriculture", match: "Agriculture" },
    { id: "tourism", label: "Eco-Tourism", match: "Tourism" }
  ];

  const geospatialProducts = [
    {
      id: "Hake_GeoDesk",
      title: "Hake GeoDesk – Desktop GIS",
      category: "Hake Geospatial",
      type: "Desktop Application",
      icon: <Monitor className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/product_desktop.jpg",
      imgStyle: "object-cover object-center",
      tagline: "High-Performance Workstation Spatial Analysis & Modeling",
      description: "A robust desktop GIS application engineered for spatial analysts, cartographers, and remote sensing specialists requiring heavy raster geoprocessing, satellite data analysis, and offline workflow execution.",
      features: [
        "Advanced multi-spectral satellite imagery and raster algebra processing",
        "Sub-meter vector topology editing, coordinate transformations, and snapping tools",
        "Offline enterprise spatial database connectivity (PostGIS, SpatiaLite, GeoPackage)",
        "High-resolution cartographic map production and print-ready publishing",
        "Interoperability with CAD (DWG/DXF), Shapefiles, GeoJSON, and KML formats"
      ],
      deployment: "Windows / Linux Desktop Workstations"
    },
    {
      id: "Hake_GeoWeb",
      title: "Hake GeoWeb – Web GIS",
      category: "Hake Geospatial",
      type: "Cloud & WebGIS Platform",
      icon: <Globe2 className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/product_webgis.png",
      imgStyle: "object-cover object-left-top",
      tagline: "Scalable Cloud-Native WebGIS Portals & Spatial Dashboards",
      description: "An enterprise-grade cloud WebGIS suite designed for organizations to manage, publish, and interact with live geospatial data, telemetry dashboards, and multi-tenant spatial databases.",
      features: [
        "Sub-second vector and raster tile streaming over cloud infrastructure",
        "Real-time IoT sensor telemetry, GPS fleet tracking, and live data layers",
        "Granular role-based user permissions and departmental access control",
        "OGC-compliant standard API endpoints (WMS, WFS, WMTS, Vector Tiles)",
        "Interactive web dashboard widgets for spatial filtering and Land Bank telemetry"
      ],
      deployment: "Cloud SaaS, On-Premise, or Private Air-Gapped Clusters"
    },
    {
      id: "Hake_GeoMobile",
      title: "Hake GeoMobile – Mobile GIS",
      category: "Hake Geospatial",
      type: "Mobile Field Survey Solution",
      icon: <Smartphone className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/product_mobile360.jpg",
      imgStyle: "object-cover object-top",
      tagline: "Field Spatial Data Collection & 360° Ground Telemetry",
      description: "A mobile field application that enables field teams to capture geo-tagged survey records, 360° ground imagery, and precise coordinates with seamless offline-to-online cloud synchronization.",
      features: [
        "High-accuracy GNSS/GPS coordinate capture with real-time accuracy checks",
        "360° ground photography and geotagged asset inspection capture",
        "Offline field mapping mode with local spatial caching for remote terrains",
        "Custom survey form builder with validation rules and multimedia attachments",
        "Instant bi-directional synchronization with Hake Enterprise WebGIS"
      ],
      deployment: "Android & iOS Native Mobile Apps"
    },
    {
      id: "Hake_geoAI",
      title: "Hake GeoAI – AI and Analytics",
      category: "Hake Geospatial",
      type: "AI & Computer Vision Platform",
      icon: <Brain className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/product_geoai.jpg",
      imgStyle: "object-cover object-center",
      tagline: "Deep Learning Geospatial Vision & Predictive Spatial Analytics",
      description: "An advanced GeoAI platform leveraging deep learning convolutional neural networks, automated satellite feature extraction, and predictive spatial modeling to detect objects, segment land use, forecast environmental trends, and transform massive Earth observation datasets into actionable real-time intelligence.",
      features: [
        "Automated building footprint detection, road network vectorization, and urban density segmentation",
        "Multispectral crop classification, vegetation vigor telemetry (NDVI/NDRE), and harvest yield prediction",
        "Computer vision object recognition (vehicles, aircraft, marine vessels, infrastructure assets)",
        "Decadal satellite change detection, deforestation tracking, and illegal encroachment alerts",
        "Custom deep learning model training pipelines on high-resolution drone, aerial, and satellite imagery"
      ],
      deployment: "Cloud AI Cluster, High-Performance GPU Workstations, or Secure On-Premise Air-Gapped Systems"
    },
    {
      id: "Hake_IGS",
      title: "Hake IGS – Integrated Geospatial Solution",
      category: "Hake Geospatial",
      type: "Integrated GIS & Command Center Platform",
      icon: <Layers className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/product_igs.jpg",
      imgStyle: "object-cover object-center",
      tagline: "Unified Multi-Source Spatial Command & Digital Twin Platform",
      description: "A unified, multi-agency Integrated Geospatial Solution (IGS) that fuses real-time IoT sensor networks, live drone video telemetry, satellite Earth observation, and 3D digital city twins into a centralized command and decision-support ecosystem for governance, emergency operations, and mission-critical infrastructure.",
      features: [
        "Unified spatial data convergence fusing GIS, CAD, BIM, IoT telemetry, and live drone video feeds",
        "3D digital twin city visualization with real-time sensor node monitoring and environmental metrics",
        "Multi-agency situational awareness, incident command dispatch, and emergency coordination",
        "Automated threshold alerts, anomaly detection, and cross-departmental spatial workflow triggers",
        "Interoperable spatial database backbone with military-grade encryption and granular role governance"
      ],
      deployment: "Central Command Control Rooms, Multi-Agency Cloud Clusters, or Hybrid On-Premises"
    },
    {
      id: "Doha",
      title: "DOHA - Digital One Health Application",
      category: "Health",
      type: "Digital One Health Platform",
      icon: <Activity className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/DOHA.jpg",
      imgStyle: "object-cover object-center",
      tagline: "Spatial Epidemiology & Environmental Disease Surveillance",
      description: "Digital One Health Application connecting spatial epidemiology with environmental surveillance, zoonotic indicators, and climate risk matrices to monitor public health trends, identify disease clusters, and optimize healthcare resource allocation.",
      features: [
        "Integrated clinical, veterinary, vector-borne, and climate data layers",
        "Predictive hotspot mapping for infectious and zoonotic disease outbreaks",
        "Healthcare facility accessibility and golden-hour travel time isochrones",
        "Real-time water quality, air pollution, and environmental risk telemetry",
        "Interoperable public health reporting dashboards for medical authorities"
      ],
      deployment: "Public Health Command Centers, Cloud SaaS, or On-Premise Health Clusters"
    },
    {
      id: "Agriculture",
      title: "Digital Agriculture Platform",
      category: "Agriculture",
      type: "Precision Agriculture Intelligence",
      icon: <Cpu className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/Agriculture.jpg",
      imgStyle: "object-cover object-center",
      tagline: "Satellite & Drone Farm Analytics, Crop Health & Yield Telemetry",
      description: "An intelligent agricultural management system utilizing multispectral satellite indices, NDVI telemetry, and automated weather analytics to optimize farm productivity, detect water stress, and forecast crop yields.",
      features: [
        "Automated field-level NDVI, NDRE, and canopy vigor time-series tracking",
        "Precision irrigation scheduling and soil moisture anomaly detection",
        "Acreage auditing, crop zoning, and pest/disease outbreak alerts",
        "AI-assisted harvest yield prediction and post-disaster crop insurance assessment",
        "Seamless field surveyor mobile app integration with offline GPS tagging"
      ],
      deployment: "Cloud SaaS, Web Dashboard & Mobile App"
    },
    {
      id: "Tourism",
      title: "Eco-Tourism Intelligence",
      category: "Tourism",
      type: "Sustainable Tourism & Park GIS",
      icon: <ShieldCheck className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Products/Eco_tourism.jpg",
      imgStyle: "object-cover object-center",
      tagline: "Protected Area Management, Visitor Tracking & Eco-Asset Mapping",
      description: "A comprehensive geospatial platform for ecological reserves, wildlife sanctuaries, and tourism boards to map scenic trails, manage visitor impact, monitor biodiversity corridors, and promote sustainable eco-tourism.",
      features: [
        "Interactive 3D visitor trail mapping, POI navigation, and audio guides",
        "Real-time tourist footfall density and ecological carrying capacity monitoring",
        "Flora and fauna spatial asset inventory with citizen-science sighting logs",
        "Forest fire vulnerability mapping and illegal intrusion alerting",
        "Multilingual tourist web portal and mobile tour companion"
      ],
      deployment: "Cloud Web Portal, Mobile Apps & Visitor Center Touchscreens"
    }
  ];

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
                Specialized Geospatial & AI Platforms.
              </h1>

              {/* Sub-paragraph */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Engineered for high performance, spatial precision, and dependable decision-making across enterprise operations, remote sensing analytics, and command ecosystems.
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
                Purpose-Built Platforms for Every Spatial Domain.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Filter by product division below to explore specialized capabilities, enterprise workflows, and deployment options.
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
                      {product.title}
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
                        <span>Inquire for {product.title.split(' ')[0]} {product.title.split(' ')[1] || ''}</span>
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
                        <span className="font-semibold text-slate-200 truncate">{product.title}</span>
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
