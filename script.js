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
      "Olá! Me chamo Jenifer Gonçalves, tenho 22 anos e sou estudante do último ano de Análise e Desenvolvimento de Sistemas na Universidade de Marília – UNIMAR. Durante minha trajetória, desenvolvi uma forte conexão com o front-end, onde encontrei minha paixão por transformar ideias em experiências visuais interativas e funcionais. Atualmente, estou em busca de uma nova oportunidade profissional. Enquanto isso, continuo investindo no meu crescimento por meio de cursos, projetos pessoais e desafios práticos, especialmente em tecnologias como HTML, CSS, JavaScript e React. Tenho facilidade para aprender, sou comprometida com o que faço e busco uma empresa onde possa evoluir profissionalmente, contribuindo com minhas habilidades e vontade de crescer.",

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
      "Hello! My name is Jenifer Gonçalves, I am 22 years old and I am a final-year student of Systems Analysis and Development at the University of Marília – UNIMAR. Throughout my journey, I have developed a strong connection with frontend development, where I found my passion for turning ideas into interactive and functional visual experiences. I am currently looking for a new professional opportunity. In the meantime, I continue investing in my growth through courses, personal projects, and practical challenges, especially in technologies such as HTML, CSS, JavaScript, and React. I am a fast learner, committed to what I do, and looking for a company where I can grow professionally while contributing with my skills and willingness to learn.",

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
      "¡Hola! Me llamo Jenifer Gonçalves, tengo 22 años y soy estudiante del último año de Análisis y Desarrollo de Sistemas en la Universidad de Marília – UNIMAR. A lo largo de mi trayectoria, he desarrollado una fuerte conexión con el desarrollo frontend, donde encontré mi pasión por transformar ideas en experiencias visuales interactivas y funcionales. Actualmente, estoy buscando una nueva oportunidad profesional. Mientras tanto, continúo invirtiendo en mi crecimiento a través de cursos, proyectos personales y desafíos prácticos, especialmente en tecnologías como HTML, CSS, JavaScript y React. Aprendo con facilidad, soy comprometida con lo que hago y busco una empresa donde pueda crecer profesionalmente, aportando mis habilidades y mis ganas de seguir aprendiendo.",

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
