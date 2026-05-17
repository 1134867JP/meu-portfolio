import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: -20 },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d * 0.15 },
  }),
};

const navOrder = ["inicio", "sobre", "skills", "projetos", "experiencia", "contato"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { copy, lang, toggleLang } = useLanguage();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-2 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a
            href="#"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-colors relative z-[60]"
          >
            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Logo" className="w-10 h-10 rounded-md" />
          </motion.a>

          {/* Desktop Nav */}
          <motion.nav
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-6"
          >
            {navOrder.filter(item => item !== "inicio").map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-xs font-mono text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                {copy.nav[item] || item}
              </a>
            ))}
            <span className="text-zinc-800">|</span>
            <button
              onClick={toggleLang}
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-[0.2em]"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <span className="text-zinc-800">|</span>
            <a href="https://github.com/1134867JP" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/joao-pedro-rodri/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/rodrigues_joao_p/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <InstagramIcon />
            </a>
          </motion.nav>

          {/* Mobile Toggle */}
          <motion.button
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[60] text-zinc-400 hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navOrder.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-light tracking-widest uppercase text-zinc-300 hover:text-white transition-colors"
                >
                  {copy.nav[item] || item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center gap-6"
            >
              <a href="https://github.com/1134867JP" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/joao-pedro-rodri/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white">
                <LinkedinIcon />
              </a>
              <a href="https://www.instagram.com/rodrigues_joao_p/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-white">
                <InstagramIcon />
              </a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                toggleLang();
                setMenuOpen(false);
              }}
              className="mt-8 text-xs font-mono uppercase tracking-[0.3em] text-emerald-400 border border-emerald-400/30 px-6 py-2 rounded-full"
            >
              {copy.nav.langToggle}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
