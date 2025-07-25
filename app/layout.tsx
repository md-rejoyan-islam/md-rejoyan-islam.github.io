import ScrollToTopButton from "@/components/scroll-to-top-button";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Socials from "@/components/shared/socials";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rejoyan | Full Stack Developer",
  description:
    "I am md rejoyan islam, a full stack developer, mern stack developer, next.js expert, python data analyst. I create beautiful and functional web applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rejoyan | Full Stack Developer",
    description:
      "I am md rejoyan islam, a full stack developer, mern stack developer, next.js expert, python data analyst. I create beautiful and functional web applications.",
    url: "md-rejoyan-islam.github.io",
    images: [
      {
        url: "https://md-rejoyan-islam.github.io/images/rejoyan.jpeg",
        width: 1200,
        height: 630,
        alt: "Md Rejoyan Islam",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-bg-main text-text-main  `}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark"]}
        >
          <Navbar />
          <main className="">{children}</main>
          <Toaster />
          <Socials direction="col" position="fixed" />
          <ScrollToTopButton />
          <Footer />
          {/* <MobileBottomMenu /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
