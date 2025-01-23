"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layout, Search, Server } from "lucide-react";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

export default function ProvideServices() {
  return (
    <section className="bg-[#fefeff8f] py-12 sm:py-16">
      <div className=" px-4 sm:px-6 lg:px-8  relative bg-[url('/images/community.svg')] bg-cover   bg-no-repeat ">
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
            {[
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Front-End",
                description:
                  "Building responsive and interactive user interfaces with React and Next.js",
              },
              {
                icon: <Server className="w-6 h-6" />,
                title: "Back-End",
                description:
                  "Developing robust server-side applications with Node.js and Express",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Hosting",
                description:
                  "Deploying and managing applications on cloud platforms",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Database Management",
                description:
                  "Designing and optimizing database structures for performance",
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Firebase",
                description:
                  "Implementing real-time features and authentication with Firebase",
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "SEO",
                description:
                  "Optimizing websites for better search engine visibility",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg backdrop-blur-[1.5px] hover:backdrop-blur-[2px] transition-shadow duration-300 border-[#60aaf445] hover:border-[#60aaf48f]  shadow-sm   bg-[#f8fcffb9]"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#e6f3ff] flex items-center justify-center text-[var(--primary-button)] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
