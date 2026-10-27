import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Share2,
  Building,
  Check,
  AlertCircle
} from 'lucide-react';
import { jobOpenings as fallbackJobs } from '../data/careers';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function JobDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const stateJob = location.state?.job || null;

  const [job, setJob] = useState(stateJob || null);
  const [loading, setLoading] = useState(!stateJob);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!stateJob) setLoading(true);

    let isMounted = true;

    async function loadJob() {
      const timestamp = Date.now();
      let fetchedJob = null;

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

      // 1. Try configured API_URL directly
      try {
        const res = await fetch(`${API_URL}/api/jobs/${id}?_t=${timestamp}`, { cache: 'no-store' });
        fetchedJob = await parseJsonSafe(res);
      } catch (err) {
        // continue
      }

      // 2. Try relative URL via Vite proxy if direct port failed
      if (!fetchedJob) {
        try {
          const res = await fetch(`/api/jobs/${id}?_t=${timestamp}`, { cache: 'no-store' });
          fetchedJob = await parseJsonSafe(res);
        } catch (err) {
          // continue
        }
      }

      // 3. Try fetching the full jobs list and searching by ID
      if (!fetchedJob) {
        try {
          let listRes = await fetch(`${API_URL}/api/jobs?_t=${timestamp}`, { cache: 'no-store' }).catch(() => null);
          let list = await parseJsonSafe(listRes);
          if (!list) {
            listRes = await fetch(`/api/jobs?_t=${timestamp}`, { cache: 'no-store' }).catch(() => null);
            list = await parseJsonSafe(listRes);
          }
          if (Array.isArray(list)) {
            fetchedJob = list.find(j => String(j.id).trim() === String(id).trim()) || null;
          }
        } catch (err) {
          // continue
        }
      }

      if (!isMounted) return;

      if (fetchedJob) {
        const localMatch = fallbackJobs.find(j => String(j.id).trim() === String(id).trim()) || {};
        setJob({ ...localMatch, ...fetchedJob });
      } else if (stateJob) {
        setJob(stateJob);
      } else {
        const localMatch = fallbackJobs.find(j => String(j.id).trim() === String(id).trim());
        setJob(localMatch || null);
      }
      setLoading(false);
    }

    loadJob();

    return () => { isMounted = false; };
  }, [id, stateJob]);

  useDocumentTitle(
    job ? `${job.title} | Careers at Hake` : 'Job Details',
    job ? job.description : 'Explore career opportunities at Hake Technologies.'
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job?.title} at Hake Technologies`,
        text: `Check out this opening for ${job?.title} at Hake Technologies`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center bg-white">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-[#005b94]/20 border-t-[#005b94] rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 text-sm font-medium">Loading position details…</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="max-w-md text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-heading">Job Opening Not Found</h2>
          <p className="text-slate-600 text-sm">
            The position you are looking for may have been filled or the link has changed.
          </p>
          <div className="pt-2">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#005b94] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#004a78] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Browse All Openings</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50/60 pb-20">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#005b94] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all Openings</span>
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
              title="Share job opening"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-[#005b94] via-[#004e80] to-[#013b63] text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 -mb-12 w-48 h-48 bg-cyan-400/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-xs px-3 py-1 rounded-full">
                {job.department || 'Engineering'}
              </span>
              <span className="text-xs font-semibold bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 px-3 py-1 rounded-full">
                {job.type || 'Full-Time'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-cyan-100 pt-1 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-300" />
                {job.location || 'India / Hybrid'}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-300" />
                {job.type || 'Full-Time'}
              </span>
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-cyan-300" />
                Hake Technologies Core Team
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left/Main Column: Full Description Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About The Role */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#005b94] rounded-full inline-block" />
                About The Role
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {job.aboutRole || job.description}
              </p>
              {job.aboutRole && (
                <p className="text-slate-600 text-sm leading-relaxed pt-2">
                  {job.description}
                </p>
              )}
            </section>

            {/* Key Responsibilities */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#005b94] rounded-full inline-block" />
                Key Responsibilities
              </h2>
              <p className="text-slate-600 text-sm">
                Here is a summary of what you will be owning and driving in this position:
              </p>
              <ul className="space-y-3 pt-2">
                {(job.responsibilities && job.responsibilities.length > 0 ? job.responsibilities : [
                  'Execute end-to-end tasks associated with this role adhering to high quality and engineering benchmarks.',
                  'Work cross-functionally with GIS researchers, software architects, and domain leads.',
                  'Maintain rigorous documentation and participate in team reviews.',
                  'Proactively identify opportunities for automation, spatial accuracy enhancement, and product scaling.',
                  'Collaborate with clients and institutional stakeholders to address technical queries.'
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#005b94] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements & Qualifications */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#005b94] rounded-full inline-block" />
                Requirements & Qualifications
              </h2>
              <p className="text-slate-600 text-sm">
                We are looking for individuals with the following background and skillset:
              </p>
              <ul className="space-y-3 pt-2">
                {(job.requirements && job.requirements.length > 0 ? job.requirements : [
                  'Relevant degree, diploma, or proven industry experience in this domain.',
                  'Solid problem-solving orientation and curiosity for spatial technologies.',
                  'Demonstrated proficiency with standard industry workflows and tools.',
                  'Strong written and verbal communication abilities.',
                  'Ability to work independently in a fast-paced, collaborative geospatial environment.'
                ]).map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#005b94] shrink-0 mt-2" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Skills & Tools (if available) */}
            {job.skills && job.skills.length > 0 && (
              <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#005b94] rounded-full inline-block" />
                  Key Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-sky-50 text-[#005b94] font-semibold text-xs sm:text-sm border border-sky-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Perks & Benefits */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#005b94] rounded-full inline-block" />
                What We Offer
              </h2>
              <ul className="space-y-3 pt-2">
                {(job.benefits && job.benefits.length > 0 ? job.benefits : [
                  'Competitive remuneration structure with regular appraisals.',
                  'Flexible work environment fostering personal innovation.',
                  'Access to enterprise geospatial suites and compute infrastructure.',
                  'Comprehensive health and accidental insurance policy.'
                ]).map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ─── AT THE LAST OF FULL DESCRIPTION: APPLY NOW BUTTON CARD ─── */}
            <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-950 text-white shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Ready To Join Us?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Apply for {job.title}
                </h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  Take the next step in your career. Submit your application and resume to begin your journey with Hake Technologies.
                </p>
              </div>

              <Link
                to={`/careers/${job.id}/apply`}
                state={{ job }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#005b94] hover:bg-[#0070b8] text-white text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Quick Summary & Sidebar */}
          <div className="space-y-6">
            {/* Quick Summary Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5 sticky top-24">
              <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 font-heading">
                Job Overview
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#005b94] flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Department</span>
                    <span className="text-sm font-bold text-slate-900">{job.department}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#005b94] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-bold text-slate-900">{job.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#005b94] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Employment Type</span>
                    <span className="text-sm font-bold text-slate-900">{job.type}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#005b94] flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Organization</span>
                    <span className="text-sm font-bold text-slate-900">Hake Technologies</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to={`/careers/${job.id}/apply`}
                  state={{ job }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#005b94] hover:bg-[#004a78] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-slate-500">
                  Questions about this role?{' '}
                  <a href="mailto:careers@haketech.com" className="text-[#005b94] font-semibold hover:underline">
                    Contact HR
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
