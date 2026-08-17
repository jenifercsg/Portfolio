const translations = {
  pt: {
    navAbout: "Sobre",
    navExperience: "Experiência",
    navProjects: "Projetos",
    navContact: "Contato",

    profileGreeting: "Olá, eu sou",
    profileRole: "Frontend Developer",
    downloadCV: "Baixar currículo",
    contactButton: "Dados de Contato",

    aboutSmall: "Saiba mais",
    aboutTitle: "Sobre mim",
    experienceCardTitle: "Experiência",
    yearsExperience: "2+ anos",
    frontendDevelopment: "Desenvolvimento Frontend",
    educationTitle: "Formação Acadêmica",
    degree: "Análise e Desenvolvimento de Sistemas",
    aboutText:
      "Olá! Me chamo Jenifer Gonçalves e sou formada em Análise e Desenvolvimento de Sistemas pela UNIMAR. Sou apaixonada por desenvolvimento front-end e gosto de transformar ideias em interfaces modernas, responsivas e funcionais. Tenho conhecimentos em HTML, CSS, JavaScript e Vue.js, além de experiência com projetos práticos e desenvolvimento de interfaces. Estou sempre buscando aprender novas tecnologias, aprimorar minhas habilidades e transformar desafios em soluções. Meu objetivo é crescer profissionalmente na área de tecnologia e contribuir para projetos que façam a diferença.",

    experienceSmall: "Explore meus",
    experienceTitle: "Conhecimentos",
    frontendDeveloper: "Desenvolvedora Frontend",
    backendDeveloper: "Desenvolvedora Backend",
    advanced: "Avançado",
    intermediate: "Intermediário",
    basic: "Básico",

    projectsSmall: "Projetos em que tenho trabalhado",
    projectsTitle: "Projetos",
    project1: "Projeto 1",
    project2: "Projeto 2",
    project3: "Projeto 3",
    openProject: "Abrir Projeto",

    contactSmall: "Tem uma ideia ou oportunidade?",
    contactTitle: "Vamos construir algo juntos!",

    copyright: "© 2025 Jenifer Gonçalves. Todos os direitos reservados.",
  },

  en: {
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",

    profileGreeting: "Hello, I am",
    profileRole: "Frontend Developer",
    downloadCV: "Download Resume",
    contactButton: "Contact Information",

    aboutSmall: "Get to know more",
    aboutTitle: "About Me",
    experienceCardTitle: "Experience",
    yearsExperience: "2+ years",
    frontendDevelopment: "Frontend Development",
    educationTitle: "Academic Background",
    degree: "Systems Analysis and Development",
    aboutText:
      "Hello! My name is Jenifer Gonçalves, and I have a degree in Systems Analysis and Development from UNIMAR. I am passionate about front-end development and enjoy turning ideas into modern, responsive, and functional interfaces. I have knowledge of HTML, CSS, JavaScript, and Vue.js, as well as experience with practical projects and interface development. I am always looking to learn new technologies, improve my skills, and turn challenges into solutions. My goal is to grow professionally in the technology field and contribute to projects that make a difference.",

    experienceSmall: "Explore my",
    experienceTitle: "Skills",
    frontendDeveloper: "Frontend Developer",
    backendDeveloper: "Backend Developer",
    advanced: "Advanced",
    intermediate: "Intermediate",
    basic: "Basic",

    projectsSmall: "Projects I have been working on",
    projectsTitle: "Projects",
    project1: "Project 1",
    project2: "Project 2",
    project3: "Project 3",
    openProject: "Open Project",

    contactSmall: "Have an idea or opportunity?",
    contactTitle: "Let's build something together!",

    copyright: "© 2025 Jenifer Gonçalves. All rights reserved.",
  },

  es: {
    navAbout: "Sobre mí",
    navExperience: "Experiencia",
    navProjects: "Proyectos",
    navContact: "Contacto",

    profileGreeting: "Hola, soy",
    profileRole: "Desarrolladora Frontend",
    downloadCV: "Descargar currículum",
    contactButton: "Datos de contacto",

    aboutSmall: "Saber más",
    aboutTitle: "Sobre mí",
    experienceCardTitle: "Experiencia",
    yearsExperience: "2+ años",
    frontendDevelopment: "Desarrollo Frontend",
    educationTitle: "Formación Académica",
    degree: "Análisis y Desarrollo de Sistemas",
    aboutText:
      "¡Hola! Me llamo Jenifer Gonçalves y soy graduada en Análisis y Desarrollo de Sistemas por la UNIMAR. Me apasiona el desarrollo front-end y disfruto transformar ideas en interfaces modernas, responsivas y funcionales. Tengo conocimientos en HTML, CSS, JavaScript y Vue.js, además de experiencia con proyectos prácticos y desarrollo de interfaces. Siempre busco aprender nuevas tecnologías, mejorar mis habilidades y transformar los desafíos en soluciones. Mi objetivo es crecer profesionalmente en el área de tecnología y contribuir a proyectos que marquen la diferencia.",

    experienceSmall: "Explora mis",
    experienceTitle: "Conocimientos",
    frontendDeveloper: "Desarrolladora Frontend",
    backendDeveloper: "Desarrolladora Backend",
    advanced: "Avanzado",
    intermediate: "Intermedio",
    basic: "Básico",

    projectsSmall: "Proyectos en los que he trabajado",
    projectsTitle: "Proyectos",
    project1: "Proyecto 1",
    project2: "Proyecto 2",
    project3: "Proyecto 3",
    openProject: "Abrir Proyecto",

    contactSmall: "¿Tienes una idea u oportunidad?",
    contactTitle: "¡Construyamos algo juntos!",

    copyright: "© 2025 Jenifer Gonçalves. Todos los derechos reservados.",
  },
};

function changeLanguage(language) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  document.documentElement.lang = language;
  localStorage.setItem("language", language);
}

const savedLanguage = localStorage.getItem("language") || "pt";

changeLanguage(savedLanguage);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburguer-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

ScrollReveal().reveal("#about", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  reset: false,
});

ScrollReveal().reveal("#experience", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  reset: false,
});

ScrollReveal().reveal(".details-container", {
  distance: "40px",
  duration: 800,
  origin: "bottom",
  interval: 150,
  reset: false,
});

ScrollReveal().reveal("#projects", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  reset: false,
});

ScrollReveal().reveal("#contact", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  reset: false,
});