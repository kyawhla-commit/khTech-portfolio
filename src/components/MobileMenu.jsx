import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoClose, IoLogoGithub, IoMail } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import { downloadCV } from "../utils/downloadCV";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen, setMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const menuItems = [
    { id: "home", label: "Home", icon: "01" },
    { id: "about", label: "About", icon: "02" },
    { id: "web-cv", label: "Web CV", icon: "03", href: `${import.meta.env.BASE_URL}cv/` },
    { id: "experience", label: "Experience", icon: "04" },
    { id: "projects", label: "Projects", icon: "05" },
    { id: "certificates", label: "Certificates", icon: "06" },
    { id: "contact", label: "Contact", icon: "07" },
  ];

  const socialLinks = [
    { icon: IoLogoGithub, href: "https://github.com/kyawhla-commit/", label: "GitHub" },
    { icon: SiTelegram, href: "https://t.me/kyawhla20", label: "Telegram" },
    { icon: IoMail, href: "mailto:bwarpay.bp8@gmail.com", label: "Email" },
  ];

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
        menuOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <IoClose className="size-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href || `#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: menuOpen ? `${index * 50 + 100}ms` : "0ms" }}
              >
                <span className="text-xs font-mono text-blue-500 dark:text-cyan-400 w-6">
                  {item.icon}
                </span>
                <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.label}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          {/* Download CV */}
          <button
            onClick={() => {
              downloadCV();
              setMenuOpen(false);
            }}
            className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold mb-4 hover:shadow-lg hover:shadow-blue-500/25 transition-all ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
          >
            Download Resume
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

          {/* Theme & Social */}
          <div
            className={`flex items-center justify-between ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: menuOpen ? "450ms" : "0ms" }}
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "light" ? (
                <>
                  <FiMoon className="w-5 h-5 text-gray-700" />
                  <span className="text-sm text-gray-700">Dark</span>
                </>
              ) : (
                <>
                  <FiSun className="w-5 h-5 text-amber-500" />
                  <span className="text-sm text-gray-300">Light</span>
                </>
              )}
            </button>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors group"
                >
                  <Icon className="size-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
