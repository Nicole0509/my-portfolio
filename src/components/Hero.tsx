import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="container">
        <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>{t('hero.greeting')}</h2>
        <h1>NISINGIZWE N. NICOLE</h1>
        <div className="hero-subtitle">{t('hero.role')}</div>
        <p>{t('hero.desc')}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {t('hero.cta')}
          </a>
          <a href="#about" className="btn btn-secondary">
            {t('nav.about')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
