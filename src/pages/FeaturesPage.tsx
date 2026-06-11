import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ClimateControlIcon,
  AutoFeedingIcon,
  ManureConveyorIcon,
  AIDiseaseDetectionIcon,
  CentralHubIcon
} from '../components/AnimatedIcons';
import '../components/AnimatedIcons.css';
import '../components/Features.css';

// WebP assets
import coolingFan from '../assets/cooling_fan.webp';
import ventilation from '../assets/ventilation.webp';
import feeding from '../assets/feeding.webp';
import watering from '../assets/watering.webp';
import manureSystem from '../assets/manure_conveyor_system.webp';
import coopTray from '../assets/coop_tray.webp';
import chickenFarm from '../assets/chickenfarm_khmer.webp';
import farmValidation from '../assets/Farm_Validation.webp';
import farmerTest from '../assets/Farmer_test_app.webp';
import fieldTesting from '../assets/field_testing_coop.webp';

interface FeatureItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  index: number;
  colorClass: string;
  isReversed: boolean;
  images: string[];
}

const FeatureItem = ({ icon, title, description, features, index, colorClass, isReversed, images }: FeatureItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      style={{ '--index': index } as React.CSSProperties}
      className={`feature-item ${isReversed ? 'reversed' : ''} ${colorClass}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } }
    >
      <div className="feature-visual">
        <div className="feature-image-stack">
          {/* Main image */}
          <div className="feature-img-main">
            <img src={images[0]} alt={title} loading="lazy" />
            <div className="feature-img-overlay" />
          </div>
          {/* Secondary image (peek) */}
          {images[1] && (
            <div className="feature-img-secondary">
              <img src={images[1]} alt="" loading="lazy" />
            </div>
          )}
          {/* Feature number badge */}
          <div className="feature-num-badge">{String(index + 1).padStart(2, '0')}</div>
        </div>
        {/* Icon floating */}
        <motion.div
          className={`feature-icon-float ${colorClass}`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        >
          {icon}
        </motion.div>
      </div>

      <div className="feature-details">
        <div className="feature-header">
          <span className={`feature-tag ${colorClass}`}>Feature 0{index + 1}</span>
          <h3 className="feature-name">{title}</h3>
          <div className={`feature-rule ${colorClass}`} />
        </div>
        <p className="feature-description">{description}</p>
        <ul className="feature-highlights">
          {features.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
              className="highlight-item"
            >
              <span className={`hl-dot ${colorClass}`} />
              {f}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const FeaturesPage = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      icon: <ClimateControlIcon />,
      title: t('features.feature1Title'),
      description: t('features.feature1Desc'),
      features: [t('features.feature1Item1'), t('features.feature1Item2'), t('features.feature1Item3')],
      colorClass: 'color-primary',
      images: [coolingFan, ventilation]
    },
    {
      icon: <AutoFeedingIcon />,
      title: t('features.feature2Title'),
      description: t('features.feature2Desc'),
      features: [t('features.feature2Item1'), t('features.feature2Item2'), t('features.feature2Item3')],
      colorClass: 'color-secondary',
      images: [feeding, watering]
    },
    {
      icon: <ManureConveyorIcon />,
      title: t('features.feature3Title'),
      description: t('features.feature3Desc'),
      features: [t('features.feature3Item1'), t('features.feature3Item2'), t('features.feature3Item3')],
      colorClass: 'color-accent',
      images: [manureSystem, coopTray]
    },
    {
      icon: <AIDiseaseDetectionIcon />,
      title: t('features.feature4Title'),
      description: t('features.feature4Desc'),
      features: [t('features.feature4Item1'), t('features.feature4Item2'), t('features.feature4Item3')],
      colorClass: 'color-ai',
      images: [chickenFarm, farmValidation]
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-bg-grid" aria-hidden="true">
        <img src={coolingFan} alt="" loading="lazy" />
        <img src={feeding} alt="" loading="lazy" />
        <img src={manureSystem} alt="" loading="lazy" />
        <img src={chickenFarm} alt="" loading="lazy" />
        <div className="features-bg-overlay" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
        >
          <span className="section-eyebrow">{t('features.badge')}</span>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
        </motion.div>

        {/* Zigzag feature items */}
        <div className="features-showcase">
          <div className="connecting-line" />
          {featuresData.map((feature, index) => (
            <FeatureItem
              key={index}
              {...feature}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Central Hub */}
        <motion.div
          className="central-hub"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } }
        >
          <div className="hub-glow" />
          <div className="hub-content">
            <motion.div
              className="hub-icon-wrapper"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <CentralHubIcon />
            </motion.div>
            <div className="hub-text">
              <h3>{t('features.hubTitle')}</h3>
              <p className="hub-description">{t('features.hubDesc')}</p>
              <div className="hub-tags">
                <span>Local Server</span>
                <span>Mobile App</span>
                <span>Offline Mode</span>
                <span>Real-time Data</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real-world proof section */}
        <div className="proof-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">{t('features.testimonialsBadge') || 'Field Testing'}</span>
            <h2 className="section-title">{t('features.testimonialsTitle') || 'Real Farm, Real Results'}</h2>
            <p className="section-subtitle">{t('features.testimonialsSubtitle') || 'Tested and validated on active farms across Cambodia.'}</p>
          </motion.div>

          <div className="proof-grid">
            {/* Farmer quote card */}
            <motion.div
              className="proof-quote-card glass-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
            >
              <div className="proof-img-wrap">
                <img src={farmerTest} alt="Farmer testing Tokkatot app" loading="lazy" />
                <div className="proof-live-badge">Live Testing</div>
              </div>
              <div className="proof-quote-content">
                <svg className="quote-svg" width="36" height="36" viewBox="0 0 24 24" fill="rgba(32,163,158,0.3)">
                  <path d="M14 18v-3c0-1.105.895-2 2-2h2V9h-2c-2.21 0-4 1.79-4 4v5h2zm-10 0v-3c0-1.105.895-2 2-2h2V9H6C3.79 9 2 10.79 2 13v5h2z"/>
                </svg>
                <p className="farmer-quote">"{t('features.farmer1Quote')}"</p>
                <div className="farmer-info">
                  <span className="farmer-name">{t('features.farmer1Name')}</span>
                  <span className="farmer-loc">{t('features.farmer1Location')}</span>
                </div>
              </div>
            </motion.div>

            {/* Stats + gallery */}
            <div className="proof-right">
              <div className="trust-stats">
                {[
                  { num: t('features.stat1Number'), lbl: t('features.stat1Label') },
                  { num: t('features.stat2Number'), lbl: t('features.stat2Label') },
                  { num: t('features.stat3Number'), lbl: t('features.stat3Label') },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className="trust-stat glass-effect"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                  >
                    <span className="trust-num">{s.num}</span>
                    <span className="trust-lbl">{s.lbl}</span>
                  </motion.div>
                ))}
              </div>

              <div className="proof-gallery">
                {[fieldTesting, farmValidation].map((img, i) => (
                  <motion.div
                    key={i}
                    className="gallery-thumb glass-effect"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    <img src={img} alt="Farm testing" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
