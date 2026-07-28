import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { IoLogoGithub, IoCall, IoMail, IoLocation, IoSend, IoPaperPlane } from "react-icons/io5";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      e.target.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: IoMail, label: "Email", value: "bwarpay.bp8@gmail.com", href: "mailto:bwarpay.bp8@gmail.com" },
    { icon: IoCall, label: "Phone", value: "+95 9 677 066 891", href: "tel:+959677066891" },
    { icon: IoLocation, label: "Location", value: "Yangon, Myanmar", href: null },
  ];

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="down" duration={600}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Let's Work Together
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <RevealOnScroll key={index} direction="left" delay={index * 100} duration={600}>
                  <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm sm:text-base text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-cyan-400 transition-colors truncate block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium truncate">{item.value}</p>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Social Links */}
            <RevealOnScroll direction="left" delay={300} duration={600}>
              <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Connect with me</h3>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://github.com/kyawhla-commit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors"
                  >
                    <IoLogoGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                  <a
                    href="mailto:bwarpay.bp8@gmail.com"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors"
                  >
                    <IoMail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Quick Response */}
            <RevealOnScroll direction="fade" delay={400} duration={600}>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl border border-green-200 dark:border-green-800">
                <div className="relative flex-shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-green-700 dark:text-green-300 text-xs sm:text-sm">
                  Usually responds within 24 hours
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Side - Contact Form */}
          <RevealOnScroll direction="right" delay={200} duration={700} className="lg:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 lg:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <IoPaperPlane className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Send a Message</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Fill out the form below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg sm:rounded-xl text-green-700 dark:text-green-300 text-xs sm:text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg sm:rounded-xl text-red-700 dark:text-red-300 text-xs sm:text-sm">
                    ✕ Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 sm:py-3.5 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <IoSend className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
