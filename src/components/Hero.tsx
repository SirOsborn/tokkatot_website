import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import heroBg from '../assets/farmer_with_chicken_background_image.webp';
import heroMainImg from '../assets/revolunized_chicken_farm.webp';

const floatVariants: any = {
  animate: (delay: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 4 + delay,
      ease: 'easeInOut',
      repeat: Infinity,
      delay: delay * 0.5,
    }
  })
};

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);

  const handleNavClick = (e: React.MouseEvent, id: string, path: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', path);
    }
  };

  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero-bg">
        <img
          src={heroBg}
          alt=""
          className="hero-bg-img"
          fetchPriority="high"
          loading="eager"
        />
        <div className="hero-bg-overlay" />
        {/* Ambient glow orbs */}
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
      </div>

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Content */}
      <div className="container">
        <div className="hero-layout">

          {/* Left: Text */}
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-eyebrow-wrap">
              <span className="hero-eyebrow">
                <span className="eyebrow-dot" />
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              {t('hero.title')}{' '}
              <span className="hero-gradient-word">{t('hero.highlight')}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              {t('hero.subtitle')}
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions">
              <a
                href="/features"
                className="btn btn-primary hero-btn-main"
                onClick={(e) => handleNavClick(e, 'features', '/features')}
              >
                {t('hero.exploreBtn')}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="btn btn-secondary"
                onClick={(e) => handleNavClick(e, 'contact', '/contact')}
              >
                {t('hero.contactBtn')}
              </a>
            </motion.div>

            {/* Quick feature pills */}
            <motion.div variants={itemVariants} className="hero-pills">
              <div className="hero-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary-teal)" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                {t('hero.feature1')}
              </div>
              <div className="hero-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--secondary-amber)" stroke="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                {t('hero.feature2')}
              </div>
              <div className="hero-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-coral)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                {t('hero.feature3')}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Floating visual */}
          <div className="hero-visual">
            {/* Main Visual */}
            <motion.div
              className="hero-main-visual-wrap"
              custom={0}
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as any } }
            >
              <div className="hero-main-image">
                <img src={heroMainImg} alt="Smart Chicken Farming" className="hero-visual-img" />
                <div className="hero-visual-shine" />
              </div>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              className="float-card float-card-1"
              custom={1}
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="float-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-teal-light)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
              </div>
              <div>
                <div className="float-value">98.2%</div>
                <div className="float-label">Climate Accuracy</div>
              </div>
            </motion.div>



            <motion.div
              className="float-card float-card-3"
              custom={0.5}
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="float-live" />
              <div className="float-label">Live Monitoring</div>
              <div className="float-value-sm">24/7 Active</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
