import { Metadata } from "next";
import AboutClient from "@/components/about/about-client";

export const metadata: Metadata = {
  title: "About Me | Rejoyan | Full Stack Developer",
  description:
    "Learn more about my journey as a full-stack developer. Explore my professional experience, education, certifications, and volunteering projects.",
  openGraph: {
    title: "About Me | Rejoyan | Full Stack Developer",
    description:
      "Learn more about my journey as a full-stack developer. Explore my professional experience, education, certifications, and volunteering projects.",
    url: "https://rejoyan.me/about",
    siteName: "Rejoyan",
    images: [
      {
        url: "https://md-rejoyan-islam.github.io/images/rejoyan.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Rejoyan Islam About",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Rejoyan | Full Stack Developer",
    description:
      "Learn more about my journey, experience, and education as a full-stack developer.",
    images: ["https://md-rejoyan-islam.github.io/images/rejoyan.jpeg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
