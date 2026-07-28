import { IoLogoGithub, IoLogoLinkedin, IoHeart, IoArrowUp } from "react-icons/io5";
import { SiFacebook, SiTelegram } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: IoLogoGithub, href: "https://github.com/kyawhla-commit/", label: "GitHub" },
    { icon: IoLogoLinkedin, href: "https://linkedin.com/in/kyaw-hla-b690941b9", label: "LinkedIn" },
    { icon: SiFacebook, href: "https://www.facebook.com/share/1BJHANh4py/", label: "Facebook" },
    { icon: SiTelegram, href: "https://t.me/kyawhla20", label: "Telegram" },
  ];

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: `${import.meta.env.BASE_URL}cv/`, label: "Web CV" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <a href="#home" className="inline-flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">K</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                Khun Kyaw<span className="text-blue-500"> Hla</span>
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Full-Stack Developer passionate about creating digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">Connect</h4>
            <div className="flex gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              bwarpay.bp8@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm flex items-center gap-1">
              © {currentYear} Khun Kyaw Hla. Made with
              <IoHeart className="text-red-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 sm:gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-xs sm:text-sm transition-colors group"
            >
              Back to top
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-500 dark:group-hover:bg-blue-500 rounded-md sm:rounded-lg flex items-center justify-center transition-all">
                <IoArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
