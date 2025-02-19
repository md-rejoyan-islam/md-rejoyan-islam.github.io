"use client";
import { socialLinks } from "@/data/socials";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Socials({ direction = "row", position = "relative" }) {
  const [scope, animate] = useAnimate();

  const staggerList = stagger(0.1, { startDelay: 0.6 });
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
    <div
      className={` ${position} ${
        position === "fixed" &&
        " invisible min-[1400px]:visible max-xl:flex left-7 bottom-0 top-0"
      }  flex ${
        direction === "col" ? "justify-center" : "justify-center md:justify-end"
      } flex-${direction}   `}
    >
      <ul
        className={`flex flex-${direction} gap-6 items-center ${
          direction === "col" && "max-xl:gap-6 "
        } text-xl `}
        ref={scope}
      >
        {socialLinks.map((social, index) => (
          <motion.li
            className="icons"
            key={index}
            style={{ opacity: 0, scale: 0.3, x: -50 }}
          >
            <Link
              href={social.url}
              target="_blank"
              className="inline-flex items-center relative group text-[var(--primary-button)] "
            >
              <div
                className={`layer ${
                  direction === "col" ? "w-7 h-7 " : "w-8 h-8"
                } transition-transform duration-300`}
              >
                <span className=" group-hover:shadow-[-1px_1px_3px_var(--primary-button)] border-buttono pacity-0 group-hover:opacity-[0.2] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>
                <span className="group-hover:shadow-[-1px_1px_3px_var(--primary-button)] border-button opacity-0 group-hover:opacity-[0.4] transform translate-x-[3px] translate-y-[-3px] max-xl:translate-x-[3px] max-xl:translate-y-[-3px] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>
                <span className="group-hover:shadow-[-1px_1px_3px_var(--primary-button)] border-button opacity-0 group-hover:opacity-[0.6] transform translate-x-[7px] translate-y-[-7px] max-xl:translate-x-[6px] max-xl:translate-y-[-6px] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>
                <span className="group-hover:shadow-[-1px_1px_3px_var(--primary-button)] border-button opacity-0 group-hover:opacity-[0.8] transform translate-x-[11px] translate-y-[-11px] max-xl:translate-x-[9px] max-xl:translate-y-[-9px] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>

                <span className="group-hover:shadow-[-1px_1px_3px_var(--primary-button)] border-[var(--primary-button)]   hover:opacity-100 hover:transform group-hover:translate-x-[15px] group-hover:translate-y-[-15px] max-xl:group-hover:translate-x-[12px] max-xl:group-hover:translate-y-[-12px]  fab absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 flex items-center justify-center text-[16px] leading-[18px] ">
                  {social.icon}
                </span>
              </div>

              <div className="   absolute text-[var(--primary-button)] left-1/2 bottom-[-24px] opacity-0 group-hover:opacity-100 text-[12px] font-semibold transform -translate-x-1/2 transition-all duration-300 ease-in-out">
                {social.name}
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
