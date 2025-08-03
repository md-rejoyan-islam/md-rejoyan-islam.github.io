import { Card } from "@/components/ui/card";

import { motion } from "framer-motion";

export default function ProcessCard({
  step,
  index,
  data,
  handleTabClick,
}: {
  readonly step: number;
  readonly index: number;
  readonly data: { title: string; description: string };
  readonly handleTabClick: (index: number) => void;
}) {
  return (
    <Card className="h-full border-[#c7e4fe] dark:backdrop-blur-[1.5px] dark:border-[#1c2453] dark:bg-[#101531]/60  ">
      <button
        aria-label={`Step ${index + 1} - ${data.title}`}
        className={`relative block w-full h-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg p-6 rounded-md ${
          step === index
            ? " border-l-4 border-l-[var(--primary-button)]"
            : "hover:border-l-4  hover:border-l-[var(--primary-button)]"
        }`}
        onClick={() => handleTabClick(index)}
      >
        <div className="flex items-center gap-4">
          <span
            className={` flex min-h-8 min-w-8 h-8 w-8 items-center justify-center rounded-full text-sm font-semibold
                        ${
                          step === index
                            ? "bg-[var(--primary-button)] text-white"
                            : " bg-[#e1eefa] dark:bg-[#171e46] dark:text-white/60 text-gray-600"
                        }`}
          >
            {index + 1}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white/80">
              {data.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-text-secondary">
              {data.description}
            </p>
          </div>
        </div>
        <div className="  h-full absolute left-0 top-0  rounded-sm w-full">
          <motion.div
            className=" bg-[#63a3f8]/10 rounded-s-xl w-full h-full"
            initial={{ width: "0%" }}
            animate={{
              width: step === index ? "100%" : "0%",
            }}
            transition={{
              duration: step === index ? 4 : 0.3,
              ease: "linear",
            }}
          />
        </div>
      </button>
    </Card>
  );
}
