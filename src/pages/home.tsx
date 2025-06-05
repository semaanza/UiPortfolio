import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  useEffect(() => {
    // Intersection Observer for section animations
    const setupIntersectionObserver = () => {
      if ('IntersectionObserver' in window) {
        const sections = document.querySelectorAll('.section-animate');
        
        const sectionObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
          sectionObserver.observe(section);
        });
      } else {
        // Fallback for browsers without intersection observer
        const sections = document.querySelectorAll('.section-animate');
        sections.forEach(section => {
          section.classList.add('visible');
        });
      }
    };

    // Set up smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    };

    setupIntersectionObserver();
    setupSmoothScrolling();
  }, []);

  return (
    <>
      <Helmet>
        <title>Zachary Semaan | UI Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Zachary Semaan, a UI Engineer specializing in creating beautiful, functional, and accessible user interfaces." />
        <meta property="og:title" content="Zachary Semaan | UI Engineer Portfolio" />
        <meta property="og:description" content="Portfolio of Zachary Semaan, a UI Engineer specializing in creating beautiful, functional, and accessible user interfaces." />
      </Helmet>
      
      <motion.main 
        className="pt-16 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </motion.main>
    </>
  );
}
