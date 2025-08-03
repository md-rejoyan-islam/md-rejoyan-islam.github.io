import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

export default function MyEducation({
  education,
}: {
  readonly education: {
    readonly degree: string;
    readonly school: string;
    readonly year: string;
  }[];
}) {
  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={edu.degree}
          className="bg-[var(--original-bg)] relative group dark:bg-[#111832]/60 dark:border-[#0d7ded26] max-w-3xl mx-auto hover:border-[var(--primary-button)] border border-[#bedffd] rounded-xl dark:hover:border-[#0d7ded6d]  p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2, delay: 0 },
          }}
        >
          <div className="absolute w-full h-full inset-0 bg-teal-500/10 blur-xl rounded-xl scale-0 group-hover:scale-100  transition-transform duration-500"></div>
          <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-[#d1dae4] flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            {edu.degree}
          </h4>
          <p className="text-[var(--primary-button)] mb-2">{edu.school}</p>
          <p className="text-sm text-gray-600 dark:text-[#95a1c0] flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {edu.year}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
