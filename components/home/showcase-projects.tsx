"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { TbZoomInArea } from "react-icons/tb";
import NiceBtn from "../button/nice-btn";
import { FloatingPaper } from "../ui/floating-paper";
import { HomeTittle } from "./home-page-tittle-subtitle";

export default function ShowcaseProjects() {
  return (
    <section className="relative group/main">
      {/* Floating papers background */}
      <div className="absolute inset-0 -z-10 overflow-hidden w-full h-full">
        <FloatingPaper count={50} />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8" id="projects">
        <div className="pt-5">
          <div className="text-center space-y-4">
            <HomeTittle label="My Projects" />
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-text-secondary">
              Here are some of the projects I&apos;ve worked on, showcasing my
              expertise in full-stack development, database optimization, cloud
              hosting, and SEO optimization.
              <Link
                href="/projects"
                className=" underline text-[var(--primary-button)] ml-2"
              >
                View all projects
              </Link>
            </p>
          </div>
        </div>

        <div className="py-10 gap-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects
            ?.filter((project) => project?.isBest)
            ?.slice(0, 6)
            .map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white dark:bg-[#1118329b] shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-blue-500/5 border border-[#0d87f23b] dark:border-[#0d87f221] dark:hover:border-[#0d87f23b] hover:border group-hover:translate-z-12 group-hover:scale-[1.02] md:group-hover:scale-[1.04] ">
                  {/* Project Image */}
                  <div className="relative h-[200px] overflow-hidden">
                    <Link
                      href={
                        project.links?.find((link) => link.name === "Preview")
                          ?.href || ""
                      }
                      target="_blank"
                      className="absolute hidden group-hover/main:block -translate-y-full group-hover:translate-y-0 transition-all duration-300 inset-0 z-10 w-full h-full "
                    >
                      <div className="absolute inset-0 bg-sky-900/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer">
                        <TbZoomInArea
                          className=" w-10 h-10 text-gray-100"
                          title="Preview"
                        />
                      </div>
                      <Image
                        src={project.banner}
                        alt={project.name}
                        className="h-full w-full object-fit transition-transform duration-500"
                        height={300}
                        width={400}
                      />
                    </Link>
                    <Image
                      src={project.banner}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      height={300}
                      width={400}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b from-transparent to-sky-900/20`}
                    ></div>
                    <div className="flex flex-wrap-reverse   gap-2 absolute bottom-3 left-4">
                      {project.techStack.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full bg-gradient-to-r from-blue-500/80 to-cyan-500/80 px-2.5 py-1 text-[10px] font-medium text-gray-200 backdrop-blur-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative h-[calc(100%-200px)] space-y-6 p-5 flex flex-col justify-between ">
                    {/* Title & Description */}
                    <div className="">
                      <h3 className="mb-2 text-2xl font-bold text-slate-800 dark:text-white/90">
                        {project.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-white/60">
                        {project.description}
                        {/* {project.description?.slice(0, 300)}
                        {project.description?.length > 300 && "..."} */}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-0">
                      {project.links?.some(
                        (link) => link.name === "Preview"
                      ) && (
                        <Link
                          href={
                            project.links?.find(
                              (link) => link.name === "Preview"
                            )?.href || ""
                          }
                          target="_blank"
                        >
                          <NiceBtn
                            label="Live Demo"
                            icon={
                              <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                            }
                            className="hover:bg-[#0d7ded] dark:hover:bg-[#0d7ded] hover:text-white"
                            iconPosition="left"
                          />
                        </Link>
                      )}
                      {project.links?.some(
                        (link) => link.name === "GitHub"
                      ) && (
                        <Link
                          href={
                            project.links?.find(
                              (link) => link.name === "GitHub"
                            )?.href || ""
                          }
                          target="_blank"
                        >
                          <NiceBtn
                            label="Source"
                            className="group/btn inline-flex items-center  rounded-xl bg-white hover:bg-gray-50 font-semibold text-[#373881] backdrop-blur-sm transition-all  "
                            icon={
                              <LuGithub className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                            }
                            iconPosition="left"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
