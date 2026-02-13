"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaLaptopCode, FaBoxes, FaStore, FaChartLine, FaCheckCircle, FaBolt, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Build",
    quick: "Idea -> Launch",
    icon: <FaLaptopCode className="text-black" />,
    forWho: "Startups, founders, new products",
    outputs: ["Web App", "API", "Deployment"],
  },
  {
    title: "POS + Inventory",
    quick: "Store + Warehouse + Billing",
    icon: <FaStore className="text-black" />,
    forWho: "Retail, commerce, distribution",
    outputs: ["POS", "Stock Sync", "Ops Dashboard"],
  },
  {
    title: "System Optimization",
    quick: "Improve Existing Software",
    icon: <FaBoxes className="text-black" />,
    forWho: "Running products with slow growth",
    outputs: ["UX Cleanup", "Bug Reduction", "Speed Boost"],
  },
  {
    title: "Product Strategy",
    quick: "Plan -> Prioritize -> Ship",
    icon: <FaChartLine className="text-black" />,
    forWho: "Teams needing clear execution",
    outputs: ["Roadmap", "Sprint Plan", "Delivery Tracking"],
  },
];

const Services = () => {
  return (
    <section id="services" className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Services" subtitle="What I build and improve for clients" />

        <div className="retro-panel p-4 sm:p-5 mb-5 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="retro-panel-soft p-3 flex items-center gap-2">
              <FaBolt className="text-black" />
              <p className="text-sm font-extrabold text-[var(--secondary-foreground)]">Fast Delivery Focus</p>
            </div>
            <div className="retro-panel-soft p-3 flex items-center gap-2">
              <FaUsers className="text-black" />
              <p className="text-sm font-extrabold text-[var(--secondary-foreground)]">Business + Tech Alignment</p>
            </div>
            <div className="retro-panel-soft p-3 flex items-center gap-2">
              <FaCheckCircle className="text-black" />
              <p className="text-sm font-extrabold text-[var(--secondary-foreground)]">Clear Handoff & Support</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="retro-panel-soft p-4 sm:p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="h-11 w-11 shrink-0 rounded-lg border-2 border-black bg-[var(--primary)] flex items-center justify-center text-xl">
                  {service.icon}
                </div>
                <span className="retro-chip text-[11px] sm:text-xs">{service.quick}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[var(--foreground)] leading-tight mb-2">{service.title}</h3>

              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] font-bold mb-3 uppercase tracking-wide">
                Best for: {service.forWho}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.outputs.map((point) => (
                  <span key={point} className="retro-chip text-xs sm:text-sm">
                    {point}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
