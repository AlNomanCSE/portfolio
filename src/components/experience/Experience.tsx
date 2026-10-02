"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaBuilding, FaMapMarkerAlt, FaCode, FaArrowRight } from "react-icons/fa";
import { getTechIcon } from "@/lib/tech-icons";

const experiences = [
  {
    company: "Innovative Skills LTD",
    position: "Software Engineer II",
    period: "Jan 2025 - Present",
    type: "Dhaka, Bangladesh",
    description:
      "Building high-concurrency backends and full-stack products across Python/Django and NestJS/Next.js.",
    responsibilities: [
      "Built a large-scale e-commerce platform with an integrated POS system using Django and PostgreSQL, handling real-time inventory, order lifecycle, billing, and automated invoice generation",
      "Developed full-stack solutions with NestJS and Next.js for a live-class platform supporting thousands of concurrent users, with real-time classroom interaction over WebSockets",
      "Designed modular REST APIs and coordinated API contracts with frontend teams across 5 parallel client projects running simultaneously",
      "Set up GitHub Actions CI/CD pipelines with Docker: automated tests on every push, containerized builds, and zero-downtime SSH deploys to a Linux VPS",
      "Reduced API response times through database indexing, query optimization, and Redis caching",
    ],
    technologies: ["Python", "Django", "NestJS", "Next.js", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "WebSockets", "PHP", "Laravel", "FastAPI"],
    outcomes: ["Thousands of concurrent users", "5 parallel client projects", "Zero-downtime deploys"],
  },
  {
    company: "Innovative Skills LTD",
    position: "Software Engineer",
    period: "Oct 2023 - Dec 2024",
    type: "Dhaka, Bangladesh",
    description:
      "Modernized a legacy system and brought end-to-end type safety to frontend and backend.",
    responsibilities: [
      "Migrated a legacy system to Node.js and TypeScript, reducing backend bugs and making frontend integration more predictable",
      "Added end-to-end type safety across frontend and backend, catching entire classes of runtime errors at compile time",
      "Collaborated with QA and UI teams to ship features against stable, consistent API contracts",
    ],
    technologies: ["Node.js", "TypeScript", "Express", "MongoDB", "PostgreSQL", "PHP", "Laravel"],
    outcomes: ["Legacy to Node.js/TypeScript", "End-to-end type safety", "Stable API contracts"],
  },
  {
    company: "OutNet",
    position: "Web Developer",
    period: "Jun 2023 - Sep 2023",
    type: "Remote",
    description: "Built MERN web apps and React Native mobile clients with real-time data sync.",
    responsibilities: [
      "Built MERN stack applications with React Native mobile clients, keeping data synchronized across web and mobile in real time",
      "Improved Lighthouse performance scores by 30% through frontend asset optimization and a reusable component system",
      "Managed application state with Redux Toolkit and built RESTful APIs for consistent cross-platform behavior",
    ],
    technologies: ["React", "React Native", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JavaScript"],
    outcomes: ["+30% Lighthouse score", "Web + mobile real-time sync", "Reusable component system"],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
