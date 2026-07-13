import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const contentByLanguage = {
  pt: {
    eyebrow: "Visão geral",
    title: "Código que resolve operação real.",
    description:
      "Da regra de negócio ao deploy: construo produtos confiáveis para logística, transporte e operações que não podem parar.",
    cards: [
      {
        number: "01",
        label: "Especialidade",
        value: "Back-end & integrações",
        detail: "PHP, Laravel, PostgreSQL e APIs REST",
        accent: true,
      },
      {
        number: "02",
        label: "Experiência",
        value: "Sistemas críticos",
        detail: "Emissão fiscal, fretes, pedágios e agronegócio",
      },
      {
        number: "03",
        label: "Forma de trabalhar",
        value: "Produto completo",
        detail: "Análise, implementação, revisão e sustentação",
      },
    ],
    status: "Disponível para projetos selecionados",
  },
  en: {
    eyebrow: "Overview",
    title: "Code built for real operations.",
    description:
      "From business rules to deployment, I build reliable products for logistics, transportation, and operations that cannot stop.",
    cards: [
      {
        number: "01",
        label: "Specialty",
        value: "Back-end & integrations",
        detail: "PHP, Laravel, PostgreSQL, and REST APIs",
        accent: true,
      },
      {
        number: "02",
        label: "Experience",
        value: "Critical systems",
        detail: "Tax documents, freight, tolls, and agribusiness",
      },
      {
        number: "03",
        label: "How I work",
        value: "End-to-end product",
        detail: "Analysis, implementation, review, and support",
      },
    ],
    status: "Available for selected projects",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ImpactStrip() {
  const { lang } = useLanguage();
  const content = contentByLanguage[lang] || contentByLanguage.pt;

  return (
    <section
      aria-labelledby="impact-title"
      className="relative z-20 px-6 lg:px-10 -mt-2 md:-mt-8 pb-14 md:pb-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-zinc-950/70 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="grid lg:grid-cols-[1.15fr_1.85fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col justify-between border-b border-white/[0.07] p-7 md:p-10 lg:border-b-0 lg:border-r"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 15% 15%, rgba(125,255,122,.13), transparent 42%)",
                }}
              />

              <div className="relative">
                <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-emerald-300/70">
                  {content.eyebrow}
                </p>
                <h2
                  id="impact-title"
                  className="display-font max-w-md text-3xl font-semibold leading-[1.08] tracking-tight text-white md:text-4xl"
                >
                  {content.title}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                  {content.description}
                </p>
              </div>

              <div className="relative mt-10 flex items-center gap-3 border-t border-white/[0.07] pt-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  {content.status}
                </span>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-3">
              {content.cards.map((card, index) => (
                <motion.article
                  key={card.number}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`group relative min-h-[220px] overflow-hidden border-b border-white/[0.07] p-7 transition-colors duration-500 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-8 ${
                    card.accent
                      ? "bg-emerald-400/[0.055]"
                      : "bg-white/[0.015] hover:bg-white/[0.035]"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    / {card.number}
                  </span>

                  <div className="mt-14">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {card.label}
                    </p>
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {card.value}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {card.detail}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-lime-300 to-emerald-500 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
