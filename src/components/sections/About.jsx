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
      level: 90,
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      icon: IoLogoJavascript, 
      color: "#F7DF1E",
      level: 85,
      category: "Frontend"
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript, 
      color: "#3178C6",
      level: 80,
      category: "Frontend"
    },
  ];

  const backendSkills = [
    { 
      name: "Laravel", 
      icon: IoLogoLaravel, 
      color: "#FF2D20",
      level: 88,
      category: "Backend"
    },
    { 
      name: "PHP", 
      icon: MdPhp, 
      color: "#777BB4",
      level: 85,
      category: "Backend"
    },
    { 
      name: "MySQL", 
      icon: SiMysql, 
      color: "#4479A1",
      level: 82,
      category: "Database"
    },
    { 
      name: "RESTful API", 
      icon: TbApi, 
      color: "#FF6B6B",
      level: 87,
      category: "Backend"
    },
    { 
      name: "Node.js", 
      icon: SiNodedotjs, 
      color: "#339933",
      level: 83,
      category: "Backend"
    },
    { 
      name: "Express.js", 
      icon: SiExpress, 
      color: "#000000",
      level: 81,
      category: "Backend"
    },
  ];

  const toolSkills = [
    { 
      name: "Git", 
      icon: FaGitAlt, 
      color: "#F05032",
      level: 88,
      category: "Tools"
    },
    { 
      name: "GitHub", 
      icon: FaGithub, 
      color: "#4078c0",
      level: 85,
      category: "Tools"
    },
    { 
      name: "Postman", 
      icon: SiPostman, 
      color: "#FF6C37",
      level: 84,
      category: "Tools"
    },
    { 
      name: "Ubuntu", 
      icon: FaUbuntu, 
      color: "#E95420",
      level: 80,
      category: "DevOps"
    },
    { 
      name: "Digital Ocean", 
      icon: FaDigitalOcean, 
      color: "#0080FF",
      level: 78,
      category: "DevOps"
    },
    { 
      name: "Docker", 
      icon: SiDocker, 
      color: "#2496ED",
      level: 76,
      category: "DevOps"
    },
  ];

  const SkillCard = ({ tech, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: tech.color }}
      />
      
      {/* Animated Border */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent 40%, ${tech.color}40 50%, transparent 60%)`,
          backgroundSize: '300% 300%',
        }}
      />
      
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="flex items-center justify-between mb-4">
          <div 
            className="p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
            style={{ 
              backgroundColor: `${tech.color}15`,
              border: `1px solid ${tech.color}20`
            }}
          >
            <tech.icon 
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
              style={{ color: tech.color }}
            />
          </div>
          
          {/* Skill Level Indicator */}
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {tech.level}%
              </span>
            </div>
            <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: tech.color }}
              />
            </div>
          </div>
        </div>

        {/* Skill Name */}
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {tech.name}
        </h4>
        
        {/* Category Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          {tech.category}
        </div>
      </div>
    </motion.div>
  );

  const SkillSection = ({ title, description, skills, color, delay = 0 }) => (
    <RevealOnScroll>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div 
              className="w-3 h-8 rounded-full"
              style={{ backgroundColor: color }}
            />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </h2>
            <div 
              className="w-3 h-8 rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer dedicated to creating meaningful impact through technology
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
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg mb-16"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              I'm a passionate full-stack developer seeking a role that aligns with my values 
              and allows me to contribute to meaningful projects. I believe in leveraging technology 
              to create positive impact, and I'm committed to continuous learning and professional growth. 
              Currently focused on mastering modern architectures and expanding my expertise in cloud technologies.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Technologies Section */}
        <div className="mb-20">
          <RevealOnScroll>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
            </motion.div>
          </RevealOnScroll>

          <div className="space-y-20">
            <SkillSection
              title="Frontend Development"
              description="Modern frontend technologies and frameworks I use to create responsive, interactive user interfaces."
              skills={frontendSkills}
              color="#61DAFB"
              delay={0.1}
            />

            <SkillSection
              title="Backend & Database"
              description="Server-side technologies and database management systems for building robust and scalable applications."
              skills={backendSkills}
              color="#FF2D20"
              delay={0.2}
            />

            <SkillSection
              title="Tools & DevOps"
              description="Development tools, version control, and deployment platforms that streamline my workflow."
              skills={toolSkills}
              color="#2496ED"
              delay={0.3}
            />
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevealOnScroll>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full mr-3"></div>
                Education
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200/50 dark:border-green-700/30">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Bachelor of Arts "B.A"
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Pinlon University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2019 - 2025</p>
                </div>
                <div className="bg-gray-50/50 dark:bg-gray-700/30 rounded-xl p-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Relevant Coursework
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data Structures, Web Development, Cloud Computing, System Architecture, Database Design
                  </p>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full mr-3"></div>
                Work Experience
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200/50 dark:border-purple-700/30">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Sales & Marketing Specialist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mytel International Telecom (Fiber Internet)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">2022 - Present</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Developed and executed marketing strategies for fiber internet services, 
                    managed customer relationships, and contributed to sales growth through 
                    targeted campaigns and market analysis.
                  </p>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>

        {/* Summary Section */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-500/20">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                I'm constantly exploring new technologies and best practices to stay at the forefront of web development. 
                My focus is on mastering full-stack development, cloud architecture, and creating efficient, 
                maintainable code that delivers exceptional user experiences.
              </p>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* Custom Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .group:hover .absolute.rounded-2xl {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </section>
  );
};