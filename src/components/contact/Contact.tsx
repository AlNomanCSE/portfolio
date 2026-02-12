"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaWhatsapp, FaClock } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/section-heading";

const Contact = () => {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xqedpkkw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setSubmitState("success");
        return;
      }
      setSubmitState("error");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <section className="retro-section py-16 sm:py-20 px-4">
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="Share your requirement and I will respond with a clear execution plan"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="retro-panel p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-[var(--foreground)]">Quick Project Form</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="hidden" name="_subject" value="New Portfolio Project Inquiry" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-md border-2 border-black bg-white px-3 py-2 text-sm sm:text-base font-medium outline-none focus:ring-2 focus:ring-black/20"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-md border-2 border-black bg-white px-3 py-2 text-sm sm:text-base font-medium outline-none focus:ring-2 focus:ring-black/20"
              />

              <select
                name="projectType"
                defaultValue="Web App"
                className="w-full rounded-md border-2 border-black bg-white px-3 py-2 text-sm sm:text-base font-medium outline-none focus:ring-2 focus:ring-black/20"
              >
                <option>Web App</option>
                <option>POS / Inventory</option>
                <option>Backend API</option>
                <option>Maintenance / Optimization</option>
              </select>

              <textarea
                required
                name="message"
                rows={5}
                placeholder="Briefly describe your project, goals, and timeline"
                className="w-full rounded-md border-2 border-black bg-white px-3 py-2 text-sm sm:text-base font-medium outline-none focus:ring-2 focus:ring-black/20"
              />

              <button type="submit" className="retro-btn w-full sm:w-auto" disabled={submitState === "sending"}>
                {submitState === "sending" ? "Sending..." : "Send Project Brief"}
              </button>
            </form>
          </div>

          <div className="retro-panel p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-[var(--foreground)]">Direct Contact</h3>

            <div className="space-y-3">
              <motion.a
                href="mailto:abdullahalnomancse@gmail.com"
                className="retro-panel-soft flex items-center p-3 group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[var(--primary)] flex items-center justify-center mr-3">
                  <FaEnvelope className="text-black" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[var(--foreground)] text-sm sm:text-base">Email</h4>
                  <p className="text-[var(--muted-foreground)] text-xs sm:text-sm truncate">abdullahalnomancse@gmail.com</p>
                </div>
                <FaArrowRight className="text-black opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
              </motion.a>

              <motion.a
                href="https://wa.me/8801771810475"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-panel-soft flex items-center p-3 group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[var(--primary)] flex items-center justify-center mr-3">
                  <FaWhatsapp className="text-black" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[var(--foreground)] text-sm sm:text-base">WhatsApp</h4>
                  <p className="text-[var(--muted-foreground)] text-xs sm:text-sm truncate">+880 1771-810475</p>
                </div>
                <FaArrowRight className="text-black opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
              </motion.a>
            </div>

            <div className="retro-panel-soft p-3 mt-4 flex items-start gap-2">
              <FaClock className="mt-0.5" />
              <p className="text-sm font-semibold text-[var(--secondary-foreground)]">
                Expected reply time: within 12-24 hours on business days.
              </p>
            </div>

            <div className="border-t-2 border-black/20 pt-4 mt-4">
              <h4 className="text-base font-black text-[var(--foreground)] mb-3">Social</h4>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://linkedin.com/in/abdullahalnomancse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn retro-btn-sm"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaLinkedin className="mr-1" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/AlNomanCSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn retro-btn-sm"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="mr-1" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {(submitState === "success" || submitState === "error") && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/45 px-4 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSubmitState("idle")}
          >
            <motion.div
              className="retro-panel bg-[var(--secondary)] w-full max-w-md p-5 sm:p-6"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-xl font-black text-[var(--foreground)] mb-2">
                {submitState === "success" ? "Message Sent" : "Submission Failed"}
              </h4>
              <p className="text-sm sm:text-base font-semibold text-[var(--secondary-foreground)] mb-4">
                {submitState === "success"
                  ? "Thanks, your project brief was sent successfully. I will reply within 12-24 hours."
                  : "Could not send the form right now. Please try again or contact me via WhatsApp."}
              </p>

              <div className="flex justify-end">
                <button type="button" className="retro-btn retro-btn-sm" onClick={() => setSubmitState("idle")}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
