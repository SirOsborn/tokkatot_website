import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../components/Team.css';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

// WebP portraits
import yungSreyneangImg from '../assets/yung_sreyneang.webp';
import sopheaDarikaImg from '../assets/sophea_darika.webp';
import virakRangseyImg from '../assets/virak_rangsey.webp';
import sunHengImg from '../assets/sun_heng.webp';
import kaemSreyneathImg from '../assets/kaem_sreyneath.webp';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  color: string;
}

const PeoplePage = () => {
  const { t } = useTranslation();
  const scrollProps = useInfiniteScroll(0.2, true);

  const teamMembers: TeamMember[] = [
    {
      name: 'Yung Sreyneang',
      role: 'Co-Founder & CEO',
      bio: t('team.member1Bio'),
      image: yungSreyneangImg,
      email: 'sreyneangyung.tokkatot@gmail.com',
      color: 'teal'
    },
    {
      name: 'Virak Rangsey',
      role: 'Co-Founder & Business Lead',
      bio: t('team.member2Bio'),
      image: virakRangseyImg,
      email: 'virakrangsey@gmail.com',
      color: 'amber'
    },
    {
      name: 'Sophea Darika',
      role: 'Chief Operating Officer',
      bio: t('team.member3Bio'),
      image: sopheaDarikaImg,
      email: 'darikasophea.tokkatot@gmail.com',
      color: 'teal'
    },
    {
      name: 'Sun Heng',
      role: 'Co-Founder & Technical Lead',
      bio: t('team.member4Bio'),
      image: sunHengImg,
      email: 'heng@tokkatot.com',
      color: 'amber'
    },
    {
      name: 'Kaem Sreyneath',
      role: 'Co-Founder & Embedded Systems',
      bio: t('team.member5Bio'),
      image: kaemSreyneathImg,
      email: 'sreyneathkaem.tokkatot@gmail.com',
      color: 'teal'
    },
  ];

  return (
    <div className="team" id="people">
      <div className="team-bg-glow" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">{t('team.title')}</span>
          <h2 className="section-title">{t('team.title')}</h2>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </motion.div>

        {/* Carousel — slow auto-scroll, pauses on hover, drag to read */}
        <div
          className="team-rolling-container"
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
          <div className="team-rolling-track">
            {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={`member-${index}`}
                className={`team-member-card team-card-${member.color}`}
              >
                <div className="member-portrait">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="portrait-overlay" />
                  <div className="portrait-glow" />
                </div>
                <div className="member-body">
                  <div className="member-role-badge">{member.role}</div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-bio">{member.bio}</p>
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="member-email">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <span>{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hint for users */}
        <motion.p
          className="carousel-hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hover to pause · Drag to explore
        </motion.p>
      </div>
    </div>
  );
};

export default PeoplePage;
