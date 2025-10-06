import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect, useRef } from "react";
import photo from "../../assets/photo.jpg";

export const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [screenSize, setScreenSize] = useState('md');
  const sectionRef = useRef(null);

  const texts = ["khunKyawHla", "Full Stack Developer", "Digital Craftsman"];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 475) setScreenSize('xs');
      else if (width < 640) setScreenSize('sm');
      else if (width < 768) setScreenSize('md');
      else if (width < 1024) setScreenSize('lg');
      else setScreenSize('xl');
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
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

  // Responsive values based on screen size
  const getResponsiveValue = (values) => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const index = sizes.indexOf(screenSize);
    return values[Math.min(index, values.length - 1)];
  };

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
        <div className="absolute top-1/4 left-1/4 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-purple-600/10 rounded-full blur-2xl xs:blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-cyan-600/10 rounded-full blur-2xl xs:blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-3 xs:opacity-4 sm:opacity-5 md:opacity-7 lg:opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
              backgroundSize: getResponsiveValue(['20px 20px', '25px 25px', '30px 30px', '40px 40px', '50px 50px']),
            }}
          ></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(getResponsiveValue([6, 8, 10, 12, 15]))].map((_, i) => (
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
        <div className="text-center z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
          {/* Responsive Layout */}
          <div className={`flex flex-col ${getResponsiveValue(['', '', '', 'lg:grid lg:grid-cols-2', 'lg:grid lg:grid-cols-2'])} gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center`}>
            
            {/* Photo Section */}
            <div className={`order-1 ${getResponsiveValue(['', '', '', 'lg:order-2', 'lg:order-2'])} flex justify-center w-full`}>
              <div className="relative">
                {/* Main Photo Container - Fully Responsive Sizing */}
                <div className={`relative ${
                  getResponsiveValue([
                    'w-48 h-48',    // xs
                    'w-56 h-56',    // sm
                    'w-64 h-64',    // md
                    'w-72 h-72',    // lg
                    'w-80 h-80'     // xl
                  ])
                } ${
                  getResponsiveValue([
                    '',             // xs
                    'sm:w-64 sm:h-64', // sm
                    'md:w-72 md:h-72', // md
                    'lg:w-80 lg:h-80', // lg
                    'xl:w-96 xl:h-96'  // xl
                  ])
                }`}>
                  
                  {/* Animated Gradient Border */}
                  <div className={`absolute ${
                    getResponsiveValue([
                      '-inset-2',      // xs
                      '-inset-3',      // sm
                      '-inset-4',      // md
                      '-inset-5',      // lg
                      '-inset-6'       // xl
                    ])
                  } rounded-xl xs:rounded-2xl sm:rounded-3xl lg:rounded-4xl`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-xl xs:rounded-2xl sm:rounded-3xl lg:rounded-4xl animate-gradient-x"></div>
                    <div className={`absolute ${
                      getResponsiveValue([
                        'inset-[1px]',  // xs
                        'inset-[2px]',  // sm
                        'inset-[2px]',  // md
                        'inset-[3px]',  // lg
                        'inset-[3px]'   // xl
                      ])
                    } bg-gray-900 rounded-xl xs:rounded-2xl sm:rounded-3xl lg:rounded-4xl`}></div>
                  </div>

                  {/* Photo Content */}
                  <div className="relative w-full h-full rounded-xl xs:rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden bg-gray-900 shadow-xl xs:shadow-2xl">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 xs:opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px] xs:bg-[length:25px_25px] sm:bg-[length:30px_30px]"></div>
                    </div>

                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-cyan-600/20 animate-pulse-slow"></div>

                    {/* Main Photo */}
                    <div className={`relative w-full h-full flex items-center justify-center ${
                      getResponsiveValue([
                        'p-2',    // xs
                        'p-3',    // sm
                        'p-3',    // md
                        'p-4',    // lg
                        'p-6'     // xl
                      ])
                    }`}>
                      <div className="relative group w-full h-full">
                        
                        {/* Photo Frame */}
                        <div className="relative w-full h-full">
                          
                          {/* Outer Glow Effect */}
                          <div className={`absolute ${
                            getResponsiveValue([
                              '-inset-2',  // xs
                              '-inset-3',  // sm
                              '-inset-4',  // md
                              '-inset-5',  // lg
                              '-inset-6'   // xl
                            ])
                          } bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-purple-400/20 rounded-full blur-xl xs:blur-2xl sm:blur-3xl group-hover:blur-4xl transition-all duration-700`}></div>

                          {/* Main Photo Container */}
                          <div className="relative w-full h-full rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 xs:border-3 sm:border-4 border-white/20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-xl xs:shadow-2xl overflow-hidden group-hover:border-white/30 transition-all duration-500 group-hover:shadow-cyan-500/25">
                            <img
                              src={photo}
                              alt="Professional Developer"
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Shine Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>

                            {/* Inner Glow */}
                            <div className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 group-hover:border-white/25 transition-all duration-500"></div>

                            {/* Gradient Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-gray-900/20"></div>
                          </div>

                          {/* Status Indicator */}
                          <div className={`absolute ${
                            getResponsiveValue([
                              'bottom-2 right-2 w-6 h-6',      // xs
                              'bottom-3 right-3 w-7 h-7',      // sm
                              'bottom-4 right-4 w-8 h-8',      // md
                              'bottom-5 right-5 w-9 h-9',      // lg
                              'bottom-6 right-6 w-10 h-10'     // xl
                            ])
                          } bg-green-400 rounded-full border-2 xs:border-3 sm:border-4 border-gray-900 shadow-lg xs:shadow-xl sm:shadow-2xl z-20`}>
                            <div className={`absolute ${
                              getResponsiveValue([
                                'inset-1',    // xs
                                'inset-1.5',  // sm
                                'inset-1.5',  // md
                                'inset-2',    // lg
                                'inset-2'     // xl
                              ])
                            } bg-green-300 rounded-full animate-pulse`}></div>
                            <div className="absolute inset-0 rounded-full border border-white/50"></div>
                          </div>

                          {/* Decorative Corner Elements */}
                          <div className={`absolute ${
                            getResponsiveValue([
                              'top-1 left-1 w-3 h-3',      // xs
                              'top-2 left-2 w-4 h-4',      // sm
                              'top-3 left-3 w-4 h-4',      // md
                              'top-3 left-3 w-5 h-5',      // lg
                              'top-4 left-4 w-6 h-6'       // xl
                            ])
                          } border-t border-l border-cyan-400/40 group-hover:border-cyan-400/60 transition-all duration-500`}></div>
                          
                          <div className={`absolute ${
                            getResponsiveValue([
                              'top-1 right-1 w-3 h-3',     // xs
                              'top-2 right-2 w-4 h-4',     // sm
                              'top-3 right-3 w-4 h-4',     // md
                              'top-3 right-3 w-5 h-5',     // lg
                              'top-4 right-4 w-6 h-6'      // xl
                            ])
                          } border-t border-r border-blue-400/40 group-hover:border-blue-400/60 transition-all duration-500`}></div>
                          
                          <div className={`absolute ${
                            getResponsiveValue([
                              'bottom-1 left-1 w-3 h-3',   // xs
                              'bottom-2 left-2 w-4 h-4',   // sm
                              'bottom-3 left-3 w-4 h-4',   // md
                              'bottom-3 left-3 w-5 h-5',   // lg
                              'bottom-4 left-4 w-6 h-6'    // xl
                            ])
                          } border-b border-l border-purple-400/40 group-hover:border-purple-400/60 transition-all duration-500`}></div>
                          
                          <div className={`absolute ${
                            getResponsiveValue([
                              'bottom-1 right-1 w-3 h-3',  // xs
                              'bottom-2 right-2 w-4 h-4',  // sm
                              'bottom-3 right-3 w-4 h-4',  // md
                              'bottom-3 right-3 w-5 h-5',  // lg
                              'bottom-4 right-4 w-6 h-6'   // xl
                            ])
                          } border-b border-r border-green-400/40 group-hover:border-green-400/60 transition-all duration-500`}></div>
                        </div>

                        {/* Floating Tech Elements */}
                        <div className={`absolute ${
                          getResponsiveValue([
                            '-top-1 -left-1 w-8 h-8',     // xs
                            '-top-2 -left-2 w-9 h-9',     // sm
                            '-top-2 -left-2 w-10 h-10',   // md
                            '-top-3 -left-3 w-12 h-12',   // lg
                            '-top-4 -left-4 w-14 h-14'    // xl
                          ])
                        } bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30 animate-float-slow flex items-center justify-center z-10`}>
                          <div className={`${
                            getResponsiveValue([
                              'w-1.5 h-1.5',  // xs
                              'w-2 h-2',      // sm
                              'w-2 h-2',      // md
                              'w-2.5 h-2.5',  // lg
                              'w-3 h-3'       // xl
                            ])
                          } bg-blue-400 rounded-full`}></div>
                        </div>
                        
                        <div className={`absolute ${
                          getResponsiveValue([
                            '-bottom-2 -right-2 w-7 h-7',   // xs
                            '-bottom-3 -right-3 w-8 h-8',   // sm
                            '-bottom-3 -right-3 w-9 h-9',   // md
                            '-bottom-4 -right-4 w-10 h-10', // lg
                            '-bottom-5 -right-5 w-12 h-12'  // xl
                          ])
                        } bg-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-400/30 animate-float-medium flex items-center justify-center z-10`}>
                          <div className={`${
                            getResponsiveValue([
                              'w-1 h-1',      // xs
                              'w-1.5 h-1.5',  // sm
                              'w-1.5 h-1.5',  // md
                              'w-2 h-2',      // lg
                              'w-2.5 h-2.5'   // xl
                            ])
                          } bg-cyan-400 rounded-full`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className={`absolute ${
                      getResponsiveValue([
                        'top-2 left-2 w-2 h-2',    // xs
                        'top-3 left-3 w-2.5 h-2.5',// sm
                        'top-4 left-4 w-3 h-3',    // md
                        'top-5 left-5 w-3.5 h-3.5',// lg
                        'top-6 left-6 w-4 h-4'     // xl
                      ])
                    } bg-cyan-400 rounded-full animate-ping z-10`}></div>
                    
                    <div className={`absolute ${
                      getResponsiveValue([
                        'bottom-2 right-2 w-1.5 h-1.5',  // xs
                        'bottom-3 right-3 w-2 h-2',      // sm
                        'bottom-4 right-4 w-2 h-2',      // md
                        'bottom-5 right-5 w-2.5 h-2.5',  // lg
                        'bottom-6 right-6 w-3 h-3'       // xl
                      ])
                    } bg-blue-400 rounded-full animate-bounce z-10`}></div>
                  </div>

                  {/* Code Snippet Card */}
                  <div className={`absolute ${
                    getResponsiveValue([
                      '-bottom-3 -left-3',     // xs
                      '-bottom-4 -left-4',     // sm
                      '-bottom-4 -left-4',     // md
                      '-bottom-5 -left-5',     // lg
                      '-bottom-6 -left-6'      // xl
                    ])
                  } bg-gray-900/95 backdrop-blur-md xs:backdrop-blur-lg sm:backdrop-blur-xl border border-gray-700/60 rounded-lg xs:rounded-xl sm:rounded-2xl ${
                    getResponsiveValue([
                      'p-2',      // xs
                      'p-2.5',    // sm
                      'p-3',      // md
                      'p-3.5',    // lg
                      'p-4'       // xl
                    ])
                  } shadow-lg xs:shadow-xl sm:shadow-2xl transform scale-85 xs:scale-90 sm:scale-95 lg:scale-100 hover:scale-100 lg:hover:scale-105 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10 z-20 max-w-[140px] xs:max-w-[160px] sm:max-w-none`}>
                    <div className={`flex items-center gap-1 xs:gap-2 sm:gap-3 ${
                      getResponsiveValue([
                        'mb-1',   // xs
                        'mb-1.5', // sm
                        'mb-2',   // md
                        'mb-2.5', // lg
                        'mb-3'    // xl
                      ])
                    }`}>
                      <div className="flex space-x-0.5 xs:space-x-1 sm:space-x-1.5">
                        <div className={`${
                          getResponsiveValue([
                            'w-1.5 h-1.5',  // xs
                            'w-2 h-2',      // sm
                            'w-2 h-2',      // md
                            'w-2.5 h-2.5',  // lg
                            'w-3 h-3'       // xl
                          ])
                        } bg-red-400 rounded-full`}></div>
                        <div className={`${
                          getResponsiveValue([
                            'w-1.5 h-1.5',  // xs
                            'w-2 h-2',      // sm
                            'w-2 h-2',      // md
                            'w-2.5 h-2.5',  // lg
                            'w-3 h-3'       // xl
                          ])
                        } bg-yellow-400 rounded-full`}></div>
                        <div className={`${
                          getResponsiveValue([
                            'w-1.5 h-1.5',  // xs
                            'w-2 h-2',      // sm
                            'w-2 h-2',      // md
                            'w-2.5 h-2.5',  // lg
                            'w-3 h-3'       // xl
                          ])
                        } bg-green-400 rounded-full`}></div>
                      </div>
                      <span className={`${
                        getResponsiveValue([
                          'text-[10px]',  // xs
                          'text-xs',      // sm
                          'text-xs',      // md
                          'text-xs',      // lg
                          'text-sm'       // xl
                        ])
                      } text-gray-200 font-mono font-semibold`}>
                        profile.js
                      </span>
                    </div>
                    <div className={`${
                      getResponsiveValue([
                        'text-[10px]',  // xs
                        'text-xs',      // sm
                        'text-xs',      // md
                        'text-xs',      // lg
                        'text-sm'       // xl
                      ])
                    } font-mono space-y-0.5 xs:space-y-1`}>
                      <div className="text-purple-400">const developer = &#123;</div>
                      <div className="text-cyan-400 ml-2 xs:ml-3 sm:ml-4">
                        passion: <span className="text-green-400">"creating impact"</span>,
                      </div>
                      <div className="text-cyan-400 ml-2 xs:ml-3 sm:ml-4">
                        focus: <span className="text-green-400">"excellence"</span>,
                      </div>
                      <div className="text-cyan-400 ml-2 xs:ml-3 sm:ml-4">
                        status: <span className="text-yellow-400">"available"</span>
                      </div>
                      <div className="text-purple-400">&#125;;</div>
                    </div>
                  </div>

                  {/* Availability Card */}
                  <div className={`absolute ${
                    getResponsiveValue([
                      '-top-3 -right-3',    // xs
                      '-top-4 -right-4',    // sm
                      '-top-4 -right-4',    // md
                      '-top-5 -right-5',    // lg
                      '-top-6 -right-6'     // xl
                    ])
                  } bg-gray-800/80 backdrop-blur-sm xs:backdrop-blur-md sm:backdrop-blur-lg border border-gray-600/50 rounded-lg xs:rounded-xl sm:rounded-2xl ${
                    getResponsiveValue([
                      'p-1.5',  // xs
                      'p-2',    // sm
                      'p-2.5',  // md
                      'p-3',    // lg
                      'p-3.5'   // xl
                    ])
                  } shadow-md xs:shadow-lg sm:shadow-xl transform -rotate-2 xs:-rotate-3 sm:-rotate-6 hover:rotate-0 transition-all duration-500 z-20`}>
                    <div className={`${
                      getResponsiveValue([
                        'text-[10px]',  // xs
                        'text-xs',      // sm
                        'text-xs',      // md
                        'text-xs',      // lg
                        'text-sm'       // xl
                      ])
                    } font-mono text-gray-300`}>
                      <div className="text-green-400 flex items-center gap-0.5 xs:gap-1">
                        <div className={`${
                          getResponsiveValue([
                            'w-1 h-1',      // xs
                            'w-1.5 h-1.5',  // sm
                            'w-1.5 h-1.5',  // md
                            'w-2 h-2',      // lg
                            'w-2 h-2'       // xl
                          ])
                        } bg-green-400 rounded-full animate-pulse`}></div>
                        Available
                      </div>
                      <div className="text-gray-400 mt-0.5 xs:mt-1 text-[9px] xs:text-xs">Open for work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className={`order-2 ${
              getResponsiveValue([
                '',             // xs
                '',             // sm
                '',             // md
                'lg:order-1',   // lg
                'lg:order-1'    // xl
              ])
            } space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 w-full`}>
              
              {/* Professional Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3">
                  <div className="flex space-x-0.5 xs:space-x-1">
                    <div className={`${
                      getResponsiveValue([
                        'w-1 h-1',      // xs
                        'w-1.5 h-1.5',  // sm
                        'w-1.5 h-1.5',  // md
                        'w-2 h-2',      // lg
                        'w-2 h-2'       // xl
                      ])
                    } bg-green-400 rounded-full animate-pulse`}></div>
                    <div className={`${
                      getResponsiveValue([
                        'w-1 h-1',      // xs
                        'w-1.5 h-1.5',  // sm
                        'w-1.5 h-1.5',  // md
                        'w-2 h-2',      // lg
                        'w-2 h-2'       // xl
                      ])
                    } bg-yellow-400 rounded-full animate-pulse`} style={{ animationDelay: "0.2s" }}></div>
                    <div className={`${
                      getResponsiveValue([
                        'w-1 h-1',      // xs
                        'w-1.5 h-1.5',  // sm
                        'w-1.5 h-1.5',  // md
                        'w-2 h-2',      // lg
                        'w-2 h-2'       // xl
                      ])
                    } bg-red-400 rounded-full animate-pulse`} style={{ animationDelay: "0.4s" }}></div>
                  </div>
                  <span className={`${
                    getResponsiveValue([
                      'text-[10px]',  // xs
                      'text-xs',      // sm
                      'text-xs',      // md
                      'text-sm',      // lg
                      'text-sm'       // xl
                    ])
                  } text-gray-300 font-mono whitespace-nowrap`}>
                    Open for opportunities
                  </span>
                </div>
              </div>

              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                {/* Heading */}
                <h1 className={`${
                  getResponsiveValue([
                    'text-2xl',   // xs
                    'text-3xl',   // sm
                    'text-4xl',   // md
                    'text-5xl',   // lg
                    'text-6xl'    // xl
                  ])
                } font-bold text-white leading-tight xs:leading-tight sm:leading-tight`}>
                  <span className={`block ${
                    getResponsiveValue([
                      'text-xs',     // xs
                      'text-sm',     // sm
                      'text-sm',     // md
                      'text-base',   // lg
                      'text-lg'      // xl
                    ])
                  } font-light text-gray-400 ${
                    getResponsiveValue([
                      'mb-1',   // xs
                      'mb-1.5', // sm
                      'mb-2',   // md
                      'mb-3',   // lg
                      'mb-4'    // xl
                    ])
                  } tracking-wide sm:tracking-wider lg:tracking-widest`}>
                    HELLO, I'M
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent break-words">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </span>
                </h1>

                {/* Description */}
                <p className={`${
                  getResponsiveValue([
                    'text-sm',     // xs
                    'text-base',   // sm
                    'text-lg',     // md
                    'text-xl',     // lg
                    'text-xl'      // xl
                  ])
                } text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-3 xs:px-4 sm:px-0`}>
                  {getResponsiveValue([
                    // xs - Most compact
                    <>Creating <span className="text-cyan-400 font-semibold">digital experiences</span> through code & design.</>,
                    // sm - Slightly more detail
                    <>Creating <span className="text-cyan-400 font-semibold">digital experiences</span> that blend design with engineering excellence.</>,
                    // md - Balanced
                    <>Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend design with robust engineering.</>,
                    // lg - Full version
                    <>Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend innovative design with robust engineering.</>,
                    // xl - Complete version
                    <>Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend innovative design with robust engineering. I transform complex problems into <span className="text-blue-400 font-semibold">elegant solutions</span>.</>
                  ])}
                </p>
              </div>

              {/* Tech Stack */}
              <div className={`py-3 xs:py-4 sm:py-5 md:py-6 overflow-hidden ${
                getResponsiveValue([
                  'max-w-xs mx-auto',  // xs
                  'max-w-sm mx-auto',  // sm
                  'max-w-md mx-auto',  // md
                  '',                  // lg
                  ''                   // xl
                ])
              }`}>
                <div className={`flex space-x-3 xs:space-x-4 sm:space-x-5 md:space-x-6 ${
                  getResponsiveValue([
                    'animate-marquee-fast',  // xs
                    'animate-marquee-fast',  // sm
                    'animate-marquee',       // md
                    'animate-marquee',       // lg
                    'animate-marquee'        // xl
                  ])
                }`}>
                  {[
                    "React", "TypeScript", "Laravel", "ReactNative", 
                    "Node.js", "MySQL", "Docker", "Python", "AWS"
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2 shrink-0"
                    >
                      <div className={`${
                        getResponsiveValue([
                          'w-1 h-1',      // xs
                          'w-1.5 h-1.5',  // sm
                          'w-1.5 h-1.5',  // md
                          'w-2 h-2',      // lg
                          'w-2 h-2'       // xl
                        ])
                      } bg-cyan-400 rounded-full`}></div>
                      <span className={`${
                        getResponsiveValue([
                          'text-[10px]',  // xs
                          'text-xs',      // sm
                          'text-xs',      // md
                          'text-sm',      // lg
                          'text-sm'       // xl
                        ])
                      } text-gray-400 font-mono whitespace-nowrap`}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex ${
                getResponsiveValue([
                  'flex-col',       // xs
                  'flex-col',       // sm
                  'flex-row',       // md
                  'flex-row',       // lg
                  'flex-row'        // xl
                ])
              } gap-2 xs:gap-3 sm:gap-4 ${
                getResponsiveValue([
                  'pt-3',   // xs
                  'pt-4',   // sm
                  'pt-5',   // md
                  'pt-6',   // lg
                  'pt-8'    // xl
                ])
              } px-3 xs:px-4 sm:px-0`}>
                <a
                  href="#projects"
                  className={`group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white ${
                    getResponsiveValue([
                      'py-2.5 px-4 text-xs',      // xs
                      'py-3 px-5 text-sm',        // sm
                      'py-3 px-6 text-base',      // md
                      'py-4 px-7 text-base',      // lg
                      'py-4 px-8 text-lg'         // xl
                    ])
                  } rounded-lg xs:rounded-xl font-semibold transition-all duration-500 hover:shadow-lg xs:hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95 overflow-hidden text-center flex-1`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3">
                    View My Work
                    <svg
                      className={`${
                        getResponsiveValue([
                          'w-3 h-3',  // xs
                          'w-4 h-4',  // sm
                          'w-4 h-4',  // md
                          'w-5 h-5',  // lg
                          'w-5 h-5'   // xl
                        ])
                      } group-hover:translate-x-1 transition-transform`}
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
                  className={`group border border-gray-600 text-gray-300 ${
                    getResponsiveValue([
                      'py-2.5 px-4 text-xs',      // xs
                      'py-3 px-5 text-sm',        // sm
                      'py-3 px-6 text-base',      // md
                      'py-4 px-7 text-base',      // lg
                      'py-4 px-8 text-lg'         // xl
                    ])
                  } rounded-lg xs:rounded-xl font-semibold transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 text-center flex-1`}
                >
                  Contact Me
                  <svg
                    className={`${
                      getResponsiveValue([
                        'w-3 h-3',  // xs
                        'w-4 h-4',  // sm
                        'w-4 h-4',  // md
                        'w-5 h-5',  // lg
                        'w-5 h-5'   // xl
                      ])
                    } group-hover:scale-110 transition-transform`}
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
      <div className={`absolute ${
        getResponsiveValue([
          'bottom-3',   // xs
          'bottom-4',   // sm
          'bottom-5',   // md
          'bottom-6',   // lg
          'bottom-8'    // xl
        ])
      } left-1/2 transform -translate-x-1/2`}>
        <div className="flex flex-col items-center space-y-1 xs:space-y-1.5 sm:space-y-2">
          <span className={`${
            getResponsiveValue([
              'text-[10px]',  // xs
              'text-xs',      // sm
              'text-xs',      // md
              'text-xs',      // lg
              'text-sm'       // xl
            ])
          } text-gray-500 font-mono tracking-widest hidden xs:block`}>
            {getResponsiveValue([
              'SCROLL',           // xs
              'SCROLL',           // sm
              'SCROLL TO EXPLORE',// md
              'SCROLL TO EXPLORE',// lg
              'SCROLL TO EXPLORE' // xl
            ])}
          </span>
          <div className={`${
            getResponsiveValue([
              'w-4 h-6',    // xs
              'w-5 h-8',    // sm
              'w-5 h-8',    // md
              'w-6 h-10',   // lg
              'w-6 h-10'    // xl
            ])
          } border border-gray-600 rounded-full flex justify-center`}>
            <div className={`w-1 ${
              getResponsiveValue([
                'h-1.5',  // xs
                'h-2',    // sm
                'h-2',    // md
                'h-3',    // lg
                'h-3'     // xl
              ])
            } bg-cyan-400 rounded-full mt-1 xs:mt-1.5 sm:mt-2 animate-scroll`}></div>
          </div>
        </div>
      </div>


    </section>
  );
};