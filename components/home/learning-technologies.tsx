"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

const technologies = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/nextjs.png" },
  { name: "Prisma", icon: "/icons/prisma.png" },
  { name: "TailwindCSS", icon: "/icons/tailwind.png" },
  { name: "GraphQL", icon: "/icons/graphql.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "Vitest", icon: "/icons/vitest.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Express", icon: "/icons/expressjs.png" },
  { name: "Firebase", icon: "/icons/firebase.webp" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "Redux", icon: "/icons/redux.png" },
];

export default function LearningTechnologies() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <HomeTittle label="My Tech Stack" />
          <HomeSubtittle label="Here are the technologies and tools I specialize in to build seamless digital experiences." />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden  rounded-xl "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 ">
                <div className="text-center space-y-3">
                  <div className="text-3xl">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="mx-auto p-1.5 sm:p-2 bg-gray-500/10 rounded-md w-12 sm:w-[55px] h-12  sm:h-[55px] "
                    />
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-[#292875]">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
