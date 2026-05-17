import { useEffect, useState } from "react";
import { LanguageProvider } from "./i18n";
import Splash from "./components/Splash";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Stable particle data — generated once, never re-randomized
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
    <div className="particles-container">
      {PARTICLE_DATA.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only track mouse if hover is supported
    if (!window.matchMedia("(hover: hover)").matches) return;

    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <LanguageProvider>
      <>
        <Splash />

        {/* Global overlays & Mesh Gradient */}
        <div className="noise-overlay" />
        <div
          className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(125, 255, 122, 0.1) 0%, transparent 42%),
              radial-gradient(circle at ${window.innerWidth - mousePos.x}px ${window.innerHeight - mousePos.y}px, rgba(35, 214, 134, 0.08) 0%, transparent 45%)
            `,
          }}
        />
        <div className="ambient-glow ambient-glow-1" />
        <div className="ambient-glow ambient-glow-2" />
        <Particles />

        {/* Cursor & progress — only renders on hover-capable devices via CSS */}
        <CustomCursor />
        <ScrollProgress />

        {/* Layout */}
        <Header />

        <main className="relative z-10">
          <Hero />

          {/* Divider */}
          <div className="section-divider mx-6 lg:mx-10" />

          <About />

          {/* Divider */}
          <div className="section-divider mx-6 lg:mx-10" />

          <Skills />

          {/* Divider */}
          <div className="section-divider mx-6 lg:mx-10" />

          <Projects />

          {/* Divider */}
          <div className="section-divider mx-6 lg:mx-10" />

          <Experience />

          {/* Divider */}
          <div className="section-divider mx-6 lg:mx-10" />

          <Contact />
        </main>
      </>
    </LanguageProvider>
  );
}
