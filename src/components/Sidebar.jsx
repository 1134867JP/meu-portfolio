import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";

const HomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="sidebar-icon"
  >
    <path d="M4 10.5L12 4l8 6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M6.5 10.5V20h11V10.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="sidebar-icon"
  >
    <path
      d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 20a7.5 7.5 0 0 1 15 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BoltIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="sidebar-icon"
  >
    <path
      d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GridIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="sidebar-icon"
  >
    <path
      d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TimelineIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="sidebar-icon"
  >
    <path
      d="M7 4v4M7 16v4M7 8h10M7 16h10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="17" cy="8" r="2" />
    <circle cx="17" cy="16" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="sidebar-icon"
  >
    <path d="M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="sidebar-icon">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="sidebar-icon">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navOrder = [
  "inicio",
  "sobre",
  "skills",
  "projetos",
  "experiencia",
  "contato",
];

const navIcons = {
  inicio: HomeIcon,
  sobre: UserIcon,
  skills: BoltIcon,
  projetos: GridIcon,
  experiencia: TimelineIcon,
  contato: MailIcon,
};

const externalItems = [
  { href: "https://github.com/1134867JP", label: "GitHub", icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/joao-pedro-rodri/",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("inicio");
  const { copy, lang, toggleLang } = useLanguage();

  const navItems = navOrder.map((id) => ({
    id,
    href: `#${id}`,
    label: copy.nav[id] || id,
    icon: navIcons[id],
  }));

  useEffect(() => {
    const ids = navOrder;
    let rafId = 0;

    const getActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.45;
      let currentId = ids[0];

      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.getBoundingClientRect().top + window.scrollY;
        if (marker >= top) currentId = id;
      });

      setActiveId((prev) => (prev === currentId ? prev : currentId));
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        getActiveSection();
      });
    };

    getActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", getActiveSection);
    window.addEventListener("hashchange", getActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", getActiveSection);
      window.removeEventListener("hashchange", getActiveSection);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <aside className="vscode-sidebar hidden md:flex" aria-label="Menu lateral">
      <div className="vscode-sidebar-group">
        <img src="/logo.jpg" alt="Logo" className="sidebar-logo object-cover" />
        <nav className="vscode-sidebar-nav" aria-label="Navegacao principal">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`sidebar-item ${isActive ? "is-active" : ""}`}
                title={item.label}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveId(item.id)}
                data-hover
              >
                <Icon />
              </a>
            );
          })}
        </nav>
      </div>

      <div className="vscode-sidebar-group">
        <div className="sidebar-divider" />
        {externalItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="sidebar-item"
              title={item.label}
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
              data-hover
            >
              <Icon />
            </a>
          );
        })}
        <div className="sidebar-divider" />
        <button
          type="button"
          className="sidebar-item sidebar-lang"
          title={copy.nav.langToggle}
          aria-label={copy.nav.langToggle}
          onClick={toggleLang}
          data-hover
        >
          <span className="sidebar-lang-label">{lang.toUpperCase()}</span>
        </button>
      </div>
    </aside>
  );
}
