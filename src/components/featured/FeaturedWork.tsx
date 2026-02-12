"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaArrowUp, FaClock, FaUsers } from "react-icons/fa";

const featured = [
  {
    name: "Alriyan Commerce Platform",
    summary: "Warehouse + store management + POS system delivered in 90 days by a 3-person team.",
    outcomes: [
      "21% revenue growth after launch",
      "80% better user experience vs previous system",
      "~35% operational time saved (estimated)",
    ],
    stack: "Next.js, Django, QA Workflow",
  },
  {
    name: "Innovative Skills Official EdTech Website",
    summary: "Built and managed the official EdTech platform using Laravel for reliable content and training operations.",
    outcomes: [
      "Production-ready Laravel architecture for active educational operations",
      "Structured workflows for content updates and platform maintenance",
      "Improved consistency in delivery across technical and operational teams",
    ],
    stack: "Laravel, MySQL, Product Delivery",
  },
  {
    name: "MoneyExchange Operations Platform",
    summary: "Team-delivered cross-border money exchange operations system for transaction handling and operational control.",
    outcomes: [
      "Centralized transaction workflow visibility for the operations team",
      "Role-based access and structured process handling",
      "Faster day-to-day reconciliation and issue tracking",
    ],
    stack: "Django, Role-based Workflows, Operations Dashboard",
  },
  {
    name: "Carbonex CRM + e-RECover Programme",
    summary:
      "Contributed to Carbonex CRM and e-RECover, a solar insurance programme focused on asset protection and long-term system performance assurance.",
    outcomes: [
      "Improved registration and lifecycle tracking for solar assets",
      "Supported risk-protection and monitoring workflows in one system",
      "Better operational clarity for long-term programme management",
    ],
    stack: "CRM Architecture, Workflow Management, Product Support",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Featured Work" subtitle="Recent delivery highlights with measurable outcomes" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {featured.map((item, index) => (
            <motion.article
              key={item.name}
              className="retro-panel p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <h3 className="text-lg sm:text-2xl font-black text-[var(--foreground)] mb-2">{item.name}</h3>
              <p className="text-sm sm:text-base text-[var(--muted-foreground)] font-medium mb-4 max-w-xl">{item.summary}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="retro-chip text-xs"><FaClock /> Fast Delivery</span>
                <span className="retro-chip text-xs"><FaUsers /> Team Execution</span>
                <span className="retro-chip text-xs"><FaArrowUp /> Business Impact</span>
              </div>

              <ul className="space-y-2 mb-4">
                {item.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm font-semibold text-[var(--secondary-foreground)]">- {outcome}</li>
                ))}
              </ul>

              <p className="text-xs sm:text-sm font-bold text-[var(--muted-foreground)]">Stack: {item.stack}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
