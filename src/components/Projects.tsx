import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hammer } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        
        <div style={{
          background: 'var(--card-bg)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          borderRadius: '1.5rem',
          padding: '4rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--glass-shadow)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            <Hammer size={48} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('projects.comingSoon')}</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
            {t('projects.comingSoonDesc')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
