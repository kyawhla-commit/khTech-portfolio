import { RevealOnScroll } from "../RevealOnScroll";
import { IoSchool, IoStar, IoLogoFacebook } from "react-icons/io5";
import { useState } from "react";

export const Testimonials = () => {
  const [expandedId, setExpandedId] = useState(null);
  const testimonials = [
    {
      id: 1,
      name: "Ei Maung",
      role: "Programming Instructor",
      organization: "Educational Institution",
      shortMessage: "\"ကြိုးစားရင် ဖြစ်တယ်\" ဆိုတာ သက်သေပြနေလို့ပါ။ ဒီတစ်ယောက်က လေးငါးကြိမ် ပြန်တက်သွားတယ်။ တိုးတက်မှုက အကြိမ်တိုင်းမှာ မြင်ရတယ်။ အရည်အချင်းထက် မရရအောင် လုပ်မယ်ဆိုတဲ့ Attitude က ပိုတောင် အဖိုးတန်ပါသေးတယ်။",
      fullMessage: "Message တွေ သိပ်မ Share ချင်ပေမယ့် ဒီတစ်ယောက်က ထူးခြားလို့ Share ပါတယ်။ \"ကြိုးစားရင် ဖြစ်တယ်\" ဆိုတာ သက်သေပြနေလို့ပါ။\n\nအစပိုင်း တော်တော်မရတဲ့ထဲမှာ ပါပါတယ်။ ရှေ့မှာ ကြိုရှိထားရမယ့် အခြေခံတွေ မပြည့်စုံခဲ့လို့ ဖြစ်ပါလိမ့်မယ်။\n\nဒီတစ်ယောက်က လေးငါးကြိမ် ပြန်တက်သွားတယ်။ တိုးတက်မှုက အကြိမ်တိုင်းမှာ မြင်ရတယ်။ ဘာကြောင့်လဲဆိုတော့ ကိုယ်ပြောတဲ့အတိုင်း လုပ်သင့်တဲ့အခြေခံတွေ သင်တန်းချိန်ပြင်ပမှာ ဆက်တိုက် လုပ်နေလို့ပါ။\n\nသင်ခန်းစာပြီးသွားရင် Typing ပြန်ကျင့်နေတာမျိုးထိ ကြိုးကြိုးစားစား မရရအောင်လုပ်မယ်ဆိုတဲ့ သဘောကို မြင်နေရလို့ ဒီတစ်ယောက်တော့ ရသွားတော့မယ်လို့ ကိုယ်တိုင် အမြင်ပြောင်းလိုက်ရတာပါ။\n\nအရည်အချင်းထက် အဲ့ဒီလို မရရအောင် လုပ်မယ်ဆိုတဲ့ Attitude က ပိုတောင် အဖိုးတန်ပါသေးတယ်။ လပိုင်းအတွင်း Beginner အဆင့်ကနေ အလုပ်တန်းဝင်အဆင့်ထိ ရောက်သွားတာ ပိုအရေးကြီးပါတယ်။",
      highlights: [
        "Retook course 4-5 times showing dedication",
        "Practiced fundamentals outside class hours",
        "Attitude valued more than just skills",
        "Progressed from Beginner to Job-ready in 1 Year"
      ],
      avatar: "EM",
      color: "blue",
      date: "January 2025",
      fbLink: "https://www.facebook.com/share/p/1BUMVBrzGD/"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll direction="up" duration={600}>
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              What People Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recommendations and feedback from teachers and mentors
            </p>
          </div>
        </RevealOnScroll>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedId === testimonial.id;
            
            return (
              <RevealOnScroll 
                key={testimonial.id} 
                direction="scale" 
                delay={index * 100} 
                duration={600}
              >
                <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all hover:shadow-2xl">
                  {/* Quote Icon */}
                  <RevealOnScroll direction="scale" delay={200} duration={500}>
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-blue-500/10 dark:text-blue-400/10">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </RevealOnScroll>

                  {/* Author Info - Moved to top */}
                  <RevealOnScroll direction="left" delay={100} duration={500}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    {/* Avatar */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg ring-4 ring-blue-100 dark:ring-blue-900/30">
                      {testimonial.avatar}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <IoSchool className="w-4 h-4" />
                        <span>{testimonial.role}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {testimonial.date}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="hidden sm:flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <IoStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  </RevealOnScroll>

                  {/* Stars - Mobile */}
                  <RevealOnScroll direction="fade" delay={150} duration={400}>
                    <div className="flex gap-1 mb-4 sm:hidden">
                      {[...Array(5)].map((_, i) => (
                        <IoStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </RevealOnScroll>

                  {/* Key Highlights */}
                  <RevealOnScroll direction="up" delay={200} duration={500}>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-5 mb-5 sm:mb-6 border border-blue-100 dark:border-blue-800/50">
                    <h5 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Highlights
                    </h5>
                    <ul className="space-y-2">
                      {testimonial.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </RevealOnScroll>

                  {/* Message */}
                  <RevealOnScroll direction="up" delay={300} duration={500}>
                    <div className="relative">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed relative z-10 whitespace-pre-line">
                      {isExpanded ? testimonial.fullMessage : testimonial.shortMessage}
                    </p>
                    
                    {/* Read More/Less Button */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : testimonial.id)}
                      className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 group/btn"
                    >
                      {isExpanded ? (
                        <>
                          Show less
                          <svg className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Read full recommendation
                          <svg className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                  </RevealOnScroll>

                  {/* Facebook Link */}
                  {testimonial.fbLink && (
                    <RevealOnScroll direction="up" delay={400} duration={500}>
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href={testimonial.fbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
                      >
                        <IoLogoFacebook className="w-5 h-5" />
                        View original post on Facebook
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    </RevealOnScroll>
                  )}

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full pointer-events-none"></div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Call to Action */}
        <RevealOnScroll direction="up" delay={200} duration={600}>
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              Interested in working together?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
