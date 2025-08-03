"use client";
import ShowOneByOne from "@/components/animation/show-one-by-one";
import BlogCard from "@/components/blogs/BlogCard";
import LetterPullup from "@/components/ui/letter-pull-up";
import { blogs } from "@/data/blogs";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Blogs() {
  const [scope, animate] = useAnimate();
  const [blogScope, BlogAnimate] = useAnimate();

  const staggerList = stagger(0.1, { startDelay: 0.6 });
  const blogStaggerList = stagger(0.2, { startDelay: 1.3 });

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
    id: index + 1,
  }));

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: staggerList,
      }
    );
  }, [staggerList, animate]);

  useEffect(() => {
    BlogAnimate(
      "article",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: blogStaggerList,
      }
    );
  }, [blogStaggerList, BlogAnimate]);

  return (
    <div className="pt-8 sm:pt-10 pb-10 sm:pb-12 px-3 sm:px-4 relative max-w-7xl mx-auto">
      {/* <Spotlight
        className="top-40 left-0 md:left-96 md:top-0 z-50  "
        fill="rgba(16, 163, 233, .7)"
      /> */}

      <div>
        <h1 className="text-center text-[var(--primary-button)]  text-text-root font-incognito font-semibold tracking-tight sm:text-4xl text-3xl mb-5 sm:mb-6 lg:leading-[3.7rem]">
          <LetterPullup words={"Blogs"} delay={0.1} />

          <div className="relative">
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/4 blur-sm" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute mx-auto inset-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl text-center mx-auto  sm:text-xl text-gray-600 dark:text-text-secondary leading-relaxed"
        >
          In this space, I share personal stories, insights, and experiences
          from my journey as a web developer and freelancer. You&apos;ll find
          articles about the projects I&apos;m currently working on, lessons
          I&apos;ve learned, and general findings that might inspire or assist
          others in their own endeavors.
        </motion.p>
        <ul
          className="flex items-center flex-wrap gap-x-5 gap-y-10 my-10"
          ref={scope}
        >
          {blogSites.map((site) => (
            <motion.li key={site.id} style={{ opacity: 0, scale: 0.3, x: -50 }}>
              <Link
                rel="noopener"
                target="_blank"
                href={site.link}
                className="flex items-center group"
              >
                {site.icon}
                &nbsp;
                <span>{site.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.section
        className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 lg:gap-x-10  max-w-full lg:gap-y-12 gap-y-10 mb-12 box-border"
        ref={blogScope}
        transition={{ delay: 1.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {blogs.map((blog) => (
          <motion.article
            key={blog.id}
            style={{ opacity: 0, scale: 0.3, x: -50 }}
          >
            <ShowOneByOne index={blog.id}>
              <BlogCard blog={blog} />
            </ShowOneByOne>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}
