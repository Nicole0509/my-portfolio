import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Nicole<span>.</span></div>
        <div className="nav-links">
          <a href="#home">{t('nav.home')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#skills">{t('nav.skills')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a href="#contact">{t('nav.contact')}</a>
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
  );
};

export default Navbar;
