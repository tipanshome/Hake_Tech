import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Globe2,
  Database,
  Cpu,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  Brain,
  Radio,
  Cloud,
} from "lucide-react";

export default function HomePage() {

  const capabilities = [
    {
      icon: <Layers className="w-6 h-6 text-[#005b94]" />,
      title: "GIS Mapping & Spatial Analysis",
      desc: "Comprehensive thematic mapping, topology validation, terrain analysis, and enterprise spatial database modeling.",
      tag: "CORE GIS",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#005b94]" />,
      title: "Remote Sensing & Satellite Imaging",
      desc: "High-resolution satellite image processing, multispectral index calculation, NDVI, change detection, and LULC classification.",
      tag: "EARTH TELEMETRY",
    },
    {
      icon: <Database className="w-6 h-6 text-[#005b94]" />,
      title: "Web GIS & Interactive Portals",
      desc: "Custom web-based mapping applications, real-time dashboards, and REST API geospatial integrations.",
      tag: "CLOUD WEBGIS",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#005b94]" />,
      title: "LiDAR & 3D Topographical Modeling",
      desc: "Point cloud classification, Digital Elevation Models (DEM/DTM/DSM), 3D building extraction, and volumetric analysis.",
      tag: "PRECISION ELEVATION",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#005b94]" />,
      title: "Spatial AI & Machine Learning",
      desc: "Automated feature extraction, building footprint detection, road vectorization, and predictive geospatial modeling.",
      tag: "AI & ML",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#005b94]" />,
      title: "Capacity Building & Training",
      desc: "Tailored training programs, academic partnerships, and hands-on skill development workshops in ArcGIS, QGIS, and Python.",
      tag: "SKILL DEVELOPMENT",
    },
  ];

  const products = [
    {
      tag: "Hake Geospatial",
      title: "Hake GeoDesk – Desktop GIS",
      desc: "Hake Desktop GIS is a powerful geospatial platform for mapping, spatial data management, analysis, visualization, and decision support. It supports multiple GIS formats, satellite imagery, GPS/GNSS data, surveying, geospatial editing, and advanced spatial analysis, enabling organisations to efficiently manage, analyse, and visualise location-based information across diverse sectors and applications.",
      features: [
        "Advanced 2D GIS Mapping & Spatial Analysis",
        "Multi-Format Vector, Raster & Satellite Data Support",
        "Professional Digitization, Editing & Survey Tools",
        "3D Visualization, Terrain & Geospatial Data Analysis"
      ],
      badge: "GeoDesk",
    },
    {
      tag: "HAKE GEOSPATIAL",
      title: "Hake GeoWeb – Web GIS",
      desc: "Hake Enterprise GIS is an integrated geospatial platform for managing, analysing, and visualising spatial data across organisations. It combines GIS, AI/ML, location analytics, remote sensing, field data collection, and enterprise workflows to support planning, monitoring, asset management, decision-making, and digital transformation across government, infrastructure, and industry sectors.",
      features: [
        "High-Performance Vector & Raster Data Streaming",
        "Real-Time IoT Telemetry & GPS Tracking",
        "Granular Role-Based Access & User Management",
        "OGC-Compliant APIs for Seamless Geospatial Integration"
      ],
      badge: "GeoWeb",
    },
    {
      tag: "FIELD SURVEY",
      title: "Hake GeoMobile – Mobile GIS",
      desc: "Hake Mobile 360 is a powerful mobile GIS and field data collection application designed for accurate, location-based surveys. It enables users to capture GPS coordinates, photographs, attributes, points, lines, and polygons directly in the field, supporting real-time mapping, asset inventory, inspection, monitoring, and seamless integration with enterprise GIS platforms.",
      features: [
        "High-Precision GNSS/GPS Coordinate Capture",
        "360° Ground Photography & Asset Inspection",
        "Offline GIS Mapping with Local Spatial Data Cache",
        "Real-Time Synchronization with WebGIS Portal"
      ],
      badge: "GeoMobile 360",
    },
    {
      tag: "AI & COMPUTER VISION",
      title: "Hake GeoAI – AI and Analytics",
      desc: "Hake GeoAI is an enterprise-grade artificial intelligence and computer vision platform designed for automated satellite feature extraction, multi-class object detection, land-use segmentation, and predictive spatial modeling across large-scale Earth observation datasets.",
      features: [
        "Automated Building Footprint & Road Network Vectorization",
        "Deep Learning Object Detection (Vehicles, Aircraft, Vessels)",
        "Multispectral NDVI Crop Vigor & Yield Forecasting Models",
        "Decadal Satellite Change & Deforestation Anomaly Tracking"
      ],
      badge: "GeoAI Engine",
    },
    {
      tag: "COMMAND & DIGITAL TWIN",
      title: "Hake IGS – Integrated Geospatial Solution",
      desc: "Hake IGS unifies multi-source geospatial telemetry, real-time IoT sensor networks, live drone video feeds, satellite feeds, and 3D digital city twins into a centralized spatial command platform for critical infrastructure, emergency response, and municipal governance.",
      features: [
        "Unified GIS, CAD, BIM & Live Drone Telemetry Convergence",
        "3D Smart City Digital Twin & Real-Time Sensor Nodes",
        "Multi-Agency Incident Dispatch & Situational Awareness",
        "Automated Spatial Risk Alerts & Workflow Triggers"
      ],
      badge: "Integrated IGS",
    },
  ];
  const healthProducts= [
    {
      tag: "DIGITAL HEALTH",
      title: "DOHA",
      desc: "Digital One Health Application connecting spatial epidemiology with environmental surveillance and zoonotic indicators to monitor public health trends and identify disease clusters.",
      features: [
        "Integrated clinical, animal & climate data",
        "Spatial epidemiology outbreak hotspot mapping",
        "Satellite-driven disease risk modeling",
        "Automated early warning health alert dispatch",
      ],
      badge: "One Health Intelligence",
    },
  ]

  const industries = [
    {
      name: "Urban Planning & Smart Cities",
      count: "45+ Projects",
      icon: "🏙️",
      desc: "Zoning analytics, master plan GIS, and infrastructure cadastre.",
    },
    {
      name: "MOD / MHA",
      count: "Mission Critical",
      icon: "🛡️",
      desc: "Terrain modeling, line-of-sight analysis, and border surveillance.",
    },
    {
      name: "Agriculture & Precision Farming",
      count: "2.4M Acres",
      icon: "🌾",
      desc: "Crop health NDVI, soil moisture metrics, and yield prediction.",
    },
    {
      name: "Disaster Risk & Emergency Response",
      count: "Rapid Mapping",
      icon: "🚨",
      desc: "Inundation simulations, evacuation routes, and damage assessment.",
    },
    {
      name: "Utilities, Power & Telecom",
      count: "Network GIS",
      icon: "⚡",
      desc: "Transmission line corridor planning and 5G propagation modeling.",
    },
    {
      name: "Forestry & Natural Resources",
      count: "Conservation",
      icon: "🌲",
      desc: "Canopy density, carbon stock assessment, and watershed hydrology.",
    },
  ];

  const coreTechnologies = [
    {
      id: "geospatial",
      num: "01",
      name: "Geospatial",
      subtitle: "Satellite Earth Observation & Precision GIS",
      desc: "Sub-meter multispectral optical and SAR satellite analytics, drone photogrammetry, topological vector engineering, cadastral digitization, and high-density LiDAR 3D elevation modeling.",
      icon: <Globe2 className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/earth_geospatial.jpg",
      tags: ["PostGIS", "GDAL/OGR", "QGIS", "MapLibre", "LiDAR 3D", "GeoServer"],
      stat: "Sub-Meter Precision",
    },
    {
      id: "iot",
      num: "02",
      name: "IoT",
      subtitle: "Smart Telemetry & Real-Time Sensors",
      desc: "Live field telemetry streams, GPS fleet telematics, connected environmental IoT sensors, smart ground beacons, and automated edge-to-cloud spatial reporting.",
      icon: <Radio className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Technologies/IoT.png",
      tags: ["MQTT", "Edge Computing", "GNSS / RTK", "WebSockets", "Smart Trackers"],
      stat: "Real-Time Telemetry",
    },
    {
      id: "it",
      num: "03",
      name: "IT",
      subtitle: "Enterprise Systems & Spatial APIs",
      desc: "Robust cloud-native enterprise architecture, OGC-compliant spatial REST microservices (WMS/WFS/WMTS), automated CI/CD pipelines, and high-assurance multi-tenant infrastructure.",
      icon: <Cpu className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/product_desktop.jpg",
      tags: ["OGC Microservices", "REST / GraphQL", "DevSecOps", "PostgreSQL", "Docker"],
      stat: "High Availability",
    },
    {
      id: "ai-ml",
      num: "04",
      name: "AI & ML",
      subtitle: "Deep Learning & Computer Vision",
      desc: "Neural network computer vision for automated satellite building footprint vectorization, road network extraction, crop classification, and predictive hazard modeling.",
      icon: <Brain className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Technologies/AI.png",
      tags: ["PyTorch", "YOLOv8", "UNet & SAM", "Computer Vision", "TensorFlow"],
      stat: "Automated Vectorization",
    },
    {
      id: "big-data",
      num: "05",
      name: "Big Data",
      subtitle: "High-Volume Spatial Data Pipelines",
      desc: "Scalable ingestion pipelines for multi-terabyte raster imagery, billions of vector points, distributed spatial indexing, and sub-second spatial querying.",
      icon: <Database className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Technologies/bigdata.png",
      tags: ["Apache Spark", "Kafka", "ClickHouse", "Elasticsearch", "Spatial ETL"],
      stat: "Terabyte-Scale Storage",
    },
    {
      id: "blockchain",
      num: "06",
      name: "Block Chain",
      subtitle: "Decentralized Cadastral & Land Integrity",
      desc: "Cryptographic land parcel registry verification, immutable ownership audit trails, tamper-proof spatial hashing, and smart contracts for property verification.",
      icon: <ShieldCheck className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Technologies/BlockChain.png",
      tags: ["Smart Contracts", "Immutable Cadastre", "SHA-256 Hashing", "Consensus"],
      stat: "Tamper-Proof Audit",
    },
    {
      id: "cloud",
      num: "07",
      name: "Cloud",
      subtitle: "Cloud-Native SaaS & Scalable Tiles",
      desc: "Elastic cloud GIS hosting, multi-region Kubernetes clusters, serverless Cloud-Optimized GeoTIFFs (COG), and instant global map tile distribution.",
      icon: <Cloud className="w-5 h-5 text-[#005b94]" />,
      image: "/assets/Technologies/Cloud.png",
      tags: ["AWS Spatial", "Kubernetes", "COG GeoTIFF", "Serverless", "CDN Streaming"],
      stat: "Global Elastic Scale",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (MATCHES DESIGN REFERENCE EXACTLY) */}
      {/* ============================================================ */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-18 lg:pb-20 overflow-hidden bg-[#fbfdfe]">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold text-[#0c2340] tracking-tight leading-[1.08] font-heading">
                See the
                <br />
                ground as it
                <br />
                actually is.
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Hake turns satellite and field data into decision-ready maps —
                terrain, infrastructure, communities, and ecosystems aligned
                layer by layer.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base tracking-normal transition-all duration-200 shadow-md shadow-sky-950/10 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore capabilities
                </Link>

                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0c2340] hover:text-[#005b94] transition-colors py-2 group"
                >
                  <span>View industry atlas</span>
                  <span className="transition-transform group-hover:translate-x-1 font-mono">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Media Column: Satellite Imagery Card with Movable Grid */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-sky-900/15 border border-slate-100/80 bg-slate-900 group">
                {/* Satellite Delta Image */}
                <img
                  src="/assets/satellite_hero_delta.jpg"
                  alt="Satellite Earth Observation - Estuary and Mangrove Hydrology"
                  className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Movable Spatial Grid Overlay (Glides Smoothly Left-to-Right and Right-to-Left) */}
                <div
                  className="absolute -inset-20 pointer-events-none opacity-30 animate-grid-move"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.75) 1.5px, transparent 1.5px),
                      linear-gradient(to bottom, rgba(255,255,255,0.75) 1.5px, transparent 1.5px)
                    `,
                    backgroundSize: "65px 65px",
                  }}
                />

                {/* Luminous Satellite Scanner Beam sweeping left-to-right */}
                <div className="absolute top-0 bottom-0 w-24 pointer-events-none bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent blur-sm animate-scanner-sweep" />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. LOWER HIGHLIGHT BANNER & 3 STAT CARDS (MATCHES MOCKUP)   */}
          {/* ============================================================ */}
          <div className="mt-14 sm:mt-18 lg:mt-20 rounded-[28px] sm:rounded-[32px] bg-[#e8f4fc] border border-sky-100/80 p-8 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Headline */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-[#0c2340] leading-snug tracking-tight font-heading">
                  We map what matters. Hake delivers geospatial work for teams
                  that need defensible insights, not just beautiful pictures.
                </h2>
              </div>

              {/* Right 3 Stat Cards */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {/* Card 1: 9 Capabilities */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 text-left shadow-sm border border-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between h-32 sm:h-36">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#005b94] font-heading">
                      9
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                      CAPABILITIES
                    </span>
                  </div>

                  {/* Card 2: 3 Solutions */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 text-left shadow-sm border border-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between h-32 sm:h-36">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#10b981] font-heading">
                      3
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                      SOLUTIONS
                    </span>
                  </div>

                  {/* Card 3: 360° Spatial View */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 text-left shadow-sm border border-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between h-32 sm:h-36">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0284c7] font-heading">
                      360°
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                      SPATIAL VIEW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CORE SERVICES / CAPABILITIES SECTION                      */}
      {/* ============================================================ */}
      <section
        id="services"
        className="py-20 sm:py-28 bg-white"
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
                Comprehensive Spatial Services
              </h2>
            </div>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              From raw satellite telemetry to enterprise spatial databases, we
              deliver reliable spatial intelligence at every scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group rounded-2xl p-7 bg-[#fbfdfe] border border-slate-200/80 hover:border-[#005b94]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-sky-950/5 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#005b94] group-hover:bg-[#005b94] group-hover:text-white transition-colors">
                      {React.cloneElement(cap.icon, {
                        className:
                          "w-6 h-6 transition-colors group-hover:text-white",
                      })}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0c2340] mb-2.5 group-hover:text-[#005b94] transition-colors font-heading">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 ">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-xs font-bold text-[#005b94] group-hover:text-[#0284c7] group-hover:translate-x-1 transition-all"
                  >
                    <span>EXPLORE CAPABILITY</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <span>View All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PRODUCTS & SOLUTIONS SHOWCASE                             */}
      {/* ============================================================ */}
      <section
        id="products"
        className="py-20 sm:py-28"
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Hake Geospatial<sup className="text-base sm:text-lg lg:text-xl align-super ml-0.5">TM</sup>
            </h2>
            <h2 className="text-2.5xl sm:text-2.5xl lg:text-2xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Hake GeoSuite – Enterprise Geospatial Platform
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Scalable, high-performance spatial engines engineered for
              high-stake decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((prod, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-8 sm:p-9 shadow-sm hover:shadow-xl hover:shadow-sky-900/10 border border-slate-200/90 hover:border-[#005b94]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold text-[#005b94] bg-sky-50 px-3 py-1 rounded-md border border-sky-100 uppercase">
                      {prod.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0c2340] mb-3 font-heading">
                    {prod.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {prod.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] mr-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/products"
                  className="w-full py-3 rounded-xl bg-[#005b94] text-white hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 text-center border border-slate-200"
                >
                  Explore Platform
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section
        id="healthProducts"
        className="py-20 sm:py-28"
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Digital Health
            </h2>
            <h2 className="text-2.5xl sm:text-2.5xl lg:text-2xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Digital health products for public health
            </h2>
            {/* <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Scalable, high-performance spatial engines engineered for
              high-stake decisions.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {healthProducts.map((prod, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-8 sm:p-9 shadow-sm hover:shadow-xl hover:shadow-sky-900/10 border border-slate-200/90 hover:border-[#005b94]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold text-[#005b94] bg-sky-50 px-3 py-1 rounded-md border border-sky-100 uppercase">
                      {prod.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0c2340] mb-3 font-heading">
                    {prod.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {prod.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] mr-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/products"
                  className="w-full py-3 rounded-xl bg-[#005b94] text-white hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 text-center border border-slate-200 "
                >
                  Explore Platform
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SECTORS & INDUSTRY ATLAS                                  */}
      {/* ============================================================ */}
      <section
        id="industries"
        className="py-20 sm:py-28 bg-white "
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Serving Critical Sectors Worldwide
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Powering strategic planning and operational security across vital
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fbfdfe] border border-slate-200/80 hover:border-[#005b94]/40 hover:bg-white transition-all duration-200 group hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{ind.icon}</span>
                    <h3 className="text-base font-bold text-[#0c2340] group-hover:text-[#005b94] transition-colors font-heading">
                      {ind.name}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {ind.desc}
                </p>
                <div className="flex items-center justify-between pt-2 ">
                  <span className="text-xs font-mono font-bold text-[#0284c7]">
                    {ind.count}
                  </span>
                  <Link
                    to="/industries"
                    className="text-xs font-semibold text-slate-600 hover:text-[#005b94] flex items-center gap-1"
                  >
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ============================================================ */}
      {/* 7. ADVANCED TECHNOLOGY ECOSYSTEM                             */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-white ">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
                Propelled by Next-Gen Technologies
              </h2>
            </div>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Hake unifies spatial science with intelligent computing, distributed cloud systems, IoT telemetry, and cryptographic verification.
            </p>
          </div>

          {/* Technology Cards Grid (2 Boxes per row, all equal size) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {coreTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#005b94]/50 shadow-sm hover:shadow-xl hover:shadow-sky-950/5 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  {/* Top Image Preview Header */}
                  <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden relative border border-slate-100 mb-6 bg-slate-900">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Floating Top Header on Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {/* <span className="text-[11px] font-mono font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        TECH //{tech.num}
                      </span> */}
                      <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center text-[#005b94] shadow-sm">
                        {tech.icon}
                      </div>
                    </div>

                    {/* Floating Bottom Metric on Image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-xs font-semibold text-sky-200 bg-sky-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-sky-800/80">
                        {tech.stat}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-[#0c2340] tracking-tight font-heading group-hover:text-[#005b94] transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#005b94] mt-0.5">
                      {tech.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {tech.desc}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tech.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 group-hover:border-[#005b94]/30 group-hover:bg-sky-50/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CALL TO ACTION BANNER                                     */}
      {/* ============================================================ */}
      {/* <section className="py-20 sm:py-24 bg-gradient-to-r from-[#0c2340] via-[#004e7c] to-[#005b94] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Start Your Spatial Project</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-heading">
            Ready to Elevate Your Geospatial Workflows?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Partner with HAKE Technologies for defensible satellite analytics,
            high-accuracy mapping, and custom cloud GIS solutions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-white text-[#0c2340] hover:bg-slate-100 font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:scale-105"
            >
              Contact Our Team
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all border border-white/30 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
