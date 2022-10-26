import { useEffect, useState } from "react";

// viewport size handle custom hook
export const useViewport = () => {
  const [viewport, setViewport] = useState<number>(visualViewport.width);

  useEffect(() => {
    const resizeListener = () => setViewport(visualViewport.width);
    window.addEventListener("resize", resizeListener);
  }, []);

  return viewport;
};
