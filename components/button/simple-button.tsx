import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SimpleButton({
  children,
  className,
  onClick,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly onClick?: () => void;
}) {
  return (
    <motion.button
      className={cn(
        "px-6 py-3 text-sm rounded-full bg-gradient-to-r from-[var(--gradient-button-from)] to-[var(--gradient-button-to)] hover:from-[var(--gradient-button-to)] hover:to-[var(--gradient-button-from)]   text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function SimpleButtonWithoutBg({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <button className="px-6 py-3 text-sm rounded-full border border-[var(--primary-button)]  hover:bg-gradient-to-r from-[var(--gradient-button-to)] hover:to-[var(--gradient-button-from)]  text-[var(--primary-text)]  hover:text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
      {children}
    </button>
  );
}
