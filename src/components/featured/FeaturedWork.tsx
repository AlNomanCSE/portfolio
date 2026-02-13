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
    name: "Alriyan Commerce",
    quick: "POS + Inventory + Warehouse",
    outcomes: ["+21% Revenue", "80% Better UX", "~35% Time Saved"],
    stack: ["Next.js", "Django", "QA"],
    detail:
      "Delivered a full commerce operations platform in 90 days with a 3-person team. Focused on fast workflows, cleaner UI, and daily operational control.",
  },
  {
    name: "Innovative Skills Website",
    quick: "Official EdTech Platform",
    outcomes: ["Laravel Production", "Structured Workflows", "Stable Delivery"],
    stack: ["Laravel", "MySQL", "Content Ops"],
    detail:
      "Built and maintained the official EdTech web platform with reliable content management and operational support flows.",
  },
  {
    name: "MoneyExchange Ops",
    quick: "Cross-Border Exchange Ops",
    outcomes: ["Workflow Visibility", "Role-Based Access", "Faster Reconciliation"],
    stack: ["Django", "Ops Dashboard", "Auth"],
    detail:
      "Team-delivered operations platform for exchange workflow tracking, process consistency, and operational monitoring.",
  },
  {
    name: "Carbonex CRM + e-RECover",
    quick: "Solar Insurance Programme Support",
    outcomes: ["Asset Lifecycle Tracking", "Risk Workflow Support", "Long-Term Monitoring"],
    stack: ["CRM", "Registration Flows", "Programme Ops"],
    detail:
      "Supported CRM workflows and e-RECover programme operations to improve registration, coverage process clarity, and performance assurance tracking.",
  },
];

const FeaturedWork = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="work" className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Featured Work" subtitle="Scan fast, tap for details" />

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
