import { Hero } from "@/components/hero";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import FeaturedWork from "@/components/featured/FeaturedWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="about">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <FeaturedWork />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
