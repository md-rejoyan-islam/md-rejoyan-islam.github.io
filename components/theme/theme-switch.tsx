"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineImportantDevices } from "react-icons/md";
import { useOnClickOutside } from "usehooks-ts";
import HoverTooltip from "../tooltip";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // New state to control dropdown visibility
  const { setTheme, theme } = useTheme();
  const ref = useRef(null);
  useEffect(() => setMounted(true), []);
  useOnClickOutside(ref, () => setIsOpen(false));
  if (!mounted)
    return (
      <button
        className="bg-background-secondary h-8 w-8 flex items-center border border-[var(--secondary-hover-button)] hover:gap-4 transition-all rounded-xl dark:border-[#253359] uppercase justify-center  gap-2 "
        aria-label="Theme Changer Button"
      >
        {/* <FiSun key={1} /> */}
      </button>
    );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenus = [
    {
      id: 1,
      name: "Light",
      key: "light",
      icon: <FiSun key={1} />,
    },
    {
      id: 2,
      name: "Dark",
      key: "dark",
      icon: <LuMoonStar key={2} />,
    },
    {
      id: 3,
      name: "System",
      key: "system",
      icon: <MdOutlineImportantDevices key={3} />,
    },
  ];

  return (
    <div ref={ref} className="relative inline-block text-left">
      <HoverTooltip title="Change Theme">
        <div
          className=" hover:bg-[var(--primary-button)] text-[var(--primary-button)] hover:text-white hover:border-[var(--primary-button)] border border-[#b4dafc] dark:border-[#253359] dark:hover:border-transparent  h-8 w-8  hover:gap-4 transition-all rounded-xl   justify-center flex gap-2 items-center   "
          onClick={toggleDropdown}
        >
          {toggleMenus.map((themeItem) => {
            if (themeItem.key === theme) {
              return themeItem.icon;
            }
          })}
        </div>
      </HoverTooltip>

      {isOpen && (
        <div className="absolute right-0 bg-[var(--original-bg)] dark:bg-[#1f1d45] z-30 mt-2 w-32 origin-top-right rounded-md text-text-main bg-dropdown shadow-xl">
          <div className="py-1">
            {toggleMenus.map((themeItem, index) => {
              return (
                <button
                  key={themeItem.id}
                  aria-label="Theme Changer Button"
                  onClick={() => {
                    setTheme(themeItem.key);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    " hover:bg-[#e3f3fc] dark:hover:bg-[#0d7ded]  flex gap-2 items-center w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover",
                    themeItem.key === theme
                      ? "bg-[#ebf5fb] dark:text-white dark:bg-[#0d7ded]/80 "
                      : "",
                    index === 0
                      ? "rounded-t-md"
                      : index === toggleMenus.length - 1
                      ? "rounded-b-md"
                      : ""
                  )}
                >
                  {themeItem.icon}
                  {themeItem.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
