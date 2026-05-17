import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "hero.greeting": "Hi, I'm",
      "hero.role": "Software Developer",
      "hero.desc": "I build modern and scalable web applications. Passionate about learning and creating beautiful user experiences.",
      "hero.cta": "View My Work",
      "about.title": "About Me",
      "about.desc": "I am an enthusiastic developer who loves solving problems through code. I am currently honing my skills in full-stack development and always looking for new challenges.",
      "about.cv": "Download CV",
      "projects.title": "My Projects",
      "projects.viewCode": "View Code",
      "footer.text": "Built with React and ❤️ by Nicole"
    }
  },
  fr: {
    translation: {
      "nav.home": "Accueil",
      "nav.about": "À Propos",
      "nav.projects": "Projets",
      "hero.greeting": "Bonjour, je suis",
      "hero.role": "Développeuse Web",
      "hero.desc": "Je crée des applications web modernes et évolutives. Passionnée par l'apprentissage et la création de belles expériences utilisateur.",
      "hero.cta": "Voir Mon Travail",
      "about.title": "À Propos de Moi",
      "about.desc": "Je suis une développeuse enthousiaste qui aime résoudre des problèmes grâce au code. J'améliore constamment mes compétences en développement full-stack et je suis toujours à la recherche de nouveaux défis.",
      "about.cv": "Télécharger le CV",
      "projects.title": "Mes Projets",
      "projects.viewCode": "Voir le Code",
      "footer.text": "Créé avec React et ❤️ par Nicole"
    }
  },
  rw: {
    translation: {
      "nav.home": "Ahabanza",
      "nav.about": "Amaso",
      "nav.projects": "Imishinga",
      "hero.greeting": "Muraho, nitwa",
      "hero.role": "Umukozi w'ikoranabuhanga",
      "hero.desc": "Nkora porogaramu zigezweho kandi zikora neza. Nkunda kwiga no gukora ibintu byiza cyane bikoreshwa n'abantu benshi.",
      "hero.cta": "Reba Ibikorwa Byanjye",
      "about.title": "Ibinyerekeyeho",
      "about.desc": "Ndi umukozi w'ikoranabuhanga wibanda gukemura ibibazo akoresheje code. Nkunze kwiga no kongera ubumenyi bwanjye mu ikoranabuhanga.",
      "about.cv": "Manura CV",
      "projects.title": "Imishinga Yanjye",
      "projects.viewCode": "Reba Code",
      "footer.text": "Byakozwe na React na ❤️ na Nicole"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
