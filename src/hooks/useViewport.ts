import { useEffect, useState } from "react";

export const useViewport = () => {
  const [viewport, setViewport] = useState<number>(visualViewport.width);

  useEffect(() => {
    const resizeListener = () => setViewport(visualViewport.width);
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return viewport;
};
