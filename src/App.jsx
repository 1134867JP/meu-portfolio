import { useEffect, useState } from "react";
import { LanguageProvider } from "./i18n";
import Splash from "./components/Splash";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactStrip from "./components/ImpactStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;

const PARTICLE_DATA = (() => {
  const colors = ["#7dff7a", "#23d686", "#4dff9a", "#1fd67a", "#9bff6b"];
  return Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${(i * 4.7 + 3) % 100}%`,
    size: (i % 4) + 1.5,
    delay: (i * 2.3) % 15,
    duration: 18 + ((i * 1.7) % 20),
    color: colors[i % colors.length],
  }));
})();

function Particles() {
  return (
    <div className="particles-container" aria-hidden="true">
      {PARTICLE_DATA.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    let ticking = false;
    const handleMouseMove = (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePos({ x: event.clientX, y: event.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 0;
  const viewportHeight =
    typeof window !== "undefined" ? window.innerHeight : 0;

  return (
    <LanguageProvider>
      <>
        <Splash />

        <div className="noise-overlay" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(125, 255, 122, 0.1) 0%, transparent 42%),
              radial-gradient(circle at ${viewportWidth - mousePos.x}px ${viewportHeight - mousePos.y}px, rgba(35, 214, 134, 0.08) 0%, transparent 45%)
            `,
          }}
        />
        <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
        <div className="ambient-glow ambient-glow-2" aria-hidden="true" />
        {!prefersReducedMotion && !isMobile && <Particles />}

        <CustomCursor />
        <ScrollProgress />
        <Header />

        <main className="relative z-10">
          <Hero />
          <ImpactStrip />

          <div className="section-divider mx-6 lg:mx-10" />
          <About />

          <div className="section-divider mx-6 lg:mx-10" />
          <Skills />

          <div className="section-divider mx-6 lg:mx-10" />
          <Projects />

          <div className="section-divider mx-6 lg:mx-10" />
          <Experience />

          <div className="section-divider mx-6 lg:mx-10" />
          <Contact />
        </main>
      </>
    </LanguageProvider>
  );
}
