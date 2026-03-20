"use client";
import { socialLinks } from "@/data/socials";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Socials({ direction = "row", position = "relative" }) {
  const [scope, animate] = useAnimate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto hover effect - cycle through icons continuously
  useEffect(() => {
    if (position !== "fixed") return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Only run auto animation when not hovering
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % socialLinks.length;
          return next;
        });
      }, 1500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [position, isHovered]);

  return (
    <div
      className={` ${position} ${
        position === "fixed" &&
        " invisible min-[1400px]:visible max-xl:flex left-7 bottom-0 top-0 z-50"
      }  flex ${
        direction === "col" ? "justify-center" : "justify-center md:justify-end"
      } flex-${direction}   `}
    >
      <ul
        className={`flex flex-${direction} gap-6 items-center ${
          direction === "col" && "max-xl:gap-6 "
        } text-xl `}
        ref={scope}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredIndex(null);
        }}
      >
        {socialLinks.map((social, index) => {
          // Show hover effect when: hovered (manual) OR auto (when not hovering)
          const isActive = isHovered
            ? hoveredIndex === index
            : activeIndex === index;

          return (
            <motion.li
              className="icons"
              key={social.name}
              style={{ opacity: 0, scale: 0.3, x: -50 }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Link
                href={social.url}
                target="_blank"
                className="inline-flex items-center relative text-[var(--primary-button)]"
                aria-label={social.name}
              >
                <div
                  className={`layer ${
                    direction === "col" ? "w-7 h-7 " : "w-8 h-8"
                  } transition-transform duration-300 relative`}
                >
                  {/* Layer 1 */}
                  <motion.span
                    className="absolute top-0 left-0 h-full w-full border rounded-[5px] border-[var(--primary-button)]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isActive ? 0.2 : 0,
                      x: isActive ? 3 : 0,
                      y: isActive ? -3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Layer 2 */}
                  <motion.span
                    className="absolute top-0 left-0 h-full w-full border rounded-[5px] border-[var(--primary-button)]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isActive ? 0.4 : 0,
                      x: isActive ? 7 : 0,
                      y: isActive ? -7 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  />
                  {/* Layer 3 */}
                  <motion.span
                    className="absolute top-0 left-0 h-full w-full border rounded-[5px] border-[var(--primary-button)]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isActive ? 0.6 : 0,
                      x: isActive ? 11 : 0,
                      y: isActive ? -11 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                  {/* Layer 4 */}
                  <motion.span
                    className="absolute top-0 left-0 h-full w-full border rounded-[5px] border-[var(--primary-button)]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isActive ? 0.8 : 0,
                      x: isActive ? 15 : 0,
                      y: isActive ? -15 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  />

                  {/* Icon */}
                  <motion.span
                    className="absolute top-0 left-0 h-full w-full border rounded-[5px] flex items-center justify-center text-[16px] leading-[18px] border-[var(--primary-button)]"
                    animate={{
                      x: isActive ? 15 : 0,
                      y: isActive ? -15 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.span>
                </div>

                {/* Label */}
                <motion.div
                  className="absolute text-[var(--primary-button)] left-1/2 bottom-[-24px] text-[12px] font-semibold transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {social.name}
                </motion.div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
