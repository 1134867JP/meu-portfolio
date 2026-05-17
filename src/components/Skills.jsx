import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

const skills = {
  Backend: [
    "Laravel",
    "PHP",
    "REST APIs",
    "Filament",
    "Node.js",
  ],

  Frontend: [
    "React",
    "Inertia.js",
    "JavaScript",
    "Tailwind CSS",
    "Vite",
  ],

  Database: [
    "PostgreSQL",
    "PLpgSQL",
    "SQLite",
    "Query Optimization",
  ],

  DevOps: [
    "Docker",
    "Linux",
    "Bash",
    "Git",
  ],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Skills() {
  const { copy } = useLanguage();

  return (
    <section
      id="skills"
      className="relative py-14 md:py-24 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 md:mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-gradient-to-r from-lime-400 to-emerald-400" />
          [ {copy.skills.label} ]
        </motion.p>

        {/* Description */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-4 md:mb-5">
            {copy.skills.heading}
          </h2>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            {copy.skills.description}
          </p>
        </motion.div>

        {/* Skills */}
        <div className="space-y-8 md:space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-zinc-700" />

                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {copy.skills.categories[category] || category}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={tagVariants}
                    whileHover={{
                      y: -2,
                      scale: 1.04,
                      transition: { duration: 0.2 },
                    }}
                    className="
                      px-4 py-2 rounded-full
                      border border-emerald-500/15
                      bg-emerald-500/[0.03]
                      backdrop-blur-sm
                      text-sm text-zinc-200
                      hover:border-emerald-400/30
                      hover:bg-emerald-500/[0.06]
                      transition-all duration-300
                      cursor-default
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
