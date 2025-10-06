import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const texts = ["khunKyawHla", "Full Stack Architect", "Tech Innovator"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-neutral-950 overflow-hidden"
    >
      {/* Professional Background with Geometric Patterns */}
      <div className="absolute inset-0">
        {/* Main Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900"></div>
        
        {/* Geometric Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #ffffff 1px, transparent 1px),
              linear-gradient(180deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>

        {/* Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-20 left-0 w-px h-40 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-20 right-0 w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"></div>
      </div>

      {/* Floating Number Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400/30 font-mono text-sm font-light"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + Math.random() * 60}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              fontSize: `${0.5 + Math.random() * 0.8}rem`
            }}
          >
            01
          </div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-12">
              <div className="space-y-6 lg:space-y-8">
                {/* Professional Intro */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-neutral-400 uppercase tracking-widest text-sm font-light">
                    <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <span>Senior Developer</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
                    <span className="block text-lg sm:text-xl lg:text-2xl text-neutral-400 font-normal mb-4 lg:mb-6">
                      Hello, I'm
                    </span>
                    <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent font-medium">
                      {texts[textIndex].substring(0, charIndex)}
                      <span className="typing-cursor">|</span>
                    </span>
                  </h1>
                </div>

                {/* Professional Description */}
                <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl font-light">
                  Specializing in <span className="text-blue-400 font-normal">enterprise-scale applications</span> and 
                  <span className="text-cyan-400 font-normal"> digital transformation</span>. 
                  I architect solutions that drive business growth through innovative technology.
                </p>
              </div>

              {/* Key Expertise */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 py-4">
                {[
                  { label: "Web Architecture", value: "100%" },
                  { label: "Cloud Solutions", value: "95%" },
                  { label: "UI/UX Design", value: "90%" },
                  { label: "DevOps", value: "88%" },
                  { label: "Database Design", value: "92%" },
                  { label: "API Development", value: "96%" }
                ].map((item, index) => (
                  <div key={index} className="text-center group cursor-pointer p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/30 transition-all duration-500">
                    <div className="text-2xl lg:text-3xl font-light text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {item.value}
                    </div>
                    <div className="text-xs lg:text-sm text-neutral-400 font-light uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
                <a
                  href="#projects"
                  className="group relative bg-white text-neutral-900 py-4 lg:py-5 px-8 lg:px-10 rounded-lg font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transform overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    View Portfolio
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group border border-neutral-700 text-neutral-300 py-4 lg:py-5 px-8 lg:px-10 rounded-lg font-medium transition-all duration-500 hover:border-blue-500 hover:bg-blue-500/5 hover:text-white hover:scale-105 transform flex items-center justify-center gap-3"
                >
                  Schedule Consultation
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Professional Profile */}
            <div className="lg:col-span-5 relative">
              {/* Main Profile Container */}
              <div className="relative">
                {/* Background Accent */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl blur-3xl"></div>
                
                {/* Profile Card */}
                <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
                  
                  {/* Profile Header */}
                  <div className="p-6 border-b border-neutral-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-neutral-300 font-mono">Online</span>
                      </div>
                      <div className="text-xs text-neutral-500 font-mono">EST. 2023</div>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="p-8">
                    <div className="relative mx-auto w-48 h-48 lg:w-56 lg:h-56">
                      {/* Image Frame */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-neutral-700 overflow-hidden">
                        {/* Replace with your professional photo */}
                        <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                          <div className="text-center text-neutral-500">
                            <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p className="text-xs font-mono">Professional Photo</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Badges */}
                      <div className="absolute -top-2 -right-2 bg-neutral-900 border border-blue-500/30 rounded-full px-3 py-1">
                        <span className="text-xs text-blue-400 font-mono">Lead</span>
                      </div>
                      <div className="absolute -bottom-2 -left-2 bg-neutral-900 border border-cyan-500/30 rounded-full px-3 py-1">
                        <span className="text-xs text-cyan-400 font-mono">Senior</span>
                      </div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-medium text-white mb-1">khunKyawHla</h3>
                      <p className="text-neutral-400 text-sm">Senior Full Stack Developer</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {[
                        { value: "50+", label: "Projects" },
                        { value: "2+", label: "Years" },
                        { value: "25+", label: "Clients" }
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-medium text-white">{stat.value}</div>
                          <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="p-6 border-t border-neutral-800">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Python'].map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs text-neutral-300 font-mono hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Achievement */}
                <div className="absolute -bottom-6 -right-6 bg-neutral-900 border border-neutral-700 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-xs text-neutral-400">Certified</div>
                    <div className="text-sm text-white font-medium">AWS Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Professional Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3">
          <div className="text-xs text-neutral-500 uppercase tracking-widest font-light">
            Scroll to Discover
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        .typing-cursor {
          animation: blink 1s infinite;
          color: #ffffff;
          font-weight: 300;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .professional-slide-in {
          animation: professionalSlideIn 1s ease-out forwards;
        }

        @keyframes professionalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};