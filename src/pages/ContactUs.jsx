import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  User,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields (Name, Email, and Query description).'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
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
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Failed to send message through backend server.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Unable to connect to the backend server. Please make sure your backend server is running on port 4000.'
      });
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nQuery Details:\n${formData.message}`
    );
    window.location.href = `mailto:tipanshome@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 sm:py-14 space-y-10 animate-fade-in">

      {/* Hero / About Section: Get in Touch with Hake Technologies */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5">

          <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#005b94]" />
              Direct Support & Inquiries
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.1]">
              Get in Touch with Hake Technologies
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Questions about our research, an enterprise geospatial project to scope, or software inquiries — send us your note below or reach our front desk directly.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="mailto:help@haketech.com"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#005b94] hover:underline"
              >
                <Mail className="w-4 h-4" />
                help@haketech.com
              </a>
              <a
                href="tel:+917982542642"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#005b94]"
              >
                <Phone className="w-4 h-4" />
                +91 7982542642
              </a>
            </div>
          </div>

          {/* Coordinate panel — Registered Office Agartala Readout */}
          <div className="lg:col-span-2 relative bg-[#00243b] px-8 sm:px-10 lg:px-8 py-10 lg:py-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #83c9d7 1px, transparent 1px), linear-gradient(to bottom, #83c9d7 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }}
            />
            <div className="relative">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="mb-5">
                <circle cx="17" cy="17" r="15.5" stroke="#83c9d7" strokeWidth="1" opacity="0.6" />
                <line x1="17" y1="0" x2="17" y2="34" stroke="#83c9d7" strokeWidth="1" opacity="0.6" />
                <line x1="0" y1="17" x2="34" y2="17" stroke="#83c9d7" strokeWidth="1" opacity="0.6" />
                <circle cx="17" cy="17" r="3" fill="#83c9d7" />
              </svg>
              <p className="text-[11px] uppercase tracking-widest text-[#83c9d7] font-semibold mb-2">
                Registered office · Agartala
              </p>
              <p className="font-mono text-2xl sm:text-3xl text-white tracking-tight">
                23.8315° N
              </p>
              <p className="font-mono text-2xl sm:text-3xl text-white tracking-tight">
                91.2868° E
              </p>
              <p className="mt-4 text-sm text-[#cce5f5]/80">
                Mon – Sat, 9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Full Width Contact Form Section */}
      <div className="w-full bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 lg:p-12 shadow-sm">

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
                Thank you for reaching out. Your query has been delivered to <span className="font-semibold">tipanshome@gmail.com</span>. We will review your message and reply as soon as possible.
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

          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name Field */}
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-800 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all"
                />
              </div>
            </div>

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

          </div>

          {/* Row 2: Phone Number */}
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-800 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-3 bg-slate-50/70 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#005b94]/20 focus:border-[#005b94] transition-all"
              />
            </div>
          </div>

          {/* Row 3: Query Details */}
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

          {/* Row 4: Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="submit"
              disabled={status.submitting}
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
