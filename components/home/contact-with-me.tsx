"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import ContactForm from "../form/contact-form";

export function ContactWithMe() {
  return (
    <section
      className="py-20 px-4  bg-gradient-to-b from-sky-50/50 via-teal-100/50 to-teal-50/50   border-[#c7e4fe39] dark:from-gray-900/30 dark:via-teal-900/20 dark:to-indigo-900/10  flex items-center"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl  font-bold mb-6 text-[var(--primary-button)]">
            Let&apos;s Connect
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            I&apos;m always excited to collaborate on new projects and explore
            innovative ideas. Drop me a message, and let&apos;s create something
            amazing together!
          </p>
        </motion.div>

        <div>
          <div className="grid md:grid-cols-5  border border-[#38a7c967] dark:border-[#263663]/70 rounded-xl ">
            <div className="md:col-span-2 rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-gradient-to-l from-sky-600/50 to-teal-600/80 dark:from-sky-500/40  dark:to-teal-500/70 p-8 text-white text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="mb-8 opacity-90">
                Fill out the form and I will get in touch with you as soon as
                possible.
              </p>
              <div className="space-y-4 mx-auto">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="p-2 rounded-full bg-white/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+8801568-816822"
                    className="hover:underline"
                    aria-label="Phone number"
                  >
                    +8801568-816822
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="p-2 rounded-full bg-white/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Sylhet, Bangladesh</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="p-2 rounded-full bg-white/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:rejoyanislam0014@gmail.com"
                    className="hover:underline"
                    target="_blank"
                  >
                    rejoyanislam0014@gmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="p-2 rounded-full bg-white/20">
                    <FiLinkedin />
                  </div>
                  <a
                    href="https://linkedin.com/in/md-rejoyan-islam"
                    target="_blank"
                    className="hover:underline"
                  >
                    linkedin.com/in/md-rejoyan-islam
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 bg-white dark:bg-[#111738]/50  rounded-b-xl md:rounded-l-none  md:rounded-r-xl  p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
