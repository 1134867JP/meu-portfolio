import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  pt: {
    nav: {
      inicio: "Início",
      sobre: "Sobre",
      skills: "Skills",
      projetos: "Projetos",
      experiencia: "Experiência",
      contato: "Contato",
      langToggle: "Mudar para EN",
    },
    hero: {
      label: "INÍCIO",
      lineOne: ["Oi,"],
      lineTwo: ["sou", "João", "Pedro"],
      lineThree: ["Desenvolvedor"],
      highlight: "Desenvolvedor",
      description: {
        intro: "FullStack Developer. ",
        highlight: "PHP, Laravel e PostgreSQL",
        outro: " — backend sólido, sistemas que escalam.",
      },
      availability: "Disponível para novos projetos · Passo Fundo, RS",
      ctaPrimary: "Entrar em Contato",
      ctaSecondary: "Ver projetos",
      scrollLabel: "Role",
    },
    about: {
      label: "Sobre Mim",
      titleBefore: "Construindo soluções robustas para o ",
      titleHighlight: "impacto real",
      titleAfter: " do seu negócio.",
      p1Before: "21 anos, de Passo Fundo — RS. Desenvolvedor FullStack na ",
      p1Highlight: "Atua Sistemas",
      p1After: ", trabalhando no desenvolvimento de sistemas de grande escala voltados para logística de transportes, gestão de frotas e emissão fiscal para o agronegócio e empresas de grande porte.",
      p2: "Meu dia a dia envolve PHP orientado a objetos, Laravel, Filament, PostgreSQL com CTEs e PLpgSQL, integrações REST, revisão de PR e sustentação em produção — incluindo análise de logs, hotfixes e registro de causa-raiz.",
      p3: "Estudo Ciências da Computação na ATITUS Educação (noturno). Aprendo rápido, comunico bem e sou autoconfiante diante de desafios.",
      stats: {
        devYears: "Anos em desenvolvimento",
        proYears: "Anos de experiência profissional",
        stackCount: "Tecnologias no stack",
        age: "Anos de idade",
      },
    },
    skills: {
      label: "Stack & Atuação",
      heading: "Construindo aplicações web escaláveis com tecnologias modernas.",
      description: "Focado em arquitetura de backend, performance de banco de dados e experiências modernas de front-end usando Laravel, React e PostgreSQL.",
      categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Database: "Banco de Dados",
        DevOps: "DevOps",
      },
    },
    projects: {
      label: "Projetos",
      heading:
        "Sites publicados e projetos de clientes com foco em clareza e impacto.",
      detailsHint: "Detalhes",
      visit: "Visitar site",
      previewLabel: "Preview do projeto",
      categories: {
        institutional: "Institucional",
        portfolio: "Portfólio",
        landing: "Landing",
        system: "Sistema",
        other: "Outros",
      },
    },
    experience: {
      label: "Experiência",
    },
    contact: {
      label: "Contato",
      headingLine1: "VAMOS",
      headingLine2: "CONVERSAR.",
      blurb:
        "Aberto a novos projetos, oportunidades e conversas sobre tecnologia.",
      cta: "Chamar no WhatsApp",
    },
    splash: {
      loading: "Inicializando",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      sobre: "About",
      skills: "Skills",
      projetos: "Projects",
      experiencia: "Experience",
      contato: "Contact",
      langToggle: "Switch to PT",
    },
    hero: {
      label: "HOME",
      lineOne: ["Hi,"],
      lineTwo: ["I'm", "João", "Pedro"],
      lineThree: ["Developer"],
      highlight: "Developer",
      description: {
        intro: "FullStack Developer. ",
        highlight: "PHP, Laravel & PostgreSQL",
        outro: " — solid backend, systems that scale.",
      },
      availability: "Open for new projects · Passo Fundo, Brazil",
      ctaPrimary: "Get in touch",
      ctaSecondary: "See projects",
      scrollLabel: "Scroll",
    },
    about: {
      label: "About Me",
      titleBefore: "Building robust solutions for ",
      titleHighlight: "real impact",
      titleAfter: " on your business.",
      p1Before:
        "21 years old, from Passo Fundo — Brazil. FullStack developer at ",
      p1Highlight: "Atua Sistemas",
      p1After:
        ", working on large-scale software systems for transport logistics, fleet management, and fiscal emission serving real businesses in the agribusiness sector.",
      p2: "My day-to-day involves object-oriented PHP, Laravel, Filament, PostgreSQL with CTEs and PLpgSQL, REST integrations, PR reviews, and production support — including log analysis, hotfixes, and root-cause tracking.",
      p3: "I study Computer Science at ATITUS Educação (evening). I learn fast, communicate clearly, and stay confident through challenges.",
      stats: {
        devYears: "Years building",
        proYears: "Years of professional experience",
        stackCount: "Technologies in stack",
        age: "Years old",
      },
    },
    skills: {
      label: "Stack & Focus",
      heading: "Building scalable web applications with modern technologies.",
      description: "Focused on backend architecture, database performance and modern frontend experiences using Laravel, React and PostgreSQL.",
      categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Database: "Database",
        DevOps: "DevOps",
      },
    },
    projects: {
      label: "Projects",
      heading:
        "Published sites and client projects focused on clarity and impact.",
      detailsHint: "Details",
      visit: "Visit site",
      previewLabel: "Project preview",
      categories: {
        institutional: "Institutional",
        portfolio: "Portfolio",
        landing: "Landing",
        system: "System",
        other: "Other",
      },
    },
    experience: {
      label: "Experience",
    },
    contact: {
      label: "Contact",
      headingLine1: "LET'S",
      headingLine2: "TALK.",
      blurb:
        "Open to new projects, opportunities, and conversations about technology.",
      cta: "WhatsApp me",
    },
    splash: {
      loading: "Loading",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "pt";
    const saved = window.localStorage.getItem("lang");
    return saved === "en" ? "en" : "pt";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "pt" ? "en" : "pt")),
      copy: translations[lang],
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
