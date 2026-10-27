import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { advisoryBoard, executiveLeadership } from '../data/team';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function TeamDetails() {
  useDocumentTitle(
    'Leadership & Advisory Board',
    'Meet the distinguished scientists, domain specialists, researchers, and executive leaders guiding Hake Technologies.'
  );

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Top Banner & Navigation */}
      <div className="w-full bg-slate-50 border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <Link
            to="/about/company"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#005b94] hover:text-[#004e7c] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Company</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading">
            Our Leadership & Advisory Board
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Meet the distinguished scientists, domain specialists, researchers, and executive leaders guiding Hake Technologies towards excellence in spatial intelligence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 space-y-20">

        {/* ============================================================ */}
        {/* ADVISORY BOARD MEMBERS SECTION */}
        {/* ============================================================ */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#005b94] bg-cyan-50 border border-cyan-200/60 px-3.5 py-1 rounded-full inline-block mb-3">
              Distinguished Mentors
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
              Advisory Board Members
            </h2>
            <div className="w-16 h-1 bg-[#005b94] rounded-full mx-auto mt-4" />
          </div>

          <div className="space-y-16">
            {advisoryBoard.map((member, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 lg:gap-14 items-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all`}
                >
                  {/* Photo Card */}
                  <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col items-center text-center">
                    <div className="w-48 sm:w-56 lg:w-64 aspect-[4/4.8] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 mb-4 group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="320"
                        height="384"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                      {member.name} {member.credentials}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                      {member.domain}
                    </p>
                  </div>

                  {/* Bio Paragraphs */}
                  <div className="flex-1 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                    {member.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EXECUTIVE LEADERSHIP SECTION */}
        {/* ============================================================ */}
        <section className="space-y-12 pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#005b94] bg-cyan-50 border border-cyan-200/60 px-3.5 py-1 rounded-full inline-block mb-3">
              Executive Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
              Leadership Team
            </h2>
            <div className="w-16 h-1 bg-[#005b94] rounded-full mx-auto mt-4" />
          </div>

          <div className="space-y-16">
            {executiveLeadership.map((member, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 lg:gap-14 items-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all`}
                >
                  {/* Photo Card */}
                  <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col items-center text-center">
                    <div className="w-48 sm:w-56 lg:w-64 aspect-[4/4.8] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 mb-4 group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="320"
                        height="384"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                      {member.name} {member.credentials}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#005b94] mt-0.5">
                      {member.domain}
                    </p>
                  </div>

                  {/* Bio Paragraphs */}
                  <div className="flex-1 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                    {member.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Back to Company CTA */}
        <div className="text-center pt-8 border-t border-slate-200">
          <Link
            to="/about/company"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Company Overview</span>
          </Link>
        </div>

      </div>
    </div>
  );
}