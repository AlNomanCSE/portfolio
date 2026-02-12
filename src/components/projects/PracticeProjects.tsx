"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CiMobile1 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  { id: 1, title: "Pricing Page", image: "/1-d.JPG", link: "https://pricingpagedemo.netlify.app/" },
  { id: 2, title: "Country Search", image: "/9-d.JPG", link: "https://searchyourcountryname.netlify.app/" },
  { id: 3, title: "Design Studio", image: "/2-d.JPG", link: "https://designstudioofnoman.netlify.app/" },
  { id: 4, title: "Tour Page", image: "/3-d.JPG", link: "https://tourpagehomenoman.netlify.app/" },
  { id: 5, title: "Multi-step App", image: "/4-d.JPG", link: "https://multistepappnoman.netlify.app" },
  { id: 6, title: "Site Landing Page", image: "/5-d.JPG", link: "https://sitelandingpagenoman.netlify.app" },
  { id: 7, title: "Tip Calculator", image: "/6-d.JPG", link: "https://tipcalculatorappnextjs.netlify.app" },
  { id: 8, title: "News Home Page", image: "/7-d.JPG", link: "https://newshomepagemainnoman.netlify.app" },
  { id: 9, title: "Intro Section", image: "/8-d.JPG", link: "https://introsectionwithdropdownnvigation.netlify.app" },
];

const PracticeProjects = () => {
  return (
    <section className="retro-section py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Practice Projects"
          subtitle="Frontend projects I created while learning web development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="retro-panel p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="relative h-48 overflow-hidden rounded-lg border-3 border-black">
                <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-full object-cover" />
              </div>

              <div className="p-2 pt-4">
                <h3 className="text-xl font-black text-[var(--foreground)] mb-3">{project.title}</h3>

                <div className="flex flex-col space-y-2 mb-5">
                  <div className="flex items-center text-[var(--secondary-foreground)] font-medium">
                    <CgWebsite className="mr-2" /> Frontend development
                  </div>
                  <div className="flex items-center text-[var(--secondary-foreground)] font-medium">
                    <CiMobile1 className="mr-2" /> Mobile responsiveness
                  </div>
                </div>

                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full">
                  <span className="retro-btn retro-btn-block">
                    Demo Website <FaArrowRightToBracket className="ml-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeProjects;
