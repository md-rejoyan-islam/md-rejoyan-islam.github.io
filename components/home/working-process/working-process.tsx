"use client";

import {
  AnalysisIcon,
  DeploymentIcon,
  DesignIcon,
  DevelopmentIcon,
  MaintenanceIcon,
  TestingIcon,
} from "@/components/svg";
import { BackgroundLines } from "@/components/ui/background-lines";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HomeSubtittle, HomeTittle } from "../home-page-tittle-subtitle";
import ProcessCard from "./process-card";
import { StepContent } from "./step-count";

interface WorkProcess {
  id: number;
  title: string;
  icon: JSX.Element;
  sort_description: string;
  long_description: string;
  description: string;
}

export default function WorkingProcesses() {
  const [step, setStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // interval ref
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // step content
  function handleIntervalProgress() {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setStep((current) => (current + 1) % 6);
    }, 4000);
  }

  useEffect(() => {
    if (!isAutoPlaying) return;

    handleIntervalProgress();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleTabClick = (newStep: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      handleIntervalProgress();
    }
    setIsAutoPlaying(true);
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  const workProcess: WorkProcess[] = [
    {
      id: 1,
      title: "Requirement analysis",
      icon: <AnalysisIcon />,
      description: "Gathering and analyzing project requirements",
      sort_description:
        "This initial phase involves gathering and understanding project requirements to ensure alignment with client goals. It includes defining project scope, timelines, and technical needs.",
      long_description:
        "We will analyze your requirements and provide you with a detailed proposal. We will analyze your requirements and provide you with a detailed proposal. We will analyze your requirements and provide you with a detailed proposal. We will analyze your requirements and provide you with a detailed proposal.",
    },
    {
      id: 2,
      title: "Design",
      icon: <DesignIcon />,
      description: "Creating user interface and system design",
      sort_description:
        "In this stage, visual and functional designs are created, providing a blueprint of the project's layout, user experience, and interface elements to match client expectations.",
      long_description:
        "We will design a solution that meets your requirements and is easy to maintain. We will design a solution that meets your requirements and is easy to maintain. We will design a solution that meets your requirements and is easy to maintain.",
    },
    {
      id: 3,
      title: "Development",
      icon: <DevelopmentIcon />,
      description: "Implementing the solution",
      sort_description:
        "Here, the actual coding and building take place. Using modern technologies and frameworks, I bring the design to life, ensuring functionality, performance, and compatibility.",
      long_description:
        "We will develop the solution according to the design. We will develop the solution according to the design. We will develop the solution according to the design.",
    },
    {
      id: 4,
      title: "Testing",
      icon: <TestingIcon />,
      description: "Comprehensive testing and quality assurance",
      sort_description:
        "Comprehensive testing is done to identify and fix bugs, ensure usability, and meet quality standards. This includes functionality, security, and cross-device compatibility tests.",
      long_description:
        "We will test the solution, fix bugs, and test again. We will test the solution, fix bugs, and test again. We will test the solution, fix bugs, and test again.",
    },
    {
      id: 5,
      title: "Deployment",
      icon: <DeploymentIcon />,
      description: "Deploying to production environment",
      sort_description:
        "After thorough testing, the project is deployed to the live environment, making it accessible to users. This includes server setup, domain configuration, and initial launch.",
      long_description:
        "Post-launch, I offer ongoing support and updates to keep the project running smoothly, secure, and up-to-date with any required improvements or changes.",
    },
    {
      id: 6,
      title: "Maintenance",
      icon: <MaintenanceIcon />,
      description: "Ongoing support and updates",
      sort_description:
        "Post-launch, I offer ongoing support and updates to keep the project running smoothly, secure, and up-to-date with any required improvements or changes.",
      long_description:
        "We will maintain the solution, fix bugs, and add new features. We will maintain the solution, fix bugs, and add new features. We will maintain the solution, fix bugs, and add new features.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto relative  ">
      <div className="absolute  inset-0 w-full max-w-[600px] h-[400px] sm:h-[600px] lg:max-h-[500px]  mx-auto  bg-[url('/images/output.svg')]  bg-cover -z-10  opacity-10 dark:opacity-[0.04]   bg-no-repeat bg-white/50 dark:bg-transparent "></div>

      <div className="text-center space-y-4">
        <HomeTittle label="How I Work" />
        <HomeSubtittle
          label="I deliver complete development solutions, from analysis to deployment, crafting user-friendly designs, robust systems, and providing ongoing support to ensure secure, high-performance, and client-focused results."
          className="max-w-3xl mx-auto"
        />
      </div>

      <div className="pt-16 mx-auto w-full px-4">
        <div className=" grid  md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Right side: Progress bars */}
          <div className="space-y-3 md:hidden lg:block order-1">
            {workProcess?.slice(0, 3).map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProcessCard
                  step={step}
                  index={index}
                  data={data}
                  handleTabClick={handleTabClick}
                />
              </motion.div>
            ))}
          </div>
          <div className=" gap-4 order-2 sm:grid-cols-2 md:grid hidden  lg:hidden col-span-full">
            {workProcess?.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProcessCard
                  step={step}
                  index={index}
                  data={data}
                  handleTabClick={handleTabClick}
                />
              </motion.div>
            ))}
          </div>
          {/* Left side: Steps */}
          <div className="relative col-span-full lg:col-span-1  min-h-[300px] md:min-h-[200px] flex items-center w-full order-1 lg:order-2">
            <BackgroundLines>
              <AnimatePresence initial={false} custom={direction}>
                <StepContent
                  step={step}
                  direction={direction}
                  key={step}
                  processes={workProcess}
                />
              </AnimatePresence>
            </BackgroundLines>
          </div>
          <div className="space-y-3 flex-1 order-3 md:hidden  lg:block">
            {workProcess?.slice(3, 6).map((data, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProcessCard
                  step={step}
                  index={index + 3}
                  data={data}
                  handleTabClick={handleTabClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
