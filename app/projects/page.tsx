"use client";
import ThreeDPin from "@/components/animation/3d-pin";
import ShowOneByOne from "@/components/animation/show-one-by-one";
import ProjectCard from "@/components/projects/ProjectCard";
import LetterPullup from "@/components/ui/letter-pull-up";
import { TabList } from "@/components/ui/TabList";
import { filterKeys, projects as projectsData } from "@/data/projects";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
export default function Projects() {
  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0.6 });

  const [scopeRef, projectAnimate] = useAnimate();
  const projectStaggerList = stagger(0.2, { startDelay: 1.3 });

  const [projects, setProject] = useState([...projectsData]);

  useEffect(() => {
    animate(
      "button",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: staggerList,
      }
    );
  }, [staggerList, animate]);

  useEffect(() => {
    projectAnimate(
      "article",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: projectStaggerList,
      }
    );
  }, [projectStaggerList, projectAnimate]);

  return (
    <div className="pt-10 pb-12 px-3 sm:px-4 relative max-w-7xl mx-auto">
      {/* <Spotlight
        className="top-40 left-0 md:left-96 md:top-0 z-50  "
        fill="rgba(16, 163, 233, .7)"
      /> */}
      <div>
        <h1 className="text-center text-[var(--primary-button)]  text-text-root font-incognito font-semibold tracking-tight sm:text-4xl text-3xl mb-5 sm:mb-6 lg:leading-[3.7rem]">
          <LetterPullup words={"Projects"} delay={0.1} />

          <div className="relative">
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/4 blur-sm" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl text-center mx-auto  sm:text-xl text-gray-700 leading-relaxed"
        >
          Over the years, I&apos;ve worked on a variety of projects that reflect
          my passion for web development. Here are some of the ones I&apos;m
          most proud of. Many of these are open-source, so feel free to explore
          the code, and if something sparks your interest, you&apos;re welcome
          to contribute or suggest improvements.
        </motion.p>
      </div>
      <div className="py-11 ">
        <ul className="flex items-center gap-4" ref={scope}>
          <TabList
            tabs={[...filterKeys.map((item) => item?.name)]}
            setProject={(projects) =>
              setProject(projects as typeof projectsData)
            }
            projectsData={projectsData}
            ref={scope}
            style={{ opacity: 0, scale: 0.3, x: -50 }}
          />
        </ul>
      </div>
      <div>
        <motion.section
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-12  relative items-start "
          ref={scopeRef}
          transition={{ delay: 1.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {projects?.length ? (
            projects?.map((project, index) => (
              <motion.article
                key={index}
                className="h-full"
                style={{ opacity: 0, scale: 0.3, x: -50 }}
              >
                <ShowOneByOne index={index}>
                  <ThreeDPin
                    project={<ProjectCard project={project} />}
                    links={project?.links}
                  >
                    <ProjectCard project={project} />
                  </ThreeDPin>
                </ShowOneByOne>
              </motion.article>
            ))
          ) : (
            <motion.article className="text-center sm:col-span-2 lg:col-span-3 xl:col-span-4">
              <h2 className="text-2xl  block text-red-400 font-incognito font-semibold tracking-tight">
                No projects found
              </h2>
            </motion.article>
          )}
        </motion.section>
      </div>
    </div>
  );
}
