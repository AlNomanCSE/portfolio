"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaBuilding, FaMapMarkerAlt, FaCode, FaArrowRight } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiJavascript,
  SiReact as SiReactNative,
  SiLaravel,
} from "react-icons/si";

const experiences = [
  {
    company: "Innovative Skills LTD",
    position: "Software Engineer II",
    period: "Nov 2025 - Present",
    type: "Dhaka, Bangladesh",
    description:
      "Leading product and backend engineering for high-concurrency EdTech and CRM systems.",
    responsibilities: [
      "Architected a high-concurrency NestJS backend supporting thousands of concurrent learners with 99.9% uptime for live sessions",
      "Led a cross-functional squad (2 Backend, 1 Frontend, 1 QA) with peer code review standards and engineering documentation",
      "Managed delivery across 5 high-impact products in EdTech and CRM through milestone-driven planning",
      "Translated business priorities into execution-ready technical roadmaps and sprint plans",
    ],
    technologies: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Agile/Scrum", "Technical Planning"],
    outcomes: ["99.9% uptime", "+25% team velocity", "5 active project portfolio"],
  },
  {
    company: "Innovative Skills LTD",
    position: "Software Engineer",
    period: "Feb 2025 - Oct 2025",
    type: "Dhaka, Bangladesh",
    description:
      "Built modular backend services and improved system performance for production workloads.",
    responsibilities: [
      "Developed Node.js microservices to reduce system coupling and improve maintainability",
      "Optimized database queries and indexing strategies to improve API performance at scale",
      "Contributed to backend stability improvements across concurrent user flows",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API Optimization", "Microservices"],
    outcomes: ["40% lower API latency", "Lower service coupling", "Faster maintenance cycles"],
  },
  {
    company: "OutNet",
    position: "Web Developer",
    period: "Aug 2024 - Jan 2025",
    type: "Remote / International",
    description: "Built end-to-end MERN and mobile-ready features for international clients.",
    responsibilities: [
      "Built MERN solutions with TypeScript and Redux Toolkit for predictable state and safer APIs",
      "Engineered React Native features with robust API synchronization and offline data persistence",
      "Delivered mobile-first workflows with stable cross-device behavior",
    ],
    technologies: ["React", "TypeScript", "Redux Toolkit", "React Native", "Node.js", "MongoDB"],
    outcomes: ["Production-ready MERN modules", "Type-safe frontend workflows", "Offline-ready mobile features"],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getTechIcon = (techName: string) => {
    switch (techName.toLowerCase()) {
      case "react":
        return <SiReact className="text-[#61DAFB]" />;
      case "next.js":
        return <SiNextdotjs className="text-black" />;
      case "typescript":
        return <SiTypescript className="text-[#3178C6]" />;
      case "node.js":
        return <SiNodedotjs className="text-[#339933]" />;
      case "express":
        return <SiExpress className="text-black" />;
      case "mongodb":
        return <SiMongodb className="text-[#47A248]" />;
      case "graphql":
        return <SiGraphql className="text-[#E535AB]" />;
      case "javascript":
        return <SiJavascript className="text-[#F7DF1E]" />;
      case "react native":
        return <SiReactNative className="text-[#61DAFB]" />;
      case "laravel":
        return <SiLaravel className="text-[#FF2D20]" />;
      default:
        return <FaCode className="text-black" />;
    }
  };

  return (
    <section className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Work Experience" subtitle="Leadership, architecture, and delivery impact" />

        <div className="max-w-5xl mx-auto mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="retro-panel p-4 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-[var(--foreground)] flex items-center gap-2">
                    <FaBuilding /> {exp.company}
                  </h3>
                  <p className="font-semibold text-[var(--muted-foreground)]">{exp.position}</p>
                </div>
                <div className="text-sm font-bold text-[var(--secondary-foreground)]">
                  <p>{exp.period}</p>
                  <p className="flex items-center gap-1 mt-1">
                    <FaMapMarkerAlt /> {exp.type}
                  </p>
                </div>
              </div>

              <p className="text-[var(--muted-foreground)] mb-4 font-medium">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.outcomes.map((outcome, outcomeIndex) => (
                  <span key={outcomeIndex} className="retro-chip text-xs">
                    {outcome}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="retro-chip text-sm">
                    <span className="text-base">{getTechIcon(tech)}</span>
                    {tech}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="retro-panel-soft p-3 sm:p-4 mb-4">
                      <h4 className="font-black text-[var(--foreground)] mb-3 flex items-center gap-2">
                        <FaCode /> Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-[var(--secondary-foreground)] font-medium">
                            - {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-right">
                <button
                  className="retro-btn retro-btn-sm ml-auto"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  type="button"
                >
                  {activeIndex === index ? "Show Less" : "Show More"}
                  <FaArrowRight className={`ml-1 transition-transform ${activeIndex === index ? "rotate-90" : ""}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
