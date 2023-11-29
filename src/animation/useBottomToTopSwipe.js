import { useEffect } from "react";
import "../scssstyles/animation.scss";

const useBottomToTopSwipe = (elementSelectors, rootMargin = "200px") => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelectors);

    const addAnimation = () => {
      elements.forEach((element) => {
        element.style.transform = "translateY(0)";
        element.style.opacity = "1";
        element.classList.add("swipe-up");
      });
    };

    const animationEndHandler = () => {
      elements.forEach((element) => {
        element.classList.remove("swipe-up");
      });
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

    elements.forEach((element) => {
      // Set initial styles
      element.style.transform = "translateY(100%)";
      element.style.opacity = "0";
      // Add CSS transition for a smooth transition
      element.style.transition =
        "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [elementSelectors, rootMargin]);
};

export default useBottomToTopSwipe;
