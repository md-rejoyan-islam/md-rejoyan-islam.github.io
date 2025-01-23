import { motion } from "framer-motion";

export default function MyEducation({
  education,
}: {
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
}) {
  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={edu.degree}
          className="bg-[var(--original-bg)] max-w-3xl mx-auto hover:border-[var(--primary-button)] border border-[#bedffd] rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <h4 className="text-xl font-semibold mb-2 text-gray-800">
            {edu.degree}
          </h4>
          <p className="text-[var(--primary-button)] mb-2">{edu.school}</p>
          <p className="text-sm text-gray-600">{edu.year}</p>
        </motion.div>
      ))}
    </div>
  );
}
