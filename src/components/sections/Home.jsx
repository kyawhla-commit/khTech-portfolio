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
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="text-left">
                <p className="text-blue-400 font-mono text-lg mb-4">Hello, I'm</p>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </span>
                </h1>
                
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mb-8 rounded-full"></div>
                
                <p className="text-gray-300 text-xl lg:text-2xl mb-8 leading-relaxed">
                  I create <span className="text-blue-400 font-semibold">responsive</span>, 
                  <span className="text-cyan-400 font-semibold"> user-friendly</span> web applications 
                  using modern technologies. Passionate about clean code and intuitive user experiences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href="#projects"
                    className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform flex items-center justify-center"
                  >
                    <span>View Projects</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="group border-2 border-blue-500/50 text-blue-400 py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 transform flex items-center justify-center"
                  >
                    <span>Contact Me</span>
                    <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-6 mt-12">
                  {[
                    { name: "GitHub", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
                    { name: "LinkedIn", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" },
                    { name: "Twitter", icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 rounded-lg hover:bg-white/5"
                      title={social.name}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
                  
                  {/* Photo Frame */}
                  <div className="relative w-full h-full rounded-full border-4 border-blue-500/30 overflow-hidden bg-gray-800 shadow-2xl">
                    {/* Replace the div below with your actual photo */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="text-sm">Your Photo</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gray-900/90 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-4 py-2 shadow-2xl">
                    <div className="text-center">
                      <div className="text-blue-400 font-bold text-lg">2+</div>
                      <div className="text-gray-300 text-xs">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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