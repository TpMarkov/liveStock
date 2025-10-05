"use client";
import { useCallback, useRef } from "react";

export function useDebounce(callback: () => void, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  return useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(callback, delay);
  }, [callback, delay]);
}
