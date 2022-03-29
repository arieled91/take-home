import { useCallback, useEffect, useRef } from "react";

/**
 * This hook checks if the component is mounted
 * */
const useMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
};

export default useMounted;
