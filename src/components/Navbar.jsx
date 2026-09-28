import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X as CloseIcon, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
    setIsMobileAboutExpanded(false);
  }, [location.pathname]);

  // Click outside listener for mega dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 180);
  };

  const isAboutActive = location.pathname.startsWith("/about");
  const isCareersActive =
    location.pathname === "/careers" ||
    location.pathname.startsWith("/careers");
  const isContactActive =
    location.pathname === "/contact" ||
    location.pathname.startsWith("/contact");

  const aboutOptionsCol1 = [
    { name: "Company", path: "/about/company" },
    { name: "Events", path: "/about/events" },
    { name: "Responsibility", path: "/about/responsibility" },
  ];

  const aboutOptionsCol2 = [
    { name: "Partners", path: "/about/partners" },
    { name: "Brands", path: "/about/brands" },
    { name: "Legal & Compliance", path: "/about/legal-compliance" },
  ];

  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "shadow-sm shadow-slate-900/5 border-b border-slate-200/80 py-3.5"
          : "border-b border-slate-100 py-4 sm:py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-6 lg:space-x-8">
              {mainNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm font-semibold transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 
                      ${
                        isActive
                          ? "text-[#005b94] font-bold after:w-full"
                          : "text-slate-600 hover:text-[#005b94] after:w-0 hover:after:w-full"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* About Dropdown Trigger */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className={`relative inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 focus:outline-none after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 
                    ${
                      isAboutActive || isAboutOpen
                        ? "text-[#005b94] font-bold after:w-full"
                        : "text-slate-600 hover:text-[#005b94] after:w-0 hover:after:w-full"
                    }`}
                  aria-expanded={isAboutOpen}
                  aria-haspopup="true"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isAboutOpen
                        ? "rotate-180 text-[#005b94]"
                        : "text-slate-500"
                    }`}
                  />
                </button>

                {/* About Mega Dropdown Menu */}
                {isAboutOpen && (
                  <div
                    className="fixed left-0 right-0 top-[65px] sm:top-[73px] w-full bg-white shadow-xl border-b border-t border-slate-200/90 z-50 animate-dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-7 pb-8">
                      {/* Main Section Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Options Columns */}
                        <div className="lg:col-span-8 space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="w-1 h-4 bg-blue-500 rounded-full inline-block"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
                              About Hake Technologies
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-1">
                            {/* Column 1 */}
                            <div className="space-y-3.5">
                              {aboutOptionsCol1.map((item) => {
                                const isItemActive =
                                  location.pathname === item.path;
                                return (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsAboutOpen(false)}
                                    className="group flex items-center text-sm font-medium text-slate-700 hover:text-[#005b94] transition-colors"
                                  >
                                    <span
                                      className={`relative inline-block group-hover:translate-x-1 transition-transform font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 ${
                                        isItemActive
                                          ? "text-[#005b94] after:w-full"
                                          : "text-slate-800 group-hover:text-[#005b94] after:w-0 group-hover:after:w-full"
                                      }`}
                                    >
                                      {item.name}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-3.5">
                              {aboutOptionsCol2.map((item) => {
                                const isItemActive =
                                  location.pathname === item.path;
                                return (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsAboutOpen(false)}
                                    className="group flex items-center text-sm font-medium text-slate-700 hover:text-[#005b94] transition-colors"
                                  >
                                    <span
                                      className={`relative inline-block group-hover:translate-x-1 transition-transform font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 ${
                                        isItemActive
                                          ? "text-[#005b94] after:w-full"
                                          : "text-slate-800 group-hover:text-[#005b94] after:w-0 group-hover:after:w-full"
                                      }`}
                                    >
                                      {item.name}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Right Spotlight Column */}
                        <div className="lg:col-span-4 lg:border-l lg:border-slate-200/90 lg:pl-10 flex flex-col justify-start">
                          <div className="border-l-2 border-slate-900 pl-4 py-1">
                            <h4 className="text-sm font-bold text-slate-950 mb-1 font-heading">
                              Global Spatial Innovation
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              Learn about our work with governments, businesses,
                              and organizations worldwide in satellite remote
                              sensing and spatial intelligence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Careers Nav Link (same text style as other links) */}
              <Link
                to="/careers"
                className={`relative text-sm font-semibold transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 
                  ${
                    isCareersActive
                      ? "text-[#005b94] font-bold after:w-full"
                      : "text-slate-600 hover:text-[#005b94] after:w-0 hover:after:w-full"
                  }`}
              >
                Careers
              </Link>

              {/* Contact Nav Link (same text style as other links) */}
              <Link
                to="/contact"
                className={`relative text-sm font-semibold transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 
                  ${
                    isContactActive
                      ? "text-[#005b94] font-bold after:w-full"
                      : "text-slate-600 hover:text-[#005b94] after:w-0 hover:after:w-full"
                  }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-xl animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
    <nav className="flex flex-col space-y-3">
      {mainNavLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link key={link.name} to={link.path} className="block py-1">
            <span
              className={`relative inline-block text-sm font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 ${
                isActive
                  ? "text-[#005b94] font-bold after:w-full"
                  : "text-slate-700 after:w-0"
              }`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}

      {/* Mobile About Accordion */}
      <div className="py-2">
        <button
          type="button"
          onClick={() => setIsMobileAboutExpanded(!isMobileAboutExpanded)}
          className="w-full flex items-center justify-between py-1"
        >
          <span
            className={`relative inline-block text-sm font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 ${
              isAboutActive
                ? "text-[#005b94] font-bold after:w-full"
                : "text-slate-700 after:w-0"
            }`}
          >
            About Us
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isMobileAboutExpanded
                ? "rotate-180 text-[#005b94]"
                : "text-slate-400"
            }`}
          />
        </button>

        {isMobileAboutExpanded && (
          <div className="pl-3 pr-1 py-2 space-y-2.5 mt-1 border-l-2 border-slate-200">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              About HAKE Technologies
            </div>
            {[...aboutOptionsCol1, ...aboutOptionsCol2].map((item) => {
              const isItemActive = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path} className="block py-1">
                  <span
                    className={`relative inline-block text-xs font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 ${
                      isItemActive
                        ? "text-[#005b94] after:w-full"
                        : "text-slate-600 after:w-0"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Mobile Contact Link */}
      <Link to="/contact" className="block py-1">
        <span
          className={`relative inline-block text-sm font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 ${
            isContactActive
              ? "text-[#005b94] font-bold after:w-full"
              : "text-slate-700 after:w-0"
          }`}
        >
          Contact
        </span>
      </Link>

      {/* Mobile Careers Link */}
      <Link to="/careers" className="block py-1">
        <span
          className={`relative inline-block text-sm font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#005b94] after:transition-all after:duration-300 ${
            isCareersActive
              ? "text-[#005b94] font-bold after:w-full"
              : "text-slate-700 after:w-0"
          }`}
        >
          Careers
        </span>
      </Link>
    </nav>
  </div>
      )}
    </header>
  );
}
