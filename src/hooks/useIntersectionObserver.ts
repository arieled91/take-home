import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  onLoad: () => void,
  loading = false,
  delay = 1000
) => {
  const intersectionObserver = useRef<IntersectionObserver | undefined>();
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // timeout avoids overloading the backend if an error occurs
    let timeout: ReturnType<typeof setTimeout>;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        timeout = setTimeout(() => {
          onLoad();
        }, delay);
      }
    };

    intersectionObserver.current = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: `${screen.height / 3}px`, // triggers just before reaching the bottom
      threshold: 0,
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, onLoad]);

  useEffect(() => {
    const observer = intersectionObserver.current;
    const loader = loaderRef.current;
    if (!observer || !loader || loading) return;

    observer.observe(loader);
    return () => {
      observer.unobserve(loader);
    };
  }, [loaderRef, loading]);

  return {
    loaderRef,
  };
};

export default useIntersectionObserver;
