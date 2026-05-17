import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Download, Github, ExternalLink } from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const projects = [
    {
      id: 1,
      name: "DSE ME (SheCanCode)",
      desc: "A significant project developed during the SheCanCode bootcamp.",
      url: "https://github.com/Nicole0509"
    },
    {
      id: 2,
      name: "java-simple-calculator",
      desc: "A functional command-line calculator built with Java.",
      url: "https://github.com/Nicole0509/java-simple-calculator"
    },
    {
      id: 3,
      name: "java-shecancode-week2-assignments",
      desc: "Core algorithms and assignments for week 2 of the bootcamp.",
      url: "https://github.com/Nicole0509/java-shecancode-week2-assignments"
    }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--accent-1)' }}>Nicole.</div>
          <div className="nav-links">
            <a href="#home">{t('nav.home')}</a>
            <a href="#about">{t('nav.about')}</a>
            <a href="#projects">{t('nav.projects')}</a>
          </div>
          <div className="nav-controls">
            <select 
              onChange={changeLanguage} 
              defaultValue={i18n.language}
              style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-color)' }}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="rw">RW</option>
            </select>
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>{t('hero.greeting')}</h2>
          <h1>Nicole0509</h1>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-2)', marginTop: '1rem' }}>{t('hero.role')}</h2>
          <p>{t('hero.desc')}</p>
          <a href="#projects" className="btn btn-primary">{t('hero.cta')}</a>
        </div>
      </section>

      <section id="about" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <h2>{t('about.title')}</h2>
          <div className="about-content">
            <p>{t('about.desc')}</p>
            <a href="/cv.pdf" download className="btn btn-secondary">
              <Download size={20} />
              {t('about.cv')}
            </a>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2>{t('projects.title')}</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>{t('footer.text')}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
