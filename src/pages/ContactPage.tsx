import { type FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../components/Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText('+85561747269');
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(t('contact.successMsg') || '✅ Message sent successfully!');
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('contact.errorMsg') || '❌ Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.infoTitle')}</h3>
            <p>{t('contact.infoDesc')}</p>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <a href="mailto:info@tokkatot.com">info@tokkatot.com</a>
                </div>
              </div>
              <div className="contact-item" onClick={handleCopyPhone} style={{position: 'relative'}}>
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <a href="tel:+85561747269" onClick={(e) => e.stopPropagation()}>+855 61 747 269</a>
                </div>
                {phoneCopied && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'var(--secondary-amber)',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem'
                  }}>
                    ✓ Copied!
                  </div>
                )}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact.phoneLabel')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span className="btn-content">
                {isSubmitting ? t('contact.sendingBtn') : t('contact.sendBtn')}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
