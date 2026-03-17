import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import Hero from './components/Hero';
import Awards from './components/Awards';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PeoplePage from './pages/PeoplePage';
import ContactPage from './pages/ContactPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Helper to handle hashless URL sync
const LandingPage = () => {
  const location = useLocation();
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  
  const sections = [
    { id: 'home', path: '/' },
    { id: 'about', path: '/about' },
    { id: 'features', path: '/features' },
    { id: 'people', path: '/people' },
    { id: 'awards', path: '/achievements' },
    { id: 'contact', path: '/contact' }
  ];

  // Manual navigation scroll
  useEffect(() => {
    const targetSection = sections.find(s => s.path === location.pathname);
    if (targetSection) {
      const element = document.getElementById(targetSection.id);
      if (element && !isScrollingRef.current) {
        isScrollingRef.current = true;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 800); // Reduced timeout for better responsiveness
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.3,
      rootMargin: '-20% 0px -40% 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find(s => s.id === entry.target.id);
          if (section && window.location.pathname !== section.path) {
            window.history.pushState(null, '', section.path);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <main className="landing-page">
      <section id="home"><Hero /></section>
      <section id="about"><AboutPage /></section>
      <section id="features"><FeaturesPage /></section>
      <section id="people"><PeoplePage /></section>
      <section id="awards"><Awards /></section>
      <section id="contact"><ContactPage /></section>
    </main>
  );
};

function App() {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/features" element={<LandingPage />} />
          <Route path="/people" element={<LandingPage />} />
          <Route path="/achievements" element={<LandingPage />} />
          <Route path="/contact" element={<LandingPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
