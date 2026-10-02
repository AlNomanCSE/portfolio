import React from "react";
import { FaCode, FaJava, FaAws, FaRobot, FaServer, FaProjectDiagram, FaTachometerAlt, FaUsers, FaClipboardList, FaTasks, FaShieldAlt, FaBolt, FaChartLine } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiGraphql, SiJavascript,
  SiLaravel, SiPhp, SiFastapi, SiPython, SiDjango, SiNestjs, SiRedux, SiExpo, SiPostgresql, SiMysql,
  SiRedis, SiDocker, SiGithubactions, SiDigitalocean, SiNginx, SiScrumalliance,
  SiSpring, SiSpringboot, SiSpringsecurity, SiThymeleaf, SiTypeorm, SiPrisma, SiTailwindcss,
  SiGit, SiSwagger, SiJsonwebtokens, SiSocketdotio, SiFirebase, SiStripe, SiShopify, SiJira,
} from "react-icons/si";

type IconEntry = { match: string[]; icon: React.ReactNode };

const entries: IconEntry[] = [
  { match: ["react native"], icon: <SiReact className="text-[#61DAFB]" /> },
  { match: ["react"], icon: <SiReact className="text-[#61DAFB]" /> },
  { match: ["next.js", "next.js 14", "nextjs"], icon: <SiNextdotjs className="text-black" /> },
  { match: ["typescript"], icon: <SiTypescript className="text-[#3178C6]" /> },
  { match: ["javascript", "javascript (es6+)"], icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { match: ["node.js"], icon: <SiNodedotjs className="text-[#339933]" /> },
  { match: ["express", "express.js"], icon: <SiExpress className="text-black" /> },
  { match: ["nestjs"], icon: <SiNestjs className="text-[#E0234E]" /> },
  { match: ["php"], icon: <SiPhp className="text-[#777BB4]" /> },
  { match: ["laravel"], icon: <SiLaravel className="text-[#FF2D20]" /> },
  { match: ["fastapi"], icon: <SiFastapi className="text-[#009688]" /> },
  { match: ["python"], icon: <SiPython className="text-[#3776AB]" /> },
  { match: ["django"], icon: <SiDjango className="text-[#092E20]" /> },
  { match: ["java"], icon: <FaJava className="text-[#E76F00]" /> },
  { match: ["spring boot"], icon: <SiSpringboot className="text-[#6DB33F]" /> },
  { match: ["spring mvc", "spring data jpa", "spring"], icon: <SiSpring className="text-[#6DB33F]" /> },
  { match: ["spring security"], icon: <SiSpringsecurity className="text-[#6DB33F]" /> },
  { match: ["thymeleaf"], icon: <SiThymeleaf className="text-[#005F0F]" /> },
  { match: ["mongodb"], icon: <SiMongodb className="text-[#47A248]" /> },
  { match: ["postgresql"], icon: <SiPostgresql className="text-[#4169E1]" /> },
  { match: ["mysql"], icon: <SiMysql className="text-[#4479A1]" /> },
  { match: ["redis"], icon: <SiRedis className="text-[#DC382D]" /> },
  { match: ["typeorm/prisma", "typeorm"], icon: <SiTypeorm className="text-[#E83524]" /> },
  { match: ["prisma"], icon: <SiPrisma className="text-[#2D3748]" /> },
  { match: ["graphql", "graphql apis"], icon: <SiGraphql className="text-[#E535AB]" /> },
  { match: ["redux toolkit", "rtk query"], icon: <SiRedux className="text-[#764ABC]" /> },
  { match: ["expo"], icon: <SiExpo className="text-black" /> },
  { match: ["tailwind css"], icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { match: ["docker"], icon: <SiDocker className="text-[#2496ED]" /> },
  { match: ["ci/cd pipelines"], icon: <SiGithubactions className="text-[#2088FF]" /> },
  { match: ["aws"], icon: <FaAws className="text-[#FF9900]" /> },
  { match: ["digitalocean"], icon: <SiDigitalocean className="text-[#0080FF]" /> },
  { match: ["nginx"], icon: <SiNginx className="text-[#009639]" /> },
  { match: ["agile/scrum"], icon: <SiScrumalliance className="text-[#009FDA]" /> },
  { match: ["git"], icon: <SiGit className="text-[#F05032]" /> },
  { match: ["jira"], icon: <SiJira className="text-[#0052CC]" /> },
  { match: ["rest apis"], icon: <SiSwagger className="text-[#85EA2D]" /> },
  { match: ["jwt", "security controls"], icon: <FaShieldAlt className="text-[#0F766E]" /> },
  { match: ["streaming ui", "realtime rates"], icon: <SiSocketdotio className="text-black" /> },
  { match: ["llm integration", "ai model integration"], icon: <FaRobot className="text-[#10A37F]" /> },
  { match: ["microservices"], icon: <FaProjectDiagram className="text-[#7C3AED]" /> },
  { match: ["api optimization", "query optimization", "web performance"], icon: <FaTachometerAlt className="text-[#D97706]" /> },
  { match: ["crm", "rbac"], icon: <FaUsers className="text-[#2563EB]" /> },
  { match: ["data reporting"], icon: <FaChartLine className="text-[#2563EB]" /> },
  { match: ["technical planning"], icon: <FaClipboardList className="text-[#6B7280]" /> },
  { match: ["technical mentorship", "code reviews"], icon: <FaTasks className="text-[#6B7280]" /> },
  { match: ["e-commerce"], icon: <SiShopify className="text-[#7AB55C]" /> },
  { match: ["ux"], icon: <FaBolt className="text-[#D97706]" /> },
  { match: ["firebase"], icon: <SiFirebase className="text-[#FFCA28]" /> },
  { match: ["stripe"], icon: <SiStripe className="text-[#635BFF]" /> },
  { match: ["jsonwebtokens"], icon: <SiJsonwebtokens className="text-black" /> },
  { match: ["nestjs backend"], icon: <FaServer className="text-black" /> },
];

const lookup = new Map<string, React.ReactNode>();
for (const e of entries) for (const m of e.match) lookup.set(m, e.icon);

export const findTechIcon = (name: string): React.ReactNode | undefined =>
  lookup.get(name.trim().toLowerCase());

export const getTechIcon = (name: string): React.ReactNode =>
  findTechIcon(name) ?? <FaCode className="text-black" />;
