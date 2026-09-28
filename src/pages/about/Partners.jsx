import React from 'react';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Building,
  GraduationCap,
  Globe2,
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      category: "Academic & University Affiliations",
      icon: <GraduationCap className="w-5 h-5 text-[#005b94]" />,
      desc: "Collaborating with renowned universities on advanced geospatial research, GIS curriculum development, and joint student fellowships.",
      partners: [
        { name: "North-Eastern Hill University (NEHU)", detail: "Geoinformatics & Earth Sciences Research" },
        { name: "Birla Institute of Technology (BIT Mesra)", detail: "Remote Sensing & Satellite Image Processing" },
        { name: "State Technical Universities", detail: "Institutional Capacity Building Programs" }
      ]
    },
    {
      category: "Technology & Satellite Data Ecosystem",
      icon: <Globe2 className="w-5 h-5 text-[#005b94]" />,
      desc: "Integration partnerships with global satellite imagery providers, spatial database vendors, and cloud infrastructure platforms.",
      partners: [
        { name: "Open Geospatial Consortium (OGC) Standards", detail: "WMS, WFS, and 3D Tiles Interoperability" },
        { name: "Cloud Compute Alliances", detail: "High-throughput GPU satellite pipelines" },
        { name: "Commercial Optical & SAR Data Providers", detail: "Sub-meter multispectral satellite constellations" }
      ]
    },
    {
      category: "Public Sector & Municipal Collaborations",
      icon: <Building className="w-5 h-5 text-[#005b94]" />,
      desc: "Delivering spatial base-maps, cadastral surveys, and disaster mitigation dashboards for government departments and urban planning bodies.",
      partners: [
        { name: "Urban Development Authorities", detail: "Master planning & Smart Utility GIS" },
        { name: "Forestry & Disaster Management Cells", detail: "Wildfire & Flood vulnerability zoning" },
        { name: "Agriculture & Water Resource Boards", detail: "Watershed & Crop yield spatial assessments" }
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Featured Header Card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
          Our Global Partner Network
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
          Co-Innovating with Leaders in Academia, Industry, and Governance
        </h2>
        <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
          We believe transformative breakthroughs happen at the crossroads of multidisciplinary collaboration. We partner with universities, tech leaders, and civic bodies.
        </p>
      </div>

      {/* Partner Ecosystem Sections */}
      <section className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Strategic Alliances & Partnerships
          </h3>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Our collaborative ecosystem amplifies research depth, broadens dataset availability, and accelerates delivery of robust solutions.
          </p>
        </div>

        <div className="space-y-6">
          {partnerCategories.map((cat, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  {cat.category}
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-2xl">
                {cat.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cat.partners.map((partner, pIdx) => (
                  <div key={pIdx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <h5 className="font-bold text-slate-900 text-sm">{partner.name}</h5>
                    <p className="text-xs text-slate-500 mt-1">{partner.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner Callout */}
      <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-slate-900">Become a Hake Tech Partner</h4>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
            Interested in joint research, technology integration, academic training partnerships, or vendor representation?
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm"
        >
          <span>Partner With Us</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
