import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n";

export default function Splash() {
  const [isVisible, setIsVisible] = useState(true);
  const { copy } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-px w-64 bg-gradient-to-r from-lime-400 to-emerald-400 origin-left"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 font-mono text-xs uppercase tracking-[0.5em] text-zinc-400 flex items-center gap-3"
            >
              <span className="glow-dot" />
              {copy.splash.loading}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
