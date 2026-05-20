import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";
import { useLanguage } from "../i18n";

const projects = [
  {
    id: "cargohub",
    title: { pt: "CargoHub", en: "CargoHub" },
    description: {
      pt: "Sistema web de gerenciamento de fretes com agendamento de cargas/descargas, controle operacional, reservas de horários, gestão de clientes e integração com WhatsApp.",
      en: "Web system for freight management with loading/unloading scheduling, operational control, time slot reservations, customer management, and WhatsApp integration.",
    },
    tech: {
      pt: ["Sistema", "Logística", "Dashboard"],
      en: ["System", "Logistics", "Dashboard"],
    },
    year: { pt: "Desenvolvendo", en: "Developing" },
    categoryKey: "system",
    link: "https://72.60.254.178.nip.io/login",
    preview: true,
  },
  {
    id: "thamires",
    title: {
      pt: "Thamires Camargo",
      en: "Thamires Camargo",
    },
    description: {
      pt: "Landing page pessoal focada em apresentação, identidade visual e contato direto.",
      en: "Personal landing page focused on presentation, visual identity, and direct contact.",
    },
    tech: {
      pt: ["Landing", "UI", "Contato"],
      en: ["Landing", "UI", "Contact"],
    },
    year: { pt: "Online", en: "Live" },
    categoryKey: "landing",
    link: "https://thamirescamargo.com.br/",
    preview: true,
  },
  {
    id: "sitelivia",
    title: { pt: "Lívia Vecchi", en: "Lívia Vecchi" },
    description: {
      pt: "Landing page focada em apresentação, identidade visual e contato direto.",
      en: "Landing page focused on presentation, visual identity, and direct contact.",
    },
    tech: {
      pt: ["Landing Page", "UI", "Apresentação"],
      en: ["Landing Page", "UI", "Presentation"],
    },
    year: { pt: "Online", en: "Live" },
    categoryKey: "landing",
    link: "https://1134867jp.github.io/siteLivia/",
    preview: true,
  },
  {
    id: "sitelisi",
    title: {
      pt: "Lisiane Vecchi",
      en: "Lisiane Vecchi",
    },
    description: {
      pt: "Landing page focada em apresentação, identidade visual e contato direto.",
      en: "Landing page focused on presentation, visual identity, and direct contact.",
    },
    tech: {
      pt: ["Landing Page", "UI", "Apresentação"],
      en: ["Landing Page", "UI", "Presentation"],
    },
    year: { pt: "Online", en: "Live" },
    categoryKey: "landing",
    link: "https://1134867jp.github.io/sitelisi/",
    preview: true,
  },
  {
    id: "clj",
    title: {
      pt: "CLJ Diocese de Vacaria",
      en: "CLJ Diocese of Vacaria",
    },
    description: {
      pt: "Site institucional com conteúdo organizado, estrutura clara e navegação simples para eventos e comunicados.",
      en: "Institutional site with organized content, clear structure, and simple navigation for events and announcements.",
    },
    tech: {
      pt: ["Website", "Responsivo", "Conteúdo"],
      en: ["Website", "Responsive", "Content"],
    },
    year: { pt: "Online", en: "Live" },
    categoryKey: "institutional",
    link: "https://cljdiocesevacaria.com.br/",
    preview: true,
  },
];

const categoryBadge = {
  institutional: "text-emerald-300 border-emerald-400/30 bg-emerald-400/5",
  portfolio: "text-lime-300 border-lime-400/30 bg-lime-400/5",
  landing: "text-green-300 border-green-400/30 bg-green-400/5",
  system: "text-blue-300 border-blue-400/30 bg-blue-400/5",
  other: "text-zinc-400 border-zinc-700/40 bg-zinc-900/40",
};

function ProjectItem({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
  copy,
  lang,
}) {
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
  const title = project.title?.[lang] || project.title?.pt || project.title;
  const description =
    project.description?.[lang] ||
    project.description?.pt ||
    project.description;
  const techList = project.tech?.[lang] || project.tech?.pt || project.tech;
  const year = project.year?.[lang] || project.year?.pt || project.year;
  const categoryLabel =
    copy.projects.categories[project.categoryKey] || project.categoryKey;

  return (
    <motion.div
      className={`border-b border-zinc-900 transition-all duration-500 ${isDimmed ? "opacity-25" : "opacity-100"}`}
      onHoverStart={() => {
        // Only trigger hover on non-touch devices to avoid getting stuck
        if (window.matchMedia("(hover: hover)").matches) {
          setHoveredIndex(index);
        }
      }}
      onHoverEnd={() => {
        if (window.matchMedia("(hover: hover)").matches) {
          setHoveredIndex(null);
        }
      }}
      onClick={() => setHoveredIndex(isHovered ? null : index)}
    >
      <GlowCard glowColor="rgba(35, 214, 134, 0.08)">
        <div className="relative py-6 md:py-10 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between group cursor-pointer">
          {/* Left gradient accent */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #7dff7a, #23d686)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Left */}
          <div className="flex items-center gap-8 mb-6 lg:mb-0">
            <span className="text-zinc-700 font-mono text-sm w-8 flex-shrink-0">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span
                  className={`text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded-full ${categoryBadge[project.categoryKey] || "text-zinc-400 border-zinc-400/30"}`}
                >
                  {categoryLabel}
                </span>
                <span className="text-[10px] font-mono text-zinc-600">
                  {year}
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl lg:text-5xl font-light tracking-tight text-white"
                style={{
                  transform: isHovered ? "translateX(12px)" : "translateX(0)",
                  transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {title}
              </h3>
            </div>
          </div>

          {/* Right — expandable */}
          <div className="lg:w-[45%]">
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  {project.preview && (
                    <div className="mb-6 rounded-xl overflow-hidden border border-zinc-800/50 bg-[#0a0a0a] relative w-full aspect-video mt-4 group/preview">
                      <div className="absolute inset-0 bg-zinc-900/60 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                        <span className="text-white font-mono text-xs uppercase tracking-widest bg-zinc-800/90 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-700/50">
                          {copy.projects?.previewLabel || "Preview"}
                        </span>
                      </div>
                      <iframe
                        src={project.link}
                        title={title}
                        className="absolute top-0 left-0 origin-top-left pointer-events-none bg-[#0a0a0a]"
                        style={{
                          width: "400%",
                          height: "400%",
                          transform: "scale(0.25)"
                        }}
                        tabIndex="-1"
                      />
                    </div>
                  )}
                  <p className="text-zinc-400 text-base mb-5 leading-relaxed lg:text-right">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {techList.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono border border-zinc-800 rounded-full text-zinc-300 bg-zinc-900/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <div className="mt-4 lg:flex lg:justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                        data-hover
                      >
                        {copy.projects.visit}
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M8 7h9v9" />
                        </svg>
                      </a>
                    </div>
                  ) : null}
                </motion.div>
              ) : (
                <motion.div
                  key="closed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex lg:justify-end items-center gap-2 text-zinc-600 text-xs font-mono uppercase tracking-widest mt-4 lg:mt-0"
                >
                  {copy.projects.detailsHint}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { copy, lang } = useLanguage();

  return (
    <section id="projetos" className="pt-16 md:pt-28 pb-20 md:pb-32">
      <div className="px-6 lg:px-10 max-w-7xl mx-auto mb-10 md:mb-16">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-gradient-to-r from-lime-400 to-emerald-400" />
          [ {copy.projects.label} ]
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-5xl font-light tracking-tight max-w-2xl leading-snug"
        >
          {copy.projects.heading}
        </motion.p>
      </div>

      <div className="w-full border-t border-zinc-900">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            index={index}
            project={project}
            hoveredIndex={hoveredProject}
            setHoveredIndex={setHoveredProject}
            copy={copy}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}
