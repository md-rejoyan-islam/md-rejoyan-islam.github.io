"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { JSX, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { LinkPreview } from "./link-preview";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  links,
  containerClassName,
  project,
}: {
  children: React.ReactNode;
  title: string;
  href: string;
  className?: string;
  links: { href: string; name: string }[];
  containerClassName?: string;
  project: JSX.Element;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 h-full  cursor-pointer w-full",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 w-full ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2 "
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2  w-full   top-1/2  flex justify-start items-start  rounded-2xl hover:shadow-[0_16px_16px_rgb(56_60_178/0.3)]  hover:dark:shadow-[0_8px_26px_rgb(30_60_190/0.2)]  border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 h-full w-full", className)}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective
        title={title}
        href={href}
        links={links}
        project={project}
      />
    </div>
  );
};

export const PinPerspective = ({
  links,
  project,
}: {
  links: { href: string; name: string }[];
  project: JSX.Element;
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="invisible">{project}</div>
        <div className="absolute top-0 inset-x-0  flex justify-center gap-3">
          {links?.map((link, index) => (
            <LinkPreview
              url={link?.href || "https://ui.aceternity.com"}
              className="relative cursor-pointer flex space-x-2 items-center  border-[#0d7ded65] text-[#0d7ded] border rounded-md hover:bg-[#0d7ded] hover:text-white py-1.5 px-2.5 "
              key={index}
            >
              {link.name === "GitHub" && <FaGithub />}
              {link.name === "Preview" && <FaExternalLinkAlt />}
              {link.name === "Figma" && <LuFigma />}
            </LinkPreview>
          ))}
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
