import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { frontendSkills, backendSkills, toolSkills } from "../../allDetails";
import { RevealOnScroll } from "../RevealOnScroll";
import { IoCodeSlash, IoServer, IoConstruct, IoBriefcase, IoSchool } from "react-icons/io5";

export const About = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: IoCodeSlash, skills: frontendSkills, color: 'blue' },
    { id: 'backend', label: 'Backend', icon: IoServer, skills: backendSkills, color: 'green' },
    { id: 'tools', label: 'Tools', icon: IoConstruct, skills: toolSkills, color: 'purple' },
  ];

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left - Text Content */}
          <RevealOnScroll direction="left" duration={700}>
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                About Me
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Full-Stack Web & Mobile
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  Developer
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Experienced in building enterprise applications with React.js, TypeScript, NestJS, Node.js, Laravel, and PostgreSQL. I develop responsive interfaces, RESTful APIs, relational databases, dashboards, reporting systems, and React Native mobile applications.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-left">Enterprise<br/>Systems</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">Web</span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-left">Frontend &<br/>Backend</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-left">Certifications<br/>Earned</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right - Visual Element */}
          <RevealOnScroll direction="right" delay={200} duration={700}>
            <div className="relative mt-6 lg:mt-0">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200/50 dark:border-blue-800/50">
                <div className="bg-gray-900 dark:bg-gray-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
                  <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-gray-300 overflow-x-auto">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
                    <p className="pl-3 sm:pl-4"><span className="text-green-400">name</span>: <span className="text-amber-400">"Khun Kyaw Hla"</span>,</p>
                    <p className="pl-3 sm:pl-4"><span className="text-green-400">role</span>: <span className="text-amber-400">"Full-Stack Web & Mobile"</span>,</p>
                    <p className="pl-3 sm:pl-4"><span className="text-green-400">company</span>: <span className="text-amber-400">"M-Tech"</span>,</p>
                    <p className="pl-3 sm:pl-4"><span className="text-green-400">location</span>: <span className="text-amber-400">"Yangon, Myanmar"</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <IoCodeSlash className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Skills Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <RevealOnScroll direction="up" duration={600}>
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">Technical Skills</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Technologies I work with</p>
            </div>
          </RevealOnScroll>

          {/* Tab Navigation */}
          <RevealOnScroll direction="up" delay={100} duration={600}>
            <div className="flex justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 lg:mb-10 flex-wrap px-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all ${
                    activeTab === tab.id
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">{tab.label}</span>
                  <span className="xs:hidden">{tab.label.slice(0, 4)}</span>
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Skills Grid */}
          <Motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {activeTabData?.skills.map((skill, index) => (
              <RevealOnScroll key={skill.name} direction="scale" delay={index * 50} duration={400}>
                <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:shadow-lg transition-all">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" style={{ color: skill.color }} />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{skill.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden xs:block">{skill.category}</p>
                </div>
              </RevealOnScroll>
            ))}
          </Motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Education */}
          <RevealOnScroll direction="left" duration={700}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-100 dark:bg-green-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <IoSchool className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Academic Background</p>
                </div>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-green-200 dark:border-green-800">
                <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 -translate-x-[7px] sm:-translate-x-[9px] bg-green-500 rounded-full"></div>
                <div className="pb-5 sm:pb-6 lg:pb-8">
                  <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">Bachelor's Degree</span>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mt-1">Bachelor of Arts in Geography</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Pinlon University</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4 mt-3 sm:mt-4">
                <h5 className="font-medium text-sm sm:text-base text-gray-900 dark:text-white mb-2">Languages</h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['Pa-O - Native', 'Burmese - Fluent', 'English - Intermediate'].map((area) => (
                    <span key={area} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md sm:rounded-lg text-xs sm:text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Experience */}
          <RevealOnScroll direction="right" delay={100} duration={700}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <IoBriefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Professional Journey</p>
                </div>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 -translate-x-[7px] sm:-translate-x-[9px] bg-purple-500 rounded-full"></div>
                <div className="pb-5 sm:pb-6 lg:pb-8">
                  <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">January 2026 - Present</span>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mt-1">Full-Stack Web Developer</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">M-Tech (Myo & Moe Technology Co., Ltd.)</p>
                  <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                    {[
                      'Develop and maintain enterprise applications using React.js, TypeScript, and NestJS',
                      'Build RESTful APIs with PostgreSQL and MySQL integrations',
                      'Implement CRUD, dashboards, reports, filtering, pagination, and validation',
                      'Diagnose bugs, improve performance, and collaborate using Git and GitHub'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl p-3 sm:p-4 mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">Current focus:</span> Building reliable enterprise systems across frontend, backend, and database layers.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* CTA Section */}
        <RevealOnScroll direction="up" delay={200} duration={700}>
          <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 w-full sm:w-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6 max-w-xl mx-auto">
                I'm always excited to work on new projects and collaborate with fellow developers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-white text-blue-600 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
