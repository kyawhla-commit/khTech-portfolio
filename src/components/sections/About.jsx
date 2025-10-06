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
      category: "Tools"
    },
    { 
      name: "GitHub", 
      icon: FaGithub, 
      color: "#4078c0",
      category: "Tools"
    },
    { 
      name: "Postman", 
      icon: SiPostman, 
      color: "#FF6C37",
      category: "Tools"
    },
    { 
      name: "Ubuntu", 
      icon: FaUbuntu, 
      color: "#E95420",
      category: "DevOps"
    },
    { 
      name: "Digital Ocean", 
      icon: FaDigitalOcean, 
      color: "#0080FF",
      category: "DevOps"
    },
    { 
      name: "Docker", 
      icon: SiDocker, 
      color: "#2496ED",
      category: "DevOps"
    },
  ];

  const SkillCard = ({ tech, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        {/* Icon Container */}
        <div 
          className="flex-shrink-0 p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
          style={{ 
            backgroundColor: `${tech.color}08`,
          }}
        >
          <tech.icon 
            className="h-6 w-6" 
            style={{ color: tech.color }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {tech.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
            {tech.category}
          </p>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div 
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"
        style={{ 
          background: tech.category === 'Frontend' ? 'linear-gradient(to right, #61DAFB, #3178C6)' :
                    tech.category === 'Backend' ? 'linear-gradient(to right, #FF2D20, #777BB4)' :
                    'linear-gradient(to right, #2496ED, #0080FF)'
        }}
      />
    </motion.div>
  );

  const SkillSection = ({ title, description, skills, delay = 0 }) => (
    <RevealOnScroll>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="mb-16"
      >
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="flex items-center mb-4">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      className="min-h-screen py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-8">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                About Me
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Full-Stack Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies and clean code
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Introduction */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  I specialize in building scalable web applications using modern technologies. 
                  With a strong foundation in both frontend and backend development, I create 
                  solutions that are not only functional but also provide exceptional user experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">5+ Projects</span>
                  </div>
                  <div className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Modern Stack</span>
                  </div>
                  <div className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Clean Code</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Technologies Section */}
        <div className="mb-20">
          <SkillSection
            title="Frontend Technologies"
            description="Modern frameworks and libraries for building responsive and interactive user interfaces"
            skills={frontendSkills}
            delay={0.1}
          />

          <SkillSection
            title="Backend & Database"
            description="Robust server-side technologies and database management systems"
            skills={backendSkills}
            delay={0.2}
          />

          <SkillSection
            title="Development Tools"
            description="Essential tools and platforms that streamline the development workflow"
            skills={toolSkills}
            delay={0.3}
          />
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
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    Bachelor of Arts
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Pinlon University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">2019 - 2025</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      Data Structures
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      Cloud Computing
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      System Architecture
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>

          {/* Experience */}
          <RevealOnScroll>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    Sales & Marketing Specialist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mytel International Telecom
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">2022 - Present</p>
                  
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Developed comprehensive marketing strategies and managed customer relationships 
                      for fiber internet services, driving business growth through targeted campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>

        {/* Call to Action */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                I'm always open to discussing new opportunities and interesting projects. 
                Whether you need a full-stack developer or want to collaborate on something innovative, 
                let's connect and create something extraordinary together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                  Get In Touch
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200">
                  View Projects
                </button>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};