import { useCallback, useEffect, useRef } from "react";

type IntersectType = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

export default function useIntersectHandler(
  onIntersect: IntersectType,
  options?: IntersectionObserverInit
) {
  const ref = useRef(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer);
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    let observer: null | IntersectionObserver = null;
    if (ref.current) {
      observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
    }
    return () => observer?.disconnect();
  }, [ref, callback, options]);

  return ref;
}
