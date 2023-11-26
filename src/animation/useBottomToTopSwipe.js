import { useEffect } from "react";
import "../scssstyles/animation.scss";
const useBottomToTopSwipe = (elementSelectors, rootMargin = "0px") => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelectors);

    const addAnimation = () => {
      elements.forEach((element) => {
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
