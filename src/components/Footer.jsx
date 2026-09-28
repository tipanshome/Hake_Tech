import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-slate-800/80">

          {/* ================= LEFT SIDE ================= */}
          <div className="lg:w-[42%] space-y-4">

            <Logo isDark={true} size="sm" showText={false} />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Pioneering Geospatial Technologies, Satellite Remote Sensing,
              WebGIS Portals, and Professional Capacity Building for global
              challenges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-[#00adef] flex items-center justify-center transition-all border border-slate-700"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-[#00adef] flex items-center justify-center transition-all border border-slate-700"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/hake-technologies-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-[#00adef] flex items-center justify-center transition-all border border-slate-700"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063-2.064-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774.792 0 1.771 0h20.451C23.2 0 24 23.227 24 22.271V1.729C24 .774.792 0 1.771 0h20.451z" />
                </svg>
              </a>

            </div>
          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:w-[52%] flex flex-wrap justify-between gap-10">

            {/* ================= PAGES ================= */}
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest font-heading">
                Pages
              </h4>

              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/industries"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Industries
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>


            {/* ================= CAPABILITIES ================= */}
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest font-heading">
                Capabilities
              </h4>

              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Analytics & Spatial BI
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Data Acquisition
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Digital Transformation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Drone Mapping
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Satellite Interpretation
                  </Link>
                </li>
              </ul>
            </div>


            {/* ================= LOCATIONS ================= */}
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest font-heading">
                Locations
              </h4>

              <ul className="space-y-2 text-sm">

                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span>Agartala, Tripura</span>
                </li>

                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span>New Delhi</span>
                </li>

                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span>Kolkata</span>
                </li>

              </ul>
            </div>


            {/* ================= CONTACT US ================= */}
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest font-heading">
                Contact Us
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-400">

                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span>Agartala, Tripura</span>
                </li>

                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-300 shrink-0" />

                  <a
                    href="mailto:help@haketech.com"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    help@haketech.com
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-300 shrink-0" />

                  <a
                    href="tel:+917982542642"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    +91 7982542642
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">

          <p>
            © {new Date().getFullYear()} Hake Technologies. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">

            <Link
              to="/privacy-policy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-slate-400 transition-colors"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="hover:text-slate-400 transition-colors"
            >
              Support
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}