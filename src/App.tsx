import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Awards from './components/Awards';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PeoplePage from './pages/PeoplePage';
import ContactPage from './pages/ContactPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// ─── Section-scroll landing page ───────────────────────────────────────────
const LandingPage = () => {
  const location = useLocation();
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const sections = [
    { id: 'home',        path: '/' },
    { id: 'about',       path: '/about' },
    { id: 'features',    path: '/features' },
    { id: 'people',      path: '/people' },
    { id: 'awards',      path: '/achievements' },
    { id: 'contact',     path: '/contact' },
  ];

  // Navigate to section on URL change
  useEffect(() => {
    const target = sections.find(s => s.path === location.pathname);
    if (target) {
      const el = document.getElementById(target.id);
      if (el && !isScrollingRef.current) {
        isScrollingRef.current = true;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 900);
      }
    }
  }, [location.pathname]);

  // Update URL when user scrolls through sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id);
            if (section && window.location.pathname !== section.path) {
              window.history.pushState(null, '', section.path);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -40% 0px' }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <main className="landing-page">
      <section id="home"><Hero /></section>
      <ValueProposition />
      <section id="features"><FeaturesPage /></section>
      <section id="about"><AboutPage /></section>
      <section id="awards"><Awards /></section>
      <section id="people"><PeoplePage /></section>
      <section id="contact"><ContactPage /></section>
    </main>
  );
};

// ─── Root App ───────────────────────────────────────────────────────────────
function App() {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <div className="app">
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/"             element={<LandingPage />} />
          <Route path="/home"         element={<LandingPage />} />
          <Route path="/about"        element={<LandingPage />} />
          <Route path="/features"     element={<LandingPage />} />
          <Route path="/people"       element={<LandingPage />} />
          <Route path="/achievements" element={<LandingPage />} />
          <Route path="/contact"      element={<LandingPage />} />
          <Route path="/terms"        element={<Terms />} />
          <Route path="/privacy"      element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
