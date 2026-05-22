import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="container">
        
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-subtitle">{t('hero.greeting')}</div>
          <h1 className="massive-title">
            {t('hero.massiveRole')}
          </h1>
          <p>{t('hero.desc')}</p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {t('hero.cta')}
            </a>
            <a href="#about" className="btn btn-secondary">
              {t('nav.about')}
            </a>
          </div>

          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">{t('stats.years')}</div>
              <div className="stat-label">{t('stats.yearsLabel')}</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{t('stats.projects')}</div>
              <div className="stat-label">{t('stats.projectsLabel')}</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{t('stats.stacks')}</div>
              <div className="stat-label">{t('stats.stacksLabel')}</div>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="hero-image-wrapper">
          {/* Custom soft gradient blob background */}
          <div className="doodle-blob"></div>
          <img src="/profile.png" alt="Nicole Profile" className="hero-profile-img" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
