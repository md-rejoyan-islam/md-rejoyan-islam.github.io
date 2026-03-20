"use client";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const opacity = useSpring(scrollY, { stiffness: 100, damping: 20 });
  const [pagePercentage, setPagePercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useMotionValueEvent(opacity, "change", (value) => {
    const pageY =
      typeof window !== "undefined" &&
      document?.documentElement?.scrollHeight - window.innerHeight;
    controls.start({ opacity: value / 100 });
    const percentage = Math.round(
      (Math.floor(value) / Math.floor(pageY || 1)) * 100
    );
    if (pagePercentage !== percentage) {
      setPagePercentage(percentage);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-20 md:bottom-10 right-4 md:right-8 z-[1000]"
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Outer glow - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute -inset-2 rounded-full bg-indigo-500/30 blur-xl"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Main container - smaller on mobile */}
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
            {/* Background track */}
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              strokeWidth="3"
              className="stroke-slate-200/80 dark:stroke-slate-700/80"
            />

            {/* Animated progress arc */}
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              className="stroke-indigo-500 dark:stroke-indigo-400"
              style={{
                strokeDasharray: `${2 * Math.PI * 24}`,
                strokeDashoffset: `${2 * Math.PI * 24 * (1 - pagePercentage / 100)}`,
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />
          </svg>

          {/* Inner circle */}
          <div className="absolute inset-1 md:inset-1.5 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-lg border border-slate-200/50 dark:border-slate-700/50">
            {/* Arrow icon */}
            <ChevronUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600 dark:text-slate-300" />
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}
