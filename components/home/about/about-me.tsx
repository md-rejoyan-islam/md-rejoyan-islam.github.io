"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Book, Briefcase, Code, GraduationCap, Palette, User } from "lucide-react";
import { useState } from "react";
import { HomeSubtittle, HomeTittle } from "../home-page-tittle-subtitle";
import Me from "./me";
import MyEducation from "./my-education";
import MyExperience from "./my-experience";
import MySkill from "./my-skill";

export function AboutMe() {
  const [activeTab, setActiveTab] = useState("me");

  const tabs = [
    { id: "me", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
  ];

  const skills = [
    {
      name: "Front-End Development", icon: Code, level: 90, description: "Next.js, TypeScript , Tailwind CSS, Shadcn UI, Framer Motion", tech: "React, Tailwind CSS, Framer Motion"
    },
    { name: "Backend Development", icon: Palette, level: 85, description: "Node.js, Express.js, Rest API, GraphQL, Docker", tech: "Rest API, GraphQL, Docker" },
    { name: "Content Writing", icon: Book, level: 80, description: "Technical blogs and documentation", tech: "Hashnode" },
    { name: "Database Management", icon: GraduationCap, level: 75, description: "SQL, NoSQL, Firebase, MongoDB, PostgreSQL", tech: "SQL, NoSQL, Firebase" },
  ];

  const experiences = [
    {
      title: "Full Stack Developer", company: "nexalance", period: "February 2025 - Present" },
    { title: "Ecommerce Website Maintainer", company: "charglife.com", period: "July 2025 - December 2025" },
    { title: "Web Sites & VPS Server Configurator", company: "SUST EEE Society", period: "June 2025 - Present" },
    { title: "Research Assistant", company: "Dr. Md Rasedujjaman, SUST", period: "January 2025 - Present" },
    { title: "Vice President", company: "KIN, SUST", period: "March 2024 - May 2025" },
    { title: "Web Secretary", company: "KIN, SUST", period: "January 2023 - March 2024" },
  ];

  const education = [
    { degree: "BSc in Electrical & Electronic Engineering", school: "Shahjalal University of Science and Technology", year: "2020 - 2026" },
    { degree: "Higher Secondary Certificate", school: "Govt. Azizul Haque College, Bogura", year: "2017 - 2019" },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-transparent" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12 space-y-2 sm:space-y-4"
        >
          <HomeTittle label="About Me" />
          <HomeSubtittle label="Get to know me better and explore my journey in tech" />
        </motion.div>

        {/* Premium Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6 sm:mb-10"
        >
          <div className="inline-flex p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-label={tab.label}
                className={`relative flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[14px] sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg sm:rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <tab.icon className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "me" && <Me />}
            {activeTab === "skills" && <MySkill skills={skills} />}
            {activeTab === "experience" && <MyExperience experiences={experiences} />}
            {activeTab === "education" && <MyEducation education={education} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
