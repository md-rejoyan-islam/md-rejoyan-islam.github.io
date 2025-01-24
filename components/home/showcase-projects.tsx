"use client";
import { projects } from "@/data/projects";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import HoverTooltip from "../tooltip";
import { HomeTittle } from "./home-page-tittle-subtitle";

export default function ShowcaseProjects() {
  return (
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
            <div
              className={clsx(
                "flex-auto  rounded-xl p-5",
                index === 0 &&
                  "bg-blue-200 dark:bg-[#03081c]/5 dark:border-[#1b2249]/70 dark:border dark:backdrop-blur-sm",
                index === 1 &&
                  "bg-sky-200 dark:bg-[#03081c]/5 dark:border-[#1b2249] dark:border dark:backdrop-blur-sm",
                index === 2 &&
                  "bg-green-200 dark:bg-[#03081c]/5 dark:border-[#1b2249] dark:border dark:backdrop-blur-sm",
                index === 3 &&
                  "bg-pink-200 dark:bg-[#03081c]/5 dark:border-[#1b2249] dark:border dark:backdrop-blur-sm",
                index === 4 &&
                  "bg-yellow-200 dark:bg-[#03081c]/5 dark:border-[#1b2249] dark:border dark:backdrop-blur-sm",
                index === 5 &&
                  "bg-purple-200 dark:bg-[#03081c]/5 dark:border-[#1b2249] dark:border dark:backdrop-blur-sm"
              )}
              key={index}
            >
              <div className="flex flex-col gap-2 h-full">
                <div className="">
                  <div
                    className="relative shadow-black/5  shadow-none rounded-large  rounded-md"
                    style={{ maxWidth: "fit-content" }}
                  >
                    <Image
                      src={project?.banner}
                      className="relative z-10 opacity-100 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large pointer-events-none h-auto object-cover    w-full"
                      width={450}
                      height={350}
                      alt={project?.name}
                      data-loaded="true"
                    />
                  </div>
                </div>
                <div className="flex-auto flex flex-col  justify-between h-full">
                  <div>
                    <div className="py-2  font-semibold capitalize sm:text-base md:text-lg dark:text-[#f0f0f0] ">
                      {project?.name}
                    </div>
                    <div className="w-[100%] dark:text-text-secondary py-2 pb-3 sm:w-auto md:w-auto lg:w-auto text-sm">
                      {project?.description}
                    </div>
                    <div className="">
                      <ul className="flex gap-3">
                        {project?.techStack.map((tech, index) => (
                          <li key={index}>
                            <span
                              className={`rounded-lg px-2 py-1.5 dark:text-white/70 bg-sky-100 dark:bg-[#14273e]  text-xs `}
                            >
                              {tech}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <ul className="flex gap-4 pt-6">
                    {project?.links.map((link, index) => (
                      <li key={index}>
                        <HoverTooltip title={link.name}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--primary-button)] hover:bg-[var(--primary-button)] hover:text-white hover:text-[var(--primary-hover-button)] flex  transition-all gap-2 p-2   border border-[var(--primary-button)] dark:border-[#1f1d5f] rounded-md"
                          >
                            <span className="text-xs hidden"> {link.name}</span>
                            {link.icon}
                          </a>
                        </HoverTooltip>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
