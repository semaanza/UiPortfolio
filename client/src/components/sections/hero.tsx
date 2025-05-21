import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-primary dark:text-indigo-300 rounded-full font-medium text-sm mb-4">UI Engineer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-4 text-gray-900 dark:text-white">
              Creating delightful <span className="text-primary">user experiences</span> through code
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I design and build modern, responsive, and accessible user interfaces that help businesses connect with their users.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-indigo-600 text-white shadow-md hover:shadow-lg"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://pixabay.com/get/gbcf45d0c05df17324fd8604f8d219da66d80d8eeaceb681720d335322268dc90eb8527967db454c23d72cc4a99e26eeb020c9ad5c4008b840616a20b37727931_1280.jpg" 
              alt="John Doe, UI Engineer" 
              className="rounded-full w-64 h-64 object-cover border-8 border-white dark:border-gray-800 shadow-xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
