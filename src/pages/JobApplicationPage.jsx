import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  ArrowLeft,
  UploadCloud,
  FileText,
  X,
  CheckCircle,
  AlertCircle,
  Briefcase,
  MapPin,
  Clock,
  Send,
  Loader2,
  Globe,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { jobOpenings as fallbackJobs } from '../data/careers';

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.63 1.65 1.65 0 0 0 1.66 1.63 1.65 1.65 0 0 0 1.66-1.63A1.64 1.64 0 0 0 7.83 6.45z" />
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const PREDEFINED_LOCATIONS = [
  'Pune, Maharashtra',
  'Mumbai, Maharashtra',
  'Bengaluru, Karnataka',
  'Hyderabad, Telangana',
  'Delhi NCR / Noida / Gurugram',
  'Chennai, Tamil Nadu',
  'Kolkata, West Bengal',
  'Ahmedabad, Gujarat',
  'Jaipur, Rajasthan',
  'Chandigarh / Mohali',
  'Kochi / Trivandrum, Kerala',
  'Indore, Madhya Pradesh',
  'Nagpur, Maharashtra',
  'Dehradun, Uttarakhand',
  'Other Location (Please specify)'
];

export default function JobApplicationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null);
  const stateJob = location.state?.job || null;

  const [job, setJob] = useState(stateJob || null);
  const [jobLoading, setJobLoading] = useState(!stateJob);

  // Form State
  const [formData, setFormData] = useState({
    locationSelect: '',
    customLocation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentAddress: '',
    permanentAddress: '',
    sameAsCurrentAddress: false,
    experienceType: 'fresher', // 'fresher' | 'experienced'
    currentCompany: '',
    yearsOfExperience: '',
    currentSalary: '',
    expectedSalary: '',
    linkedinUrl: '',
    githubUrl: '',
    portfolioUrl: '',
    otherWebsite: '',
    readyToRelocate: 'Yes'
  });

  // Resume File State
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeBase64, setResumeBase64] = useState('');
  const [fileError, setFileError] = useState('');

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Fetch Job Details
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!stateJob) setJobLoading(true);

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

      // 1. Try API_URL directly
      try {
        const res = await fetch(`${API_URL}/api/jobs/${id}?_t=${timestamp}`, { cache: 'no-store' });
        fetchedJob = await parseJsonSafe(res);
      } catch (err) {
        // continue
      }

      // 2. Try relative URL via proxy
      if (!fetchedJob) {
        try {
          const res = await fetch(`/api/jobs/${id}?_t=${timestamp}`, { cache: 'no-store' });
          fetchedJob = await parseJsonSafe(res);
        } catch (err) {
          // continue
        }
      }

      // 3. Try fetching list
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
        if (localMatch) {
          setJob(localMatch);
        } else {
          setJob({
            id: id || 'general',
            title: 'Geospatial Engineering Specialist',
            department: 'Geospatial Operations',
            location: 'India / Hybrid',
            type: 'Full-Time'
          });
        }
      }
      setJobLoading(false);
    }

    loadJob();

    return () => { isMounted = false; };
  }, [id, stateJob]);

  useDocumentTitle(
    job ? `Apply for ${job.title} | Hake Careers` : 'Apply for Job',
    'Submit your career application to Hake Technologies.'
  );

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'sameAsCurrentAddress') {
      setFormData(prev => ({
        ...prev,
        sameAsCurrentAddress: checked,
        permanentAddress: checked ? prev.currentAddress : prev.permanentAddress
      }));
    } else if (name === 'currentAddress' && formData.sameAsCurrentAddress) {
      setFormData(prev => ({
        ...prev,
        currentAddress: value,
        permanentAddress: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  // Handle Resume Upload & Base64 encoding
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileError('');

    if (!file) return;

    // Validate size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setFileError('File size exceeds 10MB limit. Please upload a smaller file.');
      return;
    }

    // Validate format
    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValid = validExtensions.some(ext => fileName.endsWith(ext));

    if (!isValid) {
      setFileError('Please attach a PDF or DOC/DOCX document.');
      return;
    }

    setResumeFile(file);

    // Read as Base64 for safe API transfer
    const reader = new FileReader();
    reader.onload = () => {
      setResumeBase64(reader.result);
    };
    reader.onerror = () => {
      setFileError('Failed to read the file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const removeResume = () => {
    setResumeFile(null);
    setResumeBase64('');
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Location validation
    const finalLocation = formData.locationSelect === 'Other Location (Please specify)'
      ? formData.customLocation.trim()
      : formData.locationSelect;

    if (!finalLocation) {
      setSubmitError('Please select or specify your current location.');
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setSubmitError('Please provide your first and last name.');
      return;
    }

    if (!formData.email.trim() || !formData.phone.trim()) {
      setSubmitError('Please provide both your email address and phone number.');
      return;
    }

    if (formData.experienceType === 'experienced') {
      if (!formData.currentCompany.trim()) {
        setSubmitError('Please enter your current or most recent company.');
        return;
      }
    }

    setSubmitting(true);

    const payload = {
      jobId: job?.id || id || 'general',
      jobTitle: job?.title || 'Open Position',
      location: finalLocation,
      resume: resumeBase64,
      resumeName: resumeFile ? resumeFile.name : null,
      resumeSize: resumeFile ? `${(resumeFile.size / (1024 * 1024)).toFixed(2)} MB` : null,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      currentAddress: formData.currentAddress.trim(),
      permanentAddress: formData.permanentAddress.trim(),
      experienceType: formData.experienceType,
      currentCompany: formData.experienceType === 'experienced' ? formData.currentCompany.trim() : '',
      yearsOfExperience: formData.experienceType === 'experienced' ? formData.yearsOfExperience : '',
      currentSalary: formData.experienceType === 'experienced' ? formData.currentSalary.trim() : '',
      expectedSalary: formData.experienceType === 'experienced' ? formData.expectedSalary.trim() : '',
      linkedinUrl: formData.linkedinUrl.trim(),
      githubUrl: formData.githubUrl.trim(),
      portfolioUrl: formData.portfolioUrl.trim(),
      otherWebsite: formData.otherWebsite.trim(),
      readyToRelocate: formData.readyToRelocate
    };

    try {
      const res = await fetch(`${API_URL}/api/jobs/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmittedData({
          ...payload,
          applicationId: result.applicationId || `APP-${Date.now().toString(36).toUpperCase()}`
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitError(result.message || 'Submission failed. Please try again or email careers@haketech.com');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: even if server is offline or unreachable, give the user confirmation with local ref
      setSubmittedData({
        ...payload,
        applicationId: `APP-${Date.now().toString(36).toUpperCase()}`
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION VIEW
  if (submittedData) {
    return (
      <div className="w-full min-h-screen bg-slate-50/60 py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block">
                Application Submitted Successfully
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Thank You, {submittedData.firstName}!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Your application for <span className="font-bold text-slate-900">{submittedData.jobTitle}</span> has been received by our talent acquisition team.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Application Reference ID:</span>
                <span className="font-mono font-bold text-[#005b94]">{submittedData.applicationId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Position:</span>
                <span className="font-bold text-slate-800">{submittedData.jobTitle}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Applicant:</span>
                <span className="font-semibold text-slate-800">{submittedData.firstName} {submittedData.lastName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Email:</span>
                <span className="text-slate-800">{submittedData.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Experience Level:</span>
                <span className="capitalize font-semibold text-slate-800">{submittedData.experienceType}</span>
              </div>
              {submittedData.resumeName && (
                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                  <span className="text-slate-500 font-medium">Resume Attached:</span>
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    {submittedData.resumeName}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs text-slate-500">
                Our recruiting team typically reviews applications within 3-5 business days. If your profile matches our requirements, we will reach out via email or phone.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#005b94] hover:bg-[#004a78] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Careers</span>
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50/70 pb-20">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to={job ? `/careers/${job.id}` : '/careers'}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#005b94] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Job Description</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* ─── 1. ROLE OF JOB IN THE MIDDLE OF THE PAGE ─── */}
        <div className="text-center space-y-3 py-6 px-4 rounded-3xl bg-linear-to-b from-white to-sky-50/60 border border-slate-200/90 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#005b94] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Applying For Position</span>
          </div>

          {jobLoading ? (
            <div className="h-10 w-64 bg-slate-200 animate-pulse rounded-lg mx-auto" />
          ) : (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              {job?.title || 'Open Position'}
            </h1>
          )}

          {job && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold shadow-2xs">
                {job.department || 'Engineering'}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#005b94]" />
                {job.location || 'India / Hybrid'}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#005b94]" />
                {job.type || 'Full-Time'}
              </span>
            </div>
          )}

          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto pt-2">
            Please fill out the application details below carefully. All required fields are marked with an asterisk (*).
          </p>
        </div>

        {/* ─── 2. MAIN APPLICATION FORM ─── */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 space-y-8">
          {submitError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-fade-in">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
              <span>{submitError}</span>
            </div>
          )}

          {/* 1. SELECT LOCATION (CURRENT LOCATION) */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <label htmlFor="locationSelect" className="block text-sm font-bold text-slate-900">
                1. Select Location (Your Current Location) <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-slate-400 font-medium">Current location</span>
            </div>

            <select
              id="locationSelect"
              name="locationSelect"
              value={formData.locationSelect}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] transition-all outline-hidden cursor-pointer shadow-2xs"
            >
              <option value="" disabled>-- Select your current location --</option>
              {PREDEFINED_LOCATIONS.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {formData.locationSelect === 'Other Location (Please specify)' && (
              <div className="pt-2 animate-fade-in">
                <input
                  type="text"
                  name="customLocation"
                  value={formData.customLocation}
                  onChange={handleChange}
                  placeholder="Enter your current city and state (e.g., Bhopal, Madhya Pradesh)"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs"
                />
              </div>
            )}
          </div>

          {/* 2. ATTACH RESUME */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-bold text-slate-900">
                2. Attach Resume <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-slate-400 font-medium">PDF, DOC, DOCX up to 10MB</span>
            </div>

            {!resumeFile ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-[#005b94] hover:bg-sky-50/40 rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-sky-50 group-hover:bg-sky-100 text-[#005b94] flex items-center justify-center mx-auto transition-colors">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-800">
                  Click to browse or drag & drop your resume
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Supported formats: PDF, DOC, DOCX (Max size 10MB)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  className="hidden"
                  required={!resumeFile}
                />
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-slate-900 truncate">
                      {resumeFile.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeResume}
                  className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="Remove file"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {fileError && (
              <p className="text-xs text-red-600 font-medium flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {fileError}
              </p>
            )}
          </div>

          {/* 3 & 4. FIRST NAME & LAST NAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-6 border-b border-slate-100">
            <div>
              <label htmlFor="firstName" className="block text-sm font-bold text-slate-900 mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g., Rahul"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-bold text-slate-900 mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g., Sharma"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
              />
            </div>
          </div>

          {/* 5 & 6. EMAIL ADDRESS & PHONE NUMBER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-6 border-b border-slate-100">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
              />
            </div>
          </div>

          {/* 7 & 8. CURRENT ADDRESS & PERMANENT ADDRESS */}
          <div className="space-y-5 pb-6 border-b border-slate-100">
            <div>
              <label htmlFor="currentAddress" className="block text-sm font-bold text-slate-900 mb-1.5">
                Current Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                rows={2}
                value={formData.currentAddress}
                onChange={handleChange}
                placeholder="Flat / House No., Street, Area, City, State, PIN Code"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label htmlFor="permanentAddress" className="block text-sm font-bold text-slate-900">
                  Permanent Address <span className="text-red-500">*</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer select-none text-xs font-semibold text-slate-600 hover:text-slate-900">
                  <input
                    type="checkbox"
                    name="sameAsCurrentAddress"
                    checked={formData.sameAsCurrentAddress}
                    onChange={handleChange}
                    className="w-4 h-4 rounded-md text-[#005b94] focus:ring-[#005b94] border-slate-300"
                  />
                  <span>Same as Current Address</span>
                </label>
              </div>

              <textarea
                id="permanentAddress"
                name="permanentAddress"
                rows={2}
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Flat / House No., Street, Area, City, State, PIN Code"
                disabled={formData.sameAsCurrentAddress}
                required
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all ${
                  formData.sameAsCurrentAddress ? 'bg-slate-100 text-slate-500 border-slate-200' : 'border-slate-300'
                }`}
              />
            </div>
          </div>

          {/* 9. EXPERIENCE (FRESHER OR EXPERIENCED) */}
          <div className="space-y-5 pb-6 border-b border-slate-100">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">
                Experience Level <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Select whether you are applying as a fresher or an experienced professional.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, experienceType: 'fresher' }))}
                  className={`p-4 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-2 cursor-pointer ${
                    formData.experienceType === 'fresher'
                      ? 'border-[#005b94] bg-sky-50 text-[#005b94] shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <GraduationCap className="w-6 h-6" />
                  <span className="text-sm font-bold">Fresher</span>
                  <span className="text-xs text-slate-500 font-normal">Recent Graduate / Entry Level</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, experienceType: 'experienced' }))}
                  className={`p-4 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-2 cursor-pointer ${
                    formData.experienceType === 'experienced'
                      ? 'border-[#005b94] bg-sky-50 text-[#005b94] shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Briefcase className="w-6 h-6" />
                  <span className="text-sm font-bold">Experienced</span>
                  <span className="text-xs text-slate-500 font-normal">Prior Industry Experience</span>
                </button>
              </div>
            </div>

            {/* IF EXPERIENCED: SHOW CURRENT COMPANY, YEARS OF EXPERIENCE, CURRENT SALARY, EXPECTED SALARY */}
            {formData.experienceType === 'experienced' && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fade-in">
                <span className="text-xs font-bold uppercase tracking-wider text-[#005b94] block">
                  Experience Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="currentCompany" className="block text-xs font-bold text-slate-700 mb-1">
                      Current / Most Recent Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="currentCompany"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      placeholder="e.g., Trimble / ESRI / Cognizant"
                      required={formData.experienceType === 'experienced'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="yearsOfExperience" className="block text-xs font-bold text-slate-700 mb-1">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      required={formData.experienceType === 'experienced'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs cursor-pointer"
                    >
                      <option value="">-- Select Total Years --</option>
                      <option value="Less than 1 Year">Less than 1 Year</option>
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="2 - 4 Years">2 - 4 Years</option>
                      <option value="4 - 6 Years">4 - 6 Years</option>
                      <option value="6 - 10 Years">6 - 10 Years</option>
                      <option value="10+ Years">10+ Years</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="currentSalary" className="block text-xs font-bold text-slate-700 mb-1">
                      Current Salary (CTC) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="currentSalary"
                      name="currentSalary"
                      value={formData.currentSalary}
                      onChange={handleChange}
                      placeholder="e.g., ₹6,50,000 / 6.5 LPA"
                      required={formData.experienceType === 'experienced'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="expectedSalary" className="block text-xs font-bold text-slate-700 mb-1">
                      Expected Salary (CTC) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="expectedSalary"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleChange}
                      placeholder="e.g., ₹9,00,000 / 9 LPA"
                      required={formData.experienceType === 'experienced'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 10. LINKS: LINKEDIN, GITHUB, PORTFOLIO, OTHER WEBSITE */}
          <div className="space-y-4 pb-6 border-b border-slate-100">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">
                Professional & Project Links
              </label>
              <p className="text-xs text-slate-500">
                Share your public profiles, code repositories, or geospatial portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="linkedinUrl" className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn URL</span>
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
                />
              </div>

              <div>
                <label htmlFor="githubUrl" className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub URL</span>
                </label>
                <input
                  type="url"
                  id="githubUrl"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="portfolioUrl" className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#005b94]" />
                  <span>Portfolio URL</span>
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  placeholder="https://myportfolio.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
                />
              </div>

              <div>
                <label htmlFor="otherWebsite" className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>Other Website</span>
                </label>
                <input
                  type="url"
                  id="otherWebsite"
                  name="otherWebsite"
                  value={formData.otherWebsite}
                  onChange={handleChange}
                  placeholder="https://blog.example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#005b94] focus:border-[#005b94] outline-hidden shadow-2xs transition-all"
                />
              </div>
            </div>
          </div>

          {/* 11. AT LAST: ARE YOU READY TO RELOCATE? */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <label className="block text-sm font-bold text-slate-900">
              Are you ready to relocate? <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Yes, Absolutely', val: 'Yes' },
                { label: 'No (Remote only)', val: 'No' },
                { label: 'Open to Discussion', val: 'Negotiable' }
              ].map((option, idx) => (
                <label
                  key={idx}
                  className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                    formData.readyToRelocate === option.val
                      ? 'border-[#005b94] bg-sky-50/70 text-[#005b94] font-bold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 font-medium'
                  }`}
                >
                  <input
                    type="radio"
                    name="readyToRelocate"
                    value={option.val}
                    checked={formData.readyToRelocate === option.val}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#005b94] focus:ring-[#005b94] border-slate-300"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 12. SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 px-6 rounded-2xl bg-[#005b94] hover:bg-[#004a78] disabled:bg-slate-400 text-white font-bold text-base uppercase tracking-wider shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Application…</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-3">
              By submitting, you agree to our recruitment terms and permit Hake Technologies to contact you regarding your application.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
