"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const techIcons = [
  { name: "React", icon: "/icons/react.webp", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: "/icons/nextjs.webp", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: "/icons/typescript.webp", color: "from-blue-500 to-blue-700" },
  { name: "Node.js", icon: "/icons/node.webp", color: "from-green-500 to-emerald-600" },
  { name: "MongoDB", icon: "/icons/mongodb.webp", color: "from-green-400 to-green-600" },
  { name: "Docker", icon: "/icons/docker.webp", color: "from-blue-400 to-cyan-500" },
  { name: "Python", icon: "/icons/python.webp", color: "from-yellow-400 to-blue-500" },
  { name: "Git", icon: "/icons/git.webp", color: "from-orange-500 to-red-500" },
  { name: "TailwindCSS", icon: "/icons/tailwind.webp", color: "from-cyan-400 to-teal-500" },
  { name: "GraphQL", icon: "/icons/graphql.webp", color: "from-pink-500 to-purple-600" },
  { name: "Redux", icon: "/icons/redux.webp", color: "from-purple-500 to-violet-600" },
  { name: "Prisma", icon: "/icons/prisma.webp", color: "from-slate-600 to-slate-800" },
];

const floatingIcons = [
  { name: "JavaScript", icon: "/icons/js.webp", delay: 0 },
  { name: "Express", icon: "/icons/expressjs.webp", delay: 0.2 },
  { name: "MySQL", icon: "/icons/mysql.webp", delay: 0.4 },
  { name: "Firebase", icon: "/icons/firebase.webp", delay: 0.6 },
  { name: "GitHub", icon: "/icons/github.webp", delay: 0.8 },
  { name: "Linux", icon: "/icons/linux.webp", delay: 1 },
];

export function AnimatedIconShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techIcons.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  const currentIcon = techIcons[currentIndex];
  const nextIcon = techIcons[(currentIndex + 1) % techIcons.length];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main showcase card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        {/* Background gradient */}
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />

        {/* Main card */}
        <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
          {/* Top decorative bar */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />

          {/* Main icon display */}
          <div className="flex flex-col items-center">
            {/* Large animated icon */}
            <div className="relative w-32 h-32 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.5, rotate: 10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${currentIcon.color} p-[3px] shadow-lg`}>
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center">
                      <Image
                        src={currentIcon.icon}
                        alt={currentIcon.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-dashed border-indigo-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Tech name */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentIcon.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold text-slate-800 dark:text-white mb-4"
              >
                {currentIcon.name}
              </motion.h3>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mb-6">
              {techIcons.slice(0, 6).map((_, idx) => (
                <motion.div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex % 6
                      ? "bg-indigo-500 w-6"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                />
              ))}
            </div>

            {/* Next up preview */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50">
              <span className="text-[14px] text-slate-500 dark:text-slate-400">Next:</span>
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 p-[1px]">
                <div className="w-full h-full rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center">
                  <Image
                    src={nextIcon.icon}
                    alt={nextIcon.name}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 object-contain"
                  />
                </div>
              </div>
              <span className="text-[14px] font-medium text-slate-600 dark:text-slate-300">{nextIcon.name}</span>
            </div>
          </div>
        </div>

        {/* Floating mini icons around the card */}
        {floatingIcons.map((item, index) => {
          const positions = [
            { top: "-10%", left: "10%" },
            { top: "5%", right: "-5%" },
            { top: "40%", left: "-8%" },
            { top: "50%", right: "-10%" },
            { bottom: "10%", left: "5%" },
            { bottom: "-5%", right: "15%" },
          ];
          const pos = positions[index];

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + item.delay, duration: 0.4 }}
              className="absolute hidden lg:block"
              style={pos}
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200/50 dark:border-slate-700/50 p-2 flex items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
