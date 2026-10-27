import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy-loaded Pages
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const JobDetailPage = lazy(() => import('./pages/JobDetailPage'))
const JobApplicationPage = lazy(() => import('./pages/JobApplicationPage'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'))
const TeamDetails = lazy(() => import('./pages/TeamDetails'))

// Lazy-loaded About Section Components
const AboutLayout = lazy(() => import('./pages/about/AboutLayout'))
const Company = lazy(() => import('./pages/about/Company'))
const Responsibility = lazy(() => import('./pages/about/Responsibility'))
const Partners = lazy(() => import('./pages/about/Partners'))
const Brands = lazy(() => import('./pages/about/Brands'))
const LegalCompliance = lazy(() => import('./pages/about/LegalCompliance'))
const Blogs = lazy(() => import('./pages/about/Blogs'))

function AppContent() {
  const location = useLocation()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#005b94] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
        <Navbar key={location.pathname} />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />

              {/* Main Independent Pages */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/careers/:id" element={<JobDetailPage />} />
              <Route path="/careers/:id/apply" element={<JobApplicationPage />} />
              <Route path="/careers/apply/:id" element={<JobApplicationPage />} />
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
                <Route path="blogs" element={<Blogs />} />
                <Route path="events" element={<Navigate to="/about/blogs" replace />} />
              </Route>

              {/* Standalone Short-links mapping to About sections */}
              <Route path="/company" element={<Navigate to="/about/company" replace />} />
              <Route path="/responsibility" element={<Navigate to="/about/responsibility" replace />} />
              <Route path="/partners" element={<Navigate to="/about/partners" replace />} />
              <Route path="/brands" element={<Navigate to="/about/brands" replace />} />
              <Route path="/legal-compliance" element={<Navigate to="/about/legal-compliance" replace />} />
              <Route path="/blogs" element={<Navigate to="/about/blogs" replace />} />
              <Route path="/events" element={<Navigate to="/about/blogs" replace />} />

              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/terms" element={<TermsAndConditionsPage />} />

              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
