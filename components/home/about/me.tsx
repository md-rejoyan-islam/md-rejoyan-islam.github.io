import NiceBtn from "@/components/button/nice-btn";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbUserUp } from "react-icons/tb";
import { HomeSubtittle } from "../home-page-tittle-subtitle";

export default function Me() {
  const router = useRouter();
  return (
    <div className="lg:grid  grid-cols-5 gap-4 sm:gap-8 items-center ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative mb-6 sm:mb-10 lg:col-span-2   max-w-[250px] sm:max-w-[400px] w-full sm:w-[380px]  lg:max-w-[350px]  mx-auto"
      >
        <div className="absolute inset-0 bg-blue-600 rounded-xl sm:rounded-3xl rotate-6 hover:rotate-6 opacity-20 " />
        <Image
          src="/images/rejoyan.jpeg"
          alt="Profile"
          width={500}
          height={600}
          className="rounded-lg sm:rounded-2xl relative z-10 w-full object-cover saturate-50 hue-rotate-90 hover:saturation-100 hover:hue-rotate-0"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="col-span-3 max-w-2xl space-y-2 sm:space-y-4 lg:space-y-6 mx-auto text-center lg:text-left  lg:max-w-full"
      >
        <HomeSubtittle
          label="I'm a Full Stack Developer passionate about building scalable web applications — from modern React.js / Next.js frontends to robust Node.js / Express.js backends, with MongoDB and SQL for data management."
          className="leading-relaxed text-base"
        />
        <HomeSubtittle
          label="I work with RESTful & GraphQL APIs, Redux for state management, Python for data analysis and ML workflows, and n8n for intelligent business automation."
          className="leading-relaxed text-base"
        />
        <HomeSubtittle
          label="Always learning, always building — focused on solving real problems through clean, efficient code."
          className="leading-relaxed text-base"
        />
     

        <div className="mx-auto w-full flex justify-center lg:justify-start">
          <NiceBtn
            label="Let's Connect"
            icon={<TbUserUp className="w-3 h-3 sm:w-4 sm:h-4" />}
            iconPosition="right"
            className="mt-2 sm:mt-6 text-[14px] sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-[#0d7ded] hover:text-white"
            onClick={() => {
              router.push("#contact");
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
