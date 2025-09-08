// Courtesy of Paul Fitzgerald https://codesandbox.io/s/989y0758np
import { type RefObject } from 'preact';
import {
  type StateUpdater,
  useState,
  useEffect,
  useRef,
  type Dispatch
} from 'preact/hooks';

interface VisibilityControls {
  refer: RefObject<HTMLDivElement>;
  isVisible: boolean;
  setIsVisible: Dispatch<StateUpdater<boolean>>;
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

    return (): void => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { refer, isVisible, setIsVisible };
};
