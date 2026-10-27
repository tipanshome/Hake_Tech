import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  X,
  ZoomIn,
} from 'lucide-react';
import { capabilities } from '../data/capabilities';
import { products, healthProducts } from '../data/products';
import { homeIndustries } from '../data/homeIndustries';
import { coreTechnologies } from '../data/technologies';
import { clientLogos } from '../data/clients';
import { certifications } from '../data/certifications';
import ClientsMarquee from '../components/ClientsMarquee';
import useDocumentTitle from '../hooks/useDocumentTitle';

const iconMap = {
  Layers,
  Globe2,
  Database,
  Cpu,
  BarChart3,
  GraduationCap,
  Radio,
  Brain,
  ShieldCheck,
  Cloud,
};

export default function HomePage() {
  const [selectedCert, setSelectedCert] = useState(null);

  useDocumentTitle(
    'Home',
    'Hake Technologies turns satellite and field data into decision-ready maps — terrain, infrastructure, communities, and ecosystems.'
  );

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
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
                Hake transforms satellite imagery and field data into decision-ready maps, integrating terrain, infrastructure, communities, and ecosystems layer by layer.
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

            {/* Right Media Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-sky-900/15 border border-slate-100/80 bg-slate-900 group">
                <img
                  src="/assets/satellite_hero_delta.jpg"
                  alt="Satellite Earth Observation - Estuary and Mangrove Hydrology"
                  className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  width="600"
                  height="480"
                />

                {/* Movable Spatial Grid Overlay */}
                <div
                  className="absolute -inset-20 pointer-events-none opacity-30 animate-grid-move"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.75) 1.5px, transparent 1.5px),
                      linear-gradient(to bottom, rgba(255,255,255,0.75) 1.5px, transparent 1.5px)
                    `,
                    backgroundSize: '65px 65px',
                  }}
                />

                {/* Scanner Beam */}
                <div className="absolute top-0 bottom-0 w-24 pointer-events-none bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent blur-sm animate-scanner-sweep" />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. LOWER HIGHLIGHT BANNER & STAT CARDS */}
          {/* ============================================================ */}
          <div className="mt-12 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-[32px] bg-[#e8f4fc] border border-sky-100/80 p-5 sm:p-8 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-xl sm:text-2xl lg:text-[2.2rem] font-bold text-[#0c2340] leading-snug tracking-tight font-heading">
                  We map what matters. Hake delivers reliable geospatial solutions that empower teams with evidence-based insights they can trust, not just visually compelling maps.
                </h2>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {/* Card 1: 9 Capabilities */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left shadow-sm border border-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between h-28 sm:h-32 md:h-36 overflow-hidden">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#005b94] font-heading">
                      9
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-tight sm:tracking-wider text-slate-500 leading-tight">
                      CAPABILITIES
                    </span>
                  </div>

                  {/* Card 2: 3 Solutions */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left shadow-sm border border-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between h-28 sm:h-32 md:h-36 overflow-hidden">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10b981] font-heading">
                      3
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-tight sm:tracking-wider text-slate-500 leading-tight">
                      SOLUTIONS
                    </span>
                  </div>

                  {/* Card 3: 360° Spatial View */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left shadow-sm border border-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between h-28 sm:h-32 md:h-36 overflow-hidden">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0284c7] font-heading">
                      360°
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-tight sm:tracking-wider text-slate-500 leading-tight">
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
      {/* 3. CORE SERVICES / CAPABILITIES SECTION */}
      {/* ============================================================ */}
      <section id="services" className="py-20 sm:py-28 bg-white">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Comprehensive Spatial Services
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              From raw satellite data to enterprise-scale spatial databases, Hake delivers reliable geospatial intelligence and actionable insights at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((cap, idx) => {
              const IconComponent = iconMap[cap.iconName] || Layers;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl p-7 bg-[#fbfdfe] border border-slate-200/80 hover:border-[#005b94]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-sky-950/5 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#005b94] group-hover:bg-[#005b94] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6 transition-colors group-hover:text-white" />
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

                  <div className="pt-6 mt-6">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-xs font-bold text-[#005b94] group-hover:text-[#0284c7] group-hover:translate-x-1 transition-all"
                    >
                      <span>EXPLORE CAPABILITY</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
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
      {/* 4. PRODUCTS & SOLUTIONS SHOWCASE */}
      {/* ============================================================ */}
      <section id="products" className="py-20 sm:py-28 bg-[#fbfdfe]">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Hake Geospatial<sup className="text-base sm:text-lg lg:text-xl align-super ml-0.5">TM</sup>
            </h2>
            <h3 className="text-2xl sm:text-2xl lg:text-2xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Hake GeoSuite – Enterprise Geospatial Platform
            </h3>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Scalable, high-performance geospatial engines built to power mission-critical applications and enable data-driven decision-making.
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

                  <h4 className="text-2xl font-bold text-[#0c2340] mb-3 font-heading">
                    {prod.title}
                  </h4>

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
                  className="w-full py-3 rounded-xl bg-[#005b94] text-white hover:bg-[#004875] font-semibold text-xs tracking-wider uppercase transition-all duration-200 text-center"
                >
                  Explore Platform
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. DIGITAL HEALTH PRODUCTS */}
      {/* ============================================================ */}
      <section id="healthProducts" className="py-20 sm:py-28 bg-white">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Digital Health
            </h2>
            <h3 className="text-2xl sm:text-2xl lg:text-2xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Digital health products for public health
            </h3>
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

                  <h4 className="text-2xl font-bold text-[#0c2340] mb-3 font-heading">
                    {prod.title.trim() === 'DOHA' ? (
                      <>
                        DOHA<sup className="text-xs sm:text-sm align-super ml-0.5 font-bold">TM</sup>
                      </>
                    ) : (
                      prod.title
                    )}
                  </h4>

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
                  className="w-full py-3 rounded-xl bg-[#005b94] text-white hover:bg-[#004875] font-semibold text-xs tracking-wider uppercase transition-all duration-200 text-center"
                >
                  Explore Platform
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SECTORS & INDUSTRY ATLAS */}
      {/* ============================================================ */}
      <section id="industries" className="py-20 sm:py-28 bg-[#fbfdfe]">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Serving Critical Sectors Worldwide
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Powering strategic planning and operational security across vital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#005b94]/40 transition-all duration-200 group hover:-translate-y-1 shadow-xs hover:shadow-md"
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
                <div className="flex items-center justify-between pt-2">
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
      {/* 7. ADVANCED TECHNOLOGY ECOSYSTEM */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Propelled by Next-Gen Technologies
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Hake unifies spatial science with intelligent computing, distributed cloud systems, IoT telemetry, and cryptographic verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {coreTechnologies.map((tech) => {
              const TechIcon = iconMap[tech.iconName] || Globe2;
              return (
                <div
                  key={tech.id}
                  className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#005b94]/50 shadow-sm hover:shadow-xl hover:shadow-sky-950/5 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
                >
                  <div>
                    <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden relative border border-slate-100 mb-6 bg-slate-900">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                        width="500"
                        height="208"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center text-[#005b94] shadow-sm">
                          <TechIcon className="w-5 h-5 text-[#005b94]" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-xs font-semibold text-sky-200 bg-sky-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-sky-800/80">
                          {tech.stat}
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-[#0c2340] tracking-tight font-heading group-hover:text-[#005b94] transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#005b94] mt-0.5">
                        {tech.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {tech.desc}
                    </p>
                  </div>

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
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. STRATEGIC PARTNERS & ALLIANCES (INTERACTIVE MARQUEE) */}
      {/* ============================================================ */}
      <section id="partners" className="py-20 sm:py-28 bg-[#fbfdfe] border-t border-slate-100 overflow-hidden">
        <div className="w-full">

          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 px-4 sm:px-6">
            {/* <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#00adef] font-heading block mb-2">
              STRATEGIC COLLABORATIONS
            </span> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Our Clients
            </h2>
            <div className="w-16 h-1 bg-[#005b94] rounded-full mx-auto mt-4 mb-4" />
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We build long-term relationships by delivering precision, reliability, and tangible outcomes that accelerate progress.
            </p>
          </div>

          {/* Interactive Marquee (Auto-scrolling + Drag & Move + Pause on Hover) */}
          <ClientsMarquee clients={clientLogos} />

          {/* Centered Link to Partners page */}
          <div className="text-center mt-12 px-4">
            <Link
              to="/about/partners"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <span>Explore All Strategic Alliances</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. OUR CERTIFICATIONS */}
      {/* ============================================================ */}
      <section id="certifications" className="py-20 sm:py-28 bg-white border-t border-slate-100 overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 px-4 sm:px-6">
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#005b94] font-heading block mb-2">
              GLOBALLY ACCREDITED STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2340] tracking-tight mt-2.5 font-heading">
              Our Certifications
            </h2>
            <div className="w-16 h-1 bg-[#005b94] rounded-full mx-auto mt-4 mb-4" />
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Demonstrating our uncompromising commitment to global quality management, institutional information security, and certified excellence in geospatial data engineering.
            </p>
          </div>

          {/* Certifications Cards Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-2xl hover:border-[#005b94]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#005b94] bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                      {cert.badgeLabel}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Certified
                    </span>
                  </div>

                  {/* Certificate Image Frame */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full h-56 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/80 p-4 flex items-center justify-center overflow-hidden cursor-pointer group/img transition-all"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0c2340]/0 group-hover/img:bg-[#0c2340]/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5 text-[#005b94]" />
                        View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5 text-center">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c2340] font-heading group-hover:text-[#005b94] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-bold text-[#005b94] mt-1 tracking-wide">
                      {cert.title}
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed text-left">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Scope & Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 flex items-center justify-between">
                    <span className="font-medium">Standard Scope:</span>
                    <span className="font-semibold text-slate-800 text-right">{cert.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Link to Legal & Compliance page */}
          <div className="text-center mt-12 px-4">
            <Link
              to="/about/legal-compliance"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <span>Explore Compliance & Quality Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#005b94] bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedCert.badgeLabel}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {selectedCert.verifiedYear}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4 border border-slate-200/80">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-xl"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-[#0c2340] font-heading">
                {selectedCert.name}
              </h3>
              <p className="text-sm font-bold text-[#005b94]">
                {selectedCert.title}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Certified Assurance Highlights
              </h4>
              <ul className="space-y-2">
                {selectedCert.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#005b94] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Scope: <strong className="text-slate-800">{selectedCert.scope}</strong>
              </span>
              <Link
                to="/about/legal-compliance"
                onClick={() => setSelectedCert(null)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#005b94] hover:underline"
              >
                <span>Compliance Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
