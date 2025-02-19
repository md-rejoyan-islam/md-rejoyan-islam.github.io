"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Book, Briefcase, Code, GraduationCap, Palette } from "lucide-react";
import { useState } from "react";
import { CiFaceMeh } from "react-icons/ci";
import NiceBtn from "../../button/nice-btn";
import { HomeSubtittle, HomeTittle } from "../home-page-tittle-subtitle";

import Me from "./me";
import MyEducation from "./my-education";
import MyExperience from "./my-experience";
import MySkill from "./my-skill";

export function AboutMe() {
  const [activeTab, setActiveTab] = useState("me");

  const tabs = [
    { id: "me", label: "Me", icon: CiFaceMeh },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
  ];

  const skills = [
    {
      name: "Front-End Development",
      icon: Code,
      level: 90,
      description:
        "I have been working as a front-end developer for 3 years with experience in React.js, Next.js, and Tailwind CSS.",
      tech: "React.js, Next.js",
    },
    {
      name: "Backend Master",
      icon: Palette,
      level: 85,
      description:
        "I have been working as a backend developer for 2 years. I have experience in Node.js, Express.js, and MongoDB.",
      tech: "Node.js, Express.js, MongoDB",
    },
    {
      name: "Content Writing",
      icon: Book,
      level: 80,
      description:
        "I have been writing content for 5 months. I have experience in writing blogs, articles, and technical documentation.",
      tech: "Hashnode, Medium",
    },
    {
      name: "Database Management",
      icon: GraduationCap,
      level: 75,
      description:
        "I have been working as a database manager with experience in SQL, NoSQL, and Firebase.",
      tech: "SQL, NoSQL, Firebase",
    },
  ];

  const experiences = [
    {
      title: "Junior Front Developer",
      company: "Self-Employed",
      period: "2022 - Present",
    },
    {
      title: "Junior Backend Developer",
      company: "Self-Employed",
      period: "2023 - Present",
    },
    {
      title: "Vice President",
      company: "KIN,A Volunteer Organization, SUST",
      period: "2024 - Present",
    },
    {
      title: "Web Secretary",
      company: "KIN,A Volunteer Organization, SUST",
      period: "2023 - 2024",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Electrical and Electronic Engineering",
      school: "Shahjalal University of Science and Technology, Sylhet",
      year: "2020 - Present",
    },
    {
      degree: "Higher Secondary Certificate",
      school: "Govt. Azizul Haque College, Bogura",
      year: "2017-2019",
    },
  ];

  return (
    <section
      className="py-12 lg:py-16 px-4 bg-gradient-to-br from-pink-50/10 to-rose-100/10 dark:from-[#010b24e6]/50  text-gray-800 overflow-hidden"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 space-y-3"
        >
          <HomeTittle label="Explore Me" />
          <HomeSubtittle label="Get to know me better" />
        </motion.div>

        <div className="">
          <div className=" w-full col-span-3">
            <div className="flex justify-center mb-12 flex-wrap gap-3 sm:gap-5">
              {tabs.map((tab) => (
                <NiceBtn
                  key={tab.id}
                  label={tab.label}
                  icon={<tab.icon className="w-5 h-5 mr-2" />}
                  active={activeTab === tab.id}
                  className=""
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="pt-1 lg:pt-2"
              >
                {activeTab === "me" && <Me />}
                {activeTab === "skills" && <MySkill skills={skills} />}

                {activeTab === "experience" && (
                  <MyExperience experiences={experiences} />
                )}

                {activeTab === "education" && (
                  <MyEducation education={education} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
