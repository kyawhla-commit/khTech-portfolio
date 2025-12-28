import { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward, IoClose, IoExpand, IoRibbon } from "react-icons/io5";
import { RevealOnScroll } from "../RevealOnScroll";
import { Educations } from "../../allDetails";

export const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const newIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1)
      : Math.min(Educations.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
  };

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="down" duration={600}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-4">
              <IoRibbon className="text-amber-600 dark:text-amber-400" />
              <span className="text-amber-700 dark:text-amber-300 text-sm font-medium">Verified Credentials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Professional certifications demonstrating expertise in modern technologies
            </p>
          </div>
        </RevealOnScroll>

        {/* Carousel Navigation */}
        <RevealOnScroll direction="up" delay={100} duration={500}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => scroll('left')}
              disabled={activeIndex === 0}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            >
              <IoChevronBack className="size-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            <div className="flex gap-2">
              {Educations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              disabled={activeIndex === Educations.length - 1}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            >
              <IoChevronForward className="size-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </RevealOnScroll>

        {/* Cards Carousel */}
        <RevealOnScroll direction="scale" delay={200} duration={700}>
          <div className="relative" ref={scrollRef}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 24}px))` }}
            >
              {Educations.map((cert, index) => (
                <div
                  key={cert.id}
                  className="w-full flex-shrink-0 px-3"
                  style={{ marginRight: index < Educations.length - 1 ? '24px' : '0' }}
                >
                  <div 
                    className={`relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 ${
                      index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                    }`}
                  >
                    {/* Certificate Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image Side */}
                      <div 
                        className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-8 flex items-center justify-center min-h-[300px] lg:min-h-[400px] cursor-pointer group"
                        onClick={() => setSelectedCert(cert)}
                      >
                        {/* Decorative Elements */}
                        <div className="absolute top-4 left-4 w-20 h-20 border-l-4 border-t-4 border-blue-200 dark:border-blue-800 rounded-tl-3xl"></div>
                        <div className="absolute bottom-4 right-4 w-20 h-20 border-r-4 border-b-4 border-blue-200 dark:border-blue-800 rounded-br-3xl"></div>
                        
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="max-w-full max-h-[280px] lg:max-h-[350px] object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Expand Hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full flex items-center gap-2">
                            <IoExpand className="text-gray-700 dark:text-gray-300" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Click to expand</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-green-600 dark:text-green-400 text-sm font-medium">Verified</span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                          {cert.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Skills */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                            Skills Acquired
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium border border-blue-100 dark:border-blue-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="self-start px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:scale-105 transition-transform flex items-center gap-2"
                        >
                          View Certificate
                          <IoExpand className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <RevealOnScroll direction="up" delay={0} duration={500}>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{Educations.length}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Certifications</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={100} duration={500}>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Completion</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={200} duration={500}>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Skills</div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <IoClose className="size-8 text-white" />
          </button>

          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedCert.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
