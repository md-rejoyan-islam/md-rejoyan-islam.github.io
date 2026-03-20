import clsx from "clsx";
import { motion } from "framer-motion";

export default function GlowBtn({
  icon,
  label,
  onClick,
  className,
  iconPosition = "left",
}: {
  readonly icon?: React.ReactNode;
  readonly label?: string;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly iconPosition?: "left" | "right";
}) {
  return (
    <motion.button
      className={clsx(
        "group relative px-6 py-3 rounded-xl font-bold text-sm sm:text-base overflow-hidden hover:animate-pulse-glow",
        className
      )}
      onClick={() => onClick?.()}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient border/background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500" />

      {/* Glow effect - only visible on hover */}
      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500" />

      {/* Inner background - light/dark mode support */}
      <div className="absolute inset-[2px] bg-white/95 dark:bg-slate-900/90 rounded-[10px]" />

      {/* Content */}
      <span className="relative flex items-center gap-2 text-[#292875] dark:text-white">
        {icon && iconPosition === "left" && <span>{icon}</span>}
        {label}
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </span>
    </motion.button>
  );
}
