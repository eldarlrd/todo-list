// Courtesy of Paul Fitzgerald https://codesandbox.io/s/989y0758np
import {
  type Ref,
  type StateUpdater,
  useState,
  useEffect,
  useRef
} from 'preact/hooks';

interface VisibilityControls {
  ref: Ref<HTMLDivElement>;
  isComponentVisible: boolean;
  setIsComponentVisible: StateUpdater<boolean>;
}

export const useComponentVisible = (
  initialIsVisible: boolean
): VisibilityControls => {
  const [isComponentVisible, setIsComponentVisible] =
    useState<boolean>(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event): void => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
};
