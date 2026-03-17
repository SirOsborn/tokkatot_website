import { useTranslation } from 'react-i18next';
import '../components/About.css';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about-background"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C10 2 15 4 15 8C15 11 13 13 10 15C7 13 5 11 5 8C5 4 10 2 10 2Z" stroke="#20A39E" strokeWidth="2" fill="none"/>
            </svg>
            <span>{t('about.badge') || 'Our Mission'}</span>
          </div>
          <h2 className="section-title">{t('about.title')}</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">{t('about.heading')}</h3>
            <div className="about-paragraphs">
              <p dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
            </div>
          </div>
          
          <div className="about-split-layout">
            <div className="about-cards-section">
              <div className="cards-scroll-container">
                <div className="cards-scroll-track">
                  <div className="about-feature-card">
                    <div className="feature-card-icon">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <circle cx="28" cy="28" r="24" stroke="#20A39E" strokeWidth="2.5" fill="rgba(32, 163, 158, 0.1)"/>
                        <path d="M28 16L20 28L28 40L36 28L28 16Z" stroke="#20A39E" strokeWidth="2.5" fill="rgba(32, 163, 158, 0.2)"/>
                        <circle cx="28" cy="28" r="5" fill="#20A39E"/>
                      </svg>
                    </div>
                    <h4>{t('about.stat1Title')}</h4>
                    <p>{t('about.stat1Desc')}</p>
                  </div>
                  
                  <div className="about-feature-card">
                    <div className="feature-card-icon">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect x="12" y="12" width="32" height="32" rx="4" stroke="#FFBA49" strokeWidth="2.5" fill="rgba(255, 186, 73, 0.1)"/>
                        <circle cx="28" cy="28" r="8" fill="#FFBA49" opacity="0.3"/>
                        <path d="M24 28L27 31L32 26" stroke="#FFBA49" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4>{t('about.stat2Title')}</h4>
                    <p>{t('about.stat2Desc')}</p>
                  </div>
                  
                  <div className="about-feature-card">
                    <div className="feature-card-icon">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <path d="M28 10L18 20L18 40L38 40L38 20L28 10Z" stroke="#EF5B5B" strokeWidth="2.5" fill="rgba(239, 91, 91, 0.1)"/>
                        <rect x="22" y="28" width="12" height="12" fill="#EF5B5B" opacity="0.3" rx="2"/>
                        <path d="M28 22V28M22 28H34" stroke="#EF5B5B" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4>{t('about.stat3Title')}</h4>
                    <p>{t('about.stat3Desc')}</p>
                  </div>
                  
                  {/* Duplicate cards for seamless loop */}
                  <div className="about-feature-card">
                    <div className="feature-card-icon">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <circle cx="28" cy="28" r="24" stroke="#20A39E" strokeWidth="2.5" fill="rgba(32, 163, 158, 0.1)"/>
                        <path d="M28 16L20 28L28 40L36 28L28 16Z" stroke="#20A39E" strokeWidth="2.5" fill="rgba(32, 163, 158, 0.2)"/>
                        <circle cx="28" cy="28" r="5" fill="#20A39E"/>
                      </svg>
                    </div>
                    <h4>{t('about.stat1Title')}</h4>
                    <p>{t('about.stat1Desc')}</p>
                  </div>
                  
                  <div className="about-feature-card">
                    <div className="feature-card-icon">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect x="12" y="12" width="32" height="32" rx="4" stroke="#FFBA49" strokeWidth="2.5" fill="rgba(255, 186, 73, 0.1)"/>
                        <circle cx="28" cy="28" r="8" fill="#FFBA49" opacity="0.3"/>
                        <path d="M24 28L27 31L32 26" stroke="#FFBA49" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4>{t('about.stat2Title')}</h4>
                    <p>{t('about.stat2Desc')}</p>
                  </div>
                  
                  <div className="about-feature-card">
                    <div className="feature-card-icon">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <path d="M28 10L18 20L18 40L38 40L38 20L28 10Z" stroke="#EF5B5B" strokeWidth="2.5" fill="rgba(239, 91, 91, 0.1)"/>
                        <rect x="22" y="28" width="12" height="12" fill="#EF5B5B" opacity="0.3" rx="2"/>
                        <path d="M28 22V28M22 28H34" stroke="#EF5B5B" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4>{t('about.stat3Title')}</h4>
                    <p>{t('about.stat3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-visual-side">
              <div className="visual-card">
                <img 
                  src={new URL('../assets/Farm_validate.jpg', import.meta.url).href} 
                  alt="Tokkatot Testing" 
                  className="visual-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
