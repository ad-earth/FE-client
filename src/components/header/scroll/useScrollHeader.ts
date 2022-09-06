import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const SCROLL_DELTA = 87;
const HEADER_HEIGHT = 87;

export const useScrHeaderVisible = () => {
  const [previousScroll, setPreviousScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = throttle(() => {
      const currentScroll = window.pageYOffset;

      if (Math.abs(previousScroll - currentScroll) <= SCROLL_DELTA) {
        return;
      }

      if (currentScroll > previousScroll && currentScroll > HEADER_HEIGHT) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPreviousScroll(currentScroll);
    }, 300);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return {
    isHeaderVisible: isVisible,
  };
};
