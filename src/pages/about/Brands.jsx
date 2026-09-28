import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
} from "lucide-react";

export default function Brands() {
  const brands = [
    {
      name: "HakeGIS™ Cloud Platform",
      tagline: "High-Performance Cloud WebGIS & Analytics",
      description:
        "Our flagship enterprise WebGIS suite for interactive spatial visualization, multi-layer analytics, asset management, and raster tiling.",
      features: [
        "Vector & Raster Tile Engine",
        "Real-time IoT Sensor Layers",
        "Role-Based Geospatial Access",
        "RESTful GeoJSON APIs",
      ],
      badge: "Flagship Software",
    },
    {
      name: "Hake GeoAcademy™",
      tagline: "Professional Capacity Building & Geospatial Education",
      description:
        "A premier instructional division offering certified courses in satellite remote sensing, photogrammetry, QGIS, ArcGIS Pro, and Python for GIS.",
      features: [
        "Hands-on Real Datasets",
        "Live Mentor Support",
        "Industry-Recognized Certifications",
        "Institutional Campus Workshops",
      ],
      badge: "Training & Education",
    },
    {
      name: "SpatialVision™ AI",
      tagline: "Automated Satellite Feature Extraction & Object Detection",
      description:
        "Deep learning computer vision models trained specifically on satellite and aerial imagery for building footprint detection, road extraction, and land-use classification.",
      features: [
        "Sub-meter Building Extraction",
        "Automated Tree Canopy Density",
        "Change Detection Algorithms",
        "Agricultural Health Indexing",
      ],
      badge: "AI & Deep Learning",
    },
    {
      name: "Hake DroneOps™",
      tagline: "UAV Aerial Surveying & 3D LiDAR Processing",
      description:
        "End-to-end drone survey operations, flight mission planning, RTK/PPK ground control networks, and sub-centimeter digital elevation modeling.",
      features: [
        "Orthomosaic Generation",
        "3D Dense Point Clouds",
        "Volumetric Stockpile Calculations",
        "Digital Surface & Terrain Models",
      ],
      badge: "Field & Hardware",
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Featured Header Card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
          Our Brand & Platform Portfolio
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
          Integrated Solutions Powering Spatial Intelligence
        </h2>
        <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
          Discover the specialized software platforms, academic training
          divisions, and AI engines built by Hake Technologies.
        </p>
      </div>

      {/* Brand Portfolio Grid */}
      <section className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Technology Brands & Sub-Divisions
          </h3>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Each brand within Hake Technologies is engineered to address
            specific enterprise, academic, or spatial data engineering needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md hover:border-[#005b94] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#005b94] bg-cyan-100/70 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                  {brand.badge}
                </span>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  {brand.name}
                </h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">
                  {brand.tagline}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {brand.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  {brand.features.map((f, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005b94]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#005b94] hover:underline uppercase tracking-wider"
                >
                  <span>Explore Product Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Link CTA */}
      <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-slate-900">
            Need a custom brand deployment or OEM license?
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
            Our software stack and AI models can be licensed or white-labeled
            for enterprise infrastructure and government installations.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm"
        >
          <span>Contact Enterprise Licensing</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
