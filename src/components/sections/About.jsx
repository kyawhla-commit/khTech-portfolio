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
    { name: "React", icon: RiReactjsLine, color: "#61DAFB" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
  ];

  const backendSkills = [
    { name: "Laravel", icon: IoLogoLaravel, color: "#FF2D20" },
    { name: "PHP", icon: MdPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "RestFul Api", icon: TbApi, color: "#4479A1" },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#F7DF1E",
    },
  ];

  const toolSkills = [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Github", icon: FaGithub,  color: "#4078c0" },
    { name: "Postman", icon: SiPostman, color: "#F05032" },
    { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
    { name: "Digital Ocean", icon: FaDigitalOcean, color: "#4479A1"},
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
    },
  ];
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 from-blue-400 to-blue-300 dark:from-blue-600 dark:to-blue-500">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h1>
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-white text-xl mb-6 ">
             I am looking for a role that aligns with my values and allows me to contribute to society in a meaningful way. I believe that everyone has the potential to make a positive impact, and I am committed to doing so through my work. I am open to exploring different industries and roles that align with my passions and values. My main focus these days is learning new technologies and architecting solutions to grow my career.
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex justify-center gap-8 flex-wrap">
                    {frontendSkills.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <tech.icon
                          className="h-12 w-12 mb-2"
                          style={{ color: tech.color }}
                        />
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Tools</h3>
                  <div className="flex justify-center gap-8 flex-wrap">
                    {toolSkills.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <tech.icon
                          className="h-12 w-12 mb-2"
                          style={{ color: tech.color }}
                        />
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex justify-center gap-8 flex-wrap">
                  {backendSkills.map((tech, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <tech.icon
                        className="h-12 w-12 mb-2"
                        style={{ color: tech.color }}
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h2 className="text-xl font-bold mb-4">Education</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bechor of Art "B.A"</strong> - Pinlon University (2019
                  - 2025)
                </li>
                <li>
                  Revelent Coursework: Data Structure , Web Development, Could
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h2 className="text-xl font-bold mb-4">Work Experience</h2>
              <div className="list-disc list-inside space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold">
                    Sale & Marketing at Mytel International Telecom (Fiber
                    Internet)
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos nesciunt doloremque modi et facere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
