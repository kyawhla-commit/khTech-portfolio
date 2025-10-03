import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Welcome to my portfolio/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        
        setTimeout(() => {
          onComplete(interval);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col items-center justify-center px-4">
      {/* Main Content Container */}
      <div className="w-full max-w-md flex flex-col items-center justify-center space-y-6">
        
        {/* Animated Text */}
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white mb-2 min-h-[48px] sm:min-h-[56px] flex items-center justify-center">
            {text}
            <span className="animate-blink ml-1 text-blue-400">|</span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base mt-2 font-light">
            Loading amazing content...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm space-y-2">
          <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded-full relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 shadow-[0_0_20px_#3b82f6] animate-loading-bar rounded-full"></div>
          </div>
          
          {/* Percentage Indicator */}
          <div className="flex justify-between text-xs text-gray-500">
            <span>0%</span>
            <span className="text-blue-400 font-medium">Loading...</span>
            <span>100%</span>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-6 sm:bottom-8">
        <p className="text-gray-500 text-xs sm:text-sm text-center">
          Crafted with ❤️
        </p>
      </div>
    </div>
  );
};