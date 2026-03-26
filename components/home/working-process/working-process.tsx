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
  icon: React.ReactElement;
  sort_description: string;
  long_description: string;
  description: string;
}

export default function WorkingProcesses() {
  const [step, setStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

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
    { id: 1, title: "Requirement Analysis", icon: <AnalysisIcon />, description: "Gathering and analyzing project requirements", sort_description: "This initial phase involves gathering and understanding project requirements to ensure alignment with client goals.", long_description: "We will analyze your requirements and provide you with a detailed proposal including scope, timelines, and technical needs." },
    { id: 2, title: "Design", icon: <DesignIcon />, description: "Creating user interface and system design", sort_description: "Visual and functional designs are created, providing a blueprint of the project's layout and user experience.", long_description: "We will design a solution that meets your requirements and is easy to maintain with modern UI/UX principles." },
    { id: 3, title: "Development", icon: <DevelopmentIcon />, description: "Implementing the solution", sort_description: "The actual coding and building take place using modern technologies and frameworks.", long_description: "We develop the solution according to the design with clean, maintainable code." },
    { id: 4, title: "Testing", icon: <TestingIcon />, description: "Comprehensive testing and quality assurance", sort_description: "Comprehensive testing is done to identify and fix bugs, ensure usability, and meet quality standards.", long_description: "We test the solution thoroughly, fix bugs, and ensure cross-device compatibility." },
    { id: 5, title: "Deployment", icon: <DeploymentIcon />, description: "Deploying to production environment", sort_description: "After thorough testing, the project is deployed to the live environment.", long_description: "Server setup, domain configuration, and initial launch to make it accessible to users." },
    { id: 6, title: "Maintenance", icon: <MaintenanceIcon />, description: "Ongoing support and updates", sort_description: "Post-launch support and updates to keep the project running smoothly.", long_description: "We maintain the solution, fix bugs, and add new features as needed." },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full max-w-[600px] h-[400px] sm:h-[600px] lg:max-h-[500px] mx-auto bg-[url('/images/output.svg')] bg-cover opacity-[0.03] dark:opacity-[0.02] bg-no-repeat" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12 space-y-2 sm:space-y-4"
        >
          <HomeTittle label="How I Work" />
          <HomeSubtittle label="A streamlined process from analysis to deployment, ensuring high-quality results" />
        </motion.div>

        <div className="pt-4 sm:pt-8 mx-auto w-full px-2 sm:px-4">
          {/* Mobile Layout - Simple stacked cards */}
          <div className="md:hidden space-y-3">
            {workProcess?.map((data, index) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProcessCard step={-1} index={index} data={data} handleTabClick={() => {}} isMobile={true} />
              </motion.div>
            ))}
          </div>

          {/* Tablet Layout - Center section on top, then 2 column grid */}
          <div className="hidden md:flex lg:hidden flex-col gap-6">
            {/* Center: Steps - on top for tablet */}
            <div className="relative min-h-[280px] h-[280px] overflow-hidden flex items-center justify-center w-full">
              <BackgroundLines>
                <AnimatePresence initial={false} custom={direction}>
                  <StepContent step={step} direction={direction} key={step} processes={workProcess} />
                </AnimatePresence>
              </BackgroundLines>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {workProcess?.map((data, index) => (
                <motion.div
                  key={data.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProcessCard step={step} index={index} data={data} handleTabClick={handleTabClick} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - 3 column with center animation */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Left side: Progress bars */}
            <div className="space-y-2 sm:space-y-3">
              {workProcess?.slice(0, 3).map((data, index) => (
                <motion.div
                  key={data.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProcessCard step={step} index={index} data={data} handleTabClick={handleTabClick} />
                </motion.div>
              ))}
            </div>

            {/* Center: Steps */}
            <div className="relative min-h-[300px] flex items-center w-full">
              <BackgroundLines>
                <AnimatePresence initial={false} custom={direction}>
                  <StepContent step={step} direction={direction} key={step} processes={workProcess} />
                </AnimatePresence>
              </BackgroundLines>
            </div>

            {/* Right side: Progress bars */}
            <div className="space-y-2 sm:space-y-3">
              {workProcess?.slice(3, 6).map((data, index) => (
                <motion.div
                  key={data.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProcessCard step={step} index={index + 3} data={data} handleTabClick={handleTabClick} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
