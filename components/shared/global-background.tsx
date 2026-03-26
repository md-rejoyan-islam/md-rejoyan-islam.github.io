"use client";
import { useEffect, useState } from "react";
import { CodeBackground } from "./code-background";

interface Particle {
  id: number;
  delay: number;
  duration: number;
  size: number;
  left: number;
  top: number;
}

function Particle({ delay, duration, size, left, top, isDark }: {
  delay: number;
  duration: number;
  size: number;
  left: number;
  top: number;
  isDark: boolean;
}) {
  return (
    <div
      className="absolute rounded-full opacity-0"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        background: isDark
          ? `radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)`
          : `radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(79, 70, 229, 0.3) 50%, transparent 100%)`,
        boxShadow: isDark
          ? `0 0 ${size * 2}px rgba(139, 92, 246, 0.5)`
          : `0 0 ${size * 2}px rgba(99, 102, 241, 0.4)`,
        animation: `float-particle ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export function GlobalBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
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
        {/* Base background */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#08080f]" />

        {/* Interactive gradient following mouse */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            background: isDark
              ? `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`
              : `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.06), transparent 80%)`,
          }}
        />

        {/* Left side gradient */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none z-0">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/8 to-pink-500/5 dark:from-indigo-500/15 dark:via-purple-500/10 dark:to-pink-500/8 blur-[100px]" />
        </div>

        {/* Right side gradient */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none z-0">
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-cyan-500/10 via-blue-500/8 to-indigo-500/6 dark:from-cyan-500/25 dark:via-blue-500/20 dark:to-indigo-500/15 blur-[100px]" />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <Particle key={p.id} {...p} isDark={isDark} />
          ))}
        </div>

        {/* Code Background */}
        <CodeBackground />
      </div>
    </>
  );
}
