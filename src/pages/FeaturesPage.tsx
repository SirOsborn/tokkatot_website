import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ClimateControlIcon,
  AutoFeedingIcon,
  ManureConveyorIcon,
  AIDiseaseDetectionIcon,
  CentralHubIcon
} from '../components/AnimatedIcons';
import coolingFan from '../assets/cooling_fan.jpg';
import feeding from '../assets/feeding.jpg';
import manureSystem from '../assets/manure_conveyor_system.jpg';
import chickenFarm from '../assets/chickenfarm_khmer.jpg';
import farmValidation from '../assets/Real_farm_Testing_and_Validation.jpg';
import sensorTesting from '../assets/Farm_Validation.jpg';
import farmerTest from '../assets/Farmer_test_app.jpg';

import '../components/AnimatedIcons.css';
import '../components/Features.css';

interface FeatureItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  index: number;
  colorClass: string;
  isReversed: boolean;
  image: string;
}

const FeatureItem = ({ icon, title, description, features, index, colorClass, isReversed, image }: FeatureItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef} 
      className={`feature-item ${isReversed ? 'reversed' : ''} ${colorClass}`}
    >
      <div className="feature-visual">
        <div className="feature-image-container-outer">
          <div className="feature-image-wrapper">
            <img src={image} alt={title} className="feature-main-image" />
          </div>
          <div className="feature-icon-large">
            {icon}
            <div className="feature-number">0{index + 1}</div>
          </div>
        </div>
      </div>
      
      <div className="feature-details">
        <div className="feature-header">
          <h3>{title}</h3>
          <div className={`feature-line ${colorClass}`}></div>
        </div>
        <p className="feature-description">{description}</p>
        <div className="feature-highlights">
          {features.map((feature, idx) => (
            <div key={idx} className="highlight-item">
              <div className={`highlight-dot ${colorClass}`}></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
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
      image: coolingFan
    },
    {
      icon: <AutoFeedingIcon />,
      title: t('features.feature2Title'),
      description: t('features.feature2Desc'),
      features: [t('features.feature2Item1'), t('features.feature2Item2'), t('features.feature2Item3')],
      colorClass: 'color-secondary',
      image: feeding
    },
    {
      icon: <ManureConveyorIcon />,
      title: t('features.feature3Title'),
      description: t('features.feature3Desc'),
      features: [t('features.feature3Item1'), t('features.feature3Item2'), t('features.feature3Item3')],
      colorClass: 'color-accent',
      image: manureSystem
    },
    {
      icon: <AIDiseaseDetectionIcon />,
      title: t('features.feature4Title'),
      description: t('features.feature4Desc'),
      features: [t('features.feature4Item1'), t('features.feature4Item2'), t('features.feature4Item3')],
      colorClass: 'color-ai',
      image: chickenFarm
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-background">
        <img src={coolingFan} alt="" className="feature-bg-image" />
        <img src={feeding} alt="" className="feature-bg-image" />
        <img src={manureSystem} alt="" className="feature-bg-image" />
        <img src={chickenFarm} alt="" className="feature-bg-image" />
      </div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('features.badge')}</span>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="features-showcase">
          <div className="connecting-line"></div>
          {featuresData.map((feature, index) => (
            <FeatureItem 
              key={index} 
              {...feature} 
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="central-hub">
          <div className="hub-content">
            <div className="hub-icon-wrapper">
              <CentralHubIcon />
            </div>
            <div className="hub-text">
              <h3>{t('features.hubTitle')}</h3>
              <p className="hub-description">{t('features.hubDesc')}</p>
            </div>
          </div>
        </div>

        {/* Farmer Testimonials & Support Section */}
        <div className="farmer-support-section" id="testing">
          <div className="section-header">
            <span className="section-badge">{t('features.testimonialsBadge')}</span>
            <h2 className="section-title">{t('features.testimonialsTitle')}</h2>
            <p className="section-subtitle">{t('features.testimonialsSubtitle')}</p>
          </div>

          <div className="farmer-showcase-grid">
            <div className="farmer-card-wide glass-effect">
              <div className="farmer-image-side">
                <img src={farmerTest} alt="Farmer testing Tokkatot" />
                <div className="farmer-badge">Live Testing</div>
              </div>
              <div className="farmer-content-side">
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--primary-teal)" opacity="0.4">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V21H5.017Z" />
                  </svg>
                </div>
                <p className="farmer-quote">"{t('features.farmer1Quote')}"</p>
                <div className="farmer-info">
                  <span className="farmer-name">{t('features.farmer1Name')}</span>
                  <span className="farmer-location">{t('features.farmer1Location')}</span>
                </div>
              </div>
            </div>

            <div className="trust-stats-row">
              <div className="trust-stat-box glass-effect">
                <span className="trust-number">{t('features.stat1Number')}</span>
                <span className="trust-label">{t('features.stat1Label')}</span>
              </div>
              <div className="trust-stat-box glass-effect">
                <span className="trust-number">{t('features.stat2Number')}</span>
                <span className="trust-label">{t('features.stat2Label')}</span>
              </div>
              <div className="trust-stat-box glass-effect">
                <span className="trust-number">{t('features.stat3Number')}</span>
                <span className="trust-label">{t('features.stat3Label')}</span>
              </div>
            </div>

            <div className="farmer-gallery">
              <div className="gallery-item glass-effect">
                <img src={farmValidation} alt="Farm Validation" />
                <div className="gallery-caption">Field Sensors Check</div>
              </div>
              <div className="gallery-item glass-effect">
                <img src={sensorTesting} alt="Sensor Testing" />
                <div className="gallery-caption">Coop Integration</div>
              </div>
              <div className="gallery-item glass-effect">
                <img src={chickenFarm} alt="Chicken Farm Work" />
                <div className="gallery-caption">Daily Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default FeaturesPage;
