import { useEffect } from "react";
import "../scssstyles/animation.scss";

const useTopToBottomSwipe = (elementSelector, rootMargin = "0px") => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);

    if (!element) {
      console.error(`Element with selector "${elementSelector}" not found.`);
      return;
    }

    const addAnimation = () => {
      element.classList.add("swipe-down");
    };

    const animationEndHandler = () => {
      element.classList.remove("swipe-down");
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          addAnimation();
          observer.unobserve(entry.target); // Stop observing after the animation has started
        } else {
          animationEndHandler();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementSelector, rootMargin]);
};

export default useTopToBottomSwipe;
