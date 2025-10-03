import { useState } from "react";
import { IoImage, IoDownloadOutline, IoClose, IoExpand } from "react-icons/io5";
import { RevealOnScroll } from "../RevealOnScroll";
import { Educations } from "../../allDetails";

export const Certificate = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const openImageModal = () => setIsImageModalOpen(true);
  const closeImageModal = () => setIsImageModalOpen(false);

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ${
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
            className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl mx-2 sm:mx-4 max-h-[95vh] overflow-hidden transform transition-all duration-500 ${
              selectedProject ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between z-10">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate pr-4">
                  {selectedProject?.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 truncate">
                  Certificate Details
                </p>
              </div>
              <button
                onClick={closeModal}
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 ml-2"
              >
                <IoClose className="text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col h-[calc(95vh-80px)]">
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 sm:p-8">
                  <div className="flex flex-col gap-6 sm:gap-8">
                    
                    {/* Certificate Image Section - Now Clickable */}
                    <div className="flex flex-col">
                      <div 
                        className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                        onClick={openImageModal}
                      >
                        {/* Expand Icon Overlay */}
                        <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <IoExpand className="text-lg" />
                        </div>
                        
                        {/* Click Hint Text */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to expand
                        </div>
                        
                        <div className="flex items-center justify-center min-h-[200px] sm:min-h-[300px]">
                          <img
                            src={selectedProject?.image}
                            alt={selectedProject?.title}
                            className="max-w-full max-h-[180px] sm:max-h-[280px] w-auto h-auto rounded-xl shadow-lg object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <button className="flex-1 py-3 px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                          <IoDownloadOutline className="size-4 sm:size-5" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6 sm:space-y-8">
                      
                      {/* Skills Section */}
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {selectedProject?.skills?.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          About this Certification
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          This professional certification validates comprehensive knowledge and practical skills 
                          in modern web development technologies. It demonstrates proficiency in building scalable 
                          applications and working with industry-standard tools and frameworks.
                        </p>
                      </div>

                      {/* Meta Info */}
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                        <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                          <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Completion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-2 sm:h-0 bg-transparent flex-shrink-0"></div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            <IoClose className="text-2xl" />
          </button>

          {/* Download Button */}
          <button className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300">
            <IoDownloadOutline className="text-xl" />
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
            />
          </div>

          {/* Image Title */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white py-2 px-4 rounded-full text-sm sm:text-base">
            {selectedProject?.title}
          </div>

          {/* Zoom Hint for Mobile */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white py-2 px-4 rounded-full text-xs text-center max-w-xs">
            Pinch to zoom • Tap to close
          </div>
        </div>
      )}
    </section>
  );
};