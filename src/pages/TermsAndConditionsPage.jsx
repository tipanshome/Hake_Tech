import React from "react";
import {
  Scale,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* ============================================================ */}
      {/* HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
        {/* Crisp Visible Background Image */}
        <img
          src="/assets/terms_conditions_bg.jpg"
          alt="Terms and Conditions Legal Governance"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Soft transparent overlay for text contrast while keeping the artwork clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />
        <div className="absolute inset-0 bg-[#062038]/30" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-300 bg-slate-950/80 px-4 py-1.5 rounded-full border border-cyan-500/40 backdrop-blur-md inline-flex items-center gap-2 shadow-md">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-5 max-w-4xl mx-auto font-heading drop-shadow-lg text-white">
            Terms and Conditions
          </h1>
          <p className="text-cyan-100/90 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-medium drop-shadow">
            Effective Date: September 15, 2026 • Hake Technologies Private
            Limited
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
              <FileCheck className="w-5 h-5 text-[#005b94]" />
              Agreement Overview
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These Terms and Conditions govern your access to and use of
              websites, applications, platforms, digital products, and
              geospatial solutions operated by Hake Technologies Private Limited
              ("Hake", "we", "our", or "us"). Please read them carefully before
              using our services.
            </p>
          </div>

          <div className="space-y-14 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Section 1: Limitations Of Liability */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                Limitations Of Liability
              </h3>
              <p className="text-slate-600">
                Hake also automatically collects and receives certain
                information from your computer or mobile device, including the
                activities you perform on our Website, the Platforms, and the
                Applications, the type of hardware and software you are using
                (for example, your operating system or browser), and information
                obtained from cookies. For example, each time you visit the
                Website or otherwise use the Services, we automatically collect
                your IP address, browser and device type, access times, the web
                page from which you came, the regions from which you navigate
                the web page, and the web page(s) you access (as applicable).
              </p>
              <p className="text-slate-800 font-semibold pt-1">
                When you first register for a Hake account, and when you use the
                Services, we collect some Personal Information about you such
                as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
                <li>
                  The geographic area where you use your computer and mobile
                  devices
                </li>
                <li>
                  Your full name, username, and email address and other contact
                  details
                </li>
                <li>
                  A unique Hake user ID (an alphanumeric string) which is
                  assigned to you upon registration
                </li>
                <li>
                  Other optional information as part of your account profile
                </li>
                <li>
                  Your IP Address and, when applicable, timestamp related to
                  your consent and confirmation of consent
                </li>
                <li>
                  Other information submitted by you or your organizational
                  representatives via various methods
                </li>
              </ul>
            </div>

            {/* Section 2: Terms And Conditions */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                Terms And Conditions
              </h3>
              <p className="text-slate-600">
                Under no circumstances shall Hake be liable for any direct,
                indirect, special, incidental or consequential damages,
                including, but not limited to, loss of data or profit, arising
                out of the use, or the inability to use, the materials on this
                site, even if Hake or an authorized representative has been
                advised of the possibility of such damages. If your use of
                materials from this site results in the need for servicing,
                repair or correction of equipment or data, you assume any costs
                thereof.
              </p>
            </div>

            {/* Section 3: License Types & Template Usage */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                License Types & Template Usage
              </h3>
              <p className="text-slate-600">
                All our templates inherit the GNU general public license from
                HTML. All .PSD & CSS files are packaged separately and are not
                licensed under the GPL 2.0. Instead, these files inherit Hake
                Personal Use License. These files are given to all Clients on a
                personal use basis. You may not offer them, modified or
                unmodified, for redistribution or resale of any kind. You can’t
                use one of our themes on a HTML domain. More on HTML Vs CSS, you
                can read here. You can use our templates do develop sites for
                your clients.
              </p>
              <p className="text-slate-600">
                Services help our customers promote their products and services,
                marketing and advertising; engaging audiences; scheduling and
                publishing messages; and analyze the results.
              </p>
            </div>

            {/* Section 4: Designer Membership And How It Applies */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                Designer Membership And How It Applies
              </h3>
              <p className="text-slate-600">
                By using any of the Services, or submitting or collecting any
                Personal Information via the Services, you consent to the
                collection, transfer, storage disclosure, and use of your
                Personal Information in the manner set out in this Privacy
                Policy. If you do not consent to the use of your Personal
                Information in these ways, please stop using the Services.
              </p>
            </div>

            {/* Section 5: Assets Used In The Live Preview Content */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                Assets Used In The Live Preview Content
              </h3>
              <p className="text-slate-600">
                Hake Landing Page uses tracking technology on the landing page,
                in the Applications, and in the Platforms, including mobile
                application identifiers and a unique Hake user ID to help us
                recognize you across different Services, to monitor usage and
                web traffic routing for the Services, and to customize and
                improve the Services. By visiting Hake or using the Services you
                agree to the use of cookies in your browser and HTML-based
                emails. Cookies are small text files placed on your device when
                you visit a website in order to track use of the site and to
                improve your user experience.
              </p>
            </div>

            {/* Section 6: Contact & Inquiries */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 font-heading">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-[#005b94] text-sm font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                Governing Law & Inquiries
              </h3>
              <p className="text-slate-600">
                These Terms are governed by and construed in accordance with the
                laws of India. Any disputes arising under these Terms shall be
                subject to the exclusive jurisdiction of the competent courts in
                India.
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 inline-block text-sm space-y-1.5 mt-2">
                <p className="font-bold text-slate-900">
                  Legal Department — Hake Technologies Private Limited
                </p>
                <p className="text-slate-600">
                  Email:{" "}
                  <a
                    href="mailto:help@haketech.com"
                    className="text-[#005b94] font-medium hover:underline"
                  >
                    help@haketech.com
                  </a>
                </p>
                <p className="text-slate-600">
                  Phone:{" "}
                  <a
                    href="tel:+917982542642"
                    className="text-[#005b94] font-medium hover:underline"
                  >
                    +91 7982542642
                  </a>
                </p>
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
              to="/privacy-policy"
              className="inline-flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
