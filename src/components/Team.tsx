import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Team.css';
import yungSreyneangImg from '../assets/yung_sreyneang.png';
import sopheaDarikaImg from '../assets/sophea_darika.png';
import virakRangseyImg from '../assets/virak_rangsey.png';
import sunHengImg from '../assets/sun_heng.png';
import kaemSreyneathImg from '../assets/kaem_sreyneath.png';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  email: string;
  image: string;
  color: string;
}

const Team = () => {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      name: t('team.member1Name'),
      role: t('team.member1Role'),
      bio: t('team.member1Bio'),
      email: t('team.member1Email'),
      image: yungSreyneangImg,
      color: 'var(--primary-teal)'
    },
    {
      name: t('team.member2Name'),
      role: t('team.member2Role'),
      bio: t('team.member2Bio'),
      email: t('team.member2Email'),
      image: virakRangseyImg,
      color: 'var(--secondary-amber)'
    },
    {
      name: t('team.member3Name'),
      role: t('team.member3Role'),
      bio: t('team.member3Bio'),
      email: t('team.member3Email'),
      image: sopheaDarikaImg,
      color: 'var(--accent-coral)'
    },
    {
      name: t('team.member4Name'),
      role: t('team.member4Role'),
      bio: t('team.member4Bio'),
      email: t('team.member4Email'),
      image: sunHengImg,
      color: 'var(--primary-teal)'
    },
    {
      name: t('team.member5Name'),
      role: t('team.member5Role'),
      bio: t('team.member5Bio'),
      email: t('team.member5Email'),
      image: kaemSreyneathImg,
      color: 'var(--secondary-amber)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.member-glass-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Double members for seamless infinite scroll
  const extendedMembers = [...teamMembers, ...teamMembers];

  return (
    <div className="team-container">
      <div className="container">
        <div className="section-header">
          <span className="badge">{t('nav.team')}</span>
          <h2 className="section-title">{t('team.title')}</h2>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </div>
      </div>

      <div className="team-scroller-container">
        <div className="team-track" ref={trackRef}>
          {extendedMembers.map((member, index) => (
            <div key={index} className="team-card-wrapper">
              <div className="member-glass-card">
                <div className="portrait-container">
                  <img src={member.image} alt={member.name} className="floating-portrait" loading="lazy" />
                  <div className="glow-effect" style={{ background: member.color }}></div>
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role" style={{ color: member.color }}>{member.role}</p>
                  <a href={`mailto:${member.email}`} className="member-email">{member.email}</a>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
