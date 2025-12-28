import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({
  children,
  direction = "up", // up, down, left, right, scale, fade
  delay = 0,
  duration = 700,
  distance = 30,
  once = true,
  threshold = 0.1,
  className = "",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "scale":
        return "scale(0.95)";
      case "fade":
        return "none";
      default:
        return `translateY(${distance}px)`;
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : getInitialTransform(),
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

// Stagger children animation wrapper
export const StaggerReveal = ({
  children,
  staggerDelay = 100,
  direction = "up",
  duration = 600,
  className = "",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <RevealOnScroll
              key={index}
              direction={direction}
              delay={isVisible ? index * staggerDelay : 0}
              duration={duration}
              once={true}
            >
              {child}
            </RevealOnScroll>
          ))
        : children}
    </div>
  );
};
