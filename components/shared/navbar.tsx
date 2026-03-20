"use client";

import clsx from "clsx";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeSwitch from "../theme/theme-switch";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
  ];

  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScrollHeight(window.scrollY);
      window.addEventListener("scroll", () => {
        setScrollHeight(window.scrollY);
      });
    }
  }, []);

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, scale: 1, x: 0 },
      { duration: 0.2, delay: staggerList }
    );
  }, [staggerList, animate]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500",
        "hidden md:block",
        scrollHeight > 50 ? "py-2" : "py-4"
      )}
    >
      <div
        className={clsx(
          "max-w-6xl mx-auto rounded-2xl transition-all duration-500",
          scrollHeight > 50
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl  shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200/50 dark:border-slate-700/50"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Image src={"/code.png"} width={24} height={24} alt="logo" />
              </div>
            </div>
            <span className="font-bold text-lg gradient-text hidden sm:block">
              Rejoyan
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="h-full">
            <ul className="flex items-center gap-1 h-full" ref={scope}>
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  style={{ opacity: 0, scale: 0.3, x: -50 }}
                  className="h-full flex items-center"
                >
                  <Link
                    href={link.href}
                    aria-label={link.name}
                    className={clsx(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                      pathname === link.href
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="https://github.com/md-rejoyan-islam"
                target="_blank"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/md-rejoyan-islam"
                target="_blank"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />

            {/* Theme Switch */}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
