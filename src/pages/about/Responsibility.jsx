import { Link } from 'react-router-dom';
import {
  Leaf,
  GraduationCap,
  ShieldCheck,
  Globe2,
} from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import { responsibilityPillars, impactInitiatives } from '../../data/responsibility';

const iconMap = {
  Leaf: <Leaf className="w-6 h-6 text-emerald-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#005b94]" />,
  Globe2: <Globe2 className="w-6 h-6 text-cyan-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-indigo-600" />
};

export default function Responsibility() {
  useDocumentTitle('Corporate Responsibility & Ethics', 'HAKE Technologies commitment to environmental action, ethical GIS, and community capacity building.');

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
          {responsibilityPillars.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                {iconMap[pillar.iconName]}
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
          {impactInitiatives.map((item, idx) => (
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
