import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Logo({ isDark = false, className = "", size = "default", showText=true }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      navigate('/');
    }
  };

  // here you can edite the size of logo and text and then just use the funtion sm to the code of navbar and footer

  const sizes = {
    default: { img: 'h-9 sm:h-10', text: 'text-xl sm:text-2xl' },
    sm: { img: 'h-7 sm:h-8', text: 'text-lg sm:text-xl' },
  };
  const { img, text } = sizes[size] || sizes.default;

  return (
    <Link 
      to="/" 
      onClick={handleLogoClick}
      className={`flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.02] cursor-pointer select-none ${className}`}
      aria-label="Hake Home"
    >
      {/* Brand Logo Icon */}
      <img
        src="/assets/hake_logo.png"
        alt="Hake Logo"
        className={`${img} w-auto object-contain transition-transform duration-300 group-hover:rotate-3`}
      />

      {showText && (
        <span className={`${text} font-extrabold tracking-tight font-heading transition-colors duration-200 ${
          isDark ? 'text-white' : 'text-[#0c2340]'
        }`}>
          Hake Technologies
        </span>
      )}
    </Link>
  );
}