import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-column">
            <h4>{t('footer.company')}</h4>
            <div className="footer-links">
              <Link to="/">{t('nav.home')}</Link>
              <Link to="/about">{t('nav.about')}</Link>
              <Link to="/features">{t('nav.features')}</Link>
              <Link to="/people">{t('nav.team')}</Link>
              <Link to="/contact">{t('nav.contact')}</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4>{t('footer.legal')}</h4>
            <div className="footer-links">
              <Link to="/privacy">{t('footer.privacy')}</Link>
              <Link to="/terms">{t('footer.terms')}</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4>{t('footer.followUs')}</h4>
            <div className="footer-links">
              <p className="contact-email">info@tokkatot.com</p>
              <a href="https://www.facebook.com/profile.php?id=61562440490014" target="_blank" rel="noopener noreferrer" className="social-link">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
