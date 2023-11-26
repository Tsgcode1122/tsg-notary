import { useEffect } from "react";
import "../scssstyles/animation.scss";
const useLeftToRightSwipe = (elementSelector, rootMargin = "0px") => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);

    const addAnimation = () => {
      element.classList.add("swipe-right");
    };

    const animationEndHandler = () => {
      element.classList.remove("swipe-right");
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addAnimation();
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
      observer.unobserve(element);
    };
  }, [elementSelector, rootMargin]);
};

export default useLeftToRightSwipe;
