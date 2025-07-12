import clsx from "clsx";
import { motion } from "framer-motion";

export function HomeTittle({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "text-3xl md:text-4xl font-bold text-[var(--primary-button)]",
        className
      )}
    >
      {label}
    </motion.h2>
  );
}
export function HomeSubtittle({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <p
      className={clsx("text-gray-600 dark:text-text-secondary px-4", className)}
    >
      {label}
    </p>
  );
}
