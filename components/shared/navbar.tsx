"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import clsx from "clsx";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { HomeIcon } from "../svg";
import ThemeSwitch from "../theme/theme-switch";
import HoverTooltip from "../tooltip";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
      active: true,
    },
    {
      name: "About",
      href: "/#about",
      active: false,
    },
    {
      name: "Projects",
      href: "/projects",
      active: false,
    },
    {
      name: "Blogs",
      href: "/blogs",
      active: false,
    },
  ];

  const pathname = usePathname();

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });

  const [openModal, setOpenModal] = useState(false);

  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScrollHeight(window.scrollY);
      window.addEventListener("scroll", () => {
        setScrollHeight(window.scrollY);
      });
    }
  }, []);

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: staggerList,
      }
    );
  }, [staggerList, animate]);

  return (
    <header
      className={clsx(
        "text-[var(--primary-text)] w-[100%]  z-50  h-[60px] sticky top-1 transition-all duration-700  left-0  mx-auto border-b  px-4 bg-white md:bg-transparent  ",

        scrollHeight > 60 && "md:w-[75%] md:border-none bg-transparent "
      )}
    >
      <div
        className={clsx(
          scrollHeight >= 60
            ? "h-[60px]  delay-500 transition-all duration-500 hidden md:block   -z-10 backdrop-blur-md absolute right-0 mx-auto top-0 left-0 bg-[#e0f3fd]/70 border border-[#c8ebfe] rounded-md "
            : "hidden",
          scrollHeight < 60 && "bg-white"
        )}
      ></div>
      <div
        className="flex items-center justify-between   h-full max-w-7xl mx-auto"
        id="up-btn"
      >
        <div className="h-full flex items-center">
          {/* for medium and large screens  */}
          <nav className="h-full">
            <ul
              className="hidden md:flex font-semibold text-sm  h-full gap-8 justify-center items-center"
              ref={scope}
            >
              <motion.li style={{ opacity: 0, scale: 0.3, x: -50 }}>
                <Link href="/">
                  <HomeIcon />
                </Link>
              </motion.li>
              {links.map((link, index) => (
                <motion.li
                  className={`${
                    pathname === link.href ? "text-[var(--primary-button)]" : ""
                  } hover:text-[var(--primary-button)]  group h-full flex items-center`}
                  key={index}
                  style={{ opacity: 0, scale: 0.3, x: -50 }}
                >
                  <div className="relative overflow-hidden  h-full flex items-center px-0">
                    <Link href={link.href} className="relative z-10">
                      {link.name}
                    </Link>
                    {pathname === link.href && (
                      <span className="absolute inset-0 border-b-2 border-[var(--primary-button)] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 translate-x-0"></span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </nav>
          <Link href="/" className="md:hidden">
            <Image src={"/code.png"} width={40} height={40} alt="code" />
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <div
            onClick={() => {
              window.open("https://github.com/md-rejoyan-islam", "_blank");
            }}
          >
            <HoverTooltip title="GitHub">
              <div className="h-8 w-8 flex items-center justify-center rounded-xl border  hover:bg-[var(--primary-button)] text-[var(--primary-button)] hover:text-white hover:border-[var(--primary-button)] border-[#b4dafc] transition-all">
                <FaGithub className="w-4 h-4 " />
              </div>
            </HoverTooltip>
          </div>
          <ThemeSwitch />
          <Sheet onOpenChange={setOpenModal} open={openModal}>
            <SheetTrigger className="md:hidden">
              <RiMenu3Line className="text-3xl border-[var(--secondary-hover-button)] rounded-md border p-[5px] hover:bg-[var(--secondary-button)] text-[var(--primary-text)]  " />
            </SheetTrigger>

            <SheetContent
              className="z-[1000] border-[var(--secondary-hover-button)] text-[#000] md:hidden sm:max-w-[325px]  max-w-[50vw] min-w-[250px] bg-[#fff]   backdrop-blur-[3px] "
              side={"right"}
            >
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>

              <nav className=" pt-6  w-full h-full  flex justify-center   ">
                <ul className="flex md:hidden px-6 flex-col gap-12 items-center justify-start  ">
                  {links.map((link, index) => (
                    <li
                      className="hover:opacity-70"
                      key={index}
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
