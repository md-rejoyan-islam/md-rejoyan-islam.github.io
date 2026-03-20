import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub, LuTwitter } from "react-icons/lu";

// Personal Information
export const personalInfo = {
  name: "Md. Rejoyan Islam",
  firstName: "Md.",
  lastName: "Rejoyan Islam",
  role: "Full Stack Developer",
  title: "MERN Stack & Next.js Developer",
  bio: "MERN Stack & Next.js developer specializing in full-stack web applications, Python data analysis, and n8n workflow automation. I transform ideas into scalable digital solutions.",
} as const;

// Contact Information
export const contactInfo = {
  email: "rejoyanislam0014@gmail.com",
  phone: "+8801568-816822",
  phoneFormatted: "+880 1568-816822",
  location: "Sylhet, Bangladesh",
  whatsapp: "+8801568816822",
} as const;

// Resume & Portfolio
export const links = {
  resume: "/pdf/REJOYAN_RESUME.pdf",
  portfolio: "https://rejoyan-portfolio.vercel.app",
} as const;

// Social Media Links
export const socialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/md-rejoyan-islam",
    username: "md-rejoyan-islam",
    icon: LuGithub,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/md-rejoyan-islam",
    username: "md-rejoyan-islam",
    icon: FiLinkedin,
  },
  twitter: {
    name: "Twitter / X",
    url: "https://x.com/md_rejoyanislam",
    username: "@md_rejoyanislam",
    icon: LuTwitter,
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/md.rej0yan.islam",
    username: "@md.rej0yan.islam",
    icon: FaInstagram,
  },
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/md.rejoyan.islam",
    username: "md.rejoyan.islam",
    icon: FaFacebook,
  },
} as const;

// Social links as array for easy iteration
export const socialLinksArray = Object.values(socialLinks);

// Skills
export const skills = {
  primary: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Express.js"],
  secondary: ["Python", "PostgreSQL", "Tailwind CSS", "Docker", "Git", "n8n"],
  learning: ["AWS", "GraphQL", "Redis"],
} as const;

// Roles for animation
export const roles = [
  "MERN Stack Developer",
  "Next.js Expert",
  "Python Data Analyst",
  "n8n Automation Expert",
] as const;

// Stats
export const stats = [
  { value: 2, label: "Years of Experience" },
  { value: 20, label: "Total Projects" },
  { value: 15, label: "Happy Clients" },
  { value: 5, label: "n8n Automations" },
] as const;

// Helper functions
export const getMailtoLink = () => `mailto:${contactInfo.email}`;
export const getTelLink = () => `tel:${contactInfo.phone}`;
export const getWhatsAppLink = () => `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`;
