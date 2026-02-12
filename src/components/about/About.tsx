"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaGithub, FaCode, FaChartLine } from "react-icons/fa";
import Image from "next/image";

const GitHubActivity = () => {
  return (
    <section className="retro-section py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading title="GitHub Activity" subtitle="My coding activity and contributions" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mt-12 retro-panel p-4 sm:p-6"
        >
          <div className="retro-panel-soft px-4 py-3 mb-6 flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full border border-black bg-[#ff6b6b]" />
              <span className="w-3 h-3 rounded-full border border-black bg-[#ffd93d]" />
              <span className="w-3 h-3 rounded-full border border-black bg-[#6bcb77]" />
            </div>
            <span className="font-black text-sm sm:text-base">github-stats.sh</span>
            <span className="text-xs font-semibold text-[var(--muted-foreground)]">retro terminal</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -4 }} className="retro-panel-soft p-4">
              <div className="flex items-center mb-4 text-[var(--foreground)] font-extrabold">
                <FaGithub className="mr-2" /> profile_stats
              </div>
              <Image
                src="https://github-readme-stats.vercel.app/api?username=AlNomanCSE&show_icons=true&theme=default&hide_border=true&count_private=true"
                alt="GitHub Stats"
                width={495}
                height={195}
                unoptimized
                className="w-full rounded-md border-2 border-black"
              />
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="retro-panel-soft p-4">
              <div className="flex items-center mb-4 text-[var(--foreground)] font-extrabold">
                <FaCode className="mr-2" /> languages
              </div>
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlNomanCSE&layout=compact&theme=default&hide_border=true"
                alt="Top Languages"
                width={350}
                height={165}
                unoptimized
                className="w-full rounded-md border-2 border-black"
              />
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="retro-panel-soft p-4">
              <div className="flex items-center mb-4 text-[var(--foreground)] font-extrabold">
                <FaChartLine className="mr-2" /> streak
              </div>
              <Image
                src="https://github-readme-streak-stats.herokuapp.com/?user=AlNomanCSE&theme=default&hide_border=true"
                alt="Contribution Streak"
                width={495}
                height={195}
                unoptimized
                className="w-full rounded-md border-2 border-black"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
