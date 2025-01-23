import Image from "next/image";
import { FaCalendarMinus } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface Blog {
  host: { link: string };
  title: string;
  image: string;
  description: string;
  date: string;
  time: string;
}

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div
      onClick={() => {
        window.open(blog.host.link, "_blank");
      }}
      className="cursor-pointer h-full"
    >
      <CardContainer className="inter-var h-full bg-white/50 rounded-xl hover:shadow-2xl hover:shadow-[#78ffc042] dark:hover:shadow-[#373b6d42]">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-[#0d7ded34] w-auto  rounded-xl p-6 border h-full flex justify-between flex-col  hover:dark:bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] hover:bg-grid-small-black/[0.2]">
          <div>
            <CardItem translateZ={50} className="w-full mt-1">
              <Image
                alt={blog.title}
                src={blog.image}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>
            <CardItem translateZ={50} className="w-full mt-6">
              <div className="relative overflow-hidden inline-block">
                <h2 className="relative z-10 text-[#292875] transition duration-200 ease-in-out text-xl font-incognito font-semibold tracking-tight">
                  {blog.title}
                </h2>
              </div>
            </CardItem>
            <CardItem translateZ={50} className="w-full mt-4">
              <p className="text-text-secondary text-[0.95rem]">
                {blog.description}
              </p>
            </CardItem>
          </div>
          <CardItem translateZ={50} className="w-full mt-4">
            <div className="flex items-center gap-x-4 mt-3 text-sm">
              <div className="flex items-center gap-x-2">
                <FaCalendarMinus className="text-[var(--primary-button)] " />
                <time dateTime={blog.date} className="text-text-secondary">
                  {blog.date}
                </time>
              </div>
              <div className="flex items-center gap-x-2">
                <IoTime className="text-[var(--primary-button)] " />
                <div className="text-text-secondary">{blog.time}</div>
              </div>
            </div>
          </CardItem>
          <div className="absolute top-72 h-fit -translate-y-1/3 mx-auto right-0 w-3/4">
            <div className="bg-[#6eccff] dark:bg-[rgba(0,229,255,0.58)] aspect-square opacity-20 w-full max-w-full rounded-full filter blur-3xl" />
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
