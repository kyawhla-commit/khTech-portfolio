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

          {/* Right - Photo Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <RevealOnScroll direction="right" delay={200} duration={800}>
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                  
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-900">
                    <img
                      src={photo}
                      alt="Kyaw Hla"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                    <div className="absolute inset-1 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Floating Code Card */}
                <RevealOnScroll direction="left" delay={500} duration={600}>
                  <div className="absolute -bottom-8 -left-8 sm:-left-16 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 max-w-[200px]">
                    <div className="flex gap-1.5 mb-3">
                      <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span>
                      <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                      <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
                    </div>
                    <div className="font-mono text-xs space-y-1">
                      <p className="text-purple-600 dark:text-purple-400">const dev = {"{"}</p>
                      <p className="text-gray-600 dark:text-gray-400 pl-2">passion: <span className="text-green-600 dark:text-green-400">"code"</span>,</p>
                      <p className="text-gray-600 dark:text-gray-400 pl-2">status: <span className="text-amber-600 dark:text-amber-400">"ready"</span></p>
                      <p className="text-purple-600 dark:text-purple-400">{"}"}</p>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Experience Badge */}
                <RevealOnScroll direction="scale" delay={600} duration={500}>
                  <div className="absolute -top-4 -right-4 sm:-right-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl px-4 py-3 shadow-xl">
                    <div className="text-2xl font-bold">6+</div>
                    <div className="text-xs opacity-90">Projects</div>
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
    </section>
  );
};
