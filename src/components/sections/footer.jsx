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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Kyaw<span className="text-blue-500">Hla</span>
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer passionate about creating digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-2 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="size-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              bwarpay.bp8@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Kyaw Hla. Made with
              <IoHeart className="text-red-500 size-4" />
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-sm transition-colors group"
            >
              Back to top
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-500 dark:group-hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all">
                <IoArrowUp className="size-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
