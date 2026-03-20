import ProjectsClient from "@/components/projects/projects-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rejoyan | Full Stack Developer",
  description:
    "Explore my portfolio of full-stack projects, web applications, and automation tools built with React, Next.js, Python, and more.",
  openGraph: {
    title: "Projects | Rejoyan | Full Stack Developer",
    description:
      "Explore my portfolio of full-stack projects, web applications, and automation tools built with React, Next.js, Python, and more.",
    url: "https://rejoyan.me/projects",
    siteName: "Rejoyan",
    images: [
      {
        url: "https://md-rejoyan-islam.github.io/images/rejoyan.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Rejoyan Islam Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Rejoyan | Full Stack Developer",
    description:
      "Explore my portfolio of full-stack projects, web applications, and automation tools.",
    images: ["https://md-rejoyan-islam.github.io/images/rejoyan.jpeg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
