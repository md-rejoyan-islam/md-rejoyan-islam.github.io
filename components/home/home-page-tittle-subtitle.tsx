"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

export function HomeTittle({
  label,
  className,
}: {
  readonly label: string;
  readonly className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={clsx("text-center", className)}
    >
      <h2 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-indigo-600 dark:text-white">
        {label}
      </h2>
    </motion.div>
  );
}

export function HomeSubtittle({
  label,
  className,
}: {
  readonly label: string;
  readonly className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={clsx(
        "text-slate-600 dark:text-slate-400 text-[14px] sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4",
        className
      )}
    >
      {label}
    </motion.p>
  );
}
