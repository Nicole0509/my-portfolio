import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Download, Github, ExternalLink, Mail } from 'lucide-react';

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
      desc: "A comprehensive project showcasing full-stack capabilities, developed during the intensive SheCanCode bootcamp.",
      url: "https://github.com/Nicole0509"
    },
    {
      id: 2,
      name: "Java Simple Calculator",
      desc: "A functional, well-structured command-line calculator demonstrating core Object-Oriented Programming principles in Java.",
      url: "https://github.com/Nicole0509/java-simple-calculator"
    },
    {
      id: 3,
      name: "Java Week 2 Assignments",
      desc: "A collection of algorithmic challenges and data structure implementations from the SheCanCode curriculum.",
      url: "https://github.com/Nicole0509/java-shecancode-week2-assignments"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Background ambient glowing shapes */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <nav className="navbar">
        <div className="container">
          <div className="logo">Nicole<span>.</span></div>
          <div className="nav-links">
            <a href="#home">{t('nav.home')}</a>
            <a href="#about">{t('nav.about')}</a>
            <a href="#projects">{t('nav.projects')}</a>
          </div>
          <div className="nav-controls">
            <select 
              className="lang-select"
              onChange={changeLanguage} 
              defaultValue={i18n.language}
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
          <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>{t('hero.greeting')}</h2>
          <h1>Nicole0509</h1>
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
              <p>{t('about.desc')}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/cv.pdf" download className="btn btn-primary">
                  <Download size={20} />
                  {t('about.cv')}
                </a>
                <a href="mailto:niashavril0509@gmail.com" className="btn btn-secondary">
                  <Mail size={20} />
                  Contact Me
                </a>
              </div>
            </div>
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
    </div>
  );
}

export default App;
