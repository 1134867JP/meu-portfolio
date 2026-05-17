import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "../i18n";

function AnimatedCounter({ target, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2, suffix: "+", key: "devYears" },
  { value: 8, suffix: "+", key: "proYears" },
  { value: 12, suffix: "+", key: "stackCount" },
  { value: 21, suffix: "", key: "age" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { copy } = useLanguage();

  return (
    <section id="sobre" className="py-16 md:py-32 px-6 lg:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8 md:mb-16 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-gradient-to-r from-lime-400 to-emerald-400" />
          [ {copy.about.label} ]
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Bio */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 leading-snug"
            >
              {copy.about.titleBefore}
              <span className="gradient-text font-semibold">
                {copy.about.titleHighlight}
              </span>
              {copy.about.titleAfter}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base md:text-lg leading-relaxed mb-5"
            >
              {copy.about.p1Before}
              <span className="text-white font-medium">
                {copy.about.p1Highlight}
              </span>
              {copy.about.p1After}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base leading-relaxed mb-5"
            >
              {copy.about.p2}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-zinc-500 text-base leading-relaxed"
            >
              {copy.about.p3}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 h-px bg-gradient-to-r from-lime-400/30 via-emerald-400/30 to-transparent"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="stat-card rounded-2xl p-6"
              >
                <div className="text-4xl font-black tracking-tighter gradient-text mb-2">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-zinc-500 font-light leading-snug">
                  {copy.about.stats[s.key]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
