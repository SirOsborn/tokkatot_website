import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-page" style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{t('footer.privacy')}</h1>
      <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>
        At Tokkatot, we value your privacy. This policy outlines how we handle your data.
      </p>
      
      <h2 style={{ marginTop: '40px' }}>1. Data Collection</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        We collect minimum necessary data for our IoT systems and contact inquiries. We do not sell your personal information to third parties.
      </p>

      <h2 style={{ marginTop: '20px' }}>2. Local Hosting</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Our systems are designed to be locally hosted to ensure farmer data stays within their control.
      </p>

      <h2 style={{ marginTop: '20px' }}>3. Data Security</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        We use industry-standard encryption to protect your data during transmission.
      </p>
    </div>
  );
};

export default Privacy;
