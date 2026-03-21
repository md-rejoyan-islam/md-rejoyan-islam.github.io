import BackButton from "@/components/back-button";
import { Home } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Rejoyan",
  description: "The page you are looking for does not exist or has been moved.",
  openGraph: {
    title: "404 - Page Not Found | Rejoyan",
    description: "The page you are looking for does not exist or has been moved.",
    url: "https://rejoyan.me/",
    siteName: "Rejoyan",
    images: [
      {
        url: "https://md-rejoyan-islam.github.io/images/rejoyan.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Rejoyan Islam 404",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - Page Not Found | Rejoyan",
    description: "The page you are looking for does not exist or has been moved.",
    images: ["https://md-rejoyan-islam.github.io/images/rejoyan.jpeg"],
  },
};

export default function NotFound() {
  return (
    <div className="md:min-h-[calc(100vh-69px)] min-h-[calc(100vh-80px)] w-full bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {/* 404 Text */}
        <div className="relative">
          <h1 className="text-[150px] font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-in zoom-in duration-500">
            404
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full animate-in slide-in-from-left duration-700" />
        </div>

        {/* Message */}
        <div className="space-y-3 animate-in fade-in duration-700 delay-300">
          <h2 className="text-2xl font-semibold tracking-tight">
            Oops! Page not found
          </h2>
          <p className="text-muted-foreground">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in-50 duration-700 delay-500">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-[#ebf5fe] dark:bg-[#161c40] dark:text-white/70 dark:border-none text-gray-900 px-4 py-2 text-[16px] font-semibold border hover:bg-[#e4f3ff]  shadow-sm  transition-colors w-full sm:w-auto justify-center"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
