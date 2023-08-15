import { type JSX } from 'preact/jsx-runtime';
import { type StateUpdater, useEffect } from 'preact/hooks';
import { useComponentVisible } from '@/hooks/useComponentVisible.ts';
import { Eye } from 'lucide-preact';

interface ViewControls {
  view: string | undefined;
  setView: StateUpdater<string | undefined>;
}

export const ViewMenu = ({ view, setView }: ViewControls): JSX.Element => {
  const viewOptions: string[] = ['All', 'Todo', 'In Progress', 'Done'];
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

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
        onClick={(): void => {
          setIsComponentVisible(!isComponentVisible);
        }}
        title='Switch View'
        class={`${
          isComponentVisible ? 'bg-slate-200 dark:bg-slate-700' : ''
        } hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) flex max-w-[8rem] items-center justify-end gap-1.5 whitespace-nowrap rounded-md px-2 font-medium transition-colors`}>
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
            'absolute right-6 mt-2 flex flex-col items-end justify-center overflow-clip rounded-md bg-slate-200 dark:bg-slate-700'
          }>
          {viewOptions.map(option => (
            <button
              key={option}
              onClick={(e: Event): void => {
                switchView((e.target as HTMLButtonElement).innerText);
              }}
              class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-32 min-w-fit justify-end px-2 py-0.5 font-medium active:bg-slate-400'>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
