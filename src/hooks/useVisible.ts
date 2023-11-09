// Courtesy of Paul Fitzgerald https://codesandbox.io/s/989y0758np
import {
  type Ref,
  type StateUpdater,
  useState,
  useEffect,
  useRef
} from 'preact/hooks';

interface VisibilityControls {
  refer: Ref<HTMLDivElement>;
  isVisible: boolean;
  setIsVisible: StateUpdater<boolean>;
}

export const useVisible = (initialIsVisible: boolean): VisibilityControls => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const refer = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event): void => {
    if (refer.current && !refer.current.contains(event.target as HTMLElement))
      setIsVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { refer, isVisible, setIsVisible };
};
