"use client";
import { motion } from "framer-motion";
import MobileBottomMenu from "./mobile-bottom-menu";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/md-rejoyan-islam",
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/md-rejoyan-islam",
      label: "LinkedIn",
    },
    { icon: FaTwitter, href: "https://twitter.com/rejoyan", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <div className=" relative">
      <footer className="relative  hidden md:block overflow-hidden">
        {/* Premium background - Light mode uses light colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-50 to-white dark:from-[#0a0a14] dark:via-[#08080f] dark:to-[#0a0a14]" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 dark:via-indigo-500/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bottom Bar */}
          <div className="py-6 border-t border-slate-200 dark:border-slate-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-500 dark:text-slate-500 text-sm text-center sm:text-left"
              >
                © {currentYear} Md. Rejoyan Islam. All rights reserved.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-1"
              >
                Made with{" "}
                <FaHeart className="w-3.5 h-3.5 text-pink-500 animate-pulse" />{" "}
                in Bangladesh
              </motion.p>
            </div>
          </div>
        </div>
      </footer>
      <MobileBottomMenu />
    </div>
  );
}
