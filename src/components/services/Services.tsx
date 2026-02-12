"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaLaptopCode, FaBoxes, FaStore, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Product Build",
    description: "From idea to launch with clean architecture, secure APIs, and production-ready frontend.",
    icon: <FaLaptopCode className="text-black" />,
    points: ["Next.js or React frontend", "Node/Laravel/Django backend", "Deployment-ready handoff"],
  },
  {
    title: "POS & Inventory Systems",
    description: "Warehouse, store, and POS workflows that reduce manual errors and improve daily operations.",
    icon: <FaStore className="text-black" />,
    points: ["Store + warehouse sync", "Billing and order tracking", "Operational dashboards"],
  },
  {
    title: "System Optimization",
    description: "Improve existing software performance, UX clarity, and team development velocity.",
    icon: <FaBoxes className="text-black" />,
    points: ["UX audit and cleanup", "Bug and latency reduction", "Refactor for scalability"],
  },
  {
    title: "Product Strategy Support",
    description: "Convert business goals into a realistic roadmap with measurable delivery milestones.",
    icon: <FaChartLine className="text-black" />,
    points: ["Feature prioritization", "Execution planning", "Delivery monitoring"],
  },
];

const Services = () => {
  return (
    <section id="services" className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Services" subtitle="How I can help your business ship and scale" />

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
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 shrink-0 rounded-lg border-2 border-black bg-[var(--primary)] flex items-center justify-center text-xl">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-black text-[var(--foreground)] leading-tight">{service.title}</h3>
              </div>

              <p className="text-sm sm:text-base text-[var(--muted-foreground)] font-medium mb-3">{service.description}</p>

              <ul className="space-y-1.5">
                {service.points.map((point) => (
                  <li key={point} className="text-sm font-semibold text-[var(--secondary-foreground)]">
                    - {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
