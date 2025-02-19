"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  HandHeart,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

export default function AboutPage() {
  return (
    <div className="pt-10 pb-12 px-3 sm:px-4 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1, delay: 0 },
          }}
        >
          <Card className="border-[#0d7ded52] dark:border-[#0d7ded2e] shadow-xl shadow-[#0d7ded1b] dark:shadow-[#0d7ded11] dark:bg-[#0c132bd9]">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl">
                <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-2">
                  <Briefcase />
                </div>
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 dark:text-slate-400">
                <li>Full Stack Developer at TechCorp (2020 - Present)</li>
                <li>Frontend Developer at WebSolutions Inc. (2018 - 2020)</li>
                <li>Web Development Intern at StartupXYZ (2017)</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1, delay: 0 },
          }}
        >
          <Card className="border-[#0d7ded52] dark:border-[#0d7ded2e] shadow-xl shadow-[#0d7ded1b] dark:shadow-[#0d7ded11] dark:bg-[#0c132bd9]">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl">
                <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-2">
                  <GraduationCap />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 dark:text-slate-400">
                <li>
                  BSc in EEE, Shahjalal University of Science and Technology
                  (2020 - present)
                </li>
                <li>Govt. Azizul Haque College, Bogura (2017 - 2019)</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1, delay: 0 },
          }}
        >
          <Card className="border-[#0d7ded52] dark:border-[#0d7ded2e] shadow-xl shadow-[#0d7ded1b] dark:shadow-[#0d7ded11] dark:bg-[#0c132bd9]">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl">
                <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-2">
                  <Award />
                </div>
                Certificates & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 dark:text-slate-400">
                <li>Advanced SQL Certification, 365 Data Science</li>
                <li>Git and GitHub Certification, 365 Data Science</li>
                <li>SQL Certification, 365 Data Science</li>
                <li>TailwindCSS from A to Z Certification, Udemy</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1, delay: 0 },
          }}
        >
          <Card className="border-[#0d7ded52] dark:border-[#0d7ded2e] shadow-xl shadow-[#0d7ded1b] dark:shadow-[#0d7ded11] dark:bg-[#0c132bd9]">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl">
                <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-2">
                  <HandHeart />
                </div>
                Volunteering Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 dark:text-slate-400">
                <li>
                  Vice President of KIN A Voluntary Organization, SUST (2024 -
                  Present)
                </li>
                <li>
                  Web Secretary of KIN A Voluntary Organization, SUST (2023 -
                  2024)
                </li>
                <li>
                  Assistant Web Secretary of KIN A Voluntary Organization, SUST
                  (2022 - 2023)
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1, delay: 0 },
          }}
        >
          <Card className="border-[#0d7ded52] dark:border-[#0d7ded2e] shadow-xl shadow-[#0d7ded1b] dark:shadow-[#0d7ded11] dark:bg-[#0c132bd9]">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl">
                <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-2">
                  <Heart />
                </div>
                Hobbies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 dark:text-slate-400">
                <li>Cycling</li>
                <li>Science Fiction Movies</li>
                <li>Gardening</li>
                <li>Eating</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1, delay: 0 },
          }}
        >
          <Card className="border-[#0d7ded52] dark:border-[#0d7ded2e] shadow-xl shadow-[#0d7ded1b] dark:shadow-[#0d7ded11] dark:bg-[#0c132bd9]">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl">
                <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-2">
                  <BookOpen />
                </div>
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Currently, I&apos;m expanding my skills in machine learning with
                Python, focusing on:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Completing an online course on Machine Learning fundamentals
                </li>
                <li>
                  Working on a personal project that integrates ML with web
                  development
                </li>
                <li>Contributing to open-source ML projects on GitHub</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1, delay: 0 },
          }}
        >
          <Card className="border-[#0d7ded52] dark:border-[#0d7ded2e] shadow-xl shadow-[#0d7ded1b] dark:shadow-[#0d7ded11] dark:bg-[#0c132bd9]">
            <CardHeader>
              <CardTitle className="flex items-center text-xl sm:text-2xl">
                <div className="p-2 rounded-full bg-white dark:bg-[#111832] shadow-lg mr-2">
                  <TiContacts />
                </div>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:rejoyanislam0014@gmail.com">
                  rejoyanislam0014@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+0158816822">+8801568-816822</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sylhet, Bangladesh</span>
              </div>
              <div className="flex justify-start space-x-4">
                <Link
                  href={"https://github.com/md-rejoyan-islam"}
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <LuGithub className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/md-rejoyan-islam"}
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <LuLinkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link
                  href={"https://www.instagram.com/md.rej0yan.islam"}
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <FaInstagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href={"https://x.com/md_rejoyanislam"} target="_blank">
                  <Button variant="outline" size="icon">
                    <RiTwitterXFill className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
