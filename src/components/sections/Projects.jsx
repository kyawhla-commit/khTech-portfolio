import { IoLogoGithub } from "react-icons/io5";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Projects } from "../../allDetails/index";

export const Project = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleFeatures = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const featuredProject = Projects[0];
  const timelineProjects = Projects.slice(1);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Feature Projects
          </h2>

          {/* Featured Project - Hero Card */}
          <div className="mb-16">
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500">
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-blue-500 dark:text-blue-400 text-sm font-semibold mb-2">
                    {featuredProject.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                    {featuredProject.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 py-1.5 px-3 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={featuredProject.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                    >
                      <IoLogoGithub className="size-5" />
                      View Code
                    </a>
                    {featuredProject.live && (
                      <a
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                      >
                        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right - Features */}
                <div className="bg-gray-100/50 dark:bg-gray-800/50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Project Architecture
                  </h4>
                  {featuredProject.projectFeatures && (
                    <div className="space-y-4">
                      {featuredProject.projectFeatures.map((featureGroup, groupIndex) => (
                        <div key={groupIndex}>
                          <h5 className="font-medium text-cyan-600 dark:text-cyan-400 mb-2 text-sm">
                            {featureGroup.section}
                          </h5>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
                            {featureGroup.items.slice(0, 5).map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            <h3 className="text-center text-lg font-semibold text-gray-500 dark:text-gray-400 mb-8">
              My Development Journey
            </h3>

            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 rounded-full hidden md:block" />
            <div className="absolute left-6 w-0.5 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 rounded-full md:hidden" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineProjects.map((project, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg mt-6" />

                  {/* Year Badge - Desktop */}
                  <div
                    className={`hidden md:flex absolute left-1/2 transform items-center ${
                      index % 2 === 0 ? "translate-x-6" : "-translate-x-full -ml-6"
                    } mt-5`}
                  >
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      {project.year}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[45%] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="group p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                      {/* Mobile Year */}
                      <span className="md:hidden text-xs font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded mb-2 inline-block">
                        {project.year}
                      </span>

                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                          {project.name}
                        </h4>
                        <div className="flex gap-1.5">
                          <a
                            href={project.git}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 hover:text-white text-gray-500 dark:text-gray-400 transition-all"
                          >
                            <IoLogoGithub className="size-4" />
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-emerald-500 hover:text-white text-gray-500 dark:text-gray-400 transition-all"
                            >
                              <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Expandable Features */}
                      {project.projectFeatures && project.projectFeatures.length > 0 && (
                        <div className="mb-3">
                          <button
                            onClick={() => toggleFeatures(index)}
                            className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors text-xs font-medium"
                          >
                            <svg
                              className={`w-3 h-3 transition-transform duration-300 ${
                                expandedProject === index ? "rotate-90" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Details
                          </button>

                          {expandedProject === index && (
                            <div className="mt-2 pl-3 border-l-2 border-cyan-500/30 space-y-2 animate-fadeIn">
                              {project.projectFeatures.slice(0, 1).map((featureGroup, groupIndex) => (
                                <div key={groupIndex}>
                                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-0.5">
                                    {featureGroup.items.slice(0, 4).map((item, itemIndex) => (
                                      <li key={itemIndex} className="flex items-start">
                                        <span className="text-green-500 mr-1.5">✓</span>
                                        <span className="line-clamp-1">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 py-1 px-2 rounded-md text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
