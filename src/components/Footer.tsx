import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;
