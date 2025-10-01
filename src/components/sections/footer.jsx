import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { SiFacebook, SiTelegram } from 'react-icons/si';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: IoLogoGithub, href: "https://github.com/kyawhla-commit/", label: "GitHub" },
    { icon: IoLogoLinkedin, href: "https://linkedin.com/in/kyaw-hla-b690941b9" , label: "LinkedIn" },
    { icon: IoLogoTwitter, href: "#", label: "Twitter" },
    { icon: SiFacebook, href: "https://www.facebook.com/share/1BJHANh4py/", label: "Facebook" },
    { icon: SiTelegram, href: "https://t.me/kyawhla20", label: "Telegram" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            khunKyawHla
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
        
        <p className="text-center mt-8 text-gray-400 text-sm">
          &copy; {currentYear} khunKyawHla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};