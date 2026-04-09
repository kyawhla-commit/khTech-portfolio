import { IoLogoGithub, IoArrowForward, IoCodeSlash, IoLayers } from "react-icons/io5";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Projects } from "../../allDetails/index";

export const Project = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);

  const featuredProject = Projects[activeProject];

  return (
    <section
      id="projects"
      className="min-h-screen py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="down" duration={600}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 lg:mb-12 text-center md:text-left">
            <div>
              <span className="text-blue-500 font-mono text-xs sm:text-sm tracking-wider">// MY WORK</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-1 sm:mt-2">
                Featured Projects
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 md:mt-0 max-w-md mx-auto md:mx-0">
              A collection of projects showcasing my skills in full-stack development
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Featured Project - Large Card */}
          <RevealOnScroll direction="left" delay={100} duration={700} className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden group h-full">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-cyan-500 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 xs:gap-0 mb-4 sm:mb-6">
                  <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium self-start">
                    {featuredProject.year}
                  </span>
                  <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                    {featuredProject.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                  {featuredProject.name}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Features Toggle */}
                {featuredProject.projectFeatures && (
                  <div className="mb-4 sm:mb-6">
                    <button
                      onClick={() => setShowFeatures(!showFeatures)}
                      className="flex items-center gap-1.5 sm:gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors text-sm sm:text-base"
                    >
                      <IoLayers className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium">
                        {showFeatures ? 'Hide' : 'View'} Architecture
                      </span>
                      <IoArrowForward className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showFeatures ? 'rotate-90' : ''}`} />
                    </button>

                    {showFeatures && (
                      <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-fadeIn">
                        {featuredProject.projectFeatures.map((group, i) => (
                          <div key={i} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200/50 dark:border-gray-700/50">
                            <h5 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                              <IoCodeSlash className="text-cyan-500 w-4 h-4 sm:w-5 sm:h-5" />
                              {group.section}
                            </h5>
                            <ul className="space-y-1 sm:space-y-1.5">
                              {group.items.slice(0, 4).map((item, j) => (
                                <li key={j} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-1.5 sm:gap-2">
                                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 lg:gap-4">
                  {featuredProject.git && (
                    <a
                      href={featuredProject.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base hover:scale-105 transition-transform"
                    >
                      <IoLogoGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                      View Code
                    </a>
                  )}
                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base hover:scale-105 transition-transform"
                    >
                      {featuredProject.liveLabel || "Live Demo"}
                      <IoArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Project Selector - Side Panel */}
          <RevealOnScroll direction="right" delay={200} duration={700}>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[600px] pb-2 lg:pb-0 lg:pr-2 scrollbar-thin snap-x lg:snap-none">
              {Projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveProject(index);
                    setShowFeatures(false);
                  }}
                  className={`flex-shrink-0 w-[280px] xs:w-[300px] lg:w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 snap-start ${
                    activeProject === index
                      ? 'bg-blue-500/10 border-blue-500/50 dark:bg-blue-500/20'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className={`text-[10px] sm:text-xs font-mono ${
                      activeProject === index ? 'text-blue-500' : 'text-gray-500'
                    }`}>
                      {project.year}
                    </span>
                    {activeProject === index && (
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  <h4 className={`font-semibold text-sm sm:text-base mb-1 ${
                    activeProject === index 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {project.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-1 sm:gap-1.5 mt-2 sm:mt-3 flex-wrap">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
