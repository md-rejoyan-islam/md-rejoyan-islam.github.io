"use client";

import { motion } from "framer-motion";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LetterPullup({
  className = "",
  words,
  delay,
}: {
  className?: string;
  words: string;
  delay?: number;
}) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className=" inline-flex justify-center ">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={cn(
            "font-display  tracking-[-0.02em]  drop-shadow-sm  ",
            className
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
