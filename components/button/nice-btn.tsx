import clsx from "clsx";
import { motion } from "framer-motion";

export default function NiceBtn({
  active,
  icon,
  label,
  onClick,
  className,
  iconPosition = "left",
}: {
  active?: boolean;
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
  iconPosition?: "left" | "right";
}) {
  return (
    <motion.button
      className={clsx(
        active
          ? "bg-[#0d7ded] text-white"
          : "bg-[#ebf5fe] text-[#292875] border-[.5px] border-[#7dbff9] border-opacity-50",
        "flex items-center text-xs sm:text-sm px-4 py-2 rounded-lg font-semibold",
        className
      )}
      onClick={() => onClick && onClick()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {label}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
}
