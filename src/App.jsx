import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import IndustriesPage from './pages/IndustriesPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage';


// Helper to reset scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services/:pillarId" element={<ServiceDetailPage />} />
      </Routes>
    </>
  )
}

export default App