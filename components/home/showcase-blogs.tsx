"use client";
import { blogs } from "@/data/blogs";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import Link from "next/link";
import BlogCard from "../blogs/BlogCard";

interface Blog {
  host: { link: string };
  title: string;
  image: string;
  description: string;
  date: string;
  time: string;
}

export default function ShowcaseBlogs() {
  const [blogScope, BlogAnimate] = useAnimate();
  const blogStaggerList = stagger(0.2, { startDelay: 1.3 });

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
    <div className=" my-20 relative">
      <div className="absolute inset-0 opacity-[0.1]  dark:opacity-5 w-full h-full">
        <div className=" bg-[url('/images/blogging.png')] w-full h-full bg-contain bg-center bg-no-repeat"></div>
      </div>
      <section className=" max-w-7xl mx-auto px-4  bg-white dark:bg-transparent    bg-opacity-90">
        <div className="flex justify-between items-center text-center w-full">
          <div className="mx-auto">
            <h2 className="font-incognito text-text-root  pb-4 text-[var(--primary-button)] text-4xl font-semibold tracking-tight">
              My Blogs
            </h2>
            <p className="max-w-xl mx-auto  text-gray-600">
              I write about web development, programming, and technology. Here
              are some of my recent blogs.
              <Link
                href="/blogs"
                className=" underline text-[var(--primary-button)] ml-2"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        <motion.div
          className="py-10 gap-y-12 gap-x-7 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          ref={blogScope}
          transition={{ delay: 1.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {blogs?.slice(0, 3).map((blog: Blog, index: number) => (
            <motion.article
              key={index}
              style={{ opacity: 0, scale: 0.3, x: -50 }}
            >
              <BlogCard blog={blog} key={index} />
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
