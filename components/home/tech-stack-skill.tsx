"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  category: string;
}

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-[#e8dbd6]",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-blue-500",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-yellow-500",
    category: "Frontend",
  },
  {
    name: "React",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-cyan-500",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-black",
    category: "Frontend",
  },
  {
    name: "Prisma",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-indigo-500",
    category: "Backend",
  },
  {
    name: "Sequelize",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-blue-600",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-green-500",
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-blue-400",
    category: "Backend",
  },
  {
    name: "Express",
    icon: <FaHtml5 className="text-[#f76119] text-3xl" />,
    color: "bg-gray-600",
    category: "Backend",
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <Card
    className={`cursor-pointer transition-all backdrop-blur-sm bg-[#f5fcff] hover:bg-[#f2f8ff] duration-300  hover:border-[#7bc1fe] border border-[#cde7fe] shadow-none
    }`}
  >
    <CardContent className="p-4 flex flex-col items-center text-center">
      <div
        className={` rounded-xl text-white mb-3 h-12 w-12 flex items-center  justify-center bg-[#d6e1e8]`}
      >
        {skill.icon}
      </div>
      <h3 className="text-base font-semibold mb-1">{skill.name}</h3>
    </CardContent>
  </Card>
);

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#fbfdff] to-[#ebf5ff] relative ">
      <div className="w-full h-full absolute top-0 inset-x-0 bg-[url('/images/blur.png')] -z-10 opacity-10 "></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <HomeTittle label="My Tech Stack" />
          <HomeSubtittle
            className="max-w-3xl mx-auto"
            label="Here are the technologies and tools I specialize in to build seamless digital experiences."
          />
        </div>

        <div className="mt-8">
          <div className="flex justify-center mb-10 flex-wrap gap-2 sm:gap-2">
            {["All", "Frontend", "Backend"].map((category, index) => (
              <motion.button
                key={index}
                className={`flex items-center  text-xs sm:text-sm px-4 py-2 rounded-lg font-semibold mr-4 ${
                  filter === category
                    ? "bg-[#0d7ded] text-white"
                    : "bg-[#ebf5fe] text-[#001] border-[.5px] border-[#7dbff9] border-opacity-50"
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <tab.icon className="w-5 h-5 mr-2" /> */}
                {category}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filter === "All" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <SkillCard key={skill.name} skill={skill} />
                      {/* <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          className="bg-[#dd2466] h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        /> 
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              )}
              {filter === "Backend" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <SkillCard key={skill.name} skill={skill} />
                      {/* <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          className="bg-[#dd2466] h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        /> 
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              )}
              {filter === "Frontend" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <SkillCard key={skill.name} skill={skill} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
