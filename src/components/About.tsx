import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Mail } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <div className="about-wrapper">
          <div className="about-image">
            <div className="about-image-inner">
              N.
            </div>
          </div>
          <div className="about-content">
            <p>{t('about.desc1')}</p>
            <p>{t('about.desc2')}</p>
            <p>{t('about.desc3')}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a href="/cv.pdf" download className="btn btn-primary">
                <Download size={20} />
                {t('about.cv')}
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={20} />
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
