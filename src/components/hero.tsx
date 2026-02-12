"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function Hero() {
  const words = [
    { text: "Hello!", className: "text-[var(--foreground)]" },
    { text: "I'm", className: "text-[var(--foreground)]" },
    { text: "Noman", className: "text-[var(--foreground)] font-black" },
  ];

  return (
    <section className="retro-section min-h-[calc(100vh-6rem)] flex items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 sm:gap-10 lg:gap-14">
        <div className="w-full lg:w-auto">
          <div className="retro-panel p-5 sm:p-7 bg-[var(--secondary)] max-w-2xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black">
              <TypewriterEffect words={words} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-[var(--muted-foreground)] mt-4 leading-relaxed max-w-xl"
            >
              I build EdTech and commerce systems for growing businesses and ship production-ready solutions fast.
              Recently delivered <strong className="text-[var(--foreground)]">Alriyan</strong> in <strong className="text-[var(--foreground)]">90 days</strong> with a 3-person team.
              Result: <strong className="text-[var(--foreground)]">+21% revenue</strong>, <strong className="text-[var(--foreground)]">~35% time saved</strong>, and <strong className="text-[var(--foreground)]">80% better UX</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-3 mt-6"
            >
              <motion.a href="#contact" className="retro-btn">
                Start a Project
              </motion.a>

              <a href="#work" className="retro-link text-sm sm:text-base">
                View Featured Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              {[
                { href: "https://github.com/AlNomanCSE", icon: <FaGithub className="text-xl sm:text-2xl" />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/abdullahalnomancse/", icon: <FaLinkedin className="text-xl sm:text-2xl" />, label: "LinkedIn" },
                { href: "https://leetcode.com/u/Abdullah_noman/", icon: <SiLeetcode className="text-xl sm:text-2xl" />, label: "LeetCode" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="w-11 h-11 rounded-full border-2 border-black bg-[var(--primary)] text-black flex items-center justify-center"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute -inset-3 rounded-full border-4 border-black bg-[var(--primary)]" />
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-black">
            <Image src="/profileimage.png" alt="Noman's Profile" width={500} height={500} className="w-full h-full object-cover" priority />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full border-2 border-black bg-[var(--secondary)] text-[10px] sm:text-xs font-extrabold text-black whitespace-nowrap shadow-[3px_3px_0_#000]">
            Software Developer & Product Manager
          </div>
        </div>
      </div>
    </section>
  );
}
