import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, Database, CheckCircle2, ArrowRight, UserCheck, Trash2, Send, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    actionType: 'Show me my data',
    agreed: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('Please agree to the Privacy Policy and Terms & Conditions.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-white">

      {/* ============================================================ */}
      {/* HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
        {/* Crisp Visible Background Image */}
        <img
          src="/assets/privacy_policy_bg.jpg"
          alt="Data Privacy & Cybersecurity"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Soft transparent overlay for text contrast while keeping the artwork clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />
        <div className="absolute inset-0 bg-[#062038]/30" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-300 bg-slate-950/80 px-4 py-1.5 rounded-full border border-cyan-500/40 backdrop-blur-md inline-flex items-center gap-2 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-5 max-w-4xl mx-auto font-heading drop-shadow-lg text-white">
            Privacy Policy
          </h1>
          <p className="text-cyan-100/90 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-medium drop-shadow">
            Effective Date: September 15, 2026 • Hake Technologies Private Limited
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTENT SECTION */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Summary Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 mb-14">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-3 font-heading">
              <Lock className="w-5 h-5 text-[#005b94]" />
              Commitment to Data Privacy & Transparency
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Hake Technologies, we respect your privacy and are committed to safeguarding the personal and organizational data you share with us across our websites, platforms, applications, and geospatial services.
            </p>
          </div>

          <div className="space-y-14 text-slate-700 leading-relaxed text-sm sm:text-base">

            {/* Section 1: Private Data We Receive And Collect */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">1</span>
                Private Data We Receive And Collect
              </h3>
              <p className="text-slate-600">
                Hake also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable).
              </p>
              <p className="text-slate-800 font-semibold pt-1">
                When you first register for a Hake account, and when you use the Services, we collect some Personal Information about you such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>The geographic area where you use your computer and mobile devices.</li>
                <li>Your full name, username, and email address and other contact details.</li>
                <li>A unique Hake user ID (an alphanumeric string) which is assigned to you upon registration.</li>
                <li>Other optional information as part of your account profile.</li>
                <li>Your IP Address and, when applicable, timestamp related to your consent and confirmation of consent.</li>
                <li>Other information submitted by you or your organizational representatives via various methods.</li>
                <li>Your billing address and any necessary other information to complete any financial transaction, and when making purchases through the Services, we may also collect your credit card or PayPal information.</li>
                <li>User generated content (such as messages, posts, comments, pages, profiles, images, feeds or communications exchanged on the Supported Platforms).</li>
                <li>Images or other files that you may publish via our Services.</li>
                <li>Information (such as messages, posts, comments, pages, profiles, images) we may receive relating to communications you send us, such as queries or comments concerning services.</li>
              </ul>
            </div>

            {/* Section 2: How We Use Hake Landing Page Data */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">2</span>
                How We Use Hake Landing Page Data
              </h3>
              <p className="text-slate-600">
                Hake SaaS Landing Page Template uses visitors' data for the following general purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>To identify you when you login to your account.</li>
                <li>To enable us to operate the Services and provide them to you.</li>
                <li>To verify your transactions and for purchase confirmation, billing, security, and authentication (including security tokens for communication with installed systems).</li>
                <li>To analyze the Website or the other Services and information about our visitors and users, including research into our user demographics and user behaviour in order to improve our content and Services.</li>
                <li>To contact you about your account and provide customer service support, including responding to your comments and questions.</li>
                <li>To share aggregate (non-identifiable) statistics about users of the Services to prospective advertisers and partners.</li>
                <li>To keep you informed about the Services, features, surveys, newsletters, offers, contests and events we think you may find useful or which you have requested from us.</li>
                <li>To sell or market Hake Landing Page products and services to you.</li>
                <li>To better understand your needs and the needs of users in the aggregate, diagnose problems, analyze trends, improve the features and usability of the Services, and better understand and market to our customers and users.</li>
                <li>To keep the Services safe and secure.</li>
              </ul>
              <p className="text-slate-600 pt-2">
                We also use non-identifiable information gathered for statistical purposes to keep track of the number of visits to the Services with a view to introducing improvements and improving usability of the Services. We may share this type of statistical data so that our partners also understand how often people use the Services, so that they, too, may provide you with an optimal experience.
              </p>
            </div>

            {/* Section 3: Customer Content We Process For Customers */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">3</span>
                Customer Content We Process For Customers
              </h3>
              <p className="text-slate-600">
                Hake is a HTML landing page template tool. By its nature, Services enable our customers to promote their products and services integrate with hundreds of business applications that they already use, all in one place.
              </p>
              <p className="text-slate-600">
                Services help our customers promote their products and services, marketing and advertising; engaging audiences; scheduling and publishing messages; and analyze the results.
              </p>
            </div>

            {/* Section 4: Consent Of Using Hake Landing Page */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">4</span>
                Consent Of Using Hake Landing Page
              </h3>
              <p className="text-slate-600">
                By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent to the collection, transfer, storage disclosure, and use of your Personal Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services.
              </p>
            </div>

            {/* Section 5: Inquire What Data We Have (Interactive Form) */}
            <div className="space-y-6 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">5</span>
                Inquire What Data We Have
              </h3>
              <p className="text-slate-600">
                Hake Landing Page uses tracking technology on the landing page, in the Applications, and in the Platforms, including mobile application identifiers and a unique Hake user ID to help us recognize you across different Services, to monitor usage and web traffic routing for the Services, and to customize and improve the Services.
              </p>
              <p className="text-slate-600">
                By visiting Hake or using the Services you agree to the use of cookies in your browser and HTML-based emails. Cookies are small text files placed on your device when you visit a website. By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent and use of your Personal Information.
              </p>

              {/* Data Inquiry Form Card */}
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-slate-950 flex items-center gap-2 font-heading">
                    <UserCheck className="w-5 h-5 text-[#005b94]" />
                    Data Access & Management Request
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Submit your request below to inquire about or delete your personal data from our systems.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h5 className="text-base font-bold text-emerald-950">
                      Request Submitted Successfully
                    </h5>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you. We have received your data inquiry request for <strong className="text-emerald-950">{formData.email}</strong>. Our data compliance officer will review your request and process it within 30 days.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', email: '', actionType: 'Show me my data', agreed: false });
                      }}
                      className="mt-3 px-5 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Full Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005b94] focus:border-transparent text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005b94] focus:border-transparent text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005b94] focus:border-transparent text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Select Option
                      </label>
                      <div className="relative" ref={dropdownRef}>
                        {/* Dropdown Box Trigger */}
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005b94] transition-all cursor-pointer shadow-sm text-left"
                        >
                          <div className="flex items-center gap-3">
                            {formData.actionType === 'Delete my data' ? (
                              <>
                                <div className="w-4 h-4 rounded-full border border-red-500 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-red-500" />
                                </div>
                                <Trash2 className="w-4 h-4 text-red-500" />
                                <span className="text-sm font-semibold text-slate-900">Delete my data</span>
                              </>
                            ) : (
                              <>
                                <div className="w-4 h-4 rounded-full border border-[#005b94] flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-[#005b94]" />
                                </div>
                                <Eye className="w-4 h-4 text-[#005b94]" />
                                <span className="text-sm font-semibold text-slate-900">Show me my data</span>
                              </>
                            )}
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Box Menu */}
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white rounded-2xl border border-slate-200 shadow-xl z-30 space-y-2.5">
                            {/* Option 1: Delete my data */}
                            <div
                              onClick={() => {
                                setFormData({ ...formData, actionType: 'Delete my data' });
                                setIsDropdownOpen(false);
                              }}
                              className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl border cursor-pointer transition-all ${formData.actionType === 'Delete my data'
                                ? 'border-red-400 bg-red-50/50 text-red-950 font-bold shadow-sm'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${formData.actionType === 'Delete my data' ? 'border-red-500' : 'border-slate-400'
                                }`}>
                                {formData.actionType === 'Delete my data' && (
                                  <div className="w-2 h-2 rounded-full bg-red-500" />
                                )}
                              </div>
                              <Trash2 className="w-4 h-4 text-red-500 shrink-0" />
                              <span className="text-sm">Delete my data</span>
                            </div>

                            {/* Option 2: Show me my data */}
                            <div
                              onClick={() => {
                                setFormData({ ...formData, actionType: 'Show me my data' });
                                setIsDropdownOpen(false);
                              }}
                              className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl border cursor-pointer transition-all ${formData.actionType === 'Show me my data'
                                ? 'border-[#005b94] bg-cyan-50/50 text-slate-950 font-bold shadow-sm'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${formData.actionType === 'Show me my data' ? 'border-[#005b94]' : 'border-slate-400'
                                }`}>
                                {formData.actionType === 'Show me my data' && (
                                  <div className="w-2 h-2 rounded-full bg-[#005b94]" />
                                )}
                              </div>
                              <Eye className="w-4 h-4 text-[#005b94] shrink-0" />
                              <span className="text-sm">Show me my data</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          required
                          checked={formData.agreed}
                          onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                          className="mt-0.5 rounded text-[#005b94] focus:ring-[#005b94]"
                        />
                        <span>
                          I have read and agree to Hake's{' '}
                          <Link to="/privacy-policy" className="text-[#005b94] font-semibold hover:underline">
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link to="/terms-and-conditions" className="text-[#005b94] font-semibold hover:underline">
                            Terms & Conditions
                          </Link>
                          .
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md active:scale-[0.99]"
                      >
                        <span>SUBMIT</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Navigation Links */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between text-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-bold text-[#005b94] hover:text-[#004e7c] transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              to="/terms-and-conditions"
              className="inline-flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              View Terms & Conditions →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
