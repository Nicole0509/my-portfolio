import React, { useContext, useState } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { TranslationContext } from '../context/TranslationContext';
import { useNavigate } from 'react-router-dom';

const categories = {
  General: ['nav.home', 'nav.about', 'nav.skills', 'nav.projects', 'nav.contact', 'footer.text'],
  Hero: ['hero.greeting', 'hero.massiveRole', 'hero.role', 'hero.desc', 'hero.cta', 'stats.years', 'stats.yearsLabel', 'stats.projects', 'stats.projectsLabel', 'stats.stacks', 'stats.stacksLabel'],
  About: ['about.title', 'about.desc1', 'about.desc2', 'about.desc3', 'about.cv'],
  Skills: ['skills.title', 'skills.software', 'skills.robotics', 'skills.ai', 'skills.technical', 'skills.languages', 'skills.soft', 'skills.pitching', 'skills.publicSpeaking', 'skills.teaching', 'skills.entrepreneurship'],
  Projects_Text: ['projects.title', 'projects.comingSoon', 'projects.comingSoonDesc'],
  Contact: ['contact.getInTouch', 'contact.desc', 'contact.name', 'contact.email', 'contact.message', 'contact.messagePlaceholder', 'contact.send']
};

const AdminDashboard: React.FC = () => {
  const { projects, addProject, deleteProject, toggleHideProject } = useContext(ProjectContext);
  const { translations, updateTranslation, resetTranslations } = useContext(TranslationContext);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Overview');

  // Project Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStr, setTechStr] = useState('');
  const [link, setLink] = useState('');

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    
    addProject({
      title,
      description,
      tech: techStr.split(',').map(s => s.trim()).filter(s => s),
      link,
      hidden: false
    });
    
    setTitle('');
    setDescription('');
    setTechStr('');
    setLink('');
  };

  const renderTranslationEditor = (categoryKeys: string[]) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {categoryKeys.map(key => (
          <div key={key} style={{ 
            background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '1rem', 
            border: '1px solid var(--border-color)', boxShadow: 'var(--glass-shadow)' 
          }}>
            <h3 style={{ color: 'var(--text-color)', marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Editing Key: <span style={{ color: 'var(--accent-1)' }}>{key}</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {['en', 'fr', 'rw'].map(lng => (
                <div key={lng}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {lng === 'en' ? '🇺🇸 English' : lng === 'fr' ? '🇫🇷 French' : '🇷🇼 Kinyarwanda'}
                  </label>
                  <textarea 
                    value={translations[lng]?.[key] || ''}
                    onChange={(e) => updateTranslation(lng, key, e.target.value)}
                    style={{ 
                      width: '100%', padding: '0.8rem', borderRadius: '0.5rem', 
                      border: '1px solid var(--border-color)', background: 'var(--bg-color)', 
                      color: 'var(--text-color)', minHeight: '80px', fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-color)', overflow: 'hidden' }}>
      
      {/* Sleek Sidebar */}
      <aside style={{ 
        width: '280px', background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', 
        borderRight: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column',
        boxShadow: '4px 0 24px rgba(0,0,0,0.02)'
      }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ color: 'var(--text-color)', fontSize: '1.25rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--accent-1)' }}>●</span> Admin Panel
          </h2>
        </div>
        
        <nav style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1, overflowY: 'auto' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>Core</div>
          
          <button onClick={() => setActiveTab('Overview')} style={{ 
            padding: '0.75rem 1rem', textAlign: 'left', borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
            background: activeTab === 'Overview' ? 'var(--accent-1)' : 'transparent',
            color: activeTab === 'Overview' ? '#fff' : 'var(--text-color)',
            fontWeight: activeTab === 'Overview' ? 600 : 500,
            transition: 'all 0.2s'
          }}>Dashboard Overview</button>

          <button onClick={() => setActiveTab('Projects')} style={{ 
            padding: '0.75rem 1rem', textAlign: 'left', borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
            background: activeTab === 'Projects' ? 'var(--accent-1)' : 'transparent',
            color: activeTab === 'Projects' ? '#fff' : 'var(--text-color)',
            fontWeight: activeTab === 'Projects' ? 600 : 500,
            transition: 'all 0.2s'
          }}>Manage Projects</button>
          
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', marginTop: '1.5rem', marginBottom: '0.5rem' }}>CMS Content</div>
          
          {Object.keys(categories).map(cat => (
            <button key={cat} onClick={() => setActiveTab(cat)} style={{ 
              padding: '0.75rem 1rem', textAlign: 'left', borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
              background: activeTab === cat ? 'var(--accent-1)' : 'transparent',
              color: activeTab === cat ? '#fff' : 'var(--text-color)',
              fontWeight: activeTab === cat ? 600 : 500,
              transition: 'all 0.2s'
            }}>
              {cat.replace('_', ' ')}
            </button>
          ))}
        </nav>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button onClick={() => navigate('/')} style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-color)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
            Exit to Portfolio
          </button>
          <button onClick={resetTranslations} style={{ padding: '0.8rem', borderRadius: '0.5rem', border: 'none', background: 'rgba(225, 29, 72, 0.1)', color: '#e11d48', fontWeight: 600, cursor: 'pointer' }}>
            Reset All Text
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* Top Header */}
        <header style={{ height: '70px', borderBottom: '1px solid var(--border-color)', padding: '0 3rem', display: 'flex', alignItems: 'center', background: 'var(--nav-bg)', backdropFilter: 'blur(20px)' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Admin / <span style={{ color: 'var(--text-color)', fontWeight: 600 }}>{activeTab.replace('_', ' ')}</span></div>
        </header>

        {/* Scrollable Content */}
        <div style={{ flexGrow: 1, padding: '3rem', overflowY: 'auto' }}>
          
          {activeTab === 'Overview' && (
            <div style={{ maxWidth: '1000px' }}>
              <h1 style={{ marginBottom: '0.5rem', color: 'var(--text-color)', fontSize: '2rem' }}>Welcome to your Dashboard</h1>
              <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Select a category on the left to start editing your portfolio content.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Total Projects</h3>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-1)', marginTop: '0.5rem' }}>{projects.length}</div>
                </div>
                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Active Languages</h3>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-2)', marginTop: '0.5rem' }}>3</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Projects' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '900px' }}>
              {/* Add Project Form */}
              <div style={{ background: 'var(--card-bg)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'var(--glass-shadow)' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-color)', fontSize: '1.5rem' }}>Publish New Project</h2>
                <form onSubmit={handleProjectSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Project Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={4} style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', resize: 'vertical' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Technologies (CSV)</label>
                      <input type="text" placeholder="React, Spring Boot..." value={techStr} onChange={(e) => setTechStr(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Live Link</label>
                      <input type="url" placeholder="https://..." value={link} onChange={(e) => setLink(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} />
                    </div>
                  </div>
                  <button type="submit" style={{ padding: '0.8rem 2rem', borderRadius: '0.5rem', background: 'var(--accent-1)', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer', justifySelf: 'start', marginTop: '1rem' }}>Publish Project</button>
                </form>
              </div>

              {/* Manage Projects */}
              <div>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-color)', fontSize: '1.25rem' }}>Your Projects</h2>
                {projects.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No projects found. Add one above to get started.</p> : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {projects.map(p => (
                      <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '1rem', opacity: p.hidden ? 0.6 : 1, transition: 'all 0.2s' }}>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-color)' }}>{p.title} {p.hidden && <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(0,0,0,0.1)', borderRadius: '4px', marginLeft: '0.5rem' }}>HIDDEN</span>}</h3>
                          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '500px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.description}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button onClick={() => toggleHideProject(p.id)} style={{ padding: '0.5rem 1rem', borderRadius: '0.4rem', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>{p.hidden ? 'Show' : 'Hide'}</button>
                          <button onClick={() => deleteProject(p.id)} style={{ padding: '0.5rem 1rem', borderRadius: '0.4rem', border: 'none', background: 'rgba(225, 29, 72, 0.1)', color: '#e11d48', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab !== 'Overview' && activeTab !== 'Projects' && (
            <div style={{ maxWidth: '1000px' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', color: 'var(--text-color)', marginBottom: '0.5rem' }}>{activeTab.replace('_', ' ')} Content</h1>
                <p style={{ color: 'var(--text-muted)' }}>Edit the translations for this section below. Changes save automatically.</p>
              </div>
              {renderTranslationEditor(categories[activeTab as keyof typeof categories])}
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
