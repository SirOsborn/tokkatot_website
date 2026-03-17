import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import tokkatotLogo from '../assets/tokkatot_logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', id: 'home', label: 'nav.home' },
    { path: '/about', id: 'about', label: 'nav.about' },
    { path: '/features', id: 'features', label: 'nav.features' },
    { path: '/people', id: 'people', label: 'nav.team' },
    { path: '/achievements', id: 'awards', label: t('nav.awards') !== 'nav.awards' ? 'nav.awards' : 'Achievements' },
    { path: '/contact', id: 'contact', label: 'nav.contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string, path: string) => {
    e.preventDefault();
    closeMobileMenu();
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', path);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link 
            to="/" 
            className="logo" 
            onClick={(e) => handleNavClick(e, 'home', '/')}
          >
            <img src={tokkatotLogo} alt="Tokkatot Logo" className="logo-img" />
            <span className="logo-text">Tokkatot</span>
          </Link>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <a 
                  href={item.path}
                  className={`nav-btn ${location.pathname === item.path ? 'active' : ''}`} 
                  onClick={(e) => handleNavClick(e, item.id, item.path)}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
            <li className="lang-switcher-mobile"><LanguageSwitcher /></li>
          </ul>
          <div className="desktop-lang-switcher">
            <LanguageSwitcher />
          </div>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
