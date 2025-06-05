import { CheckIcon, CodeIcon, PaintbrushVertical, Drill } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      icon: <CodeIcon className="text-primary text-xl" />,
      description: "Building modern, responsive, and performant user interfaces with the latest technologies.",
      items: [
        "React & Next.js",
        "JavaScript & TypeScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Material UI (MUI)",
        "Bootstrap"
      ]
    },
    {
      title: "React Ecosystem",
      icon: <CodeIcon className="text-primary text-xl" />,
      description: "Leveraging the React ecosystem to build efficient and scalable frontend applications.",
      items: [
        "React Hook Form",
        "Yup Validation",
        "Redux & RTK Query",
        "Tanstack Table, Query, Virtual",
        "Jest Unit Testing",
        "State Management"
      ]
    },
    {
      title: "Tools & Collaboration",
      icon: <Drill className="text-primary text-xl" />,
      description: "Using modern tools and methodologies to deliver high-quality results efficiently.",
      items: [
        "Node.js",
        "Git (Github, Gitlab, Bitbucket)",
        "Jira & Wrike",
        "Headless CMS (Contentstack, Tina, Sanity)",
        "Google Analytics & Tag Manager",
        "Agile/Scrum Methodology"
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate">
          <h2 className="text-3xl font-bold text-center mb-4 font-poppins text-gray-900 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
            My technical toolkit and specialized skills that help me deliver exceptional UI experiences
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {skill.description}
                  </p>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="text-secondary mr-2 h-4 w-4" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
