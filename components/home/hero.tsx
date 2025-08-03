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
    "nextdotjs",
    "python",
    "html5",
    "css3",
    "express",
    "react",
    "express",
    "bootstrap",
    "reactbootstrap",
    "pypi",
    "sass",
    "netlify",
    "mongodb",
    "mongoose",
    "nodedotjs",
    "mysql",
    "npm",
    "numpy",
    "pandas",
    "sequelize",
    "tailwindcss",
    "prisma",
    "firebase",
    "vercel",
    "jest",
    "docker",
    "git",
    "github",
    "figma",
    "redux",
    "vitest",
    "vite",
    "jest",
    "shadcnui",
    "daisyui",
  ];
  const words = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.Js Expert",
    "Python Data Analyst",
  ];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/REJOYAN_RESUME.pdf";
    link.download = "REJOYAN_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className=" pb-16 pt-[40px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 to-sky-50 dark:from-bg-main dark:to-[#010b24e6]">
      <div className="max-w-7xl mx-auto">
        <div className="   px-0 grid grid-cols-1 lg:grid-cols-5 overflow-hidden w-full">
          <div className="flex col-span-3 h-full justify-center lg:justify-start  items-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-[var(--primary-title)] dark:text-[#4df9e5]/60">
                Hi, I&apos;m{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#0d7ded] to-[#0d3aed]">
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
                    "bg-clip-text inline-block overflow-hidden font-medium text-wrap text-[1.75rem] md:text-[2em] lg:text-[2.5em] text-[var(--primary-title)] dark:text-[#4df9e5]/60 "
                  }
                />
              </motion.div>

              <HomeSubtittle
                label="I’m a skilled Full-Stack Web Developer proficient in front-end, back-end, and data-driven applications. With expertise in state management, MongoDB, MySQL, and a focus on pixel-perfect designs, I create seamless, scalable solutions. I’m also currently exploring machine learning to build smarter applications. Let’s turn your vision into reality!"
                className="pb-7 pt-2 md:text-lg lg:text-xl max-w-2xl mx-auto "
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
                  onClick={handleDownload}
                  iconPosition="right"
                />
              </div>
            </motion.div>
          </div>
          <div className=" hidden   lg:col-span-2 order-1 lg:order-2 lg:flex w-full  items-center justify-center">
            <div>
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
