"use client";
import { motion } from "framer-motion";
import { HomeSubtittle, HomeTittle } from "./home-page-tittle-subtitle";

// const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
//   <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
//     <Icon className={`w-6 h-6 ${color}`} />
//   </div>
// );

import Image from "next/image";

const technologies = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "TailwindCSS", icon: "/icons/tailwind.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/nextjs.png" },
  { name: "Prisma", icon: "/icons/prisma.png" },
  { name: "GraphQL", icon: "/icons/graphql.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "Vitest", icon: "/icons/vitest.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Express", icon: "/icons/expressjs.png" },
  { name: "Firebase", icon: "/icons/firebase.webp" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "Redux", icon: "/icons/redux.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "Docker", icon: "/icons/docker.webp" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "Sequelize", icon: "/icons/sequelize.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "Numpy", icon: "/icons/numpy.png" },
  { name: "Pandas", icon: "/icons/pandas.png" },
  { name: "Node", icon: "/icons/node.png" },
];

// const skills = [
//   {
//     icon: Code,
//     name: "Frontend Development",
//     tech: "React.js, Next.js",
//     description:
//       "Building responsive and interactive user interfaces with modern React features and Next.js for optimal performance.",
//     color: "text-blue-500",
//     icon_logos: ["/icons/react.png", "/icons/nextjs.png"],
//   },
//   {
//     icon: Server,
//     name: "Backend Development",
//     tech: "Node.js, Express",
//     description:
//       "Creating robust server-side applications with focus on scalability and clean architecture.",
//     color: "text-green-500",
//     icon_logos: ["/icons/node.png", "/icons/expressjs.png"],
//   },
//   {
//     icon: Database,
//     name: "Database Management",
//     tech: "MongoDB, Mongoose",
//     description:
//       "Designing and implementing efficient database schemas and queries for optimal data management.",
//     color: "text-purple-500",
//     icon_logos: ["/icons/mongodb.png", "/icons/mongoose.png"],
//   },
//   {
//     icon: Layout,
//     name: "UI/UX Design",
//     tech: "Tailwind CSS, Material UI, Figma, Shadcn, Bootstrap",
//     description:
//       "Crafting beautiful and intuitive user interfaces with modern design principles and frameworks.",
//     color: "text-pink-500",
//     icon_logos: ["/icons/tailwind.png", "/icons/bootstrap.png"],
//   },
//   {
//     icon: GitBranch,
//     name: "Version Control",
//     tech: "Git, GitHub",
//     description:
//       "Managing code versions efficiently with Git and collaborating effectively through GitHub.",
//     color: "text-orange-500",
//     icon_logos: ["/icons/git.png", "/icons/github.png"],
//   },
//   {
//     icon: Terminal,
//     name: "TypeScript",
//     tech: "TypeScript, JavaScript",
//     description:
//       "Writing type-safe code for better maintainability and developer experience.",
//     color: "text-yellow-500",
//     icon_logos: ["/icons/typescript.png", "/icons/js.png"],
//   },
//   {
//     icon: Layers,
//     name: "State Management",
//     tech: "Redux, Context API",
//     description:
//       "Managing complex application state with modern state management solutions.",
//     color: "text-indigo-500",
//     icon_logos: ["/icons/redux.png"],
//   },
//   {
//     icon: Cpu,
//     name: "API Development",
//     tech: "REST, GraphQL",
//     description:
//       "Designing and implementing efficient APIs for seamless data communication.",
//     color: "text-red-500",
//     icon_logos: ["/icons/graphql.png"],
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
              className="group relative overflow-hidden  rounded-xl "
            >
              <div className="absolute flex rounded-xl -translate-y-full group-hover:translate-y-0 inset-0 transition-all duration-500   items-center justify-center w-full h-full z-50 ">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="mx-auto  rounded-xl w-full bg-white dark:bg-[#111832]  p-7 h-full border border-[#bedffd] hover:border-[var(--primary-button)] dark:border-[#211c48] dark:hover:border-[#0d7ded6d]"
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
                      className="mx-auto p-1.5 sm:p-2 bg-gray-500/10 dark:bg-green-500/10 rounded-md w-12 sm:w-[50px] h-12  sm:h-[50px] "
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
