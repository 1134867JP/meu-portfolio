import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { useLanguage } from "../i18n";

const revealVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

const AnimatedWord = ({ word, index, className = "" }) => (
  <div className="overflow-hidden inline-block mr-[0.22em] pb-1">
    <motion.span
      custom={index}
      variants={revealVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {word}
    </motion.span>
  </div>
);

export default function Hero() {
  const { copy } = useLanguage();
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 0.5], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const lineOne = copy.hero.lineOne;
  const lineTwo = copy.hero.lineTwo;
  const lineThree = copy.hero.lineThree;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-24 pb-14 overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,255,122,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(125,255,122,0.04) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Floating glyphs */}
      <div
        className="hero-glyph hero-glyph--brace hero-glyph--3d"
        data-glyph="{"
        aria-hidden="true"
      >
        {"{"}
      </div>
      <div
        className="hero-glyph hero-glyph--hash hero-glyph--3d"
        data-glyph="#"
        aria-hidden="true"
      >
        #
      </div>
      <div
        className="hero-glyph hero-glyph--slash hero-glyph--3d"
        data-glyph="/"
        aria-hidden="true"
      >
        /
      </div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 max-w-5xl mx-auto w-full text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6 flex items-center justify-center gap-3"
        >
          <span className="glow-dot inline-block" />
          {copy.hero.label}
        </motion.p>

        <h1 className="display-font text-[11vw] sm:text-[9vw] lg:text-[5.2rem] leading-[0.95] tracking-tight">
          <div className="flex flex-wrap justify-center">
            {lineOne.map((word, i) => (
              <AnimatedWord
                key={word}
                word={word}
                index={i}
                className="text-white"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {lineTwo.map((word, i) => (
              <AnimatedWord
                key={word}
                word={word}
                index={i + lineOne.length}
                className="text-white"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {lineThree.map((word, i) => (
              <AnimatedWord
                key={word}
                word={word}
                index={i + lineOne.length + lineTwo.length}
                className={
                  word === copy.hero.highlight
                    ? "gradient-text"
                    : "text-white/90"
                }
              />
            ))}
          </div>
        </h1>

        <motion.p
          custom={6}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto"
        >
          {copy.hero.description.intro}
          <span className="text-white font-medium">
            {copy.hero.description.highlight}
          </span>
          {copy.hero.description.outro}
        </motion.p>

        <motion.p
          custom={7}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="mt-3 text-sm text-zinc-500 font-light leading-relaxed"
        >
          {copy.hero.availability}
        </motion.p>

        <motion.div
          custom={9}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Magnetic strength={40}>
            <a
              href="#contato"
              className="cta-button inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-mono uppercase tracking-widest text-white w-fit"
            >
              <span className="relative z-10">{copy.hero.ctaPrimary}</span>
              <svg
                className="w-4 h-4 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic strength={20}>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors py-2"
            >
              {copy.hero.ctaSecondary}
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </Magnetic>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
            {copy.hero.scrollLabel}
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent"
            animate={{ scaleY: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
