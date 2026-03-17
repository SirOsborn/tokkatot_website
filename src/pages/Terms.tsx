import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-page" style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{t('footer.terms')}</h1>
      <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>
        Welcome to Tokkatot. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
      </p>
      
      <h2 style={{ marginTop: '40px' }}>1. Use of Service</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Our smart chicken farming solutions are provided to help local farmers optimize their operations. Any misuse of the technology or data provided is strictly prohibited.
      </p>

      <h2 style={{ marginTop: '20px' }}>2. Intellectual Property</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        All content on this website, including designs, text, and images, is the property of Tokkatot.
      </p>

      <h2 style={{ marginTop: '20px' }}>3. Contact</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        For any questions regarding these terms, please contact us at info@tokkatot.com.
      </p>
    </div>
  );
};

export default Terms;
