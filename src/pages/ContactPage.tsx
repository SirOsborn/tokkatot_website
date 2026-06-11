import { type FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../components/Contact.css';
import contactBg from '../assets/chickenfarm_khmer.webp';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: string;
}

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '', type: 'farmer' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText('+85561747269');
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2500);
    } catch { /* ignore */ }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', type: 'farmer' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: 'info@tokkatot.com',
      href: 'mailto:info@tokkatot.com',
      action: null
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 14 19.79 19.79 0 0 1 1.04 5.38 2 2 0 0 1 3 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: 'Phone (tap to copy)',
      value: '+855 61 747 269',
      href: 'tel:+85561747269',
      action: handleCopyPhone
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Location',
      value: 'Phnom Penh, Cambodia',
      href: null,
      action: null
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      label: 'Facebook',
      value: '@Tokkatot',
      href: 'https://www.facebook.com/profile.php?id=61562440490014',
      action: null
    },
  ];

  return (
    <div className="contact">
      {/* Background */}
      <div className="contact-bg">
        <img src={contactBg} alt="" className="contact-bg-img" loading="lazy" />
        <div className="contact-bg-overlay" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
        >
          <span className="section-eyebrow">{t('contact.title')}</span>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-layout">
          {/* Left: Info */}
          <motion.div
            className="contact-info-side"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
          >
            <h3 className="contact-info-heading">{t('contact.infoTitle')}</h3>
            <p className="contact-info-desc">{t('contact.infoDesc')}</p>

            <div className="contact-items-list">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="contact-item-card"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={item.action || undefined}
                  style={{ cursor: item.action ? 'pointer' : 'default' }}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <span className="ci-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="ci-value" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className="ci-value">{item.value}</span>
                    )}
                  </div>
                  {item.action && (
                    <div className={`copy-badge ${phoneCopied ? 'visible' : ''}`}>
                      {phoneCopied ? '✓ Copied!' : ''}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-form-side"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Inquiry type */}
              <div className="type-selector">
                {['farmer', 'investor', 'partner', 'other'].map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`type-btn ${formData.type === type ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, type })}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.nameLabel')}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.phoneLabel')}</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+855 xx xxx xxx" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.messageLabel')}</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Tell us about your farm or how we can help..." />
              </div>

              {submitStatus === 'success' && (
                <div className="form-alert form-success">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {t('contact.successMsg') || 'Message sent! We\'ll be in touch soon.'}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-alert form-error">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  {t('contact.errorMsg') || 'Failed to send. Please try again.'}
                </div>
              )}

              <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? (
                  <><span className="spinner" />{t('contact.sendingBtn') || 'Sending...'}</>
                ) : (
                  <>{t('contact.sendBtn') || 'Send Message'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
