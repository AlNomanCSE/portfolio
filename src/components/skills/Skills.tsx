"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaCode, FaDatabase, FaMobile, FaTools, FaJava, FaFileExcel } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiReact as SiReactNative,
  SiExpo,
  SiGit,
  SiDocker,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiJavascript,
  SiPhp,
  SiPython,
  SiCplusplus,
  SiRedis,
  SiJira,
  SiTrello,
  SiPostman,
  SiGithubactions,
  SiComposer,
  SiScrumalliance,
  SiUv,
} from "react-icons/si";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
  level?: "Core" | "Advanced" | "Working";
};

type SkillCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: <FaCode className="text-black" />,
    description: "Programming languages used across product and engineering work",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" />, level: "Core" },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: "Core" },
      { name: "PHP", icon: <SiPhp className="text-[#777BB4]" />, level: "Working" },
      { name: "Java", icon: <FaJava className="text-[#007396]" />, level: "Working" },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" />, level: "Working" },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, level: "Working" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: <FaCode className="text-black" />,
    description: "Building responsive and interactive web interfaces",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: "Core" },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" />, level: "Core" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Advanced" },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" />, level: "Advanced" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <FaDatabase className="text-black" />,
    description: "Server-side systems, APIs, and data infrastructure",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: "Core" },
      { name: "Express.js", icon: <SiExpress className="text-black" />, level: "Advanced" },
      { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" />, level: "Working" },
      { name: "Spring Boot", icon: <SiSpring className="text-[#6DB33F]" />, level: "Working" },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, level: "Working" },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: "Working" },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" />, level: "Working" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: <FaMobile className="text-black" />,
    description: "Cross-platform mobile application development",
    skills: [
      { name: "React Native", icon: <SiReactNative className="text-[#61DAFB]" />, level: "Working" },
      { name: "Expo", icon: <SiExpo className="text-black" />, level: "Working" },
    ],
  },
  {
    id: "management",
    name: "Management & Ops",
    icon: <FaTools className="text-black" />,
    description: "Planning, execution tracking, and team coordination",
    skills: [
      { name: "Excel (Advanced Tracking)", icon: <FaFileExcel className="text-[#217346]" />, level: "Core" },
      { name: "Jira", icon: <SiJira className="text-[#0052CC]" />, level: "Advanced" },
      { name: "Trello", icon: <SiTrello className="text-[#0052CC]" />, level: "Advanced" },
      { name: "Agile/Scrum", icon: <SiScrumalliance className="text-[#009FDA]" />, level: "Advanced" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: <FaTools className="text-black" />,
    description: "Developer tooling and deployment automation",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" />, level: "Core" },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, level: "Advanced" },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, level: "Advanced" },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" />, level: "Working" },
      { name: "UV", icon: <SiUv className="text-[#DE5FE9]" />, level: "Working" },
      { name: "Composer", icon: <SiComposer className="text-[#885630]" />, level: "Working" },
    ],
  },
];

const levelClass: Record<NonNullable<SkillItem["level"]>, string> = {
  Core: "bg-[#ffe082]",
  Advanced: "bg-[#ffd54f]",
  Working: "bg-[#fff3cd]",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].id);

  const selectedCategory = useMemo(
    () => skillCategories.find((category) => category.id === activeCategory) ?? skillCategories[0],
    [activeCategory]
  );

  return (
    <section className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Skills" subtitle="Focused stack across engineering, product, and operations" />

        <div className="retro-panel p-4 sm:p-6 mb-10">
          <p className="text-xs sm:text-sm font-bold text-[var(--muted-foreground)] mb-4 uppercase tracking-wide">
            Select a category
          </p>

          <div className="flex flex-wrap gap-3">
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`retro-btn retro-btn-sm ${isActive ? "" : "opacity-85"}`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-black bg-white px-1 text-[11px] font-black">
                    {category.skills.length}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            className="retro-panel p-5 sm:p-7"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-black text-[var(--foreground)] flex items-center gap-2">
                {selectedCategory.icon}
                {selectedCategory.name}
              </h3>
              <p className="text-[var(--muted-foreground)] font-medium mt-2">{selectedCategory.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory.skills.map((skill) => (
                <motion.div
                  key={`${selectedCategory.id}-${skill.name}`}
                  whileHover={{ y: -3 }}
                  className="retro-panel-soft p-4 flex items-center gap-3"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl border-2 border-black bg-white flex items-center justify-center text-2xl">
                    {skill.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[var(--foreground)] font-black leading-tight">{skill.name}</p>
                    {skill.level && (
                      <span className={`mt-1 inline-block rounded-full border border-black px-2 py-0.5 text-[11px] font-extrabold ${levelClass[skill.level]}`}>
                        {skill.level}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
