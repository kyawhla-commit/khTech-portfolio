import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import photo from "../../assets/photo.jpg";
import { downloadCV } from "../../utils/downloadCV";
import { IoLogoGithub, IoMail, IoCodeSlash, IoLayers, IoRocket } from "react-icons/io5";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
            <RevealOnScroll direction="down" delay={0} duration={600}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-700 dark:text-green-300 text-sm font-medium">Available for work</span>
              </div>
            </RevealOnScroll>

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

          {/* Right - Photo Section - 3D CARD STACK STYLE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <RevealOnScroll direction="right" delay={200} duration={800}>
              <div 
                className="relative perspective-1000"
                style={{
                  transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                  transition: "transform 0.1s ease-out"
                }}
              >
                {/* Stacked Cards Behind */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl transform rotate-6 translate-x-4 translate-y-4 opacity-20"
                  style={{ transform: `rotate(12deg) translateX(${20 + mousePosition.x * 0.3}px) translateY(${20 + mousePosition.y * 0.3}px)` }}
                ></div>
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl transform rotate-3 translate-x-2 translate-y-2 opacity-40"
                  style={{ transform: `rotate(6deg) translateX(${10 + mousePosition.x * 0.2}px) translateY(${10 + mousePosition.y * 0.2}px)` }}
                ></div>

                {/* Main Photo Card */}
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Photo */}
                  <div className="relative h-3/4 overflow-hidden">
                    <img
                      src={photo}
                      alt="Kyaw Hla"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent"></div>
                    
                    {/* Status Badge on Photo */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Online</span>
                    </div>
                  </div>

                  {/* Card Info Section */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white dark:bg-gray-900">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Kyaw Hla</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Full Stack Developer</p>
                    
                    {/* Mini Stats */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <IoCodeSlash className="size-4 text-blue-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">6 Projects</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <IoLayers className="size-4 text-cyan-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">15+ Skills</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <RevealOnScroll direction="scale" delay={500} duration={500}>
                  <div 
                    className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30"
                    style={{ transform: `translateX(${mousePosition.x * -0.5}px) translateY(${mousePosition.y * -0.5}px)` }}
                  >
                    <IoRocket className="size-8 text-white" />
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="left" delay={600} duration={500}>
                  <div 
                    className="absolute -bottom-4 -left-8 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                    style={{ transform: `translateX(${mousePosition.x * -0.3}px) translateY(${mousePosition.y * -0.3}px)` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Available</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">For new projects</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="up" delay={700} duration={500}>
                  <div 
                    className="absolute -right-6 top-1/3 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-xl border border-gray-200 dark:border-gray-700"
                    style={{ transform: `translateX(${mousePosition.x * 0.4}px) translateY(${mousePosition.y * 0.4}px)` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {["⭐", "⭐", "⭐", "⭐", "⭐"].map((star, i) => (
                          <span key={i} className="text-sm">{star}</span>
                        ))}
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">5.0</span>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Decorative Lines */}
                <div className="absolute -z-10 top-1/2 -left-20 w-16 h-px bg-gradient-to-r from-transparent to-blue-500/50"></div>
                <div className="absolute -z-10 top-1/3 -right-20 w-16 h-px bg-gradient-to-l from-transparent to-cyan-500/50"></div>
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
    </section>
  );
};
