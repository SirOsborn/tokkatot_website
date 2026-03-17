import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../components/Team.css';
import yungSreyneangImg from '../assets/yung_sreyneang.png';
import sopheaDarikaImg from '../assets/sophea_darika.png';
import virakRangseyImg from '../assets/virak_rangsey.png';
import sunHengImg from '../assets/sun_heng.png';
import kaemSreyneathImg from '../assets/kaem_sreyneath.png';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
}

const PeoplePage = () => {
  const { t } = useTranslation();

  const teamMembers: TeamMember[] = [
    {
      name: "Yung Sreyneang",
      role: "Co-founder & CEO",
      bio: t('team.member1Bio'),
      image: yungSreyneangImg,
      email: "sreyneangyung.tokkatot@gmail.com"
    },
    {
      name: "Virak Rangsey",
      role: "Co-founder & Business Lead",
      bio: t('team.member2Bio'),
      image: virakRangseyImg,
      email: "rangseyvirak.tokkatot.com"
    },
    {
      name: "Sophea Darika",
      role: "Chief Operating Officer",
      bio: t('team.member3Bio'),
      image: sopheaDarikaImg,
      email: "darikasophea.tokkatot@gmail.com"
    },
    {
      name: "Sun Heng",
      role: "Co-founder & AI Engineer",
      bio: t('team.member4Bio'),
      image: sunHengImg,
      email: "hengsun.tokkatot.com"
    },
    {
      name: "Kaem Sreyneath",
      role: "Co-Founder & Embedded Systems Engineer",
      bio: t('team.member5Bio'),
      image: kaemSreyneathImg,
      email: "sreyneathkaem.tokkatot@gmail.com"
    }
  ];

  const scrollProps = useInfiniteScroll(0.8);

  useEffect(() => {
    // Scroll handling is now handled by the browser's natural flow for simplified vertical list
  }, []);

  return (
    <div className="team" id="people">
      <div className="team-background">
        <div className="light-beam"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('team.title')}</span>
          <h2 className="section-title">{t('team.title')}</h2>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </div>

        <div 
          className="team-rolling-container active-drag" 
          {...scrollProps}
          ref={scrollProps.containerRef}
        >
          <div className="team-rolling-track">
            {/* We use 3 sets to allow smooth bi-directional "back and forth" manual scroll */}
            {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={`member-${index}`}
                className="team-member-card-horizontal glass-effect"
              >
                <div className="member-portrait-top">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay-info">
                    <h3 className="member-name-horizontal">{member.name}</h3>
                    <p className="member-role-horizontal">{member.role}</p>
                  </div>
                </div>

                <div className="member-details-bottom">
                  <p className="member-bio-horizontal">{member.bio}</p>
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="member-email-link">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Contact Form Section */}
        <div className="team-contact-section">
          <div className="section-header">
            <h2 className="section-title">Connect with Our Team</h2>
            <p className="section-subtitle">Have a specific question for our founders? Reach out directly.</p>
          </div>
          
          <div className="team-contact-form-wrapper glass-effect">
            <form className="team-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="team-name">Name</label>
                  <input type="text" id="team-name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="team-email">Email</label>
                  <input type="email" id="team-email" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="team-subject">Subject</label>
                <select id="team-subject">
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="technical">Technical Support</option>
                  <option value="investment">Investment Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="team-message">Message</label>
                <textarea id="team-message" rows={5} placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message to Team</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
