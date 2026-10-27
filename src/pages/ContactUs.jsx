import { useState, useRef, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  Mail,
  Phone,
  Send,
  User,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
  Check,
  ChevronDown,
  Search,
  Building,
  Briefcase,
  UserCheck
} from 'lucide-react';
import { inquiryOptions, companyTypeOptions, contactDetails } from '../data/contact';
import { countryList } from '../data/countries';

export default function ContactUs() {
  useDocumentTitle(
    'Contact Us',
    'Get in touch with the HAKE Technologies geospatial engineering and enterprise spatial consultation team.'
  );

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyType: '',
    companyName: '',
    designation: '',
    email: '',
    phone: '',
    inquiryType: inquiryOptions[0]?.value || 'Hake GeoDesk',
    message: ''
  });

  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const countryDropdownRef = useRef(null);

  const [isCompanyTypeOpen, setIsCompanyTypeOpen] = useState(false);
  const companyTypeDropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const turnstileRef = useRef(null);
  const formSectionRef = useRef(null);
  const [captchaSiteKey, setCaptchaSiteKey] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaConfigError, setCaptchaConfigError] = useState('');

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const filteredCountries = countryList.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch)
  );

  // Auto scroll up to the form / alert section when success or error occurs
  useEffect(() => {
    if (status.success || status.error) {
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [status.success, status.error]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
      if (companyTypeDropdownRef.current && !companyTypeDropdownRef.current.contains(event.target)) {
        setIsCompanyTypeOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsCountryDropdownOpen(false);
        setIsCompanyTypeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:4000' : '');

    fetch(`${API_URL}/api/captcha-config`)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok || !data.siteKey) {
          throw new Error(data.message || 'Cloudflare Turnstile is not configured on the server.');
        }
        setCaptchaSiteKey(data.siteKey);
      })
      .catch((error) => {
        setCaptchaConfigError(error.message || 'Unable to load verification.');
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const maxDigits = selectedCountry?.digits || 10;
      // Only digits allowed, maximum digits based on selected country
      const digitsOnly = value.replace(/\D/g, '').slice(0, maxDigits);
      setFormData((prev) => ({
        ...prev,
        phone: digitsOnly
      }));
      return;
    }

    if (name === 'firstName' || name === 'lastName') {
      // First letter is always capitalized regardless of caps lock/shift
      const capitalized = value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : '';
      setFormData((prev) => ({
        ...prev,
        [name]: capitalized
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectInquiry = (optionValue) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: optionValue
    }));
    setIsDropdownOpen(false);
  };

  const handleSelectCompanyType = (optionValue) => {
    setFormData((prev) => ({
      ...prev,
      companyType: optionValue
    }));
    setIsCompanyTypeOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please complete the Cloudflare verification before submitting.'
      });
      return;
    }

    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();

    // Mandatory fields validation
    if (!formData.firstName.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please enter your First Name.'
      });
      return;
    }

    if (!formData.companyType) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please select your Company Type.'
      });
      return;
    }

    if (!formData.companyName.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please enter your Company Name.'
      });
      return;
    }

    if (!formData.designation.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please enter your Designation.'
      });
      return;
    }

    if (!formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please provide your Email address and Query description.'
      });
      return;
    }

    if (formData.phone) {
      const requiredDigits = selectedCountry?.digits || 10;
      if (formData.phone.length !== requiredDigits) {
        setStatus({
          submitting: false,
          success: false,
          error: `Please enter a valid ${requiredDigits}-digit mobile number for ${selectedCountry.name}.`
        });
        return;
      }
    }

    setStatus({ submitting: true, success: false, error: null });

    const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:4000' : '');
    const formattedPhone = formData.phone ? `${selectedCountry.dialCode} ${formData.phone}` : '';

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyType: formData.companyType,
          companyName: formData.companyName,
          designation: formData.designation,
          name: fullName || formData.firstName,
          email: formData.email,
          phone: formattedPhone,
          inquiryType: formData.inquiryType,
          message: formData.message,
          captchaToken,
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null
        });
        setFormData({
          firstName: '',
          lastName: '',
          companyType: '',
          companyName: '',
          designation: '',
          email: '',
          phone: '',
          inquiryType: 'Hake GeoDesk',
          message: ''
        });
        setCaptchaToken('');
        turnstileRef.current?.reset();
      } else {
        throw new Error(data.message || 'Failed to send message through backend server.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setCaptchaToken('');
      turnstileRef.current?.reset();
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Unable to connect to the backend server. Please try again later.'
      });
    }
  };

  const handleMailtoFallback = () => {
    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
    const formattedPhone = formData.phone ? `${selectedCountry.dialCode} ${formData.phone}` : 'Not provided';
    const subject = encodeURIComponent(`[${formData.inquiryType || 'Inquiry'}] from ${fullName || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nCompany Type: ${formData.companyType || 'Not provided'}\nCompany Name: ${formData.companyName || 'Not provided'}\nDesignation: ${formData.designation || 'Not provided'}\nEmail: ${formData.email}\nPhone: ${formattedPhone}\nInterested In: ${formData.inquiryType}\n\nQuery Details:\n${formData.message}`
    );
    window.location.href = `mailto:${contactDetails.fallbackEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 sm:py-14 space-y-10 animate-fade-in">

      {/* Hero / About Section: Get in Touch with Hake Technologies (Crisp Background Image & Centered Content) */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md">
        {/* Crisp Visible Background Image (No blur applied) */}
        <img
          src="/assets/contact_us_desk.jpg"
          alt="Hake Technologies Workspace"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Soft Contrast Overlay (keeps background photo sharp & clearly visible) */}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/50" />

        {/* Centered Content in the Middle */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/85 border border-cyan-400/40 text-cyan-300 text-xs font-semibold shadow-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Direct Support & Inquiries
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight drop-shadow-lg">
            Get in Touch with Hake Technologies
          </h1>

          <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed max-w-2xl drop-shadow-md">
            Have a research collaboration in mind, an enterprise geospatial project to discuss, or an inquiry about our software and solutions? We’d love to hear from you. Share your requirements via the contact form below or reach out to our team directly to explore how Hake Technologies can help turn your ideas into impactful geospatial solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={`mailto:${contactDetails.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-[#005b94] border border-white/25 text-sm font-bold text-white transition-all shadow-md hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              {contactDetails.email}
            </a>
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-[#005b94] border border-white/25 text-sm font-bold text-white transition-all shadow-md hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              {contactDetails.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Full Width Contact Form Section */}
      <div
        id="contact-form-section"
        ref={formSectionRef}
        className="w-full bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 lg:p-12 shadow-sm scroll-mt-28"
      >

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Describe Your Query
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Fill in your details below and your message will be forwarded directly to our support inbox
          </p>
        </div>

        {/* Success Alert */}
        {status.success && (
          <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-4 text-emerald-900 animate-fade-in">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-base text-emerald-950">Message Sent Successfully!</h3>
              <p className="text-sm text-emerald-800 mt-1 leading-relaxed">
                Thank you for reaching out. Your query has been delivered to <span className="font-semibold">help@haketech.com</span>. We will review your message and reply as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus({ submitting: false, success: false, error: null })}
                className="mt-3 text-xs font-bold text-emerald-900 hover:underline cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {status.error && (
          <div className="mb-8 p-5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-4 text-amber-900 animate-fade-in">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-base text-amber-950">Submission Notice</h3>
              <p className="text-sm text-amber-800 mt-1 leading-relaxed">
                {status.error}
              </p>
              <button
                type="button"
                onClick={handleMailtoFallback}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-amber-200/90 hover:bg-amber-300 text-amber-950 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                Send directly via Email App
              </button>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Row 1: First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* First Name Field */}
            <div>
              <label htmlFor="contact-first-name" className="block text-sm font-semibold text-slate-800 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all"
                />
              </div>
            </div>

            {/* Last Name Field */}
            <div>
              <label htmlFor="contact-last-name" className="block text-sm font-semibold text-slate-800 mb-2">
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all"
                />
              </div>
            </div>

          </div>

          {/* Row 2: Company Type, Company Name, and Designation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Company Type Field */}
            <div className="relative" ref={companyTypeDropdownRef}>
              <label id="company-type-label" htmlFor="company-type-dropdown-btn" className="block text-sm font-semibold text-slate-800 mb-2">
                Company Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  id="company-type-dropdown-btn"
                  aria-haspopup="listbox"
                  aria-expanded={isCompanyTypeOpen}
                  aria-labelledby="company-type-label company-type-dropdown-btn"
                  onClick={() => setIsCompanyTypeOpen((prev) => !prev)}
                  className={`w-full pl-10 pr-10 py-3 text-left rounded-lg text-sm transition-all flex items-center justify-between cursor-pointer ${isCompanyTypeOpen
                    ? 'bg-white border border-[#005b94] ring-2 ring-[#005b94]/20 shadow-sm text-slate-900'
                    : 'bg-slate-50/70 border border-slate-300 text-slate-900 hover:bg-white hover:border-slate-400'
                    }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className={`truncate ${formData.companyType ? 'font-medium text-slate-900' : 'text-slate-400 font-normal'}`}>
                    {formData.companyType || 'Select company type...'}
                  </span>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isCompanyTypeOpen ? 'rotate-180 text-[#005b94]' : 'text-slate-500'
                        }`}
                    />
                  </div>
                </button>

                {/* Custom Styled Company Type Dropdown List */}
                {isCompanyTypeOpen && (
                  <div
                    role="listbox"
                    aria-labelledby="company-type-label"
                    className="absolute z-40 left-0 right-0 mt-2 p-1.5 bg-white border border-slate-200/90 rounded-xl shadow-xl shadow-slate-900/10 space-y-1 max-h-[220px] overflow-y-auto animate-in fade-in zoom-in-95 duration-150 [scrollbar-width:thin] [scrollbar-color:#94a3b8_#f8fafc] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-track]:rounded-r-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:rounded-full"
                  >
                    {companyTypeOptions.map((option) => {
                      const isSelected = formData.companyType === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => handleSelectCompanyType(option.value)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left transition-colors cursor-pointer group ${isSelected
                            ? 'bg-[#005b94]/10 text-[#005b94] font-semibold hover:bg-[#005b94] hover:text-white'
                            : 'text-slate-700 hover:bg-[#005b94] hover:text-white font-medium'
                            }`}
                        >
                          <span className="flex items-center justify-center w-4 h-4 flex-shrink-0">
                            {isSelected ? (
                              <Check className="w-4 h-4 text-[#005b94] group-hover:text-white stroke-[2.5]" />
                            ) : null}
                          </span>
                          <span className="truncate text-xs sm:text-sm">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Company Name Field */}
            <div>
              <label htmlFor="contact-company-name" className="block text-sm font-semibold text-slate-800 mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building className="w-4 h-4" />
                </div>
                <input
                  id="contact-company-name"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp / Ministry"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all"
                />
              </div>
            </div>

            {/* Designation Field */}
            <div>
              <label htmlFor="contact-designation" className="block text-sm font-semibold text-slate-800 mb-2">
                Designation <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <UserCheck className="w-4 h-4" />
                </div>
                <input
                  id="contact-designation"
                  name="designation"
                  type="text"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="e.g. GIS Lead, Director"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all"
                />
              </div>
            </div>

          </div>

          {/* Row 3: Email and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Email Field */}
            <div>
              <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-800 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all"
                />
              </div>
            </div>

            {/* Phone Number Field with Country Code Picker */}
            <div className="relative" ref={countryDropdownRef}>
              <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-800 mb-2">
                Phone number
              </label>

              <div
                className={`relative flex items-center rounded-lg transition-all ${isCountryDropdownOpen
                  ? 'bg-white border border-[#005b94] ring-2 ring-[#005b94]/20 shadow-sm'
                  : 'bg-slate-50/70 border border-slate-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#005b94]/20 focus-within:border-[#005b94]'
                  }`}
              >
                {/* Country Code Selector Button */}
                <button
                  type="button"
                  id="country-code-btn"
                  aria-haspopup="listbox"
                  aria-expanded={isCountryDropdownOpen}
                  onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 pl-3.5 pr-3 py-3 border-r border-slate-300 hover:bg-slate-100/80 transition-colors cursor-pointer select-none rounded-l-lg"
                >
                  <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 tracking-wider">
                    {selectedCountry.code}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {selectedCountry.dialCode}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180 text-[#005b94]' : ''
                      }`}
                  />
                </button>

                {/* Phone Number Input */}
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={selectedCountry?.digits || 10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={`${selectedCountry?.digits || 10}-digit mobile number`}
                  className="w-full pl-3.5 pr-4 py-3 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none rounded-r-lg"
                />
              </div>

              {/* Country Picker Dropdown (Shows 4 countries at initial open, scroll for others) */}
              {isCountryDropdownOpen && (
                <div
                  role="listbox"
                  aria-label="Select country code"
                  className="absolute z-50 left-0 right-0 mt-2 p-2 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-900/10 animate-in fade-in zoom-in-95 duration-150"
                >
                  {/* Search Country Input */}
                  <div className="relative mb-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Search className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search country"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#005b94] focus:border-[#005b94]"
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                    />
                  </div>

                  {/* Country List (max-h-[172px] displays exactly 4 items with scrollbar) */}
                  <div className="max-h-[172px] overflow-y-auto space-y-0.5 [scrollbar-width:thin] [scrollbar-color:#94a3b8_#f8fafc] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-track]:rounded-r-lg [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((c) => {
                        const isSelected = selectedCountry.code === c.code;
                        return (
                          <button
                            key={c.code}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsCountryDropdownOpen(false);
                              setCountrySearch('');
                              setFormData((prev) => ({
                                ...prev,
                                phone: prev.phone.slice(0, c.digits)
                              }));
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${isSelected
                              ? 'bg-blue-100/90 text-blue-900 font-semibold'
                              : 'text-slate-700 hover:bg-slate-100 font-normal'
                              }`}
                          >
                            <div className="flex items-center gap-3 truncate">
                              <span
                                className={`text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider ${isSelected ? 'bg-blue-200 text-blue-800' : 'bg-slate-100 text-slate-600'
                                  }`}
                              >
                                {c.code}
                              </span>
                              <span className="truncate text-xs sm:text-sm">{c.name}</span>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                              <span className="text-xs text-slate-500 font-mono">{c.dialCode}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-blue-700 stroke-[2.5]" />}
                            </div>
                          </button>
                        );
                      })
                    ) : (
                      <div className="py-4 text-center text-xs text-slate-500">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Row 4: Interested In Dropdown (Services, Products, etc.) */}
          <div className="relative" ref={dropdownRef}>
            <label id="inquiry-type-label" className="block text-sm font-semibold text-slate-800 mb-2">
              Interested In <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                id="inquiry-dropdown-btn"
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-labelledby="inquiry-type-label inquiry-dropdown-btn"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`w-full pl-4 pr-10 py-3 text-left rounded-lg text-sm transition-all flex items-center justify-between cursor-pointer ${isDropdownOpen
                  ? 'bg-white border border-[#005b94] ring-2 ring-[#005b94]/20 shadow-sm text-slate-900'
                  : 'bg-slate-50/70 border border-slate-300 text-slate-900 hover:bg-white hover:border-slate-400'
                  }`}
              >
                <span className="font-medium text-slate-900 truncate">
                  {formData.inquiryType || 'Select an option...'}
                </span>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#005b94]' : 'text-slate-500'
                      }`}
                  />
                </div>
              </button>

              {/* Custom Styled Dropdown List with scrollbar showing 4 options */}
              {isDropdownOpen && (
                <div
                  role="listbox"
                  aria-labelledby="inquiry-type-label"
                  className="absolute z-40 left-0 right-0 mt-2 p-1.5 bg-white border border-slate-200/90 rounded-xl shadow-xl shadow-slate-900/10 space-y-1 max-h-[182px] overflow-y-auto animate-in fade-in zoom-in-95 duration-150 [scrollbar-width:thin] [scrollbar-color:#94a3b8_#f8fafc] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-track]:rounded-r-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  {inquiryOptions.map((option) => {
                    const isSelected = formData.inquiryType === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelectInquiry(option.value)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-left transition-colors cursor-pointer group ${isSelected
                          ? 'bg-[#005b94]/10 text-[#005b94] font-semibold hover:bg-[#005b94] hover:text-white'
                          : 'text-slate-700 hover:bg-[#005b94] hover:text-white font-medium'
                          }`}
                      >
                        <span className="flex items-center justify-center w-4 h-4 flex-shrink-0">
                          {isSelected ? (
                            <Check className="w-4 h-4 text-[#005b94] group-hover:text-white stroke-[2.5]" />
                          ) : null}
                        </span>
                        <span className="truncate">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Row 4: Query Details */}
          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-800 mb-2">
              Describe your query in details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirements, questions, or project specifications in detail..."
              className="w-full p-4 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all resize-y leading-relaxed"
            />
          </div>

          <div>
            {captchaSiteKey ? (
              <Turnstile
                ref={turnstileRef}
                siteKey={captchaSiteKey}
                onSuccess={(token) => setCaptchaToken(token || '')}
                onExpire={() => setCaptchaToken('')}
                onError={() => setCaptchaToken('')}
              />
            ) : (
              <p role="status" className="text-sm text-amber-700">
                {captchaConfigError || 'Loading Cloudflare Turnstile verification...'}
              </p>
            )}
          </div>

          {/* Row 5: Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="submit"
              disabled={status.submitting || !captchaToken || !captchaSiteKey}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-lg bg-[#005b94] hover:bg-[#004a78] active:scale-[0.99] text-white text-sm font-bold shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {status.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Query
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              Your details are kept safe and confidential.
            </div>
          </div>

        </form>

      </div>

    </div>
  );
}
