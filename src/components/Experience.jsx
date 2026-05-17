import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import { useLanguage } from "../i18n";

const experiences = [
  {
    role: {
      pt: "Desenvolvedor FullStack",
      en: "FullStack Developer",
    },
    company: "Atua Sistemas",
    period: "fev/2025 — Atual",
    description: {
      pt: "Atuação no desenvolvimento e sustentação de sistemas de missão crítica para grandes transportadoras e agronegócio (ecossistema Mais Frete e Mais Frota). Foco na evolução de regras de negócio, integrações de pagamento de fretes/pedágios via REST e otimização de consultas SQL complexas (PostgreSQL, CTEs, PLpgSQL) para relatórios de margem de lucro operacional. Sustentação em produção, revisões de PR e análise de causa-raiz.",
      en: "Development and support of mission-critical logistics and agribusiness systems (Mais Frete and Mais Frota ecosystem). Focused on evolving business rules, REST integrations with freight/toll payment providers, and optimizing complex PostgreSQL queries (CTEs, PLpgSQL) for operational profit reports. Production support, PR reviews, and root-cause analysis.",
    },
    tech: [
      "PHP OO",
      "Laravel",
      "Filament",
      "PostgreSQL",
      "PLpgSQL",
      "REST",
      "Git",
    ],
  },
  {
    role: {
      pt: "Estágio — Desenvolvedor FullStack",
      en: "Intern — FullStack Developer",
    },
    company: "Atua Sistemas",
    period: "mar/2024 — fev/2025",
    description: {
      pt: "Manutenção e evolução de módulos do emissor fiscal (Mais CT-e) e ferramentas de gestão logística. Desenvolvimento de relatórios operacionais confiáveis, PDFs automatizados para documentos de transporte e apoio no desenvolvimento de integrações REST.",
      en: "Maintenance and evolution of fiscal emission modules (Mais CT-e) and logistics management tools. Developed reliable operational reports, automated transport document PDFs, and assisted with REST integrations.",
    },
    tech: ["PHP", "Laravel", "PostgreSQL", "JavaScript", "Git"],
  },
  {
    role: {
      pt: "Suporte Técnico",
      en: "Technical Support",
    },
    company: "Alpino Tecnologia",
    period: "nov/2023 — mai/2024",
    description: {
      pt: "Suporte ao software da empresa, atendimento a clientes e resolução de problemas técnicos. Primeiro contato com ambiente corporativo de tecnologia.",
      en: "Support for the company's software, customer assistance, and troubleshooting. First contact with a corporate tech environment.",
    },
    tech: ["Suporte", "Software"],
  },
  {
    role: {
      pt: "Estágio — Implantação",
      en: "Intern — Implementation",
    },
    company: "Alpino Tecnologia",
    period: "ago/2023 — nov/2023",
    description: {
      pt: "Atuação no setor de implantação de sistemas. Ponto de partida da carreira em tecnologia.",
      en: "Worked in system implementation. Starting point of my career in tech.",
    },
    tech: ["Implantação"],
  },
  {
    role: {
      pt: "Vendedor & Aux. Administrativo",
      en: "Sales & Admin Assistant",
    },
    company: "GL Materiais de Construção",
    period: "jan/2018 — jul/2023",
    description: {
      pt: "Vendas no balcão e apoio administrativo por 5 anos e 6 meses. Desenvolveu comunicação assertiva, organização e disciplina que hoje complementam o perfil técnico.",
      en: "Counter sales and administrative support for 5 years and 6 months. Developed assertive communication, organization, and discipline that now complement the technical profile.",
    },
    tech: ["Vendas", "Administrativo", "Comunicação"],
  },
];

export default function Experience() {
  const { copy, lang } = useLanguage();
  return (
    <section id="experiencia" className="py-28 px-6 lg:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-16 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-cyan-500" />
          [ {copy.experience.label} ]
        </motion.p>

        <div className="relative pl-8">
          <div className="timeline-line" />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
                className="relative"
              >
                <div className="absolute -left-[38px] top-1.5 glow-dot" />

                <GlowCard
                  className="p-6 -m-6 rounded-2xl"
                  glowColor="rgba(124, 58, 237, 0.08)"
                >
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="md:col-span-1">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest leading-relaxed block mt-1">
                        {exp.period}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role?.[lang] || exp.role?.pt || exp.role}
                        </h3>
                        <span className="text-zinc-500 text-sm">
                          @ {exp.company}
                        </span>
                      </div>
                      <p className="text-zinc-400 leading-relaxed mb-4 text-sm">
                        {exp.description?.[lang] ||
                          exp.description?.pt ||
                          exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, j) => (
                          <span
                            key={j}
                            className="px-2.5 py-1 text-[11px] font-mono border border-zinc-800 rounded-full text-zinc-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
