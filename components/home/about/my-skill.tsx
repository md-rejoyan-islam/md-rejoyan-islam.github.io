import { motion } from "framer-motion";
import React from "react";
export default function MySkill({
  skills,
}: {
  skills: {
    name: string;
    icon: React.ElementType;
    level: number;
    description: string;
  }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="bg-[var(--original-bg)] hover:border-[var(--primary-button)] border border-[#bedffd] rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-center mb-4">
            <skill.icon className="w-8 h-8 text-[var(--primary-button)] mr-3" />
            <h4 className="text-xl font-semibold text-gray-800">
              {skill.name}
            </h4>
          </div>
          <p>{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
