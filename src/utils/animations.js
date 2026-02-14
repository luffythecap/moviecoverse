// utils/animations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps = {}) => {
  gsap.utils.toArray(target).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 }, // initial state
      {
        ...animationProps,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'play none none none',
          start: 'top 85%',
          ...scrollProps,
        },
      }
    );
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
