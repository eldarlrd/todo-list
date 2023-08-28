import { type JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import { useComponentVisible } from '@/hooks/useComponentVisible.ts';
import { Eye } from 'lucide-preact';

export const ViewMenu = (): JSX.Element => {
  const viewOptions: string[] = ['All', 'Todo', 'In Progress', 'Done'];
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [view, setView] = useState<string>();

  const switchView = (selected: string): void => {
    setView(selected);
    setIsComponentVisible(false);
    sessionStorage.setItem('view', selected);
  };

  useEffect(() => {
    sessionStorage.view
      ? setView(sessionStorage.view as string)
      : setView('All');
  }, [setView]);

  return (
    <div ref={ref}>
      <button
        id='viewMenu'
        type='button'
        onClick={(): void => {
          setIsComponentVisible(!isComponentVisible);
        }}
        title='Switch View'
        class={`${
          isComponentVisible ? 'bg-slate-200 dark:bg-slate-700' : ''
        } hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-md py-1.5 pl-1.5 pr-2 text-sm font-medium duration-150`}>
        {view ? (
          <>
            <Eye aria-label='Eye' size='20' />
            {view}
          </>
        ) : null}
      </button>
      {isComponentVisible && (
        <div
          id='viewDropdown'
          class={
            'absolute right-3 mt-1.5 flex flex-col items-end justify-center overflow-clip rounded-md bg-slate-200 dark:bg-slate-700 md:mt-2'
          }>
          {viewOptions.map(option => (
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
