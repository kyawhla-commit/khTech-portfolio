import { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward, IoClose, IoExpand, IoRibbon, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { RevealOnScroll } from "../RevealOnScroll";
import { Educations } from "../../allDetails";

export const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedSkills, setExpandedSkills] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const newIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1)
      : Math.min(Educations.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
  };

  const toggleSkills = (certId) => {
    setExpandedSkills(prev => ({
      ...prev,
      [certId]: !prev[certId]
    }));
  };

  const toggleDescription = (certId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [certId]: !prev[certId]
    }));
  };

  const SKILLS_PREVIEW_COUNT = 3;
  const DESCRIPTION_PREVIEW_LENGTH_MOBILE = 120; // Only for mobile/tablet

  return (
    <section
      id="certificates"
      className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="down" duration={600}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-3 sm:mb-4">
              <IoRibbon className="text-amber-600 dark:text-amber-400 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium">Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Certifications
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Certifications that reflect my commitment to learning modern technologies
            </p>
          </div>
        </RevealOnScroll>

        {/* Carousel Navigation */}
        <RevealOnScroll direction="up" delay={100} duration={500}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => scroll('left')}
              disabled={activeIndex === 0}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            >
              <IoChevronBack className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            <div className="flex gap-1.5 sm:gap-2">
              {Educations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-6 sm:w-8 bg-blue-500' 
                      : 'w-1.5 sm:w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              disabled={activeIndex === Educations.length - 1}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            >
              <IoChevronForward className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </RevealOnScroll>

        {/* Cards Carousel */}
        <RevealOnScroll direction="scale" delay={200} duration={700}>
          <div className="relative" ref={scrollRef}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 16}px))` }}
            >
              {Educations.map((cert, index) => {
                const isExpanded = expandedSkills[cert.id];
                const isDescExpanded = expandedDescriptions[cert.id];
                const hasMoreSkills = cert.skills.length > SKILLS_PREVIEW_COUNT;
                const displayedSkills = isExpanded ? cert.skills : cert.skills.slice(0, SKILLS_PREVIEW_COUNT);
                const hiddenCount = cert.skills.length - SKILLS_PREVIEW_COUNT;
                
                // Read more only for mobile/tablet (< lg breakpoint)
                const needsReadMoreMobile = cert.description.length > DESCRIPTION_PREVIEW_LENGTH_MOBILE;
                const displayedDescriptionMobile = isDescExpanded 
                  ? cert.description 
                  : cert.description.slice(0, DESCRIPTION_PREVIEW_LENGTH_MOBILE) + (needsReadMoreMobile ? '...' : '');

                return (
                  <div
                    key={cert.id}
                    className="w-full flex-shrink-0 px-2 sm:px-3"
                    style={{ marginRight: index < Educations.length - 1 ? '16px' : '0' }}
                  >
                    <div 
                      className={`relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 ${
                        index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                      }`}
                    >
                      {/* Certificate Display */}
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Side */}
                        <div 
                          className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[280px] lg:min-h-[400px] cursor-pointer group"
                          onClick={() => setSelectedCert(cert)}
                        >
                          {/* Decorative Elements */}
                          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-blue-200 dark:border-blue-800 rounded-tl-xl sm:rounded-tl-2xl lg:rounded-tl-3xl"></div>
                          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-blue-200 dark:border-blue-800 rounded-br-xl sm:rounded-br-2xl lg:rounded-br-3xl"></div>
                          
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="max-w-full max-h-[160px] sm:max-h-[220px] lg:max-h-[350px] object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                          />
                          
                          {/* Expand Hint */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-gray-800/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                              <IoExpand className="text-gray-700 dark:text-gray-300 w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Click to expand</span>
                            </div>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                          {/* Verified Badge */}
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></span>
                              <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm font-semibold">Verified</span>
                            </div>
                            <span className="text-gray-300 dark:text-gray-600">•</span>
                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Professional Certificate</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                            {cert.title}
                          </h3>

                          {/* Description with Read More (Mobile/Tablet only) */}
                          <div className="mb-4 sm:mb-6">
                            {/* Mobile/Tablet: Truncated with Read More */}
                            <p className="lg:hidden text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                              {displayedDescriptionMobile}
                            </p>
                            
                            {/* Desktop: Full description always shown */}
                            <p className="hidden lg:block text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                              {cert.description}
                            </p>
                            
                            {/* Read More button - Mobile/Tablet only */}
                            {needsReadMoreMobile && (
                              <button
                                onClick={() => toggleDescription(cert.id)}
                                className="lg:hidden mt-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
                              >
                                {isDescExpanded ? (
                                  <>
                                    <IoChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    Show less
                                  </>
                                ) : (
                                  <>
                                    <IoChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    Read more
                                  </>
                                )}
                              </button>
                            )}
                          </div>

                          {/* Skills Section */}
                          <div className="mb-5 sm:mb-6">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                </svg>
                                Skills Acquired
                              </h4>
                              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                                {cert.skills.length}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {displayedSkills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-medium border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* Show More/Less Skills Button */}
                            {hasMoreSkills && (
                              <button
                                onClick={() => toggleSkills(cert.id)}
                                className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                              >
                                {isExpanded ? (
                                  <>
                                    <IoChevronUp className="w-4 h-4" />
                                    Show less
                                  </>
                                ) : (
                                  <>
                                    <IoChevronDown className="w-4 h-4" />
                                    +{hiddenCount} more skill{hiddenCount > 1 ? 's' : ''}
                                  </>
                                )}
                              </button>
                            )}
                          </div>

                          {/* View Certificate Button */}
                          <button
                            onClick={() => setSelectedCert(cert)}
                            className="self-start px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold text-sm sm:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                          >
                            <IoExpand className="w-4 h-4" />
                            View Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto">
          <RevealOnScroll direction="up" delay={0} duration={500}>
            <div className="text-center p-3 sm:p-4 lg:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">{Educations.length}</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Certifications</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={100} duration={500}>
            <div className="text-center p-3 sm:p-4 lg:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Completion</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={200} duration={500}>
            <div className="text-center p-3 sm:p-4 lg:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Skills</div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <IoClose className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>

          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-3 sm:mt-4">
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold px-4">{selectedCert.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
