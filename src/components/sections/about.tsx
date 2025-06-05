import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-gray-900 dark:text-white">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="UI Engineer workspace" 
                className="rounded-lg shadow-lg" 
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Crafting experiences, not just interfaces</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                With experience at companies like Net X and United Wholesale Mortgage, I specialize in creating beautiful, functional, and accessible user interfaces that help businesses connect with their users.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                My technical background combined with an eye for design allows me to transform applications by implementing modern, responsive interfaces. I'm passionate about React, TypeScript, and creating seamless user experiences through clean code and performance optimization.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-800 cursor-default">React</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-800 cursor-default">TypeScript</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-800 cursor-default">UI/UX Design</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-800 cursor-default">Accessibility</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-800 cursor-default">CSS/SASS</span>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-indigo-600 text-white" asChild>
                  <a href="#contact">Let's connect</a>
                </Button>
                <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-2" asChild>
                  <a href="/Dev Res 3.27.25.pdf" download="Zachary_Semaan_Resume.pdf">
                    <span>Download Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
