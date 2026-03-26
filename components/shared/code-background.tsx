"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const leftCode = `import { createApp } from 'react';
import { Server } from 'express';

const portfolio = {
  name: "Rejoyan",
  role: "Full Stack Dev",
  skills: [
    "React", "Next.js",
    "Node.js", "TypeScript"
  ],
  available: true
};

async function buildProject() {
  const ideas = await brainstorm();
  const code = transform(ideas);
  const product = deploy(code);
  return success(product);
}

// Let's build something amazing!
export default portfolio;`;

const rightCode = `interface Project {
  id: string;
  title: string;
  tech: string[];
  status: "live" | "dev";
}

const projects: Project[] = [
  {
    id: "001",
    title: "E-Commerce",
    tech: ["Next.js", "Stripe"],
    status: "live"
  },
  {
    id: "002",
    title: "Dashboard",
    tech: ["React", "D3.js"],
    status: "live"
  }
];

function getProjects() {
  return projects.filter(p =>
    p.status === "live"
  );
}`;

function TypingCode({
  code,
  delay,
  typingSpeed = 40,
  pauseTime = 4000,
  isDark,
}: {
  code: string;
  delay: number;
  typingSpeed?: number;
  pauseTime?: number;
  isDark: boolean;
}) {
  // Start with initial code already displayed (first 50% of code)
  const initialLength = Math.floor(code.length * 0.5);
  const [displayedCode, setDisplayedCode] = useState(
    code.slice(0, initialLength)
  );
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialLength);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setIsDeleting(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTyping();
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, startTyping]);

  useEffect(() => {
    if (!isTyping && !isDeleting) return;

    const deletingSpeed = 20;

    if (isTyping) {
      if (currentIndex < code.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode(code.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    }

    if (isDeleting) {
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedCode(code.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [isTyping, isDeleting, currentIndex, code, typingSpeed, pauseTime]);

  const lines = displayedCode.split("\n");

  return (
    <pre
      className={`text-[14px] sm:text-[10px] lg:text-xs font-mono leading-tight lg:leading-relaxed max-h-[200px] lg:max-h-[350px] overflow-hidden ${isDark ? "text-slate-300" : "text-slate-600"}`}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex">
          <span
            className={`select-none mr-2 lg:mr-3 w-3 lg:w-4 text-right flex-shrink-0 ${isDark ? "text-slate-500" : "text-slate-400"}`}
          >
            {lineIndex + 1}
          </span>
          <span className="flex-1">{line}</span>
          {lineIndex === lines.length - 1 && isTyping && (
            <span
              className={`w-1.5 lg:w-2 h-3 lg:h-4 ml-0.5 animate-pulse flex-shrink-0 ${isDark ? "bg-indigo-400" : "bg-indigo-500"}`}
            />
          )}
        </div>
      ))}
    </pre>
  );
}

export function CodeBackground() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkTheme = () => {
      const html = document.documentElement;
      const isDarkMode = html.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Left side code block - top left area */}
      <div className="opacity-50 lg:opacity-100">
      <motion.div
        initial={{ opacity: 0, x: -80, y: -30, rotate: -5 }}
        animate={{ opacity: isDark ? 0.2 : 0.15, x: 0, y: 0, rotate: -5 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-2 lg:left-4 top-[20%] lg:top-[15%]"
      >
        <motion.div
          className={`relative rounded-xl lg:rounded-2xl p-3 lg:p-5 backdrop-blur-sm shadow-2xl max-w-[200px] lg:max-w-none border ${
            isDark
              ? "bg-slate-800/70 border-slate-500/30"
              : "bg-white/80 border-slate-200/60"
          }`}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Window header */}
          <div className="flex items-center gap-1 lg:gap-2 mb-2 lg:mb-4">
            <div className="flex gap-1 lg:gap-1.5">
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-red-500/80" />
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-yellow-500/80" />
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-green-500/80" />
            </div>
            <span
              className={`text-[14px] lg:text-xs ml-1 lg:ml-2 ${isDark ? "text-slate-500" : "text-slate-400"}`}
            >
              portfolio.ts
            </span>
          </div>

          {/* Typing code content */}
          <TypingCode
            code={leftCode}
            delay={500}
            typingSpeed={25}
            pauseTime={5000}
            isDark={isDark}
          />
        </motion.div>
      </motion.div>
      </div>

      {/* Right side code block - bottom right area */}
      <div className="opacity-50 lg:opacity-100">
      <motion.div
        initial={{ opacity: 0, x: 80, y: 30, rotate: 5 }}
        animate={{ opacity: isDark ? 0.2 : 0.15, x: 0, y: 0, rotate: 5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-2 lg:right-4 bottom-[20%] lg:bottom-[15%]"
      >
        <motion.div
          className={`relative rounded-xl lg:rounded-2xl p-3 lg:p-5 backdrop-blur-sm shadow-2xl max-w-[200px] lg:max-w-none border ${
            isDark
              ? "bg-slate-800/70 border-slate-500/30"
              : "bg-white/80 border-slate-200/60"
          }`}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Window header */}
          <div className="flex items-center gap-1 lg:gap-2 mb-2 lg:mb-4">
            <div className="flex gap-1 lg:gap-1.5">
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-red-500/80" />
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-yellow-500/80" />
              <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-green-500/80" />
            </div>
            <span
              className={`text-[14px] lg:text-xs ml-1 lg:ml-2 ${isDark ? "text-slate-500" : "text-slate-400"}`}
            >
              projects.ts
            </span>
          </div>

          {/* Typing code content */}
          <TypingCode
            code={rightCode}
            delay={3000}
            typingSpeed={30}
            pauseTime={3000}
            isDark={isDark}
          />
        </motion.div>
      </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-[10%] hidden 2xl:block"
      >
        <span
          className={`text-8xl font-bold ${isDark ? "text-indigo-400/20" : "text-indigo-500/20"}`}
        >
          {"{ }"}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-20 right-[10%] hidden 2xl:block"
      >
        <span
          className={`text-7xl font-bold ${isDark ? "text-purple-400/20" : "text-purple-500/20"}`}
        >
          &lt;/&gt;
        </span>
      </motion.div>
    </div>
  );
}
