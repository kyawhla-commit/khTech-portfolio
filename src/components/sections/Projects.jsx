import { IoLogoGithub } from "react-icons/io5";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Projects } from '../../allDetails/index'

export const Project = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleFeatures = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Feature Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Projects.map((project, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-800 hover:translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800/50 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Grouped Project Features Section */}
                {project.projectFeatures && project.projectFeatures.length > 0 && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleFeatures(index)}
                      className="flex items-center justify-between w-full text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors mb-2 text-left"
                    >
                      <span className="text-lg font-semibold">
                        Project Architecture
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedProject === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {expandedProject === index && (
                      <div className="space-y-4 animate-fadeIn">
                        {project.projectFeatures.map((featureGroup, groupIndex) => (
                          <div key={groupIndex} className="border-l-2 border-cyan-500/50 pl-4">
                            <h5 className="font-semibold text-cyan-600 dark:text-cyan-300 mb-2">
                              {featureGroup.section}
                            </h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                              {featureGroup.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <span className="text-green-600 dark:text-green-400 mr-2 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 dark:hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors items-center gap-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 hover:bg-blue-500/20 dark:hover:bg-blue-500/30 px-6 py-3 border border-blue-500/20 dark:border-blue-500/30"
                  >
                    <span className="text-lg font-medium">
                      View on GitHub
                    </span>
                    <IoLogoGithub className="size-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};