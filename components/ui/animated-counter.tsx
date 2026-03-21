"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [value, duration, count, isInView]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Years Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 25,
    suffix: "+",
    label: "Projects Completed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    value: 15,
    suffix: "+",
    label: "Happy Clients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function StatsSection() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="group relative"
        >
          <div className="relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl px-5 py-4 sm:px-6 sm:py-5 border border-slate-200/50 dark:border-slate-700/30 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 min-w-[140px] sm:min-w-[160px]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-purple-600 dark:text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>

            {/* Counter */}
            <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>

            {/* Label */}
            <div className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
