import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import photo from "../../assets/photo.jpg";
import { downloadCV } from "../../utils/downloadCV";
import { IoLogoGithub, IoMail } from "react-icons/io5";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["KhunKyawHla", "WebDeveloper", "ReactEnthusiast"];

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const techStack = ["React", "TypeScript", "Laravel", "Node.js", "React Native", "MySQL"];

  return (
    <section
      id="home"
      className="min-h-screen relative bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center w-full py-16 sm:py-20 pt-24 sm:pt-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <RevealOnScroll direction="down" delay={0} duration={600}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium">Available for work</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left" delay={100} duration={700}>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">Hello, I'm</p>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold min-h-[2.5rem] xs:min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[5rem]">
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                    {texts[textIndex].substring(0, charIndex)}
                  </span>
                  <span className="text-blue-500 animate-pulse">|</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Passionate about creating <span className="text-blue-600 dark:text-cyan-400 font-semibold">clean, functional code</span> and learning every day.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200} duration={600}>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                {techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300} duration={600}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <button
                  onClick={downloadCV}
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:border-blue-500 hover:text-blue-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all"
                >
                  Download CV
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="fade" delay={400} duration={600}>
              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Find me on</span>
                <div className="flex gap-2 sm:gap-3">
                  <a href="https://github.com/kyawhla-commit" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <IoLogoGithub className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a href="#contact" className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <IoMail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right - Photo Section - CIRCULAR ORBIT STYLE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <RevealOnScroll direction="scale" delay={200} duration={800}>
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                
                {/* Outer Orbit Ring */}
                <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-gray-800">
                  {/* Orbiting Dots */}
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: "15s" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 sm:w-3 lg:w-4 h-2.5 sm:h-3 lg:h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                  </div>
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: "15s", animationDelay: "-5s" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
                  </div>
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: "15s", animationDelay: "-10s" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                  </div>
                </div>

                {/* Middle Orbit Ring */}
                <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full border border-gray-200 dark:border-gray-800">
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse", animationDelay: "-5s" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-500 rounded-full"></div>
                  </div>
                </div>

                {/* Inner Glow Ring */}
                <div className="absolute inset-8 sm:inset-12 lg:inset-16 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 animate-pulse"></div>

                {/* Photo Container */}
                <div className="absolute inset-10 sm:inset-14 lg:inset-20 rounded-full overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={photo}
                    alt="Kyaw Hla"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
                </div>

                {/* Center Glow */}
                <div className="absolute inset-10 sm:inset-14 lg:inset-20 rounded-full bg-blue-500/10 blur-xl -z-10"></div>

                {/* Floating Stat Cards - Hidden on very small screens, repositioned for mobile */}
                <RevealOnScroll direction="left" delay={500} duration={500}>
                  <div className="absolute -left-2 sm:-left-4 top-1/4 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl border border-gray-200 dark:border-gray-700 hidden xs:block">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Projects</div>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="right" delay={600} duration={500}>
                  <div className="absolute -right-2 sm:-right-4 top-1/3 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl border border-gray-200 dark:border-gray-700 hidden xs:block">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-600 dark:text-cyan-400">15+</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Skills</div>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="up" delay={700} duration={500}>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                        <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Available Now</span>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Tech Icons Floating - Scaled for mobile */}
                {/*  */}
                <div className="absolute bottom-8 sm:bottom-12 left-2 sm:left-4 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: "1s", animationDuration: "3s" }}>
                  <span className="text-sm sm:text-base lg:text-lg">🚀</span>
                </div>
                <div className="absolute top-1/2 -right-1 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-bounce hidden xs:flex" style={{ animationDelay: "2s", animationDuration: "3s" }}>
                  <span className="text-sm sm:text-base lg:text-lg">💻</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 sm:gap-2 animate-bounce hidden sm:flex">
        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-mono tracking-widest">SCROLL</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1.5 sm:pt-2">
          <div className="w-1 h-1.5 sm:h-2 bg-blue-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
