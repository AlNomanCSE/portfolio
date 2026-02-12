'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "services", "work", "experience", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const offset = 200;
        return rect.top <= offset && rect.bottom >= offset;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    handleScroll();

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      setActiveSection(id);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        setActiveSection(id);
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 250);
  };

  const links = [
    {
      title: "Email",
      icon: <IconMail className="h-5 w-5" />,
      href: "mailto:abdullahalnomancse@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/abdullahalnomancse",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-5 w-5" />,
      href: "https://github.com/AlNomanCSE",
    },
  ];

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Services", href: "#services" },
    { title: "Work", href: "#work" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 px-3 sm:px-4 pt-3 ${scrolled ? "" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto retro-panel px-4 sm:px-6 h-20 flex items-center justify-between bg-[var(--secondary)]">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-black shrink-0">
            <Image src="/LogoPic.jpg" alt="Logo" width={44} height={44} className="w-full h-full object-cover" style={{ objectPosition: "top" }} />
          </div>
          <div className="min-w-0">
            <p className="text-sm sm:text-base font-black text-[var(--foreground)] truncate">Abdullah Al Noman</p>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Software Developer & Product Manager</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href.substring(1))}
                className={`text-sm font-extrabold uppercase tracking-wide ${
                  isActive ? "text-black underline underline-offset-4" : "text-[var(--secondary-foreground)] hover:text-black"
                }`}
              >
                {link.title}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-black bg-[var(--primary)] text-black flex items-center justify-center hover:-translate-y-0.5 transition-transform"
              aria-label={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <button
          className="md:hidden w-10 h-10 rounded-md border-2 border-black bg-[var(--primary)] text-black flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden container mx-auto mt-3 retro-panel-soft px-4 py-4 bg-[var(--secondary)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href.substring(1))}
                    className={`text-sm font-extrabold uppercase tracking-wide ${
                      isActive ? "text-black underline underline-offset-4" : "text-[var(--secondary-foreground)]"
                    }`}
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-2 pt-4 mt-4 border-t-2 border-black/20">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-black bg-[var(--primary)] text-black flex items-center justify-center"
                  aria-label={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
