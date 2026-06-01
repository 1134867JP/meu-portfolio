import { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

// Only show custom cursor on pointer-capable devices
const canHover = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rawX = useRef(-200);
  const rawY = useRef(-200);

  const springConfig = { stiffness: 350, damping: 30, mass: 0.4 };
  const x = useSpring(-200, springConfig);
  const y = useSpring(-200, springConfig);

  useEffect(() => {
    if (!canHover()) return;
    setMounted(true);

    const onMove = (e) => {
      rawX.current = e.clientX;
      rawY.current = e.clientY;
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const attachListeners = (root) => {
      root.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        if (el.__cursorBound) return;
        el.__cursorBound = true;
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", onMove);
    attachListeners(document);

    const observer = new MutationObserver(() => attachListeners(document));
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, [x, y]);

  if (!mounted) return null;

  const size = hovered ? 64 : 40;
  const offset = size / 2;

  return (
    <motion.div
      className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-emerald-400/40 bg-emerald-400/[0.02]"
      style={{
        x,
        y,
        translateX: `-${offset}px`,
        translateY: `-${offset}px`,
        width: size,
        height: size,
        scale: hovered ? 1.25 : 1,
        borderColor: hovered ? "rgba(35, 214, 134, 0.6)" : "rgba(255, 255, 255, 0.2)",
        transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), scale 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
      }}
    />
  );
}
