"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { IoMdDownload } from "react-icons/io";
import NiceBtn from "../button/nice-btn";
import { FlipWords } from "../ui/flip-words";
import { IconCloud } from "../ui/Icon-cloud";
import { HomeSubtittle } from "./home-page-tittle-subtitle";

export default function Hero() {
  const router = useRouter();

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  const words = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.Js Expert",
    "Python Data Analyst",
  ];
  return (
    <div className=" pb-16 pt-[40px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="   px-0 grid grid-cols-1 lg:grid-cols-5 overflow-hidden w-full">
          <div className="flex col-span-3 h-full justify-center lg:justify-start  items-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-[var(--primary-title)] ">
                Hi, I&apos;m{" "}
                <span className=" text-[var(--primary-button)]">
                  Md. Rejoyan Islam
                </span>
              </h2>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <FlipWords
                  words={words}
                  className={
                    "bg-clip-text inline-block overflow-hidden font-medium text-wrap text-[1.75rem] md:text-[2em] lg:text-[2.5em] text-[var(--primary-title)] "
                  }
                />
              </motion.div>

              <HomeSubtittle
                label="I'm a full-stack developer specializing in building and
                designing exceptional digital experiences. With expertise in the
                MERN stack, SQL, NoSQL databases, and Python for data science, I
                focus on creating accessible, human-centered products that
                deliver meaningful value."
                className="pb-7 pt-2 md:text-lg lg:text-xl max-w-2xl mx-auto"
              />
              <div className="flex items-center justify-center gap-4">
                <NiceBtn
                  label="View Projects"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="hover:bg-[#0d7ded] hover:text-white"
                  onClick={() => {
                    router.push("#projects");
                  }}
                  iconPosition="right"
                />
                <NiceBtn
                  label="Download CV"
                  icon={<IoMdDownload className="w-4 h-4 animate-bounce " />}
                  className="hover:bg-[#0d7ded] hover:text-white"
                  iconPosition="right"
                />
              </div>
            </motion.div>
          </div>
          <div className=" hidden   lg:col-span-2 order-1 lg:order-2 lg:flex w-full  items-center justify-center">
            <div className=" ">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
