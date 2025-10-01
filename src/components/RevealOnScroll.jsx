// import { useEffect, useRef } from "react";

// export const RevealOnScroll = ({ children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           element.classList.add("visible");
//           // Optional: unobserve after first reveal
//           // observer.unobserve(element);
//         } else {
//           element.classList.remove("visible");
//         }
//       },
//       { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
//     );
    
//     observer.observe(element);
    
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="reveal">
//       {children}
//     </div>
//   );
// };

// import { useEffect, useRef } from "react";

// export const RevealOnScroll = ({ children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           ref.current.classList.add("visible");
//         }
//       },
//       { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
//     );
    
//     if (ref.current) observer.observe(ref.current); // ✅ Fixed: observe instead of observer
    
//     return () => observer.disconnect();
//   }, []); // ✅ Added empty dependency array

//   return (
//     <div ref={ref} className="reveal">
//       {children}
//     </div>
//   );
// };

import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          // Optional: unobserve after first reveal
          // observer.unobserve(element);
        } else {
          element.classList.remove("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

// 1:26