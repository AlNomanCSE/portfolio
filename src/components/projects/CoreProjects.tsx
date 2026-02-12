"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaServer, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

const ActionButton = ({ href, icon, text, onClick, isExternal = true }: {
  href?: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isExternal?: boolean;
}) => {
  const content = (
    <span className="retro-btn retro-btn-sm">
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
};

const coreProjects = [
  {
    title: "NB School Management System",
    description: [
      "Developed a comprehensive school management system using Java, Spring Boot, and Spring MVC",
      "Designed and implemented RESTful APIs for data management",
      "Created dynamic web pages using Thymeleaf templates",
      "Implemented robust security with Spring Security",
    ],
    technologies: ["Spring Security", "Spring MVC", "Spring Data JPA", "MySQL", "Thymeleaf"],
    imageSrc: "/nb-school.png",
    githubLink: "https://github.com/AlNomanCSE/NB-School---java--springbot--MVC.git",
    features: [
      { icon: <FaCode />, title: "Full Stack", description: "Complete end-to-end solution" },
      { icon: <FaServer />, title: "RESTful API", description: "Well-structured backend services" },
      { icon: <FaShieldAlt />, title: "Security", description: "Role-based access control" },
    ],
  },
  {
    title: "AI Healthcare Chat Ecosystem",
    description: [
      "Built a full-stack AI healthcare assistant with real-time streaming responses and multi-model support",
      "Implemented robust client state flows using RTK Query with optimized server communication",
      "Designed scalable Next.js architecture for fast interactions and maintainable feature growth",
      "Focused on practical UX for healthcare-oriented conversational experiences",
    ],
    technologies: ["Next.js 14", "RTK Query", "TypeScript", "Streaming UI", "AI Model Integration"],
    imageSrc: "/profileimage.jpg",
    githubLink: "https://github.com/AlNomanCSE/JVAI-project",
    features: [
      { icon: <FaCode />, title: "AI Product", description: "Healthcare-focused conversation workflow" },
      { icon: <FaServer />, title: "Streaming", description: "Real-time response architecture" },
      { icon: <FaShieldAlt />, title: "Scalable", description: "Built for high concurrency usage" },
    ],
  },
];

const CoreProjects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className="retro-section py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Core Projects" subtitle="Selected technical projects from my CV" />

        <div className="grid grid-cols-1 gap-12">
          {coreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="retro-panel p-6"
            >
              <div className="flex items-center mb-4">
                <span className="retro-chip">
                  <FaStar /> Core Project
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden border-4 border-black">
                  <Image src={project.imageSrc} alt={project.title} fill className="object-cover" />
                </div>

                <div className="lg:w-2/3 flex flex-col">
                  <h3 className="text-2xl font-black text-[var(--foreground)] mb-4">{project.title}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                    {project.features.map((feature, i) => (
                      <motion.div key={i} className="retro-panel-soft p-3" whileHover={{ y: -3 }}>
                        <div className="text-lg mb-1">{feature.icon}</div>
                        <h4 className="font-black text-[var(--foreground)]">{feature.title}</h4>
                        <p className="text-sm text-[var(--muted-foreground)]">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-black text-[var(--foreground)] mb-2">Project Highlights</h4>
                    <ul className="space-y-2">
                      {project.description.map((item, i) => (
                        <li key={i} className="text-[var(--secondary-foreground)] font-medium">- {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="retro-chip text-sm">{tech}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <ActionButton href={project.githubLink} icon={<FaGithub />} text="View Code" />
                    <ActionButton
                      icon={<FaExternalLinkAlt />}
                      text="Learn More"
                      onClick={() => setActiveProject(activeProject === index ? null : index)}
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="mt-8 retro-panel-soft p-5"
                  >
                    <h3 className="text-xl font-black text-[var(--foreground)] mb-3">Project Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--secondary-foreground)] font-medium">
                      <div>
                        <h4 className="font-black text-[var(--foreground)] mb-2">Technical Implementation</h4>
                        <p>
                          This project demonstrates clean architecture, secure authentication, and efficient data
                          management. The implementation focuses on scalability and maintainability.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-black text-[var(--foreground)] mb-2">Key Achievements</h4>
                        <p>
                          The system showcases production-grade backend development, secure role-based access, and a
                          usable front-end experience.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProjects;
