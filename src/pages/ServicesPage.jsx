import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Globe2,
  Database,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Compass,
  Workflow,
  FileText,
  Search,
  Target,
  Sparkles
} from 'lucide-react';

export default function ServicesPage() {
  // const stats = [
  //   {
  //     number: "9+",
  //     label: "Core Service Verticals",
  //     subtext: "End-to-end remote sensing & spatial data solutions"
  //   },
  //   {
  //     number: "< 5cm",
  //     label: "Survey Accuracy",
  //     subtext: "Sub-centimeter drone photogrammetry & LiDAR"
  //   },
  //   {
  //     number: "24/7",
  //     label: "Analytical Pipelines",
  //     subtext: "Rapid-tasking satellite interpretation & AI feeds"
  //   }
  // ];

  const allServices = [
    {
      id: "analytics",
      icon: <BarChart3 className="w-10 h-10 text-[#00adef]" />,
      title: "Analytics",
      tagline: "Vision-Driven Spatial & Process Analytics",
      desc: "We understand clients' vision and work processes, applying advanced geospatial modeling to uncover patterns, measure trends, and generate decision-ready analytics.",
      deliverables: [
        "Spatial pattern analysis & predictive trend forecasting",
        "Custom KPI executive dashboards & business location intelligence",
        "Process optimization & spatial workflow diagnostics",
        "Multi-criteria spatial decision matrices & scenario modeling"
      ]
    },
    {
      id: "data-acquisition",
      icon: <Database className="w-10 h-10 text-[#00adef]" />,
      title: "Data Acquisition",
      tagline: "Comprehensive Spatial & Field Data Collection",
      desc: "Hake Technologies provides end-to-end spatial data acquisition processes for precision digital mapping, infrastructure surveys, and asset inventories.",
      deliverables: [
        "High-precision GNSS / DGPS field survey data capture",
        "Spatial sensor telemetry collection & real-time IoT integration",
        "Ground truth verification & cadastral attribute asset audits",
        "Automated ETL ingestion, spatial data cleansing & topological validation"
      ]
    },
    {
      id: "digital-transformation",
      icon: <Workflow className="w-10 h-10 text-[#00adef]" />,
      title: "Digital Transformation",
      tagline: "Adaptive Problem Solving & Spatial Engineering",
      desc: "Our architects understand your organizational challenges and build tailored geospatial software solutions that thrive in your operational environment.",
      deliverables: [
        "Enterprise GIS modernization & cloud-native migration",
        "Custom automated spatial workflow pipelines & ETL tools",
        "Cross-platform system architecture, OGC APIs & REST microservices",
        "Tailored software deployment & air-gapped ecosystem integration"
      ]
    },
    {
      id: "drone-mapping",
      icon: <Compass className="w-10 h-10 text-[#00adef]" />,
      title: "Drone Mapping",
      tagline: "High-Precision UAV Aerial Mapping & Photogrammetry",
      desc: "We provide high-precision drone mapping services, deploying professional UAV fleets to capture sub-centimeter orthomosaics and 3D elevation models.",
      deliverables: [
        "Sub-centimeter UAV aerial orthomosaic maps",
        "3D elevation modeling (DEM, DTM & high-density DSM)",
        "Volumetric analysis & cut/fill stockpile measurements",
        "High-resolution linear corridor & topographic surveys"
      ]
    },
    {
      id: "satellite-image-interpretation",
      icon: <Globe2 className="w-10 h-10 text-[#00adef]" />,
      title: "Satellite Image Interpretation",
      tagline: "Actionable Intelligence from Optical & Radar Imagery",
      desc: "Our remote sensing scientists analyze multispectral optical and Synthetic Aperture Radar (SAR) imagery, transforming raw Earth observation feeds into verified intelligence.",
      deliverables: [
        "Optical, multispectral & SAR satellite interpretation",
        "Automated Land Use / Land Cover (LULC) classification",
        "Vegetation index (NDVI/EVI) & environmental change detection",
        "Time-series encroachment, deforestation & disaster threat mapping"
      ]
    },
    {
      id: "mapping",
      icon: <Layers className="w-10 h-10 text-[#00adef]" />,
      title: "Mapping",
      tagline: "Ground Survey & Locational Technology",
      desc: "We provide comprehensive cartography and spatial mapping services using modern ground survey instruments, cadastral GIS, and locational engineering.",
      deliverables: [
        "Cadastral parcel boundary mapping & revenue records GIS",
        "Topographical, hydrological & thematic cartography",
        "Geocoding & locational intelligence spatial databases",
        "Multi-scale GIS map production & standardisation"
      ]
    },
    {
      id: "policy-analysis",
      icon: <FileText className="w-10 h-10 text-[#00adef]" />,
      title: "Policy Analysis",
      tagline: "Goal-Oriented Policy Evaluation & Assessment",
      desc: "We provide evidence-based geospatial evaluations to help public agencies and governance bodies measure policy impacts and align interventions with strategic goals.",
      deliverables: [
        "Spatial policy impact assessment & scenario modeling",
        "Urban, regional & environmental policy spatial audits",
        "Regulatory compliance & zoning framework review",
        "Evidence-based strategic policy recommendations"
      ]
    },
    {
      id: "research",
      icon: <Search className="w-10 h-10 text-[#00adef]" />,
      title: "Research",
      tagline: "End-to-End Scientific & Empirical Studies",
      desc: "We assist academic institutions, development agencies, and think tanks in specialized geospatial research—from raw data capture and modeling to peer-reviewed findings.",
      deliverables: [
        "Academic & institutional geospatial research partnerships",
        "Socio-economic, healthcare & demographic spatial studies",
        "Climate vulnerability, sea-level rise & natural hazard analysis",
        "Empirical spatial modeling & scientific publication support"
      ]
    },
    {
      id: "strategy-and-innovation",
      icon: <Target className="w-10 h-10 text-[#00adef]" />,
      title: "Strategy and Innovation",
      tagline: "Empirical Approaches & Future-Ready Roadmaps",
      desc: "We help forward-thinking organizations adopt emerging geospatial technologies, formulating long-term spatial roadmaps and high-impact innovation pilots.",
      deliverables: [
        "Long-term enterprise geospatial strategy formulation",
        "Proof-of-Concept (PoC) & innovation pilot deployment",
        "Emerging tech adoption (GeoAI/ML, 3D Digital Twins & Cloud GIS)",
        "Data monetization & operational roadmap design"
      ]
    }
  ];

  const handleScrollToServices = () => {
    const gridElem = document.getElementById('services-grid');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth' });
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
                  GEOSPATIAL SERVICES & CAPABILITIES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] font-heading">
                Precision remote sensing. Actionable spatial intelligence.
              </h1>

              {/* Sub-paragraph */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                From high-precision UAV drone photogrammetry and optical/SAR satellite interpretation to custom WebGIS architecture and strategic policy modeling.
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

                {/* Hero Drone Image from user's assets */}
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
      {/* SERVICES DETAILED SECTION & GRID */}
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
                End-to-End Geospatial Solutions for Complex Challenges.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Explore our full spectrum of professional spatial services, sensor acquisition pipelines, and empirical analytics.
              </p>
            </div>

            {/* Quick stats pill */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#00adef]" />
              <span>9 Specialized Verticals</span>
            </div>
          </div>

          {/* Services Cards List */}
          <div className="space-y-12 sm:space-y-16">
            {allServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 ${idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'
                  }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Left Header & Description */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-2 shadow-xs">
                      {service.icon}
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#005b94] block">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Deliverables List */}
                  <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00adef]" />
                      <span>Key Deliverables & Specifications</span>
                    </h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00adef] mt-2 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
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
