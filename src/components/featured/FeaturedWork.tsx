"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaArrowUp, FaChevronDown, FaClock, FaUsers } from "react-icons/fa";

type FeaturedItem = {
  name: string;
  quick: string;
  outcomes: string[];
  stack: string[];
  detail: string;
};

const featured: FeaturedItem[] = [
  {
    name: "Be-Money-Exchange",
    quick: "Fintech Exchange Platform",
    outcomes: ["Transaction Integrity", "Realtime Rates", "Audit Logging"],
    stack: ["Node.js", "PostgreSQL", "Security Controls"],
    detail:
      "Engineered a secure money exchange engine focused on transaction safety, live rate updates, and traceable financial operations.",
  },
  {
    name: "Blens.ai",
    quick: "LLM Product Integration",
    outcomes: ["Streaming Responses", "Context Efficiency", "Scalable UX"],
    stack: ["Next.js", "LLM Integration", "TypeScript"],
    detail:
      "Led technical integration of large language models into a Next.js system with streaming responses and efficient context-window handling.",
  },
  {
    name: "MyREC / E-Recover",
    quick: "Renewable Energy CRM",
    outcomes: ["RBAC Access", "Regional Data Control", "Reporting at Scale"],
    stack: ["CRM", "RBAC", "Data Reporting"],
    detail:
      "Designed CRM architecture for renewable energy operations with role-based access control and high-volume reporting workflows.",
  },
  {
    name: "Innovative Skills LMS Backend",
    quick: "High-Concurrency EdTech Core",
    outcomes: ["99.9% Uptime", "Large Concurrent Sessions", "Team Velocity +25%"],
    stack: ["NestJS", "Redis", "PostgreSQL"],
    detail:
      "Architected backend services for thousands of concurrent students while standardizing reviews and documentation for faster team delivery.",
  },
];

const FeaturedWork = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="work" className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Featured Work" subtitle="Projects aligned with senior engineering impact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {featured.map((item, index) => {
            const isOpen = active === item.name;

            return (
              <motion.article
                key={item.name}
                className="retro-panel p-4 sm:p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[var(--foreground)]">{item.name}</h3>
                    <p className="text-xs sm:text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-wide mt-1">
                      {item.quick}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="retro-btn retro-btn-sm"
                    onClick={() => setActive(isOpen ? null : item.name)}
                  >
                    Details
                    <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="retro-chip text-xs">
                    <FaClock /> Fast
                  </span>
                  <span className="retro-chip text-xs">
                    <FaUsers /> Team
                  </span>
                  <span className="retro-chip text-xs">
                    <FaArrowUp /> Impact
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {item.outcomes.map((outcome) => (
                    <span key={outcome} className="retro-chip text-xs">
                      {outcome}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="retro-chip text-xs bg-[#fffaf0]">
                      {tech}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="retro-panel-soft mt-4 p-3">
                        <p className="text-sm sm:text-base font-semibold text-[var(--secondary-foreground)]">{item.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
