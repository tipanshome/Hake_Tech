import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Building2,
  Sparkles,
  Users
} from 'lucide-react';

export default function Company() {

  const advisoryBoard = [
    {
      name: "Prof. Devesh Walia",
      role: "Advisory Board",
      image: "/assets/team/S_Walia.jpg",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com/in/devesh-walia-40595a27/"
    },
    {
      name: "Prof. Amarjeet Singh",
      role: "Advisory Board",
      image: "/assets/team/Amarjeet_Singh.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr. Yodida Bhutia",
      role: "Advisory Board",
      image: "/assets/team/Yodida_Bhutia.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr. Ritu Mishra",
      role: "Advisory Board",
      image: "/assets/team/Ritu_Mishra.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Prof. Kiranmoy Sarma",
      role: "Advisory Board",
      image: "/assets/team/Kiranmoy_Sharma.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Prof. Debendra Kumar Nayak",
      role: "Advisory Board",
      image: "/assets/team/DK_Nayak.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Prof. Chitta Ranjan Das",
      role: "Advisory Board",
      image: "/assets/team/CR_Das.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr Manik Mandal",
      role: "Advisory Board",
      image: "/assets/team/MANIK_MANDAL.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },

  ];

  const executiveLeadership = [
    {
      name: "Dr. Aparesh Patra",
      role: "Founder & CEO",
      image: "/assets/team/Aparesh_Patra_team.jpg",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com/in/apareshpatra/"
    },
    {
      name: "Dr. Mahasweta Satpati",
      role: "Founder and COO",
      image: "/assets/team/Mahasweta_Satpati.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Barnali Das",
      role: "Director",
      image: "/assets/team/Barnali_Das.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Col Richard Sundharam",
      role: "Vice President",
      image: "/assets/team/Richard Sundharam1.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Pankaj Kumar Maity",
      role: "Vice President",
      image: "/assets/team/Pankaj_Kumar_Maity.jpg",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
  ];

  const technicalTeam = [
    {
      name: "Siddesh Kumar",
      role: "Developer",
      image: "/assets/tech_team/siddesh.png",
      imgPos: "object-[center_20%]",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Subhakanta Sahu",
      role: "Developer",
      image: "/assets/tech_team/sameer.jpeg",
      imgPos: "object-[center_15%]",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Subhankar Roy",
      role: "Developer",
      image: "/assets/tech_team/subhankar.png",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Tipan",
      role: "Developer",
      image: "/assets/tech_team/Tipan.png",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com"
    }
  ];

  const milestones = [
    { year: "2021", title: "Company Founded", desc: "Established with a core mission to bring affordable, state-of-the-art GIS intelligence to emerging markets." },
    { year: "2022", title: "Enterprise WebGIS Expansion", desc: "Launched proprietary cloud GIS mapping engine and real-time spatial dashboard platforms." },
    { year: "2023", title: "Capacity Building Division", desc: "Trained over 3,500+ professionals and academic researchers across advanced remote sensing modules." },
    { year: "2024", title: "AI & Satellite Analytics", desc: "Integrated automated satellite feature extraction and sub-meter LiDAR 3D city modeling." }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Featured Header Card matching Hexagon highlight style */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
          About Hake Technologies
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
          The pioneer in spatial intelligence and geospatial innovation
        </h2>
        <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
          Empowering industries, governments, and academic institutions worldwide with satellite remote sensing, photogrammetry, and next-generation GIS solutions.
        </p>
      </div>

      {/* Quick Links / Section Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        <a href="#overview" className="p-3.5 rounded-xl border border-slate-200 hover:border-[#005b94] hover:bg-slate-50 transition-all font-semibold text-slate-800 text-sm flex items-center justify-between group">
          <span>Company Overview</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005b94] group-hover:translate-x-0.5 transition-all" />
        </a>
        <a href="#mission-vision" className="p-3.5 rounded-xl border border-slate-200 hover:border-[#005b94] hover:bg-slate-50 transition-all font-semibold text-slate-800 text-sm flex items-center justify-between group">
          <span>Mission & Vision</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005b94] group-hover:translate-x-0.5 transition-all" />
        </a>
        <a href="#leadership" className="p-3.5 rounded-xl border border-slate-200 hover:border-[#005b94] hover:bg-slate-50 transition-all font-semibold text-slate-800 text-sm flex items-center justify-between group">
          <span>Our Leadership</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005b94] group-hover:translate-x-0.5 transition-all" />
        </a>
        <a href="#milestones" className="p-3.5 rounded-xl border border-slate-200 hover:border-[#005b94] hover:bg-slate-50 transition-all font-semibold text-slate-800 text-sm flex items-center justify-between group">
          <span>Growth & Milestones</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005b94] group-hover:translate-x-0.5 transition-all" />
        </a>
        <Link to="/careers" className="p-3.5 rounded-xl border border-slate-200 hover:border-[#005b94] hover:bg-slate-50 transition-all font-semibold text-slate-800 text-sm flex items-center justify-between group">
          <span>Careers at Hake</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005b94] group-hover:translate-x-0.5 transition-all" />
        </Link>
        <Link to="/about/responsibility" className="p-3.5 rounded-xl border border-slate-200 hover:border-[#005b94] hover:bg-slate-50 transition-all font-semibold text-slate-800 text-sm flex items-center justify-between group">
          <span>Ethics & Responsibility</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005b94] group-hover:translate-x-0.5 transition-all" />
        </Link>
      </div>

      {/* Overview Section */}
      <section id="overview" className="space-y-6 pt-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#005b94]" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Our Story & Background
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed text-base">
          Founded with a relentless commitment to geospatial excellence, Hake Technologies helps organizations harness satellite imagery, spatial databases, and aerial sensor data into actionable intelligence.
        </p>
        <p className="text-slate-600 leading-relaxed text-base">
          We bridge the gap between complex satellite telemetry and practical business solutions—supporting smart governance, infrastructure planning, natural disaster mitigation, and agricultural precision.
        </p>

        {/* Story Image & Callout */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 mt-6">
          <img
            src="/assets/earth_geospatial.jpg"
            alt="Global Earth Observation Network"
            className="w-full h-[320px] sm:h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white border border-white/10">
            <p className="text-xs text-[#00adef] font-bold uppercase tracking-wider">Global Reach & Expertise</p>
            <p className="text-sm font-semibold text-slate-200 mt-1">Decades of cumulative spatial expertise serving defense, municipal, and private sectors.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-[#005b94] mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">Our Mission</h4>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Deliver dependable, cost-effective, and transformative geospatial technology solutions worldwide to enable resilient and data-driven futures.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-[#005b94] mb-4">
            <Eye className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">Our Vision</h4>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Be the global catalyst in democratizing spatial data and empowering sustainable decision-making across all critical industries.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. LEADERSHIP & FOUNDER QUOTE                                */}
      {/* ============================================================ */}
      <div className="py-8 sm:py-10 bg-white text-slate-900 overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200 bg-slate-100 group">
                <img
                  src="/assets/aparesh_patra.png"
                  alt="Dr. Aparesh Patra - Hake Technologies"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs shadow-sm">
                  <span className="text-[#005b94] font-bold">
                    Leadership & Vision
                  </span>
                  <span className="text-slate-600">Dr. Aparesh Patra</span>
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#005b94]">
                <Sparkles className="w-6 h-6" />
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed font-sans">
                &ldquo;Hake Technologies harnesses the full potential of geospatial technologies to deliver cost-effective, innovative, and cutting-edge solutions that meet the evolving needs of its clients.&rdquo;
              </blockquote>

              <div className="pt-2 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#0c2340] tracking-wide">
                  Aparesh Patra
                </h3>
                <p className="text-xs sm:text-sm text-[#005b94] font-semibold tracking-wider uppercase mt-0.5">
                  Founder & CEO • Hake Technologies
                </p>
                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-xs font-bold text-[#005b94] hover:text-[#0c2340] uppercase tracking-wider gap-1.5 transition-all group"
                  >
                    <span>Learn More About Leadership</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Advisory Board Section */}
      <section id="leadership">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Team & Leadership
          </h3>
          <p className="text-slate-600 mt-2 text-sm leading-relaxed">
            Meet the people bringing that vision to life.
          </p>
        </div>

        {/* Advisory Board */}
        <div className="mb-12">
          <h4 className="text-sm font-bold text-[#005b94] uppercase tracking-wider mb-6 text-center">
            Advisory Team
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-full max-w-[200px] aspect-[4/4.6] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <h5 className="text-base font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h5>
                <p className="text-xs font-semibold text-slate-600 mt-0.5 mb-2.5">
                  {member.role}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <a
                    href={member.twitter || "https://x.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#083b66] text-white flex items-center justify-center hover:bg-[#00adef] transition-colors shadow-sm"
                    aria-label={`${member.name} on X (Twitter)`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#083b66] text-white flex items-center justify-center hover:bg-[#00adef] transition-colors shadow-sm"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <span className="text-[11px] font-bold">in</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Leadership */}
        <div>
          <h4 className="text-sm font-bold text-[#005b94] uppercase tracking-wider mb-6 text-center">
            Executive Leadership
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {executiveLeadership.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-full max-w-[200px] aspect-[4/4.6] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h5 className="text-base font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h5>
                <p className="text-xs font-semibold text-slate-600 mt-0.5 mb-2.5">
                  {member.role}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <a
                    href={member.twitter || "https://x.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#083b66] text-white flex items-center justify-center hover:bg-[#00adef] transition-colors shadow-sm"
                    aria-label={`${member.name} on X (Twitter)`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#083b66] text-white flex items-center justify-center hover:bg-[#00adef] transition-colors shadow-sm"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <span className="text-[11px] font-bold">in</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Team */}
        <div className="mt-12">
          <h4 className="text-sm font-bold text-[#005b94] uppercase tracking-wider mb-6 text-center">
            Technical Team
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalTeam.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-full max-w-[200px] aspect-[4/4.6] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h5 className="text-base font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h5>
                <p className="text-xs font-semibold text-slate-600 mt-0.5 mb-2.5">
                  {member.role}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <a
                    href={member.twitter || "https://x.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#083b66] text-white flex items-center justify-center hover:bg-[#00adef] transition-colors shadow-sm"
                    aria-label={`${member.name} on X (Twitter)`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#083b66] text-white flex items-center justify-center hover:bg-[#00adef] transition-colors shadow-sm"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <span className="text-[11px] font-bold">in</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View more Team Details*/}
        <div className="text-center mt-12">
          <Link
            to="/ourteam"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="pt-8 ">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
          Milestones & Track Record
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {milestones.map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xl font-extrabold text-[#005b94] block mb-1">
                {item.year}
              </span>
              <h5 className="text-base font-bold text-slate-900 mb-1">
                {item.title}
              </h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
