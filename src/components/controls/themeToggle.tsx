import { Sun, Moon } from 'lucide-preact';
import { useState, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

// Check for Local Storage Theme Mode
const root: HTMLElement = document.documentElement;
const themeCheck = (): void => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    root.style.colorScheme = 'dark';
    root.classList.add('dark');
  } else {
    root.style.colorScheme = 'light';
    root.classList.remove('dark');
  }
};

export const ThemeToggle = ({
  identifier
}: {
  identifier: string;
}): JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>();
  const iconSwitch = (): void => {
    root.classList.contains('dark') ? setIsDark(true) : setIsDark(false);
  };

  // Avoid FOUC
  useEffect(iconSwitch, []);

  const themeToggle = (): void => {
    isDark ? (localStorage.theme = 'light') : (localStorage.theme = 'dark');
    root.style.colorScheme === 'dark'
      ? (root.style.colorScheme = 'light')
      : (root.style.colorScheme = 'dark');
    root.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button
      type='button'
      title='Toggle Theme'
      id={identifier}
      onClick={themeToggle}
      class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) lg:(w-14, px-4, py-3) xl:(w-16, px-5, py-4) w-12 rounded px-3 py-2 leading-4 transition-colors'>
      {isDark ? (
        <Sun
          aria-label='Sun'
          strokeWidth='2.25'
          class='scale-110 transition-transform lg:scale-125 xl:scale-150'
        />
      ) : (
        <Moon
          aria-label='Moon'
          strokeWidth='2.25'
          class='scale-110 transition-transform lg:scale-125 xl:scale-150'
        />
      )}
    </button>
  );
};

themeCheck();
