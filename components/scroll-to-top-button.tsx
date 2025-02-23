"use client";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const opacity = useSpring(scrollY, { stiffness: 100, damping: 20 });
  const [pagePercentage, setPagePercentage] = useState(0);

  useMotionValueEvent(opacity, "change", (value) => {
    const pageY =
      typeof window !== "undefined" &&
      document?.documentElement?.scrollHeight - window.innerHeight;
    controls.start({ opacity: value / 100 });
    const percentage = Math.round(
      (Math.floor(value) / Math.floor(pageY ? pageY : 1)) * 100
    );
    if (pagePercentage !== percentage) {
      setPagePercentage(percentage);
    }
  });

  return (
    <motion.div
      className="fixed bottom-10 right-10 progress-bar z-[1000]"
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="animate-bounce text-primary   rounded-full  relative p-1.5"
          style={{
            backgroundImage: `conic-gradient(#0d7ded ${pagePercentage}%, rgb(215,215,215) ${pagePercentage}%)`,
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-4xl bg-white text-[var(--primary-button)]  rounded-full p-1.5" />
        </button>
      </div>
    </motion.div>
  );
}
