import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect, useRef } from "react";
import photo from "../../assets/photo.jpg";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const texts = ["khunKyawHla", "Full Stack Developer", "Digital Craftsman"];

  // Check mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-950 overflow-hidden pt-16 lg:pt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Main Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 bg-gradient-to-b from-blue-900/20 to-transparent"></div>

        {/* Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-600/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 lg:opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Photo Section */}
            <div className="order-1 lg:order-2 flex justify-center w-full">
              <div className="relative">
                {/* Main Photo Container - Responsive Sizing */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
                  {/* Animated Gradient Border */}
                  <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-2xl sm:rounded-3xl lg:rounded-4xl animate-gradient-x"></div>
                    <div className="absolute inset-[2px] sm:inset-[3px] bg-gray-900 rounded-2xl sm:rounded-3xl lg:rounded-4xl"></div>
                  </div>

                  {/* Photo Content */}
                  <div className="relative w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden bg-gray-900 shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:30px_30px]"></div>
                    </div>

                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-cyan-600/20 animate-pulse-slow"></div>

                    {/* Main Photo */}
                    <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4 lg:p-6">
                      <div className="relative group w-full h-full">
                        {/* Photo Frame */}
                        <div className="relative w-full h-full">
                          {/* Outer Glow Effect */}
                          <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-purple-400/30 rounded-full blur-2xl sm:blur-3xl group-hover:blur-4xl transition-all duration-700"></div>

                          {/* Main Photo Container */}
                          <div className="relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl border-4 border-white/20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-2xl overflow-hidden group-hover:border-white/30 transition-all duration-500 group-hover:shadow-cyan-500/25">
                            <img
                              src={photo}
                              alt="Professional Developer"
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Shine Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>

                            {/* Inner Glow */}
                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-white/10 group-hover:border-white/25 transition-all duration-500"></div>

                            {/* Gradient Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-gray-900/20"></div>
                          </div>

                          {/* Status Indicator */}
                          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full border-4 border-gray-900 shadow-2xl z-20">
                            <div className="absolute inset-1.5 sm:inset-2 bg-green-300 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 rounded-full border border-white/50"></div>
                          </div>

                          {/* Decorative Corner Elements */}
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400/60 transition-all duration-500"></div>
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-blue-400/40 group-hover:border-blue-400/60 transition-all duration-500"></div>
                          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-purple-400/40 group-hover:border-purple-400/60 transition-all duration-500"></div>
                          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-green-400/40 group-hover:border-green-400/60 transition-all duration-500"></div>
                        </div>

                        {/* Floating Tech Elements */}
                        <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30 animate-float-slow flex items-center justify-center z-10">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-400/30 animate-float-medium flex items-center justify-center z-10">
                          <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-cyan-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full animate-ping z-10"></div>
                    <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-bounce z-10"></div>
                  </div>

                  {/* Code Snippet Card */}
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 bg-gray-900/95 backdrop-blur-xl border border-gray-700/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-2xl transform scale-90 sm:scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10 z-20 max-w-[180px] sm:max-w-none">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="flex space-x-1 sm:space-x-1.5">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-200 font-mono font-semibold">
                        profile.js
                      </span>
                    </div>
                    <div className="text-xs font-mono space-y-1">
                      <div className="text-purple-400">const developer = &#123;</div>
                      <div className="text-cyan-400 ml-3 sm:ml-4">
                        passion: <span className="text-green-400">"creating impact"</span>,
                      </div>
                      <div className="text-cyan-400 ml-3 sm:ml-4">
                        focus: <span className="text-green-400">"excellence"</span>,
                      </div>
                      <div className="text-cyan-400 ml-3 sm:ml-4">
                        status: <span className="text-yellow-400">"available"</span>
                      </div>
                      <div className="text-purple-400">&#125;;</div>
                    </div>
                  </div>

                  {/* Availability Card */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 bg-gray-800/80 backdrop-blur-lg border border-gray-600/50 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl transform -rotate-3 sm:-rotate-6 hover:rotate-0 transition-all duration-500 z-20">
                    <div className="text-xs font-mono text-gray-300">
                      <div className="text-green-400 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Available
                      </div>
                      <div className="text-gray-400 mt-0.5 sm:mt-1 text-xs">Open for work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 w-full">
              {/* Professional Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 font-mono whitespace-nowrap">
                    Open for opportunities
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block text-sm sm:text-base lg:text-lg xl:text-xl font-light text-gray-400 mb-2 sm:mb-3 lg:mb-4 tracking-wide lg:tracking-widest">
                    HELLO, I'M
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent break-words">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                  Crafting{" "}
                  <span className="text-cyan-400 font-semibold">
                    digital experiences
                  </span>{" "}
                  that blend innovative design with robust engineering. I
                  transform complex problems into{" "}
                  <span className="text-blue-400 font-semibold">
                    elegant solutions
                  </span>
                  .
                </p>
              </div>

              {/* Tech Stack */}
              <div className="py-4 lg:py-6 overflow-hidden">
                <div className="flex space-x-4 sm:space-x-6 animate-marquee">
                  {[
                    "React",
                    "TypeScript",
                    "Laravel",
                    "ReactNative",
                    "Node.js",
                    "MySQL",
                    "Docker",
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 sm:space-x-2 shrink-0"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-gray-400 font-mono whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 lg:pt-8 px-4 sm:px-0">
                <a
                  href="#projects"
                  className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95 overflow-hidden text-sm sm:text-base text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                    View My Work
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group border-2 border-gray-600 text-gray-300 py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base text-center"
                >
                  Contact Me
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
          <span className="text-xs text-gray-500 font-mono tracking-widest hidden sm:block">
            SCROLL TO EXPLORE
          </span>
          <span className="text-xs text-gray-500 font-mono tracking-widest sm:hidden">
            SCROLL
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full mt-1 sm:mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing-cursor {
          animation: blink 1s infinite;
          color: #22d3ee;
          font-weight: 300;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};