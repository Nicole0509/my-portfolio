import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const softwareSkills = [
    'Full-Stack Development', 'React.js', 'Node.js', 'Python', 'C#', 'SQL Server', 'Blue Prism'
  ];

  const roboticsSkills = [
    'Embedded Systems & IoT', 'Sensor Integration', 'LEGO SPIKE Prime', 'Automation Logic'
  ];

  const aiDataSkills = [
    'Deep Learning', 'PyTorch', 'Data-Driven Problem Solving', 'System Thinking'
  ];

  const languages = [
    'Kinyarwanda', 'English', 'French', 'Chinese', 'Spanish'
  ];

  const softSkills = [
    t('skills.pitching'), t('skills.publicSpeaking'), t('skills.teaching'), t('skills.entrepreneurship')
  ];

  const renderSkillChips = (skills: string[], bgColor: string) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      {skills.map(skill => (
        <span key={skill} style={{
          padding: '0.5rem 1rem', background: bgColor, color: 'var(--text-color)',
          borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 500, border: '1px solid var(--border-color)'
        }}>
          {skill}
        </span>
      ))}
    </div>
  );

  return (
    <section id="skills" style={{ backgroundColor: 'var(--nav-bg)' }}>
      <div className="container">
        <h2>{t('skills.title')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          <div className="skills-card" style={{
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-1)' }}>{t('skills.software')}</h3>
            {renderSkillChips(softwareSkills, 'rgba(79, 70, 229, 0.1)')}
          </div>

          <div className="skills-card" style={{
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-2)' }}>{t('skills.robotics')}</h3>
            {renderSkillChips(roboticsSkills, 'rgba(13, 148, 136, 0.1)')}
          </div>

          <div className="skills-card" style={{
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-1)' }}>{t('skills.ai')}</h3>
            {renderSkillChips(aiDataSkills, 'rgba(79, 70, 229, 0.1)')}
          </div>

          <div className="skills-card" style={{
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-2)' }}>{t('skills.languages')}</h3>
            {renderSkillChips(languages, 'rgba(13, 148, 136, 0.1)')}
          </div>

          <div className="skills-card" style={{
            gridColumn: '1 / -1',
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>{t('skills.soft')}</h3>
            {renderSkillChips(softSkills, 'rgba(100, 116, 139, 0.1)')}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
