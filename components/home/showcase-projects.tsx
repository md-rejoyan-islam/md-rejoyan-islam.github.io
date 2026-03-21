"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

export default function ShowcaseProjects() {
  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-transparent" id="projects">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12 space-y-2 sm:space-y-4"
        >
          <HomeTittle label="Featured Projects" />
          <HomeSubtittle label="Here are some of my best projects showcasing full-stack development and modern technologies" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-10">
          {projects
            ?.filter((project) => project?.isBest)
            ?.slice(0, 6)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="premium-card h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-32 sm:h-48 overflow-hidden">
                    <Image
                      src={project.banner}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Tech Stack Tags */}
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex flex-wrap gap-1 sm:gap-1.5">
                      {project.techStack.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[14px] sm:text-[10px] font-medium rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      {project.links?.some((link) => link.name === "Preview") && (
                        <Link
                          href={project.links?.find((link) => link.name === "Preview")?.href ?? ""}
                          target="_blank"
                          aria-label={`Preview ${project.name}`}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                      )}
                      {project.links?.some((link) => link.name === "GitHub") && (
                        <Link
                          href={project.links?.find((link) => link.name === "GitHub")?.href ?? ""}
                          target="_blank"
                          aria-label={`GitHub source for ${project.name}`}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
                        >
                          <LuGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5">
                    <h3 className="text-[16px] sm:text-lg font-semibold mb-1 sm:mb-2 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Action Links */}
                    <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-slate-100 dark:border-slate-700/50">
                      {project.links?.some((link) => link.name === "Preview") && (
                        <Link
                          href={project.links?.find((link) => link.name === "Preview")?.href ?? ""}
                          target="_blank"
                          className="flex items-center gap-1 sm:gap-1.5 text-[14px] sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          Live Demo
                        </Link>
                      )}
                      {project.links?.some((link) => link.name === "GitHub") && (
                        <Link
                          href={project.links?.find((link) => link.name === "GitHub")?.href ?? ""}
                          target="_blank"
                          className="flex items-center gap-1 sm:gap-1.5 text-[14px] sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <LuGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                          Source
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-[14px] sm:text-base text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
