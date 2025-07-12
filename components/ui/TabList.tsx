import { motion, MotionStyle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const TabList = ({
  tabs,
  projectsData,
  setProject,
  ref,
  style,
}: {
  tabs: string[];
  projectsData: {
    techStack: string[];
  }[];
  setProject: (projects: { techStack: string[] }[]) => void;
  ref: React.RefObject<HTMLDivElement>;
  style: MotionStyle;
}) => {
  const fired = useRef(false);
  const defaultSelectedTabIndex = 0;
  const [currentLink, setCurrentLink] = useState<{
    index: number;
    left: number | undefined;
    width: number | undefined;
  }>({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined,
  });

  const defaultSelectedTabStyles = [
    "[&:nth-child(1)]:dark:bg-button-bg [&:nth-child(1)]:bg-button-bg",
    "[&:nth-child(2)]:dark:bg-button-bg [&:nth-child(2)]:bg-neutral-950",
    "[&:nth-child(3)]:dark:bg-button-bg [&:nth-child(3)]:bg-neutral-950",
    "[&:nth-child(4)]:dark:bg-button-bg [&:nth-child(4)]:bg-neutral-950",
  ];

  useEffect(() => {
    setCurrentLink(() => ({
      left: document.getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.offsetLeft,
      width: document
        .getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.getBoundingClientRect().width,
      index: defaultSelectedTabIndex,
    }));
  }, []);

  return (
    <div
      className={
        "w-fit relative  rounded-full flex gap-5 items-center justify-center p-2 backdrop-blur-2xl"
      }
      {...{ ref }}
    >
      {tabs.map((link, i) => (
        <motion.button
          key={i}
          style={style}
          id={"uuu-btn-" + i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 1 }}
          onClick={() => {
            fired.current = true;
            setCurrentLink(() => ({
              left: document.getElementById("uuu-btn-" + i)?.offsetLeft,
              width: document
                .getElementById("uuu-btn-" + i)
                ?.getBoundingClientRect().width,
              index: i,
            }));
            if (link === "ALL") {
              setProject([...projectsData]);
            } else {
              setProject(
                [...projectsData].filter((project) =>
                  project.techStack.find((tech) => {
                    return tech.toLowerCase().includes(link.toLowerCase());
                  })
                ) || []
              );
            }
          }}
          className={twMerge(
            "transition-colors border duration-200  text-sm text-text-secondary bg-transparent  hover:bg-[#e9f7fe] hover:text-[var(--primary-button)] flex items-center dark:border-[#222c64] dark:hover:bg-[#161c40] border-[#c8edff] justify-center rounded-md h-fit px-2 py-1 text-nowrap",
            currentLink.index === i &&
              "text-[#000] border-[#c8edff] dark:border-[#222c64] dark:bg-[#161c40] dark:text-white bg-[#c8edff] hover:bg-[#c8edff]",
            fired.current
              ? ""
              : defaultSelectedTabStyles[defaultSelectedTabIndex]
          )}
        >
          {link}
        </motion.button>
      ))}
      <div className={"absolute inset-0 h-full p-2 -z-[1] overflow-hidden"}>
        <div className={"relative h-full w-full overflow-hidden"}>
          <div
            style={{
              left: `calc(${currentLink.left || 0}px - 0.75rem + 0.25rem)`,
              width: `${currentLink.width || 0}px`,
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-md -z-[1]`,
              //just skips animation on page load
              fired.current
                ? "bg-[#c8edff] dark:bg-[#161c40]"
                : "bg-transparent"
            )}
          />
        </div>
      </div>
    </div>
  );
};
