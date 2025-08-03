import { motion } from "framer-motion";
import React from "react";
export default function MySkill({
  skills,
}: {
  readonly skills: {
    readonly name: string;
    readonly icon: React.ElementType;
    readonly level: number;
    readonly description: string;
    readonly tech: string;
  }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="bg-[var(--original-bg)] relative dark:bg-[#111832]/60 dark:backdrop-blur-md dark:border-[#0d7ded26] dark:hover:border-[#0d7ded6d]  hover:border-[var(--primary-button)] border  group border-[#bedffd] rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2, delay: 0 },
          }}
        >
          <div className="absolute w-full h-full inset-0 bg-teal-500/10 blur-xl rounded-xl scale-0 group-hover:scale-100  transition-transform duration-500"></div>
          <div className="flex items-center mb-3">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-3">
                <skill.icon className="w-7 h-7 text-[var(--primary-button)]" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-[#d1dae4]">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.tech}
                </p>
              </div>
            </div>
          </div>
          <p className="dark:text-[#95a1c0]">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
