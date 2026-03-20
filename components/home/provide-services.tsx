"use client";
import { motion } from "framer-motion";
import { Code, Database, Globe, Search, Server, Smartphone, Workflow } from "lucide-react";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

const services = [
  {
    id: 1,
    icon: <Smartphone className="w-6 h-6" />,
    title: "Front-End Development",
    description: "Creating modern, responsive web applications using React.js, Next.js, and TypeScript. Expert in building fast, SEO-friendly interfaces with excellent user experience.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: <Server className="w-6 h-6" />,
    title: "Back-End Development",
    description: "Building scalable server-side solutions with Node.js, Express.js, and MongoDB. RESTful API design, authentication systems, and microservices architecture.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: <Workflow className="w-6 h-6" />,
    title: "n8n Automation",
    description: "Automating business workflows with n8n. CRM integrations, email automation, data synchronization, and custom workflow solutions to save time and reduce manual tasks.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    icon: <Database className="w-6 h-6" />,
    title: "Database Management",
    description: "Database design and optimization using MongoDB, MySQL, and PostgreSQL. Performance tuning, data modeling, and efficient query implementation.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    icon: <Globe className="w-6 h-6" />,
    title: "Hosting & Deployment",
    description: "Full-stack deployment on AWS, Vercel, and cloud platforms. CI/CD pipeline setup, domain configuration, SSL certificates, and server management.",
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    id: 6,
    icon: <Search className="w-6 h-6" />,
    title: "SEO Optimization",
    description: "Technical SEO implementation, Core Web Vitals optimization, meta tag management, sitemap generation, and search engine ranking improvement strategies.",
    gradient: "from-pink-500 to-rose-500"
  },
];

export default function ProvideServices() {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-50/80 dark:bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/community.svg')] bg-contain bg-center bg-no-repeat opacity-[0.03] dark:opacity-[0.02]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12 space-y-2 sm:space-y-4"
        >
          <HomeTittle label="My Services" />
          <HomeSubtittle label="I deliver impactful solutions with responsive designs, robust systems, and optimized performance" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="premium-card h-full p-3 sm:p-6">
                {/* Icon with gradient */}
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white dark:bg-[#0d0d18] flex items-center justify-center text-slate-700 dark:text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-sm sm:text-xl font-semibold mb-1.5 sm:mb-3 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[10px] sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
