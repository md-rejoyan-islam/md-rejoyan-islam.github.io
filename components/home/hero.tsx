"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FlipWords } from "../ui/flip-words";

// Animated Counter Component
function AnimatedCounter({
  value,
  suffix = "+",
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const router = useRouter();

  const words = [
    "MERN Stack Developer",
    "Next.js Expert",
    "Python Data Analyst",
    "n8n Automation Expert",
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/REJOYAN_RESUME.pdf";
    link.download = "REJOYAN_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { value: 2, label: "Years of Experience" },
    { value: 20, label: "Total Projects" },
    { value: 15, label: "Happy Clients" },
    { value: 5, label: "n8n Automations" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 sm:mb-6"
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-2 sm:mb-3 font-medium">
              Hello, I&apos;m
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">
              Md. Rejoyan Islam
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                <FlipWords
                  words={words}
                  className="text-indigo-600 dark:text-indigo-400"
                />
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 sm:px-0"
          >
            I build full-stack web apps with MERN & Next.js, uncover insights through Python & Data Science, and automate business workflows with n8n — delivering complete, production-ready solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12"
          >
            {/* View Projects Button */}
            <motion.button
              onClick={() => router.push("#projects")}
              className="group relative px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base overflow-hidden animate-pulse-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Light mode: Solid gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 dark:hidden rounded-lg sm:rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-xl opacity-50 group-hover:opacity-80 dark:hidden transition-opacity" />
              {/* Dark mode: Gradient border with dark inner */}
              <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg sm:rounded-xl" />
              <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0.5 hidden dark:block bg-slate-900/90 rounded-lg sm:rounded-xl" />
              <span className="relative flex items-center gap-1.5 sm:gap-2 text-white">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                View Projects
              </span>
            </motion.button>

            {/* Download Resume Button */}
            <motion.button
              onClick={handleDownload}
              className="group relative px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Light mode: Border + light background */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-indigo-200 group-hover:border-indigo-400 transition-colors dark:hidden" />
              <div className="absolute inset-[2px] rounded-[6px] sm:rounded-[10px] bg-indigo-50 group-hover:bg-indigo-100 transition-colors dark:hidden" />
              <span className="relative flex items-center gap-1.5 sm:gap-2 text-indigo-700 group-hover:text-indigo-800 transition-colors dark:hidden">
                <IoMdDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Download Resume
              </span>
              {/* Dark mode: Gradient border with dark inner */}
              <div className="absolute inset-0 hidden dark:block rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
              <div className="absolute inset-[2px] hidden dark:block rounded-[6px] sm:rounded-[10px] bg-slate-900 group-hover:bg-slate-800 transition-colors" />
              <span className="relative hidden dark:flex items-center gap-1.5 sm:gap-2 text-slate-300 group-hover:text-indigo-400 transition-colors">
                <IoMdDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Download Resume
              </span>
            </motion.button>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-16 sm:w-24 h-px bg-slate-300 dark:bg-slate-700 mx-auto mb-8 sm:mb-12"
          />

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 1.1 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-0.5 sm:mb-1">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
