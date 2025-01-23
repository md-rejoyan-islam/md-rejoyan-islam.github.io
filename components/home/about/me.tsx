import NiceBtn from "@/components/button/nice-btn";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbUserUp } from "react-icons/tb";
import { HomeSubtittle } from "../home-page-tittle-subtitle";

export default function Me() {
  const router = useRouter();
  return (
    <div className="lg:grid  grid-cols-5 gap-8 items-center ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative mb-10 lg:col-span-2   max-w-[400px] w-full sm:w-[380px]  lg:max-w-[350px]  mx-auto"
      >
        <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-10 " />
        <Image
          src="/images/rejoyan.jpeg"
          alt="Profile"
          width={500}
          height={500}
          className="rounded-2xl relative z-10 w-full object-cover "
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="col-span-3 max-w-2xl space-y-4  lg:space-y-6 mx-auto text-center lg:text-left  lg:max-w-full"
      >
        <HomeSubtittle
          label="I'm a full-stack web developer with a passion for creating
          impactful digital experiences. My journey began with JavaScript and
          Python, and I've since mastered both SQL and NoSQL databases,
          ensuring efficient data solutions."
          className="leading-relaxed  sm:text-lg"
        />
        <HomeSubtittle
          label=" I specialize in React.js with Next.js for modern, user-friendly
          interfaces, utilizing Redux for state management, and Node.js for
          robust server-side development. I also build APIs using RESTful or
          GraphQL approaches."
          className="leading-relaxed  sm:text-lg"
        />
        <HomeSubtittle
          label="I'm always eager to learn and adapt to new technologies, and
          I'm excited about the potential of tech to solve problems and
          enhance user experiences."
          className="leading-relaxed  sm:text-lg"
        />

        <div className="mx-auto w-full flex justify-center lg:justify-start">
          <NiceBtn
            label="Let's Connect"
            icon={<TbUserUp className="w-4 h-4" />}
            iconPosition="right"
            className=" mt-3 sm:mt-6 hover:bg-[#0d7ded] hover:text-white"
            onClick={() => {
              router.push("#contact");
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
