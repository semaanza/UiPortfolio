import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  tags: string[];
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Zuker Building Website",
      description: "A custom construction company website showcasing services, projects, and providing customer inquiry capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      category: ["web"],
      tags: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Cookie Shop Website",
      description: "An e-commerce website for a cookie shop with product showcasing, online ordering, and payment processing.",
      imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      category: ["web", "ecommerce"],
      tags: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "React Core Application Migration",
      description: "Transformed a legacy application by migrating to React and implementing a modern UI design, improving user experience.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      category: ["web"],
      tags: ["React", "TypeScript", "Tanstack Query"]
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "A performant data dashboard that efficiently handles millions of rows using advanced virtualization techniques.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      category: ["web", "dashboard"],
      tags: ["React", "Tanstack Table", "Virtualization"]
    },
    {
      id: 5,
      title: "Company Website Migration",
      description: "Migrated legacy company websites to NextJS using Contentstack as a headless CMS, improving load times and SEO.",
      imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      category: ["web"],
      tags: ["Next.js", "Contentstack", "SEO Optimization"]
    },
    {
      id: 6,
      title: "MUI Component Library",
      description: "Built a comprehensive UI component library using Material UI, enabling rapid development of consistent interfaces.",
      imageUrl: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      category: ["web"],
      tags: ["React", "Material UI", "Component Library"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "dashboard", label: "Dashboards" },
    { id: "ecommerce", label: "E-commerce" }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate">
          <h2 className="text-3xl font-bold text-center mb-4 font-poppins text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-8">
            A showcase of my recent work, demonstrating my UI engineering skills and approach to problem-solving
          </p>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "secondary"}
                className={activeFilter === filter.id 
                  ? "bg-primary text-white" 
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img 
                      src={project.imageUrl}
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    {project.id === 1 ? (
                      <a href="https://zukerbuilding.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-indigo-700 transition-colors flex items-center group">
                        Visit Website
                        <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <a href="#contact" className="text-primary font-medium hover:text-indigo-700 transition-colors flex items-center group">
                        Learn More
                        <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <span>View All Projects</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
