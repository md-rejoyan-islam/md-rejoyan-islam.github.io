import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Process {
  icon: ReactNode;
  title: string;
  sort_description: string;
}

interface StepContentProps {
  step: number;
  direction: number;
  processes: Process[];
}

const variants = {
  enter: () => ({
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => ({
    zIndex: 0,
    opacity: 0,
  }),
};

export function StepContent({ step, direction, processes }: StepContentProps) {
  const content = processes[step];

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="absolute w-full"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center"
        >
          {content.icon}
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-center text-gray-800"
        >
          {content.title}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center max-w-2xl mx-auto "
        >
          {content.sort_description}
        </motion.p>
      </div>
    </motion.div>
  );
}
