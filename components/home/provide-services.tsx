"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, Globe, Search, Server } from "lucide-react";
import { AiOutlineFundView } from "react-icons/ai";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

const services = [
  {
    icon: <AiOutlineFundView className="w-6 h-6" />,

    title: "Front-End Development",
    description:
      "Building responsive and interactive user interfaces with React and Next.js",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Back-End Development",
    description:
      "Developing robust server-side applications with Node.js and Express",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Hosting Management",
    description: "Deploying and managing applications on cloud platforms",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database Management",
    description: "Designing and optimizing database structures for performance",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "API Development",
    description:
      "RESTful and GraphQL API  for seamless data flow between client and server.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Optimization",
    description: "Optimizing websites for better search engine visibility",
  },
];

export default function ProvideServices() {
  return (
    <section className="bg-[#fefeff8f] dark:bg-[#061024] py-12 sm:py-16">
      <div className=" px-4 sm:px-6 lg:px-8  relative bg-[url('/images/community.svg')] sm:bg-cover md:bg-contain  md:bg-bottom   md:bg-no-repeat ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <HomeTittle label="My Services" />
            <HomeSubtittle
              label="I deliver impactful solutions with responsive front-end designs, robust back-end systems, cloud hosting, optimized databases, real-time features, and SEO to create high-performance, user-focused digital experiences."
              className="max-w-3xl mx-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 pt-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.005,
                  transition: { duration: 0.3, delay: 0 },
                }}
              >
                <Card className="group hover:shadow-lg backdrop-blur-[1.5px] hover:backdrop-blur-[0px] transition-shadow duration-300 border-[#60aaf445] dark:border-[#365d8445] dark:bg-[#0c0b27]/60 dark:backdrop-blur-[3px] hover:border-[#439bf2b9] dark:hover:border-[#0d7ded6d]    shadow-sm   bg-[#f8fcffb9]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg dark:bg-[#2725546e] bg-[#e6f3ff] flex items-center justify-center text-[var(--primary-button)] mb-4 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
