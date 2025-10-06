import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const texts = ["khunKyawHla", "Digital Architect", "Solution Engineer"];
  const features = [
    { icon: "🚀", title: "Fast Delivery", desc: "Quick project turnaround" },
    { icon: "💡", title: "Innovative", desc: "Cutting-edge solutions" },
    { icon: "🔧", title: "Maintainable", desc: "Clean, scalable code" },
    { icon: "📱", title: "Responsive", desc: "Perfect on all devices" }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-slate-950 overflow-hidden"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0">
        {/* Large Background Circles */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `rgba(139, 92, 246, ${0.1 + Math.random() * 0.2})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Content - Text & Features */}
            <div className="flex-1 text-center lg:text-left space-y-8 lg:space-y-12">
              {/* Main Heading */}
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300 font-medium">Available for new projects</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className="block text-xl sm:text-2xl text-slate-400 font-light mb-4">
                    Hello, I'm
                  </span>
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I create <span className="text-emerald-400 font-semibold">digital experiences</span> that 
                  combine beautiful design with powerful functionality. Let's build something amazing together.
                </p>
              </div>

              {/* Animated Features */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      activeFeature === index
                        ? 'border-emerald-400/50 bg-emerald-400/5 scale-105'
                        : 'border-slate-700 bg-slate-900/30 hover:border-slate-600'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div className="text-left">
                      <div className="text-white font-semibold text-sm">{feature.title}</div>
                      <div className="text-slate-400 text-xs">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="#projects"
                  className="group relative bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    Explore My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group border-2 border-slate-600 text-slate-300 py-4 px-8 rounded-xl font-semibold transition-all duration-500 hover:border-emerald-400 hover:bg-emerald-400/5 hover:text-white transform hover:scale-105 flex items-center justify-center gap-3"
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
                  { number: '50+', label: 'Projects' },
                  { number: '100%', label: 'Satisfaction' },
                  { number: '2+', label: 'Years Exp' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image with Creative Design */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  
                  {/* Background Elements */}
                  <div className="absolute inset-0">
                    {/* Floating Shapes */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-float-slow"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float-slow" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 -right-12 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-float-slow" style={{animationDelay: '4s'}}></div>
                  </div>

                  {/* Profile Frame */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 z-10"></div>
                    
                    {/* Profile Image Content */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      {/* Replace with your photo */}
                      <div className="text-center text-slate-500 relative z-20">
                        <div className="relative inline-block">
                          <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-lg"></div>
                        </div>
                        <p className="text-sm font-medium">Your Photo Here</p>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-padding animate-gradient-border">
                        <div className="absolute inset-1 rounded-2xl bg-slate-900"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Tech Cards */}
                  <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400 font-mono">React</span>
                    </div>
                    <div className="text-2xl font-bold text-white">⚡</div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400 font-mono">Node.js</span>
                    </div>
                    <div className="text-2xl font-bold text-white">🚀</div>
                  </div>

                  {/* Center Floating Element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 rounded-full p-3 shadow-2xl animate-bounce-slow">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
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
          <span className="text-xs text-slate-500 font-medium tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full mt-2 animate-scroll"></div>
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

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
};