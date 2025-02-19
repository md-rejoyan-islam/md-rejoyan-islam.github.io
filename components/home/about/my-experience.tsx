import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
export default function MyExperience({
  experiences,
}: {
  experiences: {
    title: string;
    company: string;
    period: string;
  }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          className="bg-[var(--original-bg)] w-full mx-auto dark:bg-[#111832]/60 dark:border-[#0d7ded26]  hover:border-[var(--primary-button)] border border-[#bed2fd]  dark:hover:border-[#0d7ded6d] rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2, delay: 0 },
          }}
        >
          <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-[#d1dae4] flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            {exp.title}
          </h4>
          <p className="text-[var(--primary-button)] mb-2  flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {exp.company}
          </p>
          <p className="text-sm text-gray-600 dark:text-[#95a1c0] flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {exp.period}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
