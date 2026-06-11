import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Awards.css';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

// All award images — WebP
import uniicImg from '../assets/UNIIC_Demo_Day_Best_pitching.webp';
import emergingImg from '../assets/EmergingInnovatiorAward.webp';
import unipreneurImg from '../assets/Unipreneur_Camp_Cluster_one_first_prize.webp';
import actSmartImg from '../assets/ActSmart_Incubation_program.webp';
import egenImg from '../assets/E-gen.webp';
import networkingImg from '../assets/ActSmart_NetworkingNight.webp';
import groupImg from '../assets/actsmart_winner_group_photo.webp';

const TrophyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const Awards = () => {
  const { t } = useTranslation();
  // Ultra slow speed (0.2px/frame) — pauses on hover so users can read
  const scrollProps = useInfiniteScroll(0.2, true);

  const awards = [
    { id: 'a1', title: t('awards.award1.title'), desc: t('awards.award1.desc'), date: t('awards.award1.date'), image: egenImg, color: 'teal' },
    { id: 'a2', title: t('awards.award2.title'), desc: t('awards.award2.desc'), date: t('awards.award2.date'), image: unipreneurImg, color: 'amber' },
    { id: 'a3', title: t('awards.award3.title'), desc: t('awards.award3.desc'), date: t('awards.award3.date'), image: emergingImg, color: 'teal' },
    { id: 'a4', title: t('awards.award4.title'), desc: t('awards.award4.desc'), date: t('awards.award4.date'), image: uniicImg, color: 'amber' },
    { id: 'a5', title: t('awards.award5.title'), desc: t('awards.award5.desc'), date: t('awards.award5.date'), image: actSmartImg, color: 'teal' },
    { id: 'a6', title: 'ActSmart Networking Night', desc: 'Represented Tokkatot - តុក្កតត at the premier startup networking event in Cambodia', date: '2024', image: networkingImg, color: 'amber' },
    { id: 'a7', title: 'ActSmart Program — Winner Group', desc: 'Completed the prestigious incubation program and recognized as a top team representing Tokkatot - តុក្កតត', date: '2024', image: groupImg, color: 'teal' },
  ];

  return (
    <section id="awards" className="awards-section">
      <div className="awards-bg-pattern" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">{t('awards.title') || 'Recognition'}</span>
          <h2 className="section-title">Excellence <span className="gradient-text-amber">Recognized</span></h2>
          <p className="section-subtitle">Our journey of innovation and recognized success in the agricultural technology sector across Cambodia.</p>
        </motion.div>

        {/* Scrolling carousel — pauses on hover, drag to explore */}
        <div
          className="awards-rolling-container"
          ref={scrollProps.containerRef}
          onMouseDown={scrollProps.onMouseDown}
          onMouseUp={scrollProps.onMouseUp}
          onMouseMove={scrollProps.onMouseMove}
          onMouseEnter={scrollProps.onMouseEnter}
          onMouseLeave={scrollProps.onMouseLeave}
          onTouchStart={scrollProps.onTouchStart}
          onTouchMove={scrollProps.onTouchMove}
          onTouchEnd={scrollProps.onTouchEnd}
        >
          <div className="awards-rolling-track">
            {[...awards, ...awards, ...awards].map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className={`award-card award-card-${award.color}`}
              >
                <div className="award-image-container">
                  <img src={award.image} alt={award.title} className="award-image" loading="lazy" />
                  <div className="award-img-overlay">
                    <div className={`award-icon-badge award-badge-${award.color}`}>
                      <TrophyIcon />
                    </div>
                  </div>
                </div>
                <div className="award-content">
                  <span className="award-date">{award.date}</span>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-desc">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.p
          className="carousel-hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hover to pause · Drag to explore
        </motion.p>

        {/* Award count bar */}
        <motion.div
          className="awards-count-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aw-count-item">
            <span className="aw-count-num">7+</span>
            <span className="aw-count-lbl">Competitions Entered</span>
          </div>
          <div className="aw-divider" />
          <div className="aw-count-item">
            <span className="aw-count-num">5+</span>
            <span className="aw-count-lbl">Awards Won</span>
          </div>
          <div className="aw-divider" />
          <div className="aw-count-item">
            <span className="aw-count-num">1</span>
            <span className="aw-count-lbl">Incubation Program</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
