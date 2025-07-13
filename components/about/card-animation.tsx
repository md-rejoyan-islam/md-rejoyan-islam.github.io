"use client";
import { motion } from "framer-motion";
const CardAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.1, delay: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
