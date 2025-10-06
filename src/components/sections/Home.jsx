import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect, useRef } from "react";

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
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-950 overflow-hidden pt-16 lg:pt-0"
    >
      {/* Mobile-Optimized Background */}
      <div className="absolute inset-0">
        {/* Main Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        
        {/* Mobile-Specific Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl lg:blur-4xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl lg:blur-4xl"></div>
        
        {/* Grid Pattern - Lighter on Mobile */}
        <div className="absolute inset-0 opacity-5 lg:opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: isMobile ? '30px 30px' : '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Floating Particles - Reduced on Mobile */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Stacked Layout | Desktop: Side by Side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Photo Section - Top on Mobile */}
            <div className="order-1 lg:order-2 flex justify-center w-full">
              <div className="relative">
                {/* Main Photo Container - Smaller on Mobile */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                  
                  {/* Outer Glow - Reduced on Mobile */}
                  <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl"></div>
                  
                  {/* Photo Content */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-700 bg-gray-900 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-cyan-600/10 flex items-center justify-center relative">
                      
                      {/* Replace with your actual photo */}
                      <div className="text-center text-gray-500 p-4">
                        <div className="relative">
                          <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 lg:mb-4 opacity-40" 
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-md"></div>
                        </div>
                        <p className="text-xs sm:text-sm font-mono mt-2">Your Professional Photo</p>
                      </div>

                      {/* Floating Elements - Hidden on Mobile */}
                      <div className="hidden lg:block absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="hidden lg:block absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>

                  {/* Code Snippet - Simplified on Mobile */}
                  <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-left-6 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl transform scale-90 lg:scale-100 hover:scale-95 lg:hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-1 lg:mb-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">code.js</span>
                    </div>
                    <div className="text-xs font-mono text-cyan-400 leading-tight">
                      <div>const dev = &#123;</div>
                      <div className="ml-2 lg:ml-4">passion: true</div>
                      <div>&#125;;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Bottom on Mobile */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 w-full">
              {/* Professional Badge - Centered on Mobile */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 lg:gap-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 lg:px-6 py-2 lg:py-3">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <span className="text-xs lg:text-sm text-gray-300 font-mono">Open for opportunities</span>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {/* Heading - Adjusted for Mobile */}
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight lg:leading-tight">
                  <span className="block text-base sm:text-lg lg:text-xl xl:text-2xl font-light text-gray-400 mb-2 lg:mb-4 tracking-wide lg:tracking-widest">
                    HELLO, I'M
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent break-words">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </span>
                </h1>

                {/* Description - Shorter on Mobile */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed lg:leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {isMobile ? (
                    <>Creating <span className="text-cyan-400 font-semibold">digital experiences</span> that blend design with engineering.</>
                  ) : (
                    <>Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend innovative design with robust engineering. I transform complex problems into <span className="text-blue-400 font-semibold">elegant solutions</span>.</>
                  )}
                </p>
              </div>

              {/* Tech Stack - Horizontal Scroll on Mobile */}
              <div className="py-4 lg:py-6 overflow-hidden">
                <div className="flex space-x-4 lg:space-x-6 animate-marquee-mobile lg:animate-marquee">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-1 lg:space-x-2 shrink-0">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-xs lg:text-sm text-gray-400 font-mono whitespace-nowrap">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons - Stacked on Mobile */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 lg:pt-8">
                <a
                  href="#projects"
                  className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-xl font-semibold transition-all duration-500 hover:shadow-xl lg:hover:shadow-2xl lg:hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95 overflow-hidden text-sm lg:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-2 lg:gap-3">
                    View My Work
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group border-2 border-gray-600 text-gray-300 py-3 lg:py-4 px-6 lg:px-8 rounded-xl font-semibold transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 lg:gap-3 text-sm lg:text-base"
                >
                  Contact Me
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>

              {/* Quick Stats - Compact on Mobile */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-12">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '2+', label: 'Years Exp' },
                  { number: '100%', label: 'Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer p-2 lg:p-0">
                    <div className="text-xl lg:text-3xl font-bold text-white mb-1 lg:mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll Indicator - Smaller on Mobile */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-1 lg:space-y-2">
          <span className="text-xs text-gray-500 font-mono tracking-widest hidden lg:block">SCROLL TO EXPLORE</span>
          <span className="text-xs text-gray-500 font-mono tracking-widest lg:hidden">SCROLL</span>
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 lg:h-3 bg-cyan-400 rounded-full mt-1 lg:mt-2 animate-scroll"></div>
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
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee-mobile {
          animation: marquee-mobile 15s linear infinite;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        /* Touch-friendly hover states for mobile */
        @media (max-width: 1024px) {
          .hover-scale-mobile:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </section>
  );
};