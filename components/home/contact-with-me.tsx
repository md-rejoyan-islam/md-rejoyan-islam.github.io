"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import ContactForm from "../form/contact-form";

export function ContactWithMe() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+8801568-816822",
      href: "tel:+8801568-816822",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rejoyanislam0014@gmail.com",
      href: "mailto:rejoyanislam0014@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sylhet, Bangladesh",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: "https://linkedin.com/in/md-rejoyan-islam", label: "LinkedIn" },
    { icon: FiGithub, href: "https://github.com/md-rejoyan-islam", label: "GitHub" },
    { icon: FiTwitter, href: "https://twitter.com/rejoyan", label: "Twitter" },
  ];

  return (
    <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-visible" id="contact">
      {/* Transparent background - no blocking of fixed elements */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 mb-3 sm:mb-6"
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-[14px] sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">Get in Touch</span>
          </motion.div>

          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-indigo-600 dark:text-white mb-2 sm:mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-[14px] sm:text-base md:text-lg">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-4 sm:gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="h-full p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-[#0a0a18] dark:via-[#0d0d20] dark:to-[#08080f] border border-indigo-200 dark:border-indigo-500/20 relative overflow-hidden shadow-lg shadow-indigo-500/10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="text-lg sm:text-2xl font-bold text-indigo-700 dark:text-white mb-1.5 sm:mb-3">Contact Info</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-5 sm:mb-10 leading-relaxed text-[14px] sm:text-base">
                  I typically respond within 24 hours. Feel free to reach out!
                </p>

                {/* Contact items */}
                <div className="space-y-3 sm:space-y-6 mb-5 sm:mb-10">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-2 sm:gap-4"
                    >
                      <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-500 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-indigo-700 dark:text-white font-medium text-[14px] sm:text-base hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-indigo-700 dark:text-white font-medium text-[14px] sm:text-base">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-500 mb-2 sm:mb-4">Follow me</p>
                  <div className="flex gap-2 sm:gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-slate-400 hover:text-indigo-400 dark:hover:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-500/20 transition-colors"
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="h-full p-4 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-[#0f0f1a] dark:to-[#0a0a14] border border-slate-200/80 dark:border-indigo-500/10 shadow-2xl shadow-slate-200/30 dark:shadow-none relative overflow-hidden">
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-8">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-0.5 sm:mb-1">Send a Message</h3>
                    <p className="text-[14px] sm:text-sm text-slate-500 dark:text-slate-400">Fill out the form below</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
