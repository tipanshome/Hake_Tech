import React from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  GraduationCap,
  ShieldCheck,
  Globe2,
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Responsibility() {
  const pillars = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Environmental & Climate Action",
      desc: "Using high-resolution Earth observation data to monitor forest cover, wetland conservation, and groundwater recharge across vulnerable ecological biomes."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#005b94]" />,
      title: "Open Geospatial Education",
      desc: "Providing subsidized and free training workshops to students from rural and underprivileged backgrounds to close the spatial skills gap in developing regions."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-cyan-600" />,
      title: "Disaster Preparedness Support",
      desc: "Partnering with emergency services and NGOs to supply rapid satellite damage assessments and flood inundation boundary maps during natural disasters."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "Ethical Data Stewardship",
      desc: "Maintaining strict ethical standards regarding privacy, national security guidelines, and transparent data provenance in all Earth imagery analytics."
    }
  ];

  const initiatives = [
    {
      stat: "3,500+",
      label: "Students & Researchers Trained",
      desc: "Equipped with industry-standard GIS and remote sensing skill sets at zero or minimal cost."
    },
    {
      stat: "45+",
      label: "Conservation Projects Supported",
      desc: "Delivering free spatial analytics to local biodiversity and afforestation initiatives."
    },
    {
      stat: "100%",
      label: "Commitment to Sustainable Cloud Compute",
      desc: "Hosting geospatial processing workflows on carbon-offset and green cloud infrastructure."
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Featured Header Card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
          Corporate Responsibility & Impact
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
          Dedicated to Sustainable Planet and Inclusive Technology
        </h2>
        <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
          At Hake Technologies, we believe spatial intelligence is a public good. We use our expertise to safeguard ecosystems, empower students, and protect communities.
        </p>
      </div>

      {/* Responsibility Pillars */}
      <section className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Our Core Responsibility Pillars
          </h3>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            How we translate our technological capabilities into enduring positive environmental and social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900">{pillar.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="pt-6 border-t border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
          Impact in Numbers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-3xl sm:text-4xl font-extrabold ext-slate-900 font-heading block mb-2">
                {item.stat}
              </span>
              <h4 className="text-base font-bold ext-slate-900 mb-2">{item.label}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner for Good Callout */}
      <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-slate-900">Are you an NGO or Academic Researcher?</h4>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
            We offer discounted or pro-bono spatial mapping support for verified environmental conservation and public welfare projects.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm"
        >
          Request CSR Collaboration
        </Link>
      </div>
    </div>
  );
}
