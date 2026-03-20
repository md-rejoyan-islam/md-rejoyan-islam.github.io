"use client";
import { useEffect, useRef, useCallback, useState } from "react";

interface Particle {
  id: number;
  delay: number;
  duration: number;
  size: number;
  left: number;
  top: number;
}

// Particle component for background effect
function Particle({ delay, duration, size, left, top }: {
  delay: number;
  duration: number;
  size: number;
  left: number;
  top: number;
}) {
  return (
    <div
      className="absolute rounded-full opacity-0"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        background: `radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)`,
        boxShadow: `0 0 ${size * 2}px rgba(139, 92, 246, 0.5)`,
        animation: `float-particle ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export function ParticleBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Detect theme changes
  useEffect(() => {
    setMounted(true);
    const checkTheme = () => {
      const html = document.documentElement;
      const isDarkMode = html.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate particles
  const particles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 20,
    size: 2 + Math.random() * 6,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  if (!mounted) return null;

  return (
    <>
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float-particle {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          10% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-100vh) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) scale(0);
          }
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Interactive background gradient following mouse */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            background: isDark
              ? `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`
              : `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.3), transparent 80%)`,
          }}
        />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <Particle key={p.id} {...p} />
          ))}
        </div>
      </div>
    </>
  );
}
