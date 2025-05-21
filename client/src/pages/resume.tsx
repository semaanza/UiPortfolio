import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      <Helmet>
        <title>Zachary Semaan | Resume - UI Engineer</title>
        <meta name="description" content="Professional resume of Zachary Semaan, a UI Engineer with expertise in React, TypeScript, and modern frontend development." />
      </Helmet>
      
      <motion.main 
        className="pt-20 pb-16 flex-grow bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resume</h1>
            <Button className="flex items-center gap-2 bg-primary hover:bg-indigo-600" asChild>
              <a href="/Dev Res 3.27.25.pdf" download="Zachary_Semaan_Resume.pdf">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </a>
            </Button>
          </div>

          <div className="space-y-10">
            {/* Header */}
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-8 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Zachary Semaan</h2>
                    <p className="text-xl font-medium mb-4">UI Engineer</p>
                    <div className="space-y-1">
                      <p className="flex items-center gap-2">
                        <span>📍</span>
                        <span>Davisburg, MI 48350</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📱</span>
                        <span>(248) 535-1333</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📧</span>
                        <span>semaanza@gmail.com</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>🔗</span>
                        <a href="https://linkedin.com/in/semaanza" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          linkedin.com/in/semaanza
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">UI Engineer</h3>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Net X</span> | <span>Remote</span> | <span>Jan 2024 - Present</span>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                      <li>Transform our core application by migrating to React and implementing a cutting-edge design, dramatically improving user experience and technical capabilities.</li>
                      <li>Utilize Tanstack Query to streamline data fetching, caching and state synchronization across the application, significantly enhancing user experience and developer productivity.</li>
                      <li>Implemented comprehensive unit testing strategy using Jest, achieving increased test coverage for all new React components.</li>
                      <li>Revolutionized data presentation by integrating Tanstack table, incorporating advanced features such as sorting, filtering, and pagination, while leveraging virtualization to efficiently handle millions of rows.</li>
                      <li>Track and log work through Jira.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">UI Developer</h3>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium">United Wholesale Mortgage</span> | <span>Pontiac, MI</span> | <span>Oct 2022 - Jan 2024</span>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                      <li>Enhanced and maintained legacy applications employing MVC, vanilla JS, CSS, and HTML.</li>
                      <li>Built new applications with React and MUI, resulting in improved performance and user experience.</li>
                      <li>Integrated V3 microservices through API calls.</li>
                      <li>Migrated older company websites per UX designs to NextJS using contentstack as a headless CMS, boosting load times and enhancing SEO.</li>
                      <li>Effectively collaborated with a large scrum team to deliver high-quality products on schedule.</li>
                      <li>Expertly managed agile workflow using Jira, ensuring the timely completion of tasks.</li>
                      <li>Utilized version control systems including Git, Jenkins, and Bitbucket, to maintain code integrity.</li>
                      <li>Recruited to top priority project.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Junior Developer</h3>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium">M Agency</span> | <span>Remote</span> | <span>Aug 2021 - Apr 2022</span>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                      <li>Managed content updates for applications through Word-Press, ensuring a seamless user experience.</li>
                      <li>Provided support for updating existing client applications as needed.</li>
                      <li>Assisted within a team for the production and launch of new applications.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Junior Front-End Developer</h3>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Vimax Media</span> | <span>Remote</span> | <span>Nov 2020 - Jun 2021</span>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                      <li>Supported the development team in building web applications using the React framework.</li>
                      <li>Created custom components and views per design specifications, ensuring a consistent user interface.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sales & Marketing Manager</h3>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Clarks Building LLC</span> | <span>Clawson, MI</span> | <span>Sep 2017 - May 2022</span>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                      <li>Represent company at trade show expos.</li>
                      <li>Set up and monitor all Google Ad campaigns.</li>
                      <li>Launched website and improved online presence, broadening company exposure.</li>
                      <li>Served as the primary contact throughout project procedures, maintaining strong client relationships.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Javascript/Typescript</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">HTML</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">CSS</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Tailwind</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">MUI</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Bootstrap</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">React Ecosystem</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">React/Next</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">React Hook Form</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Yup Validation</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Redux/RTK Query</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Tanstack: Table, Query, Virtual</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Jest</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">CMS & Analytics</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Contentstack</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Tina</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Sanity</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Contentful</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Google Analytics</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Google Tag Manager</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Tools & Collaboration</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Github</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Gitlab</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Bitbucket</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Jira</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Wrike</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Master of Science in Biology</h3>
                        <p className="text-gray-700 dark:text-gray-300">University of Michigan</p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span>Flint, Michigan</span> | <span>2012 - 2014</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Science in Biomedical Sciences</h3>
                        <p className="text-gray-700 dark:text-gray-300">Central Michigan University</p>
                        <p className="text-gray-700 dark:text-gray-300">Neuroscience</p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span>Mt. Pleasant, Michigan</span> | <span>2007 - 2012</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Certifications</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">University of Michigan</h3>
                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-2">
                          <li>Introduction to HTML5</li>
                          <li>Introduction to CSS3</li>
                          <li>Interactivity with Javascript</li>
                        </ul>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span>April 2020</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Udemy</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">Javascript: Understanding the weird parts</p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span>October 2020</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Free Code Camp</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">Foundational C# with Microsoft</p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <span>March 2025</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </motion.main>
    </>
  );
}