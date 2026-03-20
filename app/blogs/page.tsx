import BlogsClient from "@/components/blogs/blogs-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Rejoyan | Full Stack Developer",
  description:
    "Read my thoughts, tutorials, and insights on full stack development, Next.js, React, and Python data analysis. I share what I learn to help others grow.",
  openGraph: {
    title: "Blogs | Rejoyan | Full Stack Developer",
    description:
      "Read my thoughts, tutorials, and insights on full stack development, Next.js, React, and Python data analysis. I share what I learn to help others grow.",
    url: "https://rejoyan.me/blogs",
    siteName: "Rejoyan",
    images: [
      {
        url: "https://md-rejoyan-islam.github.io/images/rejoyan.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Rejoyan Islam Blogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Rejoyan | Full Stack Developer",
    description:
      "Read my thoughts, tutorials, and insights on full stack development, Next.js, React, and Python data analysis.",
    images: ["https://md-rejoyan-islam.github.io/images/rejoyan.jpeg"],
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
