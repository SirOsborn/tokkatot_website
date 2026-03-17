import Hero from '../components/Hero';
import Awards from '../components/Awards';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <Hero />
      
      {/* Awards Section integration */}
      <Awards />

      {/* Featured Sections Previews */}
      <section className="section-preview" style={{ padding: '6rem 0', background: 'var(--bg-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t('about.title')}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
            {t('about.heading')}
          </p>
          <Link to="/about" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            {t('about.badge') || 'Learn More'}
          </Link>
        </div>
      </section>

      <section className="section-preview" style={{ padding: '6rem 0', background: 'rgba(32, 163, 158, 0.02)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t('features.title')}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
            {t('features.subtitle')}
          </p>
          <Link to="/features" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            {t('hero.exploreBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
