import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function LegalCompliance() {
  const compliancePillars = [
    {
      icon: <Scale className="w-6 h-6 text-[#005b94]" />,
      title: "Geospatial Data Guidelines & National Compliance",
      desc: "Strict adherence to national and international geospatial data policies, remote sensing data deregulation guidelines, and security vetting for high-resolution base layers."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#005b94]" />,
      title: "Data Privacy & Information Security",
      desc: "Rigorous confidentiality protocols, end-to-end encryption for spatial cloud databases, and GDPR / DPDP Act compliance for user identity and location records."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#005b94]" />,
      title: "Ethical AI & Satellite Governance",
      desc: "Transparent model training methodologies ensuring fair, unbiased, and accountable algorithmic outputs across automated image classification systems."
    },
    {
      icon: <FileText className="w-6 h-6 text-[#005b94]" />,
      title: "Intellectual Property & Licensing",
      desc: "Transparent licensing models for proprietary algorithms, custom GIS web modules, and commercial satellite imagery redistribution rights."
    }
  ];

  const legalDocuments = [
    {
      title: "Privacy Policy",
      desc: "How Hake Technologies collects, protects, processes, and manages personal and organizational data.",
      link: "/privacy-policy"
    },
    {
      title: "Terms & Conditions",
      desc: "Rules, guidelines, warranties, and commercial terms governing use of our website, apps, and platforms.",
      link: "/terms-and-conditions"
    },
    {
      title: "Data Protection & Security Standard",
      desc: "Overview of enterprise cloud encryption, access control frameworks, and vulnerability protocols.",
      link: "/privacy-policy"
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Featured Header Card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
          Governance & Trust
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
          Legal Compliance, Ethics & Data Governance
        </h2>
        <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
          We uphold the highest benchmarks of data integrity, national security adherence, transparency, and ethical conduct in all spatial operations.
        </p>
      </div>

      {/* Compliance Pillars */}
      <section className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Compliance & Governance Standards
          </h3>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Our comprehensive framework ensures that all satellite acquisition, spatial analytics, and software deployments comply with legal standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {compliancePillars.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900">{pillar.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Documents Quick Links */}
      <section className="pt-6 border-t border-slate-200 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Legal Policies & Documentation
          </h3>
          <p className="text-slate-600 mt-1 text-sm">
            Review our official legal terms, privacy policies, and compliance statements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {legalDocuments.map((doc, idx) => (
            <Link
              key={idx}
              to={doc.link}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#005b94] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <FileText className="w-6 h-6 text-[#005b94] mb-3" />
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#005b94] transition-colors">
                  {doc.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#005b94]">
                <span>Read Policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Compliance Inquiry Box */}
      <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-slate-900">Have a Legal or Compliance Query?</h4>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
            For NDAs, custom data licensing agreements, or compliance audit documentation, contact our legal and governance team.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm"
        >
          <span>Contact Legal Team</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
