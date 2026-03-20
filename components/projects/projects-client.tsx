"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projects as projectsData, filterKeys } from "@/data/projects";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState(projectsData);

  const handleFilter = (filterName: string) => {
    setActiveFilter(filterName);
    if (filterName === "All") {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(filterName.toLowerCase())
        )
      );
      setProjects(filtered);
    }
  };

  return (
    <div className="min-h-screen pt-4 sm:pt-24 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 mb-3 sm:mb-6"
          >
            <Folder className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-[10px] sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Portfolio
            </span>
          </motion.div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            My Projects
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-xs sm:text-base md:text-lg px-2">
            A collection of projects that showcase my skills in full-stack
            development, from web applications to automation solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-12"
        >
          {filterKeys.map((filter) => (
            <button
              key={filter.name}
              onClick={() => handleFilter(filter.name)}
              className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.name
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700/50"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="h-full"
            >
              <CardContainer
                className="inter-var h-full"
                containerClassName="h-full w-full"
              >
                <CardBody className="relative group/card bg-white dark:bg-slate-900/90 dark:border-slate-700/50 border-slate-200/80 w-full h-full rounded-xl sm:rounded-2xl p-0 border overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none">
                  {/* 3D Image Section */}
                  <CardItem
                    translateZ={50}
                    className="w-full relative overflow-hidden rounded-t-xl sm:rounded-t-2xl"
                  >
                    <div className="relative h-36 sm:h-48 overflow-hidden">
                      <Image
                        src={project.banner}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      {/* Gradient overlay - Light mode uses indigo, dark mode uses slate */}
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/40 to-transparent dark:from-slate-900/80 dark:via-slate-900/40 dark:to-transparent opacity-0 sm:opacity-0 sm:group-hover/card:opacity-100 transition-all duration-300" />

                      {/* Links - Always visible on mobile, hover on desktop */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 opacity-100 sm:opacity-0 sm:group-hover/card:opacity-100 transition-all duration-300 translate-y-0 sm:translate-y-4 sm:group-hover/card:translate-y-0">
                        {project.links.map((link) => (
                          <CardItem
                            key={link.href}
                            translateZ={80}
                            as="a"
                            href={link.href}
                            target="_blank"
                            aria-label={`${link.name} link for ${project.name}`}
                            rel="noopener noreferrer"
                            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                          >
                            {link.name === "Preview" ? (
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            ) : link.name === "Server" ? (
                              <Folder className="w-3 h-3 sm:w-4 sm:h-4" />
                            ) : (
                              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                            )}
                          </CardItem>
                        ))}
                      </div>
                    </div>
                  </CardItem>

                  {/* Content Section */}
                  <div className="p-3 sm:p-5 relative">
                    {/* Title */}
                    <CardItem translateZ={60} className="w-full mb-1 sm:mb-2">
                      <h3 className="text-sm sm:text-xl font-bold text-slate-900 dark:text-white group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                    </CardItem>

                    {/* Description */}
                    <CardItem translateZ={40} className="w-full mb-2 sm:mb-4">
                      <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </CardItem>

                    {/* Tech Stack - All tags */}
                    <CardItem translateZ={30} className="w-full">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-xs rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-slate-300 font-medium border border-indigo-100 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardItem>
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 sm:py-20"
          >
            <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center">
              <Folder className="w-5 h-5 sm:w-8 sm:h-8 text-slate-400" />
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">
              No projects found
            </h3>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">
              Try selecting a different filter
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
