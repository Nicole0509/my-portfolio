import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectContext } from '../context/ProjectContext';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = useContext(ProjectContext);

  const visibleProjects = projects.filter(p => !p.hidden);

  return (
    <section id="projects" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <h2>{t('projects.title')}</h2>
        
        {visibleProjects.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-muted)' }}>{t('projects.comingSoon')}</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>{t('projects.comingSoonDesc')}</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {visibleProjects.map(project => (
              <div key={project.id} className="skills-card" style={{
                background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
                borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--glass-shadow)'
              }}>
                <h3 style={{ color: 'var(--accent-1)', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-color)', marginBottom: '1.5rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem', background: 'var(--nav-bg)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
