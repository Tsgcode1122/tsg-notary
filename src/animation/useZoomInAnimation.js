import { useEffect } from "react";
import "../scssstyles/animation.scss";
const useZoomInAnimation = (elementSelectors, rootMargin = "0px") => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelectors);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elements.forEach((element) => {
            element.classList.add("zoom-in");
          });
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

export default useZoomInAnimation;
