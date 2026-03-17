import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Awards.css';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

// Import award images
import uniicImg from '../assets/UNIIC_Demo_Day_Best_pitching.jpg';
import emergingImg from '../assets/EmergingInnovatiorAward.jpg';
import unipreneurImg from '../assets/Unipreneur_Camp_Cluster_one_first_prize.jpg';
import actSmartImg from '../assets/ActSmart_Incubation_program.jpg';
import sprintImg from '../assets/Unipreneur_Sprint_Top8_for_award_night.jpg';

const Awards = () => {
  const { t } = useTranslation();
  const scrollProps = useInfiniteScroll(0.6);

  const awards = [
    {
      id: 'award1',
      title: t('awards.award1.title'),
      desc: t('awards.award1.desc'),
      date: t('awards.award1.date'),
      image: uniicImg
    },
    {
      id: 'award2',
      title: t('awards.award2.title'),
      desc: t('awards.award2.desc'),
      date: t('awards.award2.date'),
      image: emergingImg
    },
    {
      id: 'award3',
      title: t('awards.award3.title'),
      desc: t('awards.award3.desc'),
      date: t('awards.award3.date'),
      image: unipreneurImg
    },
    {
      id: 'award4',
      title: t('awards.award4.title'),
      desc: t('awards.award4.desc'),
      date: t('awards.award4.date'),
      image: actSmartImg
    },
    {
      id: 'award5',
      title: t('awards.award5.title'),
      desc: t('awards.award5.desc'),
      date: t('awards.award5.date'),
      image: sprintImg
    }
  ];

  return (
    <section id="awards" className="awards-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">{t('awards.title')}</span>
          <h2>Excellence Recognized</h2>
          <p className="section-subtitle">Our journey of innovation and recognized success in the agricultural sector</p>
        </div>
        <div 
          className="awards-rolling-container active-drag" 
          {...scrollProps}
          ref={scrollProps.containerRef}
        >
          <div className="awards-rolling-track">
            {/* Triple set for infinite effect */}
            {[...awards, ...awards, ...awards].map((award, index) => (
              <motion.div 
                key={`${award.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % awards.length) * 0.1 }}
                className="award-card"
              >
                <div className="award-image-container">
                  <img src={award.image} alt={award.title} className="award-image" />
                  <div className="award-overlay">
                    <div className="award-icon-mini">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="award-content">
                  <span className="award-date">{award.date}</span>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-desc">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
