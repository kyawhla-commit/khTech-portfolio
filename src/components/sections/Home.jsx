import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect, useRef } from "react";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const texts = ["khunKyawHla", "Full Stack Developer", "Digital Craftsman"];

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-950 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(99, 102, 241, 0.15) 0%, 
            rgba(59, 130, 246, 0.1) 25%, 
            rgba(6, 182, 212, 0.05) 50%, 
            transparent 70%)`
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Binary Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 font-mono text-sm animate-binaryRain"
            style={{
              left: `${(i * 7)}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {Array(20).fill().map((_, j) => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('')}
          </div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-sm text-gray-300 font-mono">Open for opportunities</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block text-xl md:text-2xl font-light text-gray-400 mb-4 tracking-widest">
                    HELLO, I'M
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend 
                  innovative design with robust engineering. I transform complex problems into 
                  <span className="text-blue-400 font-semibold"> elegant solutions</span>.
                </p>
              </div>

              {/* Tech Stack Marquee */}
              <div className="py-6 overflow-hidden">
                <div className="flex space-x-8 animate-marquee">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'GraphQL', 'Next.js'].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2 shrink-0">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-400 font-mono text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="#projects"
                  className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    Explore My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group border-2 border-gray-600 text-gray-300 py-4 px-8 rounded-xl font-semibold transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  Start Conversation
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '2+', label: 'Years Experience' },
                  { number: '100%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  
                  {/* Outer Glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-3xl animate-pulse-slow"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 animate-spin-slow">
                    <div className="absolute inset-1 rounded-2xl bg-gray-950"></div>
                  </div>

                  {/* Photo Content */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-700 bg-gray-900 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-cyan-600/10 flex items-center justify-center relative">
                      
                      {/* Replace this with your actual photo */}
                      <div className="text-center text-gray-500">
                        <div className="relative">
                          <svg className="w-24 h-24 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg"></div>
                        </div>
                        <p className="text-sm font-mono">Your Professional Photo</p>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>

                  {/* Code Snippet Floating Card */}
                  <div className="absolute -bottom-8 -left-8 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">code.js</span>
                    </div>
                    <div className="text-xs font-mono text-cyan-400">
                      <div>const developer = &#123;</div>
                      <div className="ml-4">passion: "coding",</div>
                      <div className="ml-4">focus: "innovation"</div>
                      <div>&#125;;</div>
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
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 font-mono tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
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
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes binaryRain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-binaryRain {
          animation: binaryRain linear infinite;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};