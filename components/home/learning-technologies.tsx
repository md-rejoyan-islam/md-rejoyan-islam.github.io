"use client";
import { motion } from "framer-motion";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";
import Image from "next/image";

const technologies = [
  { name: "TailwindCSS", icon: "/icons/tailwind.webp" },
  { name: "JavaScript", icon: "/icons/js.webp" },
  { name: "TypeScript", icon: "/icons/typescript.webp" },
  { name: "React", icon: "/icons/react.webp" },
  { name: "Next.js", icon: "/icons/nextjs.webp" },
  { name: "Express", icon: "/icons/expressjs.webp" },
  { name: "Prisma", icon: "/icons/prisma.webp" },
  { name: "MongoDB", icon: "/icons/mongodb.webp" },
  { name: "Docker", icon: "/icons/docker.webp" },
  { name: "Linux", icon: "/icons/linux.webp" },
  { name: "Redux", icon: "/icons/redux.webp" },
  { name: "Git", icon: "/icons/git.webp" },
  { name: "GitHub", icon: "/icons/github.webp" },
  { name: "Jenkins", icon: "/icons/jenkins.webp" },
  { name: "MySQL", icon: "/icons/mysql.webp" },
  { name: "Sequelize", icon: "/icons/sequelize.webp" },
  { name: "Vitest", icon: "/icons/vitest.webp" },
  { name: "Nginx", icon: "/icons/nginx.webp" },
  { name: "GraphQL", icon: "/icons/graphql.webp" },
  { name: "Python", icon: "/icons/python.webp" },
  { name: "Firebase", icon: "/icons/firebase.webp" },
  { name: "Bootstrap", icon: "/icons/bootstrap.webp" },
];

export default function LearningTechnologies() {
  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12 space-y-2 sm:space-y-4"
        >
          <HomeTittle label="Tech Stack" />
          <HomeSubtittle label="Technologies and tools I use to build seamless digital experiences" />
        </motion.div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="premium-card p-2 sm:p-4 text-center">
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-1 sm:mb-3 rounded-lg sm:rounded-xl bg-slate-100 dark:bg-slate-800/80 p-1.5 sm:p-2.5 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-all duration-300">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[14px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
