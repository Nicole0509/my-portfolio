import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.greeting": "Hi, I'm",
      "hero.role": "Software Engineer & Aspiring Tech Entrepreneur",
      "hero.desc": "Soon to be undergraduate from the University of Rwanda, starting Masters in IT at CMU-Africa this August. I am a backend-focused developer experienced in Spring Boot, with a passion for frontend design and AI/DL models.",
      "hero.cta": "View My Work",
      "about.title": "About Me",
      "about.desc1": "I am an enthusiastic software engineer who loves solving problems through code. As a backend-focused developer, I specialize in building server-side systems, automations, and database-driven solutions.",
      "about.desc2": "I also have valuable experience as a robotics instructor for the past 6 months working with embedded systems and IoT, and previously worked as an instructor and judge for the FLL robotics competition.",
      "about.desc3": "Beyond coding, I am an aspiring tech entrepreneur with experience in pitching and public speaking. Oh, and I speak 5 languages!",
      "about.cv": "Download CV",
      "skills.title": "Skills & Expertise",
      "skills.technical": "Technical Skills",
      "skills.languages": "Languages",
      "skills.soft": "Soft Skills",
      "skills.pitching": "Pitching",
      "skills.publicSpeaking": "Public Speaking",
      "skills.teaching": "Teaching & Mentoring",
      "projects.title": "My Projects",
      "projects.comingSoon": "Coming Soon",
      "projects.comingSoonDesc": "I'm currently working on curating my best projects. Check back soon!",
      "contact.getInTouch": "Get In Touch",
      "contact.desc": "Feel free to reach out for collaborations, opportunities, or just to say hi!",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Write your message here...",
      "contact.send": "Send Message",
      "footer.text": "Built with React and ❤️ by Nicole"
    }
  },
  fr: {
    translation: {
      "nav.home": "Accueil",
      "nav.about": "À Propos",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "hero.greeting": "Bonjour, je suis",
      "hero.role": "Ingénieur Logiciel & Aspirant Entrepreneur Tech",
      "hero.desc": "Bientôt diplômée de l'Université du Rwanda, je commence un Master en informatique à CMU-Africa ce mois d'août. Je suis une développeuse orientée backend spécialisée dans Spring Boot, avec une passion pour le design frontend et les modèles d'IA/Deep Learning.",
      "hero.cta": "Voir Mon Travail",
      "about.title": "À Propos de Moi",
      "about.desc1": "Je suis une ingénieure logiciel passionnée qui aime résoudre des problèmes grâce au code. En tant que développeuse axée sur le backend, je me spécialise dans la création de systèmes côté serveur, l'automatisation et les solutions basées sur des bases de données.",
      "about.desc2": "J'ai également une expérience précieuse en tant qu'instructrice en robotique au cours des 6 derniers mois (systèmes embarqués et IoT), et j'ai déjà travaillé comme instructrice et juge pour la compétition de robotique FLL.",
      "about.desc3": "Au-delà du codage, je suis une aspirante entrepreneure tech avec de l'expérience dans les présentations (pitching) et la prise de parole en public. Ah, et je parle 5 langues !",
      "about.cv": "Télécharger le CV",
      "skills.title": "Compétences & Expertise",
      "skills.technical": "Compétences Techniques",
      "skills.languages": "Langues",
      "skills.soft": "Compétences Humaines",
      "skills.pitching": "Présentation (Pitching)",
      "skills.publicSpeaking": "Prise de Parole en Public",
      "skills.teaching": "Enseignement & Mentorat",
      "projects.title": "Mes Projets",
      "projects.comingSoon": "À Venir",
      "projects.comingSoonDesc": "Je travaille actuellement sur la sélection de mes meilleurs projets. Revenez bientôt !",
      "contact.getInTouch": "Contactez-Moi",
      "contact.desc": "N'hésitez pas à me contacter pour des collaborations, des opportunités, ou juste pour dire bonjour !",
      "contact.name": "Nom",
      "contact.email": "E-mail",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Écrivez votre message ici...",
      "contact.send": "Envoyer le Message",
      "footer.text": "Créé avec React et ❤️ par Nicole"
    }
  },
  rw: {
    translation: {
      "nav.home": "Ahabanza",
      "nav.about": "Amaso",
      "nav.skills": "Ubumenyi",
      "nav.projects": "Imishinga",
      "nav.contact": "Tuvugishe",
      "hero.greeting": "Muraho, nitwa",
      "hero.role": "Umwubatsi wa Porogaramu n'Umushoramari mu Ikoranabuhanga",
      "hero.desc": "Ndi hafi gusoza icyiciro cya kabiri cya kaminuza mu Rwanda, nzajya muri Masters muri IT muri CMU-Africa muri Kanama. Nkora cyane cyane backend nkoresheje Spring Boot, kandi nkunda gukora design za frontend n'ikoranabuhanga rya AI/DL.",
      "hero.cta": "Reba Ibikorwa Byanjye",
      "about.title": "Ibinyerekeyeho",
      "about.desc1": "Ndi umwubatsi wa porogaramu wibanda gukemura ibibazo akoresheje code. Mu kazi kanjye ka backend, nkora system zo kuri server, automations, na database.",
      "about.desc2": "Nafashije kandi nka mwarimu wa robotique mu mezi 6 ashize nkora kuri embedded systems na IoT, kandi nigeze kuba mwarimu ndetse n'umukemurampaka mu irushanwa rya robotique rya FLL.",
      "about.desc3": "Usibye gukora code, nifuza kuba umushoramari mu ikoranabuhanga aho mfite ubumenyi mu gukora pitch no kuvugira mu ruhame. Kandi mvuga indimi 5!",
      "about.cv": "Manura CV",
      "skills.title": "Ubumenyi & Ubuhanga",
      "skills.technical": "Ubumenyi bwa Tekinike",
      "skills.languages": "Indimi",
      "skills.soft": "Ubumenyi bw'Imibanire",
      "skills.pitching": "Gukora Pitch",
      "skills.publicSpeaking": "Kuvugira mu Ruhame",
      "skills.teaching": "Kwigisha & Kugira Inama",
      "projects.title": "Imishinga Yanjye",
      "projects.comingSoon": "Biraza Vuba",
      "projects.comingSoonDesc": "Ndi gutegura imishinga yanjye myiza. Muzagaruke vuba kureba!",
      "contact.getInTouch": "Tuvugishe",
      "contact.desc": "Ntutinye kunyandikira niba ushaka ko dukorana cyangwa gusuhuza gusa!",
      "contact.name": "Izina",
      "contact.email": "Imeli",
      "contact.message": "Ubutumwa",
      "contact.messagePlaceholder": "Andika ubutumwa bwawe hano...",
      "contact.send": "Ohereza Ubutumwa",
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
