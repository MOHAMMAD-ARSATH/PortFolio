import { useEffect } from "react";
import { useLocation } from "react-router";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="home" name="home">
        <Hero />
      </section>

      <SocialLinks />

      <section id="about" name="about">
        <About />
      </section>

      <section id="projects" name="projects">
        <Projects />
      </section>

      <section id="skills" name="skills">
        <Skills />
      </section>

      <section id="contact" name="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;