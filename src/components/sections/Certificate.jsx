import { useState } from "react";
import { IoImage, IoDownloadOutline } from "react-icons/io5";
import { RevealOnScroll } from "../RevealOnScroll";
import { Educations } from "../../allDetails";

export const Certificate = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional certifications and qualifications demonstrate my specialization in modern technologies
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {Educations.map((education) => (
              <div
                key={education.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Certificate Image Container */}
                <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
                  <img
                    src={education.image}
                    alt={education.title}
                    className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => openModal(education)}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openModal(education)}
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                    >
                      <IoImage className="size-5 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2">
                        {education.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Completed
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => openModal(education)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Certificate</span>
                    <IoImage className="size-4 transform group-hover/btn:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Professional Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          selectedProject ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        />

        {/* Modal Content */}
        <div
          className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-500 ${
            selectedProject ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex items-center justify-between z-10">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white pr-8">
                {selectedProject?.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Certificate Details</p>
            </div>
            <button
              onClick={closeModal}
              className="flex-shrink-0 w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">×</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-8 overflow-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {/* Certificate Image */}
              <div className="flex flex-col">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <img
                    src={selectedProject?.image}
                    alt={selectedProject?.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                <div className="flex gap-4 mt-2">
                  <button className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    <IoDownloadOutline className="size-5" />
                    <span>Download</span>
                  </button>
                 
                </div>
              </div>

              {/* Details */}
              <div className="space-y-8">
                {/* Skills Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject?.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    About this Certification
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    This professional certification validates comprehensive knowledge and practical skills 
                    in modern web development technologies. It demonstrates proficiency in building scalable 
                    applications and working with industry-standard tools and frameworks.
                  </p>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols gap-4 ">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Completion</div>
                  </div>
                  {/* <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">A+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Grade</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};