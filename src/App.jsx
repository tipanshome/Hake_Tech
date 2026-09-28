import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Import Pages
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import IndustriesPage from './pages/IndustriesPage'
import CareersPage from './pages/CareersPage'
import ContactUs from './pages/ContactUs'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'
import TeamDetails from './pages/TeamDetails'

// Import About Section Components
import AboutLayout from './pages/about/AboutLayout'
import Company from './pages/about/Company'
import Responsibility from './pages/about/Responsibility'
import Partners from './pages/about/Partners'
import Brands from './pages/about/Brands'
import LegalCompliance from './pages/about/LegalCompliance'
import Events from './pages/about/Events'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Main Independent Pages */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/ourteam" element={<TeamDetails />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* About Section with Sub-Routes */}
            <Route path="/about" element={<AboutLayout />}>
              <Route index element={<Company />} />
              <Route path="company" element={<Company />} />
              <Route path="responsibility" element={<Responsibility />} />
              <Route path="partners" element={<Partners />} />
              <Route path="brands" element={<Brands />} />
              <Route path="legal-compliance" element={<LegalCompliance />} />
              <Route path="events" element={<Events />} />
            </Route>

            {/* Standalone Short-links mapping to About sections */}
            <Route path="/company" element={<Navigate to="/about/company" replace />} />
            <Route path="/responsibility" element={<Navigate to="/about/responsibility" replace />} />
            <Route path="/partners" element={<Navigate to="/about/partners" replace />} />
            <Route path="/brands" element={<Navigate to="/about/brands" replace />} />
            <Route path="/legal-compliance" element={<Navigate to="/about/legal-compliance" replace />} />
            <Route path="/events" element={<Navigate to="/about/events" replace />} />

            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
