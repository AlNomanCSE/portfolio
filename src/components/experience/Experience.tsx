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
    company: "Innovative Skills BD",
    position: "Software Developer & Product Manager",
    period: "December 2025 - Present",
    type: "Dhaka, Bangladesh",
    description:
      "Driving product strategy and technical execution for EdTech initiatives, bridging business goals with scalable engineering delivery.",
    responsibilities: [
      "Orchestrated workflows using Microsoft Excel with detailed backlogs, timelines, and resource allocation for on-time module delivery",
      "Led EdTech feature lifecycle and translated stakeholder requirements into technical specs, improving user retention by 20%",
      "Developed and maintained the official Innovative Skills EdTech website using Laravel with production-grade content and operational workflows",
      "Built scalable backend services with Laravel and Node.js to support high-concurrency live classes",
      "Worked with the team on a cross-border money exchange operations platform with transaction workflow tracking, role-based access, and operational monitoring",
      "Contributed to a CRM for Carbonex, including the e-RECover Solar Insurance Programme flow for system registration, risk coverage management, and long-term performance support",
      "Supported HR operations by managing technical recruitment and improving cross-team collaboration protocols",
      "Conducted technical training sessions for students and internal team members",
    ],
    technologies: ["Laravel", "Node.js", "Django", "CRM", "Excel", "Product Strategy", "Agile", "HR Operations", "Technical Training"],
    outcomes: ["+20% user retention", "Multi-product delivery ownership", "Improved cross-team execution"],
  },
  {
    company: "European IT Institute",
    position: "MERN Stack Instructor",
    period: "September 2025 - November 2025",
    type: "Dhaka, Bangladesh",
    description:
      "Delivered structured MERN training focused on practical, portfolio-ready development.",
    responsibilities: [
      "Designed a full 36-class MERN curriculum from JavaScript fundamentals to deployment workflows",
      "Mentored students to build professional-grade portfolios with clean code and documentation discipline",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Curriculum Design", "Mentorship"],
    outcomes: ["36-class curriculum delivered", "Portfolio-ready student output"],
  },
  {
    company: "OutNet",
    position: "Frontend Developer",
    period: "March 2025 - September 2025",
    type: "Remote / International",
    description: "Built high-performance frontend modules for international client projects.",
    responsibilities: [
      "Developed React.js components with robust API integration and maintainable state management",
      "Reduced frontend bug reports by 30% by enforcing strict TypeScript typing and unit-testing practices",
    ],
    technologies: ["React", "TypeScript", "API Integration", "State Management", "Testing"],
    outcomes: ["30% fewer frontend bugs", "More stable release quality"],
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
        <SectionHeading title="Work Experience" subtitle="My professional journey and contributions" />

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
