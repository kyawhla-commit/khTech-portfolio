import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["khunKyawHla", "Full Stack Developer", "Freelancer"];

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
      className="min-h-screen flex items-center justify-center relative bg-gray-950 overflow-hidden"
    >
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Photo Section - Now on Left */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Decorative Border */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
                  
                  {/* Photo with Modern Frame */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 bg-gray-800 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center relative">
                      {/* Replace this with your actual photo */}
                      <div className="text-center text-gray-400">
                        <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="text-sm font-mono">Your Photo</p>
                      </div>
                      
                      {/* Floating Tech Stack */}
                      <div className="absolute -top-3 -right-3 bg-gray-900 border border-purple-500/30 rounded-lg px-3 py-1">
                        <span className="text-xs text-purple-400 font-mono">React</span>
                      </div>
                      <div className="absolute -bottom-3 -left-3 bg-gray-900 border border-blue-500/30 rounded-lg px-3 py-1">
                        <span className="text-xs text-blue-400 font-mono">Node.js</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Orb */}
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Now on Right */}
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-6">
                {/* Welcome Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300 font-mono">Available for work</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="block">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  I specialize in creating <span className="text-purple-400 font-semibold">modern web applications</span> 
                  with focus on performance, accessibility, and great user experiences.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 font-mono hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                  <a
                    href="#projects"
                    className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      View My Work
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>

                  <a
                    href="#contact"
                    className="group border-2 border-gray-600 text-gray-300 py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white hover:scale-105 transform flex items-center justify-center gap-2"
                  >
                    Get In Touch
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                </div>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-8 pt-8">
                  {[
                    { number: '2+', label: 'Years Exp' },
                    { number: '50+', label: 'Projects' },
                    { number: '100%', label: 'Satisfaction' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400 font-mono">Scroll Down</span>
          <div className="animate-bounce">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing-cursor {
          animation: blink 1s infinite;
          color: #60a5fa;
          font-weight: 300;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};