import { motion } from "framer-motion";
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
    <section id="about" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text Content */}
          <RevealOnScroll direction="left" duration={700}>
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Full-Stack Developer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  & Problem Solver
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Results-driven developer with expertise in modern web technologies. 
                I specialize in building scalable applications using React, Node.js, and Laravel. 
                Passionate about creating efficient, maintainable code that delivers exceptional user experiences.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">6+</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Projects<br/>Completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">15+</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Technologies<br/>Mastered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Certifications<br/>Earned</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right - Visual Element */}
          <RevealOnScroll direction="right" delay={200} duration={700}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/50">
                <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-6 font-mono text-sm">
                  <div className="flex gap-2 mb-4">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
                    <p className="pl-4"><span className="text-green-400">name</span>: <span className="text-amber-400">"Kyaw Hla"</span>,</p>
                    <p className="pl-4"><span className="text-green-400">role</span>: <span className="text-amber-400">"Full-Stack Dev"</span>,</p>
                    <p className="pl-4"><span className="text-green-400">passion</span>: <span className="text-amber-400">"Building Apps"</span>,</p>
                    <p className="pl-4"><span className="text-green-400">available</span>: <span className="text-blue-400">true</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <IoCodeSlash className="text-white size-10" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <RevealOnScroll direction="up" duration={600}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
            </div>
          </RevealOnScroll>

          {/* Tab Navigation */}
          <RevealOnScroll direction="up" delay={100} duration={600}>
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <tab.icon className="size-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activeTabData?.skills.map((skill, index) => (
              <RevealOnScroll key={skill.name} direction="scale" delay={index * 50} duration={400}>
                <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:shadow-lg transition-all">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <skill.icon className="size-8" style={{ color: skill.color }} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
                </div>
              </RevealOnScroll>
            ))}
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <RevealOnScroll direction="left" duration={700}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
                  <IoSchool className="size-7 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-500 dark:text-gray-400">Academic Background</p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-green-200 dark:border-green-800">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-green-500 rounded-full"></div>
                <div className="pb-8">
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">2019 - 2025</span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">Bachelor of Arts</h4>
                  <p className="text-gray-600 dark:text-gray-400">Pinlon University</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                    Major in Geography with focus on spatial analysis and regional studies
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mt-4">
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Focus Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {['Physical Geography', 'Cartography', 'Regional Studies', 'Spatial Analysis'].map((area) => (
                    <span key={area} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Experience */}
          <RevealOnScroll direction="right" delay={100} duration={700}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                  <IoBriefcase className="size-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-gray-500 dark:text-gray-400">Professional Journey</p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-purple-500 rounded-full"></div>
                <div className="pb-8">
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">2020 - 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">Sales & Marketing Specialist</h4>
                  <p className="text-gray-600 dark:text-gray-400">Mytel International Telecom</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Developed marketing strategies for fiber optic services',
                      'Managed key customer accounts and relationships',
                      'Contributed to business growth through data-driven campaigns'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-4 mt-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <span className="font-medium text-gray-900 dark:text-white">Currently:</span> Focused on full-stack development, building projects and expanding technical expertise.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* CTA Section */}
        <RevealOnScroll direction="up" delay={200} duration={700}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                I'm always excited to work on new projects and collaborate with fellow developers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:scale-105 transition-transform"
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
