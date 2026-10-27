import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  Users,
  Compass,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Clock,
  Loader2
} from 'lucide-react';

import { careerPerks, jobOpenings as fallbackJobs } from '../data/careers';

const iconMap = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#005b94]" />,
  Users: <Users className="w-5 h-5 text-[#005b94]" />,
  Compass: <Compass className="w-5 h-5 text-[#005b94]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#005b94]" />
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function CareersPage() {
  useDocumentTitle(
    'Careers',
    'Join Hake Technologies and build the future of spatial intelligence, remote sensing, and GIS engineering.'
  );

  const [jobOpenings, setJobOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const timestamp = Date.now();
        const parseJsonSafe = async (res) => {
          if (!res || !res.ok) return null;
          const ct = res.headers.get('content-type') || '';
          if (!ct.includes('application/json')) return null;
          try {
            return await res.json();
          } catch {
            return null;
          }
        };

        // Try configured API_URL first, fall back to relative /api/jobs if needed
        let response = await fetch(`${API_URL}/api/jobs?_t=${timestamp}`, { cache: 'no-store' }).catch(() => null);
        let data = await parseJsonSafe(response);

        if (!data) {
          response = await fetch(`/api/jobs?_t=${timestamp}`, { cache: 'no-store' }).catch(() => null);
          data = await parseJsonSafe(response);
        }

        if (Array.isArray(data) && data.length > 0) {
          setJobOpenings(data);
          setLoading(false);
          return;
        }
        setJobOpenings(fallbackJobs);
      } catch (err) {
        console.warn('Error fetching jobs, using fallback:', err);
        setJobOpenings(fallbackJobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12">
        <div className="space-y-12 animate-fade-in">
          {/* Featured Header Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
              Careers at Hake
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
              Shape the Future of Geospatial Innovation with Us
            </h2>
            <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
              Join a multidisciplinary team of geospatial scientists, GIS specialists, Earth observation engineers, and software innovators to solve real-world challenges using advanced spatial intelligence and next-generation geospatial technologies.
            </p>
          </div>

          {/* Why Join HAKE Section */}
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Why Build Your Career with Hake Technologies?
              </h3>
              <p className="text-slate-600 mt-2 text-base leading-relaxed">
                At Hake Technologies, we foster a culture of innovation, continuous learning, technical excellence, and collaboration. We empower our people to explore emerging technologies, solve complex real-world challenges, and turn ideas into impactful geospatial solutions. Here, your expertise helps drive meaningful advancements in climate resilience, infrastructure development, environmental sustainability, and data-driven decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {careerPerks.map((perk, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center mb-3">
                    {iconMap[perk.iconName]}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{perk.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions Section */}
          <section className="pt-6 border-t border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Current Openings
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Explore available opportunities to join our core team.
                </p>
              </div>
              <a
                href="mailto:careers@haketech.com"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm self-start sm:self-auto"
              >
                <span>Send Open Application</span>
              </a>
            </div>

            {/* Loading state */}
            {loading && (
              <div className="flex items-center justify-center py-16 text-slate-400">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span className="text-sm font-medium">Loading openings…</span>
              </div>
            )}

            {/* Error state */}
            {error && !loading && (
              <div className="p-5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            {/* No jobs */}
            {!loading && !error && jobOpenings.length === 0 && (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center text-slate-500 text-sm">
                No open positions at the moment. Check back soon or send an open application.
              </div>
            )}

            {/* Job cards */}
            {!loading && !error && jobOpenings.length > 0 && (
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#005b94] hover:shadow-md transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#005b94] uppercase tracking-wider">
                          {job.department}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 mt-0.5 group-hover:text-[#005b94] transition-colors">
                          {job.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Want to know more?</span>
                      <Link
                        to={`/careers/${job.id}`}
                        state={{ job }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#005b94]/10 hover:bg-[#005b94] text-[#005b94] hover:text-white transition-all text-xs font-bold shadow-xs group/btn"
                      >
                        <span>Read Full Description</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Internship / Academic Callout */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900">Student & Academic Research Internships</h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                Are you a graduate or postgraduate student in Geoinformatics, Remote Sensing, or Geography? We offer seasonal research fellowships and industrial project mentorships.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm"
            >
              Inquire for Internships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
