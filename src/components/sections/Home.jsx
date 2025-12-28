import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import photo from "../../assets/photo.jpg";
import { downloadCV } from "../../utils/downloadCV";
import { IoLogoGithub, IoMail } from "react-icons/io5";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Kyaw Hla", "Full Stack Developer", "Digital Craftsman"];

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
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Status Badge */}
            <RevealOnScroll direction="down" delay={0} duration={600}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-700 dark:text-green-300 text-sm font-medium">Available for work</span>
              </div>
            </RevealOnScroll>

            {/* Main Heading */}
            <RevealOnScroll direction="left" delay={100} duration={700}>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-lg">Hello, I'm</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                    {texts[textIndex].substring(0, charIndex)}
                  </span>
                  <span className="text-blue-500 animate-pulse">|</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                  Crafting <span className="text-blue-600 dark:text-cyan-400 font-semibold">digital experiences</span> that 
                  blend innovative design with robust engineering.
                </p>
              </div>
            </RevealOnScroll>

            {/* Tech Stack Pills */}
            <RevealOnScroll direction="up" delay={200} duration={600}>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </RevealOnScroll>

            {/* CTA Buttons */}
            <RevealOnScroll direction="up" delay={300} duration={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <button
                  onClick={downloadCV}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-all"
                >
                  Download CV
                  <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </RevealOnScroll>

            {/* Social Links */}
            <RevealOnScroll direction="fade" delay={400} duration={600}>
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">Find me on</span>
                <div className="flex gap-3">
                  <a href="https://github.com/kyawhla-commit" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <IoLogoGithub className="size-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a href="#contact" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <IoMail className="size-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right - Photo Section - NEW HEXAGON/BLOB STYLE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <RevealOnScroll direction="right" delay={200} duration={800}>
              <div className="relative">
                {/* Animated Background Shapes */}
                <div className="absolute -inset-8 flex items-center justify-center">
                  {/* Rotating Dashed Circle */}
                  <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] border-2 border-dashed border-blue-300/30 dark:border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: "20s" }}></div>
                  
                  {/* Floating Dots */}
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                  <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute top-1/4 left-0 w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
                </div>

                {/* Main Photo Container - Blob Shape */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Gradient Blob Background */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 animate-pulse"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                      animation: "blob 8s ease-in-out infinite"
                    }}
                  ></div>
                  
                  {/* Photo Mask - Blob Shape */}
                  <div 
                    className="absolute inset-2 overflow-hidden bg-gray-100 dark:bg-gray-800"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                      animation: "blob 8s ease-in-out infinite"
                    }}
                  >
                    <img
                      src={photo}
                      alt="Kyaw Hla"
                      className="w-full h-full object-cover scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Decorative Ring */}
                  <div 
                    className="absolute -inset-4 border-2 border-blue-500/20 dark:border-cyan-500/20"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                      animation: "blob 8s ease-in-out infinite reverse"
                    }}
                  ></div>
                </div>

                {/* Floating Info Cards */}
                <RevealOnScroll direction="left" delay={500} duration={600}>
                  <div className="absolute -bottom-4 -left-4 sm:-left-12 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">Open to Work</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="scale" delay={600} duration={500}>
                  <div className="absolute -top-4 -right-4 sm:-right-8 bg-white dark:bg-gray-900 rounded-2xl px-5 py-4 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                    <div className="text-center">
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">6+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Projects</p>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="up" delay={700} duration={500}>
                  <div className="absolute bottom-1/4 -right-6 sm:-right-16 bg-white dark:bg-gray-900 rounded-2xl p-3 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                        <div className="w-6 h-6 bg-cyan-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                        <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">15+ Skills</p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono tracking-widest">SCROLL</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-scroll"></div>
        </div>
      </div>

      {/* Blob Animation Keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% {
            border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%;
          }
        }
      `}</style>
    </section>
  );
};
