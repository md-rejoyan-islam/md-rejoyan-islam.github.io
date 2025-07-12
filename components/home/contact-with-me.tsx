"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "../form/contact-form";

export function ContactWithMe() {
  return (
    <section
      className="py-20 px-4  bg-gradient-to-b from-[#fbfdff] to-[#ebf5ff]   border-[#c7e4fe39] dark:from-gray-900/20 dark:via-purple-900/5 dark:to-indigo-900/10  flex items-center"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Let's Connect
          </h2> */}
          <h2 className="text-4xl md:text-5xl  font-bold mb-6 text-[var(--primary-button)]">
            Let&apos;s Connect
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            I&apos;m always excited to collaborate on new projects and explore
            innovative ideas. Drop me a message, and let&apos;s create something
            amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-[#111738]/50 border border-[#aacced] dark:border-[#263663]/70 backdrop-blur-md rounded-2xl shadow-xl p-8 h-full"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Message Me
            </h3>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-full"
          >
            <div className="bg-white h-full dark:bg-[#111738]/50 border border-[#aacced] dark:border-[#263663]/70  backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <ContactInfo icon={Mail} title="Email">
                <a
                  href="mailto:rejoyanislam0014@gmail.com"
                  className="hover:underline"
                >
                  rejoyanislam0014@gmail.com
                </a>
              </ContactInfo>
              <ContactInfo icon={Phone} title="Phone">
                <a
                  href="tel:+8801568-816822"
                  className="hover:underline"
                  aria-label="Phone number"
                >
                  +8801568-816822
                </a>
              </ContactInfo>

              <ContactInfo icon={MapPin} title="Location">
                <span>Sylhet, Bangladesh</span>
              </ContactInfo>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <SocialIcon
                    href="https://github.com/md-rejoyan-islam"
                    icon="github"
                  />
                  <SocialIcon
                    href="https://www.linkedin.com/in/md-rejoyan-islam"
                    icon="linkedin"
                  />
                  <SocialIcon
                    href="https://x.com/md_rejoyanislam"
                    icon="twitter"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex items-center space-x-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#e6f3ff] dark:bg-[#273764]/50 text-[var(--primary-button)] p-3 rounded-full">
        <Icon className="h-6 w-6 " />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">{children}</p>
      </div>
    </motion.div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#ebf5fe] dark:bg-[#273764]/50 text-[var(--primary-button)]  p-3 rounded-full  transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={icon}
    >
      {icon === "github" && <FaGithub />}
      {icon === "linkedin" && <FaLinkedin />}
      {icon === "twitter" && <FaTwitter />}
    </motion.a>
  );
}
