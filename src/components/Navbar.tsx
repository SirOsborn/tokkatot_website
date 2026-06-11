import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import tokkatotLogo from '../assets/tokkatot_logo.webp';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { path: '/', id: 'home', label: 'nav.home' },
    { path: '/about', id: 'about', label: 'nav.about' },
    { path: '/features', id: 'features', label: 'nav.features' },
    { path: '/people', id: 'people', label: 'nav.team' },
    { path: '/achievements', id: 'awards', label: 'nav.awards' },
    { path: '/contact', id: 'contact', label: 'nav.contact' },
  ];

  // Track active section by scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        path: item.path,
        el: document.getElementById(item.id)
      }));
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', path);
      setActiveSection(id);
    }
  };

  const menuVariants: any = {
    closed: { opacity: 0, x: '100%' },
    open: {
      opacity: 1, x: 0,
      transition: { type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] as any }
    },
    exit: {
      opacity: 0, x: '100%',
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const menuItemVariants: any = {
    closed: { opacity: 0, x: 30 },
    open: (i: number) => ({
      opacity: 1, x: 0,
      transition: { delay: i * 0.06 + 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] as any }
    })
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <Link
            to="/"
            className="logo"
            onClick={(e) => handleNavClick(e, 'home', '/')}
          >
            <img src={tokkatotLogo} alt="Tokkatot - តុក្កតត Logo" className="logo-img" />
            <span className="logo-text">Tokkatot <span className="logo-khmer">- តុក្កតត</span></span>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id, item.path)}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right: Lang + CTA */}
          <div className="nav-right">
            <LanguageSwitcher />
            <a
              href="/contact"
              className="nav-cta"
              onClick={(e) => handleNavClick(e, 'contact', '/contact')}
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="exit"
            >
              <div className="mobile-menu-logo">
                <img src={tokkatotLogo} alt="Tokkatot - តុក្កតត" className="logo-img" />
                <span>Tokkatot <span className="logo-khmer">- តុក្កតត</span></span>
              </div>

              <ul className="mobile-nav-list">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.path}
                    custom={i}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a
                      href={item.path}
                      className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.id, item.path)}
                    >
                      {t(item.label)}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu-footer">
                <LanguageSwitcher />
                <a
                  href="/contact"
                  className="mobile-cta"
                  onClick={(e) => handleNavClick(e, 'contact', '/contact')}
                >
                  {t('contact.sendBtn') || 'Get in Touch'}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
