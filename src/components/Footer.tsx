import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tokkatotLogo from '../assets/tokkatot_logo.webp';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const handleNavClick = (e: React.MouseEvent, id: string, path: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', path);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="footer-glow" />

      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" onClick={(e) => handleNavClick(e, 'home', '/')}>
              <img src={tokkatotLogo} alt="Tokkatot - តុក្កតត" />
              <span>Tokkatot <span className="logo-khmer">- តុក្កតត</span></span>
            </Link>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61562440490014"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Tokkatot - តុក្កតត on Facebook"
                title="Tokkatot - តុក្កតត on Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/tokkatot"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Tokkatot - តុក្កតត on LinkedIn"
                title="Tokkatot - តុក្កតត on LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
            <div className="footer-made-badge">
              <span>Made in Cambodia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>{t('footer.company')}</h4>
            <nav className="footer-links">
              <a href="/" onClick={(e) => handleNavClick(e, 'home', '/')}>{t('nav.home')}</a>
              <a href="/about" onClick={(e) => handleNavClick(e, 'about', '/about')}>{t('nav.about')}</a>
              <a href="/features" onClick={(e) => handleNavClick(e, 'features', '/features')}>{t('nav.features')}</a>
              <a href="/people" onClick={(e) => handleNavClick(e, 'people', '/people')}>{t('nav.team')}</a>
              <a href="/achievements" onClick={(e) => handleNavClick(e, 'awards', '/achievements')}>{t('nav.awards')}</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <a href="mailto:info@tokkatot.com" className="footer-contact-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@tokkatot.com
              </a>
              <a href="tel:+85561747269" className="footer-contact-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 14 19.79 19.79 0 0 1 1.04 5.38 2 2 0 0 1 3 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +855 61 747 269
              </a>
              <span className="footer-contact-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Phnom Penh, Cambodia
              </span>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h4>{t('footer.legal')}</h4>
            <nav className="footer-links">
              <Link to="/privacy">{t('footer.privacy')}</Link>
              <Link to="/terms">{t('footer.terms')}</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p className="footer-tagline-sm">Tokkatot - តុក្កតត · Smart Poultry Farming</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
