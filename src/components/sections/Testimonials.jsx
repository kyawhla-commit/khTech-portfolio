import { RevealOnScroll } from "../RevealOnScroll";
import { IoSchool, IoStar, IoLogoFacebook } from "react-icons/io5";
import { useState } from "react";

export const Testimonials = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [styleVariant, setStyleVariant] = useState("modern"); // modern, minimal, card, gradient

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
                direction="up" 
                delay={index * 100} 
                duration={600}
              >
                {/* Clean Professional Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  
                  {/* Header Section */}
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                    {/* Avatar */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-md flex-shrink-0">
                      {testimonial.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {testimonial.role}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <IoStar key={i} className="w-4 h-4 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Points */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Highlights
                    </h5>
                    <ul className="space-y-2">
                      {testimonial.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial Text */}
                  <div className="mb-6">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {isExpanded ? testimonial.fullMessage : testimonial.shortMessage}
                    </p>
                    
                    {/* Read More Button */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : testimonial.id)}
                      className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Show less
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Read full recommendation
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Facebook Link */}
                  {testimonial.fbLink && (
                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                      <a 
                        href={testimonial.fbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1877F2] hover:bg-[#0C63D4] text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <IoLogoFacebook className="w-5 h-5" />
                        View on Facebook
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
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
