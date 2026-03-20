import { AboutMe } from "@/components/home/about/about-me";
import { ContactWithMe } from "@/components/home/contact-with-me";
import Hero from "@/components/home/hero";
import LearningTechnologies from "@/components/home/learning-technologies";
import ProvideServices from "@/components/home/provide-services";
import ShowcaseBlogs from "@/components/home/showcase-blogs";
import ShowcaseProjects from "@/components/home/showcase-projects";
import WorkingProcesses from "@/components/home/working-process/working-process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejoyan | Full Stack Developer",
  description:
    "I am Md Rejoyan Islam, a professional full-stack developer, MERN stack enthusiast, Next.js expert, and data analyst. I create beautiful, functional, and scalable web applications.",
  openGraph: {
    title: "Rejoyan | Full Stack Developer",
    description:
      "Professional full-stack developer portfolio. I create beautiful, functional, and highly scalable web applications.",
    url: "https://rejoyan.me/",
    siteName: "Rejoyan",
    images: [
      {
        url: "https://md-rejoyan-islam.github.io/images/rejoyan.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Rejoyan Islam Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rejoyan | Full Stack Developer",
    description:
      "Professional full-stack developer portfolio. I create beautiful, functional, and highly scalable web applications.",
    images: ["https://md-rejoyan-islam.github.io/images/rejoyan.jpeg"],
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutMe />
      <LearningTechnologies />
      <ProvideServices />
      <WorkingProcesses />
      <ShowcaseProjects />
      <ShowcaseBlogs />
      <ContactWithMe />
    </div>
  );
}
