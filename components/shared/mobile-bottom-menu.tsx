"use client";

import { BookOpen, FolderOpen, Home, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

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
  return (
    <div className="md:hidden fixed max-w-[95vw] md:max-w-[90vw] mx-auto bottom-1  z-[1000] left-0 right-0">
      <nav className="flex items-center bg-white/80 dark:bg-[#061024]/80 rounded-xl   backdrop-blur-sm border border-sky-600/20 z-50 justify-around py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.name}
              className={`flex space-y-2 dark:hover:bg-slate-900 rounded-md hover:bg-slate-100 flex-col items-center  h-auto py-1 px-3 ${
                pathname === item.href
                  ? "text-blue-600"
                  : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center h-full  hover:bg-slate-100 dark:hover:bg-slate-900 py-1 px-3 text-muted-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}

          <span className="text-xs font-medium">Theme</span>
        </Button>
      </nav>
    </div>
  );
};

export default MobileBottomMenu;
