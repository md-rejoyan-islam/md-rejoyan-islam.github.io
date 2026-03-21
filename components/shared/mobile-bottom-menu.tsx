"use client";

import { BookOpen, FolderOpen, Home, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
  {
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    name: "About",
    icon: User,
    href: "/about",
  },
  {
    name: "Projects",
    icon: FolderOpen,
    href: "/projects",
  },
  {
    name: "Blogs",
    icon: BookOpen,
    href: "/blogs",
  },
];

const MobileBottomMenu = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="md:hidden fixed max-w-[90vw] mx-auto bottom-2 z-[1000] left-0 right-0">
      <nav className="flex items-center bg-white/90 dark:bg-slate-900/90 rounded-full backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-lg justify-around py-1.5 px-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.name}
              className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg transition-colors ${
                pathname === item.href
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-[14px] font-medium">{item.name}</span>
            </Link>
          );
        })}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Theme"
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )
          ) : (
            <div className="h-4 w-4" />
          )}
          <span className="text-[14px] font-medium">Theme</span>
        </button>
      </nav>
    </div>
  );
};

export default MobileBottomMenu;
