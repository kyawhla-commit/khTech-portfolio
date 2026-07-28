import { useEffect, useState } from "react";

const loadingPhrases = ["Initializing...", "Loading assets...", "Almost ready..."];

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);
  
  const fullText = "Khun Kyaw Hla";

  // Typing effect for name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Phase text change
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % loadingPhrases.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gray-950 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <div className="mb-12">
          <div className="relative">
            {/* Rotating Ring */}
            <div className="absolute -inset-8 border-2 border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: "3s" }}></div>
            <div className="absolute -inset-12 border border-cyan-500/10 rounded-full animate-spin" style={{ animationDuration: "5s", animationDirection: "reverse" }}></div>
            
            {/* Logo Box */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <span className="text-white font-bold text-4xl">K</span>
            </div>
          </div>
        </div>

        {/* Name with Typing Effect */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            {text}
            <span className="text-blue-400 animate-pulse">|</span>
          </h1>
          <p className="text-gray-500 text-sm font-mono">{loadingPhrases[phase]}</p>
        </div>

        {/* Progress Section */}
        <div className="w-64 sm:w-80">
          {/* Progress Bar */}
          <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden mb-3">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
            {/* Glow Effect */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm opacity-50 transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress Text */}
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-600 font-mono">Loading</span>
            <span className="text-blue-400 font-mono font-bold">{progress}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p className="text-gray-600 text-xs font-mono tracking-wider">
          PORTFOLIO • 2026
        </p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 rounded-tl-xl"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-500/30 rounded-tr-xl"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-500/30 rounded-bl-xl"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-500/30 rounded-br-xl"></div>
    </div>
  );
};
