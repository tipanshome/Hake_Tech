import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  X as CloseIcon,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layers,
  Radio,
  SlidersHorizontal
} from 'lucide-react';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const stats = [
    {
      number: "231+",
      label: "Happy Users",
      subtext: "Across enterprise & government"
    },
    {
      number: "121+",
      label: "Issues Solved",
      subtext: "Complex spatial challenges resolved"
    },
    {
      number: "159+",
      label: "Good Reviews",
      subtext: "Verified client feedback"
    }
  ];

  const baseCategories = [
    { id: "all", label: "All Sectors" },
    { id: "environment", label: "Environment & Agriculture" },
    { id: "security", label: "Security & Emergency" },
    { id: "infrastructure", label: "Infrastructure & Logistics" },
    { id: "public", label: "Public & Social Services" }
  ];

  const industries = [
    {
      id: "agriculture",
      number: "01",
      category: "environment",
      title: "Agriculture",
      image: "/assets/Industries/ind-agriculture.jpg",
      description:
        "Crop health monitoring, yield estimation, and precision farming from multispectral imagery and field-level analytics.",
      tags: ["NDVI Telemetry", "Yield Forecasts"],
      overview:
        "Our agricultural intelligence platform combines high-revisit optical and SAR satellite feeds with precision drone telemetry to track crop vigor, manage irrigation deficits, and predict yields before harvest.",
      capabilities: [
        "Field-level NDVI, NDRE & chlorophyll index mapping",
        "Acreage estimation & crop classification auditing",
        "Soil moisture anomaly & drought vulnerability indices",
        "Automated yield forecasting models & harvest cycle alerts"
      ],
      sensors: ["Multispectral Optical (Sentinel-2, Planet)", "Thermal Infrared", "High-Resolution Drone RGB"]
    },
    {
      id: "climate",
      number: "02",
      category: "environment",
      title: "Climate",
      image: "/assets/Industries/ind-climate.jpg",
      description:
        "Glacier, coastline, and land-surface monitoring that tracks climate change indicators over time.",
      tags: ["Cryosphere Telemetry", "Carbon Sink"],
      overview:
        "Quantify environmental transitions and atmospheric phenomena with decadal satellite baselines, automated change detection, and carbon sequestration geospatial analytics.",
      capabilities: [
        "Glacial retreat & cryosphere mass-balance telemetry",
        "Coastal erosion & sea-level rise vulnerability modeling",
        "Land surface temperature (LST) anomaly maps",
        "Carbon sink quantification & emission plume tracking"
      ],
      sensors: ["Synthetic Aperture Radar (SAR)", "MODIS / Landsat Decadal Baselines", "Altimetry & Gravity GRACE"]
    },
    {
      id: "defense-intelligence",
      number: "03",
      category: "security",
      title: "Defence & Intelligence",
      image: "/assets/Industries/ind-defense.jpg",
      description:
        "Mission-grade geospatial data, terrain analysis, and situational awareness for national security operations.",
      tags: ["Tactical Topography", "Line-of-Sight"],
      overview:
        "Equipping defense forces and intelligence agencies with high-frequency reconnaissance, 3D viewshed analysis, and air-gapped on-premise spatial intelligence architectures.",
      capabilities: [
        "Line-of-Sight (LOS) and viewshed tactical terrain analysis",
        "Sub-meter elevation models for HLZ and ingress planning",
        "Perimeter intrusion vulnerability and change surveillance",
        "Secure air-gapped spatial server deployments"
      ],
      sensors: ["Sub-30cm Commercial Satellite Electro-Optical", "LiDAR Point Clouds", "High-Bandwidth SAR"]
    },
    {
      id: "disaster-management",
      number: "04",
      category: "security",
      title: "Disaster Management",
      image: "/assets/Industries/ind-disaster.jpg",
      description:
        "Rapid damage assessment, flood mapping, and response planning when every hour counts.",
      tags: ["Flood Inundation", "Damage Vectors"],
      overview:
        "Instantaneous emergency awareness pipelines transforming post-catastrophe imagery into vectorized damage indices, flood inundation layers, and evacuation route matrices.",
      capabilities: [
        "Near real-time hydrodynamic flood hazard zonation",
        "Post-disaster structural damage quantification vectors",
        "Wildfire ignition point and perimeter spread projection",
        "Evacuation routing & emergency resource allocation overlays"
      ],
      sensors: ["All-Weather SAR Flood Mapping", "Rapid-Tasking UAV Fleets", "Thermal Satellite Hotspot Sensors"]
    },
    {
      id: "education",
      number: "05",
      category: "public",
      title: "Education",
      image: "/assets/Industries/ind-education.jpg",
      description:
        "Campus planning, catchment analysis, and location intelligence for schools and universities.",
      tags: ["Catchment Mapping", "3D Campus Twins"],
      overview:
        "Supporting educational leadership and municipal planners with institutional accessibility analysis, demographic catchment tracking, and smart campus spatial asset management.",
      capabilities: [
        "School catchment territory & enrollment demographic analysis",
        "Campus 3D digital twins & utility asset mapping",
        "Student transit accessibility & walkability indexing",
        "Geospatial curricula datasets for academic research"
      ],
      sensors: ["Urban Orthomosaics", "Demographic Micro-Census Layers", "Multimodal Transport Network GIS"]
    },
    {
      id: "environment-ecology",
      number: "06",
      category: "environment",
      title: "Environment & Ecology",
      image: "/assets/Industries/ind-ecology.jpg",
      description:
        "Forest inventory, habitat mapping, and ecosystem monitoring for conservation and compliance.",
      tags: ["Biomass Density", "Habitat Corridors"],
      overview:
        "Protecting vital ecosystems through automated canopy density audits, wetland boundary demarcation, illegal encroachment alerts, and biodiversity corridor tracking.",
      capabilities: [
        "Canopy cover density & above-ground biomass carbon modeling",
        "Protected watershed catchment & waterbody shrinkage tracking",
        "Biodiversity corridor & wildlife habitat connectivity maps",
        "Illegal mining and deforestation compliance monitoring"
      ],
      sensors: ["Hyper-spectral Imagery", "Airborne LiDAR Biomass Scanners", "Sentinel SAR Vegetation Penetration"]
    },
    {
      id: "health",
      number: "07",
      category: "public",
      title: "Health",
      image: "/assets/Industries/ind-health.jpg",
      description:
        "Facility siting, service-area analysis, and disease-pattern mapping for public health systems.",
      tags: ["Isochrone Drive-Times", "Epidemic Vectors"],
      overview:
        "Unlocking epidemiological insights and healthcare accessibility by mapping epidemiological vectors, hospital golden-hour drive times, and health facility capacity.",
      capabilities: [
        "Vector-borne disease spread & environmental risk clustering",
        "Isochrone drive-time service coverage & hospital siting models",
        "Vulnerable population density & healthcare disparity mapping",
        "Emergency medical supply chain delivery routing"
      ],
      sensors: ["Demographic Spatial Datasets", "Real-Time Traffic Networks", "Environmental Health Remote Sensing"]
    },
    {
      id: "policy-development",
      number: "08",
      category: "public",
      title: "Policy Development",
      image: "/assets/Industries/ind-policy.jpg",
      description:
        "Evidence-based spatial data and scenario modeling that ground policy in measurable reality.",
      tags: ["SDSS Modeling", "Zoning Analytics"],
      overview:
        "Empowering policymakers and think tanks with objective, high-granularity spatial analytics to evaluate zoning regulations, infrastructure funding, and socioeconomic parity.",
      capabilities: [
        "Multi-criteria spatial decision support systems (SDSS)",
        "Socioeconomic vulnerability & equitable resource distribution",
        "Regulatory land-use compliance & statutory zoning models",
        "Predictive urbanization scenario simulations"
      ],
      sensors: ["National Spatial Data Infrastructure (NSDI)", "Census Aggregations", "Multi-Temporal Satellite Baselines"]
    },
    {
      id: "public-safety",
      number: "09",
      category: "security",
      title: "Public Safety",
      image: "/assets/Industries/ind-safety.jpg",
      description:
        "City-wide monitoring, incident mapping, and risk analysis for safer communities.",
      tags: ["Incident Density", "Dispatch Routing"],
      overview:
        "Integrating incident telemetry with 3D city layouts to optimize emergency response dispatch, monitor high-risk corridors, and mitigate community safety vulnerabilities.",
      capabilities: [
        "Incident density heatmapping & spatial anomaly detection",
        "CCTV coverage optimization & spatial blind-spot identification",
        "Emergency response unit isochrone routing & beat optimization",
        "Public event crowd density & egress safety modeling"
      ],
      sensors: ["High-Resolution City Basemaps", "IoT Sensor Feeds", "Real-Time GPS Tracking Layers"]
    },
    {
      id: "research-development",
      number: "10",
      category: "public",
      title: "Research & Development",
      image: "/assets/Industries/ind-research.jpg",
      description:
        "Spatial algorithms, predictive modeling, and experimental prototyping for advanced GIS research.",
      tags: ["AI Feature Extraction", "Cloud GeoTIFF"],
      overview:
        "Collaborating with scientific institutes and geospatial labs to engineer custom spatial algorithms, deep learning feature extractors, and novel Earth observation pipelines.",
      capabilities: [
        "Custom computer vision models for satellite feature extraction",
        "High-performance cloud-native spatial computing & GeoTIFF indexing",
        "Predictive geophysical and atmospheric spatial simulations",
        "Open geospatial standard (OGC) API prototyping"
      ],
      sensors: ["Custom Synthetic Aperture Radar", "Hyperspectral Earth Observation", "Sub-Meter Satellite Swarms"]
    },
    {
      id: "social-wellbeing",
      number: "11",
      category: "public",
      title: "Social Wellbeing",
      image: "/assets/Industries/ind-social.jpg",
      description:
        "Demographic mapping, accessibility indexing, and community infrastructure equity tracking.",
      tags: ["Civic Equity", "Livability Metrics"],
      overview:
        "Evaluating livability metrics, public green space access, civic amenities, and equitable urban infrastructure distribution across human settlements.",
      capabilities: [
        "Urban green space accessibility & recreational park proximity",
        "Community infrastructure deficit index & social vulnerability maps",
        "Senior citizen and pediatric amenity proximity analysis",
        "Public transit equitable reach & civic connectivity metrics"
      ],
      sensors: ["OpenStreetMap Geo-Data", "High-Resolution Orthophotos", "Municipal Cadastral Boundaries"]
    },
    {
      id: "supply-chain",
      number: "12",
      category: "infrastructure",
      title: "Supply Chain Management",
      image: "/assets/Industries/ind-supplychain.jpg",
      description:
        "Multi-modal logistics route optimization, freight corridor monitoring, and supply network mapping.",
      tags: ["Freight Corridors", "Port Telemetry"],
      overview:
        "Optimizing intermodal transport networks, warehouse distribution radius, port choke-points, and maritime vessel tracking through dynamic spatial intelligence.",
      capabilities: [
        "Global intermodal freight corridor & multimodal transit optimization",
        "Distribution center catchment area & last-mile delivery analysis",
        "Port congestion & container terminal logistics monitoring",
        "Supply chain vulnerability and geopolitical bottleneck alerts"
      ],
      sensors: ["AIS Maritime Feeds", "Satellite Vessel Tracking", "High-Precision Road Network Datasets"]
    },
    {
      id: "transportation",
      number: "13",
      category: "infrastructure",
      title: "Transportation",
      image: "/assets/Industries/ind-transport.jpg",
      description:
        "Road asset inventory, transit network analysis, and traffic corridor geospatial optimization.",
      tags: ["Mobile LiDAR", "Pavement Distress"],
      overview:
        "Modernizing civil transport infrastructure through automated road condition classification, pavement crack detection, railway corridor LiDAR surveys, and traffic flow models.",
      capabilities: [
        "Mobile LiDAR road asset inventory & pavement distress mapping",
        "Railway track corridor alignment & encroachment surveys",
        "Public transport origin-destination & capacity demand analytics",
        "Bridge, tunnel, and highway slope deformation telemetry"
      ],
      sensors: ["Mobile Mapping System (MMS) 360° LiDAR", "High-Res Aerial Orthophotos", "InSAR Ground Deformation"]
    },
    {
      id: "urban-rural-development",
      number: "14",
      category: "infrastructure",
      title: "Urban & Rural Development",
      image: "/assets/Industries/ind-urban.jpg",
      description:
        "Cadastral parcel mapping, smart city digital twins, and rural land-use infrastructure planning.",
      tags: ["Cadastral GIS", "3D Digital Twins"],
      overview:
        "Empowering municipalities and rural development authorities with sub-centimeter cadastral GIS boundaries, 3D city master models, and infrastructure expansion blueprints.",
      capabilities: [
        "High-precision cadastral parcel demarcation & land title GIS",
        "3D smart city digital twin building height & volume models",
        "Rural electrification, water supply, and road network planning",
        "Urban growth boundary modeling & zoning enforcement analytics"
      ],
      sensors: ["Sub-5cm Drone Photogrammetry", "Airborne LiDAR Point Clouds", "Stereo-Pair Satellite Topography"]
    },
  ];

  const categories = baseCategories.map(cat => {
    const count = cat.id === "all"
      ? industries.length
      : industries.filter(ind => ind.category === cat.id).length;
    return {
      ...cat,
      count,
      label: cat.id === "all" ? `${cat.label} (${count})` : cat.label
    };
  });

  const filteredIndustries = activeCategory === "all"
    ? industries
    : industries.filter(ind => ind.category === activeCategory);

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
                See the world with precision. Decide with confidence.
              </h1>

              {/* Sub-paragraph */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Hake Technologies turns satellite, aerial, and drone data into decision-ready geospatial intelligence for the industries that build, feed, and protect the world.
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
      {/* STATS / METRICS BAR - PERFECTLY CENTERED */}
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
                One platform. Every sector that depends on location.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Delivering sub-meter precision, automated remote sensing analytics, and mission-critical spatial tools tailored to each domain.
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
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Industry Cards Grid - 3 columns */}
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
                  />
                  {/* Subtle hover gradient */}
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
                    {/* Header Row: Title & Arrow Button */}
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

                  {/* Bottom Learn More link */}
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
            <div className="relative h-48 sm:h-64 w-full bg-slate-900 rounded-t-2xl overflow-hidden">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              {/* Title on Image */}
              <div className="absolute bottom-4 left-6 right-6 text-white">
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
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
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
