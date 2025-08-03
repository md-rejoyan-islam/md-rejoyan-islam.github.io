"use client";
import { motion } from "framer-motion";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

import Image from "next/image";

const technologies = [
  { name: "HTML", icon: "/icons/html.webp" },
  { name: "CSS", icon: "/icons/css.webp" },
  { name: "TailwindCSS", icon: "/icons/tailwind.webp" },
  { name: "JavaScript", icon: "/icons/js.webp" },
  { name: "React", icon: "/icons/react.webp" },
  { name: "Next.js", icon: "/icons/nextjs.webp" },
  { name: "Prisma", icon: "/icons/prisma.webp" },
  { name: "GraphQL", icon: "/icons/graphql.webp" },
  { name: "TypeScript", icon: "/icons/typescript.webp" },
  { name: "Vitest", icon: "/icons/vitest.webp" },
  { name: "MongoDB", icon: "/icons/mongodb.webp" },
  { name: "Express", icon: "/icons/expressjs.webp" },
  { name: "Firebase", icon: "/icons/firebase.webp" },
  { name: "Python", icon: "/icons/python.webp" },
  { name: "Redux", icon: "/icons/redux.webp" },
  { name: "Git", icon: "/icons/git.webp" },
  { name: "Docker", icon: "/icons/docker.webp" },
  { name: "MySQL", icon: "/icons/mysql.webp" },
  { name: "Sequelize", icon: "/icons/sequelize.webp" },
  { name: "GitHub", icon: "/icons/github.webp" },
  { name: "Numpy", icon: "/icons/numpy.webp" },
  { name: "Pandas", icon: "/icons/pandas.webp" },
  { name: "Node", icon: "/icons/node.webp" },
  { name: "Bootstrap", icon: "/icons/bootstrap.webp" },
  { name: "Linux", icon: "/icons/linux.webp" },
  { name: "Nginx", icon: "/icons/nginx.webp" },
];

// const skills = [
//   {
//     icon: Code,
//     name: "Frontend Development",
//     tech: "React.js, Next.js",
//     description:
//       "Building responsive and interactive user interfaces with modern React features and Next.js for optimal performance.",
//     color: "text-blue-500",
//     icon_logos: ["/icons/react.webp", "/icons/nextjs.webp"],
//   },
//   {
//     icon: Server,
//     name: "Backend Development",
//     tech: "Node.js, Express",
//     description:
//       "Creating robust server-side applications with focus on scalability and clean architecture.",
//     color: "text-green-500",
//     icon_logos: ["/icons/node.webp", "/icons/expressjs.webp"],
//   },
//   {
//     icon: Database,
//     name: "Database Management",
//     tech: "MongoDB, Mongoose",
//     description:
//       "Designing and implementing efficient database schemas and queries for optimal data management.",
//     color: "text-purple-500",
//     icon_logos: ["/icons/mongodb.webp", "/icons/mongoose.webp"],
//   },
//   {
//     icon: Layout,
//     name: "UI/UX Design",
//     tech: "Tailwind CSS, Material UI, Figma, Shadcn, Bootstrap",
//     description:
//       "Crafting beautiful and intuitive user interfaces with modern design principles and frameworks.",
//     color: "text-pink-500",
//     icon_logos: ["/icons/tailwind.webp", "/icons/bootstrap.webp"],
//   },
//   {
//     icon: GitBranch,
//     name: "Version Control",
//     tech: "Git, GitHub",
//     description:
//       "Managing code versions efficiently with Git and collaborating effectively through GitHub.",
//     color: "text-orange-500",
//     icon_logos: ["/icons/git.webp", "/icons/github.webp"],
//   },
//   {
//     icon: Terminal,
//     name: "TypeScript",
//     tech: "TypeScript, JavaScript",
//     description:
//       "Writing type-safe code for better maintainability and developer experience.",
//     color: "text-yellow-500",
//     icon_logos: ["/icons/typescript.webp", "/icons/js.webp"],
//   },
//   {
//     icon: Layers,
//     name: "State Management",
//     tech: "Redux, Context API",
//     description:
//       "Managing complex application state with modern state management solutions.",
//     color: "text-indigo-500",
//     icon_logos: ["/icons/redux.webp"],
//   },
//   {
//     icon: Cpu,
//     name: "API Development",
//     tech: "REST, GraphQL",
//     description:
//       "Designing and implementing efficient APIs for seamless data communication.",
//     color: "text-red-500",
//     icon_logos: ["/icons/graphql.webp"],
//   },
//   {
//     icon: Globe,
//     name: "Web Performance",
//     tech: "Optimization, SEO",
//     description:
//       "Optimizing web applications for speed, accessibility, and search engine visibility.",
//     color: "text-teal-500",
//   },
// ];

export default function LearningTechnologies() {
  return (
    <div className="bg-gradient-to-br w-full    relative from-blue-50 to-indigo-50 py-20 dark:from-[#03081c]/50 dark:to-[#03081c]/50 ">
      {/* background image  */}

      <div className="absolute  w-1/2   -right-1/4 opacity-50 inset-y-0  h-full flex items-center justify-center">
        <div className="w-[350px] h-[350px] opacity-50 bg-no-repeat dark:bg-[url('/images/setting_dark.svg')] bg-[url('/images/setting.svg')] bg-contain bg-center origin-center animate-[spin_6s_linear_infinite]"></div>
      </div>
      <div className="absolute  w-1/2   -left-1/4 inset-y-0 opacity-50  h-full   flex items-center justify-center">
        <div className="w-[350px] h-[350px] opacity-50 bg-no-repeat dark:bg-[url('/images/setting_dark.svg')] bg-[url('/images/setting.svg')] bg-contain bg-center origin-center animate-[spin_6s_linear_infinite]"></div>
      </div>

      <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <HomeTittle label="My Tech Stack" />
          <HomeSubtittle label="Here are the technologies and tools I specialize in to build seamless digital experiences." />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1, delay: 0 },
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden cursor-grab  rounded-xl "
            >
              <div className="absolute flex rounded-xl -translate-y-full group-hover:translate-y-0 inset-0 transition-all duration-500   items-center justify-center w-full h-full z-50 ">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="mx-auto  rounded-xl  bg-white dark:bg-[#111832] p-8  border border-[#bedffd] hover:border-[var(--primary-button)]  dark:border-[#211c48] dark:hover:border-[#0d7ded51]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* hover:border-[var(--primary-button)] dark:hover:border-[#0d7ded6d]  */}
              <div className="relative bg-white dark:bg-[#111832]/60 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-[#bedffd]  dark:border-[#211c48]  transition-all duration-300 ">
                <div className="text-center space-y-3">
                  <div className="text-3xl">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="mx-auto object-contain p-1.5 sm:p-2 bg-gray-500/10 dark:bg-green-500/10 rounded-md w-12 sm:w-[50px] h-12  sm:h-[50px] "
                    />
                  </div>
                  <h3 className="font-medium text-sm sm:text-[15px] text-[#292875] dark:text-white/80">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
