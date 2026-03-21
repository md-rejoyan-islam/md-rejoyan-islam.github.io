"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/blogs/BlogCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogsClient() {
  // Get unique blog sites
  const groupedBlogs = blogs.reduce(
    (acc: { [key: string]: typeof blogs }, blog) => {
      const key = blog.host.name;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(blog);
      return acc;
    },
    {}
  );

  const blogSites = Object.keys(groupedBlogs).map((site, index) => ({
    name: site,
    icon: groupedBlogs[site][0].host.icon,
    link: groupedBlogs[site][0].host.link,
    count: groupedBlogs[site].length,
    id: index + 1,
  }));

  return (
    <div className="min-h-screen pt-4 sm:pt-16 lg:pt-24 pb-9 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 mb-4 sm:mb-6"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-[14px] sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Blog
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            My Writings
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Thoughts, tutorials, and insights from my journey as a developer. I
            share what I learn to help others grow.
          </p>
        </motion.div>

        {/* Blog Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-12"
        >
          {blogSites.map((site) => (
            <a
              key={site.id}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-indigo-100 dark:hover:bg-purple-500/10 transition-colors group"
            >
              {site.icon}
              <span className="text-[14px] sm:text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-purple-400">
                {site.name}
              </span>
              <span className="text-[14px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                {site.count}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Blogs Grid - Using original BlogCard with 3D effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
