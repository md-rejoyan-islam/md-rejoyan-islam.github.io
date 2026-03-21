"use client";

import { certificates } from "@/data/certificate";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Crown,
  Download,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Nexalance",
    period: "Feb 2025 - Present",
    current: true,
  },
  {
    title: "Website Maintainer",
    company: "Charglife",
    period: "July 2025 - December 2025",
    link: "https://charglife.com/",
  },
  {
    title: "Websites & VPS Server Configurator",
    company: "SUST EEE Society",
    period: "June 2025 - Present",
  },
  {
    title: "Research Assistant",
    company: "Dr. Md Rasedujjaman, SUST",
    period: "January 2025 - Present",
  },
];

const education = [
  {
    degree: "BSc in Electrical & Electronic Engineering",
    school: "Shahjalal University of Science and Technology",
    period: "2020 - Present",
    grade: "CGPA: 3.45/4.00",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Govt. Azizul Haque College, Bogura",
    period: "2017 - 2019",
    grade: "GPA: 5.00/5.00",
  },
];



const volunteering = [
  {
    role: "Vice President",
    org: "KIN, SUST",
    period: "March 2024 - May 2025",
    icon: Crown,
  },
  {
    role: "Web Secretary",
    org: "KIN, SUST",
    period: "March 2023 - March 2024",
    icon: Star,
  },
  {
    role: "Asst. Web Secretary",
    org: "KIN, SUST",
    period: "March 2022 - March 2023",
    icon: Sparkles,
  },
];

const hobbies = [
  { name: "Cycling", icon: "🚴" },
  { name: "Sci-Fi Movies", icon: "🎬" },
  { name: "Gardening", icon: "🌱" },
  { name: "Tech Exploration", icon: "💡" },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen pt-4 sm:pt-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Components and Decorations are handled globally in layout.tsx */}

      <div className="max-w-5xl mx-auto">
        {/* Header - Project Page Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 mb-3 sm:mb-6"
          >
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-[14px] sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
              About Me
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            About Me
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-[14px] sm:text-base md:text-lg px-2 mb-6 sm:mb-8">
            A passionate full-stack developer dedicated to crafting elegant
            digital experiences. Specialized in creating robust, scalable
            applications using modern web technologies.
          </p>

          {/* Social & Resume */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {[
              { icon: FiGithub, href: "https://github.com/md-rejoyan-islam", label: "GitHub" },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/md-rejoyan-islam",
                label: "LinkedIn"
              },
              { icon: FiTwitter, href: "https://x.com/md_rejoyanislam", label: "Twitter" },
              {
                icon: FaInstagram,
                href: "https://www.instagram.com/md.rej0yan.islam",
                label: "Instagram"
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
            <a
              href="/pdf/REJOYAN_RESUME.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[14px] sm:text-sm font-medium transition-colors shadow-lg shadow-indigo-500/25"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-white">
                Experience
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                Professional journey
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  exp.current
                    ? "bg-indigo-50/50 dark:bg-indigo-500/5 border-indigo-200 dark:border-indigo-500/20"
                    : "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      exp.current
                        ? "bg-indigo-100 dark:bg-indigo-500/20"
                        : "bg-slate-100 dark:bg-slate-800"
                    }`}
                  >
                    <Briefcase
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${exp.current ? "text-indigo-600 dark:text-indigo-400" : "text-slate-500 dark:text-slate-400"}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1">
                      <h3 className="font-semibold text-[16px] sm:text-base text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[13px] sm:text-[10px] font-semibold rounded-full bg-indigo-600 text-white">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[14px] sm:text-sm">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"
                        >
                          {exp.company}
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-slate-600 dark:text-slate-400">
                          {exp.company}
                        </span>
                      )}
                      <span className="text-slate-300 dark:text-slate-600">
                        •
                      </span>
                      <span className="text-slate-500 dark:text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-white">
                Education
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                Academic background
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 dark:text-slate-600" />
                  {/* <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[14px] sm:text-sm font-bold">
                    {edu.grade}
                  </span> */}
                </div>
                <h3 className="font-semibold text-[16px] sm:text-base text-slate-900 dark:text-white mb-1 sm:mb-2">
                  {edu.degree}
                </h3>
                <p className="text-[14px] sm:text-sm text-slate-600 dark:text-slate-400 mb-2 sm:mb-3">
                  {edu.school}
                </p>
                <div className="flex items-center gap-2 text-[14px] sm:text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-white">
                Certifications
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                Professional credentials
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id || idx}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="relative h-24 sm:h-32 bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2 sm:pb-3 cursor-pointer">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-[14px] sm:text-xs font-medium flex items-center gap-1 hover:text-amber-300 transition-colors"
                    >
                      View{" "}
                      <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </a>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[14px] sm:text-sm text-slate-900 dark:text-white mb-0.5 line-clamp-2" title={cert.title}>
                      {cert.title}
                    </h3>
                    <p className="text-[13px] sm:text-xs text-slate-500 dark:text-slate-400">
                      {cert.companyName} • {cert.issueDate}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[14px] sm:text-[9px] text-slate-400 dark:text-slate-500 truncate mr-2" title={`ID: ${cert.id}`}>
                      ID: {cert.id}
                    </p>
                    <p className="text-[14px] sm:text-[9px] text-slate-400 dark:text-slate-500 shrink-0">
                      Exp: {cert.expirationDate}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Volunteering Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-white">
                Volunteering
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                Community contributions
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {volunteering.map((vol, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-rose-200 dark:hover:border-rose-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-100 dark:bg-rose-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <vol.icon className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="font-bold text-[16px] sm:text-base text-slate-900 dark:text-white mb-0.5 sm:mb-1">
                  {vol.role}
                </h3>
                <p className="text-[14px] sm:text-sm text-slate-600 dark:text-slate-400">
                  {vol.org}
                </p>
                <p className="text-[14px] sm:text-xs text-slate-500 dark:text-slate-500 mt-1.5 sm:mt-2">
                  {vol.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hobbies Section - Full Width at Bottom */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-white">
                Hobbies & Interests
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                What I enjoy outside work
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {hobbies.map((hobby, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </span>
                <span className="font-semibold text-[16px] sm:text-base text-slate-700 dark:text-slate-300">
                  {hobby.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section - Simple with Icons */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-white">
                Contact
              </h2>
              <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                Get in touch
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="mailto:rejoyanislam0014@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                  Email:
                </span>
                <span className="text-[16px] sm:text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  rejoyanislam0014@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+8801568-816822"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-teal-100 dark:group-hover:bg-teal-500/20 transition-colors">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                  Phone:
                </span>
                <span className="text-[16px] sm:text-base text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  +8801568-816822
                </span>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">
                  Location:
                </span>
                <span className="text-[16px] sm:text-base text-slate-900 dark:text-white">
                  Sylhet, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
