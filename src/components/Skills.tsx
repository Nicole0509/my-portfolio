import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const technicalSkills = [
    'Spring Boot', 'Java', 'Python', 'React.js / Next.js',
    'Node.js', 'JavaScript', 'HTML / CSS', 'Blueprism',
    'Embedded Systems & IoT', 'AI & Deep Learning'
  ];

  const languages = [
    'Kinyarwanda', 'English', 'French', 'Chinese', 'Spanish'
  ];

  const softSkills = [
    t('skills.pitching'), t('skills.publicSpeaking'), t('skills.teaching')
  ];

  return (
    <section id="skills" style={{ backgroundColor: 'var(--nav-bg)' }}>
      <div className="container">
        <h2>{t('skills.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <div className="skills-card" style={{
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2.5rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-1)' }}>{t('skills.technical')}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {technicalSkills.map(skill => (
                <span key={skill} style={{
                  padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--text-color)',
                  borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 500, border: '1px solid var(--border-color)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div className="skills-card" style={{
              background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
              borderRadius: '1.5rem', padding: '2.5rem', boxShadow: 'var(--glass-shadow)'
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-2)' }}>{t('skills.languages')}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {languages.map(lang => (
                  <span key={lang} style={{
                    padding: '0.5rem 1rem', background: 'rgba(13, 148, 136, 0.1)', color: 'var(--text-color)',
                    borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 500, border: '1px solid var(--border-color)'
                  }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-card" style={{
              background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
              borderRadius: '1.5rem', padding: '2.5rem', boxShadow: 'var(--glass-shadow)'
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>{t('skills.soft')}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {softSkills.map(skill => (
                  <span key={skill} style={{
                    padding: '0.5rem 1rem', background: 'rgba(100, 116, 139, 0.1)', color: 'var(--text-color)',
                    borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 500, border: '1px solid var(--border-color)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
