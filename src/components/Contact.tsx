import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2>{t('nav.contact')}</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          <div className="contact-info" style={{
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2.5rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{t('contact.getInTouch')}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              {t('contact.desc')}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="mailto:nnicole0509@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)' }}>
                <div style={{ padding: '1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-1)', borderRadius: '50%' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Email</div>
                  <div style={{ color: 'var(--text-muted)' }}>nnicole0509@gmail.com</div>
                </div>
              </a>
              
              <a href="https://github.com/Nicole0509" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)' }}>
                <div style={{ padding: '1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-1)', borderRadius: '50%' }}>
                  <GithubIcon size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>GitHub</div>
                  <div style={{ color: 'var(--text-muted)' }}>@Nicole0509</div>
                </div>
              </a>
              
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)' }}>
                <div style={{ padding: '1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-1)', borderRadius: '50%' }}>
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>LinkedIn</div>
                  <div style={{ color: 'var(--text-muted)' }}>Nisingizwe Niyigena Nicole</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form" style={{
            background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-color)',
            borderRadius: '1.5rem', padding: '2.5rem', boxShadow: 'var(--glass-shadow)'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('contact.name')}</label>
                <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('contact.email')}</label>
                <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('contact.message')}</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', resize: 'vertical' }} placeholder={t('contact.messagePlaceholder')}></textarea>
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '0.5rem' }}>
                {t('contact.send')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
