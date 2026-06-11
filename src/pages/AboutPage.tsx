import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../components/About.css';
import farmValidate from '../assets/Farm_validate.webp';
import realFarm from '../assets/Real_farm_Testing_and_Validation.webp';
import ourTesting from '../assets/our_testing.webp';
import revolunized from '../assets/revolunized_chicken_farm.webp';

const milestones = [
  { year: '2023', title: 'Founded', desc: 'Born as a student project at university with a mission to solve real Cambodian farming problems.' },
  { year: '2024', title: 'First Prototype', desc: 'Built and deployed our first climate control + auto-feeding prototype on a real chicken farm.' },
  { year: '2024', title: 'Field Validation', desc: 'Validated across multiple farm environments. Received first award at UNIIC Demo Day.' },
  { year: '2025', title: '5+ Awards', desc: 'Won major competitions including Emerging Innovator Award, Unipreneur Camp 1st Prize, and ActSmart Incubation.' },
];

const AboutPage = () => {
  const { t } = useTranslation();

  const itemVariants: any = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    })
  };

  return (
    <div className="about" id="about-page">
      <div className="about-bg">
        <img src={revolunized} alt="" className="about-bg-img" loading="lazy" />
        <div className="about-bg-overlay" />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
        >
          <span className="section-eyebrow">{t('about.badge') || 'Our Story'}</span>
          <h2 className="section-title">{t('about.title')}</h2>
        </motion.div>

        {/* Split: Text + Mission image */}
        <div className="about-split">
          <motion.div
            className="about-text-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } }
          >
            <h3 className="about-mission-heading">{t('about.heading')}</h3>
            <div className="about-paragraphs">
              <p dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
            </div>

            {/* Stat cards */}
            <div className="about-stat-cards">
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: t('about.stat1Title'), desc: t('about.stat1Desc'), color: 'teal' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg>, title: t('about.stat2Title'), desc: t('about.stat2Desc'), color: 'amber' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, title: t('about.stat3Title'), desc: t('about.stat3Desc'), color: 'coral' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className={`about-stat-card stat-${stat.color}`}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="stat-card-icon">{stat.icon}</span>
                  <div>
                    <h4>{stat.title}</h4>
                    <p>{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } }
          >
            {/* Photo collage */}
            <div className="about-photo-collage">
              <div className="collage-main">
                <img src={farmValidate} alt="Farm validation" loading="lazy" />
              </div>
              <div className="collage-secondary">
                <img src={ourTesting} alt="Our testing" loading="lazy" />
                <img src={realFarm} alt="Real farm testing" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestones timeline */}
        <motion.div
          className="milestones"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="milestones-heading">Our Journey</h3>
          <div className="milestones-track">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="milestone-item"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="milestone-year">{m.year}</div>
                <div className="milestone-dot" />
                <div className="milestone-content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
