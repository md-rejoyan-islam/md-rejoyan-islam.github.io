"use client";
import useDropDownPopupControl from "@/hooks/use-drop_down_popup_control";
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
      href: "/about",
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

  const { isOpen, toggleMenu, dropDownRef } = useDropDownPopupControl();

  const pathname = usePathname();

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });

  // const [openModal, setOpenModal] = useState(false);

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
        "text-[var(--primary-text)] hidden md:block dark:text-[#aeaecc] w-[100%]  z-[1000]  h-[60px] sticky top-0 md:top-1 transition-all duration-700  left-0  mx-auto border-b  px-4 bg-white dark:bg-[#061024] md:bg-transparent    dark:border-[#253359]/40 ",

        scrollHeight > 60 && "md:w-[75%] md:border-none bg-transparent "
      )}
    >
      <div
        className={clsx(
          scrollHeight >= 60
            ? "h-[60px]  delay-500 transition-all duration-500 hidden md:block   -z-10 backdrop-blur-md absolute right-0 mx-auto top-0 left-0 bg-[#e0f3fd]/70 dark:bg-[#19193d]/50 border border-[#c8ebfe] dark:border-[#253359]/70 rounded-md "
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
                <Link href="/" aria-label="Home">
                  <HomeIcon />
                </Link>
              </motion.li>
              {links.map((link, index) => (
                <motion.li
                  className={`${
                    pathname === link.href
                      ? "text-[var(--primary-button)] "
                      : ""
                  } hover:text-[var(--primary-button)]   group h-full flex items-center`}
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
          <Link href="/" className="md:hidden" aria-label="Home">
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
              <div className="h-8 w-8 flex items-center justify-center rounded-xl border  hover:bg-[var(--primary-button)] text-[var(--primary-button)] hover:text-white hover:border-[var(--primary-button)] dark:hover:border-transparent border-[#b4dafc] dark:border-[#253359] transition-all">
                <FaGithub className="w-4 h-4 " />
              </div>
            </HoverTooltip>
          </div>
          <ThemeSwitch />

          <button
            onClick={toggleMenu}
            ref={dropDownRef}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            <RiMenu3Line className="text-3xl  rounded-md border p-[5px]   hover:bg-[var(--primary-button)] text-[var(--primary-button)] hover:text-white hover:border-[var(--primary-button)] dark:hover:border-transparent border-[#b4dafc] dark:border-[#253359] transition-all  " />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white dark:bg-[#0d1533]  absolute top-16 right-3.5 border border-[#0d79ed29] shadow-lg md:hidden  w-[200px] rounded-md">
          <ul className="flex flex-col  p-5 gap-1">
            {links.map((link, index) => (
              <li key={index} className="block group">
                <Link
                  href={link.href}
                  className={clsx(
                    "group flex cursor-pointer items-center gap-2 rounded-xl p-2 transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[#161c40a6] dark:hover:text-white",
                    pathname === link.href &&
                      "bg-[#f9fafb] dark:bg-[#161c40a6] dark:text-white"
                  )}
                >
                  {/* <TiHomeOutline className="text-xl text-[#0d78ed]" /> */}
                  <span className="text-body-4 font-medium capitalize text-metal-600 group-hover:text-[#1c222b] dark:group-hover:text-white/80">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
