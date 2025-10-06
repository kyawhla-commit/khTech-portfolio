import { motion } from "framer-motion";
import { RiReactjsLine, RiJavascriptLine } from "react-icons/ri";
import { IoLogoLaravel, IoLogoJavascript } from "react-icons/io5";
import { FaDigitalOcean, FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiMysql,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { MdPhp } from "react-icons/md";
import { RevealOnScroll } from "../RevealOnScroll";
import { SiPostman } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";

export const About = () => {
  const frontendSkills = [
    { 
      name: "React", 
      icon: RiReactjsLine, 
      color: "#61DAFB",
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      icon: IoLogoJavascript, 
      color: "#F7DF1E",
      category: "Frontend"
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript, 
      color: "#3178C6",
      category: "Frontend"
    },
  ];

  const backendSkills = [
    { 
      name: "Laravel", 
      icon: IoLogoLaravel, 
      color: "#FF2D20",
      category: "Backend"
    },
    { 
      name: "PHP", 
      icon: MdPhp, 
      color: "#777BB4",
      category: "Backend"
    },
    { 
      name: "MySQL", 
      icon: SiMysql, 
      color: "#4479A1",
      category: "Database"
    },
    { 
      name: "RESTful API", 
      icon: TbApi, 
      color: "#FF6B6B",
      category: "Backend"
    },
    { 
      name: "Node.js", 
      icon: SiNodedotjs, 
      color: "#339933",
      category: "Backend"
    },
    { 
      name: "Express.js", 
      icon: SiExpress, 
      color: "#000000",
      category: "Backend"
    },
  ];

  const toolSkills = [
    { 
      name: "Git", 
      icon: FaGitAlt, 
      color: "#F05032",
      category: "Version Control"
    },
    { 
      name: "GitHub", 
      icon: FaGithub, 
      color: "#4078c0",
      category: "Version Control"
    },
    { 
      name: "Postman", 
      icon: SiPostman, 
      color: "#FF6C37",
      category: "Development"
    },
    { 
      name: "Ubuntu", 
      icon: FaUbuntu, 
      color: "#E95420",
      category: "Infrastructure"
    },
    { 
      name: "Digital Ocean", 
      icon: FaDigitalOcean, 
      color: "#0080FF",
      category: "Cloud"
    },
    { 
      name: "Docker", 
      icon: SiDocker, 
      color: "#2496ED",
      category: "Infrastructure"
    },
  ];

  const SkillCard = ({ tech, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 border-l-4 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 p-6 shadow-sm hover:shadow-md"
    >
      <div className="flex items-center space-x-4">
        <div 
          className="flex-shrink-0 p-3 rounded-md bg-gray-50 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300"
        >
          <tech.icon 
            className="h-6 w-6" 
            style={{ color: tech.color }}
          />
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {tech.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {tech.category}
          </p>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );

  const SkillSection = ({ title, subtitle, skills, delay = 0 }) => (
    <RevealOnScroll>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg pl-5">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((tech, index) => (
            <SkillCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </motion.div>
    </RevealOnScroll>
  );

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Profile
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Full-Stack Developer specializing in modern web technologies and scalable solutions
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Professional Summary */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Professional Summary
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    Results-driven Full-Stack Developer with expertise in modern web technologies. 
                    Specialized in building scalable applications using React, Node.js, and cloud platforms. 
                    Proven ability to deliver high-quality solutions that meet business objectives and user needs.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Core Competencies</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Full-Stack Development
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Cloud Architecture
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Agile Methodology
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      System Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Technical Expertise */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Technical Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Comprehensive skill set across modern development technologies and platforms
            </p>

            <SkillSection
              title="Frontend Development"
              subtitle="Modern frameworks and libraries for enterprise-grade applications"
              skills={frontendSkills}
              delay={0.1}
            />

            <SkillSection
              title="Backend Technologies"
              subtitle="Robust server-side solutions and database management systems"
              skills={backendSkills}
              delay={0.2}
            />

            <SkillSection
              title="Development Tools & Platforms"
              subtitle="Professional tools and infrastructure for efficient development workflows"
              skills={toolSkills}
              delay={0.3}
            />
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Education */}
          <RevealOnScroll>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
                  <p className="text-gray-600 dark:text-gray-400">Academic Background</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-green-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Bachelor of Arts
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      2019 - 2025
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    Pinlon University
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    Focused on computer science and software engineering principles
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Academic Focus
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">• Data Structures</span>
                    <span className="text-gray-600 dark:text-gray-400">• Web Development</span>
                    <span className="text-gray-600 dark:text-gray-400">• Cloud Computing</span>
                    <span className="text-gray-600 dark:text-gray-400">• System Architecture</span>
                    <span className="text-gray-600 dark:text-gray-400">• Database Design</span>
                    <span className="text-gray-600 dark:text-gray-400">• Software Engineering</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>

          {/* Professional Experience */}
          <RevealOnScroll>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
                  <p className="text-gray-600 dark:text-gray-400">Professional Journey</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-purple-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Sales & Marketing Specialist
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                    Mytel International Telecom
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      Developed and implemented comprehensive marketing strategies for fiber optic services
                    </p>
                    <p className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      Managed key customer accounts and relationships
                    </p>
                    <p className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      Contributed to business growth through data-driven campaign analysis
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Professional Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Continuously enhancing technical skills through personal projects, online courses, 
                    and staying current with industry trends and best practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>

        {/* Professional Philosophy */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
             I'm constantly exploring new technologies and best practices to stay at the forefront of web development. 
                My focus is on mastering full-stack development, cloud architecture, and creating efficient, 
                maintainable code that delivers exceptional user experiences.
              </p>
              <div className="w-16 h-1 bg-white mx-auto mt-6 rounded"></div>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};