import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './i18n';
import { ProjectProvider } from './context/ProjectContext.tsx';
import { TranslationProvider } from './context/TranslationContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TranslationProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </TranslationProvider>
    </BrowserRouter>
  </StrictMode>,
);
