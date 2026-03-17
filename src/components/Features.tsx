import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ClimateControlIcon,
  AutoFeedingIcon,
  ManureConveyorIcon,
  AIDiseaseDetectionIcon,
  CentralHubIcon
} from './AnimatedIcons';
import coolingFan from '../assets/cooling_fan.jpg';
import heater from '../assets/heater.jpg';
import feeding from '../assets/feeding.jpg';
import manureSystem from '../assets/manure_conveyor_system.jpg';
import './AnimatedIcons.css';
import './Features.css';

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
      { threshold: 0.2 }
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
        <div className="feature-image-wrapper">
          <img src={image} alt={title} className="feature-main-image" />
          <div className="feature-icon-overlay">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="feature-details">
        <div className="feature-header">
          <span className="feature-number">0{index + 1}</span>
          <h3>{title}</h3>
        </div>
        <p className="feature-description">{description}</p>
        <div className="feature-highlights">
          {features.map((feature, idx) => (
            <div key={idx} className="highlight-item">
              <span className="check-icon">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
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
      image: heater // Using heater for disease detection visual as a placeholder or replace with better if available
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <span className="badge">{t('features.badge')}</span>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="features-list">
          {featuresData.map((feature, index) => (
            <FeatureItem 
              key={index} 
              {...feature} 
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="central-hub-card">
          <div className="hub-image-side">
            <div className="hub-visual">
              <CentralHubIcon />
              <div className="hub-rings">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
              </div>
            </div>
          </div>
          <div className="hub-text-side">
            <h3>{t('features.hubTitle')}</h3>
            <p>{t('features.hubDesc')}</p>
            <div className="hub-tags">
              <span className="tag">{t('features.hubTag1')}</span>
              <span className="tag">{t('features.hubTag2')}</span>
              <span className="tag">{t('features.hubTag3')}</span>
              <span className="tag">{t('features.hubTag4')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
