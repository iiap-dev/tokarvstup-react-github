import { useRef, useEffect, useCallback } from 'react';

const initialValue = {
  innerWidth: 0,
  innerHeight: 0,
  outerWidth: 0,
  outerHeight: 0,
}

// TODO refactor to handle more breakpoints
export function useWindowSize(cb) {
  const windowSize = useRef(initialValue);

  const fetchWindowDimensionsAndSave = useCallback(() => {
    windowSize.current = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    };
    cb({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
  }, [cb])

  // run on mount
  useEffect(() => {
    // run only once
    fetchWindowDimensionsAndSave();
  }, [fetchWindowDimensionsAndSave]);

  // set resize handler once on mount and clean before unmount
  useEffect(() => {
    window.addEventListener('resize', fetchWindowDimensionsAndSave);
    return () => {
      window.removeEventListener('resize', fetchWindowDimensionsAndSave);
    };
  }, [fetchWindowDimensionsAndSave]);

  return windowSize.current;
}
