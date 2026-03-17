import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/our_testing.JPG'; // Using one of the provided tech assets

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, id: string, path: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', path);
    } else {
      navigate(path);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-layout">
          <div className="hero-text-content">
            <div className="hero-badge-wrapper">
              <span className="hero-badge">{t('hero.badge')}</span>
            </div>
            
            <h1 className="hero-title">
              {t('hero.title')} <span className="gradient-text">{t('hero.highlight')}</span>
            </h1>
            
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            
            <div className="hero-actions">
              <Link 
                to="/features"
                className="btn-primary" 
                onClick={(e) => handleNavClick(e, 'features', '/features')}
              >
                {t('hero.exploreBtn')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/contact"
                className="btn-secondary" 
                onClick={(e) => handleNavClick(e, 'contact', '/contact')}
              >
                {t('hero.contactBtn')}
              </Link>
            </div>

            <div className="hero-stats-row">
              <div className="stat-pill">
                <span className="pill-dot"></span>
                {t('hero.feature1')}
              </div>
              <div className="stat-pill">
                <span className="pill-dot"></span>
                {t('hero.feature2')}
              </div>
              <div className="stat-pill">
                <span className="pill-dot"></span>
                {t('hero.feature3')}
              </div>
            </div>
          </div>

          <div className="hero-visual-content">
            <div className="hero-image-container">
              <img src={heroImage} alt="Agri-Tech Ventilation System" className="hero-main-image" />
              <div className="hero-glass-overlay">
                <div className="overlay-stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Monitoring</span>
                </div>
                <div className="overlay-stat">
                  <span className="stat-number">AI</span>
                  <span className="stat-label">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
