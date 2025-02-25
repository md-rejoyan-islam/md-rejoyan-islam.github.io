"use client";

import Image from "next/image";

export default function ProjectCard({
  project,
}: {
  project: {
    banner: string;
    name: string;
    description: string;
    techStack: string[];
    links: {
      href: string;
      name: string;
    }[];
  };
}) {
  return (
    <div className="moving-card">
      <div className=" hover:dark:bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] hover:bg-grid-small-black/[0.2]  backdrop-blur-xl relative border border-project-card-border  group overflow-hidden rounded-[15px] gap-x-4 bg-project-card-background border-[#0d7ded3b]  dark:border-[#1c2451] p-4">
        <Image
          src={project?.banner || ""}
          alt="Currencee"
          loading="lazy"
          width={200}
          height={200}
          decoding="async"
          className="dark:bg-[#3a6ac419] bg-[#315bd814] rounded-md p-1 w-full object-cover  h-[180px]"
          style={{ color: "transparent" }}
        />
        <div className="pt-3">
          <h2 className="relative z-10 pt-1 text-[#292875] dark:text-white/80 transition duration-200 ease-in-out text-2xl font-incognit font-semibold tracking-tight ">
            {project?.name}
          </h2>
          <div className="text-sm text-text-secondary py-2">
            {project?.description}
          </div>
        </div>
        <div className="py-2.5">
          <ul className="flex items-center gap-x-3 gap-y-2 flex-wrap">
            {project?.techStack?.map((tech, index) => (
              <li
                className="text-nowrap text-[var(--primary-button)] border border-[#0d7ded2a] bg-black/5 dark:bg-white/5 px-2 py-1 rounded-md text-[10px]"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolut top-3 right-3 z-10 md:hidden ">
          <ul className="flex gap-2 items-center">
            {project?.links?.map((link, index) => (
              <li key={index}>
                <a
                  href={link?.href}
                  className=" flex items-center gap-2 border border-project-card-border  hover:bg-button-bg text-button h-fit rounded-md px-2 text-sm py-1.5"
                >
                  <span>{link?.name} </span>
                  {/* {link?.icon} */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute z-[100] bottom-0 h-fit -translate-y-1/3 mx-auto  right-0 w-3/4">
        <div className="bg-[rgba(87,171,223,0.63)]  dark:bg-[rgba(0,229,255,0.58)] aspect-square  opacity-20 w-full max-w-full  rounded-full filter blur-3xl" />
      </div>
    </div>
  );
}
