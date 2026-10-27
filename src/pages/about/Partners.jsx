import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Globe2, Building, Handshake, CheckCircle2 } from 'lucide-react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { partnerLogos, partnerCategories } from '../../data/partners';

const categoryIconMap = {
  GraduationCap,
  Globe2,
  Building,
  Handshake,
};

export default function Partners() {
  useDocumentTitle(
    'Strategic Partners & Collaborators',
    'Government, institutional, and academic partners collaborating with HAKE Technologies.'
  );

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Featured Top Header Card */}
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

      {/* Strategic Alliances & Ecosystem Categories */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Strategic Alliances & Ecosystem
            </h3>
            <div className="h-0.5 w-16 sm:w-28 bg-[#00adef] rounded-full mt-1" />
          </div>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Our collaborative ecosystem amplifies research depth, broadens dataset availability, and accelerates delivery of robust geospatial solutions.
          </p>
        </div>

        {/* Dynamic Partner Categories Grid */}
        {partnerCategories && partnerCategories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerCategories.map((cat, idx) => {
              const IconComp = categoryIconMap[cat.iconName] || Handshake;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#005b94] mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-2 font-heading">
                      {cat.category}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {cat.desc}
                    </p>
                  </div>

                  {cat.partners && cat.partners.length > 0 && (
                    <ul className="space-y-2 pt-3 border-t border-slate-100">
                      {cat.partners.map((p, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#005b94] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold">{p.name}</span>
                            {p.detail && (
                              <span className="text-slate-500 block text-[11px]">{p.detail}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Partner Logos Section (when partnerLogos are present) */}
        {partnerLogos && partnerLogos.length > 0 ? (
          <div className="pt-4">
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading block mb-5">
              FEATURED PARTNERS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {partnerLogos.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#005b94]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between gap-4 group text-center"
                >
                  <div className="w-full h-24 sm:h-28 flex items-center justify-center overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full pt-3 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#005b94] transition-colors line-clamp-2">
                      {partner.name}
                    </h4>
                    {partner.subtitle && (
                      <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">
                        {partner.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      {/* Become a Partner Callout */}
      <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-slate-900 font-heading">Become a Hake Tech Partner</h4>
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
