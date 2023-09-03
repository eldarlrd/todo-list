import { Eye } from 'lucide-preact';
import { useState, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { useVisible } from '@/hooks/useVisible.ts';

const VIEW_OPTIONS: string[] = ['All', 'Todo', 'In Progress', 'Done'];

export const ViewMenu = (): JSX.Element => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [viewSelected, setViewSelected] = useState<string>();

  const switchView = (view: string): void => {
    setViewSelected(view);
    setIsVisible(false);
    sessionStorage.setItem('view', view);
  };

  useEffect(() => {
    sessionStorage.view
      ? setViewSelected(sessionStorage.view as string)
      : setViewSelected('All');
  }, [setViewSelected]);

  return (
    <div ref={ref}>
      <button
        id='view-menu'
        type='button'
        onClick={(): void => {
          setIsVisible(!isVisible);
        }}
        title='Switch View'
        class={`${
          isVisible ? 'bg-slate-200 dark:bg-slate-700' : ''
        } hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-md py-1.5 pl-1.5 pr-2 text-sm font-medium duration-150`}>
        {viewSelected ? (
          <>
            <Eye aria-label='Eye' size='20' />
            {viewSelected}
          </>
        ) : null}
      </button>
      {isVisible && (
        <div
          id='view-dropdown'
          class='absolute right-3 mt-1.5 flex flex-col items-end justify-center overflow-clip rounded-md bg-slate-200 dark:bg-slate-700 md:mt-2'>
          {VIEW_OPTIONS.map(option => (
            <button
              key={option}
              type='button'
              onClick={(e: Event): void => {
                switchView((e.target as HTMLButtonElement).innerText);
              }}
              class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-28 min-w-fit justify-end px-2 py-0.5 font-medium active:bg-slate-400 md:w-32'>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
